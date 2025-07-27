import { Page, expect } from '@playwright/test'
import test from "../../fixtures/pageFixtures";
import loginPage from "../../page-objects/loginPage";

test.beforeEach(async({page, baseURL})=>{
    await page.goto(baseURL+'')
})
test('Logout Functionality',async({page,loginPage,homePage})=>{

    await loginPage.Login()
    await homePage.Logout()
    await expect(loginPage.userName).toBeVisible()
    await expect(loginPage.password).toBeVisible()
    await expect(loginPage.login).toBeVisible()
    await expect(loginPage.forgotYourPassword).toBeVisible()
    await page.pdf({path:'screenshots/Logout Functionality.pdf'})
})