import * as cucumberHtmlReporter from "cucumber-html-reporter";

export = CucumberHtmlReporter;

declare const CucumberHtmlReporter: {
    generate: (options?: CucumberHtmlReporter.Options) => CucumberHtmlReporter.Suite;
};

declare namespace CucumberHtmlReporter {

    export interface Options {
        jsonFile?: string;
        name?: string;
        brandTitle?: string;
        output?: string;
        theme?: string;
        screenshotsDirectory?: string;
        storeScreenshots?: boolean;
        metadata?: any;
        templateDir?: string;
        launchReport?: boolean;
    }

    export interface Suite {
        name: {
            plain: string;
            sanitized: string;
        };
        brandTitle: string;
        version: string;
        time: Date;
        features: {
            isFailed: boolean;
            passed: number;
            failed: number;
            ambiguous: number;
        };
        suites: Suite[];
        scenarios: {
            passed: number;
            failed: number;
            skipped: number;
            pending: number;
            notdefined: number;
            ambiguous: number;
        };
    }

}
