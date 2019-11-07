
// const assert = require("assert");
// const data = require(".././mockdata.json").details;
// describe("checks", () => {
//   it.skip("checks", () => {
//     browser.url("https://dev-app.cloud.hashcorp.com/");
//     const title = browser.getTitle();
//     assert.equal(title, "Hashcloud Accounts");

//     $("#email").addValue(data.signup.email);
//     browser.pause(3000);
//     $("#password").addValue(data.signup.password);
//     browser.pause(2000);
//     $(".btn").click();
//     browser.pause(4000);
//     $(".btn-outline-primary").click();
//     browser.pause(4000);

//     $("a*=Build a Consortium").click();
//     browser.pause(2000);
//     $(".select-css").selectByVisibleText("Version 1.4");
//     // $('#devlopment').click()
//     $(".btn-txt").click();
//     browser.pause(4000);
  
//     $(".form-control").addValue(data.signup.Consirtumname);
//     browser.pause(1000);
//     $(".btn-txt").click(); //--- click button at Review
//     browser.pause(40000);
//     $(".btn-txt").click(); //----click button at Deploy
//     browser.pause(4000);
//     $(".fa-play-circle").click();
//     browser.pause(6000);
//   //  done();
//     //browser.pause(30000);
  
 
// //     $('a[href="/organizations"]').click();
// //     //click the organisation ul
// //     browser.pause(2000);
// //     // browser.pause(1000);
// //     $(".hn-card-btn").click();
// //     //click on organisation template
// // browser.pause(2000)
// //     $("#name").addValue(data.Org.name);
// //     browser.pause(4000);
// //     $("#mspid").addValue(data.Org.mspid);
// //     browser.pause(4000);
// //     $(".s-btn").click();
// //     browser.pause(4000);
// //     $(".s-btn").click();
// //     browser.pause(4000);
// //     //-------creating CA---
// //     $('a[href="/certauthorities"]').click();
// //     browser.pause(2000);
// //     $(".hn-card-btn").click();
// //     browser.pause(5000);
// //     $(".form-control-sm").addValue(data.CA.name);
// //     browser.pause(2000);
// //     $(
// //       "#content > div > div > div > div.hn-or--content > div.create-cert-authority > div.hn-cert-authority-name-form > div > div > div > select"
// //     ).selectByIndex(data.CA.no);
// //     browser.pause(5000);
// //     $(
// //       "#content > div > div > div > div.hn-or--content > div.c-btn > div > div > button"
// //     ).click();
// //     browser.pause(5000);
// //     $(".s-btn").click();
// //     browser.pause(5000);
// //     //----------- Creating Orderer ------

// //     $('a[href="/orderers"]').click();
// //     browser.pause(2000);
// //     $(".hn-card-btn").click();
// //     browser.pause(5000);

// //     $(".form-control-sm").addValue(data.orderer.name);
// //     browser.pause(2000);
// //     $(
// //       "#content > div > div > div > div > div.hn-or--content > div.create-peer > div.hn-peer-form > div > div > div > select"
// //     ).selectByIndex(data.orderer.no);
// //     browser.pause(5000);
// //     $(
// //       "#content > div > div > div > div > div.hn-or--content > div.c-btn > div > div > button"
// //     ).click();
// //     browser.pause(5000);
// //     $(".s-btn").click();
// //    browser.pause(5000);
// // //-------- Creating peer -----


// // $('a[href="/peers"]').click();
// // browser.pause(3000)
// // $('*=Create Peer').click();
// // browser.pause(3000)
// // $('.form-control-sm').addValue(data.peer.name);
// // browser.pause(3000)
// // $('#content > div > div > div > div > div.hn-or--content > div.create-peer > div.hn-peer-form > div > div > div > select').selectByIndex(data.peer.no);
// // browser.pause(3000)
// // $('#content > div > div > div > div > div.hn-or--content > div.create-certif > div.hn-peer-form > div > div > div > div > select').selectByIndex(data.peer.no1)
// // browser.pause(3000)
// // $('.s-btn').click();
// // browser.pause(3000)
// // $('#content > div > div > div > div > div.hn-or--content > div.c-btn > div > div > a > button').click();
// // browser.pause(20000)

//    });

// });



















// // const assert = require("assert");
// // const data= require('.././mockdata.json').details
// // describe("checks", () => {
// //   it.skip("check", () => {
// //     browser.url("https://dev-app.cloud.hashcorp.com/");
// //     const title = browser.getTitle();
// //     assert.equal(title, "Hashcloud Accounts");

// //     $("#email").addValue(data.email);
// //     browser.pause(1000)
// //     $("#password").addValue("Vineeth@12345");
// //     $(".btn").click();
// //     browser.pause(1000)

// //     $(".btn-outline-primary").click();
// //     browser.pause(1000)

// //     $("a*=Build a Consortium").click();
// //     browser.pause(1000)
// //     $(".select-css").selectByVisibleText("Version 1.4");
// //     // $('#devlopment').click()
// //     $(".btn-txt").click();
// //     browser.pause(1000)
// //     $(".form-control").addValue("naveen27");
// //     browser.pause(1000)
// //     $(".btn-txt").click(); //--- click button at Review
// //     browser.pause(40000);
// //     $(".btn-txt").click(); //----click button at Deploy
// //     browser.pause;
// //     $(".fa-play-circle").click();
// //     browser.pause(30000);
// //     done();
// //   });
// // });
// // describe("check", () => {
// //   beforeEach(() => {
// //     browser.url(
// //       "https://dev-hlf-console.cloud.hashcorp.com/?consortiumName=naveen23"
// //     );
// //    // https://dev-hlf-console.cloud.hashcorp.com///?consortiumName=

// //     $("#email").addValue("vineeth.b@msr-it.com");
// //     $("#password").addValue("Vineeth@12345");
// //     $(".btn").click();
// //   });

// //   it.skip("checks the org", () => {
// //     //const title = browser.getTitle();
// //     // assert.equal(title, "Hashcloud Accounts");
// //     $('a[href="/organizations"]').click();
// //     //click the organisation ul
// //     browser.pause(1000);
// //     $(".hn-card-btn").click();
// //     //click on organisation template

// //     $("#name").addValue("msrorg1");
// //     browser.pause(1000)
// //     $("#mspid").addValue("orgmsp1");
// //     browser.pause(1000)
// //     $(".s-btn").click();
// //     browser.pause(2000);
// //     $(".s-btn").click();
// //     browser.pause(2000);
// //   });
// //   it.skip("checking for CA", () => {
// //     $('a[href="/certauthorities"]').click();
// //     browser.pause(1000)
// //     $(".hn-card-btn").click();
// //     $(".form-control-sm").addValue("CA1");
// //     $(
// //       "#content > div > div > div > div.hn-or--content > div.create-cert-authority > div.hn-cert-authority-name-form > div > div > div > select"
// //     ).selectByIndex(1);
// //     browser.pause(1000)
// //     $(
// //       "#content > div > div > div > div.hn-or--content > div.c-btn > div > div > button"
// //     ).click();
// //     browser.pause(1000)
// //     $(".s-btn").click();
// //     browser.pause(200000);
// //   });
// //   it.skip("checking order", () => {
// //     $('a[href="/orderers"]').click();
// //     $(".hn-card-btn").click();
// //     browser.pause(1000)
// //     $(".form-control-sm").addValue("orderer3");
// //     browser.pause(1000)
// //     $(
// //       "#content > div > div > div > div > div.hn-or--content > div.create-peer > div.hn-peer-form > div > div > div > select"
// //     ).selectByIndex(1);
// //     browser.pause(1000)
// //     $(
// //       "#content > div > div > div > div > div.hn-or--content > div.c-btn > div > div > button"
// //     ).click();
// //     browser.pause(1000)
// // $('.s-btn').click()
// // //browser.setTimeout({ 'implicit': 5000 })

// //     browser.pause(2000);
    
// //     $('a[href="/peers"]').click();
// //     browser.pause(1000)
// //     $('*=Create Peer').click();
// //     browser.pause(1000)
// //     $('.form-control-sm').addValue('peer3');
// //     browser.pause(1000)
// //     $('#content > div > div > div > div > div.hn-or--content > div.create-peer > div.hn-peer-form > div > div > div > select').selectByIndex(1);
// //     browser.pause(1000)
// //     $('#content > div > div > div > div > div.hn-or--content > div.create-certif > div.hn-peer-form > div > div > div > div > select').selectByIndex(1)
// //     browser.pause(1000)
// //     $('.s-btn').click();
// //     browser.pause(1000)
// //     $('#content > div > div > div > div > div.hn-or--content > div.c-btn > div > div > a > button').click();
// //     browser.pause(20000)
// //     // $('.s-btn')
// //     // browser.pause(30000);
// //   });
// //   // it('checks the peer' , () =>{
// //   // })
// // });
