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
};
export default config;
