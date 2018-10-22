const Koa = require('koa')
const cors = require('@koa/cors');
const logger = require('koa-morgan')
const Router = require('koa-router')
const bodyParser = require("koa-bodyparser")
const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileAsync')

const adapter = new FileAsync('db.json')

const server = new Koa()
server.use(bodyParser())
const router = new Router()
const db = low(adapter)
low(adapter)
  .then(db => {
		router
		.get('/', ctx => {
			ctx.body = 'server main'
		})
		.get('/products', async (ctx, next) => {
			ctx.body = await db.get('products')
		})
		.get('/basket', async (ctx, next) => {
			ctx.body = await db.get('basket')
		})
		.post('/add', async (ctx, next) => {
			const newState = ctx.request.body
			await db.set('basket', newState).write()
			ctx.body = await db.get('basket')
		})
		.get('/product/:id', async (ctx, next) => {
			const id = Number(ctx.params.id)
			const product = await db.get('products').find({ id: id }).value()
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
			.use(cors())
			.use(router.routes())
			.use(router.allowedMethods())
			server.listen(3000)
  })




