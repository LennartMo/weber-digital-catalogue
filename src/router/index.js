import Vue from 'vue'
import VueRouter from 'vue-router'
import Countries from '@/components/Countries'
import Catalogue from '@/components/Catalogue'
import Categories from '@/components/Categories'
import Products from '@/components/Products'
import Accessories from '@/components/Accessories'
import Product from '@/components/Product'
import Accessory from '@/components/Accessory'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Countries',
      props: true,
      component: Countries
    },
    {
      path: '/:countryCode/',
      name: 'Catalogue',
      props: true,
      component: Catalogue
    },
    {
      path: '/:countryCode/:catalogType/',
      name: 'Categories',
      props: true,
      component: Categories
    },
    {
      path: '/:countryCode/:catalogType/barbecues/:categoryName/',
      name: 'Products',
      props: true,
      component: Products
    },
    {
      path: '/:countryCode/:catalogType/acc/:categoryName/',
      name: 'Accessories',
      props: true,
      component: Accessories
    },
    {
      path: '/:countryCode/:catalogType/barbecues/:categoryName/:id/',
      name: 'Product',
      props: true,
      component: Product
    },
    {
      path: '/:countryCode/:catalogType/acc/:categoryName/:id/',
      name: 'Accessory',
      props: true,
      component: Accessory
    }
  ],
  mode: 'history'
})
/*
router.beforeEach((to, from) => {
  app.loading = false
})
router.afterEach((to, from) => {
  app.loading = false
})*/

export default router
