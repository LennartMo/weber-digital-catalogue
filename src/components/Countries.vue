<template>
  <section class="content">
    <div class="page-content page-content-noheader">
      <div class="cat-overview">
        <h1>Countries</h1>
        <div class="cat-overview-links">
          <router-link  v-for="item in countries.data" :to="{ path: item.id + '/catalogue/' }">{{ item.name }}</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'Countries',
  props: {
    msg: String
  },
  data () {
    return {
      countries: []
    }
  },
  created () {
    this.$parent.showHeader = false;
  },
  mounted () {
    axios
      .get('https://www.onlinedatabasetool.com/api/countries')
      .then(response => (this.countries = response))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
