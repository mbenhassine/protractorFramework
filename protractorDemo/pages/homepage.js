let homepage = function(){

    let FistNumber_input = element(by.model('first'));
   
    let SecondNumber_input = element(by.model('second'));

    let Operationbutton =  element(by.cssContainingText('option', '-'));
   
    let GoButton =   element(by.css('[ng-click="doAddition()"]'));

    this.get =function(url){
        browser.get(url);
    };

    this.enterFistNumber = function(firstN){
        FistNumber_input.sendKeys(firstN);
    };

    this.ChoseOperation = function(Operation){
        Operationbutton.click(Operation);
    };

    this.enterseconNumber = function(secondN){
        SecondNumber_input.sendKeys(secondN);
    };

    this.ClickGo = function(){
        GoButton.click();
    };

    this.verifyNmber = function(result){
        let outPut = element(by.cssContainingText('.ng-binding', result));
        expect(outPut.getText()).toEqual(result);
    }
};
module.exports = new homepage();