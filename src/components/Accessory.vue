<template>
  <section class="content">
    <div class="header-cat" v-bind:class="product.data.category.code">{{ product.data.category.label }}</div>
    <div class="page-content">

        <div class="related-btns">
          <router-link v-if="product.data.prevId" :to="{ path: '/' + countryCode + '/' + catalogType + '/acc/' + categoryName + '/' + product.data.prevId }" class="prev">&lsaquo;</router-link>
          <router-link v-if="product.data.nextId" :to="{ path: '/' + countryCode + '/' + catalogType + '/acc/' + categoryName + '/' + product.data.nextId }" class="next">&rsaquo;</router-link>
        </div>

        <div class="product-wrapper">
          <div class="product-container">
            <div v-if="product.data.product.premium_icon"><img v-if="product.data.product.premium_icon['value']" src="https://onlinedatabasetool.com/template-assets/img/icon-premium.png" class="icon-premium"></div>
            <h1>{{ product.data.product.product_title_line_1_accessories['value'] }} <span v-if="product.data.product.product_title_line_2_accessories">- {{ product.data.product.product_title_line_2_accessories['value'] }}</span></h1>
            <p>{{ product.data.product.product_description['value'] }}</p>

            <div class="product-img-wrapper">
              <div v-if="product.data.product.smart_icon"><img v-if="product.data.product.smart_icon['value']" src="https://onlinedatabasetool.com/template-assets/img/icon-smart.png" class="smart"></div>
              <div v-if="product.data.product.fsc_icon"><img v-if="product.data.product.fsc_icon['value']" src="https://onlinedatabasetool.com/template-assets/img/fsc_icon.png" class="fsc"></div>
              <div v-if="product.data.product.new_icon"><img v-if="product.data.product.new_icon['value']" :src="'https://onlinedatabasetool.com/template-assets/img/translations/' + countryCode + '/NEW_icon.png'" class="new"></div>
              <div v-if="product.data.product.special_icon"><img v-if="product.data.product.special_icon['value']" src="https://onlinedatabasetool.com/template-assets/img/icon-special.png" class="special"></div>
              <div v-if="product.data.product.pulse_icon"><img v-if="product.data.product.pulse_icon['value']" src="https://onlinedatabasetool.com/template-assets/img/icon-pulse.png" class="special"></div>
              <img :src="'https://onlinedatabasetool.com/template-assets/img/accessoires/' + product.data.product.article_number_1['value'] + '.jpg'" class="product-img">
            </div>
       
            <div class="article-number">
              <p><strong>{{ product.data.product.article_number_1['label'] }}</strong></p>
              <img :src="'https://onlinedatabasetool.com/template-assets/img/barcodes/' + product.data.product.barcode_number_1['value'] + '.png'" alt="">
            </div>

            <div class="meta">
              <p><strong>{{ product.data.product.article_number_1['label'] }}</strong> {{ product.data.product.article_number_1['value'] }} <br>     
              <strong>{{ product.data.product.amount_packaging['label'] }}</strong> {{ product.data.product.amount_packaging['value'] }} <br>
              <strong>{{ product.data.product.suggested_retail_price_1['label'] }}</strong> {{ product.data.product.suggested_retail_price_1['value'] }}</p>
            </div>
           
          </div>
        </div>

    </div>
  </section>
</template>

<script>

import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'Accessory',
  props: {
    msg: String
  },
  data () {
    return {
      id: this.$route.params.id,
      categoryClass: 'cat-' + this.$route.params.categoryName,
      countryCode: this.$route.params.countryCode,
      catalogType: this.$route.params.catalogType,
      categoryName: this.$route.params.categoryName,
      color: null,
      product: null
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
  updated() {
    console.log('updated')
  },
  mounted () {
    axios
      .get('https://api.onlinedatabasetool.com/api/catalogline/' + this.$route.params.id)
      .then(response => (this.product = response))
  },
  watch: {
    '$route': function() {
      axios
        .get('https://api.onlinedatabasetool.com/api/catalogline/' + this.$route.params.id)
        .then(response => (this.product = response))
        console.log(this.$route.params.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
