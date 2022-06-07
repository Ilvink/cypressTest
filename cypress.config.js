const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1020,
  viewportWidth: 1278,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://rc.eot-agregator.ru/',
    excludeSpecPattern: '**/2-advanced-examples/*',
  },
})
