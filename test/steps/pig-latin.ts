import { defineSupportCode } from "cucumber";

import * as chai from "chai";
const expect = chai.expect;

import { translateEnglishToPigLatin } from "main";

class PigLatinTranslator {

    public englishPhrase: string;
    public pigLatinPhrase: string;

    public convertEnglishToPigLatin(): void {
        this.pigLatinPhrase = translateEnglishToPigLatin(this.englishPhrase);
    }

}

defineSupportCode(function({ Given, Then, When, setWorldConstructor }) {

    setWorldConstructor(PigLatinTranslator);

    Given(/^an english phrase (.+)$/, function(englishPhrase) {
        this.englishPhrase = englishPhrase;
    });

    When("I translate it to pig latin", function() {
        this.convertEnglishToPigLatin();
    });

    Then(/^the equivalent pig latin phrase should be (.+)$/, function(pigLatinPhrase) {
        expect(this.pigLatinPhrase).to.be.equal(pigLatinPhrase);
    });

});
