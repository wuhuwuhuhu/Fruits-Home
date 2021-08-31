const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
	app.use(
		createProxyMiddleware('/fruit', {
			target: 'https://www.fruityvice.com/api',
			secure: false,
			changeOrigin: true,
		})
	);

	app.use(
		createProxyMiddleware('/images/eng-intern-interview', {
			target: 'https://passport-media.s3-us-west-1.amazonaws.com/',
			secure: false,
			changeOrigin: true,
		})
	);
};
