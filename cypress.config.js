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
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: true, // ensures each test run replaces the last
      html: false,
      json: true
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
