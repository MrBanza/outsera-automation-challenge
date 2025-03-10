const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implementar escutadores de eventos aqui
    },
    baseUrl: 'https://jsonplaceholder.typicode.com/posts',
    specPattern: 'cypress/api/*.spec.js',
  },
});
