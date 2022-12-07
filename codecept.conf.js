/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://med.studio/',
      show: true,
      browser: 'chromium',
      windowSize: "1920x1080",
      //waitForNavigation: "load",
      //waitForAction: 500 
    }
  },
  include: {
    I: './steps_file.js'
  },
  plugins: {
    "allure": {
      "enabled": true
    }
  },
  name: 'tests'
}