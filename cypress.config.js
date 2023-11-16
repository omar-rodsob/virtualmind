const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://careers.virtualmind.com/hiring/QA-Fintech?origin=Organic&suborigin=Institutional&originDate=&fromHiring=true'
  },
});
