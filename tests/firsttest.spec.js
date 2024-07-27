const {expect,test} = require('@playwright/test');

test('first test', async ({page}) => {
    await page.goto('https://www.gitstart.com');
   await page.click('text=Get Started');
})

