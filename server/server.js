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
		.post('/add/:id', async (ctx, next) => {
			const state = await db.get('basket').value()
			const productsId = ctx.params.id.split(',')
			const productLength = productsId.length
			let i = 0
			let products = []
			while(i < productLength) {
				const currentId = Number(productsId[i])
				const product = await db.get('products').find({ id: currentId }).value()
				products.push(product)
				i++
			}
			const newState = state.concat(products)
			console.log(newState)
			await db.set('basket', newState).write()
			ctx.body = await db.get('basket')
		})
		.post('/remove/all/', async (ctx, next) => {
			const newState = []
			await db.set('basket', newState).write()
			ctx.body = await db.get('basket')
		})
		.post('/remove/:id', async (ctx, next) => {
			const state = await db.get('basket').value()
			const id = Number(ctx.params.id)
			const current = await db.get('basket').find({ id: id }).value()
			const index = state.indexOf(current)
			state.splice(index, 1);
			await db.set('basket', state).write()
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




