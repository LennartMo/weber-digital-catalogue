<template>
  <div id="app">
    <div class="wrapper">
      <div class="container">
        <header id="header">
          <div>
            <input type="text" name="s" v-model="s" @change="checkForm" class="search-field" placeholder="Search...">
            <a v-if="showHeader" @click="back" class="icon_back">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.9 6.68"><title>Back</title><path d="M173.4,474a.2.2,0,0,1-.06.15l-2.64,2.64,2.64,2.63a.2.2,0,0,1,.06.15.25.25,0,0,1-.06.16l-.34.33a.19.19,0,0,1-.15.07.21.21,0,0,1-.16-.07L169.57,477a.22.22,0,0,1-.06-.15.25.25,0,0,1,.06-.16l3.12-3.12a.26.26,0,0,1,.16-.07.23.23,0,0,1,.15.07l.34.34A.2.2,0,0,1,173.4,474Z" transform="translate(-169.51 -473.45)"/></svg>
            </a>
            <router-link to="/" class="logo_nav">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 765.61 307.59"><defs><clipPath id="a" transform="translate(-50 -280)"><rect class="a" x="50" y="280" width="765.6" height="307.59"/></clipPath></defs><title>Weber</title><g class="b"><path class="c" d="M79.46,286.65c-13.64,0-22.8,9.69-22.8,24.11V557.69c0,13,10.9,23.24,24.81,23.24h704c12.26,0,23.44-10.94,23.44-23V309.5c0-12.82-10.5-22.85-23.93-22.85Z" transform="translate(-50 -280)"/><path class="d" d="M809,557.93c0,12.06-11.18,23-23.44,23h-704c-13.91,0-24.81-10.19-24.81-23.24V310.76c0-14.43,9.16-24.11,22.8-24.11H785c13.43,0,23.93,10,23.93,22.85V557.93ZM785,280H79.46C62.12,280,50,292.64,50,310.76V557.69c0,16.76,13.82,29.9,31.47,29.9h704c16,0,30.1-13.86,30.1-29.66V309.5C815.61,293,802.17,280,785,280Z" transform="translate(-50 -280)"/></g><path class="d" d="M798.32,557.93c0,6-6.05,12.4-12.81,12.4h-704c-8,0-14.16-5.63-14.16-12.64V310.76c0-7.53,3.38-13.46,12.15-13.46H785c7.51,0,13.3,5.17,13.3,12.2V557.93Z" transform="translate(-50 -280)"/><path class="c" d="M205.68,347.59V513.8a7.38,7.38,0,0,1-3.58,6.65,9.4,9.4,0,0,1-9,0,7.43,7.43,0,0,1-3.69-6.59s0-163.92,0-166.23H166.76V513.8c-.14,5.47-4.25,7.89-8.13,7.85-4.06,0-8.2-2.74-8.2-7.85,0,0,0-163.9,0-166.21H110v3s10.72-.19,12.72,8.42c0,35.9,0,144.08,0,144.08,0,20.44,19.22,31.31,55.47,31.31,35.74,0,55.38-11.13,55.36-31.31V347.59Z" transform="translate(-50 -280)"/><path class="c" d="M386.87,523c-3.87,0-7.83-2.27-7.83-6.72L379,360.51c0-3.43,4.13-5.18,8.16-5.18,4.52,0,7.56,2,7.56,5.18l.08,155.76c0,4.45-3.95,6.72-7.88,6.72ZM409.79,346.8c-11-4.63-25.13-2.75-28.83,1l-2,2s0-52.39,0-54.69H338.18v2.19s11.05-.17,12.75,8.91c0,44.87.15,204.82.15,204.82,0,9.48,11.37,23.42,35.82,23.42,23.61,0,36.25-13.6,36.25-23.42l-.1-140.35c0-11.93-4.6-20.22-13.26-23.89Z" transform="translate(-50 -280)"/><path class="c" d="M473.35,361.21a5.17,5.17,0,0,1,2.85-4.55,11.62,11.62,0,0,1,10.61-.13,5.33,5.33,0,0,1,2.69,4.68l0,51.76H473.38l0-51.76Zm16.2,90.92c0,2.31,0,64.12,0,64.12,0,4.48-4.27,6.87-8.27,6.87-3.77,0-7.88-2.11-7.88-6.87l-.05-81.16h43.92V367.18c0-8.16-9.86-23.38-33.53-23.38H479c-23.59,0-33.33,15.22-33.32,23.38V511c.06,9.48,10.75,23.42,33.56,23.42h4.64c22.81,0,33.41-13.94,33.4-23.42V452.13Z" transform="translate(-50 -280)"/><path class="c" d="M284,361.21a5.17,5.17,0,0,1,2.85-4.55,11.6,11.6,0,0,1,10.6-.13,5.32,5.32,0,0,1,2.7,4.68l0,51.76H284l0-51.76Zm16.2,90.92c0,2.31,0,64.12,0,64.12,0,4.48-4.28,6.87-8.29,6.87-3.75,0-7.85-2.11-7.85-6.87L284,435.09H328c0-2.26-.06-67.91-.06-67.91,0-8.16-9.8-23.38-33.48-23.38h-4.75c-23.58,0-33.31,15.22-33.3,23.38V511c.06,9.48,10.74,23.42,33.53,23.42h4.65c22.8,0,33.47-13.94,33.46-23.42,0,0,0-56.57,0-58.91Z" transform="translate(-50 -280)"/><path class="c" d="M540.21,531.44H568c0-1.57,0-155.19,0-171.23a5.84,5.84,0,0,1,2.86-3.71,10.71,10.71,0,0,1,10,0,6,6,0,0,1,3.08,5.15V435h28.18V362.08A14.33,14.33,0,0,0,604,348.6c-9.27-4.81-23.88-6.77-34,.65l-2,1.34v-3.17H527.17v3.22s11.05-.19,12.78,8.89l.26,171.91Z" transform="translate(-50 -280)"/><path class="e" d="M736.32,509.08,711.91,497a14.24,14.24,0,0,0,.6-4,14,14,0,0,0-10.65-13.5l0-15.77a111,111,0,0,0,23.33-2.67l15.56,44.11a13.84,13.84,0,0,0-4.39,3.91Zm-2.16,4.44-67.07-.3,18.22-2.51,45.71.1-.25-.21,3.71,1.92c-.11.32-.22.64-.32,1Zm-47-12.31a14.08,14.08,0,0,0,6.69,4.91l-31.75,5.35,25.06-10.26ZM673,461.27a115.3,115.3,0,0,0,23.89,2.48v15.42a13.85,13.85,0,0,0-11.5,18.9L654.65,511,673,461.27Zm9.22-25.08A39.82,39.82,0,0,0,696.86,439v7.36A146.89,146.89,0,0,0,678,447.59l4.2-11.4Zm25.27-88.08a15.92,15.92,0,0,0-.06,1.63,17.61,17.61,0,0,0,.47,4.78l-13.73-.15a16.71,16.71,0,0,0,.52-4.63,12.83,12.83,0,0,0-.1-1.63Zm-.26,155.77a14.28,14.28,0,0,0,3.28-3.73l4.62,2.39-7.9,1.34Zm12.57,1.05,6.16,3.19-29,.39,22.81-3.58Zm.69-57.14a142.3,142.3,0,0,0-18.68-1.45l0-7.19c5-.19,10.28-.24,15-1.93l3.73,10.57Zm27.24,55.53a13.94,13.94,0,0,0-2.18.18l-15.46-43.94c3.73-1.41,5.88-3.09,5.88-4.9,0-2.34-3.66-4.31-9.63-5.75l-4.67-13.25c19.2-8.52,30.26-29.4,30.26-38.45a36.56,36.56,0,0,0,.61-5.53c-.28-1.42,1.52-1.13,1.52-1.13,2.46-1.21.42-8.28,0-8.28s-2,.33-2.23-.67c-4.83-20.64-24.43-25.75-39.31-27a16.27,16.27,0,0,0,.57-4.82,10,10,0,0,0-.1-1.63h.39a3.19,3.19,0,0,0,0-6.37s-3.3-.69-12.2-.69a75.34,75.34,0,0,0-11.86.69,3.18,3.18,0,0,0-.29,6.34,13.66,13.66,0,0,0-.08,1.66,20.71,20.71,0,0,0,.4,4.58c-15.09.43-37.1,3.58-41.58,27.28l-1.91,0c-1.11,0-2.53,6.07-1,8.64.52.8,1.71.26,2.79.35.25,2.42.41,2.71.73,6.06,1,10.07,10.75,28.9,29.28,37.66l-5.31,14.21c-6.85,1.48-11.1,3.57-11.1,6.11,0,2,2.55,3.77,6.86,5.27l-26.4,70.84,5.77,0,5.41-13.48,80.71.11a14.05,14.05,0,1,0,14.05-14.1Z" transform="translate(-50 -280)"/><path class="c" d="M775.68,524.23v-2.49h1.66c.85,0,1.76.2,1.76,1.19,0,1.23-.93,1.3-2,1.3Zm0,1h1.41l2.11,3.49h1.35l-2.27-3.54a2.09,2.09,0,0,0,2.07-2.21c0-1.58-.94-2.28-2.83-2.28h-3v8h1.2v-3.49Zm1.49,6.44a7,7,0,1,0-7.08-7,6.94,6.94,0,0,0,7.08,7Zm-5.67-7a5.65,5.65,0,1,1,5.67,5.81,5.62,5.62,0,0,1-5.67-5.81Z" transform="translate(-50 -280)"/><path class="c" d="M582.62,524.22v-2.47h1.67c.84,0,1.75.18,1.75,1.17,0,1.22-.92,1.3-1.94,1.3Zm0,1H584l2.12,3.48h1.36l-2.29-3.53a2.09,2.09,0,0,0,2.09-2.21c0-1.57-.94-2.3-2.83-2.3h-3.06v8h1.2v-3.48Zm1.49,6.43a7,7,0,1,0-7.08-7,7,7,0,0,0,7.08,7m-5.68-7a5.66,5.66,0,1,1,5.68,5.83,5.63,5.63,0,0,1-5.68-5.83" transform="translate(-50 -280)"/></svg>
            </router-link> 
            <a href="javascript:void(0);" v-if="showHeader" @click="search" class="icon_search">
              <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.14 11.14"><title>Search</title><path d="M238.48,461.36a.83.83,0,0,1-.26.61.82.82,0,0,1-.6.25.79.79,0,0,1-.6-.25l-2.3-2.29a4.66,4.66,0,0,1-4.5.45,4.53,4.53,0,0,1-1.51-1,4.72,4.72,0,0,1-1-5.17,4.94,4.94,0,0,1,1-1.51,4.68,4.68,0,0,1,1.51-1,4.71,4.71,0,0,1,3.66,0,4.63,4.63,0,0,1,2.51,2.51,4.71,4.71,0,0,1-.46,4.5l2.3,2.3A.86.86,0,0,1,238.48,461.36Zm-4.31-3.45a3,3,0,1,0-5.12-2.12,3,3,0,0,0,5.12,2.12Z" transform="translate(-227.33 -451.08)"/></svg>
            </a>
          </div>
          <div class="search-results" v-if="filterSearchs">
            <ul>
                <li v-for="item in filterSearchs.data" @click="search">
                  <span v-if="item.product.product_title_line_1">
                    <router-link :to="{ path: '/' + countryCode + '/catalog/barbecues/all/' + item.id }"  class="products-overview-single">
                      {{ item.product.product_title_line_1['value'] }} - {{ item.product.product_title_line_2['value'] }} - {{ item.product.product_title_line_3['value'] }} &#187;
                    </router-link> 
                  </span>
                  <span v-if="item.product.product_title_line_1_accessories">
                    <router-link :to="{ path: '/' + countryCode + '/catalog/acc/all/' + item.id }"  class="products-overview-single">
                      {{ item.product.product_title_line_1_accessories['value'] }} <span v-if="item.product.product_title_line_2_accessories">- {{ item.product.product_title_line_2_accessories['value'] }}</span> &#187;
                    </router-link> 
                  </span>
                </li>
            </ul>
          </div>
        </header>
      </div>
    </div>
    <div class="loading-new"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></div>
    <div class="loading" v-if="loading">{{ loading }}</div>
    <router-view></router-view>
  </div>
</template>

<script>

import axios from 'axios'
import VueAxios from 'vue-axios'

export default {
  name: 'app',
  components: {

  },
  data () {
    return {
      loading: false,
      filterSearchs: null,
      showHeader: false
    }
  },
  computed: {
    countryCode: function () {
      return this.$route.params.countryCode
    },
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
    }
  },
  methods: {
    checkForm: function (e) {
      axios
        .get('https://api.onlinedatabasetool.com/api/cataloglinessearch/'+this.countryId+'/'+this.s)
        .then(response => (this.filterSearchs = response))
    },
    back () {
      this.$router.go(-1)
    },
    search () {
      document.getElementById('header').classList.toggle('search')
      this.filterSearchs = null
    }
  }
}
</script>

<style>
@import './assets/styles/normalize.css';
@import './assets/styles/main.css';
</style>
