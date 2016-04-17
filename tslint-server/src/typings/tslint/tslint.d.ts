

declare module Lint.Configuration {
    function findConfiguration(configFile: string, inputFileLocation: string): any;
}
declare module Lint {
    interface LintResult {
        failureCount: number;
        failures: any;
        format: string;
        output: string;
    }
    interface ILinterOptions {
        configuration: any;
        formatter: string;
        formattersDirectory: string;
        rulesDirectory: string | string[];
    }
    class Linter {
        static VERSION: string;
        private fileName;
        private source;
        private options;
        constructor(fileName: string, source: string, options: ILinterOptions);
        lint(): LintResult;
        private getRelativePath(directory);
        private containsRule(rules, rule);
		static findConfiguration(configFile: string, inputFileLocation: string): any;
        static findConfigurationPath(configFile: string, inputFileLocation: string): string
    }
}
declare module "tslint" {
    import Linter = Lint.Linter;
    export = Linter;
}