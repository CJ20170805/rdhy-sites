<template>
  <div class="about-us">
    <div class="about-content">
      <h1>About US</h1>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
import * as api from '~/api'

export default {
  data () {
    return {
      getValue: '111'
    }
  },
  async asyncData () {
    // axios.get('api/api')
    //  .then(data => {console.log('data',data.data)})
    //  .catch(err => {console.log('err',err)})
      // let d = await api.getData()
      // console.log(d)
      // return {a : d}
      // return {'aa': d}
      // .then(res => {console.log(res); this.getValue = res.data})
      // .catch(err => console.log(err))
  },
  created () {
 
  },
  // head () {
  //   return {
  //     title: 'lalalalal'
  //   }
  // }
  head () {
    return {
      title: 'About',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  mounted () {
    this.$nextTick(() => {
      // this.$nuxt.$loading.start()

      // setTimeout(() => this.$nuxt.$loading.finish(), 5000)
    })
  }
}
</script>

<style scoped>
  .about-us{
    width: 100%
  }
  .about-content{
    width: 1200px;
    margin: 0 auto;
  }
</style>

