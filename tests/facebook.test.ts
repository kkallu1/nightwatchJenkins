import { NightwatchBrowser } from "nightwatch";
import { home } from "../pages/facebook.page";

export = {

   "Login test with invalid cred":function(browser:NightwatchBrowser)
   {
       home.login(browser,"karthikprathyu143@gmail.com","Test123")
       
   },


   afterEach:function(browser:NightwatchBrowser)
   {
          browser.end();
   },
   beforeEach:function(browser:NightwatchBrowser)
   {
          browser.maximizeWindow();
          browser.url(browser.launch_url)
   }

}