const { chromium } = require('/private/tmp/pw/node_modules/playwright');
const fs = require('fs');
const base = '/Users/daneyand/Documents/bob/AI101-openSlide/tmp/';
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CH });
  const p = await b.newPage({ viewport: { width: 1450, height: 1225 } });
  for (let s = 0; s < 9; s++) {
    const items = [];
    for (let k = 0; k < 6; k++) {
      const n = s * 6 + k + 1;
      if (n > 52) break;
      const f = 'orig.' + String(n).padStart(3, '0') + '.png';
      items.push(`<div style="position:relative;height:405px"><img src="orig/${f}" style="width:720px;height:405px;display:block"><b style="position:absolute;left:4px;top:4px;background:#e11;color:#fff;font:bold 18px sans-serif;padding:2px 8px">${n}</b></div>`);
    }
    fs.writeFileSync(base + 'sheet.html', `<body style="margin:0;background:#888;display:grid;grid-template-columns:720px 720px;gap:6px">${items.join('')}</body>`);
    await p.goto('file://' + base + 'sheet.html');
    await p.waitForTimeout(500);
    await p.screenshot({ path: base + 'sheet' + (s + 1) + '.png' });
  }
  await b.close();
})();
