module.exports = function(options) {
	const port = 3000;
	let devServer = {
		contentBase: './public',
		port: port,
		https: true,
		historyApiFallback: {
            rewrites: [
                {
                    from: /./,
                    to: 'built/app/entry.html'
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
