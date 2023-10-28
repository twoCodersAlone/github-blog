// import { loadEnvConfig } from '@next/env';
import { defineConfig } from 'cypress';

// const { combinedEnv } = loadEnvConfig(process.cwd());
export default defineConfig({
  // env: combinedEnv,
  e2e: {
    supportFile: './cypress/support/e2e.ts',
    baseUrl: 'http://localhost:3000',
    retries: {
      runMode: 1,
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    screenshotOnRunFailure: false,
  },
});
