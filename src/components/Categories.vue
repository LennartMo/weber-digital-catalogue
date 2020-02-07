<template>
  <section class="content">
    <div class="page-content page-content-noheader">

    
      <div class="cat-overview">
        <h1 v-if="countryCode === 'DEAT'">Grills</h1>
        <h1 v-else>Barbecues</h1>
        <div v-for="item in categories.data" class="cat-overview-links">
          <div v-if="item.isBarbecueCategory" v-on:click="say(item.label)">
            <router-link :to="{ path: '/' + countryCode + '/' + catalogType + '/barbecues/' + categoryName(item.id) }" :class="item.code">{{ item.label }}</router-link>
          </div>
        </div>
      </div>
      <div class="cat-overview">

        <div v-for="item in categories.data">
          <h1 v-if="item.id === 5">{{ item.label }}</h1>
        </div>

        <div v-for="item in categories.data" class="cat-overview-links">
           <div v-if="item.isBarbecueCategory === false" v-on:click="say(item.label)">
            <router-link :to="{ path: '/' + countryCode + '/' + catalogType + '/acc/' + categoryName(item.id) }" :class="item.code">{{ item.label }}</router-link>
          </div>
        </div>
      </div>
      <div class="cat-overview">
        <h1 v-if="countryCode === 'DEAT'">Inhalt/neuheiten</h1>
        <h1 v-else>Practical content</h1>
        <div class="cat-overview-links">
           <div>
            <a v-if="countryCode === 'DEAT'" v-bind:href="'/pdf/' + countryId + '/' + countryId + '-' + catalogTypeNum + '.pdf'" target="_blank">Zusätzliche produktinformationen</a>
            <a v-else v-bind:href="'/pdf/' + countryId + '/' + countryId + '-' + catalogTypeNum + '.pdf'" target="_blank">Download PDF</a>
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
  name: 'Categories',
  props: {
    msg: String,
  },
  data () {
    return {
      countryCode: this.$route.params.countryCode,
      catalogType: this.$route.params.catalogType,
      categories: []
    }
  },
  created () {
    this.$parent.showHeader = true;
  },
  methods: {
    categoryName(categoryId) {
      if(categoryId == 1){ return 'charcoal' }
      else if(categoryId == 2){ return 'wood' }
      else if(categoryId == 3){ return 'gas' }
      else if(categoryId == 4){ return 'electric' }
      else if(categoryId == 5){ return 'accessories' }
      else if(categoryId == 6){ return 'spareparts' }
      else if(categoryId == 7){ return 'mobile' }
    }
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
    }
  },
  mounted () {
    console.log(this.$route.params.countryId)
    axios
      .get('https://api.onlinedatabasetool.com/api/categoriesincountry/' + this.countryId + '/' + this.catalogTypeNum)
      .then(response => (this.categories = response))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
