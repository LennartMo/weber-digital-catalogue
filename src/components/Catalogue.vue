<template>
  <section class="content">
    <div class="page-content page-content-noheader">
      <div class="cat-overview">
        <h1>Countries</h1>
        <div class="cat-overview-links">
          <router-link v-if="catalogues.data.Premium" :to="{ path: '/' + countryCode + '/premium' }">Premium</router-link>
          <router-link v-if="catalogues.data.Partner" :to="{ path: '/' + countryCode + '/partner' }">Partner</router-link>
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
      catalogues: [],
      countryCode: this.$route.params.countryCode
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
      else if(this.$route.params.countryCode == 'EM'){ return 19 }
      else if(this.$route.params.countryCode == 'DEWO'){ return 20 }
      else if(this.$route.params.countryCode == 'MM'){ return 21 }
      else if(this.$route.params.countryCode == 'BENL'){ return 22 }

    }
  },
  created () {
    this.$parent.showHeader = true;
  },
  mounted () {
    axios
      .get('https://api.onlinedatabasetool.com/api/catalogexists/' + this.countryId)
      .then(response => (this.catalogues = response))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
