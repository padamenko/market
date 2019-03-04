<template>
<a :href="link" class="item" :style="itemStyle" :class="itemClass">
  <img :src="image" :style="imageStyle" alt="" class="image">
  <div v-if="title" class="title">{{ title }}</div>
  <div v-if="subtitle" class="subtitle">{{ subtitle }}</div>
  <div v-if="text" class="text">{{ text }}</div>
</a>
</template>

<script>
export default {
  name: 'Item',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: '/'
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    imageWidth: {
      type: String,
      default: ''
    },
    imageHeight: {
      type: String,
      default: ''
    },
    titleFontSize: {
      type: String,
      default: 'default'
    },
    subtitleFontSize: {
      type: String,
      default: 'default'
    },
    textFontSize: {
      type: String,
      default: 'default'
    }
  },
  data () {
    return {
      msg: 'ItemList',
    }
  },
  computed: {
    itemClass () {
      let type = this.type || 'default';
      return type;
    },
    itemStyle () {
      let width = 'width: ' + this.width;
      let height = 'height: ' + this.height;
      let style = width + '; ' + height + ';';
      return style;
    },
    imageStyle () {
      let width = 'max-width: ' + this.imageWidth;
      let height = 'max-height: ' + this.imageHeight;
      let style = width + '; ' + height + ';';
      return style;
    }
  }
}
</script>

<style scoped>
.component-name {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 21px;
  text-align: center;
}
.item{
  font-family: Arial, Helvetica, sans-serif;
  margin: 0 10px 10px 0px;
  text-decoration: none;
  color: black;
  width: 200px;
}
.item:last-of-type{
  margin: 0 0 10px 0;
}
.image{
  max-width: 100%;
}
.title{
  margin-top: 10px;
  font-size: 16px;
}
.subtitle{
  margin-top: 10px;
  font-size: 15px;
}
.text{
  margin-top: 10px;
  font-size: 13px;
}
</style>
