import { test as fixture } from "@playwright/test";
import LoginPage from "../page-objects/loginPage";
import HomePage from "../page-objects/homePage";
import PIMPage  from "../page-objects/pim";
import Recruitment from "../page-objects/recruitment";
import LeavePage from "../page-objects/leave";
import DashboardPage from "../page-objects/dashboardPage";

const test = fixture.extend({
  
  loginPage: async ({ page }, use) => {
    await use(new LoginPage (page));
  },
  homePage: async ({ page }, use) => {
    await use(new HomePage (page));
  },
  pim: async ({ page }, use) => {
    await use(new PIM (page));
  },
  recruitment: async ({ page }, use) => {
    await use(new Recruitment (page));
  },
  leave: async ({ page }, use) => {
    await use(new LeavePage (page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage (page));
  }
  

});
export default test;

