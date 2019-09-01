<template>
  <div id="wrap">
    <div class="detail">
      <div class="img">
        <img class="main-img" :src="mainImg" alt="">
        <ul>
          <li>
            <img ref="firstImg" @click="checkImg($event)" src="~/assets/images/20190409154954.png" alt="">
          </li>
        </ul>
      </div>
      <div class="text">
        <h2>软件著作权登记</h2>
        <h5>金牌服务团队，专家全程指导，客户100%好评</h5>
        <div class="desc">
           <p>
             <span>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</span>
             <span class="price">面议</span>
             <!-- <span class="price-desc">价格视企业所在地域、人数而定，具体请详询认证顾问</span> -->
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
             <h6>1000+</h6>
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
          <span @click="changeTab('1')" :class="tabCurrent == '1'? 'tab-act': ''">服务介绍</span>
          <span @click="changeTab('2')" :class="tabCurrent == '2'? 'tab-act': ''">申办流程</span>
          <span @click="changeTab('3')" :class="tabCurrent == '3'? 'tab-act': ''">申办材料</span>
          <span @click="changeTab('4')" :class="tabCurrent == '4'? 'tab-act': ''">办理流程&常见问题</span>
          <div class="phone">
            <p> <i></i>全国咨询热线：<span>010-68207631</span></p>
          </div>
        </div>
        <div class="tab-content">
          <div class="page">
            <!-- <img src="~/assets/images/desc_001.png" style="width:100%" alt=""> -->
            <p class="tit" id="introduce">计算机软件著作权</p>
            <p class="text">
              1991年6月4日
              国务院发布了《计算机软件保护条例》。该条例指出：计算机软件是指计算机程序及有关文档。受保护的软件必须由开发者独立开发，即必须具备原创性，同时，必须是已固定在某种有形物体上而非存在于开发者的头脑中。
              荣德海越为保护您的知识产权，我们为您提供计算机软件著作权办理，同时响应您的即时需求，提供24小时急速办理的快速通道。
            </p>

            <p class="tit" id="flow">申办流程</p>
            <img src="~/assets/images/inner-01.png" style="margin-bottom:20px;" alt="">

            <p class="tit" id="material">申办材料</p>
            <p class="text">
             <span class="tit-2">基本信息</span><br>
            计算机软件著作权申请表、申请者身份证明（法人提供营业执照副本；事业法人提供代码证书；其他组织提供当地民政机关或主管部门批文；自然人提供身份证复印件或其他证明复印件）。
            <br><span class="tit-2">软件相关</span><br>
            源程序，按前、后各连续30页，共60页，每页不少于50行，结束页除外。
            技术文档，用户手册、操作手册、设计说明书、使用说明书等任选一种，按前、后各连续30页，共60页。
            申请人可申请将源程序、文档或者样品进行封存，除申请人或者司法机关外,任何人不得启封。
            [注] 已办理软件著作权登记的,其著作权发生继承、受让、承受时，当事人应当出具软件著作权登记证书（复印件）,无须提交鉴别材料。
            <br><span class="tit-2">若以上内容不能满足你的需求</span><br>
            你可以选择
            <span class="red-font">在线咨询</span> 或与我们联系：<span class="red-font">010-68207631</span>
            </p>

            <p class="tit" id="question" ref="question">办理流程&常见问题</p>
            <p class="text">
              著作权加急办理常见问题 <br>
              <span class="tit-2"> 1．什么是计算机软件？</span><br>
              答：计算机软件是指计算机程序及其有关文档。计算机程序是指能实现一定功能的代码化指令序列，或者符号化语句序列。文档指用来描述程序的内容、组成、设计、功能规格、开发情况、测试结果及使用方法的文字资料和图表，如程序设计说明书、流程图、用户手册等。
              <br><span class="tit-2">2．软件著作权保护期限是多长？</span><br>
             
              答：自然人的软件著作权，保护期为自然人终生及其死亡后50年；软件是合作开发的，截止于最后死亡的自然人死亡后第50年的12月31日。法人或者其他组织的软件著作权，保护期为软件首次发表之后50年，但软件自开发完成之日起50年内未发表的，不再保护。

            
              <br><span class="tit-2">  3．哪些人可以成为软件著作权人？</span><br>
              答：独立开发完成软件的自然人、法人或其他组织以及通过合同约定、继承、受让或者承受软件著作权的自然人、法人或者其他组织都可以成为著作权人。

              
              <br><span class="tit-2">4．软件著作权可以保护软件的思想、算法和技术方案吗？</span><br>
              答：软件著作权保护的范围是程序及其技术文档的表达，即保护语句序列或指令序列的表达以及有关软件的文字说明表达，而不延及开发软件所用的思想、处理过程、操作方法或者数学概念等。

              
              <br><span class="tit-2">5．什么是软件开发者？</span><br>
              答：是指实际组织开发、直接进行开发，并对开发完成的软件承担责任的法人或者其他组织；或者依靠自己具有的条件独立完成软件开发，并对软件承担责任的自然人。

             
              <br><span class="tit-2"> 6．合作开发的软件著作权怎么归属？</span><br>
              答：由两个以上的自然人、法人或者其他组织合作开发的软件，其著作权的归属由合作开发者签订书面合同约定。

              
              <br><span class="tit-2">7．委托开发的软件著作权怎么归属？</span><br>
              答：接受他人委托开发的软件，其著作权的归属由委托人与受托人签订书面合同约定；无书面合同或者合同未作明确约定的，其著作权由受托人享有。

              
              <br><span class="tit-2">8．由国家机关下达任务的软件著作权怎么归属？</span><br>
              答：由国家机关下达任务开发的软件，著作权的归属与行使由项目任务书或者合同规定；项目任务书或者合同中未作明确规定的，软件著作权由接受任务的法人或者其他组织享有。

              
              <br><span class="tit-2">9．职务开发软件和非职务开发软件怎样界定？</span><br>
              答：自然人利用业余时间及个人的物质技术条件开发完成的，并且与本人的本职工作内容无直接联系的软件为非职务开发软件。
              自然人在单位任职期间针对本职工作中明确指定的开发目标所开发的软件，或者开发的软件是从事本职工作活动所预见的结果或者自然的结果，或者主要使用了法人或者其他组织的资金、专用设备、未公开的专门信息等物质技术条件所开发并由法人或者其他组织承担责任的软件，自然人的开发行为属于职务开发，软件为职务开发软件，该软件著作权由单位享有。

              
              <br><span class="tit-2">10．软件相似是不是就视为侵权？</span><br>
              答：软件开发者开发的软件，由于可供选用的表达方式有限而与已经存在的软件相似的，不构成对已经存在的软件的著作权的侵犯。

              
              <br><span class="tit-2">11．进行计算机软件著作权登记有什么作用？</span><br>
              答：国家著作权行政管理部门鼓励著作权人进行计算机软件著作权登记，并对已登记的软件给予重点保护。软件著作权登记证书是对登记事项的初步证明，可以帮助持有者在诉讼中起到减轻举证责任的作用。根据国务院颁发的《鼓励软件产业和集成电路产业发展的若干政策》的有关规定，证书可以作为软件企业申请减免税收的证明。

              
              <br><span class="tit-2">12．只有进行软件著作权登记后才有版权吗？</span><br>
              答：软件开发完成后著作权自动产生，不论是否登记，都享有著作权。

             
              <br><span class="tit-2"> 13．申请登记的软件名称是不是不能与已登记的软件名称重名？</span><br>
              答：只要是独立开发享有著作权的软件都可以申请登记，软件名称可以相同或相似。

              
              <br><span class="tit-2">14．可以以个人名义申请登记吗？</span><br>
              答：只有著作权人才可以申请登记；依靠自己具有的条件独立完成软件开发，并对软件承担责任的自然人可以作为申请人申请登记。

              
              <br><span class="tit-2">15．个人申请登记要提交什么身份证明文件？</span><br>
              答：需要提交个人的身份证复印件A4，如果是二代身份证则正反两面信息都要复印。

             
              <br><span class="tit-2"> 16．法人申请登记要提交什么身份证明文件？</span><br>
              答：公司需要提交营业执照副本复印件，事业单位需要提交事业单位法人证书复印件，机关需要提交组织机构代码复印件，社团法人提交社团法人证书复印件。都应是A4格式。

            
              <br><span class="tit-2"> 17．营业执照需要盖章吗？</span><br>
              答：需要。

              
              <br><span class="tit-2">18．外国公司可以在国内进行登记吗？</span><br>
              答：可以依据计算机软件著作权登记办法进行登记。

              
              <br><span class="tit-2">19．外国公司登记提交的身份证明文件有什么要求？</span><br>
              答：外国公司提交的身份证明文件需要中国驻当地使领馆的认证，同时所有的外文文件需要翻译公司翻译，并加盖翻译公司的公章。

              
              <br><span class="tit-2">20．合作开发的软件由谁进行登记？</span><br>
              答：合作开发的软件进行著作权登记的，可以由全体著作权人协商确定一名著作权人作为代表办理，申请者签章时只需由此著作权人签公章。著作权人协商不一致的，任何著作权人均可在不损害其他著作权人利益的前提下申请登记，但应当注明其他著作权人。

              
              <br><span class="tit-2">21．可以在当地版权部门办理计算机软件著作权登记吗？</span><br>
              答：中国版权保护中心是国家版权局认定的唯一的软件登记机构，目前除北京地区设有代办机构，其他各地都需要在中国版权保护中心进行软件登记，外地申请者可以通过邮寄申请文件办理。

            
              <br><span class="tit-2">  22．一定要委托代理人才能办理登记吗？</span><br>
              答：不是，可以委托代理人办理，也可以自己办理。

            
              <br><span class="tit-2">  23．申请登记的流程是怎样的？</span><br>
              答：简单来说，首先需要到中国版权保护中心的网站（www.ccopyright.com.cn）在线填写计算机软件著作权登记申请表并打印盖章，然后向登记机构提交申请表、软件鉴别材料和证明文件，（北京的申请者到中国版权保护中心现场办理，外地申请者将材料邮寄到中国版权保护中心）。登记机构初审后，符合要求的通知申请者交费，出具受理通知书，然后进行审查，如果符合要求，则发登记证书，并进行公告；如果审查不符合要求，则通知申请者补正，直到审查通过。

              
              <br><span class="tit-2">24．申请登记需要提交的材料是什么？</span><br>
              答：基本材料一是计算机软件著作权登记申请表；二是著作权人的身份证明文件；三是软件的鉴别材料，其他文件视材料中的具体情况而定。
             
              <br><span class="tit-2"> 25．软件的鉴别材料包括什么？</span><br>
              答：软件的鉴别材料包括源程序和文档，由源程序前、后各连续30页，以及任何一种文档前、后各连续30页组成。共120页。整个程序不到60页的，应当提交整个源程序；整个文档不到60页的，应当提交整个文档。

              
              <br><span class="tit-2">26．源程序和文档有什么具体要求？</span><br>
              答：除特定情况外，程序每页不少于50行，文档每页不少于30行（如有图片则不需要），页眉上要标注该软件名称、版本号，右上角标注页码，全部用A4纸单面打印。

             
              <br><span class="tit-2"> 27．鉴别材料需要装订吗？</span><br>
              答：不要装订。

            
              <br><span class="tit-2">  28．鉴别材料怎样编页码？</span><br>
              答：可以打印，也可以手写，在材料的右上方，源程序从正文第1页编到第60页，文档从目录开始由第1页编到第60页。

              
              <br><span class="tit-2">29．申请表中的一般交存和例外交存怎样区别？</span><br>
              答：一般交存指的是提交源程序的前、后各连续的30页；例外交存可以选择以下三种方式之一：
              （一）源程序的前、后各连续30页，其中的机密部分用黑色宽斜线覆盖，但覆盖部分不得超过交存源程序的50％；
              （二）源程序连续的前10页，加上源程序的任何部分的连续的50页；
              （三）目标程序的前、后各连续的30页，加上源程序的任何部分的连续的20页。

              
              <br><span class="tit-2">30．鉴别材料作例外交存有什么意义？</span><br>
              答：计算机软件鉴别材料中含有商业和技术秘密，或者含有不愿透露的内容时，申请人可以例外交存程序或文档的鉴别材料。
              
              <br><span class="tit-2">31．一般交存和例外交存的收费标准一样吗？</span><br>
              答：不一样。一般交存交300元，例外交存交620元。

              
              <br><span class="tit-2">32．鉴别材料需要有页眉页脚吗？</span><br>
              答：需要。页眉上要标注该软件名称、版本号，右上角标注页码，所写内容应与申请表一致。

             
              <br><span class="tit-2"> 33．软件的1.0已经登记，升级版本还要再登记吗？</span><br>
              答：不同版本是不同的软件作品，软件功能和性能发生重大变化的升级软件，申请人如有需要，还应再登记。

              
              <br><span class="tit-2">34．正在申请登记的软件可以请求撤回申请吗？</span><br>
              答：申请人在登记申请批准之前，可以随时请求撤回申请。

              
              <br><span class="tit-2">35．权利人可以撤销计算机著作权软件登记吗？</span><br>
              答：中国版权保护中心可以根据申请人的申请，撤销登记。

              
              <br><span class="tit-2">36．登记证书可以要两个或多个吗？</span><br>
              答：著作权人是多方的软件，可以申请要多个证书，其中一个为正本，其余的是副本。证书的正本和副本数额不能超过著作权人的数量。

             
              <br><span class="tit-2"> 37．外地申请者的申请费什么时候交？</span><br>
              答：通过初审材料符合要求，申请人收到缴费通知后，通过银行或邮局汇款。

              
              <br><span class="tit-2">38．算法软件可以登记吗？</span><br>
              答：算法是数学方法，在软件开发中，使用计算机程序设计语言实现的算法，其表达形式受到版权保护，可以进行登记。

             
              <br><span class="tit-2"> 39．游戏可以登记吗？</span><br>
              答：一个游戏作品可以分为游戏引擎和游戏资源两大部分。游戏资源包括图象，声音，动画等部分，游戏引擎是程序代码，可以申请软件著作权登记，而游戏中动漫、视频、图片等属于其他作品，不能进行软件著作权登记。

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
      console.log(type,index,`check${type}`);
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
     width: 400px;
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
     width: 768px;
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

