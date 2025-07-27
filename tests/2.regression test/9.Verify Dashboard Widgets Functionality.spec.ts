import {Page,expect} from '@playwright/test'
import test from "../../fixtures/pageFixtures";
import loginPage from "../../page-objects/loginPage";
import pim from "../../page-objects/pim"
import LeavePage from '../../page-objects/leave';


test.beforeEach(async({page,baseURL})=>{
    await page.goto(baseURL+'')
})

test('Add New Employee', async({page,loginPage,pim,leave,homePage,dashboardPage})=>{

await test.step('1) Login with valid credential', async()=>{

    await loginPage.Login()
})

await test.step('2) Verify that loggedin successfully and Dashboard is appeard', async()=>{
    await expect(homePage.dashboard).toBeVisible()
})
    await expect(dashboardPage.employeeDistributionWidget).toBeVisible()
    await expect(dashboardPage.timesheetWidget).toBeVisible()
    await page.pdf({path:'screenshots/Verify Dashboard Widgets Functionality.pdf'})
})
