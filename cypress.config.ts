import { defineConfig } from 'cypress'
export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: '**/integration/**/*.feature',
    supportFile: '**/support/index.ts',
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    watchForFileChanges: false,
    screenshotsFolder:"cypress/cucumber-json",

  },
})