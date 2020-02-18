 <template>
  <section class="content">
    <div class="header-cat" v-bind:class="product.data.category.code">{{ product.data.category.label }}</div>
    <div class="page-content">
        
        <div class="related-btns">
          <router-link v-if="product.data.prevId" :to="{ path: '/' + countryCode + '/' + catalogType + '/barbecues/' + categoryName + '/' + product.data.prevId }" class="prev">&lsaquo;</router-link>
          <router-link v-if="product.data.nextId" :to="{ path: '/' + countryCode + '/' + catalogType + '/barbecues/' + categoryName + '/' + product.data.nextId }" class="next">&rsaquo;</router-link>
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
               <p><strong>{{ product.data.product.article_number_1['label'] }}</strong> {{ product.data.product.article_number_1['value'] }}<span v-if="product.data.product.asterisks_after_article_number_1['value']">{{ product.data.product.asterisks_after_article_number_1['value'] }}</span></p>
              <img :src="'https://onlinedatabasetool.com/template-assets/img/barcodes/' + product.data.product.barcode_number_1['value'] + '.png'" alt="">
            </div>

            <div class="meta">
              <p><span v-if="product.data.product.amount_packaging['label']"><strong>{{ product.data.product.amount_packaging['label'] }}</strong> {{ product.data.product.amount_packaging['value'] }} <br></span>
              <span v-if="product.data.product.amount_per_pallet['label']"><strong>{{ product.data.product.amount_per_pallet['label'] }}</strong> {{ product.data.product.amount_per_pallet['value'] }} <br></span>
              <span v-if="countryCode === 'DEAT'"><span v-if="product.data.product.suggested_retail_price_1['label']"><strong>{{ product.data.product.suggested_retail_price_1['label'] }}</strong> {{ product.data.product.suggested_retail_price_1['value'] }}<span v-if="product.data.product.asterisks_after_suggested_retail_price['value']">{{ product.data.product.asterisks_after_suggested_retail_price['value'] }}</span></span><br></span>
              <span v-if="countryCode === 'DEAT'"><span v-if="product.data.product.suggested_retail_price_2['label']"><strong>{{ product.data.product.suggested_retail_price_2['label'] }}</strong> {{ product.data.product.suggested_retail_price_2['value'] }}</span></span></p>
            </div>

            <div v-if="countryCode === 'DEAT'" class="legal">
              <p><span v-if="product.data.product.product_legal_text_warranty['value']">{{ product.data.product.product_legal_text_warranty['value'] }}<br></span>
              <span v-if="product.data.product.additional_product_legal_text_1['value']">{{ product.data.product.additional_product_legal_text_1['value'] }}<br></span>
              <span v-if="product.data.product.additional_product_legal_text_2['value']">{{ product.data.product.additional_product_legal_text_2['value'] }}<br></span>
              <span v-if="product.data.product.additional_product_legal_text_3['value']">{{ product.data.product.additional_product_legal_text_3['value'] }}</span></p>
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
      else if(this.$route.params.countryCode == 'OM'){ return 19 }
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
