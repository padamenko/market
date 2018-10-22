<template>
  <div class="catalog">
    <h1>Товаров в корзине {{ basketLength }}</h1>
		<div class="products">
			<div class="product" v-for="(product, index) in products" :key="index">
				<div class="name">{{ product.name }}</div>
				<div class="price">{{ product.price }}р</div>
				<div class="button" @click="addProduct(product)">В корзину</div>
			</div>
		</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Catalog',
  data () {
    return {
			products: [],
			basket: [],
			newBasket: [],
    }
	},
	computed: {
		basketLength() {
			return this.basket.length
		}
	},
	mounted() {
    axios
      .get('http://localhost:3000/products')
			.then(response => (this.products = response.data));
		axios
			.get('http://localhost:3000/basket')
			.then(response => {
				this.basket = response.data
			});
	},
	methods: {
		addProduct(product) {
			this.newBasket = this.basket
			this.newBasket.push(product)
			const str = JSON.stringify(this.newBasket);
			console.log(str)
			axios.post('http://localhost:3000/add', this.newBasket)
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}
}
</script>

<style scoped>
.catalog h1{
	font-family: Arial, Helvetica, sans-serif;
	font-size: 21px;
	text-align: center;
}
.products{
	display: flex;
	flex-wrap: wrap;
	align-items: center;
}
.product{
	width: 200px;
	text-align: center;
	margin: 10px;
}
.name{
	font-size: 21px;
	font-weight: bold;
	margin-bottom: 20px
}
.price{
	font-size: 18px;
	margin-bottom: 20px;
}
.button{
	cursor: pointer;
	padding: 7px 12px;
	background: blue;
	color: white;
	font-size: 18px;
	font-weight: bold;
	text-align: center;
	margin: 0 auto;
}
.button:hover{
	background-color: red;
}
</style>
