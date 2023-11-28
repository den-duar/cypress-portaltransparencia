const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://transparencia.joaopessoa.pb.gov.br/',
    specPattern: "**/*.feature",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
  "screenshotOnRunFailure": false
});
