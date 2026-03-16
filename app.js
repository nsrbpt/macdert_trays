// ══════════════════════════════════════════
// MACDERT TRAYS — app.js (New Dataset Schema)
// ══════════════════════════════════════════
const KEY = 'macderttrays_v1';
let S = {
  solved: {}, bookmarks: {}, notes: {}, revisions: {}, attempts: {},
  xp: 0, streak: 0, bestStreak: 0, lastSolveDate: null, heatmap: {},
  streakFreezes: 1, freezeUsed: false, lastFreezeReset: null
};

const $ = id => document.getElementById(id);
const qt = s => document.querySelectorAll(s);
const TOTAL = 750;

function load() {
  try { const d = localStorage.getItem(KEY); if (d) S = { ...S, ...JSON.parse(d) }; } catch (e) {}
  checkFreezeReset();
  updateTopStats();
  buildSidebar();
  renderSheet();
  renderDash();
  checkBadges();
}
function save() { localStorage.setItem(KEY, JSON.stringify(S)); }

// ══ FREEZE RESET ══
function checkFreezeReset() {
  const t = new Date(), wk = t.getFullYear() + '-' + getWeek(t);
  if (S.lastFreezeReset !== wk) { S.streakFreezes = 1; S.freezeUsed = false; S.lastFreezeReset = wk; save(); }
}
function getWeek(d) {
  const d2 = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
  const dayNum = d2.getUTCDay() || 7;
  d2.setUTCDate(d2.getUTCDate() + 4 - dayNum);
  const v = new Date(Date.UTC(d2.getUTCFullYear(), 0, 1));
  return Math.ceil((((d2 - v) / 86400000) + 1) / 7);
}
function todayStr() { return new Date().toISOString().split('T')[0]; }

// ══ RANKS ══
const RANKS = [
  { n: 'NEWBIE', min: 0, max: 300 }, { n: 'BEGINNER', min: 300, max: 800 },
  { n: 'APPRENTICE', min: 800, max: 1800 }, { n: 'WARRIOR', min: 1800, max: 3500 },
  { n: 'EXPERT', min: 3500, max: 6000 }, { n: 'ELITE', min: 6000, max: 10000 },
  { n: 'MASTER', min: 10000, max: Infinity }
];
function getRank(xp) { return RANKS.find(r => xp >= r.min && xp < r.max) || RANKS[0]; }

// ══ HELPERS ══
function allProblems() {
  const list = [];
  TOPICS.forEach(t => t.problems.forEach(p => list.push(p)));
  return list;
}
function getProb(id) {
  for (let t of TOPICS) { const p = t.problems.find(x => x.id === id); if (p) return p; }
  return null;
}
function getXP(p) {
  if (p.difficulty === 'easy') return 10;
  if (p.difficulty === 'medium') return 20;
  return 35;
}
function platBdg(platform) {
  if (platform === 'leetcode') return '<span class="bdg b-lc">LC</span>';
  if (platform === 'codeforces') return '<span class="bdg b-cf">CF</span>';
  if (platform === 'codechef') return '<span class="bdg b-cc">CC</span>';
  return '';
}
function getProblemLink(p) {
  if (p.platform === "codechef") {
    return "https://www.codechef.com/problems/" + p.code.trim().toUpperCase();
  }
  if (p.platform === "leetcode") {
    return p.link;
  }
  if (p.platform === "codeforces") {
    return p.link;
  }
  return "#";
}
function ratingColor(r) {
  if (r >= 2400) return 'var(--hard)';
  if (r >= 2000) return 'var(--medium)';
  if (r >= 1600) return 'var(--cf)';
  if (r >= 1200) return 'var(--easy)';
  return 'var(--text-secondary)';
}

// ══════════════════════════════════════════
//  NAVIGATION
// ══════════════════════════════════════════
function switchPage(pid, btn) {
  qt('.page').forEach(p => p.classList.remove('active'));
  qt('.nav-item').forEach(n => n.classList.remove('act'));
  $(pid).classList.add('active');
  if (btn) btn.classList.add('act');
  if (pid === 'p-dash') renderDash();
  if (pid === 'p-bk') renderBookmarks();
  if (pid === 'p-rev') renderRevisions();
  if (pid === 'p-lb') renderLB();
  if (pid === 'p-bdg') renderBadges();
}

function updateTopStats() {
  const rn = getRank(S.xp);
  const nx = RANKS[RANKS.indexOf(rn) + 1];
  const pct = nx ? Math.min(100, ((S.xp - rn.min) / (nx.min - rn.min)) * 100) : 100;
  $('rankLbl').textContent = rn.n;
  $('xpPts').textContent = S.xp + ' XP';
  $('xpFill').style.width = pct + '%';
  $('streakVal').textContent = S.streak;
  $('freezeLbl').textContent = '🧊 ' + S.streakFreezes + ' Freeze left';
  $('btnFreeze').disabled = S.streakFreezes === 0 || S.freezeUsed;
  const solCount = Object.keys(S.solved).length;
  $('nb-sheet').textContent = solCount + '/' + TOTAL;
  $('nb-bk').textContent = Object.keys(S.bookmarks).length;
  $('nb-rev').textContent = Object.keys(S.revisions).length;
}

// ══════════════════════════════════════════
//  SIDEBAR
// ══════════════════════════════════════════
function buildSidebar() {
  let html = '';
  TOPICS.forEach(t => {
    const tot = t.problems.length;
    const sol = t.problems.filter(p => S.solved[p.id]).length;
    html += '<div class="nav-item" data-tid="' + t.id + '">' +
      '<span class="nav-icon">' + t.icon + '</span>' +
      '<span style="flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + t.name + '</span>' +
      '<span class="nav-badge" id="nsb-' + t.id + '">' + sol + '/' + tot + '</span></div>';
  });
  $('navTopics').innerHTML = html;
}

// ══════════════════════════════════════════
//  FILTER + SEARCH
// ══════════════════════════════════════════
let currentFilter = 'all';
function matchesFilter(p, q) {
  if (q) {
    const s = q.toLowerCase();
    const inName = p.name.toLowerCase().includes(s);
    const inCode = p.code && p.code.toLowerCase().includes(s);
    const inTags = p.tags && p.tags.some(tg => tg.toLowerCase().includes(s));
    const inCos = p.companies && p.companies.some(c => c.toLowerCase().includes(s));
    if (!inName && !inCode && !inTags && !inCos) return false;
  }
  if (currentFilter === 'easy') return p.difficulty === 'easy';
  if (currentFilter === 'med') return p.difficulty === 'medium';
  if (currentFilter === 'hard') return p.difficulty === 'hard';
  if (currentFilter === 'uns') return !S.solved[p.id];
  if (currentFilter === 'bk') return !!S.bookmarks[p.id];
  if (currentFilter === 'str') return p.striver === true;
  if (currentFilter === 'lc') return p.platform === 'leetcode';
  if (currentFilter === 'cf') return p.platform === 'codeforces';
  if (currentFilter === 'cc') return p.platform === 'codechef';
  return true;
}

// ══════════════════════════════════════════
//  PROBLEM ROW
// ══════════════════════════════════════════
function rowHTML(p) {
  const sol = !!S.solved[p.id], bk = !!S.bookmarks[p.id], rev = !!S.revisions[p.id], hn = !!S.notes[p.id];
  const at = S.attempts[p.id] || 0;
  const df = p.difficulty === 'easy' ? 'b-ez' : (p.difficulty === 'medium' ? 'b-md' : 'b-hd');
  const striver = p.striver ? '<span class="bdg b-str">⭐ STRIVER</span>' : '';
  const coTags = (p.companies || []).slice(0, 3).map(c => '<span class="co-tg text-mono">' + c + '</span>').join('');
  const rc = ratingColor(p.rating);

  // Platform link button
  const linkBtn = '<a class="act-btn" style="color:' + (p.platform === 'leetcode' ? 'var(--lc)' : p.platform === 'codeforces' ? 'var(--cf)' : '#8d6e63') +
    ';border-color:' + (p.platform === 'leetcode' ? 'rgba(255,161,22,0.4)' : p.platform === 'codeforces' ? 'rgba(30,136,229,0.4)' : 'rgba(92,64,51,0.4)') +
    ';" href="' + getProblemLink(p) + '" target="_blank" rel="noopener noreferrer" onclick="logAttempt(\'' + p.id + '\')">' + p.code + ' ↗</a>';

  // Title link: opens platform externally
  const titleLink = '<a class="pname" href="' + getProblemLink(p) + '" target="_blank" rel="noopener noreferrer" onclick="logAttempt(\'' + p.id + '\')" title="' + p.name + '">' + p.name + '</a>';

  return '<div class="prow ' + (sol ? 'svd' : '') + '" id="pr-' + p.id + '">' +
    '<div class="chk ' + (sol ? 'dn' : '') + '" onclick="toggleSolve(\'' + p.id + '\',' + getXP(p) + ',this)"></div>' +
    '<div class="pinfo">' + titleLink + striver + platBdg(p.platform) + '</div>' +
    '<div class="bdg ' + df + '">' + p.difficulty + '</div>' +
    '<div class="cf-rt" style="color:' + rc + '">#' + p.rating + '</div>' +
    '<div class="co-list">' + coTags + '</div>' +
    '<div>' + linkBtn + '</div>' +
    '<button class="act-btn" onclick="openDetail(\'' + p.id + '\')" title="View Problem">📄</button>' +
    '<button class="ico n ' + (hn ? 'on' : '') + '" onclick="openNote(\'' + p.id + '\')" title="Notes">📝</button>' +
    '<button class="ico b ' + (bk ? 'on' : '') + '" onclick="toggleBk(\'' + p.id + '\',this)" title="Bookmark">🔖</button>' +
    '<button class="ico r ' + (rev ? 'on' : '') + '" onclick="toggleRev(\'' + p.id + '\',this)" title="Revision">🔄</button>' +
    '</div>';
}

// ══════════════════════════════════════════
//  RENDER SHEET
// ══════════════════════════════════════════
function renderSheet() {
  const q = $('searchInp').value.trim();
  let vis = 0, html = '';
  TOPICS.forEach(t => {
    const pFil = t.problems.filter(p => matchesFilter(p, q));
    if (!pFil.length) return;
    vis += pFil.length;
    const tot = t.problems.length;
    const sol = t.problems.filter(p => S.solved[p.id]).length;
    const pct = tot ? Math.round((sol / tot) * 100) : 0;
    const circ = 2 * Math.PI * 10, dash = (circ * pct / 100).toFixed(1);

    html += '<div class="tw" id="tw-' + t.id + '">' +
      '<div class="thdr op" onclick="toggleAcc(this)">' +
      '<div style="width:4px;height:24px;border-radius:4px;background:' + t.color + '"></div>' +
      '<span class="ticon">' + t.icon + '</span>' +
      '<span class="tnm">' + t.name + '</span>' +
      '<span class="text-mono" style="font-size:11px;color:var(--text-secondary)">' + sol + '/' + tot + ' (' + pct + '%)</span>' +
      '<svg width="24" height="24" viewBox="0 0 24 24" style="margin-left:10px"><circle cx="12" cy="12" r="10" fill="none" stroke="var(--border-hover)" stroke-width="3"/>' +
      '<circle cx="12" cy="12" r="10" fill="none" stroke="' + t.color + '" stroke-width="3" stroke-dasharray="' + dash + ' ' + circ.toFixed(1) + '" stroke-dashoffset="' + (circ * 0.25).toFixed(1) + '" stroke-linecap="round" transform="rotate(-90 12 12)"/></svg>' +
      '</div>' +
      '<div class="tbody op">' + pFil.map(rowHTML).join('') + '</div></div>';
  });
  $('sheetBody').innerHTML = html;
  $('sheetSub').textContent = 'Showing: ' + vis + ' problems';
}
function toggleAcc(el) { el.classList.toggle('op'); el.nextElementSibling.classList.toggle('op'); }

// ══════════════════════════════════════════
//  ACTIONS
// ══════════════════════════════════════════
function logAttempt(id) { S.attempts[id] = (S.attempts[id] || 0) + 1; save(); }

function toggleSolve(id, xp, el) {
  const td = todayStr(), was = !!S.solved[id];
  if (was) {
    delete S.solved[id]; S.xp = Math.max(0, S.xp - xp);
    el.classList.remove('dn'); el.closest('.prow')?.classList.remove('svd');
    toast('Problem unmarked (-' + xp + ' XP)');
  } else {
    S.solved[id] = Date.now(); S.xp += xp;
    el.classList.add('dn'); el.closest('.prow')?.classList.add('svd');
    if (S.lastSolveDate !== td) {
      if (S.lastSolveDate === new Date(Date.now() - 86400000).toISOString().split('T')[0] || S.freezeUsed) S.streak++;
      else S.streak = 1;
      S.bestStreak = Math.max(S.bestStreak, S.streak);
      S.lastSolveDate = td;
      if (S.freezeUsed) S.freezeUsed = false;
    }
    S.heatmap[td] = (S.heatmap[td] || 0) + 1;
    toast('✅ Solved! +' + xp + ' XP');
    spawnXP(el, xp); checkBadges();
  }
  save(); updateTopStats();
}
function spawnXP(el, xp) {
  const rect = el.getBoundingClientRect(), div = document.createElement('div');
  div.className = 'xp-float'; div.textContent = '+' + xp + ' XP';
  div.style.left = (rect.left + 9) + 'px'; div.style.top = (rect.top - 10) + 'px';
  document.body.appendChild(div); setTimeout(() => div.remove(), 1200);
}
function toggleBk(id, el) {
  if (S.bookmarks[id]) { delete S.bookmarks[id]; el.classList.remove('on'); }
  else { S.bookmarks[id] = true; el.classList.add('on'); toast('🔖 Saved to Bookmarks'); }
  save(); updateTopStats();
}
function toggleRev(id, el) {
  if (S.revisions[id]) { delete S.revisions[id]; el.classList.remove('on'); }
  else { S.revisions[id] = true; el.classList.add('on'); toast('🔄 Marked for Revision'); }
  save(); updateTopStats();
}

// ══════════════════════════════════════════
//  NOTES MODAL
// ══════════════════════════════════════════
let activeNoteId = null;
function openNote(id) {
  activeNoteId = id; const p = getProb(id);
  $('nm-prob').textContent = '// ' + p.name;
  $('taNote').value = S.notes[id] || '';
  $('noteModal').classList.add('op');
}
$('clsNote').onclick = $('cnNote').onclick = () => $('noteModal').classList.remove('op');
$('svNote').onclick = () => {
  const v = $('taNote').value.trim();
  if (v) S.notes[activeNoteId] = v; else delete S.notes[activeNoteId];
  save(); $('noteModal').classList.remove('op'); toast('📝 Note Saved');
  const btn = document.querySelector('#pr-' + activeNoteId + ' .ico.n');
  if (btn) btn.classList.toggle('on', !!v);
};

// ══════════════════════════════════════════
//  PROBLEM DETAIL PAGE
// ══════════════════════════════════════════
let detailTimer = null;
function openDetail(id) {
  logAttempt(id);
  const p = getProb(id);
  const df = p.difficulty === 'easy' ? 'b-ez' : (p.difficulty === 'medium' ? 'b-md' : 'b-hd');
  const rc = ratingColor(p.rating);
  const bk = !!S.bookmarks[p.id], rev = !!S.revisions[p.id];

  let html = '<div class="detail-header">' +
    '<div class="detail-title">' + p.name + (p.striver ? ' <span class="bdg b-str">⭐ STRIVER</span>' : '') + '</div>' +
    '<div class="detail-meta">' +
    platBdg(p.platform) +
    '<span class="bdg ' + df + '">' + p.difficulty.toUpperCase() + '</span>' +
    '<span class="cf-rt" style="color:' + rc + '">#' + p.rating + '</span>' +
    '<span class="co-tg text-mono">' + p.code + '</span>' +
    '</div>' +
    '<div class="detail-tags">' + (p.tags || []).map(t => '<span class="co-tg text-mono">' + t + '</span>').join('') + '</div>' +
    (p.companies && p.companies.length ? '<div class="detail-tags" style="margin-top:8px;">' + p.companies.map(c => '<span class="co-tg text-mono" style="border-color:var(--medium)">' + c + '</span>').join('') + '</div>' : '') +
    '<div class="detail-actions">' +
    '<a class="btn prm" href="' + getProblemLink(p) + '" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">Open on ' + (p.platform === 'leetcode' ? 'LeetCode' : p.platform === 'codeforces' ? 'Codeforces' : 'CodeChef') + ' ↗</a>' +
    '<button class="btn ' + (bk ? 'prm' : '') + '" onclick="toggleBkDetail(\'' + p.id + '\',this)">🔖 ' + (bk ? 'Bookmarked' : 'Bookmark') + '</button>' +
    '<button class="btn ' + (rev ? 'prm' : '') + '" onclick="toggleRevDetail(\'' + p.id + '\',this)">🔄 ' + (rev ? 'Marked' : 'Revision') + '</button>' +
    '<button class="btn" onclick="openNote(\'' + p.id + '\')">📝 Add Note</button>' +
    '</div></div>';

  // Description
  html += '<div class="detail-section"><div class="detail-section-title">Problem Description</div>' +
    '<div class="detail-text">' + (p.description || 'No description available.') + '</div></div>';

  // Prerequisites
  if (p.prerequisite && p.prerequisite.length) {
    html += '<div class="detail-section"><div class="detail-section-title">Prerequisites</div>' +
      '<div class="detail-tags">' + p.prerequisite.map(pr => '<span class="co-tg text-mono">' + pr + '</span>').join('') + '</div></div>';
  }

  // Try Yourself Banner + Hint + Solution
  html += '<div class="try-banner"><div class="try-banner-title">⚠ Try Yourself First</div>' +
    '<div class="try-banner-sub">Try solving the problem before revealing the solution.</div>' +
    '<div class="try-banner-btns"><button class="btn" id="btnDetailHint">View Hint</button>' +
    '<button class="btn prm" id="btnDetailSol">View Solution</button></div></div>';

  html += '<div class="hint-box" id="detailHintBox"><div class="hint-lbl">HINT</div>' +
    '<div style="font-style:italic;font-size:13px;color:var(--text-secondary);" id="detailHintText">Think about the underlying data structure or pattern that could help optimize.</div></div>';

  html += '<div class="sol-box" id="detailSolBox"><div class="sol-title">SOLUTION</div>' +
    '<div class="sol-section-lbl">APPROACH</div><div class="detail-text" id="detailApp">1. Analyze the problem structure.\\n2. Choose appropriate data structure.\\n3. Implement and optimize.</div>' +
    '<div class="sol-section-lbl">PSEUDOCODE</div><div class="cd-blk" id="detailPseudo">function solve(input):\\n  initialize data structures\\n  process input\\n  return result</div>' +
    '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">' +
    '<div class="sol-section-lbl" style="margin:0;">JAVA CODE</div>' +
    '<button class="act-btn" id="btnCopyDetail">Copy Code</button></div>' +
    '<div class="cd-blk" id="detailJava">class Solution {\\n    public void solve() {\\n        // Implementation here\\n    }\\n}</div>' +
    '<div class="cx-row"><div class="cx-card"><div class="cx-card-lbl">TIME COMPLEXITY</div><div class="cx-card-val neon-c" id="detailTC">O(n)</div></div>' +
    '<div class="cx-card"><div class="cx-card-lbl">SPACE COMPLEXITY</div><div class="cx-card-val blue-c" id="detailSC">O(1)</div></div></div></div>';

  $('detailContent').innerHTML = html;
  switchPage('p-detail');
  window.scrollTo(0, 0);

  // Wire buttons
  document.getElementById('btnDetailHint').onclick = () => { document.getElementById('detailHintBox').style.display = 'block'; };
  document.getElementById('btnDetailSol').onclick = () => { document.getElementById('detailSolBox').style.display = 'block'; };
  document.getElementById('btnCopyDetail').onclick = () => {
    navigator.clipboard.writeText(document.getElementById('detailJava').textContent);
    toast('📋 Code copied!');
  };

  // 30-minute hint reminder
  clearTimeout(detailTimer);
  detailTimer = setTimeout(() => {
    $('hintReminder').classList.add('op');
  }, 30 * 60 * 1000);
}

function toggleBkDetail(id, el) {
  if (S.bookmarks[id]) { delete S.bookmarks[id]; el.classList.remove('prm'); el.textContent = '🔖 Bookmark'; }
  else { S.bookmarks[id] = true; el.classList.add('prm'); el.textContent = '🔖 Bookmarked'; toast('🔖 Saved to Bookmarks'); }
  save(); updateTopStats();
}
function toggleRevDetail(id, el) {
  if (S.revisions[id]) { delete S.revisions[id]; el.classList.remove('prm'); el.textContent = '🔄 Revision'; }
  else { S.revisions[id] = true; el.classList.add('prm'); el.textContent = '🔄 Marked'; toast('🔄 Marked for Revision'); }
  save(); updateTopStats();
}

// 30-min reminder handlers
$('clsReminder').onclick = $('btnKeepTrying').onclick = () => $('hintReminder').classList.remove('op');
$('btnReminderHint').onclick = () => {
  $('hintReminder').classList.remove('op');
  const hb = document.getElementById('detailHintBox');
  if (hb) hb.style.display = 'block';
};

// ══════════════════════════════════════════
//  UI EVENT LISTENERS
// ══════════════════════════════════════════
document.querySelector('.logo').onclick = () => switchPage('p-dash', $('n-dash'));

qt('.filter-btn[id^="fb-"]').forEach(b => {
  b.onclick = () => {
    qt('.filter-btn[id^="fb-"]').forEach(x => x.classList.remove('on'));
    b.classList.add('on');
    currentFilter = b.id.replace('fb-', '');
    renderSheet();
  };
});
$('searchInp').addEventListener('input', renderSheet);

qt('.nav-item[id^="n-"]').forEach(n => {
  n.onclick = () => switchPage('p-' + n.id.replace('n-', ''), n);
});
qt('.nav-item[data-tid]').forEach(n => {
  n.onclick = () => {
    switchPage('p-sheet', $('n-sheet'));
    setTimeout(() => {
      const el = document.getElementById('tw-' + n.dataset.tid);
      if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    }, 100);
  };
});

$('btnBackSheet').onclick = () => { clearTimeout(detailTimer); switchPage('p-sheet', $('n-sheet')); };

$('btnFreeze').onclick = () => {
  if (S.streakFreezes > 0 && !S.freezeUsed) {
    S.streakFreezes--; S.freezeUsed = true; save(); updateTopStats();
    toast('🧊 Freeze applied! Streak protected for one day.');
  }
};

// ══ CONTEST TIMER ══
let cfT = null, cfRem = 0;
function fmtT(s) {
  let h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), c = s % 60;
  return h.toString().padStart(2, '0') + ':' + m.toString().padStart(2, '0') + ':' + c.toString().padStart(2, '0');
}
function tTick() { if (cfRem <= 0) { clearInterval(cfT); cfRem = 0; } else cfRem--; $('cfTimerDisp').textContent = fmtT(cfRem); $('cfTimerDisp').classList.toggle('danger', cfRem > 0 && cfRem <= 300); }
$('cf1').onclick = () => { clearInterval(cfT); cfRem = 3600; tTick(); cfT = setInterval(tTick, 1000); };
$('cf2').onclick = () => { clearInterval(cfT); cfRem = 7200; tTick(); cfT = setInterval(tTick, 1000); };
$('cfC').onclick = () => { let m = prompt('Enter minutes:'); if (m && !isNaN(m)) { clearInterval(cfT); cfRem = parseInt(m) * 60; tTick(); cfT = setInterval(tTick, 1000); } };
$('cfP').onclick = () => { clearInterval(cfT); };

// ══ POMODORO ══
let pmT = null, pmRem = 1500, pmMode = 'w';
function pFmt(s) { return Math.floor(s / 60).toString().padStart(2, '0') + ':' + (s % 60).toString().padStart(2, '0'); }
function pmTick() {
  if (pmRem <= 0) {
    if (pmMode === 'w') { pmMode = 'b'; pmRem = 300; $('pomTimer').classList.add('break'); toast('☕ Break time!'); }
    else { pmMode = 'w'; pmRem = 1500; $('pomTimer').classList.remove('break'); toast('🍅 Work time!'); }
    if (Notification.permission === 'granted') new Notification('MACDERT TRAYS: ' + (pmMode === 'b' ? 'Take a break!' : 'Back to work!'));
  } else pmRem--;
  $('pomTimer').textContent = pFmt(pmRem);
}
$('pomBtn').onclick = () => {
  if (Notification.permission === 'default') Notification.requestPermission();
  if (pmT) { clearInterval(pmT); pmT = null; $('pomBtn').textContent = 'Start'; $('pomTimer').classList.remove('active'); }
  else { pmT = setInterval(pmTick, 1000); $('pomBtn').textContent = 'Pause'; $('pomTimer').classList.add('active'); }
};
$('pomReset').onclick = () => { clearInterval(pmT); pmT = null; pmRem = 1500; pmMode = 'w'; $('pomBtn').textContent = 'Start'; $('pomTimer').textContent = '25:00'; $('pomTimer').classList.remove('active', 'break'); };

// ══════════════════════════════════════════
//  DASHBOARD
// ══════════════════════════════════════════
function renderDash() {
  const all = allProblems(), sol = Object.keys(S.solved).length, rank = getRank(S.xp);
  $('sv-sol').textContent = sol; $('sv-rem').textContent = (TOTAL - sol) + ' remaining';
  $('sv-xp').textContent = S.xp; $('sv-rnk').textContent = 'Rank: ' + rank.n;
  $('sv-strk').textContent = S.streak; $('sv-bst').textContent = 'Best: ' + S.bestStreak + ' days';
  $('sv-eta').textContent = Math.ceil((TOTAL - sol) / 5) || '—';

  let ez = 0, md = 0, hd = 0, ezS = 0, mdS = 0, hdS = 0;
  all.forEach(p => {
    if (p.difficulty === 'easy') { ez++; if (S.solved[p.id]) ezS++; }
    if (p.difficulty === 'medium') { md++; if (S.solved[p.id]) mdS++; }
    if (p.difficulty === 'hard') { hd++; if (S.solved[p.id]) hdS++; }
  });
  $('df-easy').textContent = ezS + '/' + ez; $('dfb-easy').style.width = (ez ? ezS / ez * 100 : 0) + '%';
  $('df-med').textContent = mdS + '/' + md; $('dfb-med').style.width = (md ? mdS / md * 100 : 0) + '%';
  $('df-hard').textContent = hdS + '/' + hd; $('dfb-hard').style.width = (hd ? hdS / hd * 100 : 0) + '%';

  // Rings
  $('ringsGrid').innerHTML = TOPICS.map(t => {
    const t_tot = t.problems.length, t_sol = t.problems.filter(p => S.solved[p.id]).length;
    const pct = t_tot ? t_sol / t_tot : 0;
    const r = 16, c = 2 * Math.PI * r, dash = (c * pct).toFixed(1);
    return '<div class="r-card"><svg width="40" height="40" viewBox="0 0 40 40"><circle cx="20" cy="20" r="' + r + '" fill="none" stroke="var(--border)" stroke-width="4"/>' +
      '<circle cx="20" cy="20" r="' + r + '" fill="none" stroke="' + (t.color || 'var(--neon)') + '" stroke-width="4" stroke-dasharray="' + dash + ' ' + c.toFixed(1) + '" stroke-dashoffset="' + (c * 0.25).toFixed(1) + '" stroke-linecap="round" transform="rotate(-90 20 20)"/>' +
      '<text x="20" y="23" text-anchor="middle" fill="' + (t.color || 'var(--neon)') + '" font-size="9" font-family="Orbitron,monospace">' + Math.round(pct * 100) + '%</text></svg>' +
      '<div><div class="r-nm">' + t.icon + ' ' + t.name + '</div><div class="text-mono" style="font-size:10px;color:var(--text-secondary)">' + t_sol + '/' + t_tot + '</div></div></div>';
  }).join('');

  // Heatmap
  let h = '';
  for (let c = 0; c < 52; c++) {
    h += '<div class="hm-col">';
    for (let r = 0; r < 7; r++) {
      let daysAgo = 363 - (c * 7 + r);
      let d = new Date(Date.now() - daysAgo * 86400000);
      let k = d.toISOString().split('T')[0];
      let cnt = S.heatmap[k] || 0;
      let cls = cnt === 1 ? 'c1' : cnt <= 3 ? 'c2' : cnt <= 5 ? 'c3' : cnt > 5 ? 'c4' : '';
      if (cnt === 0) cls = '';
      h += '<div class="hm-cell ' + cls + '" title="' + k + ': ' + cnt + ' solves"></div>';
    }
    h += '</div>';
  }
  $('heatmapGrid').innerHTML = h;
  renderBPreview();
}

// ══ BOOKMARKS & REVISION ══
function renderBookmarks() {
  const list = allProblems().filter(p => S.bookmarks[p.id]);
  $('bkBody').innerHTML = list.length ? '<div class="tw"><div class="tbody op">' + list.map(rowHTML).join('') + '</div></div>' : '<div style="text-align:center;padding:40px;color:var(--text-muted)">No bookmarks yet.</div>';
}
function renderRevisions() {
  const list = allProblems().filter(p => S.revisions[p.id]);
  $('revBody').innerHTML = list.length ? '<div class="tw"><div class="tbody op">' + list.map(rowHTML).join('') + '</div></div>' : '<div style="text-align:center;padding:40px;color:var(--text-muted)">No revisions marked.</div>';
}

function toast(str) { const t = $('toast'); t.textContent = str; t.classList.add('sh'); setTimeout(() => t.classList.remove('sh'), 2500); }

// ══ LEADERBOARD ══
const FAKE_USERS = [
  { n: 'tourist', xp: 12500, sol: 700, strk: 360, av: 'TO' },
  { n: 'Petr', xp: 9800, sol: 550, strk: 210, av: 'PE' },
  { n: 'Radewoosh', xp: 8400, sol: 480, strk: 150, av: 'RA' },
  { n: 'Um_nik', xp: 6200, sol: 350, strk: 80, av: 'UM' },
  { n: 'Benq', xp: 5100, sol: 290, strk: 45, av: 'BE' },
  { n: 'Errichto', xp: 4200, sol: 240, strk: 30, av: 'ER' },
  { n: 'striver_79', xp: 2800, sol: 150, strk: 12, av: 'ST' },
  { n: 'Priyansh', xp: 1400, sol: 80, strk: 5, av: 'PR' }
];
function renderLB() {
  const me = { n: 'You', xp: S.xp, sol: Object.keys(S.solved).length, strk: S.streak, av: 'ME', my: true };
  const list = [...FAKE_USERS, me].sort((a, b) => b.xp - a.xp);
  $('lbBody').innerHTML =
    '<div style="display:grid;grid-template-columns:40px 40px 1fr 70px 70px 60px;gap:12px;padding:12px 20px;border-bottom:1px solid var(--border);font-family:\'Share Tech Mono\',monospace;font-size:10px;color:var(--text-muted);text-transform:uppercase;">' +
    '<span>#</span><span></span><span>Handle</span><span style="text-align:right">XP</span><span style="text-align:right">Solved</span><span style="text-align:right">Streak</span></div>' +
    list.map((u, i) => {
      let rCls = i === 0 ? 'g' : (i === 1 ? 's' : (i === 2 ? 'b' : ''));
      return '<div class="lb-row ' + (u.my ? 'me' : '') + '">' +
        '<div class="lb-rnk ' + rCls + '">' + (i + 1) + '</div>' +
        '<div class="lb-av">' + u.av + '</div>' +
        '<div class="lb-n">' + u.n + (u.my ? ' <span style="color:var(--neon);font-size:10px;margin-left:6px">(you)</span>' : '') + '</div>' +
        '<div class="lb-x">' + u.xp + '</div><div class="lb-s">' + u.sol + '</div><div class="lb-st">🔥' + u.strk + '</div></div>';
    }).join('');
}

// ══ BADGES ══
const BDG = [
  { id: 'b1', em: '🩸', n: 'First Blood', d: 'Solve your first problem', chk: s => Object.keys(s.solved).length >= 1 },
  { id: 'b2', em: '🔟', n: 'Ten Down', d: 'Solve 10 problems', chk: s => Object.keys(s.solved).length >= 10 },
  { id: 'b3', em: '💯', n: 'Centurion', d: 'Solve 100 problems', chk: s => Object.keys(s.solved).length >= 100 },
  { id: 'b4', em: '⚙️', n: 'Grinder', d: 'Solve 250 problems', chk: s => Object.keys(s.solved).length >= 250 },
  { id: 'b5', em: '🏅', n: 'Half Sheet', d: 'Solve 375 problems', chk: s => Object.keys(s.solved).length >= 375 },
  { id: 'b6', em: '🏆', n: 'Sheet Cleared', d: 'Solve all problems', chk: s => Object.keys(s.solved).length >= 750 },
  { id: 'b7', em: '🔥', n: 'On Fire', d: '3-day streak', chk: s => s.streak >= 3 },
  { id: 'b8', em: '📅', n: 'Week Warrior', d: '7-day streak', chk: s => s.streak >= 7 },
  { id: 'b9', em: '🗓️', n: 'Monthly Grind', d: '30-day streak', chk: s => s.streak >= 30 },
  { id: 'b10', em: '💀', n: 'Hard Mode', d: 'Solve 10 hard problems', chk: s => Object.keys(s.solved).filter(id => { let p = getProb(id); return p && p.difficulty === 'hard'; }).length >= 10 },
  { id: 'b11', em: '⭐', n: 'Striver Fan', d: 'Solve 50 Striver problems', chk: s => Object.keys(s.solved).filter(id => { let p = getProb(id); return p && p.striver; }).length >= 50 },
  { id: 'b12', em: '🕸️', n: 'Graph Master', d: 'Complete Graphs section', chk: s => { let t = TOPICS.find(x => x.id === 'graphs'); return t && t.problems.every(p => s.solved[p.id]); } },
  { id: 'b13', em: '⚡', n: 'DP God', d: 'Complete DP section', chk: s => { let t = TOPICS.find(x => x.id === 'dynamic-programming'); return t && t.problems.every(p => s.solved[p.id]); } },
  { id: 'b14', em: '🧠', n: 'Array Slayer', d: 'Complete Arrays section', chk: s => { let t = TOPICS.find(x => x.id === 'arrays'); return t && t.problems.every(p => s.solved[p.id]); } },
  { id: 'b15', em: '🌐', n: 'Trie Force', d: 'Complete Tries section', chk: s => { let t = TOPICS.find(x => x.id === 'tries'); return t && t.problems.every(p => s.solved[p.id]); } },
  { id: 'b16', em: '💎', n: 'XP Legend', d: 'Earn 5000 XP', chk: s => s.xp >= 5000 },
  { id: 'b17', em: '🚀', n: 'Speed Demon', d: 'Solve 5 in one day', chk: s => Object.values(s.heatmap).some(v => v >= 5) },
  { id: 'b18', em: '✍️', n: 'Note Taker', d: 'Write 10 notes', chk: s => Object.keys(s.notes).length >= 10 },
  { id: 'b19', em: '📌', n: 'Curator', d: 'Bookmark 5 problems', chk: s => Object.keys(s.bookmarks).length >= 5 },
  { id: 'b20', em: '🧊', n: 'Ice Cold', d: 'Use streak freeze', chk: s => s.freezeUsed }
];
function checkBadges() { BDG.forEach(b => { if (!localStorage.getItem('bdg_' + b.id) && b.chk(S)) { localStorage.setItem('bdg_' + b.id, '1'); toast('🎖️ Badge Unlocked: ' + b.n); } }); }
function renderBPreview() {
  $('badgesPreview').innerHTML = BDG.slice(0, 10).map(b => '<div class="bg-chip ' + (b.chk(S) ? 'on' : '') + '"><span class="bg-em">' + b.em + '</span><div class="bg-nm">' + b.n + '</div></div>').join('');
}
function renderBadges() {
  $('allBadgesGrid').innerHTML = BDG.map(b => '<div class="bg-chip ' + (b.chk(S) ? 'on' : '') + '"><span class="bg-em">' + b.em + '</span><div class="bg-nm">' + b.n + '</div><div class="bg-ds">' + b.d + '</div></div>').join('');
}

// ══ IMPORT / EXPORT ══
$('btnExport').onclick = () => {
  const data = JSON.stringify({ exportDate: new Date().toISOString(), totalProblems: TOTAL, ...S }, null, 2);
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([data], { type: 'application/json' }));
  a.download = 'macderttrays-progress.json'; a.click();
  toast('✅ Export Successful!');
};
$('btnImport').onclick = () => $('importInp').click();
$('importInp').onchange = (e) => {
  const file = e.target.files[0]; if (!file) return;
  const reader = new FileReader();
  reader.onload = (evt) => {
    try {
      const im = JSON.parse(evt.target.result);
      if (!im.exportDate) throw new Error();
      S.solved = im.solved || {}; S.bookmarks = im.bookmarks || {}; S.notes = im.notes || {};
      S.revisions = im.revisions || {}; S.attempts = im.attempts || {}; S.xp = im.xp || 0;
      S.streak = im.streak || 0; S.bestStreak = im.bestStreak || 0; S.lastSolveDate = im.lastSolveDate || null;
      S.heatmap = im.heatmap || {}; S.streakFreezes = im.streakFreezes || 1;
      S.freezeUsed = im.freezeUsed || false; S.lastFreezeReset = im.lastFreezeReset || null;
      save(); location.reload();
    } catch (err) { toast('❌ Import Failed: Invalid File Structure.'); }
  };
  reader.readAsText(file);
};

// Start
load();
