const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://admin.loyaltybeta.cxforge.com',
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    video: false,
    screenshotOnRunFailure: true,

    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false, // Prevent overwriting reports
      html: true,
      json: true, // Ensure JSON files are generated
      saveJson: true, // Explicitly save JSON reports
      charts: true,
      reportPageTitle: 'Cypress Report',
      embeddedScreenshots: true,
      inlineAssets: true,
      showHooks: 'always',
      includeStdErr: true,
      timestamp: 'mm/dd/yyyy, hh:mm:ss TT',
      quiet: false
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});