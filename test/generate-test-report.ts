import * as CucumberHtmlReporter from "cucumber-html-reporter";

const options: CucumberHtmlReporter.Options = {
    jsonFile: "test-results.json",
    output: "test-results.html",
    theme: "bootstrap"
};

CucumberHtmlReporter.generate(options);
