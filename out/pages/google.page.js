"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SearchPage {
    constructor() {
        this.elements = {
            searchKey: "input[name='k']",
        };
    }
    searchText(browser, searchText) {
        return browser.setValue(this.elements.searchKey, searchText)
            .waitForElementVisible(this.elements.searchKey)
            .assert.elementPresent(this.elements.searchKey, "verifying the search input box");
    }
}
exports.default = new SearchPage();
