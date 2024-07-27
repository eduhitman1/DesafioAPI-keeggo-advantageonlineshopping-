const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    base_url: "https://api.typeform.com/",
    email: "edu.hitman01.eh@gmail.com",
  },
  // COM CUCUMBER OU SEM ENTÃO COMENTE
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor',cucumber())
    },
    specPattern: "cypress/e2e/step_definitions/*.feature"
  },
  // COM CUCUMBER OU SEM ENTÃO COMENTE
});


