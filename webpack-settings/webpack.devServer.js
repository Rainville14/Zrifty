const BUILD = require('../build.js');
const path = require('path');

module.exports = function(options) {
	const port = 3000;
	let devServer = {
		contentBase: path.join(__dirname, '../public'),
		disableHostCheck: true,
		port: port,
		host: 'localhost',
		https: true,
		inline: true,
		open: false,
		historyApiFallback: {
            rewrites: [
                {
                    from: /./,
                    to: '/index.html'
                }
            ]
        }
	}
	if (!!options.IS_MOCK_SERVER) {
		devServer.proxy = {
			'/api': {
				target: `https://localhost:${port}/data`,
				secure: false,
				pathRewrite(req, options) {
					return req + '.json'
				}
			}
		};
	} else {
		devServer.proxy = {
			'/api': {
				target: 'https://azu-dapigate01:8080',
                changeOrigin: true,
				secure: false
			}
		};
	}
    return devServer;
	
;}
