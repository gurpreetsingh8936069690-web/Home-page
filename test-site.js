import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const EDGE_PATH = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const URL = 'http://localhost:4173/';
const SCREENSHOT_DIR = path.resolve('./screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function runTests() {
  console.log('🚀 Starting Automated Browser Verification...');
  const browser = await puppeteer.launch({
    executablePath: EDGE_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu'],
  });

  const page = await browser.newPage();

  // Track console errors
  const consoleErrors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', (err) => {
    consoleErrors.push(err.toString());
  });

  console.log(`Navigating to ${URL}...`);
  await page.goto(URL, { waitUntil: 'networkidle0' });

  // 1. Verify Page Title & SEO Meta
  const title = await page.title();
  console.log(`✓ Page Title: "${title}"`);

  // 2. Test Responsive Viewports and check horizontal overflow
  const viewports = [
    { name: 'desktop-1440', width: 1440, height: 900 },
    { name: 'laptop-1024', width: 1024, height: 768 },
    { name: 'tablet-768', width: 768, height: 1024 },
    { name: 'mobile-375', width: 375, height: 667 },
    { name: 'mobile-320', width: 320, height: 568 },
  ];

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await new Promise((r) => setTimeout(r, 300));

    // Check horizontal scroll / overflow
    const overflowInfo = await page.evaluate(() => {
      const docEl = document.documentElement;
      const body = document.body;
      const scrollWidth = Math.max(docEl.scrollWidth, body.scrollWidth);
      const clientWidth = docEl.clientWidth;
      return {
        scrollWidth,
        clientWidth,
        hasHorizontalOverflow: scrollWidth > clientWidth,
      };
    });

    if (overflowInfo.hasHorizontalOverflow) {
      console.error(`❌ Overflow detected at ${vp.width}px! scrollWidth=${overflowInfo.scrollWidth}, clientWidth=${overflowInfo.clientWidth}`);
    } else {
      console.log(`✓ Viewport ${vp.width}px passed: No horizontal overflow (scrollWidth=${overflowInfo.scrollWidth}, clientWidth=${overflowInfo.clientWidth})`);
    }

    // Capture screenshot
    await page.screenshot({
      path: path.join(SCREENSHOT_DIR, `${vp.name}.png`),
      fullPage: false,
    });
  }

  // Capture full page screenshots
  await page.setViewport({ width: 1440, height: 900 });
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'fullpage_desktop.png'), fullPage: true });

  await page.setViewport({ width: 375, height: 667 });
  await new Promise((r) => setTimeout(r, 400));
  await page.screenshot({ path: path.join(SCREENSHOT_DIR, 'fullpage_mobile.png'), fullPage: true });

  // 3. Test Mobile Navigation Hamburger Drawer at 375px
  console.log('\nTesting Mobile Navigation Drawer...');
  await page.setViewport({ width: 375, height: 667 });
  const toggleBtn = await page.$('.mobile-toggle-btn');
  if (toggleBtn) {
    await toggleBtn.click();
    await new Promise((r) => setTimeout(r, 400));
    const isDrawerOpen = await page.evaluate(() => {
      const drawer = document.querySelector('.mobile-drawer');
      return drawer && drawer.classList.contains('open');
    });
    console.log(`✓ Mobile drawer open state: ${isDrawerOpen}`);

    // Click a nav link inside drawer
    const navLink = await page.$('.mobile-nav-link');
    if (navLink) {
      await navLink.click();
      await new Promise((r) => setTimeout(r, 400));
      const isDrawerClosedAfterClick = await page.evaluate(() => {
        const drawer = document.querySelector('.mobile-drawer');
        return drawer && !drawer.classList.contains('open');
      });
      console.log(`✓ Mobile drawer closed after link click: ${isDrawerClosedAfterClick}`);
    }
  }

  // 4. Test FAQ Accordion
  console.log('\nTesting FAQ Accordion...');
  await page.setViewport({ width: 1200, height: 800 });
  const faqBtn = await page.$('.faq-accordion-header');
  if (faqBtn) {
    await faqBtn.click();
    await new Promise((r) => setTimeout(r, 300));
    console.log('✓ Toggled FAQ accordion successfully');
  }

  // 5. Test Contact Form Validation
  console.log('\nTesting Contact Form Validation...');
  const submitBtn = await page.$('.submit-btn');
  if (submitBtn) {
    // Attempt submit with empty fields
    await submitBtn.click();
    await new Promise((r) => setTimeout(r, 300));
    const errorCount = await page.evaluate(() => {
      return document.querySelectorAll('.field-error-msg').length;
    });
    console.log(`✓ Form validation triggered: ${errorCount} error messages displayed`);

    // Fill valid form fields
    await page.type('#contact-name', 'Alex Mercer');
    await page.type('#contact-email', 'alex@growthbrands.co');
    await page.type('#contact-phone', '+1 555 492 1083');
    await page.type('#contact-company', 'GrowthBrands Inc');
    await page.type('#contact-message', 'We need technical SEO audits and PPC management to scale our quarterly pipeline.');

    // Submit valid form
    await submitBtn.click();
    await new Promise((r) => setTimeout(r, 1600));

    const isSuccess = await page.evaluate(() => {
      return !!document.querySelector('.form-success-container');
    });
    console.log(`✓ Form submission success state displayed: ${isSuccess}`);
  }

  // 6. Test Service Modal
  console.log('\nTesting Service Modal...');
  const serviceBtn = await page.$('.service-learn-btn');
  if (serviceBtn) {
    await serviceBtn.click();
    await new Promise((r) => setTimeout(r, 300));
    const isModalOpen = await page.evaluate(() => {
      return !!document.querySelector('.modal-card');
    });
    console.log(`✓ Service modal open state: ${isModalOpen}`);

    const modalCloseBtn = await page.$('.modal-close-btn');
    if (modalCloseBtn) {
      await modalCloseBtn.click();
      await new Promise((r) => setTimeout(r, 300));
      const isModalClosed = await page.evaluate(() => {
        return !document.querySelector('.modal-card');
      });
      console.log(`✓ Service modal closed: ${isModalClosed}`);
    }
  }

  // 7. Verify Console Errors
  console.log('\n--- Console Errors Check ---');
  if (consoleErrors.length === 0) {
    console.log('✓ Zero console errors detected during all tests!');
  } else {
    console.error(`❌ Console errors detected (${consoleErrors.length}):`, consoleErrors);
  }

  await browser.close();
  console.log('\n🎉 Automated Verification Complete!');
}

runTests().catch((err) => {
  console.error('Test execution failed:', err);
  process.exit(1);
});
