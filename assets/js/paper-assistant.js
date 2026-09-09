(() => {
  'use strict';
  const app = document.getElementById('paper-assistant');
  if (!app) return;
  const el = name => document.getElementById('pa-' + name);
  const base = (app.dataset.apiBase || '').replace(/\/$/, '');
  const storageKey = 'small-group-paper-chat:' + base;
  const requestedPaper = new URLSearchParams(location.search).get('paper');
  let saved = {};
  try { saved = JSON.parse(sessionStorage.getItem(storageKey) || '{}'); } catch (_) { /* A new tab can start fresh. */ }
  let token = saved.token || '', sessionId = saved.sessionId || '', currentJob = null, papers = [], busy = false;
  let pollGeneration = 0;
  function persist() { try { sessionStorage.setItem(storageKey, JSON.stringify({token, sessionId})); } catch (_) { /* Private browser storage may be unavailable. */ } }
  function status(text, state = '') { el('status').textContent = text; el('status').dataset.state = state; }
  function error(text = '') { el('error').textContent = text; el('error').hidden = !text; }
  function setBusy(value) {
    busy = value;
    for (const name of ['send', 'new', 'paper', 'question', 'disconnect']) el(name).disabled = value;
    el('stop').hidden = !value;
    el('send').hidden = value;
    el('suggestions').hidden = value || Boolean(sessionId);
  }
  async function request(path, options = {}) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(base + path, {
        ...options, signal: controller.signal, cache: 'no-store', credentials: 'omit',
        headers: {...(token ? {Authorization: 'Bearer ' + token} : {}),
                  ...(options.body ? {'Content-Type': 'application/json'} : {}), ...(options.headers || {})}
      });
      let data;
      try { data = await response.json(); } catch (_) { throw new Error('后端没有返回有效响应，请检查连接。'); }
      if (!response.ok) {
        if (response.status === 401 && path !== '/api/connect') {
          token = ''; sessionId = ''; persist(); el('connect').hidden = false; el('chat').hidden = true;
        }
        throw new Error(typeof data.detail === 'string' ? data.detail : '请求未完成，请重试。');
      }
      return data;
    } catch (problem) {
      if (problem.name === 'AbortError') throw new Error('连接超时。后台请求可能仍在进行，刷新页面可以继续查看。');
      if (problem instanceof TypeError) throw new Error('暂时连接不到后端。临时入口可能已经关闭，请联系管理员。');
      throw problem;
    } finally { clearTimeout(timeout); }
  }
  // Render a small, safe Markdown subset using text nodes only.
  function inline(node, text) {
    const pattern = /\*\*([^*]+)\*\*|`([^`]+)`/g;
    let offset = 0;
    for (const match of text.matchAll(pattern)) {
      node.append(document.createTextNode(text.slice(offset, match.index)));
      const part = document.createElement(match[1] ? 'strong' : 'code');
      part.textContent = match[1] || match[2]; node.append(part);
      offset = match.index + match[0].length;
    }
    node.append(document.createTextNode(text.slice(offset)));
  }
  function render(body, text) {
    body.replaceChildren();
    let code = null, list = null;
    for (const line of text.split('\n')) {
      if (line.startsWith('```')) {
        if (code) { code = null; } else { code = document.createElement('pre'); body.append(code); }
        list = null; continue;
      }
      if (code) { code.textContent += line + '\n'; continue; }
      if (!line.trim()) { list = null; continue; }
      let node;
      if (/^#{1,6}\s/.test(line)) { node = document.createElement('h3'); inline(node, line.replace(/^#{1,6}\s+/, '')); list = null; }
      else if (/^[-*]\s|^\d+\.\s/.test(line)) {
        if (!list) { list = document.createElement('ul'); body.append(list); }
        node = document.createElement('li'); inline(node, line.replace(/^([-*]|\d+\.)\s+/, '')); list.append(node); continue;
      } else if (/^>\s?/.test(line)) { node = document.createElement('blockquote'); inline(node, line.replace(/^>\s?/, '')); list = null; }
      else { node = document.createElement('p'); inline(node, line); list = null; }
      body.append(node);
    }
  }
  function message(role, text) {
    el('messages').querySelector('.pa-empty')?.remove();
    const item = document.createElement('article'); item.className = 'pa-message'; item.dataset.role = role;
    const label = document.createElement('div'); label.className = 'pa-message-label'; label.textContent = role === 'user' ? '你' : '论文助手';
    const body = document.createElement('div'); body.className = 'pa-message-body'; render(body, text);
    item.append(label, body); el('messages').append(item); el('messages').scrollTop = el('messages').scrollHeight;
    return body;
  }
  function empty() {
    el('messages').replaceChildren();
    const tip = document.createElement('div'); tip.className = 'pa-empty'; tip.textContent = '选好论文后，开始第一个问题。'; el('messages').append(tip);
  }
  function source() {
    const paper = papers.find(p => p.id === el('paper').value);
    el('scope').textContent = paper ? '阅读范围：' + paper.reading_scope : '';
    if (paper) el('source-link').href = 'https://arxiv.org/abs/' + encodeURIComponent(paper.id) + 'v' + Number(paper.version);
  }
  function phase(job) {
    const phases = {queued: '正在等待后端处理…', starting: '正在连接论文助手…', reading: '正在阅读论文材料…', thinking: '正在分析论文材料…', answering: '正在整理回答…', completed: '回答完成 · 可继续追问'};
    return phases[job.phase] || '正在处理…';
  }
  async function poll(jobId, body) {
    const generation = ++pollGeneration;
    currentJob = jobId; setBusy(true);
    let failures = 0, lastText = '';
    while (generation === pollGeneration) {
      try {
        const job = await request('/api/jobs/' + jobId); failures = 0;
        el('progress').textContent = phase(job);
        if (job.answer && job.answer !== lastText) {
          const log = el('messages'), follow = log.scrollHeight - log.clientHeight - log.scrollTop < 80;
          render(body, job.answer); body.classList.remove('pa-pending'); lastText = job.answer;
          if (follow) log.scrollTop = log.scrollHeight;
        }
        if (['completed', 'failed', 'cancelled'].includes(job.status)) {
          if (job.status !== 'completed') { render(body, job.error || '已停止。'); el('progress').textContent = job.status === 'cancelled' ? '已停止，可继续提问' : '本次回答未完成'; }
          currentJob = null; setBusy(false); el('question').focus(); return;
        }
        if (!lastText) { body.textContent = phase(job); body.classList.add('pa-pending'); }
        else body.classList.remove('pa-pending');
      } catch (problem) {
        failures += 1;
        if (failures >= 3) { error(problem.message); setBusy(false); el('progress').textContent = '连接中断，刷新页面可恢复请求状态'; return; }
      }
      await new Promise(resolve => setTimeout(resolve, failures ? 2000 : 1000));
    }
  }
  async function restore() {
    const data = await request('/api/papers'); papers = data.papers;
    el('paper').replaceChildren();
    for (const paper of papers) { const option = document.createElement('option'); option.value = paper.id; option.textContent = paper.title; el('paper').append(option); }
    el('connect').hidden = true; el('chat').hidden = false; status('已连接 · 论文阅读助手', 'ready');
    empty(); source();
    if (requestedPaper && papers.some(p => p.id === requestedPaper)) { el('paper').value = requestedPaper; source(); }
    if (sessionId) {
      const session = await request('/api/sessions/' + sessionId);
      if (requestedPaper && papers.some(p => p.id === requestedPaper) && session.paper.id !== requestedPaper) { newSession(); return; }
      el('paper').value = session.paper.id; source();
      for (const entry of session.messages) message(entry.role, entry.content);
      el('suggestions').hidden = Boolean(session.messages.length);
      if (session.active_job) {
        const body = message('assistant', '正在恢复后台请求…');
        void poll(session.active_job, body);
      }
    }
    if (!papers.length) { el('send').disabled = true; error('后端论文库暂时为空，请先运行论文抓取。'); }
  }
  el('connect').addEventListener('submit', async event => {
    event.preventDefault(); error(); el('connect-button').disabled = true;
    try {
      const data = await request('/api/connect', {method: 'POST', body: JSON.stringify({access_code: el('code').value})});
      token = data.token; sessionId = ''; el('code').value = ''; persist(); await restore();
    } catch (problem) { error(problem.message); }
    finally { el('connect-button').disabled = false; }
  });
  function newSession() { if (busy) return; sessionId = ''; currentJob = null; persist(); empty(); source(); el('suggestions').hidden = false; error(); el('progress').textContent = '基于所选论文的已读取材料回答'; }
  el('new').addEventListener('click', newSession);
  el('paper').addEventListener('change', newSession);
  el('disconnect').addEventListener('click', () => { token = ''; sessionId = ''; persist(); el('chat').hidden = true; el('connect').hidden = false; status('后端可用，请输入访问码'); });
  el('form').addEventListener('submit', async event => {
    event.preventDefault(); if (busy) return;
    const question = el('question').value.trim(); if (!question) return;
    error(); setBusy(true);
    try {
      if (!sessionId) { const session = await request('/api/sessions', {method: 'POST', body: JSON.stringify({paper_id: el('paper').value})}); sessionId = session.id; persist(); }
      const job = await request('/api/sessions/' + sessionId + '/messages', {method: 'POST', body: JSON.stringify({question, request_id: crypto.randomUUID()})});
      message('user', question); const body = message('assistant', phase(job)); el('question').value = '';
      await poll(job.id, body);
    } catch (problem) { error(problem.message); setBusy(false); }
  });
  el('stop').addEventListener('click', async () => {
    if (!currentJob) return; el('stop').disabled = true;
    try { await request('/api/jobs/' + currentJob + '/cancel', {method: 'POST'}); }
    catch (problem) { error(problem.message); }
    finally { el('stop').disabled = false; }
  });
  el('question').addEventListener('keydown', event => { if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') { event.preventDefault(); el('form').requestSubmit(); } });
  for (const button of el('suggestions').querySelectorAll('button')) button.addEventListener('click', () => { el('question').value = button.dataset.question; el('question').focus(); });
  (async () => {
    try {
      const url = new URL(base);
      if (url.protocol !== 'https:' && !['localhost', '127.0.0.1'].includes(url.hostname)) throw new Error('助手入口尚未配置。');
      await request('/api/health'); status('后端可用，请输入访问码', 'ready');
      if (token) await restore();
    } catch (problem) { status('暂未连接', 'error'); error(problem.message || '助手入口尚未配置。'); }
  })();
})();
