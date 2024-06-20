const {$} = require('@wdio/globals');
const { ok } = require('appium-doctor/build/lib/utils');

const formsBtn = "//*[@text='Forms']";
const formsView = '//*[@content-desc="Forms-screen"]';
const textInput = '//*[@content-desc="text-input"]';
const enteredText = "//*[@content-desc='input-text-result']";
const toggleBtn = "//*[@content-desc='switch']";
const switchText = "//*[@content-desc='switch-text']";
const dropdown = "//*[@resource-id='text_input']";
const firstOption = "//*[@resource-id='android:id/text1' and @text='webdriver.io is awesome']"
const activeBtn = "//*[@content-desc='button-Active']";
const btnPressConfirmation = "//*[@resource-id='android:id/content']";
const okBtn = "//*[@resource-id='android:id/button1']";

class Forms{

    async redirectToFormsPage(){
        await $(formsBtn).click();
    }

    async checkRedirectionToFormsPage(){
        return (await $(formsView).isDisplayed());
    }

    async enterText(text){
        await $(textInput).setValue(text);
    }

    async checkEnteredText(text){
        return (await $(enteredText)==text);
    }

    async clickToggleBtn(){
        await $(toggleBtn).click();
    }

    async checkToggleBtnClick(){
        return (await $(switchText)=="Click to turn the switch OFF");
    }

    async selectDropDown(){
        await $(dropdown).click();
        await $(firstOption).waitForDisplayed({ timeout: 5000 });
        await $(firstOption).click();
    }

    async clickActiveBtn(){
        await $(activeBtn).click();
    }

    async checkBtnClick(){
        if(await $(btnPressConfirmation).isDisplayed()){
            await $(okBtn).click();
            return true;
        }
        await new Promise(resolve => setTimeout(resolve, 2000)); // Pause for 5 seconds
    }

}

module.exports = new Forms();