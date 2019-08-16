# market
const logger = require('koa-morgan')
server
	.use(logger('tiny')).use(router.routes())
	.use(router.allowedMethods())
server.listen(3000)

# serve at localhost:3000 (start from market)
npm run start

# serve with hot reload at localhost:8080 (start from market/client)
npm run dev