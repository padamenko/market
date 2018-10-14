const Koa = require('koa')
const logger = require('koa-morgan')
const Router = require('koa-router')
const BodyParser = require("koa-bodyparser")
const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

const adapter = new FileAsync('db.json')

const server = new Koa()
const router = new Router()
low(adapter)
  .then(db => {
		router
			.get('/', ctx => {
				ctx.body = 'test22'
			})
			.get('/products', ctx => {
				ctx.body = db.get('products')
			})
			.get('/bascet', ctx => {
				ctx.body = 'bascet'
			})
			.get('/product/:id', (ctx, next) => {
				const id = Number(ctx.params.id)
				const product = db.get('products').find({ id: id }).value()
				if (product) {
						ctx.body = product
				} else {
						ctx.body = 'Not found'
						ctx.status = 404
				}
		})
	})
	.then(() => {
    server
			.use(logger('tiny'))
			.use(router.routes())
			.use(router.allowedMethods())
			server.listen(3000)
  })




