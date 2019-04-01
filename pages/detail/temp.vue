<template>
  <div id="wrap">
    <div class="detail">
      <div class="img">
        <img class="main-img" src="~/assets/images/de01.png" alt="">
        <ul>
          <li>
            <img src="~/assets/images/de01.png" alt="">
          </li>
          <li>
            <img src="~/assets/images/de01.png" alt="">
          </li>
          <li>
            <img src="~/assets/images/de01.png" alt="">
          </li>
        </ul>
      </div>
      <div class="text">
        <h2>ISO14001 环境管理体系认证</h2>
        <h5>金牌服务团队，专家全程指导，客户100%好评</h5>
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
             <h6>1000+</h6>
           </div>
        </div>
        <div class="option">
          <div class="item">
            <i>有效期</i>
            <div class="o-i">
              <span>1-10人</span>
             <span>1-10人</span>
              <span>1-10人</span>
               <span>1-10人</span>
                <span>1-10人</span>
                 <span>1-10人</span>
                  <span>1-10人</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
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
    padding-top: 40px;
   .img{
     width: 560px;
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
         border: 1px solid @common_red;
         list-style-type: none;
         display: inline-block;
         img{
           height: 70px;
         }
       }
     }
   }
   .text{
     width: 630px;
     height: 570px;
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
       background-color: #f3f3f3;
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
       .item{
         height: 40px;
         overflow: auto;
         i{
           color:#999;
           font-style: normal;
           font-size: 14px;
           float: left;
         }
         .o-i{
           float: left;
           width: 400px;
           span{
            display: inline-block;
            height: 35px;
            line-height: 35px;
            border: 1px solid #e0e0e0;
            padding: 0 10px;
            font-size: 14px;
          }
         }
       }
     }
   }
  }
}
</style>

