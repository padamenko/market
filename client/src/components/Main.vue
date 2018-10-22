<template>
  <div class="main">
    <h1>{{ msg }}</h1>
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
