<template>
  <div id="wrap">
    <div class="detail">
      <div class="img">
        <img class="main-img" :src="mainImg" alt="">
        <ul>
          <li>
            <img ref="firstImg" @click="checkImg($event)" src="~/assets/images/nationCompany.jpg" alt="">
          </li>
        </ul>
      </div>
      <div class="text">
        <h2>国家高新技术企业认定</h2>
        <h5>
          高新技术企业认定工作是从上世纪90年代初开始的。为了建立我国的高新技术产业，促进高新技术企业快速发展。<br>
              1991<br>
              国务院发布《国家高新技术产业开发区高新技术企业认定条件和办法（国发【1991】12号）》，授权原国家科委组织开展国家高新技术产业开发区内高新技术企业认定工作，并配套制定了财政、税收、金融、贸易等一系列优惠政策。<br>
              2008<br>
              十七大会议之后，为配合落实《企业所得税法》，科技部会同财政部、国家税务总局共同制定新的《高新技术企业认定管理办法》及《高新技术企业认定管理工作指引》（国科发火〔2008〕172号）。<br>
        </h5>
        <div class="desc" v-if="false">
           <p>
             <span>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
             <span class="price">面议</span>
             <span class="price-desc">价格视企业所在地域、人数而定，具体请详询认证顾问</span>
           </p>
           <p>
             <span>承&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;诺</span>
              <i class="c1"></i><span>权威机构可查</span>
              <i class="c2"></i><span>权威机构可查</span>
              <i class="c3"></i><span>权威机构可查</span>
              <i class="c4"></i><span>权威机构可查</span>
           </p>
           <div class="count">
             <h6>累计出证</h6>
             <h6>500+</h6>
           </div>
        </div>
        <div class="option" >
          <div class="item">
           <a href="http://wpa.qq.com/msgrd?v=3&uin=1543925232&site=qq&menu=yes" target="_blank">在线咨询</a>
            <!-- <a href="#">QQ咨询</a> -->
          </div>
        </div>
      </div>
    </div>
    <div class="main-desc">
      <div class="recommend">
        <div class="tit">
          您可能需要的服务
        </div>
        <side-bar></side-bar>
      </div>
      <div class="tab">
        <div class="tab-menu">
          <span @click="changeTab('1')" :class="tabCurrent == '1'? 'tab-act': ''">服务介绍</span>
          <span @click="changeTab('2')" :class="tabCurrent == '2'? 'tab-act': ''">申办流程</span>
          <span @click="changeTab('3')" :class="tabCurrent == '3'? 'tab-act': ''">认定指标</span>
          <!-- <span @click="changeTab('4')" :class="tabCurrent == '4'? 'tab-act': ''">办理流程&常见问题</span> -->
          <div class="phone">
            <p> <i></i>全国咨询热线：<span>010-68207631</span></p>
          </div>
        </div>
        <div class="tab-content">
          <div class="page">
            <!-- <img src="~/assets/images/desc_001.png" style="width:100%" alt=""> -->
            <p class="tit" id="introduce">国家高新技术企业认定</p>
            <p class="text">
              高新技术企业认定工作是从上世纪90年代初开始的。为了建立我国的高新技术产业，促进高新技术企业快速发展。<br>
              1991<br>
              国务院发布《国家高新技术产业开发区高新技术企业认定条件和办法（国发【1991】12号）》，授权原国家科委组织开展国家高新技术产业开发区内高新技术企业认定工作，并配套制定了财政、税收、金融、贸易等一系列优惠政策。<br>
              1999<br>
              中共中央、国务院召开科技大会之后，根据新的形势要求，再次修订了国家高新区内高新技术企业认定标准（国科发火字【2000】324号）。<br>
              2008<br>
              十七大会议之后，为配合落实《企业所得税法》，科技部会同财政部、国家税务总局共同制定新的《高新技术企业认定管理办法》及《高新技术企业认定管理工作指引》（国科发火〔2008〕172号）。<br>
              2016<br>
              再次修订《高新技术企业认定管理办法》及《高新技术企业认定管理工作指引》（国科发火〔2016〕32号）。

            </p>

            <p class="tit" id="flow">申办流程</p>
            <img src="~/assets/images/inner-02.png" style="margin-bottom:20px;" alt="">

            <p class="tit" id="material">认定指标</p>
            <p class="text">
             <span class="tit-2">基本指标</span><br>
          产品（服务）属于《国家重点支持的高新技术领域》规定的范围
参与研究开发活动的科技人员所占比例（10%）
近三个会计年度的研发费用总额占销售收入总额的比例（5%/4%/3%）
高新技术产品（服务）收入占企业当年总收入的比例（60%）
            <br><span class="tit-2">具体评价指标</span><br>
            核心技术拥有自主知识产权（30分）
科技成果转化能力（30分）
研究开发的组织管理水平（20分）
净资产额与销售收入额成长性指标（20分）

            <br><span class="tit-2">需提交材料</span><br>
           《高新技术企业认定申请书》<br>
《营业执照》等注册登记证件复印件<br>
企业近三个会计年度研究开发费用、近一个会计年度高新技术产品（服务）收入专项审计报告<br>
企业近三个会计年度的审计报告<br>
知识产权相关资料、科研项目立项证明、科技成果转化、研究开发组织管理等相关资料<br>
企业高新技术产品（服务）的关键技术和技术指标的具体说明<br>
企业职工和科技人员情况说明材料<br>
近三个会计年度企业所得税纳税申报表（包括主表及附表）<br>

             <br><span class="tit-2">认定后享有的优惠政策</span><br>
             企业所得税税率自当年开始可减至15% 的税率。<br>
技术开发费比上年实际增长10% 以上可再按技术开发费实际发生额的50% 抵扣当年应纳税所得额。<br>
北京市高新技术企业及项目所需的外省市人才给予《工作居住证》。<br>
进出口货物可提前报关并由海关监管现场直接验放，缩短货物进出口通关时间。<br>


            <span class="red-font">在线咨询</span>或与我们联系：<span class="red-font">010-68207631</span>
            </p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import sideBar from '../../components/sideBar'
export default {
  data () {
    return {
      check01: 1,
      check02: 1,
      check03: 1,
      tabCurrent: 1,
      mainImg: null
    }
  },
  components: {
    sideBar
  },
  head () {
    return {
      title: '国家高新技术企业认定',
      meta: [
        { hid: 'nationCompanyPage', name: 'nationCompanyPage', content: '国家高新技术企业认定' }
      ]
    }
  },
  mounted () {
    //console.log(this.$refs.firstImg.src)
    this.mainImg = this.$refs.firstImg.src;
    console.log(this.$root.check01);
  },
  methods: {
    checkImg (e) {
      let url = e.srcElement.currentSrc;
      console.log(url);
      this.mainImg = url;
    },
    clickTab (type,index) {
      switch (type) {
        case '01':
          this.check01 = index;
          break;
        case '02':
          this.check02 = index;
          break;
        case '03':
          this.check03 = index;
          break;
        default:
          break;
      }
      //console.log(type,index,`check${type}`);
    },
    changeTab (index) {
      console.log(index);
      this.tabCurrent = index;
      // console.log('top', document.querySelector('#question'));
      // console.log(this.$refs.question);
      // document.querySelector('#question').scrollTop = 80;
       // this.$refs.question.scrollIntoView();
        // document.querySelector('#introduce').scrollIntoView();
       switch (index) {
         case '1':
          document.querySelector('#introduce').scrollIntoView({behavior: "smooth"});
           break;
         case '2':
          document.querySelector('#flow').scrollIntoView({behavior: "smooth"});
           break;
         case '3':
           document.querySelector('#material').scrollIntoView({behavior: "smooth"});
           break;
         case '4':
          document.querySelector('#question').scrollIntoView({behavior: "smooth"});
           break;
         default:
           break;
       }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="less" scoped>

@common_red :rgb(235, 60, 60);

#wrap{
  width: 1200px;
  margin: 0 auto;
  min-height: 600px;
  .detail{
    width: 100%;
    height: 570px;
    display: flex;
    justify-content: space-between;
    // background-color: lightblue;
    box-sizing: border-box;
    padding-top: 36px;
   .img{
     width: 480px;
     height: 570px;
     .main-img{
       width: 100%;
       height: 380px;
     }
     ul{
       width: 100%;
       height: 70px;
       padding: 0;
       margin-top: 10px;
       li{
         cursor: pointer;
         border: 1px solid @common_red;
         list-style-type: none;
         display: inline-block;
         height: 72px;
         padding: 0;
         img{
           height: 70px;
           width: 100px;
         }
       }
     }
   }
   .text{
     width: 688px;
     height: 570px;
     margin-left: 30px;
     padding-right: 25px;
     padding-top: 20px;
     .count{
       width: 60px;
       height: 30px;
       border-left: 1px solid #ddd;
       position: absolute;
       right: 0;
       top: 0;
       box-sizing: content-box;
       padding:6px 2px 6px 20px;
       h6{font-size: 12px;}
       h6:first-child{
         color: #999;
       }
       h6:last-child{
         color: @common_red;
       }
     }
     h5{
      font-size: 15px;
      font-weight: normal;
      color: #d20514;
      padding: 22px 0;
      margin: 24px 0 6px 0;
      line-height: 24px;
      border-top: 1px dashed #ececec;
      border-bottom: 1px dashed #ececec;
     }
     .desc{
       position: relative;
       width: 100%;
       height: 126px;
       background-color: #fbfbfb;
       box-sizing: border-box;
       padding: 10px;
       p{
          height: 44px;
          line-height: 40px;
          font-size: 14px;
          color: #999;
          margin: 5px 0;
          .price{
              font-size: 24px;
              vertical-align: -2px;
              color: #d20514;
              margin: 0 12px;
          }
          .price-desc::before{
            content: '';
            display: inline-block;
            // width: 12px;
            // height: 12px;
            width: 0;
            height: 0;
            border-width: 6px;
            border-style: solid;
            border-color: #f3f3f3 #f3f3f3 #f3f3f3 #999;
            background-color: #999;
          }
          i{
            display: inline-block;
            height: 17px;
            width: 17px;
            vertical-align: -3px;
            margin-right: 2px;
          }
          .c1{
            background: url('~assets/images/B_3.png') no-repeat center;
            margin-left: 14px;
          }
          .c2{
            background: url('~assets/images/B_2.png') no-repeat center;
          }
          .c3{
            background: url('~assets/images/B_1.png') no-repeat center;
          }
          .c4{
            background: url('~assets/images/B_4.png') no-repeat center;
          }
       }
     }
     .option{
       width: 100%;
       margin-top: 36px;
       .item{
         width: 100%;
         display: flex;
         margin-top: 10px;
         a{
          width: 190px;
          text-decoration: none;
          line-height: 44px;
          height: 44px;
          border-radius: 4px;
          //margin-left: 88px;
          cursor: pointer;
          // padding-left: 50px;
          margin-right: 5px;
          text-align: center;
          font-size: 18px;
          background: @common_red;
          color: #fff;
          border: 1px solid @common_red;
         }
         i{
           color:#999;
           font-style: normal;
           font-size: 14px;
           margin-right: 28px;
           padding-top:8px;
           width: 60px;
         }
         .o-i{
           width: 520px;
           span{
              display: inline-block;
              height: 35px;
              line-height: 35px;
              border: 1px solid #e0e0e0;
              padding: 0 10px;
              font-size: 14px;
              margin-bottom: 8px;
              cursor: pointer;
            }
           .checked{
             border: 2px solid #d20514;
             color: #d20514;
             background: url('~assets/images/danxuan_bg.png') no-repeat center;
             background-position-x: right;
             background-position-y: 16px;
           } 
         }
       }
     }
   }
  }
  .main-desc{
    width: 100%;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    .recommend{
      width: 220px;
      // min-height: 500px;
      box-shadow: 0 0 10px rgba(251, 94,36,.3);
      // background-color: #999;
      .el-submenu__title{
        // i{color:red;}
        // span{color:Red;}
      }
      .el-submenu__title:hover{
        i{color:@common_red;}
        span{color:@common_red;}
      }
      .el-menu{
        border: solid 1px #e6e6e6;
      }
      .el-menu-item.is-active{
        color: #ff4400;
      }
      .tit{
        height: 48px;
        width: 100%;
        line-height: 48px;
        border-bottom: 1px solid rgb(253, 93, 93);
        background: #fef5f2;
        padding-left: 24px;
        font-size: 15px;
        color: #3f3f3f;
      }
      
    }
    .tab{
      width: 960px;
      // min-height: 500px;
      //background-color: #e0e0e0;
      .tab-menu{
        height: 48px;
        width: 100%;
        line-height: 48px;
        border-bottom: 1px solid rgb(253, 93, 93);
        background: #fef5f2;
        .phone{
          float: right;
          p{
            font-size: 15px;
            font-weight: bold;
            i{
              display: inline-block;
              width: 22px;
              height: 22px;
              background: url('~assets/images/phone.png') no-repeat center;
              background-size: cover;
              vertical-align: -4px;
              margin-right: 4px;
            }
            span{
              font-size: 17px;
              color: #d20514;
            }
          }
        }
        span{
          cursor: pointer;
          font-size: 15px;
          padding: 0 14px;
          line-height: 42px;
          display: inline-block;
        }
        .tab-act{
          color: @common_red !important;
          cursor: pointer;
          border-bottom: 3px solid #ff4400;
          background: #fff;
        }
      }
      .tab-content{
        position: relative;
        .page{
          box-shadow: 0 0 10px rgba(251, 94,36,.3);
          width: 100%;
          min-height: 230px;
          padding: 8px 0;
          // position: absolute;
          .tit{
            color: @common_red;
            line-height: 44px;
            padding-left: 12px;
          }
          .text{
            padding: 4px 16px;
            line-height: 26px;
            font-size: 14px;
            color: rgb(109, 109, 109);
             .red-font{
               color: rgb(235, 60, 60);
               font-weight: bold;
             }
            .tit-2{
              color: #646464;
              font-weight: bold;
              line-height: 36px;
            }
          }
        }
      }
    }
  }
}
</style>

