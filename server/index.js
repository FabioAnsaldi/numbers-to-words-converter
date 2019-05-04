'use strict';

const history = require('connect-history-api-fallback');
const {Server} = require("./lib/Server");
const config = `${process.env.SERVER_CONFIG.app.config}`;

const bundleRegex = new RegExp(`^\\/\\d+\\.(${config.app.bundle.replace('.js', '')})\\..+`);
const historyOption = {

    verbose: true,
    index: `${config.app.publicPath}index.html`,
    rewrites: [
        {from: `/${config.app.bundle}`, to: `/${config.app.bundle}`},
        {
            from: bundleRegex, to: (context) => {

                return context.parsedUrl.pathname;
            }
        },
        {from: 'manifest.json', to: '/manifest.json'},
        {from: /^\/.*$/, to: '/'}
    ],
    disableDotRule: true
};
Server.app.use(history(historyOption));
Server.setStaticRoute(config.app.publicPath, `/${config.app.publicPath}`);
Server.start();
