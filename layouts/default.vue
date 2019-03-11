<template>
  <div>
    <div class="head"> 
      <!-- <div class="head-container">
          <div class="headNav">
            <ul> 
              <a href="#" class="headLogo"><img src="/images/logo.png" alt=""></a>
              <li @click="navCheck('nav-1')" @mouseenter="navCheck('nav-1')" @mouseleave="navCheck(navName)" :class="[navName == 'nav-1' ? 'nav-active':'']"><a :class="[navName == 'nav-1' ? 'nav-a-active':'nav-a-normal']" href="/">首页</a></li>
              <li @click="navCheck('nav-2')" @mouseenter="navCheck('nav-2')" @mouseleave="navCheck(navName)" :class="[navName == 'nav-2' ? 'nav-active':'']"><a :class="[navName == 'nav-2' ? 'nav-a-active':'nav-a-normal']" href="#">知识产权</a></li> 
              <li @click="navCheck('nav-3')" @mouseenter="navCheck('nav-3')" @mouseleave="navCheck(navName)" :class="[navName == 'nav-3' ? 'nav-active':'']"><a :class="[navName == 'nav-3' ? 'nav-a-active':'nav-a-normal']" href="#">软件评测</a></li> 
              <li @click="navCheck('nav-4')" @mouseenter="navCheck('nav-4')" @mouseleave="navCheck(navName)" :class="[navName == 'nav-4' ? 'nav-active':'']"><a :class="[navName == 'nav-4' ? 'nav-a-active':'nav-a-normal']" href="#">高新企业认定</a></li> 
              <li @click="navCheck('nav-5')" @mouseenter="navCheck('nav-5')" @mouseleave="navCheck(navName)" :class="[navName == 'nav-5' ? 'nav-active':'']"><a :class="[navName == 'nav-5' ? 'nav-a-active':'nav-a-normal']" href="#">体系认定</a></li> 

              <li @click="navCheck('nav-6')" @mouseenter="navCheck('nav-6')" @mouseleave="navCheck(navName)" :class="[navName == 'nav-6' ? 'nav-active':'']"><a :class="[navName == 'nav-6' ? 'nav-a-active':'nav-a-normal']" href="#">资质认定</a></li> 
              
              <li @click="navCheck('nav-7')" @mouseenter="navCheck('nav-7')" @mouseleave="navCheck(navName)" :class="[navName == 'nav-7' ? 'nav-active':'']"><a :class="[navName == 'nav-7' ? 'nav-a-active':'nav-a-normal']" href="#">关于我们</a></li> 

              <li @mouseenter="navCheck('nav-8')" @mouseleave="navCheck(navName)" :class="[navName == 'nav-8' ? 'nav-active':'']"><a :class="[navName == 'nav-8' ? 'nav-a-active':'nav-a-normal']" href="/AboutUS">联系我们</a></li> 
            </ul>
          </div>
          <div class="drop-down" :class="[navName == 'nav-2' ? 'nav-dropDown-active':'']">
            <a href="#">软件</a>
            <a href="#">专利</a>
            <a href="#">商标</a>
          </div>
      </div> -->
      <div class="nav">
        <a href="#" class="headLogo"><img src="/images/logo.png" alt=""></a>
        <el-menu
          :default-active="activeIndex2"
          class="nav-menu"
          mode="horizontal"
          @select="handleSelect"
          background-color="rgb(248,246,246)"
          text-color="#222"
          active-text-color="#ffd04b">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">知识产权</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">软件评测</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
            <el-menu-item index="3">软件评测</el-menu-item>
              <el-menu-item index="4">高新企业认定</el-menu-item>
                <el-menu-item index="5">体系认定</el-menu-item>
                  <el-menu-item index="6">资质认定</el-menu-item>
                    <el-menu-item index="7">关于我们</el-menu-item>
        </el-menu>  
      </div> 
    </div>
    <nuxt />
  </div>
</template>
<script>
export default {
  data () {
    return {
      navName: 'nav-1',
      activeIndex2: '1'
    }
  },
  head: {
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
    ]
  },
  created () {
    console.log(this.$route)
    let routeName = this.$route.name;

    switch (routeName) {
      case 'AboutUS':
        this.navName = 'nav-6'
        break;
      default:
        this.navName = 'nav-1'
        break;
    }
  },
  methods: {
    navCheck (name) {
      this.navName = name
      $('.head-container .drop-down').removeClass('nav-dropDown-active')    
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted () {
    // $('.head-container .headNav ul li').mouseenter(function () {
    //   $(this).addClass('nav-active').siblings().removeClass('nav-active')
    //   $(this).find('a').css('color','#fff');

    //   $(this).siblings().find('a').css('color','#222');
    // })
    // $('.head-container .headNav ul li').mouseleave(function () {
    //   $(this).removeClass('nav-active')
    //   $(this).find('a').css('color','#222');
    //   $('.head-container .headNav ul li:first').addClass('nav-active')
    //   $('.head-container .headNav ul li:first').find('a').css('color','#fff');
    // })
  }
}
</script>

<style lang='less'>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
/*head */
// .head{width: 100%;height: 100px;background-color: rgb(248, 246, 246);}
// .head .head-container{width: 1200px;height: 100px;margin: 0 auto;position: relative;}
// .head .headNav{width: 100%;height:100px;margin: 0 auto;}
// .head .headNav .headLogo{float:left;width: 200px;margin-right: 30px;}
// .head .headNav li{float: left;height: 100px;width: 130px;line-height: 100px;text-align: center;list-style: none;}
// /* .head .headNav li a:hover{background: url('/images/nav_bg.png') no-repeat;color: #fff!important;} */
// .nav-active{background: url('/images/nav_bg.png') no-repeat;color: #fff!important;}
// .head .headNav li a{display: block;color: #222;text-decoration: none;}
// .nav-a-normal{color: #222;}
// .nav-a-active{color: #fff!important;}
// .nav-dropDown-active{display: block!important}

// .head .head-container .drop-down{display: none;position: absolute;top:100px;left: 466px;z-index:10;width: 130px;background-color: #f60;}
// .head .head-container .drop-down a{display:block;text-align: center;text-decoration: none;color:#fff;height: 30px;width: 100%}

.head{
  width: 100%;
  height: 90px;
  background-color: rgb(248,246,246);
  .nav{
    width: 1200px;
    margin: 0 auto;
    height: 90px;
    background-color: rgb(248,246,246);
    display: flex;
    .headLogo{
      height: 90px;
      width: 200px;
      margin-right: 20px;
      img{
        height: 90px;
        width: 200px;
      }
    }
    .nav-menu{
      height: 90px;
      width: 100%;
      border: none;
      .el-menu-item{
        width: 134px;
        height: 90px!important;
        line-height: 90px;
        border: none;
        text-align: center;
      }
      .el-menu-item:hover{
        // background: url('/images/nav_bg.png') no-repeat center!important;
        // background-size: 96px 80px!important;
        color: #f60!important;
        background-color: rgb(248,246,246)!important;
 
      }
      .el-submenu__title{
        height: 90px!important;
        line-height: 90px;
      }
      .el-submenu__title:hover{
        // background: url('/images/nav_bg.png') no-repeat center!important;
        // background-size: 130px 80px!important;
        // color: #fff!important;
        color: #f60!important;
        background-color: rgb(248,246,246)!important;
      }
      .el-menu-item.is-active{
        color: #fff!important;
        background: url('/images/nav_bg.png') no-repeat center!important;
        background-size: 110px 90px!important;
      }
    }
  }
}
/*head end*/


</style>
