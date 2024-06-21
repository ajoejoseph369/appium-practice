const {$,driver} = require('@wdio/globals');

const screen = "//*[@content-desc='Swipe-screen']";
const swipe = "//*[@text='Swipe']";
const carousel = "//*[@content-desc='Carousel']";
const bottomLogo = "//*[@content-desc ='//*[@content-desc ='WebdriverIO logo']";


class Swipe{

    async goToSwipePage(){
        await $(swipe).click();
    }

    async scrollDown(){
        // const scrollObject = new UiSelector().description("Swipe-screen");
        // await driver.execute("mobile: scroll", {
        //     direction: "down", // or "up" for scrolling up
        //     element: {},
        // });

        // await driver
        //     .action('pointer')
        //     .move({ x: 250, y: 600 })
        //     .down()
        //     .pause(100)
        //     .move({ duration: 500, x: 250, y: 150 })
        //     .up()
        //     .perform();
            
        //await driver.executeScript('window.scrollTo(0, document.body.scrollHeight)');
        //await browser.scroll(0,650);
        await (await $(bottomLogo)).scrollIntoView();
        await browser.pause(4000);
    }
}

module.exports = new Swipe();