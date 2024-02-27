import { defineConfig } from "cypress";

const xlsx = require("node-xlsx").default;
const fs = require("fs"); // for file
const path = require("path")

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://uitestingplayground.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      on("task", {
        parseXlsx({ filePath }) {
          return new Promise((resolve, reject) => {
            try {
              const jsonData = xlsx.parse(fs.readFileSync(filePath));
              resolve(jsonData);
            } catch (e) {
              reject(e);
            }
          });
        },
      });
    },
    env:{
      stage:'https://stage.pasv.us',
       prod:'https://coding.pasv.us/course',
       test:'Hello World!',
       demoQA: 'https://demoqa.com',
       homeWork: 'https://play1.automationcamp.ir/expected_conditions.html',
       herokuapp: 'https://the-internet.herokuapp.com',
       email: 'elenaharea87@gmail.com',
       password: 'katea2011'
       
    },
  },
  retries: {
    runMode: 3,
    openMode: 2,
  },
  video: true,
    screenshotOnRunFailure: true,
  defaultCommandTimeout:16_000,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});
