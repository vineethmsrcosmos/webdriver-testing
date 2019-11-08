const assert = require("assert");
const data = require(".././mockdata.json").details;

describe("cehcsk", () => {
  beforeEach(() => {
    browser.url(
      "https://dev-hlf-console.cloud.hashcorp.com/?consortiumName=" +
        data.signup.Consirtumname
    );

    $("#email").addValue(data.signup.email);
    browser.pause(3000);
    $("#password").addValue(data.signup.password);
    browser.pause(3000);
    $(".btn").click();
    browser.pause(4000);
  });
  it("deleteing buttons", () => {
    $('a[href="/organizations"]').click(); //----- click on org template
    browser.pause(3000);
    $(".fa-ellipsis-h").click(); //------click on the org
    browser.pause(2000);
    $(".fa-trash").click(); //------ click on delete butoon
    browser.pause(4000);
    $('a[href="/certauthorities"]').click(); //--- CA tempelate
    browser.pause(3000);
    $(
      "#content > div > div > div > div.hn-or--content > div.row > div:nth-child(2) > div > div.card-body > div > div > i"
    ).click(); //----options in Ca
    browser.pause(3000);
    $(
      "#content > div > div > div > div.hn-or--content > div.row > div:nth-child(2) > div > div.card-body > div > div > div > ul > li:nth-child(2) > div > i"
    ).click(); //--- clickon delete button
    browser.pause(3000);

    $(
      "#react-confirm-alert > div > div > div > div > button:nth-child(1)"
    ).click(); //---- click on yes
    //$('#react-confirm-alert > div > div > div > div > button:nth-child(2)').click()//---- click on NO
    browser.pause(4000);
    $('a[href="/orderers"]').click();
    browser.pause(4000);
    $(
      "#content > div > div > div > div.hn-or--content > div.row > div:nth-child(2) > div > div.card-body > div > div > i"
    ).click(); //---- click on order options
    browser.pause(4000);
    $(
      "#content > div > div > div > div.hn-or--content > div.row > div:nth-child(2) > div > div.card-body > div > div > div > ul > li:nth-child(2) > div > i"
    ).click(); //---- click on delete options
    browser.pause(4000);
    //$("").click()//--- click on edit option
    browser.pause(4000);
    $('a[href="/peers"]').click();
    browser.pause(3000);
    $(
      "#content > div > div > div > div.hn-or--content > div.row > div:nth-child(2) > div > div.card-body > div > div > i"
    ).click(); //----- clickon the peer options
    browser.pause(4000);
    $(
      "#content > div > div > div > div.hn-or--content > div.row > div:nth-child(2) > div > div.card-body > div > div > div > ul > li:nth-child(2) > div > i"
    ).click(); //---- clickon delete option
    browser.pause(40000);
  });
});
