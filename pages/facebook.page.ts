import { reporters } from "mocha";
import { NightwatchBrowser } from "nightwatch";

export const home = {

    elements :{
      email:"input#email",
      password:"input#pass"
    },

     login(browser:NightwatchBrowser,email:string,pwd:string)
    {

        return browser
        .setValue(this.elements.email,email)
        .setValue(this.elements.password,pwd)
        .assert.elementPresent(this.elements.email)
        .assert.elementPresent(this.elements.password)
    }
}