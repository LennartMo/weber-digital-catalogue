<template>
  <section class="content">
    <div class="page-content page-content-noheader">
      <div class="cat-overview">
        <h1>Countries</h1>
 
        <div class="cat-overview-links">
          <router-link v-if="catalogues.data.Premium" :to="{ path: '/' + countryId + '/1' + '/categories/' }">Premium</router-link>
          <router-link v-if="catalogues.data.Partner" :to="{ path: '/' + countryId + '/0' + '/categories/' }">Partner</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'Catalogue',
  props: {
    msg: String
  },
  data () {
    return {
      countryId: this.$route.params.countryId,
      catalogues: []
    }
  },
  created () {
    this.$parent.showHeader = true;
  },
  mounted () {
    axios
      .get('https://onlinedatabasetool.com/api/catalogexists/' + this.$route.params.countryId)
      .then(response => (this.catalogues = response))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
