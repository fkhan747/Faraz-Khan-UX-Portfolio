/* ============================================================================
   Meridian table heatmap. Colours delta / "Diff" cells by whether the change
   is FAVOURABLE for that metric, not merely by sign. Research-informed
   polarity (see POLARITY): e.g. a higher acceptance rate reads as unfavourable
   (less selective) even though it is a positive number; a drop in applications
   reads as unfavourable; yield and deposits up read as favourable; accepted
   counts, headcount and expenditure are neutral (data, not a quality signal).
   Runs once on load over every table.tbl, including the hidden chart->table
   views, so the colours are there the moment a table is revealed.
   ========================================================================== */
(function () {
  // +1 = higher is favourable, -1 = higher is unfavourable, 0 = neutral
  var POLARITY = [
    [/acceptance rate|admit rate|selectivit/, -1],
    [/\bmelt\b|declin|attrition/, -1],
    [/turnover/, -1],
    [/\byield/, 1],
    [/deposit|enrol/, 1],
    [/applied|application/, 1],
    [/admitted|accepted|offer accepted|admit\b/, 0],
    [/funded|award|funding|grant/, 1],
    [/expenditure|expense|spend/, 0],
    [/headcount|workforce/, 0],
    [/new hire|hiring/, 1],
  ];
  function polarity(metric) {
    metric = (metric || '').toLowerCase();
    for (var i = 0; i < POLARITY.length; i++) if (POLARITY[i][0].test(metric)) return POLARITY[i][1];
    return 0;
  }
  function parseNum(t) {
    var m = (t || '').replace(/,/g, '').match(/([+−-]?)\s*([\d.]+)/);
    if (!m) return null;
    var v = parseFloat(m[2]);
    if (isNaN(v)) return null;
    var sign = (m[1] === '-' || m[1] === '−') ? -1 : (m[1] === '+' ? 1 : 1);
    return { sign: sign, val: v };
  }
  // Build a column model that respects rowspan/colspan in the header.
  function headerModel(table) {
    var rows = table.querySelectorAll('thead tr');
    if (!rows.length) return null;
    var occ = {}, meta = {};
    for (var r = 0; r < rows.length; r++) {
      var c = 0, cells = rows[r].children;
      for (var ci = 0; ci < cells.length; ci++) {
        while (occ[r + ',' + c]) c++;
        var cell = cells[ci];
        var cs = parseInt(cell.getAttribute('colspan') || '1', 10);
        var rs = parseInt(cell.getAttribute('rowspan') || '1', 10);
        var txt = cell.textContent.trim();
        for (var dr = 0; dr < rs; dr++) for (var dc = 0; dc < cs; dc++) occ[(r + dr) + ',' + (c + dc)] = true;
        for (var k = 0; k < cs; k++) {
          var gc = c + k;
          if (!meta[gc]) meta[gc] = { group: '', sub: '' };
          if (r === 0) meta[gc].group = txt;
          if (txt) meta[gc].sub = txt;
        }
        c += cs;
      }
    }
    return meta;
  }
  function tint(td, good, val, scale) {
    if (good === 0) { td.style.background = 'rgba(90,85,96,0.05)'; return; }      // neutral metric
    var inten = Math.min(0.30, 0.08 + (val / scale) * 0.22);
    if (good > 0) { td.style.background = 'rgba(30,142,90,' + inten.toFixed(3) + ')'; td.style.color = '#10603c'; }
    else { td.style.background = 'rgba(192,57,43,' + inten.toFixed(3) + ')'; td.style.color = '#8a2a20'; }
    td.style.fontWeight = '700';
  }
  function run() {
    document.querySelectorAll('table.tbl').forEach(function (table) {
      var meta = headerModel(table);
      if (!meta) return;
      var diffCols = [];
      Object.keys(meta).forEach(function (gc) { if (/diff|delta|change|vs /i.test(meta[gc].sub)) diffCols.push(parseInt(gc, 10)); });
      if (!diffCols.length) return;
      var bodyRows = table.querySelectorAll('tbody tr');
      diffCols.forEach(function (gc) {
        var pol = polarity(meta[gc].group || meta[gc].sub);
        // column scale = max magnitude in this delta column (for intensity)
        var scale = 1;
        bodyRows.forEach(function (tr) { var c = tr.children[gc]; if (c) { var p = parseNum(c.textContent); if (p) scale = Math.max(scale, p.val); } });
        bodyRows.forEach(function (tr) {
          var c = tr.children[gc]; if (!c) return;
          var p = parseNum(c.textContent); if (!p) return;          // skips N/A, blanks
          tint(c, pol === 0 ? 0 : (p.sign * pol), p.val, scale);
        });
      });
    });
  }
  window.applyHeatmap = run;   // re-runnable, e.g. after a table is re-rendered by a toggle
  if (document.readyState !== 'loading') run(); else document.addEventListener('DOMContentLoaded', run);
})();
