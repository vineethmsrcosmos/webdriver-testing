const assert= require('assert');
const data= require('.././mockdata.json').details

describe('cehcsk', () =>{
  beforeEach( ()=>{

    browser.url(
            "https://dev-hlf-console.cloud.hashcorp.com/?consortiumName="+data.signup.Consirtumname
          );
      
      
          $("#email").addValue(data.signup.email);
          browser.pause(3000);
          $("#password").addValue(data.signup.password);
          browser.pause(3000);
          $(".btn").click();
          browser.pause(2000);
  })
  it('checks' , ()=>{
     
    $('a[href="/organizations"]').click();
    //click the organisation ul
    browser.pause(2000);
    // browser.pause(1000);
    $(".hn-card-btn").click();
    //click on organisation template
browser.pause(2000)
    $("#name").addValue(data.Org.name);
    browser.pause(4000);
    $("#mspid").addValue(data.Org.mspid);
    browser.pause(4000);
    $(".s-btn").click();
    browser.pause(4000);
    $(".s-btn").click();
    browser.pause(4000);
    //-------creating CA---
    $('a[href="/certauthorities"]').click();
    browser.pause(2000);
    $(".hn-card-btn").click();
    browser.pause(5000);
    $(".form-control-sm").addValue(data.CA.name);
    browser.pause(2000);
    $(
      "#content > div > div > div > div.hn-or--content > div.create-cert-authority > div.hn-cert-authority-name-form > div > div > div > select"
    ).selectByIndex(data.CA.no);
    browser.pause(5000);
    $(
      "#content > div > div > div > div.hn-or--content > div.c-btn > div > div > button"
    ).click();
    browser.pause(5000);
    $(".s-btn").click();
    browser.pause(5000);
    //----------- Creating Orderer ------

    $('a[href="/orderers"]').click();
    browser.pause(4000);
    $(".hn-card-btn").click();
    browser.pause(5000);

    $(".form-control-sm").addValue(data.orderer.name);
    browser.pause(4000);
    $(
      "#content > div > div > div > div > div.hn-or--content > div.create-peer > div.hn-peer-form > div > div > div > select"
    ).selectByIndex(data.orderer.no);
    browser.pause(5000);
    $(
      "#content > div > div > div > div > div.hn-or--content > div.c-btn > div > div > button"
    ).click();
    browser.pause(5000);
    $(".s-btn").click();
   browser.pause(5000);
//-------- Creating peer -----


$('a[href="/peers"]').click();
browser.pause(3000)
$('*=Create Peer').click();
browser.pause(3000)
$('.form-control-sm').addValue(data.peer.name);
browser.pause(3000)
$('#content > div > div > div > div > div.hn-or--content > div.create-peer > div.hn-peer-form > div > div > div > select').selectByIndex(data.peer.no);
browser.pause(3000)
$('#content > div > div > div > div > div.hn-or--content > div.create-certif > div.hn-peer-form > div > div > div > div > select').selectByIndex(data.peer.no1)
browser.pause(3000)
$('.s-btn').click();
browser.pause(3000)
$('#content > div > div > div > div > div.hn-or--content > div.c-btn > div > div > a > button').click();
browser.pause(20000)

  }) 
})




















































































































