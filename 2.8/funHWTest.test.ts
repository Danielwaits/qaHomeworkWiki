import {Google} from './funHWPage';
const fs = require('fs');
const google = new Google();

test("do a search", async () => {
    await google.navigate();
    await google.search('Star Wars: Jedi Survivor');
    let text = await google.getResults()
    expect(text).toContain('Star Wars: Jedi Sorvivor');
    await fs.writeFile(`${__dirname}/jediScreenshot.png`,
    await google.driver.takeScreenshot(), "base64",
    (e) => {
        if(e) console.error(e);
        else console.log("it worked!!");
    })
    await google.driver.quit()
})