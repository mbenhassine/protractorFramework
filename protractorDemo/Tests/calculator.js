let homepage = require('../pages/homepage');

describe('calculator tests', function () {
    it('add test', function () {

        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFistNumber('4');
        homepage.enterseconNumber('5');
        homepage.ClickGo();
        homepage.verifyNmber('9');
        browser.sleep('2000')
    });
    it('sub test', function () {

        homepage.enterFistNumber('5');
        homepage.ChoseOperation();
        homepage.enterseconNumber('2');
        homepage.ClickGo1();
        homepage.verifyNmber('3');
        browser.sleep('3000')
    });
});