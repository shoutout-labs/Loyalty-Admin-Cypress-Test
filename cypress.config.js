const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://admin.uat.loyaltybeta.cxforge.com',
    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    video: false,
    screenshotOnRunFailure: true, // take screenshots on test failure

    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results', 
      overwrite: false,              
      html: false,                   
      json: true                   
    },

    setupNodeEvents(on, config) {
      
      return config;
    },
  },
});
