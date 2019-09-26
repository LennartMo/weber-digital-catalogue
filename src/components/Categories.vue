<template>
  <section class="content">
    <div class="page-content page-content-noheader">

    
      <div class="cat-overview">
        <h1>Barbecues</h1>
        <div v-for="item in categories.data" class="cat-overview-links">
          <div v-if="item.isBarbecueCategory" v-on:click="say(item.label)">
            <router-link :to="{ path: '/' + countryId + '/products/' + item.id + '/' + catalogType }" :class="item.code">{{ item.label }}</router-link>
          </div>
        </div>
      </div>
      <div class="cat-overview">

        <div v-for="item in categories.data">
          <h1 v-if="item.id === 5">{{ item.label }}</h1>
        </div>

        <div v-for="item in categories.data" class="cat-overview-links">
           <div v-if="item.isBarbecueCategory === false" v-on:click="say(item.label)">
            <router-link :to="{ path: '/' + countryId + '/accessories/' + item.id + '/' + catalogType }" :class="item.code">{{ item.label }}</router-link>
          </div>
        </div>
      </div>
      <div class="cat-overview">
        <h1>Practical content</h1>
        <div class="cat-overview-links">
           <div>
            <a v-bind:href="'/pdf/' + countryId + '/' + countryId + '-' + catalogType + '.pdf'" target="_blank">Link</a>
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
      countryId: this.$route.params.countryId,
      catalogType: this.$route.params.catalogType,
      categories: []
    }
  },
  created () {
    this.$parent.showHeader = true;
  },
  /*computed: {
    barbecueCategories: function() {
      return this.categories.filter(function(u) {
        return u.isBarbecueCategory
      })
    }
  },*/
  mounted () {
    console.log(this.$route.params.countryId)
    axios
      .get('https://www.onlinedatabasetool.com/api/categoriesincountry/' + this.$route.params.countryId + '/' + this.$route.params.catalogType)
      .then(response => (this.categories = response))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
