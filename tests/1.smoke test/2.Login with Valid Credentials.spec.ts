import { Page, expect } from "playwright/test";
import test from "../../fixtures/pageFixtures";
import loginPage from "../../page-objects/loginPage";
import homePage from "../../page-objects/homePage";

test.beforeEach(async ({page,baseURL})=>{
    await page.goto(baseURL+'')
})

test('Login with Valid Credenti',async({page,loginPage,homePage})=>{
    
    await test.step('1) Login with valid credential', async()=>{
        await loginPage.Login('Admin', 'admin123')
    })

    await test.step('2) Verify that loggedin successfully and Dashboard is appeard', async()=>{
        await expect(homePage.dashboard).toBeVisible()
        console.log('You are now successfully logged in ;)')
    })
    await page.pdf({path:'screenshots/Login with Valid Credentia.pdf'})
    
})