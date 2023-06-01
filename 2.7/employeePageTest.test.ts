import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver
} from "selenium-webdriver";
const chromedriver = require('chromedriver');

const driver: WebDriver = Builder()
.withCapabilities(Capabilities.chrome()).builder();

import{emObject} from './employeeManagerPage'
const emPage = emObject(driver)

test("adding employee"), async () => {
    await emPage.navigate();
    await emPage.click(emPage.addEmployee);
    await emPage.click(emPage.newEmployee);
    await emPage.click(emPage.nameInput);
    await emPage.sendkeys(emPage.nameInput, "Mike De Santos");
    await emPage.click(emPage.saveBtn)
    await emPage.driver.quit()
})