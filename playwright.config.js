const { devices } = require('@playwright/test');

/** @type {import('@playwright/test').PlaywrightTestConfig} */
module.exports = {
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  use: {
    // Run with a visible browser and slow down actions so steps are easy to see
    headless: false,
    launchOptions: {
      // slow down Playwright actions (ms) so each step is visible
      // increased to 1000ms to make each click/type easier to follow (student-friendly)
      slowMo: 1000
    },
    viewport: { width: 1280, height: 720 },
    actionTimeout: 5000,
    ignoreHTTPSErrors: true
  }
};
