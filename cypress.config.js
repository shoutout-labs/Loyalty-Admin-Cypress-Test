const { defineConfig } = require('cypress');
const mochawesome = require('cypress-mochawesome-reporter/plugin');
const installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://admin.loyaltybeta.cxforge.com',
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    video: false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: false,
      json: true,
    },
    setupNodeEvents(on, config) {
      // 👇 add both plugins
      mochawesome(on);
      installLogsPrinter(on);
      return config;
    },
  },
});
