import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Catalog from '@/components/Catalog'
import Basket from '@/components/Basket'
import ItemList from '@/components/ItemList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog
    },
    {
      path: '/basket',
      name: 'Basket',
      component: Basket
    },
    {
      path: '/itemlist',
      name: 'ItemList',
      component: ItemList
    }
  ]
})
