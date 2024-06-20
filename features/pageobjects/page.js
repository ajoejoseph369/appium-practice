const {$} = require('@wdio/globals');

const homePageView = '//*[@content-desc="Home-screen"]';
const loginbtn = "//*[@text='Login']";

class Homepage{

    async checkRedirectionToHomePage(){
        return (await $(homePageView).isDisplayed());
    }
    async clickLoginBtn(){
        await $(loginbtn).click();
        // await driver.pause(8000);
        await new Promise(resolve => setTimeout(resolve, 3000)); // Pause for 5 seconds
    }
}

module.exports = new Homepage();