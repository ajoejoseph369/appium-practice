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

    async swipeLeft(){
        const size = await $(carousel).getSize();
        const location = await $(carousel).getLocation();

        const startX = location.x + size.width * 0.9; // Start near the right edge
        const startY = location.y + size.height / 2; // Start vertically centered
        const endX = location.x + size.width * 0.1; // End near the left edge
        const endY = startY; // End vertically centered

        // await browser.touchAction([
        //     { action: 'press', x: startX, y: startY },
        //     { action: 'wait', ms: 1000 },
        //     { action: 'moveTo', x: endX, y: endY },
        //     { action: 'release' }
        // ]);
        await browser.performActions([{
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                { type: 'pointerMove', duration: 0, x: startX, y: startY },
                { type: 'pointerDown', button: 0 },
                { type: 'pause', duration: 500 },
                { type: 'pointerMove', duration: 500, origin: 'pointer', x: endX - startX, y: endY - startY },
                { type: 'pointerUp', button: 0 }
            ]
        }]);
    
        await browser.releaseActions();
    }

    async swipeToEndOfCarousel(){
        // const carousel = await $('//android.view.ViewGroup[@content-desc="Carousel"]');
        let reachedEnd = false;
        let maxSwipes = 10; // Adjust this number based on your carousel length
        while (!reachedEnd && maxSwipes > 0) {
            try {
                // Try to swipe and see if the last item is displayed
                await this.swipeLeft(await $(carousel));
    
                // Add your own condition to determine if the end is reached
                // For example, checking if a specific element is visible
                const lastItem = await $('//android.view.ViewGroup[@resource-id="__CAROUSEL_ITEM_5_READY__"]');
                if (await lastItem.isDisplayed()) {
                    reachedEnd = true;
                }
            } catch (error) {
                console.error('Error during swipe:', error);
            }
    
            maxSwipes--;
        }
    
        if (!reachedEnd) {
            console.log('Reached the maximum number of swipes without finding the end of the carousel.');
        }
    }
}

module.exports = new Swipe();