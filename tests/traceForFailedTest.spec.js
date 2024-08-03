const { test,expect,chromium } = require('@playwright/test');

test('Basic code generator using codegen',async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context  = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/');
  await page.locator('.RNNXgb').click();
  await page.getByLabel('Search', { exact: true }).dblclick();
  await page.getByLabel('Search', { exact: true }).fill('hello world');
  await page.getByLabel('Searh', { exact: true }).press('Enter')
  // ---------------------
  await context.close();
  await browser.close();
}); 