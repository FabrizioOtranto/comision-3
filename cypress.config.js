const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
  experimentalSessionAndOrigin: true
    },
    experimentalSessionAndOrigin: true,
    watchForFileChanges: false,
    defaultCommandTimeout: 3000,
    "baseUrl":"https://pushing-front.vercel.app/"
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true
  },
});
