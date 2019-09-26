<template>
  <section class="content">
    <div class="header-cat" v-bind:class="categoryClass">{{ product.data.category.label }}</div>
    <div class="page-content">

        <div class="related-btns">
          <router-link v-if="product.data.prevId" :to="{ path: '/' + countryId + '/' + categoryId + '/accessory/' + product.data.prevId }" class="prev">&lsaquo;</router-link>
          <router-link v-if="product.data.nextId" :to="{ path: '/' + countryId + '/' + categoryId + '/accessory/' + product.data.nextId }" class="next">&rsaquo;</router-link>
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
      countryId: this.$route.params.countryId,
      categoryId: this.$route.params.categoryId,
      id: this.$route.params.id,
      categoryClass: 'cat-' + this.$route.params.categoryId,
      color: null,
      product: null
    }
  },
  created () {
    this.$parent.showHeader = true;
  },
  computed: {
    countryCode: function () {
      if(this.$route.params.countryId == 1){ return 'FR' }
      else if(this.$route.params.countryId == 2){ return 'IT' }
      else if(this.$route.params.countryId == 3){ return 'ES' }
      else if(this.$route.params.countryId == 4){ return 'PT' }
      else if(this.$route.params.countryId == 5){ return 'NL' }
      else if(this.$route.params.countryId == 6){ return 'BEFR' }
      else if(this.$route.params.countryId == 7){ return 'DEAT' }
      else if(this.$route.params.countryId == 8){ return 'CHDE' }
      else if(this.$route.params.countryId == 9){ return 'CHFR' }
      else if(this.$route.params.countryId == 10){ return 'CZ' }
      else if(this.$route.params.countryId == 11){ return 'PL' }
      else if(this.$route.params.countryId == 12){ return 'UK' }
      else if(this.$route.params.countryId == 13){ return 'SE' }
      else if(this.$route.params.countryId == 14){ return 'FI' }
      else if(this.$route.params.countryId == 15){ return 'NO' }
      else if(this.$route.params.countryId == 16){ return 'DK' }
      else if(this.$route.params.countryId == 17){ return 'IE' }
      else if(this.$route.params.countryId == 18){ return 'CP' }
      else if(this.$route.params.countryId == 19){ return 'EM' }
      else if(this.$route.params.countryId == 20){ return 'DEWO' }
      else if(this.$route.params.countryId == 21){ return 'MM' }
      else if(this.$route.params.countryId == 22){ return 'BENL' }

    }
  },
  updated() {
    console.log('updated')
  },
  mounted () {
    axios
      .get('https://www.onlinedatabasetool.com/api/catalogline/' + this.$route.params.id)
      .then(response => (this.product = response))
  },
  watch: {
    '$route': function() {
      axios
        .get('https://www.onlinedatabasetool.com/api/catalogline/' + this.$route.params.id)
        .then(response => (this.product = response))
        console.log(this.$route.params.id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
