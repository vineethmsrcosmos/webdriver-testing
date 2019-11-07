const assert = require("assert");
const data = require(".././mockdata.json").details;
describe("checks", () => {
  it("checks", () => {
    browser.url("https://dev-app.cloud.hashcorp.com/");
    const title = browser.getTitle();
    assert.equal(title, "Hashcloud Accounts");

    $("#email").addValue(data.signup.email);
    browser.pause(3000);
    $("#password").addValue(data.signup.password);
    browser.pause(2000);
    $(".btn").click();
    browser.pause(4000);
    $(".btn-outline-primary").click();
    browser.pause(4000);

    $("a*=Build a Consortium").click();
    browser.pause(4000);
    $(".select-css").selectByVisibleText("Version 1.4");
    browser.pause(5000)
    // $('#devlopment').click()
    $(".btn-txt").click();
    browser.pause(5000);
  
    $(".form-control").addValue(data.signup.Consirtumname);
    browser.pause(5000);
    $(".btn-txt").click(); //--- click button at Review
    browser.pause(40000);
    $(".btn-txt").click(); //----click button at Deploy
    browser.pause(4000);
    $(".fa-play-circle").click();
    browser.pause(30000);
  //  done();
    //browser.pause(30000);
  });
});