<template>
  <section class="content">
    <div class="header-cat" v-bind:class="categoryClass" v-if="products.data[1].category">{{ products.data[1].category.label }}</div>
    <div class="page-content">
      
      <div class="products-overview">
        <div v-for="item in products.data">
          <div class="subheading" v-if="item.type === 'SUBHEADING'">
            <div><strong>{{ item.subheading['title'] }}</strong></div>
            {{ item.subheading['content'] }}
          </div>
          <router-link :to="{ path: '/' + countryId + '/' + categoryId + '/accessory/' + item.id }" class="products-overview-single" v-if="item.type === 'PRODUCT'">
            <img :src="'https://onlinedatabasetool.com/template-assets/img/accessoires/' + item.product.article_number_1['value'] + '.jpg'">
            <div class="product-single-text">
              {{ item.product.product_title_line_1_accessories['value'] }} <span v-if="item.product.product_title_line_2_accessories">- {{ item.product.product_title_line_2_accessories['value'] }}</span>
            </div>
          </router-link>

        </div>
        
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios' 
import VueAxios from 'vue-axios'

export default {
  name: 'Accessories',
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
    this.$parent.showHeader = true
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
