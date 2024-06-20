const { Given, When, Then } = require('@wdio/cucumber-framework');
const { client } = require('nightwatch');

// const LoginPage = require('../pageobjects/login.page');
// const BalancePage = require('../pageobjects/balance.page');

// const pages = {
//     login: LoginPage,
//     balance : BalancePage
// }


// Given(/^I launch the EriBank app$/, async () => {
//   await client.init();
// });

// When(/^I log in with username "([^"]*)" and password "([^"]*)"$/, async (username, password) => {
//   await client.setValue('#com.experitest.ExperiBank:id/usernameTextField', username);
//   await client.setValue('#com.experitest.ExperiBank:id/passwordTextField', password);
//   await client.click('#com.experitest.ExperiBank:id/loginButton');
//   await LoginPage.login(username, password);
// });

// Then(/^I should see the balance page$/, async () => {
//   await client.expect.element(balance.yourBalance).to.be.present;
// });

// After(async () => {
//   await client.end();
// });

// const { Given, When, Then } = require('cucumber');
// const { client } = require('nightwatch-api');

Given(/^I launch the EriBank app$/, async () => {
  await client.init();
});

When(/^I log in with username "([^"]*)" and password "([^"]*)"$/, async (username, password) => {
  await client.setValue('#username', username);
  await client.setValue('#password', password);
  await client.click('#loginButton');
});

Then(/^I should see the balance page$/, async () => {
  await client.expect.element('#balancePage').to.be.present;
});

After(async () => {
  await client.end();
});

