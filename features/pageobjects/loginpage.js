const {$} = require('@wdio/globals');

const loginPageView = '//*[@content-desc="Login-screen"]';
const emailInput = '//android.widget.EditText[@content-desc="input-email"]';
const passwordInput = '//android.widget.EditText[@content-desc="input-password"]';
const loginBtn = '//android.view.ViewGroup[@content-desc="button-LOGIN"]';
const loginAlert = '//*[@resource-id="android:id/content"]';
const loginAlertText = '//*[@resource-id="android:id/message"]';
const loginOKBtn = "//*[@resource-id='android:id/button1' and @text='OK']";
const signUpPage = "//*[@content-desc='button-sign-up-container']"
const SUemail = "//*[@content-desc='input-email']";
const SUpassword = "//*[@content-desc='input-password']";
const SUrepeatPassword = "//*[@content-desc='input-repeat-password']";
const signUpBtn = "//*[@content-desc='button-SIGN UP']";
const signUpAlert = "//*[@resource-id='android:id/content']";
const signUpAlertText = '//*[@resource-id="android:id/message"]';
const signUpOK = "//*[@resource-id='android:id/button1' and @text='OK']";

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
        await new Promise(resolve => setTimeout(resolve, 2000)); 
        if(await $(loginAlert).isDisplayed()){
            if(await $(loginAlertText)==notification){
                console.log("Logged in");
                return true;
            }
        }
        await $(loginOKBtn).click();
        await new Promise(resolve => setTimeout(resolve, 2000)); 
    }

    async goToSignUp(){
        await $(signUpPage).click();
    }

    async enterCredentials(email,pass){
        await $(SUemail).setValue(email);
        await $(SUpassword).setValue(pass);
        await $(SUrepeatPassword).setValue(pass);
    }

    async clickSignUp(){
        await $(signUpBtn).click();
        await new Promise(resolve => setTimeout(resolve, 2000));

    }

    async checkSignUp(notif){
        await new Promise(resolve => setTimeout(resolve, 2000)); 
        if(await $(signUpAlert).isDisplayed()){
            if(await $(signUpAlertText)==notif){
                console.log("Signed Up");
                return true;
            }
        }
        await $(signUpOK).click();
        await new Promise(resolve => setTimeout(resolve, 2000)); 
    }

}

module.exports = new Login();