<template>
  <section class="content">
    <div class="header-cat" v-bind:class="categoryClass">{{ products.data[0].category.label }}</div>
    
    <div class="page-content">
      <div class="products-overview" >
        <router-link :to="{ path: '/' + countryId + '/' + categoryId + '/product/' + item.id }" class="products-overview-single" v-for="item in products.data">
          <img :src="'https://onlinedatabasetool.com/template-assets/img/barbecues/' + item.product.barbecue_code['value'] + '.jpg'">
          <div class="product-single-text">
            {{ item.product.product_title_line_1['value'] }} - {{ item.product.product_title_line_2['value'] }} <span v-if="item.product.product_title_line_3['value']">- {{ item.product.product_title_line_3['value'] }}</span>
          </div>
        </router-link>
      </div>
     
    </div>
  </section>
</template>

<script>
//https://onlinedatabasetool.com/template-assets/img/barbecues/BBK_57_BL_2.jpg
import axios from 'axios' 
import VueAxios from 'vue-axios'

export default {
  name: 'Products',
  props: {
    msg: String
  },
  data () {
    return {
      countryId: this.$route.params.countryId,
      categoryId: this.$route.params.categoryId,
      categoryClass: 'cat-' + this.$route.params.categoryId,
      catalogType: this.$route.params.catalogType,
      category: this.$route.params.category,
      products: []
    }
  },
  created () {
    this.$parent.showHeader = true;
  },
  computed: {
    category: function () {
      return this.categoryId
    }
  },
  mounted () {
    axios
      .get('https://www.onlinedatabasetool.com/api/cataloglines/' + this.$route.params.countryId + '/' + this.$route.params.categoryId + '/' + this.$route.params.catalogType)
      .then(response => (this.products = response))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
