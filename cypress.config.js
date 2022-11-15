const { defineConfig } = require("cypress");
const testomatioReporter = require('@testomatio/reporter/lib/adapter/cypress-plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      testomatioReporter(on, config);
      return config;
    },
    experimentalSessionAndOrigin: true,
    watchForFileChanges: false,
    defaultCommandTimeout: 3000,
    "baseUrl":"https://pushing-front.vercel.app/"
  },
});

require('@applitools/eyes-cypress')(module);
