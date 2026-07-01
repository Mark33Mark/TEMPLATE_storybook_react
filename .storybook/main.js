const config = {
    stories: ['../src/components/**/*.stories.@(js|jsx|ts|tsx)', '../src/hooks/**/*.stories.@(js|jsx|ts|tsx)'],
    staticDirs: ['../public'],
    addons: ['@storybook/addon-docs', '@storybook/addon-vitest', '@storybook/addon-a11y'],
    framework: {
        name: '@storybook/react-vite',
        options: {},
    },
    core: {
        allowedHosts: ['.watsonised.me'],
    },
    // override the inner Vite HMR behavior for successful websocket connection
    async viteFinal(config) {
        // detect if Vitest is running the headless test suite
        const isTesting = process.env.VITEST === 'true';

        return {
            ...config,
            server: {
                ...config.server,
                // If testing, kill HMR entirely. Otherwise, pass your proxy settings.
                hmr: isTesting
                    ? false
                    : {
                        protocol: 'wss',
                        clientPort: 443,
                        path: 'vite-hmr',
                    },
            },
        };
    },
};
export default config;
