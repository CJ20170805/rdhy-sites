<template>
    <div class="container">
       <div class="banner">
         <el-carousel trigger="click" height="550px">
            <el-carousel-item v-for="item in bannerImgs" :key="item">
             <img :src="item" alt="">
            </el-carousel-item>
          </el-carousel>
       </div>
      
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  data () {
    return {
      bannerImgs: [
        '/images/banner1.jpg',
        '/images/banner2.jpg',
        '/images/banner3.jpg'
      ]
    }
  },
  components: {
    Logo
  }
}
</script>

<style lang='less' scoped>
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;

  .banner{
    width: 100%;
    height: 550px;
    background-color: lightblue;
    margin-top: -4px;

    .el-carousel{
      width: 100%;
    }
    .el-carousel__item{
      width: 100%;
      height: 550px;
      img{
        height: 550px;
      }
    }
  }
}
</style>
