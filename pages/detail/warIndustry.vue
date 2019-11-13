<template>
  <div id="wrap">
    <div class="detail">
      <div class="img">
        <img class="main-img" :src="mainImg" alt="">
        <ul>
          <li>
            <img ref="firstImg" @click="checkImg($event)" src="~/assets/images/warIndustry_a.jpg" alt="">
          </li>
        </ul>
      </div>
      <div class="text">
        <h2>军工四证</h2>
        <h5>
        军民融合是国家战略，很多想民参军的企业想参与进来，国家装备发展部在2017年10月1日正式实施“两证合一”的工作，将原来的“军工四证”变为“军工三证”三证具体指：1、武器装备科研生产单位保密资质认证，简称：保密认证；2、武器装备科研生产许可证认证，简称：许可证认；3、装备承制单位资格名录认证，简称：名录认证。<br>
        </h5>
        <p style="font-size: 18px;font-weight: bold;">服务热线： <span style="color: #28bbea;font-size: 30px;"> 13488866647</span></p>
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
          <span @click="changeTab('1')" :class="tabCurrent == '1'? 'tab-act': ''">认定介绍</span>
          <span @click="changeTab('2')" :class="tabCurrent == '2'? 'tab-act': ''">认定流程</span>
          <!-- <span @click="changeTab('3')" :class="tabCurrent == '3'? 'tab-act': ''">认定条件</span>
          <span @click="changeTab('4')" :class="tabCurrent == '4'? 'tab-act': ''">认定流程</span> -->
          <div class="phone">
            <p> <i></i>全国咨询热线：<span>010-68207631</span></p>
          </div>
        </div>
        <div class="tab-content">
          <div class="page">
            <!-- <img src="~/assets/images/desc_001.png" style="width:100%" alt=""> -->
            <p class="tit" id="introduce">【“军工四证”变“军工三证”】</p>
            <p class="text">
              
军民融合是国家战略，很多想民参军的企业想参与进来，国家装备发展部在2017年10月1日正式实施“两证合一”的工作，将原来的“军工四证”变为“军工三证”三证具体指：<br>
 <br>
1、武器装备科研生产单位保密资质认证，简称：保密认证<br>
2、武器装备科研生产许可证认证，简称：许可证认<br>
3、装备承制单位资格名录认证，简称：名录认证<br>

            </p>

            <p class="tit" id="flow">【需要准备的资料】</p>
            <!-- <img src="~/assets/images/soft-lc.png" style="margin-bottom:20px;" alt=""> -->

           
            <p class="text">
           
          1、《密级建议表》<br>
        2、《武器装备科研生产许可证申请书》<br>
        3、企业法人营业执照或者事业单位法人证书<br>
        4、安全生产达标文件或者安全生产评价报告<br>
        5、保密资格证书<br>
        6、环保验收达标文件<br>
        7、消防达标文件<br>
        8、公司章程<br>
        9、财务审计报告<br>
        10、《装备承制单位资格审查申请表》<br>
        11、质量管理体系认证证书(复印件)<br>
        12、土地使用证、房屋产权证或租赁合同(复印件)<br>




            <!-- <span class="red-font">在线咨询</span>或与我们联系：<span class="red-font">010-68207631</span> -->
            </p>
            <p class="tit" id="question">【办理流程】</p>
            <p class="tit">
              一、办理武器装备科研生产单位保密资质认证是民参军的前提条件，包括以下流程：
            </p>
            <p class="text">
           
          1、单位部门开具 《密级建议表》<br>
2、向国家或省保密行政管理部门报送申请书和有关材料，提交书面审查，通过后迎接现场审查<br>
3、确定申请的密级，进行保密要害部门的建设<br>
4、国家做出是否审批的决定<br>
5、颁发《武器装备科研生产单位保密资格证书》<br>
         
            </p>
            <p class="tit">
              二、办理武器装备科研生产许可证认证，得到从事装备任务的法律许可，需要提交以下材料到有关部门：
            </p>
            <p class="text">
              1、《武器装备科研生产许可证申请书》<br>
2、企业法人营业执照或者事业单位法人证书<br>
3、安全生产达标文件或者安全生产评价报告<br>
4、保密资格证书<br>
5、环保验收达标文件<br>
6、消防达标文件<br>
7、公司章程<br>
8、财务审计报告<br>

            </p>

            <p class="tit">【其他注意事项】</p>
            <p class="text">
              1、申请第一类许可项目需要提交材料到国防科工委<br>
2、申请第二类许可项目需要提交材料到国防科技工业管理部门<br>
3、同时申请第一类、第二类许可项目需要提交材料到国防科工委<br>
 
            </p>
            <p class="tit">
              三、办理装备承制单位资格名录认证，有两类，A类，军队专用装备承制单位，B类，军选民用装备承制单位。需要提交以下材料，审查期3-6个月：
            </p>

            <p class="text">
              1、《装备承制单位资格审查申请表》<br>
2、保密资格证书(复印件)<br>
3、质量管理体系认证证书(复印件)<br>
4、企业营业执照或事业单位法人证书(复印件)<br>
5、土地使用证、房屋产权证或租赁合同(复印件)<br>
6、财务审计报告<br>
7、公司章程<br>
8、其它有关材料<br>
 
武器装备科研生产单位保密资格认证是武器装备科研生产的前提条件。军品生产并非总要拿齐“三证”，视企业具体军品任务类型而定<br>


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

