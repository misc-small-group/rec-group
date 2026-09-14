/* All dates use Beijing time, regardless of the reader's device timezone. */
(() => {
  const root = document.getElementById('discussion-calendar');
  if (!root) return;
  const { timezone, firstDate, start, end } = root.dataset;
  const firstDay = Date.parse(`${firstDate}T00:00:00Z`);
  const dayMillis = 86400000;
  const monthTitle = document.getElementById('calendar-month-title');
  const days = document.getElementById('calendar-days');
  const nextDate = document.getElementById('discussion-next-date');
  const nextLabel = document.getElementById('discussion-next-label');
  const beijing = new Intl.DateTimeFormat('en-CA', {
    timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit'
  });

  function todayAt(now) {
    const parts = Object.fromEntries(beijing.formatToParts(now).map(part => [part.type, part.value]));
    return Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day));
  }

  function dateKey(day) {
    return new Date(day).toISOString().slice(0, 10);
  }

  function nextMeeting(now) {
    let day = todayAt(now);
    day += ((5 - new Date(day).getUTCDay() + 7) % 7) * dayMillis;
    if (now.getTime() >= Date.parse(`${dateKey(day)}T${end}:00+08:00`)) day += 7 * dayMillis;
    return Math.max(day, firstDay);
  }

  let shownMonth = new Date(todayAt(new Date()));
  shownMonth.setUTCDate(1);

  function render() {
    const now = new Date();
    const today = todayAt(now);
    const upcoming = nextMeeting(now);
    const meetingStart = Date.parse(`${dateKey(upcoming)}T${start}:00+08:00`);
    nextLabel.textContent = now.getTime() >= meetingStart ? '正在讨论' : '下一场讨论';
    nextDate.textContent = new Intl.DateTimeFormat('zh-CN', {
      timeZone: 'UTC', month: 'long', day: 'numeric', weekday: 'long'
    }).format(upcoming);
    const year = shownMonth.getUTCFullYear();
    const month = shownMonth.getUTCMonth();
    monthTitle.textContent = `${year} 年 ${month + 1} 月`;
    const offset = (shownMonth.getUTCDay() + 6) % 7;
    const count = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    const rows = Math.ceil((offset + count) / 7);
    days.replaceChildren();

    for (let row = 0; row < rows; row += 1) {
      const tr = document.createElement('tr');
      for (let column = 0; column < 7; column += 1) {
        const cell = document.createElement('td');
        const number = row * 7 + column - offset + 1;
        if (number >= 1 && number <= count) {
          const day = Date.UTC(year, month, number);
          const isMeeting = column === 4 && day >= firstDay;
          const date = document.createElement('time');
          date.dateTime = dateKey(day);
          date.textContent = String(number);
          cell.append(date);
          if (day === today) {
            cell.classList.add('calendar-today');
            date.setAttribute('aria-current', 'date');
          }
          if (isMeeting) {
            cell.classList.add('calendar-meeting');
            const label = document.createElement('span');
            label.className = 'calendar-event';
            label.textContent = '讨论';
            cell.append(label);
            cell.setAttribute('aria-label', `${year}年${month + 1}月${number}日，周五讨论，北京时间 ${start} 至 ${end}`);
          }
        } else {
          cell.className = 'calendar-empty';
        }
        tr.append(cell);
      }
      days.append(tr);
    }
  }

  document.getElementById('calendar-previous').addEventListener('click', () => {
    shownMonth.setUTCMonth(shownMonth.getUTCMonth() - 1);
    render();
  });
  document.getElementById('calendar-next').addEventListener('click', () => {
    shownMonth.setUTCMonth(shownMonth.getUTCMonth() + 1);
    render();
  });
  document.getElementById('calendar-current').addEventListener('click', () => {
    shownMonth = new Date(todayAt(new Date()));
    shownMonth.setUTCDate(1);
    render();
  });
  render();
  setInterval(render, 60000);
})();
