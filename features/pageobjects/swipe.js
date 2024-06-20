const {$} = require('@wdio/globals');
const { remote } = require('webdriverio');

const opts = {
    port: 4724,
    capabilities: {
        platformName: "Android",
        'appium:deviceName': 'Pixel 7',
        'appium:platformVersion': '14.0',
        'appium:automationName': 'UiAutomator2',
        "appium:app": "/home/p10/Documents/appium practice/app/android.wdio.native.app.v1.0.8.apk",
    }
};

let client;

const screen = "//*[@content-desc='Swipe-screen']";
const swipe = "//*[@text='Swipe']";

class Swipe{

    async goToSwipePage(){
        await $(swipe).click();
    }

    async swipeUp(){
        client = await remote(opts);
        await client.touchPerform([
            { action: 'press', options: { x: 500, y: 1500 } },
            { action: 'wait', options: { ms: 200 } },
            { action: 'moveTo', options: { x: 500, y: 500 } },
            { action: 'release' }
        ]);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Pause for 5 seconds

    }

    async swipeDown(){
        client = await remote(opts);
        await client.touchPerform([
            { action: 'press', options: { x: 500, y: 500 } },
            { action: 'wait', options: { ms: 200 } },
            { action: 'moveTo', options: { x: 500, y: 1500 } },
            { action: 'release' }
        ]);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Pause for 5 seconds

    }


    // async swipeLeft(){

    // }

    // async swipeRight(){

    // }

}

module.exports = new Swipe();