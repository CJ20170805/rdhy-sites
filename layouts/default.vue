<template>
  <div>
    <div class="nav-contact">
      <div class="nc-content">
        <div class="phone">
          <span>400-1234-5678</span>
          <span style="padding-left:72px;">1234567890</span>
        </div>
        <div class="weixin">
          <img src="~/assets/images/erweima.jpg" alt>
        </div>
        <div class="online"></div>
        <div class="slogan">
          <p>更专业的资质咨询服务商 !</p>
        </div>
      </div>
    </div>
    <div class="head">
      <div class="nav">
        <a href="#" class="headLogo">
          <img src="~/assets/images/logo.png" alt>
        </a>
        <el-menu
          :default-active="activeIndex2"
          class="nav-menu"
          mode="horizontal"
          @select="handleSelect"
          background-color="rgb(248,246,246)"
          text-color="#222"
          active-text-color="rgb(34, 34, 34)"
        >
          <el-menu-item index="1">
            <nuxt-link to="/">首页</nuxt-link>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">知识产权</template>
            <el-menu-item index="2-1">
              <nuxt-link class="child-nav" to="/detail/patent">专利、商标申请</nuxt-link>
            </el-menu-item>
            <!-- <el-menu-item index="2-2">商标注册</el-menu-item> -->
            <el-menu-item index="2-3" >
               <nuxt-link style="display:block;color:#222;text-decoration:none;" to="/detail/softwareCopyright">软件著作权</nuxt-link>
            </el-menu-item>
            <!-- <el-submenu index="2-3">
              <template slot="title">软件著作权</template>
              <el-menu-item index="2-3-1">申请</el-menu-item>
              <el-menu-item index="2-3-2">转让</el-menu-item>
              <el-menu-item index="2-3-3">变更</el-menu-item>
            </el-submenu> -->
            <!-- <el-submenu index="2-4">
              <template slot="title">软件评测</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>-->
          </el-submenu>
          <!-- <el-menu-item index="3">软件评测</el-menu-item> -->
          <el-menu-item index="4">
            <nuxt-link to="/detail/nationCompany">高新企业认定</nuxt-link>
          </el-menu-item>
          <!-- <el-menu-item index="8">
            <nuxt-link to="/detail/classified">涉密系统集成资质</nuxt-link>
          </el-menu-item> -->
          <!-- <el-menu-item index="5">体系认定</el-menu-item> -->
          <el-submenu index="5">
            <template slot="title">体系认定</template>
            <el-submenu index="5-4">
              <template slot="title">管理体系</template>
              <el-menu-item index="5-4-1">
                 <nuxt-link class="child-nav" to="/detail/90001">ISO9001</nuxt-link>
              </el-menu-item>
              <el-menu-item index="5-4-2">
                 <nuxt-link class="child-nav" to="/detail/14001">ISO14001</nuxt-link>
              </el-menu-item>
              <el-menu-item index="5-4-3">
                <nuxt-link class="child-nav" to="/detail/18001">OHSAS18001</nuxt-link>
              </el-menu-item>
              <el-menu-item index="5-4-4">
                <nuxt-link class="child-nav" to="/detail/20000">ISO20000</nuxt-link>
              </el-menu-item>
              <el-menu-item index="5-4-5">
                <nuxt-link class="child-nav" to="/detail/27001">ISO27001</nuxt-link>
              </el-menu-item>
            </el-submenu>
            <!-- <el-submenu index="5-5">
              <template slot="title">其他体系</template>
              <el-menu-item index="5-5-1">选项1</el-menu-item>
              <el-menu-item index="5-5-2">选项2</el-menu-item>
              <el-menu-item index="5-5-3">选项3</el-menu-item>
            </el-submenu> -->
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">资质认定</template>
            <el-menu-item index="6-1">
              <nuxt-link class="child-nav" to="/detail/infoSystem">信息系统集成服务资质</nuxt-link>
            </el-menu-item>
            <!-- <el-menu-item index="6-2">信息安全服务资质</el-menu-item> -->
            <el-menu-item index="6-3">
               <nuxt-link class="child-nav" to="/detail/anFang">安防工程资质</nuxt-link>
            </el-menu-item>
            <el-menu-item index="6-4">
               <nuxt-link class="child-nav" to="/detail/softCompany">北京市双软评估</nuxt-link>
            </el-menu-item>
            <el-menu-item index="6-5">
               <nuxt-link class="child-nav" to="/detail/zgcCompany">中关村高新技术企业认定</nuxt-link>
            </el-menu-item>
              <el-menu-item index="6-6">
               <nuxt-link class="child-nav" to="/detail/cmmi">CMMI体系认证</nuxt-link>
            </el-menu-item>
            </el-menu-item>
            <el-menu-item index="6-7">
               <nuxt-link class="child-nav" to="/detail/classified">涉密系统集成资质</nuxt-link>
            </el-menu-item>
           <el-menu-item index="6-8">
               <nuxt-link class="child-nav" to="/detail/AAA">AAA信用评级</nuxt-link>
            </el-menu-item>
            <el-menu-item index="6-9">
               <nuxt-link class="child-nav" to="/detail/itss">ITSS认证</nuxt-link>
            </el-menu-item>
            <el-menu-item index="6-9">
               <nuxt-link class="child-nav" to="/detail/infoSafe">信息安全服务资质</nuxt-link>
            </el-menu-item>
              <!-- <el-menu-item index="6-7">
               <nuxt-link class="child-nav" to="/detail/beijingSoft">北京市软件产品登记</nuxt-link>
            </el-menu-item> -->
          </el-submenu>

          <!-- <el-menu-item index="6">资质认定</el-menu-item> -->
          <el-menu-item index="7">
            <nuxt-link to="/AboutUS">联系我们</nuxt-link>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <nuxt/>
    <div class="foot">
      <div class="foot-content">
        <div class="fc-top">
          <div class="fc-top-1">
            <a href="#" class="headLogo">
              <img src="~/assets/images/logo.png" alt>
            </a>
            <!-- <a href="#" class="headLogo">荣德海越</a> -->
          </div>
          <div class="fc-top-2">
            <ul class="foot-nav">
              <li>
                <a href="#">网站首页</a>
              </li>
              <li>
                <a href="#">知识产权</a>
              </li>
              <li>
                <a href="#">软件评测</a>
              </li>
              <li>
                <nuxt-link to="detail/softwareCopyright">高新企业认定</nuxt-link>
              </li>
              <li>
                <a href="#">体系认定</a>
              </li>
              <li>
                <a href="#">资质认定</a>
              </li>
              <li>
                <a href="#">联系我们</a>
              </li>
            </ul>
            <p>地址：北京市海淀区万寿路27号院  电话：010-68207631  传真：86-021-xxxxxxxxxxxxxxxx</p>
            <p>邮箱：office@anyway.org.cn 网址：www.xxxxxx.com​</p>
          </div>
          <div class="fc-top-3">
            <div class="fc-ewm">
              <img src="~/assets/images/erweima.jpg" alt>
              <p>新浪微博</p>
            </div>
            <div class="fc-ewm">
              <img src="~/assets/images/erweima.jpg" alt>
              <p>微信公众号</p>
            </div>
          </div>
        </div>
      </div>
      <div class="fc-bottom">
        <div class="fc-bot-cont">
          <p>© 2019 All Rights Reserved. ICP备案号：1234567890 版权所有：©荣德海越（北京）信息技术有限公司</p>
        </div>
      </div>
    </div>
    <div class="suspension">
      <div class="suspension-box">
        <a href="#" class="a a-service">
          <i class="i"></i>
        </a>
        <a href="javascript:;" class="a a-service-phone">
          <i class="i"></i>
        </a>
        <a href="javascript:;" class="a a-qrcode">
          <i class="i"></i>
        </a>
        <a href="javascript:;" class="a a-top">
          <i class="i"></i>
        </a>
        <div class="d d-service">
          <i class="arrow"></i>
          <div class="inner-box">
            <div class="d-service-item clearfix">
              <a href="#" class="clearfix">
                <span class="circle">
                  <i class="i-qq"></i>
                </span>
                <h3>咨询在线客服</h3>
              </a>
            </div>
          </div>
        </div>
        <div class="d d-service-phone">
          <i class="arrow"></i>
          <div class="inner-box">
            <div class="d-service-item clearfix">
              <span class="circle">
                <i class="i-tel"></i>
              </span>
              <div class="text">
                <p>服务热线</p>
                <p class="red number">4001-021-758</p>
              </div>
            </div>
            <div class="d-service-intro clearfix">
              <p>
                <i></i>服务咨询
              </p>
              <p>
                <i></i>价格优惠
              </p>
              <p>
                <i></i>专人对接
              </p>
            </div>
          </div>
        </div>
        <div class="d d-qrcode">
          <i class="arrow"></i>
          <div class="inner-box">
            <div class="qrcode-img">
              <img src="~/assets/images/erweima.jpg" alt>
            </div>
            <p>微信服务号</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navName: "nav-1",
      activeIndex2: "0"
    };
  },
  head: {
    script: [
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
      },
      {src: 'http://api.map.baidu.com/api?key=&v=1.1&services=true'}
    ]
  },
  created() {
    console.log(this.$route.name);
    this.activeIndex2 = "1";
  },
  methods: {
    navCheck(name) {
      this.navName = name;
      $(".head-container .drop-down").removeClass("nav-dropDown-active");
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      // this.activeIndex2 = key
      console.log(this.activeIndex2);
    }
  },
  mounted() {
    console.log("MOUNT", this.activeIndex2);

    // $('.nav .nav-menu .el-menu-item').eq(1).addClass('is-active');
    // $('.nav .nav-menu .el-submenu__title').eq(0).addClass('el-menu-item-hover');
    $(".nav .nav-menu .el-menu-item")
      .eq(0)
      .addClass("is-active");

    $(".nav .nav-menu .el-menu-item").mouseenter(function() {
      $(this)
        .addClass("is-active")
        .siblings()
        .removeClass("is-active");
    });
    $(".nav .nav-menu .el-menu-item").mouseleave(function() {
      $(this).removeClass("is-active");
      $(".nav .nav-menu .el-menu-item")
        .eq(0)
        .addClass("is-active");
    });

    $(".nav .nav-menu .el-submenu__title").mouseenter(function() {
      $(this)
        .addClass("el-menu-item-hover")
        .siblings()
        .removeClass("el-menu-item-hover");
      $(".nav .nav-menu .el-menu-item").removeClass("is-active");
    });

    $(".nav .nav-menu .el-submenu__title").mouseleave(function() {
      $(this).removeClass("el-menu-item-hover");
      // $(".nav .nav-menu .el-menu-item")
      //   .eq(0)
      //   .addClass("is-active");
    });

    $('.nav .nav-menu .el-menu--horizontal .el-menu .el-menu-item').mouseenter(function(){
      $(this).find('a').css('color','#fff');
    });
        $('.nav .nav-menu .el-menu--horizontal .el-menu .el-menu-item').mouseleave(function(){
      $(this).find('a').css('color','#222');
    });

    $(document).ready(function(){

	/* ----- 侧边悬浮 ---- */
	$(document).on("mouseenter", ".suspension .a", function(){
      var _this = $(this);
      var s = $(".suspension");
      var isService = _this.hasClass("a-service");
      var isServicePhone = _this.hasClass("a-service-phone");
      var isQrcode = _this.hasClass("a-qrcode");
      if(isService){ s.find(".d-service").show().siblings(".d").hide();}
      if(isServicePhone){ s.find(".d-service-phone").show().siblings(".d").hide();}
      if(isQrcode){ s.find(".d-qrcode").show().siblings(".d").hide();}
    });
    $(document).on("mouseleave", ".suspension, .suspension .a-top", function(){
      $(".suspension").find(".d").hide();
    });
    $(document).on("mouseenter", ".suspension .a-top", function(){
      $(".suspension").find(".d").hide(); 
    });
    $(document).on("click", ".suspension .a-top", function(){
      $("html,body").animate({scrollTop: 0});
    });
    $(window).scroll(function(){
      var st = $(document).scrollTop();
      var $top = $(".suspension .a-top");
      if(st > 400){
        $top.css({display: 'block'});
      }else{
        if ($top.is(":visible")) {
          $top.hide();
        }
      }
    });
    
  });

    // var act = this.activeIndex2 - 1;

    // $('.nav .nav-menu .el-menu-item').mouseenter(function () {
    //    $(this).addClass('el-menu-item-hover').siblings().removeClass('el-menu-item-hover is-active');
    // });

    // $('.nav .nav-menu .el-menu-item').mouseleave(function () {
    //    $(this).removeClass('el-menu-item-hover');
    //    $('.nav .nav-menu .el-menu-item').eq(act).addClass('is-active')
    // });

    // $('.nav .nav-menu .el-submenu__title').mouseenter(function () {
    //   $('.nav .nav-menu .el-menu-item').eq(act).removeClass('is-active');
    //    $(this).addClass('el-menu-item-hover').siblings().removeClass('el-menu-item-hover is-active');
    // });

    // $('.nav .nav-menu .el-submenu__title').mouseleave(function () {
    //    $(this).removeClass('el-menu-item-hover');
    //    $('.nav .nav-menu .el-menu-item').eq(act).addClass('is-active')
    // });
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
};
</script>

<style lang='less'>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.child-nav{
  text-decoration: none;
  color: rgb(34, 34, 34);
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

@font-face {
  font-family: wenDing;
  src: url("~assets/font/wending.ttf");
}

/*悬浮链接*/
.suspension{position:fixed;z-index:55;right:0;bottom:85px;width:70px;height:240px;}
.suspension-box{position:relative;float:right;}
.suspension .a{display:block;width:44px;height:44px;background-color:#353535;margin-bottom:4px;cursor:pointer;outline:none;}
.suspension .a.active,
.suspension .a:hover{background:#F05352;}
.suspension .a .i{float:left;width:44px;height:44px;background-image:url('~assets/images/side_icon.png');background-repeat:no-repeat;}
/* .suspension .a-service .i{background-position:0 0;} */
.suspension .a-service .i{width:20px;height:20px;margin-top:12px;margin-left:12px;background-image:url('~assets/images/suspension-bg.png');background-repeat:no-repeat;background-position:0 0;}
.suspension .a-service-phone .i{width:20px;height:20px;margin-top:12px;margin-left:12px;background-image:url('~assets/images/suspension-bg.png');background-repeat:no-repeat;background-position:-27px 0;}
.suspension .a-qrcode .i{background-position:-44px 0;}
.suspension .a-cart .i{background-position:-88px 0;}
.suspension .a-top .i{background-position:-132px 0;}
.suspension .a-top{background:#D2D3D6;display:none;}
.suspension .a-top:hover{background:#c0c1c3;}
.suspension .d{display:none;width:223px;background:#fff;position:absolute;right:67px;min-height:90px;border:1px solid #E0E1E5;border-radius:3px;box-shadow:0px 2px 5px 0px rgba(161, 163, 175, 0.11);}
.suspension .d .arrow{position:absolute;width:8px;height:12px;background:url('~assets/images/side_bg_arrow.png') no-repeat;right:-8px;top:31px;}
.suspension .d-service{top:0;}
.suspension .d-service-phone{top:34px;}
.suspension .d-qrcode{top:78px;}
.suspension .d .inner-box{padding:8px 22px 12px;}
.suspension .d-service-item{border-bottom:1px solid #eee;padding:14px 0;}
.suspension .d-service .d-service-item{border-bottom:none;}
.suspension .d-service-item .circle{width:44px;height:44px;border-radius:50%;overflow:hidden;background:#F1F1F3;display:block;float:left;}
.suspension .d-service-item .i-qq{width:44px;height:44px;background:url('~assets/images/side_con_icon03.png') no-repeat center 15px;display:block;transition:all .2s;border-radius:50%;overflow:hidden;}
.suspension .d-service-item:hover .i-qq{background-position:center 3px;}
.suspension .d-service-item .i-tel{width:44px;height:44px;background:url('~assets/images/side_con_icon02.png') no-repeat center center;display:block;}
.suspension .d-service-item h3{float:left;width:112px;line-height:44px;font-size:15px;margin-left:12px;}
.suspension .d-service-item .text{float:left;width:112px;line-height:22px;font-size:15px;margin-left:12px;}
.suspension .d-service-item .text .number{font-family:Arial,"Microsoft Yahei","HanHei SC",PingHei,"PingFang SC","Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;}
.suspension .d-service-intro{padding-top:10px;}
.suspension .d-service-intro p{float:left;line-height:27px;font-size:12px;width:50%;white-space:nowrap;color:#888;}
.suspension .d-service-intro i{height:27px;width:14px;margin-right:5px;vertical-align:top;display:inline-block;}
.suspension .d-qrcode{text-align:center;}
.suspension .d-qrcode .inner-box{padding:20px 0;}
.suspension .d-qrcode p{font-size:16px;color:#93959c;}

.el-menu--horizontal .el-menu .el-menu-item:hover {
  background-color: rgb(235, 60, 60) !important;
  color: #fff !important;
}
.el-menu--horizontal .el-menu .el-submenu__title:hover {
  background-color: rgb(235, 60, 60) !important;
  color: #fff !important;
}

.nav-contact {
  width: 100%;
  height: 100px;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .nc-content {
    width: 1200px;
    height: 100px;
    margin: 0 auto;
    background: url("~assets/images/header2.png") no-repeat;
    background-size: 100% 100px;
    position: relative;

    .phone {
      width: 380px;
      height: 30px;
      // background-color: lightblue;
      position: absolute;
      left: 234px;
      top: 58px;
      span {
        line-height: 30px;
        color: #fff;
        line-height: 30px;
        font-size: 20px;
        font-weight: bold;
      }
    }
    .weixin {
      width: 64px;
      height: 64px;
      position: absolute;
      right: 86px;
      top: 4px;
      padding: 4px;
      background-color: #fff;
      box-sizing: content-box;
      img {
        width: 64px;
        height: 64px;
      }
    }
    .online {
      width: 220px;
      height: 100px;
      background: url("~assets/images/header_contact.png") no-repeat center;
      position: absolute;
      right: 386px;
      top: 0;
      p {
        font-family: wenDing;
        color: #fff;
        font-size: 30px;
      }
    }
    .slogan {
      width: 340px;
      height: 100px;
      position: absolute;
      left: 80px;
      top: 14px;
      p {
        color: #fff;
        font-size: 26px;
        border-bottom: 1px solid #fff;
        font-style: italic;
        letter-spacing: 2px;
      }
    }
  }
}

.head {
  width: 100%;
  height: 190px;
  background-color: rgb(248, 246, 246);
  padding-top: 100px;
  .nav {
    width: 1200px;
    margin: 0 auto;
    height: 90px;
    background-color: rgb(248, 246, 246);
    display: flex;
    a {
      color: rgb(34, 34, 34);
      font-size: 14px;
      display: block;
      text-decoration: none;
    }
    .headLogo {
      height: 90px;
      width: 200px;
      margin-right: 20px;
      img {
        height: 90px;
        width: 200px;
      }
    }
    .nav-menu {
      height: 90px;
      width: 100%;
      border: none;
        a{
          display: block;
          text-decoration: none;
        }
      .el-menu--horizontal .el-menu .el-submenu__title {
        background-color: #f60 !important;
      }
      .el-menu-item {
        width: 134px;
        height: 90px !important;
        line-height: 90px;
        border: none;
        text-align: center;
        font-size: 16px;
        a {
          font-size: 16px;
          display: block;
          text-decoration: none;
        }
      }
      //     .el-menu-item:hover{
      // background-color: #f60!important;
      //     }
      .el-menu-item-hover {
        background: url("~assets/images/nav_bg3.jpg") no-repeat center !important;
        color: #fff !important;
        // background-size: 96px 80px!important;
        // color: #f60!important;
        // background-color: rgb(248,246,246)!important;
      }
      .el-submenu__title {
        height: 90px !important;
        line-height: 90px;
        font-size: 16px;
        border: none!important;
      }
      .el-submenu__title-hover {
        background: url("~assets/images/nav_bg3.jpg") no-repeat center !important;
        color: rgb(248, 246, 246) !important;
        color: #fff !important;
        border: none !important;
      }
      // .el-submenu__title:hover{
      //   // background: url('~/assets~/assets/images/nav_bg.png') no-repeat center!important;
      //   // background-size: 130px 80px!important;
      //   // color: #fff!important;
      //   color: #f60!important;
      //   background-color: rgb(248,246,246)!important;
      // }
      .el-submenu .is-active {
        color: #fff !important;
        border: none !important;
      }
      .el-menu-item.is-active {
        color: #fff !important;
        background: url("~assets/images/nav_bg3.jpg") no-repeat center !important;
        background-size: 110px 90px !important;
      }
      .el-menu-item.is-active > a {
        color: #fff !important;
      }
    }
  }
}
/*head end*/
.foot {
  width: 100%;
  background-color: rgb(36, 47, 59);
  .foot-content {
    width: 1200px;
    height: 250px;
    margin: 0 auto;
    // background-color: #333;
    padding: 50px 0px;

    .fc-top {
      width: 100%;
      height: 210px;
      div {
        float: left;
      }
      .fc-top-1 {
        height: 200px;
        width: 200px;
        padding-top: 20px;
        .headLogo {
          // background-color: rgb(134, 134, 134);
          display: inline-block;
          img {
            width: 210px;
            height: 85px;
            // filter: invert(100%);
          }
        }
      }
      .fc-top-2 {
        height: 200px;
        width: 700px;
        padding-left: 24px;
        .foot-nav {
          width: inherit;
          height: 60px;
          li {
            float: left;
            list-style-type: none;
            width: 80px;
            height: 60px;
            line-height: 60px;
            a {
              text-decoration: none;
              color: #fff;
              font-size: 13px;
              font-weight: 540;
            }
            a:hover {
              color: #f60;
            }
            text-align: center;
          }
        }
        p {
          color: #fff;
          font-size: 12px;
          padding-left: 56px;
          margin: 8px 0;
        }
      }
      .fc-top-3 {
        height: 200px;
        width: 300px;
        padding-top: 10px;
        .fc-ewm {
          width: 110px;
          height: 140px;
          padding: 5px;
          margin: 0 10px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 30px;
            text-align: center;
            color: #fff;
            font-size: 12px;
          }
        }
      }
    }
  }
  .fc-bottom {
    border-top: 1px solid #ccc;
    height: 50px;
    width: 100%;
    .fc-bot-cont {
      width: 1200px;
      margin: 0 auto;
      height: 50px;
      p {
        color: #fff;
        font-size: 12px;
        line-height: 50px;
      }
    }
  }
}
</style>
