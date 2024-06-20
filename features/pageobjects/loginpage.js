const {$} = require('@wdio/globals');

const loginPageView = '//*[@content-desc="Login-screen"]';
const emailInput = '//android.widget.EditText[@content-desc="input-email"]';
const passwordInput = '//android.widget.EditText[@content-desc="input-password"]';
const loginBtn = '//android.view.ViewGroup[@content-desc="button-LOGIN"]';
const loginAlert = '//*[@resource-id="android:id/content"]';
const loginAlertText = '//*[@resource-id="android:id/message"]';
const loginOKBtn = "//*[@resource-id='android:id/button1' and @text='OK']";

class Login{

    async checkRedirectionToLoginPage(){
        return (await $(loginPageView).isDisplayed());
    }

    async inputCredentials(username,password){
        await $(emailInput).setValue(username);
        await $(passwordInput).setValue(password);
        await $(loginBtn).click();
    }

    async checkLogin(notification){
        await new Promise(resolve => setTimeout(resolve, 2000)); // Pause for 5 seconds
        if(await $(loginAlert).isDisplayed()){
            if(await $(loginAlertText)==notification){
                console.log("Logged in");
                return true;
            }
        }
        await $(loginOKBtn).click();
        await new Promise(resolve => setTimeout(resolve, 2000)); // Pause for 5 seconds
    }
}

module.exports = new Login();