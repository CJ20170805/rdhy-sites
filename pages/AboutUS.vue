<template>
  <div class="about-us">
    <div class="contact-banner">
      <img src="~/assets/images/contact_us.jpg" alt="">
    </div>
    <div class="about-content">
      <div class="about-tit">
        <span>联系我们</span>
        <p>CONTACT US</p>
      </div>
      <div class="about-main">
        <div class="contact-info">
          <div class="info-list">
            <div class="info-item">
              <i class="phone"></i><span>电话： 010-68207631</span>
            </div>
            <div class="info-item">
              <i class="email"></i><span>邮箱： office@anyway.org.cn</span>
            </div>
            <div class="info-item">
              <i class="address"></i><span>地址：北京市海淀区万寿路27号院（万寿路地铁站东南口出步行至工信部大院即到）</span>
            </div>

            <div class="dashed"></div>

             <div class="info-item">
              <span>乘车指南：</span>
            </div>

            <div class="info-item">
              <i class="bus"></i><span>乘车路线：地铁1号线 万寿路 下车( C2东南口出 )</span>
            </div>
            <div class="info-item">
              <i class="bus"></i><span>公交路线：万寿路东站 （120、68、451、77、335、308 ） </span>
            </div>
          </div>
        </div>
        <div class="contact-map" id="mapContent">

        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
import * as api from '~/api'

export default {
  data () {
    return {
      getValue: '111'
    }
  },
  async asyncData () {
    // axios.get('api/api')
    //  .then(data => {console.log('data',data.data)})
    //  .catch(err => {console.log('err',err)})
      // let d = await api.getData()
      // console.log(d)
      // return {a : d}
      // return {'aa': d}
      // .then(res => {console.log(res); this.getValue = res.data})
      // .catch(err => console.log(err))
  },
  created () {
 
  },
 
  // head () {
  //   return {
  //     title: 'lalalalal'
  //   }
  // }
  head () {
    return {
      title: 'About',
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  mounted () {
    this.createMap();
    this.$nextTick(() => {
      // this.$nuxt.$loading.start()
      // setTimeout(() => this.$nuxt.$loading.finish(), 5000)
    });
  },
  methods: {
    createMap () {
        //创建和初始化地图函数：
        function initMap(){
            createMap();//创建地图
            setMapEvent();//设置地图事件
            addMapControl();//向地图添加控件
            addMarker();//向地图中添加marker
        }
        
        //创建地图函数：
        function createMap(){
            var map = new BMap.Map("mapContent");//在百度地图容器中创建一个地图
            var point = new BMap.Point(116.302269,39.910018);//定义一个中心点坐标
            map.centerAndZoom(point,17);//设定地图的中心点和坐标并将地图显示在地图容器中
            window.map = map;//将map变量存储在全局
        }
        
        //地图事件设置函数：
        function setMapEvent(){
            map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
            map.enableScrollWheelZoom();//启用地图滚轮放大缩小
            map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
            map.enableKeyboard();//启用键盘上下左右键移动地图
        }
        
        //地图控件添加函数：
        function addMapControl(){
            //向地图中添加缩放控件
        var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(ctrl_nav);
            //向地图中添加缩略图控件
        var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
        map.addControl(ctrl_ove);
            //向地图中添加比例尺控件
        var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        map.addControl(ctrl_sca);
        }
        
        //标注点数组
        var markerArr = [{title:"荣德海越（北京）信息技术有限公司",content:"北京市海淀区万寿路27号院",point:"116.302278|39.909963",isOpen:0,icon:{w:21,h:21,l:46,t:46,x:1,lb:10}}
            ];
        //创建marker
        function addMarker(){
            for(var i=0;i<markerArr.length;i++){
                var json = markerArr[i];
                var p0 = json.point.split("|")[0];
                var p1 = json.point.split("|")[1];
                var point = new BMap.Point(p0,p1);
                var iconImg = createIcon(json.icon);
                var marker = new BMap.Marker(point,{icon:iconImg});
                var iw = createInfoWindow(i);
                var label = new BMap.Label(json.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
                marker.setLabel(label);
                map.addOverlay(marker);
                label.setStyle({
                            borderColor:"#808080",
                            color:"#333",
                            cursor:"pointer"
                });
                
                (function(){
                    var index = i;
                    var _iw = createInfoWindow(i);
                    var _marker = marker;
                    _marker.addEventListener("click",function(){
                        this.openInfoWindow(_iw);
                    });
                    _iw.addEventListener("open",function(){
                        _marker.getLabel().hide();
                    })
                    _iw.addEventListener("close",function(){
                        _marker.getLabel().show();
                    })
                    label.addEventListener("click",function(){
                        _marker.openInfoWindow(_iw);
                    })
                    if(!!json.isOpen){
                        label.hide();
                        _marker.openInfoWindow(_iw);
                    }
                })()
            }
        }
        //创建InfoWindow
        function createInfoWindow(i){
            var json = markerArr[i];
            var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + json.title + "'>" + json.title + "</b><div class='iw_poi_content'>"+json.content+"</div>");
            return iw;
        }
        //创建一个Icon
        function createIcon(json){
            var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
            return icon;
        }
        
        initMap();//创建和初始化地图
    }
  }
}
</script>

<style scoped lang="less">

  @common_red :rgb(235, 60, 60);

  .about-us{
    width: 100%;
    .contact-banner{
      height: 300px;
      width: 100%;
      img{
        width: 100%;
        height: 300px;
      }
    }
    .about-content{
      width: 1200px;
      height: 800px;
      margin: 0 auto;
      .about-tit{
        height: 86px;
        width: 180px;
        margin-top: 34px;
        border-bottom: 3px solid @common_red;
        span{
          font-size: 28px;
          font-family: 微软雅黑;
          color: rgb(16, 16, 16);
          line-height: 46px;
        }
        p{
          color: rgb(181, 181, 181);
          font-size: 18px;
          line-height: 20px;
        }
      }
      .about-main{
        width: 100%;
        height: 600px;
        // background-color: aquamarine;
        margin-top: 30px;
        .contact-info{
          width: 500px;
          height: 600px;
          float: left;
          background: url('~assets/images/3302.jpg') no-repeat center;
          .info-list{
            height: 350px;
            width: 100%;
            background-color: rgba(245, 18, 18, 0.8);
            margin-top: 250px;
            color: #fff;
            font-size: 16px;
            box-sizing: border-box;
            padding: 40px;
            .info-item{
              i{
                display: inline-block;
                width: 30px;
                height: 30px;
                vertical-align: middle;
                margin-right: 30px;
                vertical-align: top;
                }
              span{
                display: inline-block;
                line-height: 30px;
                width: 350px;
              }
              .phone{
                background: url('~assets/images/con01.png') no-repeat center;
              }
              .email{
                background: url('~assets/images/con02.png') no-repeat center;
              }
              .address{
                background: url('~assets/images/con03.png') no-repeat center;
              }
              .bus{
                background: url('~assets/images/con04.png') no-repeat center;
              }
            }
            .dashed{
              width: 100%;
              height: 0;
              border-bottom: 1px dashed #fff;
              margin-top: 20px;
              margin-bottom: 20px;
            }
          }
        }
        .contact-map{
          width: 700px;
          height: 600px;
          float: left;
          background-color: @common_red;
        }
      }
    }
  }
</style>

