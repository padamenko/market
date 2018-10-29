<template>
  <div class="basket">
		<Nav 
			:basketLength="basketLength"
			:basketPrice="basketPrice"
		/>
		<div class="products">
			<div class="product" v-for="(product, index) in basket" :key="index">
				<div class="name">{{ product.name }}</div>
				<div class="price">{{ product.price }}р</div>
				<div class="button" @click="removeProduct(product.id)">Удалить</div>
			</div>
		</div>
		<div class="clear" @click="removeAll">Очистить корзину</div>
		<div class="popup" v-show="popup">{{ popupMsg }}</div>
  </div>
</template>

<script>
import axios from 'axios'

import Nav from './Nav.vue'

export default {
	name: 'Basket',
	components: {
		Nav
	},
  data () {
    return {
			basket: [],
			popupMsg: '',
			popup: false
    }
	},
	computed: {
		basketLength() {
			return this.basket.length
		},
		basketPrice() {
			let i = 0
			let price = 0
			while(i < this.basketLength) {
				price += this.basket[i]['price']
				i++;
			}
			return price
		}
	},
	mounted() {
		this.getBasket()
	},
	methods: {
		removeProduct(id) {
			axios.post('http://localhost:3000/remove/'+id)
				.then((response) => {
					console.log(response);
					this.popupMsg = 'Товар удален'
					this.showPopup()
					this.getBasket()
				})
				.catch((error) => {
					console.log(error);
					this.popupMsg = 'Ошибка'
					this.showPopup()
				});
		},
		removeAll(){
			axios.post('http://localhost:3000/remove/all/')
				.then((response) => {
					console.log(response);
					this.popupMsg = 'Корзина очищенна'
					this.showPopup()
					this.getBasket()
				})
				.catch((error) => {
					console.log(error);
					this.popupMsg = 'Ошибка'
					this.showPopup()
				});
		},
		showPopup() {
			this.popup = true
			setTimeout(this.hidePopup, 300);
		},
		hidePopup() {
			this.popup = false
		},
		getBasket() {
			axios
				.get('http://localhost:3000/basket')
				.then(response => {
					this.basket = response.data
				});
		}
	}
}
</script>

<style scoped>
.basket h1{
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
.clear{
	cursor: pointer;
	padding: 7px 12px;
	background-color: red;
	color: white;
	font-size: 18px;
	font-weight: bold;
	text-align: center;
	margin: 20px auto;
}
.popup{
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	bottom: 50px;
	right: 50px;
	height: 50px;
	width: 200px;
	font-size: 18px;
	font-family: Arial, Helvetica, sans-serif;
	background-color: lightgray;
	border-radius: 10px;
}
</style>
