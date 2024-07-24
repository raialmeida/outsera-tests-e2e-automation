const { defineConfig } = require('cypress')
const preprocessor = require('@badeball/cypress-cucumber-preprocessor')
const browserify = require('@badeball/cypress-cucumber-preprocessor/browserify')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')

module.exports = defineConfig({
    e2e: {
        env: {
            omitFiltered: true,
            filterSpecs: true
        },
        baseUrl: 'https://jsonplaceholder.typicode.com',
        specPattern: '**/*.feature',
        video: false,
        fixturesFolder: false,
        pageLoadTimeout: 120000, 
        setupNodeEvents: async function (on, config) {
            await preprocessor.addCucumberPreprocessorPlugin(on, config)
            on('file:preprocessor', browserify.default(config))
            allureWriter(on, config)
            return config
        }
    }
})