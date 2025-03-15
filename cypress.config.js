const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    // Caminho para os testes e2e
    specPattern: ["cypress/e2e/api/**/*.spec.js", "cypress/e2e/features/**/*.feature"],
    supportFile: "cypress/support/e2e.js",
  },
  cucumberPreprocessor: {
    stepDefinitions: "cypress/e2e/step-definitions/**/*.{js,ts}",
  },
});