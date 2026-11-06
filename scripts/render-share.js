// Pass this function to Playwright CLI's run-code on the local homepage.
// The cover is a separate, static asset; visitors do not download it.
async (page) => {
  const viewport = page.viewportSize();
  let style;
  try {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.setViewportSize({ width: 1200, height: 630 });
    await page.evaluate(() => document.fonts.ready);
    await page.evaluate(() => Promise.all([...document.images].map(image => image.decode())));
    style = await page.addStyleTag({ content: `
      .page { height: 630px; min-height: 630px; }
      .header { padding: 40px 72px; }
      .hero { top: 100px; left: 220px; }
      h1 { font-size: 196px; }
      .eyebrow { margin-bottom: 10px; }
      .subtitle { margin-top: 14px; font-size: 21px; }
      .date-line { margin-top: 22px; }
      .mountains { height: 55%; }
      .travelers { left: 73%; bottom: 8.5%; width: 72px; }
      .side-note { display: none; }
    ` });
    await page.screenshot({ path: 'assets/daopen-share.jpg', type: 'jpeg', quality: 88 });
  } finally {
    if (style) await style.evaluate(node => node.remove());
    await page.emulateMedia({ reducedMotion: null });
    if (viewport) await page.setViewportSize(viewport);
  }
}
