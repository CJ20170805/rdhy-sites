<template>
  <div id="wrap">
    <div class="detail">
      <div class="img">
        <img class="main-img" :src="mainImg" alt="">
        <ul>
          <li>
            <img ref="firstImg" @click="checkImg($event)" src="~/assets/images/aaa_a.jpg" alt="">
          </li>
        </ul>
      </div>
      <div class="text">
        <h2>AAA信用评级</h2>
        <h5>
         为建立和完善中小企业信用体系，提高中小企业的诚信意识和风险防范能力，促进守信用的中小企业健康快速发展，商务部信用工作办公室和国务院国资委行业协会联系办公室联合下发文件《关于公布第四批行业信用评价参与名单的通知》并授权中国中小企业协会在全国范围内开展中小企业信用等级评价工作。<br>
        </h5>
        <p style="font-size: 18px;font-weight: bold;">服务热线： <span style="color: #28bbea;font-size: 30px;"> 13488866647</span></p>
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
          <span @click="changeTab('1')" :class="tabCurrent == '1'? 'tab-act': ''">认定介绍</span>
          <span @click="changeTab('2')" :class="tabCurrent == '2'? 'tab-act': ''">认定作用</span>
          <span @click="changeTab('3')" :class="tabCurrent == '3'? 'tab-act': ''">认定条件</span>
          <span @click="changeTab('4')" :class="tabCurrent == '4'? 'tab-act': ''">认定流程</span>
          <div class="phone">
            <p> <i></i>全国咨询热线：<span>010-68207631</span></p>
          </div>
        </div>
        <div class="tab-content">
          <div class="page">
            <!-- <img src="~/assets/images/desc_001.png" style="width:100%" alt=""> -->
            <p class="tit" id="introduce">【AAA信用评级认定概述】</p>
            <p class="text">
              
为建立和完善中小企业信用体系，提高中小企业的诚信意识和风险防范能力，促进守信用的中小企业健康快速发展，商务部信用工作办公室和国务院国资委行业协会联系办公室联合下发文件《关于公布第四批行业信用评价参与名单的通知》并授权中国中小企业协会在全国范围内开展中小企业信用等级评价工作。<br>
中国中小企业协会为此专项成立"中国中小企业协会信用管理中心"，对企业进行信用评级，由国家商务部和国务院国资委发放统一标准的企业信用等级评价编号、牌匾、证书。



            </p>

            <p class="tit" id="flow">【AAA信用评级市场前景 】</p>
            <!-- <img src="~/assets/images/soft-lc.png" style="margin-bottom:20px;" alt=""> -->

            <p class="tit">市场前景</p>
            <p class="text">
           
           2013年5月17日国家发改委、人民银行、中央编制办，正式发布了《关于在行政管理事项中使用信用记录和信用报告的若干意见的通知》。企业信用评价在国内刚刚起步，在商务部出台AAA信用企业评价之前，只有人民银行针对企业金融领域信用的评价和一些地方政府、行业协会、行业标杆发起的行业内的信用评价，如建筑行业内等，但都只针对某一个特定行业和领域。<br>
政府倡导和支持、行业蓝海、社会体系的不断完善与规范、企业素质的不断提升……企业信用的用途越来越多，对企业本身及上下游的影响也越来越大，诸多因素都决定了企业信用市场具有巨大的发展潜力。



            <!-- <span class="red-font">在线咨询</span>或与我们联系：<span class="red-font">010-68207631</span> -->
            </p>
            <p class="tit" id="question">【 AAA信用评级认定好处 】</p>
            <p class="text">
           
          一、提升企业资质，获得国家政府的认可，颁发商务部统一编号的牌匾和证书。<br>
二、是企业履约能力、投标信誉、综合实力与竞争力的体现，在市场活动中不断塑造企业的信用形象，帮助企业与客户快速建立互信，缩短贸易周期。<br>
三、银行融资贷款、申报政府项目、国家无偿资助时有一定加分；<br>
四、允许企业在企业的宣传手册，产品外包装、说明书、合格证等宣传载体上使用的国家商务部信用LOGO；<br>
五、企业获得AAA信用企业的信息在国家商务部主办的中国市场秩序网、中国反商业欺诈网（http://www.12312.gov.cn）上进行公示，企业和企业上下游客户随时可查询，企业资料在商务部信用办公室备案。<br>
六、企业获得AAA信用企业的信息在中国中小企业协会官网公示。<br>
七、在腾讯网、网易、中国人民网、和讯网、慧聪网五大媒体中对企业获得该评级的信息进行新闻宣传。<br>
八、获得商务部及百度联合认证，百度搜索获得AAA级信用企业公司名称，在公司名称后显示"V"形图案，鼠标放置到"V"形图案上，显示"该公司具有商务部信用办公室核准的AAA级行业企业信用评价资质。"<br>




         
            </p>

            <p class="tit" id="question">【 AAA信用评级申请条件  】</p>
            <p class="text">
           
           一.注册2年或以上，注册资本为10万元或以上的合法注册企业。<br>
二.企业单位无信用不良记录及违规违法行为记录。<br>
三.非医药行业外的所有行业企业单位（大型知名公司除外）
           
            </p>

            <p class="tit" id="material">【 AAA信用评级申报流程 】</p>
            <img src="~/assets/images/aaa_01.jpg" style="margin-bottom:20px;" alt="">
            <p class="text">
              一.填写申请表（电子档）<br>
说明：填写表名称为《企业信用等级评价申报书》，评审流程以电子档文件起开始。<br>
二.信管中心初审<br>
说明：信用管理中心对申报企业申报资格认定，及其信用初审公工作，初审时间为3-7个工作日。<br>
三.信用评价小组等级评定<br>
说明：由信用管理师（高级以上）和信用专家组成的企业等级评价小组，对企业等级评定。评审结果约5个工作日发布并安排牌证制作。<br>
四.铜牌证书颁发<br>
说明：信用等级评价含一牌一证，初审结果后7个工作日。<br>
（含：商务部等级铜牌、商务部信用等级证书）<br>
五.提交申报企业材料（纸质档）<br>
说明：见附件《企业提交书面资料说明》，需在1个月内提交到中心，不影响评级正常流程时间。<br>
六.网站公示<br>
企业信用评价结果后30天左右完成公示，公示网址如下：<br>
（1）商务部中国市场秩序网公示<br>
网址：http://www.12312.gov.cn<br>
（2）中国中小企业协会官网公示<br>
网址：http://www.ca-sme.org<br>

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

