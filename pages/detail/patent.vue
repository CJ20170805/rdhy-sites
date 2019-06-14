<template>
  <div id="wrap">
    <div class="detail">
      <div class="img">
        <img class="main-img" :src="mainImg" alt="">
        <ul>
          <li>
            <img ref="firstImg" @click="checkImg($event)" src="~/assets/images/patent_top2.jpg" alt="">
          </li>
        </ul>
      </div>
      <div class="text">
        <h2>专利、商标申请</h2>
        <h5>一项发明创造必须由申请人向政府主管部门提出专利申请，经中华人民共和国国家知识产权局依照法定程序审查批准后，才能取得专利权。</h5>
        <div class="desc">
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
        <div class="option">
          <div class="item">
            <i>价格</i>
            <div class="o-i">
              <span :class="[check01 === 1? 'checked' : '']" @click="clickTab('01',1)">￥600</span>
              <span :class="[check01 === 2? 'checked' : '']" @click="clickTab('01',2)">￥800</span>
              <span :class="[check01 === 3? 'checked' : '']" @click="clickTab('01',3)">￥1000</span>
              <span :class="[check01 === 4? 'checked' : '']" @click="clickTab('01',4)">￥1500</span>
              <span :class="[check01 === 5? 'checked' : '']" @click="clickTab('01',5)">￥2000</span>
              <span :class="[check01 === 6? 'checked' : '']" @click="clickTab('01',6)">￥2500</span>
              <span :class="[check01 === 7? 'checked' : '']" @click="clickTab('01',7)">￥3500</span>
              <span :class="[check01 === 8? 'checked' : '']" @click="clickTab('01',8)">￥4500</span>
              <span :class="[check01 === 9? 'checked' : '']" @click="clickTab('01',9)">￥5500</span>
              <span :class="[check01 === 10? 'checked' : '']" @click="clickTab('01',10)">￥10000</span>
              <span :class="[check01 === 11? 'checked' : '']" @click="clickTab('01',11)">￥20000</span>     
            </div>
          </div>
          <div class="item">
            <i>工作日</i>
            <div class="o-i">
              <span :class="[check01 === 1? 'checked' : '']" @click="clickTab('01',1)">31+</span>
              <span :class="[check01 === 2? 'checked' : '']" @click="clickTab('01',2)">26-30</span>
              <span :class="[check01 === 3? 'checked' : '']" @click="clickTab('01',3)">21-25</span>
              <span :class="[check01 === 4? 'checked' : '']" @click="clickTab('01',4)">16-20</span>
              <span :class="[check01 === 5? 'checked' : '']" @click="clickTab('01',5)">11-15</span>
              <span :class="[check01 === 6? 'checked' : '']" @click="clickTab('01',6)">6-10</span>
              <span :class="[check01 === 7? 'checked' : '']" @click="clickTab('01',7)">5</span>
              <span :class="[check01 === 8? 'checked' : '']" @click="clickTab('01',8)">4</span>
              <span :class="[check01 === 9? 'checked' : '']" @click="clickTab('01',9)">3</span>
              <span :class="[check01 === 10? 'checked' : '']" @click="clickTab('01',10)">2</span>
              <span :class="[check01 === 11? 'checked' : '']" @click="clickTab('01',11)">1</span>
            </div>
          </div>
          <div class="item">
            <a href="#">在线咨询</a>
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
          <span @click="changeTab('1')" :class="tabCurrent == '1'? 'tab-act': ''">申请流程</span>
          <span @click="changeTab('2')" :class="tabCurrent == '2'? 'tab-act': ''">审批程序</span>
          <span @click="changeTab('3')" :class="tabCurrent == '3'? 'tab-act': ''">商标保护</span>
           <!--  <span @click="changeTab('4')" :class="tabCurrent == '4'? 'tab-act': ''">政策依据</span> -->
          <div class="phone">
            <p> <i></i>全国资讯热线：<span>010-68207631</span></p>
          </div>
        </div>
        <div class="tab-content">
          <div class="page">
            <!-- <img src="~/assets/images/desc_001.png" style="width:100%" alt=""> -->
            <p class="text">
              <span class="tit-2">专利分类</span><br>
            发明创造目前包括三种类型，分别是：发明、实用新型和外观设计。在申请阶段，分别称之为发明专利申请、实用新型专利申请和外观设计专利申请。获得授权之后，分别称之为发明专利、实用新型专利和外观设计专利，此时，申请人就是相应专利的专利权人。
            </p>
            <!-- <p class="tit" id="introduce">认定机构</p>
            <p class="text">
             北京软件和信息服务行业协会承担软件企业评估的材料受理、材料审批、证书发放等工作。

            </p> -->

            <p class="tit" id="introduce">申请流程</p>
            <img src="~/assets/images/patent.png" style="margin-bottom:20px;" alt="">

            <p class="tit" id="flow">审批程序</p>
            <p class="text">
           
            根据财政部、国家税务总局《关于贯彻落实<中共中央国务院关于加强技术创新，发展高科技，实现产业化决定>有关税收问题的通知》规定，单位和个人从事技术转让、技术开发业务和与之相关的技术咨询、技术服务业务取得的收入，免征营业税。<br>

            </p>
            
            <p class="tit" id="material">商标保护</p>
            <p class="text">
           
            可根据商标的驰名程度，获得不同程度的跨类保护<br>
          可得到商标注册阶段和注册后发生商标侵权阶段的司法保护<br>
          增加品牌含金量，升值企业无形资产，扩大企业知名度，增强企业市场竞争力<br>
            <br>

            <span class="red-font">在线咨询</span>  （按钮）或与我们联系：<span class="red-font">010-68207631</span>
            </p>
            <!-- <p class="tit" id="question">政策依据</p>
            <p class="text">
           
           《国家税务总局关于发布〈企业所得税优惠政策事项办理办法〉的公告》（国税〔2015〕76号）<br>
            《关于进一步鼓励软件产业和集成电路产业发展企业所得税政策的通知》（财税〔2012〕27号）<br>


            <span class="red-font">在线咨询</span>  （按钮）或与我们联系：<span class="red-font">010-68207631</span>
            </p> -->
            
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
      title: '专利、商标申请',
      meta: [
        { hid: 'nationCompanyPage', name: 'nationCompanyPage', content: '专利、商标申请' }
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
    padding-top: 30px;
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
      padding: 12px 0;
      font-weight: normal;
      color: #d20514;
      margin: 10px 0;
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
       margin-top: 20px;
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
          margin-left: 88px;
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

