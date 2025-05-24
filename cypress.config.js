const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://admin.uat.loyaltybeta.cxforge.com', // Main app URL
    experimentalSessionAndOrigin: true, // Required for cy.origin()
    chromeWebSecurity: false, // Needed if there's cross-origin access or iframe usage
    defaultCommandTimeout: 10000, // Wait time for DOM elements
    pageLoadTimeout: 60000, // In case page takes time to load
    video: false, // Turn this on if you want recordings
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
