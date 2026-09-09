---
layout: page
title: Assistant
icon: fas fa-comments
order: 5
permalink: /assistant/
---

<link rel="stylesheet" href="{{ '/assets/css/paper-assistant.css' | relative_url }}">

<div class="paper-assistant" id="paper-assistant" data-api-base="{{ site.data.assistant.api_base | escape }}">
  <div class="pa-intro">
    <span class="pa-eyebrow">SMALL GROUP · PAPER CHAT</span>
    <p>从一篇论文开始，把方法、实验和没想明白的地方聊清楚。</p>
    <span class="pa-status" id="pa-status" role="status">正在检查连接…</span>
  </div>

  <form class="pa-connect" id="pa-connect">
    <div>
      <label for="pa-code">小组访问码</label>
      <input id="pa-code" type="password" autocomplete="off" placeholder="输入管理员提供的访问码" required maxlength="256">
    </div>
    <button type="submit" id="pa-connect-button">连接助手</button>
    <p class="pa-help">访问码仅用于连接小组助手，无需填写模型 API Key。</p>
  </form>

  <div id="pa-chat" hidden>
    <div class="pa-toolbar">
      <div class="pa-paper-picker">
        <label for="pa-paper">当前论文</label>
        <select id="pa-paper" aria-label="选择论文"></select>
      </div>
      <button type="button" class="pa-secondary" id="pa-new">新建对话</button>
      <button type="button" class="pa-link-button" id="pa-disconnect">断开</button>
    </div>
    <div class="pa-source">
      <span id="pa-scope"></span>
      <a id="pa-source-link" href="https://arxiv.org/" target="_blank" rel="noopener noreferrer">查看论文原文 ↗</a>
    </div>
    <div class="pa-messages" id="pa-messages" role="log" aria-label="论文对话" aria-live="polite"></div>
    <div class="pa-suggestions" id="pa-suggestions">
      <button type="button" data-question="这篇论文要解决什么问题？核心方法是什么？">先讲清核心方法</button>
      <button type="button" data-question="给我一个具体的小例子，解释论文的方法如何工作。">用一个例子解释</button>
      <button type="button" data-question="材料里有哪些实验结论？哪些内容还没有足够证据？">看看实验与局限</button>
    </div>
    <form id="pa-form" class="pa-composer">
      <label class="pa-sr-only" for="pa-question">你的问题</label>
      <textarea id="pa-question" placeholder="问一个问题，也可以接着上一轮追问…" rows="3" maxlength="4000" required></textarea>
      <div class="pa-composer-bottom">
        <span id="pa-progress" role="status">基于所选论文的已读取材料回答</span>
        <button type="button" id="pa-stop" class="pa-secondary" hidden>停止</button>
        <button type="submit" id="pa-send">发送 ↑</button>
      </div>
    </form>
  </div>
  <p class="pa-error" id="pa-error" role="alert" hidden></p>
  <p class="pa-footnote">DeepSeek V4 Flash · 回答可能有误，请结合原文判断。当前为临时连接测试。</p>
</div>

<script defer src="{{ '/assets/js/paper-assistant.js' | relative_url }}"></script>
