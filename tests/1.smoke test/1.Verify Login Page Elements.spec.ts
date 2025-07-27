import { Page, expect} from "playwright/test";
import test from "../../fixtures/pageFixtures";
import loginPage from "../../page-objects/loginPage"

test('Verify Login Page Elements',async({page, baseURL,loginPage})=>{

    await page.goto(baseURL+'')
    await expect(loginPage.userName).toBeVisible()
    await expect(loginPage.password).toBeVisible()
    await expect(loginPage.login).toBeVisible()
    await expect(loginPage.forgotYourPassword).toBeVisible()
    await page.pdf({path:'SS/Verify Login Page Elements.pdf'})
})

