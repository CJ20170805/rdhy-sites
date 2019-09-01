<template>
  <div id="wrap">
    <div class="detail">
      <div class="img">
        <img class="main-img" :src="mainImg" alt="">
        <ul>
          <li>
            <img ref="firstImg" @click="checkImg($event)" src="~/assets/images/classified_a.png" alt="">
          </li>
        </ul>
      </div>
      <div class="text">
        <h2>涉密系统集成资质</h2>
        <h5>
         国家保密局涉密信息系统安全保密测评中心和是由国家保密局决定，报中央领导同志批准并经 中央机构编制委员会办公室批复成立的，并已通过中国实验室国家认可委员会的实验室认可 (No.L2511)和检查机构认可(No.I0059)。<br>
        </h5>
        <p style="font-size: 18px;font-weight: bold;">服务热线： <span style="color: #28bbea;font-size: 30px;"> 13488866647</span></p>
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
          <span @click="changeTab('1')" :class="tabCurrent == '1'? 'tab-act': ''">认定介绍</span>
          <span @click="changeTab('2')" :class="tabCurrent == '2'? 'tab-act': ''">认定作用</span>
          <span @click="changeTab('3')" :class="tabCurrent == '3'? 'tab-act': ''">认定条件</span>
          <!-- <span @click="changeTab('4')" :class="tabCurrent == '4'? 'tab-act': ''">政策依据</span> -->
          <div class="phone">
            <p> <i></i>全国咨询热线：<span>010-68207631</span></p>
          </div>
        </div>
        <div class="tab-content">
          <div class="page">
            <!-- <img src="~/assets/images/desc_001.png" style="width:100%" alt=""> -->
            <p class="tit" id="introduce">【涉密资质是什么】</p>
            <p class="text">
             国家保密局涉密信息系统安全保密测评中心和是由国家保密局决定，报中央领导同志批准并经 中央机构编制委员会办公室批复成立的，并已通过中国实验室国家认可委员会的实验室认可 (No.L2511)和检查机构认可(No.I0059)。<br>

国家保密局涉密认证包括涉密信息系统产品认证和涉及国家秘密的计算机信息系统集成认证：<br>
 
1、涉密信息系统产品检测证书（涉密信息系统产品认证）<br>
为保证在技术上具有先进性、权威性和科学性，国家保密局成立了专家委员会，为两个中心提供技术咨询和指导。两个中心依据国家保密标准和规范，对用于涉密信息系统的安全保密产品进行检测，通过检测的产品经国家保密局审核批准后，颁发《涉密信息系统产品检测证书》并列入国家保密局批准的在涉密信息系统中使用的产品目录。国家保密局涉密信息系统安全保密测评中心的业务范围还包括依据有关国家保密标准对涉密信息系统进行安全保密测评。<br>
 
2、涉密资质企业认证（涉密计算机信息系统集成认证）<br>
①涉密系统集成资质分为甲级、乙级和单项三种资质。<br>
②甲级资质单位可在全国范围内从事涉密系统集成业务。<br>
③乙级资质单位仅限在所批准的省、自治区、直辖市所辖行政区域内从事涉密系统集成业务。<br>
④单项资质单位可在全国范围内开展业务，但仅限承接所批准的涉密系统集成单项业务，如：软件开发综合布线、系统服务、系统咨询、屏蔽室建设、风险评估、工程监理、数据恢复等。


            </p>

            <p class="tit" id="flow">【做涉密资质认证的好处】</p>
            <img src="~/assets/images/soft-lc.png" style="margin-bottom:20px;" alt="">

            <p class="tit" id="material">认证作用</p>
            <p class="text">
           
           1、计算机信息系统集成资质的管理比以往的资质更加规范和市场化，系统集成企业自身实力更易于在市场上展示，提高在社会的知名度，增加顾客的信任感，从而减少系统集成企业为了向社会和建设单位展示和证实自身能力而进行宣传、广告、现场参观、示范等环节，降低一些不必要的沟通成本；<br>
2、有利于提高系统集成企业参与市场竞争的能力；<br>
3、有利于系统集成企业按照等级标准，加强自身建设，不断提高企业的经营、技术和管理能力；<br>
 
4、有利于系统集成企业享受国务院18号文的优惠政策。<br>


            <!-- <span class="red-font">在线咨询</span>或与我们联系：<span class="red-font">010-68207631</span> -->
            </p>
            <p class="tit" id="question">【做涉密资质认证的条件】</p>
            <p class="text">
           
           申请条件/资格：<br>
1、在中华人民共和国境内注册成立（港澳台地区除外）；<br>
2、由中国公民投资、中国法人投资或国家投资的企事业单位；<br>
3、具有法人资格三年（含）以上，无违法记录；<br>
4、工作人员仅限于中华人民共和国境内的中国公民；<br>
5、具有胜任涉密系统集成工作的专业技术人员和管理人员；<br>
6、具备符合国家保密局规定的安全保密措施和硬件环境。<br>
符合以上基本条件的企事业单位方可提出申请。<br>



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

