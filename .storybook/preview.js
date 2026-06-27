import { initialize, mswLoader } from 'msw-storybook-addon';
import '../src/styles';     // you only have to import the style sheets with global settings
                            // as I'm not importing styles into each component, I'm importing 
                            // all styles here.

// register the msw addon
/* v8 ignore next */
initialize({
    onUnhandledRequest(req, print) {
        const url = new URL(req.url);

        // Stop Storybook's internal asset/source requests from flooding the console
        if (
            url.pathname.startsWith('/src/') ||
            url.pathname.match(/\.(jsx|js|ts|tsx|css|png|jpg|svg)$/) ||
            (url.hostname.includes('localhost') && url.pathname.includes('sb-')) // Storybook internal files
        ) {
            return;
        }

        // Keep warnings active for actual unhandled API endpoints
        print.warning();
    },
});

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    loaders: [mswLoader],
};

export default preview;
