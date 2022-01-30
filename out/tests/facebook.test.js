"use strict";
const facebook_page_1 = require("../pages/facebook.page");
module.exports = {
    "Login test with invalid cred": function (browser) {
        facebook_page_1.home.login(browser, "karthikprathyu143@gmail.com", "Test123");
    },
    afterEach: function (browser) {
        browser.end();
    },
    beforeEach: function (browser) {
        browser.maximizeWindow();
        browser.url(browser.launch_url);
    }
};
