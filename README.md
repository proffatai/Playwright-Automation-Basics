## Playwright Traceviewer


### Trace viewer options
- `on-first-retry`: Record the trace only when retrying a test for the first time
- `on`: Record a trace for each time (NOT RECOMMENDED because it is performance heavy)
- `off`: Do not record a trace
- `retain-on-failure`: Record a trace for each test but remove it from successful test run

### Setting trace
Either you set it on the playwright.config.js file or you run the command `npx playwright test --trace traceOption` , where traceOption could be any of the above.
### Different ways to view trace
- Using command: `npx playwright  show-trace pathToTrace.zip`
- By downloading the zip file and viewing the html report
- Using utility by visiting: `https://trace.playwright.dev`, then proceed to drag and drop the downloaded trace zip file 

### How to set Tracing programmatically
This a way specify add trace on any test step of our choice by providing the starting command and the ending command. First thing first is to pass context along with page inside the async function as in test('sample', async ({page,context})=>{}) <br>
Then we write this command at the begining of the point where we want to commence tracing `await context.tracing.start({snapshots:true, screenshots:true})`
<br>
//codes
<br>
Then close the command with `await context.tracing.stop({path:'filename.zip'})` . Check the codegenScripts.spec.js file

### Alternative way to set tracing programmatically
This is done on a global level so instead of writing the command at the start and end of a file, we can write it in the beforeAll block so all the test we write uses what has been set in the beforeAll block

<br>
const {test, expect}=require('@playwright/tests')
<br>
let context;
<br>
let page;
<br>
test.beforeAll( async({browser})=>{
    <br>
    context= await browser.newContext();
    <br>
    await context.tracing.start({snapshots:true, screenshots:true});
    <br>
    page=context.newPage();
    <br>
    })
<br>
Note that in the test block, we didnt pass any param into the async function since it has been declared in the beforeAll block
<br>
test('TC1', async()=>{  
    <br>
    page.goto('https://google.com')
    <br>
    etc.
    <br>
})
<br>
test.afterAll( async()=>{
      <br>
 await context.tracing.stop({path:'filename.zip'})
   <br>
})
  <br>

## Finding elements in playwright
- Locators are strategies or methods used to find elements on a web page, such as by ID, class name, or XPath. 
- Selectors, on the other hand, are expressions or patterns used within these strategies to specify the exact element to be selected, such as CSS selectors or XPath expressions.

We can use page.locator('#idname'), page.locator('.classname'), page.locator('[attrName="value"]')
<br>
To find an element on the webpage in playwright: `page.locator(selector)`
<br>
Locator is a class in playwright library
<br>
Search for playwright locators to learn more or playwright selectors 
