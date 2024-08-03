import { test, expect, devices } from '@playwright/test';

test.use({
  ...devices['iPhone 11'],
});

test('test', async ({ page }) => {
  await page.goto('https://lemfi.com/');
  await page.getByRole('button', { name: 'Accept all cookies' }).click();
  await page.getByRole('link', { name: 'See more' }).nth(3).click();
  await page.getByLabel('play video').click();
  await page.getByRole('button', { name: 'Join waitlist' }).click();
});