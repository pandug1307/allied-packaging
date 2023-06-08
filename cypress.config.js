const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  screenshotOnRunFailure : true,
  reporterOptions: {
      charts: true,
      reportPageTitle: 'Cypress Inline Reporter',
      embeddedScreenshots: true, 
      inlineAssets: true, //Adds the asserts inline
      },
  e2e: {
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
          console.log('override before:run');
          await beforeRunHook(details);      
          });

        on('after:run', async () => {
            console.log('override after:run');         
            await afterRunHook();        
            });

      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here,
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "http://168.61.189.83/#/login",
    chromeWebSecurity : true,
    experimentalSessionAndOrigin: true,
    pageLoadTimeout: 240000,
    screenshotOnRunFailure : true,
    trashAssetsBeforeRuns: true,
    video: true,
    viewportHeight:1080,
    viewportwidth:1920,
  }
});