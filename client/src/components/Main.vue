<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <div class="nav">
      <a href="/">Main</a>
      <a href="/catalog">Catalog</a>
      <a href="basket">Basket</a>
      <a href="/ItemList">ItemList</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      msg: 'Main page'
    }
  }
}
</script>

<style scoped>
.main {
	font-family: Arial, Helvetica, sans-serif;
	font-size: 21px;
	text-align: center;
}
</style>
