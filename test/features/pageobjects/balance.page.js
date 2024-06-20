const { $ } = require('@wdio/globals')
/**
 * sub page containing specific selectors and methods for a specific page
 */
class BalancePage{
    /**
     * define selectors using getter methods
     */
    get yourBalance () {
        return $('#android.widget.TextView[text="Your balance is: 100.00$"]');
    }
}

module.exports = new BalancePage();
