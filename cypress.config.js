const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = {
  ...(on, config) => {
    on(
      "file:preprocessor",
      cucumber({
        // options for @badeball/cypress-cucumber-preprocessor
        step_definitions: "cypress/e2e/step_definitions/",
      })
    );

    return {
      e2e: {
        setupNodeEvents(on, config) {
          // implement node event listeners here
        },
        specPattern: [
          'cypress/e2e/**/*.feature',
          'cypress/api/**/*.feature',
          'cypress/mobile/**/*.feature',
        ],
        supportFile: false,
      },
    };
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
