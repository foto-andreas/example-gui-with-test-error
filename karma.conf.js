// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage'),
            require('karma-junit-reporter'),
            require('@angular-devkit/build-angular/plugins/karma'),
            require('karma-verbose-reporter')
        ],
        client: {
            captureConsole: true,
            clearContext: false // leave Jasmine Spec Runner output visible in browser
        },

        coverageReporter: {
            reporters:[
                {type: 'lcov', dir:'coverage/html', subdir: '.'},
                {type: 'cobertura', dir:'coverage/cobertura', subdir: '.'}
            ],
        },

        junitReporter: {
            outputDir: 'build/reports', // results will be saved as $outputDir/$browserName.xml
            outputFile: 'karma.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
            suite: '', // suite will become the package name attribute in xml testsuite element
            useBrowserName: true, // add browser name to report and classes names
            nameFormatter: undefined, // function (browser, result) to customize the name attribute in xml testcase element
            classNameFormatter: undefined, // function (browser, result) to customize the classname attribute in xml testcase element
            properties: {} // key value pair of properties to add to the <properties> section of the report
        },
        // Reporter 'verbose' hinzufügen um detailliertere Informationen zu erhalten.
        reporters: ['progress', 'kjhtml', 'junit', 'coverage', 'verbose'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_DEBUG,
        autoWatch: true,
        browsers: ["ChromeWithoutSearchSelect"],
        customLaunchers: {
            ChromeWithoutSearchSelect: {
                base: "Chrome",
                flags: ["--disable-search-engine-choice-screen"],
            },
        },
        singleRun: false,
        failOnFailingTestSuite: false
    });
};
