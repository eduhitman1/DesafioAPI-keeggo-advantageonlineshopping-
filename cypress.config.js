const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    base_url: "https://www.advantageonlineshopping.com",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjozMzk1MTU3ODIsInN1YiI6ImlhbWVkdWFyZG9uZWlsbCIsInJvbGUiOiJVU0VSIn0.o98m5JVg5pg1KfLNmAPITZhmO2x3h44t5GSoN9KicgY"
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


