(function () {
  'use strict';

  function getEditor() {
    return window.aceEditor || (typeof ace !== 'undefined' ? ace.edit('codeEditor') : null);
  }

  var ctrlActive  = false;
  var shiftActive = false;
  var findMatches = [];
  var findIndex   = -1;
  var findQuery   = '';

  var toolbar = document.createElement('div');
  toolbar.id = 'mobileToolbar';
  toolbar.innerHTML = [
    '<div id="mobileFindBar">',
    '  <input id="mobileFindInput" type="text" placeholder="Tìm kiếm…" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">',
    '  <span id="mobileFindCount">0/0</span>',
    '  <button class="mfb-nav-btn" id="mfbPrev">&#8593;</button>',
    '  <button class="mfb-nav-btn" id="mfbNext">&#8595;</button>',
    '  <button class="mfb-nav-btn" id="mfbClose">✕</button>',
    '</div>',

    '<div class="mtb-row">',

    '<button class="mtb-btn" id="mtbUndo" title="Hoàn tác (Undo)">',
    '  <svg viewBox="0 0 24 24"><path d="M12.5 8c-2.65 0-5.05 1-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"/></svg>',
    '  <span class="mtb-label">Undo</span>',
    '</button>',

    '<button class="mtb-btn" id="mtbRedo" title="Làm lại (Redo)">',
    '  <svg viewBox="0 0 24 24"><path d="M18.4 10.6C16.55 9 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 15.7c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 15.5h9V6.5l-3.6 4.1z"/></svg>',
    '  <span class="mtb-label">Redo</span>',
    '</button>',

    '<button class="mtb-btn" id="mtbCtrl" title="Giữ Ctrl">',
    '  <svg viewBox="0 0 24 24"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/></svg>',
    '  <span class="mtb-label">Ctrl</span>',
    '</button>',

    /* Shift toggle */
    '<button class="mtb-btn" id="mtbShift" title="Giữ Shift">',
    '  <svg viewBox="0 0 24 24"><path d="M12 1L3 9h5v6h8V9h5L12 1zm0 14v4H8v-4H4.83L12 7.17 19.17 15H16z"/></svg>',
    '  <span class="mtb-label">Shift</span>',
    '</button>',

    /* Tab */
    '<button class="mtb-btn" id="mtbTab" title="Tab">',
    '  <svg viewBox="0 0 24 24"><path d="M11.59 7.41L15.17 11H1v2h14.17l-3.59 3.59L13 18l6-6-6-6-1.41 1.41zM20 6v12h2V6h-2z"/></svg>',
    '  <span class="mtb-label">Tab</span>',
    '</button>',

    /* Find */
    '<button class="mtb-btn" id="mtbFind" title="Search">',
    '  <svg viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>',
    '  <span class="mtb-label">Search</span>',
    '</button>',

    /* Word Wrap toggle */
    '<button class="mtb-btn" id="mtbWrap" title="Xuống dòng tự động">',
    '  <svg viewBox="0 0 24 24"><path d="M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c.83 0 1.5.67 1.5 1.5S15.08 16 14.25 16H13v-2l-3 3 3 3v-2h1.25C16.76 18 18 16.76 18 15.25v-.5C18 12.56 15.87 11 15 11z"/></svg>',
    '  <span class="mtb-label">Wrap</span>',
    '</button>',

    '</div>', /* end .mtb-row */
  ].join('');

  /* ── Inject into page ── */
  document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(toolbar);
    init();
  });

  /* ── Init ── */
  function init() {
    /* ── Undo / Redo ── */
    document.getElementById('mtbUndo').addEventListener('click', function () {
      var ed = getEditor(); if (ed) { ed.execCommand('undo'); ed.focus(); }
    });
    document.getElementById('mtbRedo').addEventListener('click', function () {
      var ed = getEditor(); if (ed) { ed.execCommand('redo'); ed.focus(); }
    });

    /* ── Ctrl toggle ── */
    var ctrlBtn = document.getElementById('mtbCtrl');
    ctrlBtn.addEventListener('click', function () {
      ctrlActive = !ctrlActive;
      ctrlBtn.classList.toggle('mtb-locked', ctrlActive);
      if (!ctrlActive) shiftActive = false; // reset shift too if ctrl released
    });

    /* ── Shift toggle ── */
    var shiftBtn = document.getElementById('mtbShift');
    shiftBtn.addEventListener('click', function () {
      shiftActive = !shiftActive;
      shiftBtn.classList.toggle('mtb-locked', shiftActive);
    });

    /* ── Tab ── */
    document.getElementById('mtbTab').addEventListener('click', function () {
      var ed = getEditor();
      if (!ed) return;
      if (shiftActive) {
        ed.execCommand('outdent');
        shiftActive = false;
        shiftBtn.classList.remove('mtb-locked');
      } else {
        ed.execCommand('indent');
      }
      ed.focus();
    });

    /* ── Word Wrap ── */
    var wrapOn = false;
    var wrapBtn = document.getElementById('mtbWrap');
    wrapBtn.addEventListener('click', function () {
      var ed = getEditor();
      if (!ed) return;
      wrapOn = !wrapOn;
      ed.getSession().setUseWrapMode(wrapOn);
      wrapBtn.classList.toggle('mtb-active', wrapOn);
      ed.focus();
    });
    /* Enable wrap by default on mobile */
    if (window.innerWidth <= 768) {
      setTimeout(function () {
        var ed = getEditor();
        if (ed) {
          ed.getSession().setUseWrapMode(true);
          wrapOn = true;
          wrapBtn.classList.add('mtb-active');
        }
      }, 600);
    }

    /* ── Find ── */
    var findBtn   = document.getElementById('mtbFind');
    var findBar   = document.getElementById('mobileFindBar');
    var findInput = document.getElementById('mobileFindInput');
    var findCount = document.getElementById('mobileFindCount');
    var mfbClose  = document.getElementById('mfbClose');
    var mfbPrev   = document.getElementById('mfbPrev');
    var mfbNext   = document.getElementById('mfbNext');

    findBtn.addEventListener('click', function () {
      var isVisible = findBar.classList.contains('show');
      if (isVisible) {
        closeFindBar();
      } else {
        findBar.classList.add('show');
        findBtn.classList.add('mtb-active');
        setTimeout(function () { findInput.focus(); }, 80);
      }
    });

    mfbClose.addEventListener('click', closeFindBar);

    function closeFindBar() {
      findBar.classList.remove('show');
      findBtn.classList.remove('mtb-active');
      clearHighlights();
      var ed = getEditor(); if (ed) ed.focus();
    }

    findInput.addEventListener('input', function () {
      findQuery = findInput.value.trim();
      runFind(findQuery);
    });

    findInput.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        navigateFind(e.shiftKey ? -1 : 1);
      }
      if (e.key === 'Escape') closeFindBar();
    });

    mfbNext.addEventListener('click', function () { navigateFind(1); });
    mfbPrev.addEventListener('click', function () { navigateFind(-1); });

    function clearHighlights() {
      var ed = getEditor();
      if (ed) ed.session.highlight('');
      findMatches = [];
      findIndex   = -1;
      findCount.textContent = '0/0';
    }

    function runFind(query) {
      var ed = getEditor();
      if (!ed || !query) { clearHighlights(); return; }
      var content = ed.getValue();
      findMatches = [];
      var lc = content.toLowerCase();
      var lq = query.toLowerCase();
      var idx = 0;
      while ((idx = lc.indexOf(lq, idx)) !== -1) {
        findMatches.push(idx);
        idx += lq.length;
      }
      if (findMatches.length > 0) {
        findIndex = 0;
        jumpToMatch(0);
      } else {
        findIndex = -1;
        findCount.textContent = '0/0';
      }
    }

    function navigateFind(dir) {
      if (findMatches.length === 0) return;
      findIndex = (findIndex + dir + findMatches.length) % findMatches.length;
      jumpToMatch(findIndex);
    }

    function jumpToMatch(i) {
      var ed = getEditor();
      if (!ed) return;
      var pos = findMatches[i];
      var content = ed.getValue();
      var linesBefore = content.substring(0, pos).split('\n');
      var row = linesBefore.length - 1;
      var col = linesBefore[linesBefore.length - 1].length;
      ed.gotoLine(row + 1, col, true);

      var Range = ace.require('ace/range').Range;
      var end_col = col + findQuery.length;
      ed.selection.setRange(new Range(row, col, row, end_col));
      ed.renderer.scrollCursorIntoView();

      findCount.textContent = (i + 1) + '/' + findMatches.length;
    }

    /* ── Ctrl+key combos via virtual Ctrl ── */
    /* Intercept editor key events when ctrl / shift are locked */
    document.addEventListener('keydown', function (e) {
      if (!ctrlActive && !shiftActive) return;
      var ed = getEditor();
      if (!ed) return;

      if (ctrlActive) {
        var map = {
          'z': 'undo',
          'y': 'redo',
          'a': 'selectall',
          'c': 'copy',
          'x': 'cut',
          'v': 'paste',
          'f': function () {
            document.getElementById('mtbFind').click();
          }
        };
        var fn = map[e.key.toLowerCase()];
        if (fn) {
          e.preventDefault();
          if (typeof fn === 'string') ed.execCommand(fn);
          else fn();
          ctrlActive = false;
          ctrlBtn.classList.remove('mtb-locked');
        }
      }
    });
  }

})();
