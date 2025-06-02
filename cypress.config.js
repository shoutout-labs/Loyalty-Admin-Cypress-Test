
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://admin.uat.loyaltybeta.cxforge.com',
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
      html: true,                 
      json: true,
      charts: true,
      reportPageTitle: 'Cypress Report',
      embeddedScreenshots: true,
      inlineAssets: true
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); 
      return config;
    },
  },
});
