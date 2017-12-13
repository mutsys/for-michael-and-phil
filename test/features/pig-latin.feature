Feature: Translate English to Pig Latin
In order to translate english to pig latin
As a user
I want a function that accepts an english language phrase as input and returns the equivalent phrase in pig latin

    Scenario Outline:
        Given an english phrase <englishPhrase>
        When I translate it to pig latin
        Then the equivalent pig latin phrase should be <pigLatinPhrase>

    Examples:
        | englishPhrase   | pigLatinPhrase        |
        | hello           | ellohay               |
        | hello world     | ellohay orldway       |
        | Hello world     | Ellohay orldway       |
        | Hello, world!!  | Ellohay, orldway!!    |
        | eat apples      | eatay applesay        |
        | quick brown fox | ickquay ownbray oxfay |
