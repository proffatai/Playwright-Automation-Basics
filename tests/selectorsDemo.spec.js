const {test, expect}= require('@playwright/test')

test("Using the property of the element" , async({page})=>{
    await page.goto('https://www.saucedemo.com')
    // await page.pause() // This displays the playwright inspector by the side. Similar to how it behaves when we use codegen
   
    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('[placeholder="Password"]').fill('secret_sauce') 
    await page.locator('[value="Login"]').click();
    
    await page.pause() // similar to cy.wait() but still totally different
})

test.skip("Using CSS Selectors" , async({page})=>{
    await page.goto('https://www.saucedemo.com')
    // await page.pause() // This displays the playwright inspector by the side. Similar to how it behaves when we use codegen
   
    await page.locator('#user-name').fill('standard_user') // using CSS Selector
    await page.locator('#password').fill('secret_sauce') 
    await page.locator('#login-button').click() //using css selector, similar to cypress, # for id
    
    // await page.pause() // similar to cy.wait() but still totally different
})

test("Using Xpath locators" , async({page})=>{
    await page.goto('https://www.saucedemo.com')
    // await page.pause() // This displays the playwright inspector by the side. Similar to how it behaves when we use codegen
   
    await page.locator('//input[@id="user-name"]').fill('standard_user') // using CSS Selector
    await page.locator('//input[@placeholder="Password"]').fill('secret_sauce') //using other attibutes
    await page.locator('//input[@data-test="login-button"]').click() //using css selector, similar to cypress, . for class
    
    await page.pause() // similar to cy.wait() but still totally different
})