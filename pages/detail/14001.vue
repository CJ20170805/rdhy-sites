<template>
  <div id="wrap">
    <div class="detail">
      <div class="img">
        <img class="main-img" :src="mainImg" alt="">
        <ul>
          <li>
            <img ref="firstImg" @click="checkImg($event)" src="~/assets/images/14001_a.png" alt="">
          </li>
           <li>
            <img @click="checkImg($event)" src="~/assets/images/14001_b.png" alt="">
          </li>
        </ul>
      </div>
      <div class="text">
        <h2>ISO14001：2004 环境管理体系认证</h2>
        <h5>
            ISO 14001标准的特性使之适用于任何类型与规模的组织，并适用于各种地理、文化和社会环境，是一个真正的通用标准，在全球范围内被广泛应用。该标准提供了一个框架，引导组织按照PDCA（策划、实施、检查、改进）的模式建立环境管理的自我约束机制，从最高领导到每个职工都以主动、自觉的精神处理好自身发展与环境保护的关系，响应变化的环境条件，不断改善环境绩效，进行有效的污染预防，最终实现组织的良性发展。 
       </h5>
        <div class="option">
          <div class="item">
           <a href="http://wpa.qq.com/msgrd?v=3&uin=1543925232&site=qq&menu=yes">在线咨询</a>
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
           
          随着法律法规的日趋严格，以及因污染、资源的低效使用、废物管理不当、气候变化、生态系统退化、生物多样性的减少等给环境造成的压力越来越大，社会对可持续发展、透明度以及问责制的期望值已发生了变化。这使得各组织力图通过实施环境管理体系，采用一种系统的方法来进行环境管理，以期为“环境支柱”的可持续性做出贡献，ISO14001标准就是在这种背景下产生的。<br>
ISO 14001标准的特性使之适用于任何类型与规模的组织，并适用于各种地理、文化和社会环境，是一个真正的通用标准，在全球范围内被广泛应用。该标准提供了一个框架，引导组织按照PDCA（策划、实施、检查、改进）的模式建立环境管理的自我约束机制，从最高领导到每个职工都以主动、自觉的精神处理好自身发展与环境保护的关系，响应变化的环境条件，不断改善环境绩效，进行有效的污染预防，最终实现组织的良性发展。
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

            <span class="red-font">在线咨询</span>  或与我们联系：<span class="red-font">010-68207631</span>
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
      title: 'ISO9001质量管理体系认证',
      meta: [
        { hid: 'nationCompanyPage', name: 'nationCompanyPage', content: 'ISO9001质量管理体系认证' }
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

