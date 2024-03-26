const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
  },
  env: {
    "requestMode": true
  },
  e2e: {
    specPattern: 'cypress/test/*.{js,jsx,ts,tsx}'
  }
});
