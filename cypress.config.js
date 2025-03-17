const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;


module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      return config;
    },
    specPattern: [
      "cypress/api/**/*.spec.js",
      "cypress/e2e/step_definitions/**/*.feature"
    ],
    supportFile: "cypress/support/e2e.js",
  },
  cucumberPreprocessor: {
    stepDefinitions: "cypress/e2e/step_definitions/**/*.{js,ts}",
  },
});