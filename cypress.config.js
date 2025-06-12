const { defineConfig } = require('cypress');
const mochawesome = require('cypress-mochawesome-reporter/plugin');

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
      overwrite: true, 
      html: true,       //Generate a readable HTML report
      json: true,
      embeddedScreenshots: true, 
      inlineAssets: true         
    },

    setupNodeEvents(on, config) {
      mochawesome(on);
      return config;
    },
  },
});
