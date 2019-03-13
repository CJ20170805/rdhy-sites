<template>
  <div>
    <div class="head"> 
      <div class="nav-contact">

      </div>
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
          <el-menu-item index="1"><nuxt-link to="/">首页</nuxt-link></el-menu-item>
          <el-submenu index="2">
            <template slot="title">知识产权</template>
            <el-menu-item index="2-1">专利申请</el-menu-item>
            <el-menu-item index="2-2">商标注册</el-menu-item>
            <el-menu-item index="2-3">软件著作权</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">软件评测</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
            <el-menu-item index="3">软件评测</el-menu-item>
              <el-menu-item index="4">高新企业认定</el-menu-item>
                <!-- <el-menu-item index="5">体系认定</el-menu-item> -->

          <el-submenu index="5">
            <template slot="title">体系认定</template>
            <el-submenu index="5-4">
              <template slot="title">质量体系</template>
              <el-menu-item index="5-4-1">ISO9001</el-menu-item>
              <el-menu-item index="5-4-2">ISO14001</el-menu-item>
              <el-menu-item index="5-4-3">OHSAS18001</el-menu-item>
              <el-menu-item index="5-4-4">ISO20000</el-menu-item>
              <el-menu-item index="5-4-5">ISO27000</el-menu-item>
            </el-submenu>
            <el-submenu index="5-5">
              <template slot="title">其他体系</template>
              <el-menu-item index="5-5-1">选项1</el-menu-item>
              <el-menu-item index="5-5-2">选项2</el-menu-item>
              <el-menu-item index="5-5-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">资质认定</template>
            <el-menu-item index="6-1">信息系统集成服务资质</el-menu-item>
            <el-menu-item index="6-2">信息安全服务资质</el-menu-item>
            <el-menu-item index="6-3">安防工程资质</el-menu-item>
          </el-submenu>

          <!-- <el-menu-item index="6">资质认定</el-menu-item> -->
            <el-menu-item index="7"><nuxt-link to="AboutUS">关于我们</nuxt-link></el-menu-item>
        </el-menu>  
      </div> 
    </div>
    <nuxt />
    <div class="foot">
      <div class="foot-content">
        <div class="fc-top">
          <div class="fc-top-1">
            <a href="#" class="headLogo"><img src="/images/logo.png" alt=""></a>
            <!-- <a href="#" class="headLogo">荣德海越</a> -->
          </div>
          <div class="fc-top-2">
            <ul class="foot-nav">
              <li><a href="#">网站首页</a></li>
              <li><a href="#">知识产权</a></li>
              <li><a href="#">软件评测</a></li>
              <li><a href="#">高新企业认定</a></li>
              <li><a href="#">体系认定</a></li>
              <li><a href="#">资质认定</a></li>
              <li><a href="#">关于我们</a></li>
            </ul>
            <p>地址：北京市海淀区万寿路27号院　　电话：86-130-xxxx-0000　　传真：86-021-xxxxxxxxxxxxxxxx</p>
            <p>邮箱：xxxxxxxxx@qq.com　　网址：www.xxxxxx.com​</p>
          </div>
          <div class="fc-top-3">
            <div class="fc-ewm">
              <img src="/images/erweima.jpg" alt="">
              <p>新浪微博</p>
            </div>
            <div class="fc-ewm">
              <img src="/images/erweima.jpg" alt="">
              <p>微信公众号</p>
            </div>
          </div>
        </div>
      </div>
      <div class="fc-bottom">
         <div class="fc-bot-cont">
            <p>© 2019 All Rights Reserved.  ICP备案号：1234567890   版权所有：©荣德海越（北京）信息技术有限公司</p>
         </div>
      </div>
    </div>
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
    a{color: rgb(34, 34, 34);font-size: 14px;display: block;text-decoration: none;}
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
      .el-menu--horizontal .el-menu .el-submenu__title{
         background-color: #f60!important;
      }
      .el-menu-item{
        width: 134px;
        height: 90px!important;
        line-height: 90px;
        border: none;
        text-align: center;
      }
        //     .el-menu-item:hover{
        // background-color: #f60!important;
        //     }
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
      .el-menu-item.is-active>a{
         color: #fff!important;
      }
    }
  }
}
/*head end*/
.foot{
  width: 100%;
  background-color: #333;
  .foot-content{
    width: 1200px;
    height: 250px;
    margin: 0 auto;
    // background-color: #333;
    padding: 50px 0px;

    .fc-top{
      width: 100%;
      height: 210px;
      div{float: left;}
      .fc-top-1{
        height: 200px;
        width: 200px;
        padding-top: 20px;
        .headLogo{
          // background-color: rgb(134, 134, 134);
          display: inline-block;
          img{
            width: 210px;
            height: 80px;
            filter: invert(100%);
          }
        }
      }
      .fc-top-2{
        height: 200px;
        width: 700px;
        padding-left: 24px;
        .foot-nav{
          width: inherit;
          height: 60px;
          li{
            float: left;
            list-style-type: none;
            width: 80px;
            height: 60px;
            line-height: 60px;
            a{text-decoration: none;color: #fff;font-size: 13px;font-weight: 540;}
            a:hover{color: #f60;}
            text-align: center;
          }
        }
        p{color: #fff;font-size: 12px;padding-left: 56px;margin: 8px 0;}
      }
      .fc-top-3{
        height: 200px;
        width: 300px;
        padding-top: 10px;
        .fc-ewm{
          width: 110px;
          height: 140px;
          padding: 5px;
          margin: 0 10px;
          img{
            width: 100px;
            height: 100px;
          }
          p{line-height: 30px;text-align: center;color: #fff;font-size: 12px;}
        }
      }
    }
  }
  .fc-bottom{
    border-top: 1px solid #ccc;
    height: 50px;
    width: 100%;
    .fc-bot-cont{
      width: 1200px;
      margin: 0 auto;
      height: 50px;
      p{color: #fff;font-size: 12px;line-height: 50px;}
    }
  }
}

</style>
