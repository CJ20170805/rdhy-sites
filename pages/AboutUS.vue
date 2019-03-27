<template>
  <div class="about-us">
    <div class="contact-banner">
      <img src="~/assets/images/contact_us.jpg" alt="">
    </div>
    <div class="about-content">
      <div class="about-tit">
        <span>联系我们</span>
        <p>CONTACT US</p>
      </div>
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

<style scoped lang="less">

  @common_red :rgb(235, 60, 60);

  .about-us{
    width: 100%;
    .contact-banner{
      height: 300px;
      width: 100%;
      img{
        width: 100%;
        height: 300px;
      }
    }
    .about-content{
      width: 1200px;
      height: 800px;
      margin: 0 auto;
      .about-tit{
        height: 80px;
        width: 180px;
        margin-top: 34px;
        border-bottom: 3px solid @common_red;
        span{
          font-size: 28px;
          font-family: 微软雅黑;
          color: rgb(16, 16, 16);
          line-height: 46px;
        }
        p{
          color: rgb(181, 181, 181);
          font-size: 18px;
          line-height: 20px;
        }
      }
    }
  }
</style>

