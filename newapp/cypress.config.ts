import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('after:screenshot', (details) => {
        console.log('Screenshot taken: ', details.path);
      });
    },
  },
});
