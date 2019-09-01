<template>
  <div id="wrap">
    <div class="detail">
      <div class="img">
        <img class="main-img" :src="mainImg" alt="">
        <ul>
          <li>
            <img ref="firstImg" @click="checkImg($event)" src="~/assets/images/zgc.jpg" alt="">
          </li>
        </ul>
      </div>
      <div class="text">
        <h2>中关村高新技术企业认定</h2>
        <h5>
          注册在中关村科技园区以及中关村管委会和有关区县政府共建的高新技术产业基地内，符合条件的企业可申请获得中关村高新技术企业证书，纳入中关村高新技术企业统计范围。<br><br>
          根据《高新技术企业认定管理办法》规定，高新技术企业是指在《国家重点支持的高新技术领域》内，持续进行研究开发与技术成果转化，形成企业核心自主知识产权，并以此为基础开展经营活动，在中国境内（不包括港、澳、台地区）注册一年以上的居民企业<br>
        </h5>
        <div class="option">
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
          <span @click="changeTab('1')" :class="tabCurrent == '1'? 'tab-act': ''">认定条件</span>
          <!-- <span @click="changeTab('2')" :class="tabCurrent == '2'? 'tab-act': ''">申办流程</span> -->
          <span @click="changeTab('3')" :class="tabCurrent == '3'? 'tab-act': ''">优惠政策</span>
          <!-- <span @click="changeTab('4')" :class="tabCurrent == '4'? 'tab-act': ''">办理流程&常见问题</span> -->
          <div class="phone">
            <p> <i></i>全国资讯热线：<span>010-68207631</span></p>
          </div>
        </div>
        <div class="tab-content">
          <div class="page">
            <!-- <img src="~/assets/images/desc_001.png" style="width:100%" alt=""> -->
            <p class="tit" id="introduce">认定条件</p>
            <p class="text">
              2008年4月1日后注册，产品属于《国家重点支持的高新技术领域》规定的范围，并达到下列标准的企业：<br>
              人员要求:<br>
              大专以上学历科技人员占职工总数的30％以上；<br>
              从事高新技术产品研究开发的科技人员应占职工总数10%以上；<br>
              从事高新技术产品生产或服务为主的劳动密集型高新技术企业，大专以上学历的科技人员应占职工总数的20%以上。<br>
              研发投入和高新技术产品（服务）收入<br>
              研发费用总额占销售收入总额的比例要求，企业最近一年销售收入小于5000万元的企业，比例不低于5%；<br>
              最近一年销售收入在5000万元至2亿元的企业，比例不低于4%；<br>
              最近一年销售收入在2亿元以上的企业，比例不低于3%；<br>
              企业在中国境内发生的研究开发费用总额占全部研究开发费用总额的比例不低于60%；<br>
              企业注册成立时间不足三年的，按实际经营年限计算；<br>
              高新技术企业的技术性收入与高新技术产品销售收入的总和应占本企业当年总收入的60%以上；<br>
              新办企业在高新技术领域的投入占总投入60％以上。<br>


            </p>

            <p class="tit" id="material">中关村高新技术企业享受的优惠政策</p>
            <p class="text">
           
            享受知识产权申请补贴优惠政策；<br>
            可享受知识产权质押贷款和贷款贴息优惠政策；<br>
            可享受中关村国家高新园区试点优惠政策等。<br>
             <span class="red-font">在线咨询</span> 或与我们联系：<span class="red-font">010-68207631</span>
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
  head () {
    return {
      title: '中关村高新技术企业认定',
      meta: [
        { hid: 'zgcCompanyPage', name: 'zgcCompanyPage', content: '中关村高新技术企业的认定' }
      ]
    }
  },
  components: {
    sideBar
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
     padding-top:20px;
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

