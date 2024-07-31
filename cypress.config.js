const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default
const { allureCypress } = require("allure-cypress/reporter")

module.exports = defineConfig({
    e2e: {
        env: {
            omitFiltered: true,
            filterSpecs: true
        },
        baseUrl: 'https://jsonplaceholder.typicode.com',
        specPattern: 'cypress/e2e/features/*.feature',
        video: false,
        fixturesFolder: false,
        pageLoadTimeout: 12000,
        setupNodeEvents(on, config) {
            on('file:preprocessor', cucumber())
            allureCypress(on);
        }
    }
})