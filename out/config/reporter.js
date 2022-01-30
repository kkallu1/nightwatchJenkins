"use strict";
//@ts-nocheck
/*

Same options as when using the built in nightwatch reporter option */
var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    openBrowser: true,
    themeName: 'default',
    relativeScreenshots: true,
    reportsDirectory: __dirname + './../../reports/'
});
module.exports = {
    write: function (results, options, done) {
        reporter.fn(results, done);
    }
};
