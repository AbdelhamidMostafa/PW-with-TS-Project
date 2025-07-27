import {Page,expect} from '@playwright/test'
import test from "../../fixtures/pageFixtures";
import loginPage from "../../page-objects/loginPage";
import pim from "../../page-objects/pim"


test.beforeEach(async({page,baseURL})=>{
    await page.goto(baseURL+'')
})

test('Add New Employee', async({page,loginPage,pim})=>{

await test.step('1) Login with valid credential', async()=>{
    await loginPage.Login()
})

await test.step('2) Navigate to Employee Management', async()=>{
    await pim.PIM.click()
})

await test.step('3) Search for the added employee and delete him ', async()=>{
    await pim.deleteEmployee()
})
 
await test.step('4) Search and verify that the employee no longer appears in the list ', async()=>{
    await pim.searchForEmployee()
    const rowCount = page.locator('.orangehrm-bottom-container').count()

    if (await rowCount === 0) {
           await console.log('The employee does not exist in the table.');
          } else {
           await console.log('The employee exists in the table.');
           }
})
 await page.pdf({path:'screenshots/Search for Employee by ID.pdf'})

})