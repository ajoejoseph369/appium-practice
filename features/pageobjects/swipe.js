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
        // const scrollableContainer = await $(By.scrollable(true));
        // await scrollableContainer.scrollUntil(Direction.DOWN, until.scrollFinished(Direction.DOWN));
        const size = await driver.getWindowSize();
        const startX = size.width / 2;
        // Start from a point near the top of the screen (adjust as needed)
        const startY = size.height * 0.1;
        // End at the bottom of the screen
        const endY = size.height * 0.9;
        await driver.touchPerform([{ action: 'swipe', options: { x: startX, y: startY, duration: 1500, direction: 'down' } }]);
        await browser.pause(4000);
    }
}

module.exports = new Swipe();