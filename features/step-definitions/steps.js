const { Given, When, Then } = require('@wdio/cucumber-framework');

const Homepage = require('../pageobjects/page.js');
const Login = require('../pageobjects/loginpage.js');
const Forms = require('../pageobjects/forms.js');
const Swipe = require('../pageobjects/swipe.js');


//homepage
Given(/^user is on the homepage$/, async () => {
	await Homepage.checkRedirectionToHomePage();
});

When(/^user clicks the login button$/, async () => {
	await Homepage.clickLoginBtn();
});

Then(/^user is redirected to the login page$/, async () => {
	await Login.checkRedirectionToLoginPage();
});

//login page

Given(/^user is on the login page$/, async () => {
	await Login.checkRedirectionToLoginPage();
});

When(/^user enters (.*) and (.*)$/, async (username,password) => {
	await Login.inputCredentials(username,password);
});

Then(/^user gets the notification (.*)$/, async (notification) => {
	await Login.checkLogin(notification);
});

//forms page


Given(/^user is on the forms page$/, async () => {
	await Forms.redirectToFormsPage();
	await Forms.checkRedirectionToFormsPage();
});

When(/^user enters (.*) in the input field$/, async (text) => {
	await Forms.enterText(text);
	await Forms.checkEnteredText();
});

Then(/^user toggles the switch$/, async () => {
	await Forms.clickToggleBtn();
	await Forms.checkToggleBtnClick();
});

Then(/^user selects an item from the dropdown$/, async () => {
	await Forms.selectDropDown();
});

Then(/^user clicks on the active button$/, async () => {
	await Forms.clickActiveBtn();
	await Forms.checkBtnClick();
});

//swipe


Given(/^user is on the swipe page$/, async () => {
	await Swipe.goToSwipePage();
});

When(/^user swipes$/, async () => {
	await Swipe.swipeDown();
	await Swipe.swipeUp();
});

Then(/^success$/, async () => {
	return true;
});
