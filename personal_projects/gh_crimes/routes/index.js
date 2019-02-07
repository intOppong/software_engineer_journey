const authRoutes = require('./auth');
const articleRoutes = require('./article');

module.exports = router => {
	authRoutes(router);
	articleRoutes(router);
}
