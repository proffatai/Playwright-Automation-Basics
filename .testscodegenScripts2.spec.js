const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://myschool.ng/');
  await page.locator('#school_category_search_select').selectOption('polytechnic');
  await page.locator('#institution_search_select').selectOption('yaba-college-of-technology');
  await page.locator('li').filter({ hasText: 'Post-UTME 2024: List Of Schools That Have Released Forms (112)' }).click();
  await page.locator('li').filter({ hasText: 'Post-UTME 2024: List Of Schools That Have Released Forms (112)' }).locator('div').first().click();

  // ---------------------
  await context.close();
  await browser.close();
})();