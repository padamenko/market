<template>
  <div id="app">
    <div>Preview of component:</div>
    <div class="nav">
      <a href="/">Main</a>
      <a href="#/catalog">Catalog</a>
      <a href="#/basket">Basket</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav a{
  font-size:18px;
}
</style>
