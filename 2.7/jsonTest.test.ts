import * as Movies from "./movies.json"
import {
    WebDriver, 
    Builder, 
    Capabilities, 
    until, 
    By
}from 'selenium-webdriver'

const chromedriver = require('chromedriver')

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome()).build()

Movies.forEach((movies)=> {
    test(`searching google for ${movies}`, async () => {
        await driver.get('https:www.google.com');
        await driver.wait(until.elementLocated(By.name('q')))
        await driver.findElement(By.name('q')).sendKeys(`${movies}`)
        await driver.wait(until.elementLocated(By.id('rso')))
        let results = await driver.findElement(By.id('rso')).getText()
        expect(results.toLowerCase()).not.toContain(movies)
    })
})