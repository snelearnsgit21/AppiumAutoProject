const { $ } = require('@wdio/globals')
///const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        return $('#com.experitest.ExperiBank:id/usernameTextField');
    }

    get inputPassword () {
        return $('#com.experitest.ExperiBank:id/passwordTextField');
    }

    get btnSubmit () {
        return $('#com.experitest.ExperiBank:id/loginButton');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        // await client.setValue(username);
        // await client.setValue(password);
        // await client.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
