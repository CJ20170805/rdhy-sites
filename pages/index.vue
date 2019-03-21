<template>
  <div class="container">
    <div class="banner">
      <el-carousel trigger="click" height="550px">
        <!-- ~assets~/assets/images/banner001.jpg
         <img :src="item" alt> -->
        <el-carousel-item>  
         <img src="~/assets/images/banner001.jpg" alt="">
        </el-carousel-item>
         <el-carousel-item>  
         <img src="~/assets/images/banner002.jpg" alt="">
        </el-carousel-item>
         <el-carousel-item>  
         <img src="~/assets/images/banner003.jpg" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="compa-introduce">
      <div class="ci-content">
        <b>荣德海越</b>
        <span></span>
        <p>
          本公司专业从事资质咨询服务
          <br>自成立以来，至今已为北京地区上百家企业
          提供过专业的服务
          <br>其中不乏集成行业顶级软件开发商、交通行业前十大集成商、电力行业顶级集成商等等，累积了大量的专业化经验。
        </p>
      </div>
    </div>
    <div class="compa-service">
      <div class="cs-list">
        <h1>荣德海越为您提供专业的资质咨询服务</h1>
        <div class="cs-list-wrap">
          <div class="cs-list-item">
            <i></i>
            <div class="cs-list-item-desc">
              <span>通用咨询服务</span>
              <p>General qualification</p>
            </div>
          </div>
          <span class="cs-line"></span>
          <div class="cs-list-item">
            <i></i>
            <div class="cs-list-item-desc">
              <span>管理体系服务</span>
              <p>Management system</p>
            </div>
          </div>
          <span class="cs-line"></span>
          <div class="cs-list-item">
            <i></i>
            <div class="cs-list-item-desc">
              <span>资质认证服务</span>
              <p>Information skill</p>
            </div>
          </div>
          <span class="cs-line"></span>
          <div class="cs-list-item">
            <i></i>
            <div class="cs-list-item-desc">
              <span>信息安全服务</span>
              <p>Information safety</p>
            </div>
          </div>
        </div>
      </div>
      <div class="cs-detail">
        <div class="cs-item-wrap">
          <div class="cs-detail-item">
            <span>
              <i></i>
              <div>
                <a href="#">年度财务审计报告</a>
              </div>
            </span>
            <span>
              <i></i>
              <div>
                <a href="#">研发费用专项审计报告</a>
              </div>
            </span>
            <span>
              <i></i>
              <div>
                <a href="#">高新技术企业认定</a>
              </div>
            </span>
            <span>
              <i></i>
              <div>
                <a href="#">软件著作权申请</a>
              </div>
            </span>
            <span>
              <i></i>
              <div>
                <a href="#">软件产品登记测试</a>
              </div>
            </span>
            <span>
              <i></i>
              <div>
                <a href="#">软件产品评估及软件企业评估</a>
              </div>
            </span>
            <span>
              <i></i>
              <div>
                <a href="#">AAA企业信用评价</a>
              </div>
            </span>
          </div>
          <div class="cs-detail-item">
            <span>
              <i></i>
              <div>
                <a href="#">ISO9001质量管理体系认证</a>
              </div>
            </span>
            <span>
              <i></i>
              <div>
                <a href="#">ISO14001环境管理认证</a>
              </div>
            </span>
            <span>
              <i></i>
              <div>
                <a href="#">OHSAS18000职业健康安全管理体系认证</a>
              </div>
            </span>
            <span>
              <i></i>
              <div>
                <a href="#">ISO20000信息管理体系认证</a>
              </div>
            </span>
            <span>
              <i></i>
              <div>
                <a href="#">ISO27001信息安全体系认证</a>
              </div>
            </span>
          </div>
          <div class="cs-detail-item">
            <span>
              <i></i>
              <div>
                <a href="#">信息系统集成及服务资质</a>
              </div>
            </span>
            <span>
              <i></i>
              <div>
                <a href="#">涉密系统集成资质</a>
              </div>
            </span>
            <span>
              <i></i>
              <div>
                <a href="#">安防工程企业资质</a>
              </div>
            </span>
            <span>
              <i></i>
              <div>
                <a href="#">ITSS信息技术服务</a>
              </div>
            </span>
            <span>
              <i></i>
              <div>
                <a href="#">CMMI软件能力成熟度模型</a>
              </div>
            </span>
          </div>
          <div class="cs-detail-item">
            <span>
              <i style="margin-top:0px;"></i>
              <div>
                <a href="#" style="line-height:20px;font-size:14.5px;">认证方向（中国网络安全审查技术与认证中心CCRC）：</a>
              </div>
            </span>
            
            <div class="items" style="height:140px;">
              <div class="item-left" style="height:120px;">
                <p>信息系统安全集成</p>
                <p>信息安全风险评估</p>
                <p>信息安全应急处理</p>
                <p>信息系统灾难备份与恢复</p>
              </div>
              <div class="item-right" style="height:120px;">
                <p>软件安全开发服务资质</p>
                <p>网络安全审计</p>
                <p>工业控制系统安全</p>
              </div>
            </div>
      
            <span>
              <i style="margin-top:0px;"></i>
              <div>
               <a href="#" style="line-height:20px;font-size:14.5px;"> 认证方向（中国信息安全测评中心CNITSEC）：</a>
              </div>
            </span>

            <div class="items">
              <div class="item-left">
                <p>安全工程 </p>
                <p>风险评估</p>
                <p>安全开发</p>
                <p> 灾难备份与恢复</p>
              </div>
              <div class="item-right">
                <p>信息系统审计</p>
                <p>大数据安全类</p>
                <p>云计算安全类</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div class="compa-case">
      <div class="cc-content">
        <div class="cc-title">
          <h1>推荐服务
            <i></i>
          </h1>
        </div>
        <div class="cc-service">
          <a href="#">
            <img src="~/assets/images/p-4.jpg" alt>
            <p>软件著作权申请</p>
          </a>
          <a href="#">
            <img src="~/assets/images/p-5.jpg" alt>
            <p>管理体系认证</p>
          </a>
          <a href="#">
            <img src="~/assets/images/p-6.jpg" alt>
            <p>高新企业认定</p>
          </a>
          <a href="#">
            <img src="~/assets/images/p-7.jpg" alt>
            <p>资质管家咨询</p>
          </a>
        </div>
      </div>
    </div>
    <div class="compa-contact">
      <div class="cc-content">
        <p>提供科学、系统、建设咨询、全生命周期维护、资质公关等全方位、
          <span>一站式的优质服务</span>
          <a href="#">联系我们</a>
        </p>
      </div>
    </div>
    <div class="compa-step">
      <div class="cs-title">
        <b>服务流程</b>
        <p>快速审核，优化提交流程、全程跟踪</p>
      </div>
      <div class="cs-content">
        <div class="cs-item">
          <img src="~/assets/images/step01.png" alt>
          <p>线上咨询</p>
        </div>
        <div class="cs-arrow-item">
          <img src="~/assets/images/step_arrow.png" alt>
        </div>
        <div class="cs-item">
          <img src="~/assets/images/step02.png" alt>
          <p>准备材料</p>
        </div>
        <div class="cs-arrow-item">
          <img src="~/assets/images/step_arrow.png" alt>
        </div>
        <div class="cs-item">
          <img src="~/assets/images/step03.png" alt>
          <p>提交申请</p>
        </div>
        <div class="cs-arrow-item">
          <img src="~/assets/images/step_arrow.png" alt>
        </div>
        <div class="cs-item">
          <img src="~/assets/images/step04.png" alt>
          <p>授权领证</p>
        </div>
      </div>
    </div>
    <div class="compa-why">
      <div class="cw-title">
        <h1>为什么选择我们</h1>
        <i></i>
        <p>企业认证咨询服务的行业领跑者</p>
      </div>
      <div class="cw-desc">
        <ul>
          <li>
            <img src="~/assets/images/Ticon1.png" alt>
            <h3>专业一对一服务</h3>
            <i></i>
            <h6>更专业</h6>
            <p>一对一即时咨询服务，
              <br>专业领域顾问，至少二年以上从业经验
            </p>
          </li>
          <li>
            <img src="~/assets/images/Ticon2.png" alt>
            <h3>严控风险 安全保障</h3>
            <i></i>
            <h6>更多保障</h6>
            <p>严格把控业务办理风
              <br>险，保障办理过程安全顺利、平稳
            </p>
          </li>
          <li>
            <img src="~/assets/images/Ticon3.png" alt>
            <h3>全程化透明操作</h3>
            <i></i>
            <h6>更放心</h6>
            <p>服务产品化定制规范，
              <br>全程可监控、可追溯、业务进度实时跟进
            </p>
          </li>
          <li>
            <img src="~/assets/images/Ticon4.png" alt>
            <h3>一站式企业服务</h3>
            <i></i>
            <h6>更无忧</h6>
            <p>涵盖企业初创期、成长
              <br>期、成熟期，满足各类不同业务办理需求
            </p>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div class="compa-strength">
        <div class="cs-content">
          <div class="cs-title">
            <h3>实力见证</h3>
            <i></i>
          </div>
          <div class="cs-item cs-item-1">
            <span>2011年荣德海越成立</span>
            <p>原名为北京中软瑞邦科技咨询服务中心，是由原中国软件行业协会秘书长胡崑山创建</p>
          </div>
           <div class="cs-item cs-item-2">
              <span>2013年整合资源 一站式服务</span>
            <p>为全方位服务品牌商和多家知名企业达
              成合作帮助品牌商提供资质咨询服务</p>
          </div>
           <div class="cs-item cs-item-3">
             <span>2014年企业更名</span>
            <p>更名为荣德海越（北京）信息技术有限公司</p>
          </div>
           <div class="cs-item cs-item-4">
            <span>2016年硕果累累</span>
            <p>拥有资质管理和服务平台 、资质风险控制管理系统 、第三方平台监管系统等8项自主知识产权的软件产品。</p>
          </div>
           <div class="cs-item cs-item-5" style="padding:20px 6px;">
           <span>2019年不忘初心，砥砺前行</span>
            <p>至今已为北京地区上百家企业提供过专业的服务，其中不乏顶级软件开发商、交通行业前十、电力行业顶级集成商等等。</p>
          </div>
        </div>
    </div>-->
    <div class="compa-friends">
      <div class="cw-title">
        <h1>合作伙伴</h1>
        <i></i>
      </div>
      <div class="cf-list">
        <ul>
          <li>
            <img src="~/assets/images/clients_img04.jpg" alt>
          </li>
          <li>
            <img src="~/assets/images/clients_img18.jpg" alt>
          </li>
          <li>
            <img src="~/assets/images/clients_img15.jpg" alt>
          </li>
          <li>
            <img src="~/assets/images/friends7.jpg" alt>
          </li>
          <li>
            <img src="~/assets/images/friends3.jpg" alt>
          </li>
          <li>
            <img src="~/assets/images/clients_img01.jpg" alt>
          </li>
          <li>
            <img src="~/assets/images/clients_img12.jpg" alt>
          </li>
          <li>
            <img src="~/assets/images/clients_img09.jpg" alt>
          </li>
          <li>
            <img src="~/assets/images/clients_img16.jpg" alt>
          </li>
          <li>
            <img src="~/assets/images/clients_img08.jpg" alt>
          </li>
        </ul>
      </div>
    </div>
    <div class="zixun" style="margin-bottom:-6px;overflow:hidden">
      <iframe height="940" allowTransparency="true" style="width:100%;border:none;overflow:hidden;" frameborder="0" src="https://s9as9kr5kml0qgs4.mikecrm.com/wl37sst"></iframe>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  data () {
    return {
      bannerImgs: [
        // "~assets~/assets/images/banner001.jpg",
        // "~assets~/assets/images/banner002.jpg",
        // "~assets~/assets/images/banner003.jpg"
      ]
    };
  },
  components: {
    Logo
  }
};
</script>

<style lang='less' scoped>
.container {
  width: 100%;
  min-height: 100vh;

  .banner {
    width: 100%;
    height: 550px;
    .el-carousel {
      width: 100%;
    }
    .el-carousel__item {
      width: 100%;
      height: 550px;
      img {
        height: 550px;
        width: 100%;
      }
    }
  }
  .compa-introduce {
    width: 100%;
    background: url("~assets/images/xieWBg.jpg");
    .ci-content {
      width: 1200px;
      height: 300px;
      margin: 0 auto;
      padding: 56px 100px;
      b {
        font-size: 18px;
        display: block;
        font-size: bold;
        color: crimson;
        width: 100%;
        text-align: center;
      }
      span {
        width: 30px;
        height: 5px;
        background: #ccc;
        display: block;
        margin: 10px auto 36px auto;
      }
      p {
        text-align: center;
        font-size: 17px;
        line-height: 30px;
      }
    }
  }
  .compa-service {
    width: 100%;
    height: 790px;
    min-width: 1100px;
    .cs-list {
      padding-top: 60px;
      width: 100%;
      height: 290px;
      background-color: rgb(235, 60, 60);
      h1 {
        height: 40px;
        color: #fff;
        text-align: center;
        font-size: 30px;
      }
      .cs-list-wrap {
        width: 1200px;
        margin: 24px auto;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .cs-list-item {
          height: 110px;
          width: 350px;
          i {
            float: left;
            width: 94px;
            height: 94px;
            margin-top: 8px;
            background: url("~assets/images/services_icon.png") no-repeat center;
          }
          .cs-list-item-desc {
            width: 160px;
            height: 110px;
            float: left;
            span {
              display: block;
              width: 126px;
              color: #fff;
              height: 30px;
              font-size: 20px;
              font-weight: 560;
              float: left;
              margin: 28px 50px 0 0;
              border-bottom: 1px solid #fff;
            }
            p {
              color: #fff;
              line-height: 27px;
              font-weight: 400;
              font-size: 16px;
            }
          }
        }
        .cs-line {
          width: 5px;
          height: 28px;
          display: block;
          // float: left;
          margin: 10px 17px 0 20px;
          background: #ccc;
        }
      }
    }
    .cs-detail {
      width: 100%;
      height: 500px;
      background: url("~assets/images/servesbg.png") no-repeat center;
      min-width: 1340px;

      .cs-item-wrap {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-around;
        .cs-detail-item {
          width: 270px;
          height: 420px;
          padding: 30px 2px 0 8px;
          margin-top: 36px;
          background: url("~assets/images/servesListbg.png") no-repeat center;
          border-radius: 2px;

          .items{
            width: 100%;
            height: 140px;
            div{
              width: 50%;height: 100px;
              float: left;
              padding: 6px 8px 4px 8px;
              margin-top: 14px;
    
              p{
                font-size: 14px;
                line-height:24px;
                color: #5f5f5f;
              }
            }
            .item-left{border-right: 1px solid rgb(155, 155, 155);}
          }

          span {
            display: block;
            width: 100%;
            height: 55px;
            padding: 20px 10px;

            i {
              display: block;
              margin: 6px 10px 0 0px;
              float: left;
              width: 20px;
              height: 20px;
              background: url("~assets/images/servesListTb.png") no-repeat center;
            }
            div {
              width: 200px;
              float: left;
              font-size: 14px;
              font-weight: 550;
              color:#4a4848;
              // p{font-size: 14px;line-height: 20px;}
              a {
                display: block;
                line-height: 32px;
                font-size: 15px;
                color: rgb(78, 76, 76);
                text-decoration: none;
                font-weight: 550;
              }
              a:hover {
                color: rgb(235, 60, 60);
              }
            }
          }
        }
      }
    }
  }
  .compa-case {
    width: 100%;
    .cc-content {
      width: 1200px;
      height: 470px;
      margin: 0 auto;
      // background: url('~/assets/images/xieWBg.jpg');
      .cc-title {
        width: 100%;
        height: 134px;
        background: url("~assets/images/cgalbg2.jpg") no-repeat center;
        padding-top: 40px;

        h1 {
          font-size: 24px;
          color: #fff;
          line-height: 34px;
          text-align: center;
          i {
            width: 30px;
            height: 5px;
            background: #ccc;
            display: block;
            margin: 10px auto 0 auto;
          }
        }
      }
      .cc-service {
        padding: 20px 0;
        width: 100%;
        display: flex;
        margin: 20px 0 60px 0;
        justify-content: space-around;
        a {
          display: inline-block;
          width: 270px;
          height: 260px;
          text-decoration: none;
          padding: 5px;
          box-sizing: border-box;
          // background-color: #E63337;

          img {
            width: 260px;
            height: 200px;
          }
          p {
            color: #666;
            text-align: center;
            line-height: 50px;
            font-weight: 550;
          }
        }
        a:hover > p {
          color: rgb(235, 60, 60) !important;
        }
      }
    }
  }
  .compa-why {
    width: 100%;
    height: 560px;
    margin: 0 auto;
    // background-color: lightblue;
    .cw-title {
      text-align: center;
      background-color: rgb(235, 60, 60);
      padding-top: 30px;
      height: 140px;
      i {
        width: 30px;
        height: 5px;
        background: #ccc;
        display: block;
        margin: 10px auto 0 auto;
      }
      h1 {
        color: #fff;
        font-size: 24px;
      }
      p {
        font-size: 14px;
        color: #ddd;
        padding-top: 6px;
      }
    }
    .cw-desc {
      width: 1200px;
      margin: 0 auto;
      ul {
        width: 100%;
        padding: 0;
        display: flex;
        margin-top: 20px;
        li {
          list-style-type: none;
          width: 25%;
          height: 376px;
          background-color: #fff;
          text-align: center;
          padding: 44px 26px;

          img {
            width: 100px;
            height: 100px;
          }
          h3 {
            line-height: 30px;
            font-size: 18px;
            font-weight: bold;
            margin: 20px 0 0 0;
          }
          i {
            width: 75px;
            height: 4px;
            background: #e63337;
            display: block;
            margin: 8px auto 20px auto;
          }
          h6 {
            color: #e63337;
            line-height: 25px;
            font-weight: bold;
            font-size: 14px;
            margin: 10px 0;
          }
          p {
            line-height: 17px;
            font-size: 12px;
          }
        }
      }
    }
  }
  .compa-friends {
    width: 1200px;
    margin: 0 auto;
    // padding-top: 40px;
    .cw-title {
      text-align: center;
      // background-color: rgb(235, 60, 60);
      background: url("~assets/images/cgalbg2.jpg") no-repeat center;
      padding-top: 30px;

      height: 100px;
      i {
        width: 30px;
        height: 5px;
        background: #ccc;
        display: block;
        margin: 10px auto 0 auto;
      }
      h1 {
        color: #fff;
        font-size: 24px;
      }
      p {
        font-size: 14px;
        color: #ddd;
        padding-top: 6px;
      }
    }
    .cf-list {
      ul {
        width: 1051px;
        height: 180px;
        margin: 40px auto 60px auto;
        padding: 0;
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;
        li {
          border-right: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          list-style-type: none;
          float: left;
          padding: 2px;
          box-sizing: border-box;
          margin: 0;
          height: 90px;
          width: 210px;
          img {
            width: 206px;
            height: 86px;
          }
        }
      }
    }
  }
  .compa-contact {
    width: 100%;
    height: 140px;
    background-color: rgb(235, 60, 60);
    margin: 20px auto;
    .cc-content {
      width: 1200px;
      margin: 0 auto;
      height: 140px;
      p {
        color: #fff;
        font-size: 20px;
        line-height: 140px;
        height: 140px;
        padding-left: 60px;
        span {
          font-size: 32px;
        }
        a {
          display: inline-block;
          width: 152px;
          text-decoration: none;
          height: 48px;
          border: 1px solid #fff;
          border-radius: 4px;
          line-height: 48px;
          text-align: center;
          color: #fff;
          margin-left: 80px;
        }
        a:hover {
          background-color: #fff;
          color: rgb(235, 60, 60);
        }
      }
    }
  }
  .compa-step {
    width: 1200px;
    height: 360px;
    margin: 40px auto 60px auto;
    padding: 20px 0 0 0;
    .cs-title {
      text-align: center;
      b {
        font-size: 25px;
        color: rgb(235, 60, 60);
      }
      p {
        font-size: 14px;
        line-height: 40px;
        color: rgb(194, 192, 192);
      }
    }
    .cs-content {
      width: 100%;
      padding: 0 160px;
      margin-top: 40px;
      display: flex;
      justify-content: space-around;
      .cs-item {
        width: 140px;
        height: 200px;
        padding: 5px;
        img {
          width: 130px;
          margin: 0 auto;
        }
        p {
          text-align: center;
          font-size: 18px;
          color: rgb(85, 83, 83);
          line-height: 60px;
        }
      }
      .cs-arrow-item {
        width: 40px;
        height: 200px;
        padding-top: 63px;
      }
    }
  }
  .zixun{
    width: 100%;
    overflow: hidden!important;
    iframe{
      overflow: hidden;
    }
  }
  // .compa-strength{
  //   height: 436px;
  //   min-width: 1234px;
  //   width: 100%;
  //   background: url('~/assets/images/sljzbg.jpg') no-repeat center top;
  //   .cs-content{
  //     width: 1200px;
  //     height: 436px;
  //     margin: 0 auto;
  //     position: relative;
  //     // background-color: red;
  //     .cs-title{
  //       width: 126px;
  //       height: 46px;
  //       position: absolute;
  //       left: 10px;
  //       top: 20px;
  //       h3{font-size: 22px;line-height: 30px;}
  //       i{
  //         margin: 4px 0;
  //         width: 60px;
  //         height: 10px;
  //         background: url(~/assets/images/star.png) repeat-x;
  //         display: block;
  //       }
  //     }
  //     .cs-item{
  //       width: 194px;
  //       height: 112px;
  //       // background-color:rgb(231, 176, 176);
  //       box-sizing: border-box;
  //       padding: 20px 18px;
  //       position: absolute;
  //       span{font-size: 15px;color: #222;}
  //       p{font-size: 12px;color: #333;padding-top: 8px;}
  //     }
  //     .cs-item-1{
  //       left: 100px;
  //       top: 110px;
  //     }
  //     .cs-item-2{
  //       width: 246px;
  //       left: 262px;
  //       top: 275px;
  //     }
  //     .cs-item-3{
  //       left: 483px;
  //       top: 104px;
  //     }
  //     .cs-item-4{
  //       width: 223px;
  //       left: 662px;
  //       top: 273px;
  //     }
  //     .cs-item-5{
  //       width: 232px;
  //       left: 866px;
  //       top: 105px;
  //     }
  //   }
  // }
}
</style>
