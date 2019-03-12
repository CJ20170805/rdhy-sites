<template>
    <div class="container">
       <div class="banner">
         <el-carousel trigger="click" height="550px">
            <el-carousel-item v-for="item in bannerImgs" :key="item">
             <img :src="item" alt="">
            </el-carousel-item>
          </el-carousel>
       </div>
      <div class="compa-introduce">
        <div class="ci-content">
          <b>荣德海越</b>
          <span></span>
          <p>提供一站式全网运营服务，依托大数据，洞察消费导向，整合资源打爆<br>你的店铺 
          成熟的服务大客户运营经验，其中包括海尔、科沃斯、廖记、渔米之湘<br> 等国内外品牌。
          未来我们仍将不忘初心，继续前行，为企业、店铺提供更加全面的代运营服务，共创电商新局面</p>
        </div>
      </div>
      <div class="compa-service">
        <div class="cs-list">
          <h1>灵动共创为您提供全网电商代运营服务</h1>
          <div class="cs-list-wrap">
            <div class="cs-list-item">
              <i></i>
              <div class="cs-list-item-desc">
                <span>整店代运营服务</span>
                <p>Whole shop opreator</p>
              </div>
            </div>
            <span class="cs-line"></span>
            <div class="cs-list-item">
              <i></i>
              <div class="cs-list-item-desc">
                <span>整店代运营服务</span>
                <p>Whole shop opreator</p>
              </div>
            </div>
            <span class="cs-line"></span>
            <div class="cs-list-item">
              <i></i>
              <div class="cs-list-item-desc">
                <span>整店代运营服务</span>
                <p>Whole shop opreator</p>
              </div>
            </div>
          </div>
        </div>
        <div class="cs-detail">
          <div class="cs-detail-item">
            <span>
              <i></i>
              <div>
                <a href="#">天猫代运营</a>
                <p>天猫入驻、整店运营、策划推广</p>
              </div>
            </span>
             <span>
              <i></i>
              <div>
                <a href="#">天猫代运营</a>
                <p>天猫入驻、整店运营、策划推广</p>
              </div>
            </span>
             <span>
              <i></i>
              <div>
                <a href="#">天猫代运营</a>
                <p>天猫入驻、整店运营、策划推广</p>
              </div>
            </span>
          </div>
          <div class="cs-detail-item">
            <span>
              <i></i>
              <div>
                <a href="#">天猫代运营</a>
                <p>天猫入驻、整店运营、策划推广</p>
              </div>
            </span>
            <span>
              <i></i>
              <div>
                <a href="#">天猫代运营</a>
                <p>天猫入驻、整店运营、策划推广</p>
              </div>
            </span>
            <span>
              <i></i>
              <div>
                <a href="#">天猫代运营</a>
                <p>天猫入驻、整店运营、策划推广</p>
              </div>
            </span>
          </div>
          <div class="cs-detail-item">
            <span>
              <i></i>
              <div>
                <a href="#">天猫代运营</a>
                <p>天猫入驻、整店运营、策划推广</p>
              </div>
            </span>
             <span>
              <i></i>
              <div>
                <a href="#">天猫代运营</a>
                <p>天猫入驻、整店运营、策划推广</p>
              </div>
            </span>
          </div>
        </div>
      </div>
      <div class="compa-case">
        <div class="cc-content">
          <div class="cc-title">
            <h1>推荐服务 <i></i></h1>
          </div>
          <div class="cc-service">
            <a href="#">
              <img src="/images/p-4.jpg" alt="">
              <p>商标注册</p>
            </a>
            <a href="#">
              <img src="/images/p-4.jpg" alt="">
              <p>商标注册</p>
            </a>
            <a href="#">
              <img src="/images/p-4.jpg" alt="">
              <p>商标注册</p>
            </a>
            <a href="#">
              <img src="/images/p-4.jpg" alt="">
              <p>商标注册</p>
            </a>
          </div>
        </div>
      </div>
      <div class="compa-contact">
        <div class="cc-content">
          <p>我们有  <span>超过20年</span>  的经验，在这里我们可以向您提供较好的指导！ <a href="#">联系我们</a></p>
        </div>
      </div>
      <div class="compa-step">
         <div class="cs-title">
            <b>服务流程</b>
            <p>快速审核，优化提交流程、全程跟踪</p>
          </div>
        <div class="cs-content">
          <div class="cs-item">
            <img src="/images/step01.png" alt="">
            <p>商标注册</p>
          </div>
          <div class="cs-arrow-item">
            <img src="/images/step_arrow.png" alt="">
          </div>
             <div class="cs-item">
            <img src="/images/step02.png" alt="">
            <p>商标注册</p>
          </div>
          <div class="cs-arrow-item">
            <img src="/images/step_arrow.png" alt="">
          </div>
             <div class="cs-item">
            <img src="/images/step03.png" alt="">
            <p>商标注册</p>
          </div>
          <div class="cs-arrow-item">
            <img src="/images/step_arrow.png" alt="">
          </div>
             <div class="cs-item">
            <img src="/images/step04.png" alt="">
            <p>商标注册</p>
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
               <img src="/images/Ticon1.png" alt="">
               <h3>绝对让您放心</h3>
               <i></i>
               <h6>专业 真诚 用心</h6>
               <p>我们有多年的电商经验和专业的团队，精良的技术，不仅仅是节省您的成本，提升效益，也能让您省心，省事。</p>
             </li>
              <li>
               <img src="/images/Ticon2.png" alt="">
               <h3>绝对让您放心</h3>
               <i></i>
               <h6>专业 真诚 用心</h6>
               <p>我们有多年的电商经验和专业的团队，精良的技术，不仅仅是节省您的成本，提升效益，也能让您省心，省事。</p>
             </li>
              <li>
               <img src="/images/Ticon3.png" alt="">
               <h3>绝对让您放心</h3>
               <i></i>
               <h6>专业 真诚 用心</h6>
               <p>我们有多年的电商经验和专业的团队，精良的技术，不仅仅是节省您的成本，提升效益，也能让您省心，省事。</p>
             </li>
              <li>
               <img src="/images/Ticon4.png" alt="">
               <h3>绝对让您放心</h3>
               <i></i>
               <h6>专业 真诚 用心</h6>
               <p>我们有多年的电商经验和专业的团队，精良的技术，不仅仅是节省您的成本，提升效益，也能让您省心，省事。</p>
             </li>
           </ul>
        </div>
      </div>
      <div class="compa-strength">
        <div class="cs-content">
          <div class="cs-item cs-item-1">
            <span>2011年荣德海越成立</span>
            <p>率先提出“代运营”升级“带运
              营”并制定行业标准。</p>
          </div>
           <div class="cs-item cs-item-2">
            <span>2011年荣德海越成立</span>
            <p>率先提出“代运营”升级“带运
              营”并制定行业标准。</p>
          </div>
           <div class="cs-item cs-item-3">
           <span>2011年荣德海越成立</span>
            <p>率先提出“代运营”升级“带运
              营”并制定行业标准。</p>
          </div>
           <div class="cs-item cs-item-4">
            <span>2011年荣德海越成立</span>
            <p>率先提出“代运营”升级“带运
              营”并制定行业标准。</p>
          </div>
           <div class="cs-item cs-item-5">
           <span>2011年荣德海越成立</span>
            <p>率先提出“代运营”升级“带运
              营”并制定行业标准。</p>
          </div>
        </div>
      </div>
      <div class="compa-friends">
        <div class="cw-title">
          <h1>合作伙伴</h1>
          <i></i>
        </div>
        <div class="cf-list">
          <ul>
            <li><img src="/images/clients_img04.jpg" alt=""></li>
            <li><img src="/images/clients_img18.jpg" alt=""></li>
            <li><img src="/images/clients_img15.jpg" alt=""></li>
            <li><img src="/images/friends7.jpg" alt=""></li>
            <li><img src="/images/friends3.jpg" alt=""></li>
            <li><img src="/images/clients_img01.jpg" alt=""></li>
            <li><img src="/images/clients_img12.jpg" alt=""></li>
            <li><img src="/images/clients_img09.jpg" alt=""></li>
            <li><img src="/images/clients_img16.jpg" alt=""></li>
            <li><img src="/images/clients_img08.jpg" alt=""></li>
          </ul>
        </div>
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

  .banner{
    width: 100%;
    height: 550px;
    .el-carousel{
      width: 100%;
    }
    .el-carousel__item{
      width: 100%;
      height: 550px;
      img{
        height: 550px;
        width: 100%;
      }
    }
  }
  .compa-introduce{
    width: 100%;
    background: url('/images/xieWBg.jpg');
    .ci-content{
      width: 1200px;
      height: 300px;
      margin: 0 auto;
      padding: 56px 100px;
      b{font-size: 18px;display: block;font-size: bold;color: crimson;width: 100%;text-align: center;}
      span{
        width: 30px;
        height: 5px;
        background: #ccc;
        display: block;
        margin: 10px auto 36px auto;}
      p{text-align: center;font-size: 17px;line-height: 30px;}
    }
  }
  .compa-service{
    width: 100%;
    height: 790px;
    min-width: 1100px;
    .cs-list{
      padding-top: 60px;
      width: 100%;
      height: 290px;
      background-color: #f60;
      h1{height: 40px;
        color: #fff;
        text-align: center;
        font-size: 30px;}
      .cs-list-wrap{
        width: 1200px;
        margin: 24px auto;
        display: flex;
        justify-content: space-around;
        align-items: center;

        .cs-list-item{
          height: 110px;
          width: 350px;
          i{
            float: left;
            width: 94px;
            height: 94px;
            margin-top: 8px;
            background: url('/images/services_icon.png') no-repeat center;
          }
          .cs-list-item-desc{
            width: 200px;
            height: 110px;
            float: left;
            span{
              display: block;
              width: 170px;
              color:#fff;
              height: 30px;
              font-size: 24px;
              font-weight: lighter;
              float: left;
              margin: 28px 50px 0 0;
              border-bottom: 1px solid #fff;}
            p{
              display: block;
              height: 27px;
              color: #fff;
              line-height: 27px;
              font-weight: 400;
              font-size: 18px;
            }
          }
        }
        .cs-line{width: 5px;
          height: 28px;
          display: block;
          // float: left;
          margin: 10px 17px 0 20px;
          background: #ccc;}
      }
    }
    .cs-detail{
      width: 100%;
      height: 500px;
      background: url('/images/servesbg.png') no-repeat center;
      display: flex;
      justify-content: space-around;

      .cs-detail-item{
        width: 290px;
        height: 420px;
        padding: 50px 2px 0 8px;
        margin-top: 36px;
        background: url('/images/servesListbg.png') no-repeat center;

        span{
          display: block;
          width: 100%;
          height: 85px;
          padding: 20px 10px;

          i{display: block;margin:16px 10px 0 10px;float: left;width: 20px;height: 20px;background: url('/images/servesListTb.png') no-repeat center;}
          div{width: 220px;float: left;
            p{font-size: 14px;line-height: 20px;}
            a{
              display: block;
              line-height: 30px;
              font-size: 16px;
              color: #222;
              text-decoration: none;
              font-weight: 700;}
            a:hover{color: #f60;}
          }
        }
      }
    }
  }
  .compa-case{
    width: 100%;
    .cc-content{
      width: 1200px;
      height: 440px;
      margin: 0 auto;
      // background: url('/images/xieWBg.jpg');
      .cc-title{
        width: 100%;
        height: 134px;
        background: url('/images/cgalbg.jpg') no-repeat center;
        padding-top: 40px;
        
        h1{font-size: 24px;color: #fff;line-height: 34px;text-align: center;
          i{width: 30px;
            height: 5px;
            background: #ccc;
            display: block;
            margin: 10px auto 0 auto;}
        }
      }
      .cc-service{
        padding: 20px 0;
        width: 100%;
        display: flex;
        justify-content: space-around;
        a{
          display: inline-block;
          width: 270px;
          height: 260px;
          text-decoration: none;
          padding: 5px;
          box-sizing: border-box;
          // background-color: #E63337;

          img{width: 260px;height: 200px;}
          p{color: #666;text-align: center;line-height: 50px;}
        }
      }
    }
  }
  .compa-why{
    width: 100%;
    height: 520px;
    margin: 0 auto;
    // background-color: lightblue;
    .cw-title{
      text-align: center;
      background-color: #f60;
      padding-top: 30px;
      height: 140px;
      i{width: 30px;
        height: 5px;
        background: #ccc;
        display: block;
        margin: 10px auto 0 auto};
      h1{color: #fff;font-size: 24px;}
      p{font-size: 14px;color: #ddd;padding-top: 6px;}
    }
    .cw-desc{
      width: 1200px;
      margin: 0 auto;
      ul{
        width: 100%;
        padding: 0;
        display: flex;
        li{
          list-style-type: none;
          width: 25%;
          height: 376px;
          background-color: #fff;
          text-align: center;
          padding: 44px 26px;

          img{width: 100px;height:100px;}
          h3{line-height: 30px; font-size: 18px;font-weight: bold;margin: 20px 0 0 0;}
          i{width: 75px;height: 4px;background: #E63337;display: block;margin:8px auto 20px auto;}
          h6{color: #E63337;line-height: 25px;font-weight: bold;font-size: 14px;margin: 10px 0;}
          p{line-height: 17px;font-size: 12px;}
        }
      }
    }
  }
  .compa-strength{
    height: 436px;
    min-width: 1234px;
    width: 100%;
    background: url('/images/sljzbg.jpg') no-repeat center top;
    .cs-content{
      width: 1200px;
      height: 436px;
      margin: 0 auto;
      position: relative;
      // background-color: red;
      .cs-item{
        width: 194px;
        height: 112px;
        // background-color:rgb(231, 176, 176);
        box-sizing: border-box;
        padding: 20px 18px;
        position: absolute;
        span{font-size: 15px;color: #222;}
        p{font-size: 12px;color: #333;padding-top: 8px;}
      }
      .cs-item-1{
        left: 100px;
        top: 110px;
      }
      .cs-item-2{
        width: 246px;
        left: 262px;
        top: 275px;
      }
      .cs-item-3{
        left: 483px;
        top: 104px;
      }
      .cs-item-4{
        width: 223px;
        left: 662px;
        top: 273px;
      }
      .cs-item-5{
        width: 232px;
        left: 866px;
        top: 105px;
      }
    }
  }
  .compa-friends{
    width: 1200px;
    margin: 0 auto;
    padding-top: 20px;
    .cw-title{
      text-align: center;
      background-color: #f60;
      padding-top: 30px;

      height: 100px;
      i{width: 30px;
        height: 5px;
        background: #ccc;
        display: block;
        margin: 10px auto 0 auto};
      h1{color: #fff;font-size: 24px;}
      p{font-size: 14px;color: #ddd;padding-top: 6px;}
    }
    .cf-list{
      ul{
        width: 1051px;
        height: 180px;
        margin: 40px auto;
        padding: 0;
        border-top: 1px solid #ccc;
        border-left: 1px solid #ccc;
        li{
          border-right: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          list-style-type: none;
          float: left;
          padding: 2px;
          box-sizing: border-box;
          margin: 0;
          height: 90px;
          width: 210px;
          img{width: 206px;height: 86px;}
        }
      }
    }
  }
  .compa-contact{
    width: 100%;
    height: 140px;
    background-color: #f60;
    margin: 20px auto;
    .cc-content{
      width: 1200px;
      margin: 0 auto;
      height: 140px;
      p{
        color: #fff;
        font-size: 20px;
        line-height: 140px;
        height: 140px;
        padding-left: 60px;
        span{
          font-size: 36px;
        }
        a{
          display: inline-block;
          width: 152px;
          text-decoration: none;
          height: 48px;
          border: 1px solid #fff;
          border-radius: 4px;
          line-height: 48px;
          text-align: center;
          color: #fff;
          margin-left: 280px;
        }
        a:hover{background-color: #fff;color: #f60;}
      }
    }
  }
  .compa-step{
    width: 1200px;
    height: 360px;
    margin: 0 auto;
    padding: 20px 0 0 0;
    .cs-title{
      text-align: center;
      b{font-size: 25px;color: #f60;}
      p{font-size: 14px;line-height: 40px;color: rgb(194, 192, 192);}
    }
    .cs-content{
      width: 100%;
      padding: 0 160px;
      margin-top: 30px;
      display: flex;
      justify-content: space-around;
      .cs-item{
        width: 140px;
        height:200px;
        padding: 5px;
        img{
          width: 130px;
          margin: 0 auto;
        }
        p{text-align: center;font-size: 18px;color: rgb(85, 83, 83);line-height: 60px;}
      }
      .cs-arrow-item{
        width: 40px;
        height:200px;
        padding-top: 63px;
      }
    }
  }
}
</style>
