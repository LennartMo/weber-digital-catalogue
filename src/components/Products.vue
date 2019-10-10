<template>
  <section class="content">
    <div class="header-cat" v-bind:class="categoryClass">{{ products.data[0].category.label }}</div>
    
    <div class="page-content">
      <div class="products-overview" >
        <router-link :to="{ path: '/' + countryCode + '/' + catalogType + '/barbecues/' + categoryName + '/' + item.id }" class="products-overview-single" v-for="item in products.data">
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

import axios from 'axios' 
import VueAxios from 'vue-axios'

export default {
  name: 'Products',
  props: {
    msg: String
  },
  data () {
    return {
      categoryClass: 'cat-' + this.$route.params.categoryName,
      countryCode: this.$route.params.countryCode,
      catalogType: this.$route.params.catalogType,
      categoryName: this.$route.params.categoryName,
      products: []
    }
  },
  created () {
    this.$parent.showHeader = true;
  },
  computed: {
    countryId: function () {
      if(this.$route.params.countryCode == 'FR'){ return 1 }
      else if(this.$route.params.countryCode == 'IT'){ return 2 }
      else if(this.$route.params.countryCode == 'ES'){ return 3 }
      else if(this.$route.params.countryCode == 'PT'){ return 4 }
      else if(this.$route.params.countryCode == 'NL'){ return 5 }
      else if(this.$route.params.countryCode == 'BEFR'){ return 6 }
      else if(this.$route.params.countryCode == 'DEAT'){ return 7 }
      else if(this.$route.params.countryCode == 'CHDE'){ return 8 }
      else if(this.$route.params.countryCode == 'CHFR'){ return 9 }
      else if(this.$route.params.countryCode == 'CZ'){ return 10 }
      else if(this.$route.params.countryCode == 'PL'){ return 11 }
      else if(this.$route.params.countryCode == 'UK'){ return 12 }
      else if(this.$route.params.countryCode == 'SE'){ return 13 }
      else if(this.$route.params.countryCode == 'FI'){ return 14 }
      else if(this.$route.params.countryCode == 'NO'){ return 15 }
      else if(this.$route.params.countryCode == 'DK'){ return 16 }
      else if(this.$route.params.countryCode == 'IE'){ return 17 }
      else if(this.$route.params.countryCode == 'CP'){ return 18 }
      else if(this.$route.params.countryCode == 'EM'){ return 19 }
      else if(this.$route.params.countryCode == 'DEWO'){ return 20 }
      else if(this.$route.params.countryCode == 'MM'){ return 21 }
      else if(this.$route.params.countryCode == 'BENL'){ return 22 }
    },
    catalogTypeNum: function () {
      if(this.$route.params.catalogType == 'partner'){ return 0 }
      else if(this.$route.params.catalogType == 'premium'){ return 1 }
    },
    categoryId: function () {
      if(this.$route.params.categoryName == 'charcoal'){ return 1 }
      else if(this.$route.params.categoryName == 'wood'){ return 2 }
      else if(this.$route.params.categoryName == 'gas'){ return 3 }
      else if(this.$route.params.categoryName == 'electric'){ return 4 }
      else if(this.$route.params.categoryName == 'accessories'){ return 5 }
      else if(this.$route.params.categoryName == 'spareparts'){ return 6 }
      else if(this.$route.params.categoryName == 'mobile'){ return 7 }
    }
  },
  mounted () {
    axios
      .get('https://api.onlinedatabasetool.com/api/cataloglines/' + this.countryId + '/' + this.categoryId + '/' + this.catalogTypeNum)
      .then(response => (this.products = response))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
