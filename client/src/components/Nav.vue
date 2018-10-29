<template>
	<div class="nav">
		<div class="cart">Товаров в корзине: {{ basketLength }}</div>
		<div class="price">Цена: {{ priceFormat(basketPrice) }}р</div>
		<div class="price">Скидка: {{ priceFormat(discount) }}р</div>
		<div class="price">Итоговая стоимость: {{ priceFormat(totalPrice) }}р</div>
	</div>
</template>
<script>
import axios from 'axios'
export default {
	name: 'Nav',
	props: {
		basketLength: {
			type: Number,
			default: 0
		},
		basketPrice:{
			type: Number,
			default: 0
		}
	},
	computed: {
		totalPrice() {
			let total = this.basketPrice
			if(this.basketPrice > 19999) {
				total = this.basketPrice * 0.7
			}else if(this.basketPrice > 14999){
				total = this.basketPrice * 0.8
			}else if(this.basketPrice > 9999){
				total = this.basketPrice * 0.9
			}
			return total
		},
		discount() {
			const discount = this.basketPrice - this.totalPrice
			return discount
		}
	},
	methods: {
		priceFormat(val) {
			let str = val + ''
			if(val >= 10000){
				str = str.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')
			}
			return str
		}
	}
}
</script>
<style>
.nav{
	display: flex;
	justify-content: space-around;
	margin: 20px;
}
.cart, .price{
		font-family: Arial, Helvetica, sans-serif;
    font-size: 21px;
    text-align: center;
}
</style>

