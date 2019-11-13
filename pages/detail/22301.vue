<template>
  <div id="wrap">
    <div class="detail">
      <div class="img">
        <img class="main-img" :src="mainImg" alt="">
        <ul>
          <li>
            <img ref="firstImg" @click="checkImg($event)" src="~/assets/images/22301_a.jpg" alt="">
          </li>
           <li>
            <img @click="checkImg($event)" src="~/assets/images/22301_b.jpg" alt="">
          </li>
        </ul>
      </div>
      <div class="text">
        <h2>ISO22301 业务连续性管理体系认证</h2>
        <h5>
          业务连续性管理（Business Continuity Management，简称BCM）是一项综合管理事务，经过不断的发展，而今已成为了社会组织（包括政府机关、企事业单位、社会团队、社区）公共安全建设的重要工作和考核内容。业务连续性管理系统的有效实施有助于构建更安全、更具弹性的社会环境。
       </h5>
        <div class="option">
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
          <span @click="changeTab('1')" :class="tabCurrent == '1'? 'tab-act': ''">认证简介</span>
          <!-- <span @click="changeTab('2')" :class="tabCurrent == '2'? 'tab-act': ''">发证机构</span>
          <span @click="changeTab('3')" :class="tabCurrent == '3'? 'tab-act': ''">认证周期</span>
          <span @click="changeTab('4')" :class="tabCurrent == '4'? 'tab-act': ''">认证流程</span> -->
          <div class="phone">
            <p> <i></i>全国咨询热线：<span>010-68207631</span></p>
          </div>
        </div>
        <div class="tab-content">
          <div class="page">
            <p class="tit" id="question">认证简介</p>
            <p class="text">
           
         业务连续性标准采用了PDCA模型来策划、建立、实施、运行、监视、评审保持和改进组织的业务连续性管理体系（BCMS）的有效性。适用于各种类型、规模和特性的组织或组织的一部分。标准的目的是为组织设计一个适合其自身需要且同时符合相关方要求的BCMS，而这些需求由法律、法规、标准、产品和服务、工作流程、组织的规模和结构以及相关方的要求等各方面构成。<br>
通过有效的运行业务连续性管理体系，并获得认证，可以帮助组织：<br>
a) 完善企业的日常经营管理, 预防潜在的威胁,增强企业应对灾难的能力：<br>
b) 保护人员的生命安全,使企业的业务中断和损失最小化；<br>
c) 最大程度地减小数据的丢失、收入的损失、客户的流失；<br>
d) 增强投资者、股东和消费者的信心；<br>
e) 维护企业的形象和信誉；<br>
f) 提高企业的信誉和竞争力；<br>
增强企业的合规性，持续完善管理措施及改善业务流程。<br>


<br>
 <span class="red-font">在线咨询</span> 或与我们联系：<span class="red-font">010-68207631</span>
            </p>
            <!-- <img src="~/assets/images/desc_001.png" style="width:100%" alt=""> -->
            <!-- <p class="tit" id="introduce">发证机构</p> -->
            <!-- <p class="text" >
              <span class="tit-2" id="introduce">发证机构：</span><br>
             国家认证认可委员会颁发证书的认证机构有资格进行体系认证。<br>
             <span class="tit-2" id="material">认证周期：</span><br>
             体系认证周期加急最快1个半月，证书三年有效，每年需要进行年检。年检费用是初次认证的1/3。<br>
             <span class="tit-2" id="flow">认证流程：</span><br>
              <img src="~/assets/images/9001_lc.png" style="margin-bottom:20px;width:80%" alt="">
            </p> -->

            <!-- <p class="text">
             体系认证周期加急最快1个半月，证书三年有效，每年需要进行年检。年检费用是初次认证的1/3。

            </p> -->

            <!-- <p class="tit" id="flow">申办流程</p>
            <img src="~/assets/images/soft-lc.png" style="margin-bottom:20px;" alt="">

            <p class="tit" id="material">政策优惠</p>
            <p class="text">
           
            享受财税〔2012〕27号文件规定的税收优惠政策的软件、集成电路企业，每年汇算清缴时应按照《国家税务总局关于发布〈企业所得税优惠政策事项办理办法〉的公告》规定向税务机关备案，同时提交《享受企业所得税优惠政策的软件和集成电路企业备案资料明细表》规定的备案资料。

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
      title: 'SO27001 信息安全管理体系认证',
      meta: [
        { hid: 'nationCompanyPage', name: 'nationCompanyPage', content: 'SO27001 信息安全管理体系认证' }
      ]
    }
  },
  mounted () {
    //console.log(this.$refs.firstImg.src)
    this.mainImg = this.$refs.firstImg.src;
    //console.log(this.$root.check01);
  },
  methods: {
    checkImg (e) {
      let url = e.srcElement.currentSrc;
      //console.log(url);
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
       width: 80%;
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
     margin-top: 20px;
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
      margin: 24px 0 36px 0;
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

