const puppeteer = require('puppeteer-core');
const path = require('path');

const ARTIFACT_DIR = '/home/anarqorp/.gemini/antigravity/brain/ecb1bee6-72fe-4ae3-85d1-3a843f02fc16';

async function main() {
  console.log('Launching Chrome for rigorous visual verification...');
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();

  // 1. Desktop Verification (1280x850)
  await page.setViewport({ width: 1280, height: 850 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 1000));

  // 01: Hero Desktop
  await page.screenshot({ path: path.join(ARTIFACT_DIR, '01-hero-desktop.png') });
  console.log('Captured 01-hero-desktop.png');

  // 02: Gastronomia
  await page.evaluate(() => {
    document.getElementById('gastronomia')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, '02-gastronomia-desktop.png') });
  console.log('Captured 02-gastronomia-desktop.png');

  // 03: Cerveza y Ambiente
  await page.evaluate(() => {
    document.getElementById('cerveza-ambiente')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, '03-cerveza-desktop.png') });
  console.log('Captured 03-cerveza-desktop.png');

  // 04: Deporte & Athletic / Bilbao Basket
  await page.evaluate(() => {
    document.getElementById('deporte')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, '04-deporte-desktop.png') });
  console.log('Captured 04-deporte-desktop.png');

  // 05: El Local y Fachada
  await page.evaluate(() => {
    document.getElementById('local')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, '05-local-desktop.png') });
  console.log('Captured 05-local-desktop.png');

  // 06: Ubicacion & Contacto
  await page.evaluate(() => {
    document.getElementById('ubicacion')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, '06-ubicacion-desktop.png') });
  console.log('Captured 06-ubicacion-desktop.png');

  // 07: Carta Page
  await page.evaluate(() => {
    window.location.hash = 'carta';
  });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, '07-carta-desktop.png') });
  console.log('Captured 07-carta-desktop.png');

  // 08: Filter Para Compartir
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('button'));
    const btn = btns.find((b) => b.textContent.includes('PARA COMPARTIR'));
    if (btn) btn.click();
  });
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, '08-carta-compartir-desktop.png') });
  console.log('Captured 08-carta-compartir-desktop.png');

  // 2. Mobile Verification (390x844)
  await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 800));

  // 10: Mobile Hero
  await page.screenshot({ path: path.join(ARTIFACT_DIR, '10-mobile-hero.png') });
  console.log('Captured 10-mobile-hero.png');

  // 11: Mobile Gastronomia
  await page.evaluate(() => {
    document.getElementById('gastronomia')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, '11-mobile-gastro.png') });
  console.log('Captured 11-mobile-gastro.png');

  // 12: Mobile Deporte
  await page.evaluate(() => {
    document.getElementById('deporte')?.scrollIntoView({ behavior: 'instant' });
  });
  await new Promise((r) => setTimeout(r, 500));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, '12-mobile-deporte.png') });
  console.log('Captured 12-mobile-deporte.png');

  // 13: Mobile Carta
  await page.evaluate(() => {
    window.location.hash = 'carta';
  });
  await new Promise((r) => setTimeout(r, 800));
  await page.screenshot({ path: path.join(ARTIFACT_DIR, '13-mobile-carta.png') });
  console.log('Captured 13-mobile-carta.png');

  await browser.close();
  console.log('All visual verification screenshots captured successfully!');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
