var GmailLoginPage = function (){
	var emailInput = element(by.xpath('//input[@type="email"]'));

	 GmailLoginPage.prototype.setEmail = function (email) {
        emailInput.sendKeys(email);
    };
};

module.exports = GmailLoginPage;