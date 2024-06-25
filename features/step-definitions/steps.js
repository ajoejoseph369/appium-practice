const { Given, When, Then } = require('@wdio/cucumber-framework');

const Homepage = require('../pageobjects/page.js');
const Login = require('../pageobjects/loginpage.js');
const Forms = require('../pageobjects/forms.js');
const Swipe = require('../pageobjects/swipe.js');
const Drag = require('../pageobjects/drag.js');

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

When(/^user types username (.*) and password (.*)$/, async (username,password) => {
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
	// await Swipe.swipeLeft();
	// await Swipe.swipeRight();
	await Swipe.scrollDown();
});

Then(/^success$/, async () => {
	return true;
});

//signup

Given(/^user is on the sign up page$/, async () => {
	await Login.goToSignUp();
});

When(/^user enters (.*) and (.*)$/, async (email,pass) => {
	await Login.enterCredentials(email,pass);
});

Then(/^user clicks sign up$/, async () => {
	await Login.clickSignUp();
});

Then(/^user gets the notif (.*)$/, async (notif) => {
	await Login.checkSignUp(notif);
});


//drag and drop


Given(/^user is on the drag and drop page$/, async () => {
	await Drag.goToDragAndDropPage();
});

When(/^user drags and drops tiles$/, async () => {
	await Drag.dragAndDrop();
});

Then(/^operation is complete$/, async () => {
	await Drag.checkCompletion();
});
