<template>
  <section class="content">
    <div class="header-cat" v-bind:class="categoryClass">{{ product.data.category.label }}</div>
    <div class="page-content">
        
        <div class="related-btns">
          <router-link v-if="product.data.prevId" :to="{ path: '/' + countryId + '/' + categoryId + '/product/' + product.data.prevId }" class="prev">&lsaquo;</router-link>
          <router-link v-if="product.data.nextId" :to="{ path: '/' + countryId + '/' + categoryId + '/product/' + product.data.nextId }" class="next">&rsaquo;</router-link>
        </div>

        <div class="product-wrapper">
          <div class="product-container">
            <img v-if="product.data.product.premium_icon['value']" src="https://onlinedatabasetool.com/template-assets/img/icon-premium.png" class="icon-premium">
            <h1>{{ product.data.product.product_title_line_1['value'] }} {{ product.data.product.product_title_line_2['value'] }}</h1>
            <p>{{ product.data.product.product_description['value'] }}</p>
          
            <div class="product-img-wrapper">
              <img v-if="product.data.product.guarantee_years['value']" :src="'https://onlinedatabasetool.com/template-assets/img/translations/' + countryCode + '/' + product.data.product.guarantee_years['value'] + '.png'" class="guarantee">
              <img v-if="product.data.product.new_icon['value']" :src="'https://onlinedatabasetool.com/template-assets/img/translations/' + countryCode + '/NEW_icon.png'" class="new">
              <img v-if="product.data.product.bic_icon['value']" src="https://onlinedatabasetool.com/template-assets/img/icon-BIC.png" class="bic">
              <img v-if="product.data.product.special_icon['value']" src="https://onlinedatabasetool.com/template-assets/img/icon-special.png" class="special">
              <img v-if="product.data.product.pulse_icon['value']" src="https://onlinedatabasetool.com/template-assets/img/icon-pulse.png" class="special">
              <img :src="'https://onlinedatabasetool.com/template-assets/img/barbecues/' + product.data.product.barbecue_code['value'] + '.jpg'" class="product-img" alt="">
            </div>

            <div class="features">
              <h2>{{ product.data.product.sales_arguments['label'] }}</h2>
              <ul>
                <li v-if="product.data.product.sales_arguments['value']">{{ product.data.product.sales_arguments['value'] }}</li>
                <li v-if="product.data.product.sales_arguments_2['value']">{{ product.data.product.sales_arguments_2['value'] }}</li>
                <li v-if="product.data.product.sales_arguments_3['value']">{{ product.data.product.sales_arguments_3['value'] }}</li>
                <li v-if="product.data.product.sales_arguments_4['value']">{{ product.data.product.sales_arguments_4['value'] }}</li>
                <li v-if="product.data.product.sales_arguments_5['value']">{{ product.data.product.sales_arguments_5['value'] }}</li>
                <li v-if="product.data.product.sales_arguments_6['value']">{{ product.data.product.sales_arguments_6['value'] }}</li>
                <li v-if="product.data.product.sales_arguments_7['value']">{{ product.data.product.sales_arguments_7['value'] }}</li>
                <li v-if="product.data.product.sales_arguments_8['value']">{{ product.data.product.sales_arguments_8['value'] }}</li>
                <li v-if="product.data.product.sales_arguments_9['value']">{{ product.data.product.sales_arguments_9['value'] }}</li>
                <li v-if="product.data.product.sales_arguments_10['value']">{{ product.data.product.sales_arguments_10['value'] }}</li>
                <li v-if="product.data.product.sales_arguments_11['value']">{{ product.data.product.sales_arguments_11['value'] }}</li>
                <li v-if="product.data.product.sales_arguments_12['value']">{{ product.data.product.sales_arguments_12['value'] }}</li>
                <li v-if="product.data.product.sales_arguments_13['value']">{{ product.data.product.sales_arguments_13['value'] }}</li>
                <li v-if="product.data.product.sales_arguments_14['value']">{{ product.data.product.sales_arguments_14['value'] }}</li>
                <li v-if="product.data.product.sales_arguments_15['value']">{{ product.data.product.sales_arguments_15['value'] }}</li>
              </ul>
            </div>

            <div class="product-info">
              <h2>{{ product.data.product.product_information['label'] }}</h2>
              <p><img :src="'https://onlinedatabasetool.com/template-assets/img/iconen/' + product.data.product.barbecue_icon['value'].toLowerCase() + '_icon.png'" width="14"><strong>{{ product.data.product.type_barbecue['value'] }}</strong> <br>
              <img :src="'https://onlinedatabasetool.com/template-assets/img/iconen/' + product.data.product.grate_shape['value'].toLowerCase() + '_icon.png'" width="14"><strong>{{ product.data.product.product_grate_metric['label'] }} </strong> {{ product.data.product.product_grate_metric['value'] }} <br>
              <img :src="'https://onlinedatabasetool.com/template-assets/img/iconen/' + product.data.product.product_color_icon['value'] + '_icon.png'" width="14"><strong>{{ product.data.product.product_color_icon['label'] }}</strong> {{ product.data.product.product_color['value'] }}</p>
            </div>
            
            <div class="dimensions">
              <h2>{{ product.data.product.product_dimensions['label'] }} <span>{{ product.data.product.product_dimensions_regular['label'] }}</span></h2>
              <p><span v-if="product.data.product.product_size_metric_closed_lid['label']"><strong>{{ product.data.product.product_size_metric_closed_lid['label'] }}</strong> {{ product.data.product.product_size_metric_closed_lid['value'] }} <br></span>
              <span v-if="product.data.product.weight_metric['label']"><strong>{{ product.data.product.weight_metric['label'] }}</strong> {{ product.data.product.weight_metric['value'] }} <br></span>
              <span v-if="product.data.product.packaging_size_metric['label']"><strong>{{ product.data.product.packaging_size_metric['label'] }}</strong> {{ product.data.product.packaging_size_metric['value'] }} <br></span>
              <span v-if="product.data.product.packaging_weight_metric['label']"><strong>{{ product.data.product.packaging_weight_metric['label'] }}</strong> {{ product.data.product.packaging_weight_metric['value'] }}</span></p>
            </div>

            <div class="article-number">
              <p><strong>{{ product.data.product.article_number_1['label'] }}</strong></p>
              <img :src="'https://onlinedatabasetool.com/template-assets/img/barcodes/' + product.data.product.barcode_number_1['value'] + '.png'" alt="">
            </div>

            <div class="meta">
              <p><span v-if="product.data.product.amount_packaging['label']"><strong>{{ product.data.product.amount_packaging['label'] }}</strong> {{ product.data.product.amount_packaging['value'] }} <br></span>
              <span v-if="product.data.product.amount_per_pallet['label']"><strong>{{ product.data.product.amount_per_pallet['label'] }}</strong> {{ product.data.product.amount_per_pallet['value'] }} <br></span>             
              <span v-if="product.data.product.suggested_retail_price_1['label']"><strong>{{ product.data.product.suggested_retail_price_1['label'] }}</strong> {{ product.data.product.suggested_retail_price_1['value'] }}</span></p>
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
  name: 'Product',
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
