<template>
<div>
  <div class="component-name">
    <h1>{{ msg }}</h1>
  </div>
  <div class="item-list">
    <DefaultItem 
      v-for="(item, index) in items" 
      v-if="type === 'default' || !type"
      :key="index"
      :image="item.image" 
      :title="item.title"
      :subtitle="item.subtitle"
      :text="item.text"
      :link="item.link"
      :type="type"
      :width="width"
      :height="height"
      :imageWidth="imageWidth"
      :imageHeight="imageHeight"
      :titleFontSize="titleFontSize"
      :subtitleFontSize="subtitleFontSize"
      :textFontSize="textFontSize"
    />
  </div>
</div>
</template>

<script>
import DefaultItem from './itemTypes/Default.vue'

export default {
  name: 'ItemList',
  components: {
		DefaultItem
	},
  data () {
    return {
      msg: 'ItemList',
      type: '',
      width: '170px',
      height: '',
      imageWidth: '',
      imageHeight: '',
      titleFontSize: '',
      subtitleFontSize: '',
      textFontSize: '',
      items: [{
        image: 'https://ozon-st.cdn.ngenix.net/graphics/action/150909_app/img-2.jpg',
        title: 'Title 1',
        subtitle: 'Subtitle 1',
        text: 'text text text',
        link: '/'
      },
      {
        image: 'https://ozon-st.cdn.ngenix.net/graphics/action/150909_app/img-2.jpg',
        title: 'Title 2',
        subtitle: 'Subtitle 2',
        link: '/'
      },
      {
        image: 'https://ozon-st.cdn.ngenix.net/graphics/action/150909_app/img-2.jpg',
        title: 'Title 3',
        subtitle: 'Subtitle 3',
        link: '/'
      },
      {
        image: 'https://ozon-st.cdn.ngenix.net/graphics/action/150909_app/img-2.jpg',
        title: 'Title 4',
        subtitle: 'Subtitle 4',
        link: '/'
      }]
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
.item-list {
  display: flex;
  flex-wrap: wrap; 
}
</style>