const { defineConfig } = require('cypress');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;
const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      // Adiciona o suporte ao Cucumber corretamente
      await addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', createEsbuildPlugin(config)); // Corrige o erro do evento inválido
      return config;
    },
    baseUrl: 'https://jsonplaceholder.typicode.com/posts',
    specPattern: ['cypress/api/*.spec.js', 'cypress/e2e/**/*.feature'], // Inclui API e E2E
    supportFile: false
  }
});
