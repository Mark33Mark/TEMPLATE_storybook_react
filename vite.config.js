import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    plugins: [react()],
    server: {
        open: true,
        port: 3333,
        allowedHosts: ['.watsonised.me'],
        watch: {
            ignored: [
                '**/node_modules/**', 
                '**/.git/**',
                '**/dist/**',
                '**/.storybook/**',
                '**/storybook-static/**',
            ],
        },
    },
    test: {
        projects: [
            {
                extends: true,
                plugins: [
                    // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
                    storybookTest({
                        configDir: path.join(dirname, '.storybook'),
                    }),
                ],
                test: {
                    name: 'storybook',
                    browser: {
                        enabled: true,
                        headless: true,
                        provider: playwright({}),
                        instances: [
                            {
                                browser: 'chromium',
                            },
                        ],
                    },
                    setupFiles: ['.storybook/vitest.setup.js'],
                },
            },
        ],
    },
});
