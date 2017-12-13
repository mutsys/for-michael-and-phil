const phraseElementSeparator = /\s+/;

const wordCharacters = /(\w+)/;

const leadingConsonantCharacters = /^(([Qq]u)|[^aAeEiIoOuU]+)/;

const upperCaseCharacter = /[A-Z]/;

const nonWordCharacters = /(\W+)/;

const zeroLengthString = "";

const singleSpace = " ";

const pigLatinWordSuffix = "ay";

interface PhraseElement {
    word: string;
    punctuation: string;
}

const splitPhraseIntoElements = (phrase: string): string[] => {
    return phrase.split(phraseElementSeparator);
};

const parsePhraseElement = (element: string): PhraseElement => {
    const wordCharsMatches = element.match(wordCharacters);
    const puncCharsMatches = element.match(nonWordCharacters);
    let word = zeroLengthString;
    if (!!wordCharsMatches) {
        word = wordCharsMatches[0];
    }
    let punctuation = zeroLengthString;
    if (!!puncCharsMatches) {
        punctuation = puncCharsMatches[0];
    }
    return {
        punctuation,
        word
    };
};

const wordIsCapitalized = (word: string): boolean => {
    return upperCaseCharacter.test(word.substr(0, 1));
};

const capitalizeWord = (word: string): string => {
    const firstCharacter = word.substr(0, 1);
    return `${firstCharacter.toUpperCase()}${word.length > 1 ? word.substr(1) : zeroLengthString}`;
};

const getWordLeadingCharacters = (word: string): string => {
    const leadingConsonants = word.match(leadingConsonantCharacters);
    if (!!leadingConsonants) {
        return leadingConsonants[1];
    }
    return zeroLengthString;
};

const getWordTrailingCharacters = (word: string, wordLeadingCharacters: string): string => {
    return word.length >= wordLeadingCharacters.length + 1 ? word.substr(wordLeadingCharacters.length) : zeroLengthString;
};

const translateEnglishWordToPigLatin = (englishWord: string): string => {
    const englishWordLeadingCharacters = getWordLeadingCharacters(englishWord);
    const englishWordTrailingCharacters = getWordTrailingCharacters(englishWord, englishWordLeadingCharacters);
    const pigLatinWordLeadingCharacters = wordIsCapitalized(englishWord) ? capitalizeWord(englishWordTrailingCharacters) : englishWordTrailingCharacters;
    const pigLatinWordTrailingCharacter = englishWordLeadingCharacters.toLowerCase();
    return `${pigLatinWordLeadingCharacters}${pigLatinWordTrailingCharacter}${pigLatinWordSuffix}`;
};

const translatePhraseElement = (element: PhraseElement): string => {
    return `${translateEnglishWordToPigLatin(element.word)}${element.punctuation}`;
};

export const translateEnglishToPigLatin = (phrase: string): string => {
    return splitPhraseIntoElements(phrase)
        .map(parsePhraseElement)
        .map(translatePhraseElement)
        .join(singleSpace);
};
