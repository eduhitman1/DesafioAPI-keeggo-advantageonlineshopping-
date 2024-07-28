const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    base_url: "https://www.advantageonlineshopping.com",
    token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjozMzk1MTU3ODIsInN1YiI6ImlhbWVkdWFyZG9uZWlsbCIsInJvbGUiOiJVU0VSIn0.o98m5JVg5pg1KfLNmAPITZhmO2x3h44t5GSoN9KicgY"
  },
  e2e: {
    viewportWidth: 1000,
    viewportHeight: 660,
    watchForFileChanges: false,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportFilename: '[status]_[datetime]-[name]-report',
      timestamp: 'longDate',
      reportDir: 'cypress/cucumber-report/',
      overwrite: true,
      html: false,
      json: true,
      charts: true,
      reportPageTitle: 'Resultado Cypress',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
      saveJson: true,
      ignoreVideos: true
    },
    projectId: 'mwk2hp',
    defaultCommandTimeout: 240000,
    pageLoadTimeout: 240000,
    requestTimeout: 180000,
    responseTImeout: 180000,
    taskTimeout: 180000,
    numTestsKeptInMemory: 0,
    scrollBehavior: 'center',
    chromeWebSecurity: false,
    video: true,
    experimentalMemoryManagement: true,
    screenshotOnRunFailure: true,
    modifyObstructiveCode: true,
    downloadsFolder: 'cypress/downloads',
    specPattern: 'cypress/e2e/*.feature',
    setupNodeEvents(on, config) {
    return require('./cypress/plugins/index.js')(on, config)
    },
  }
  
  
});


