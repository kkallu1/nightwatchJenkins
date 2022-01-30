"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.home = void 0;
exports.home = {
    elements: {
        email: "input#email",
        password: "input#pass"
    },
    login(browser, email, pwd) {
        return browser
            .setValue(this.elements.email, email)
            .setValue(this.elements.password, pwd)
            .assert.elementPresent(this.elements.email)
            .assert.elementPresent(this.elements.password);
    }
};
