<template>
  <div>
    <div class="head"> 
      <div class="head-container">
          <div class="headNav">
            <ul> 
              <a href="#" class="headLogo"><img src="/images/logo.png" alt=""></a>
              <li><a href="/">首页</a></li>
              <li id="erjiNav"><a href="#">主营业务</a></li> 
              <li><a href="#">成功案例</a></li> 
              <li><a href="#">新闻信息</a></li> 
              <li><a href="#">关于灵动</a></li> 
              <li><a href="/AboutUS">联系我们</a></li> 
            </ul>
          </div>
          <div class="drop-down">
              <ul>
                <li><a href="#">软件</a></li>
                <li><a href="#">专利</a></li>
                <li><a href="#">商标</a></li>
              </ul>
          </div>
      </div>     
    </div>
    <nuxt />
  </div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  },
  created () {
    console.log(this.$route)
  },
  methods: {
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
/*head */
.head{width: 100%;height: 100px;background-color: rgb(248, 246, 246);}
.head .head-container{width: 1200px;height: 100px;position: relative;}
.head .headNav{width: 100%;height:100px;margin: 0 auto;}
.head .headNav .headLogo{float:left;width: 260px;margin-right: 30px;}
.head .headNav li{float: left;height: 100px;width: 130px;line-height: 100px;text-align: center;list-style: none;}
.head .headNav li a:hover{background: url('/images/nav_bg.png') no-repeat;color: #fff!important;}
.head .headNav li a{display: block;color: #222;text-decoration: none;}

.head .head-container .headNav .drop-down{position: absolute;top:100px;left: 466px;z-index:10;width: 130px;background-color: #f60;}
.head .head-container .headNav .drop-down ul{width: 100%;height: 100px;padding: none!important}
.head .head-container .headNav .drop-down ul li{list-style-type: none;height: 30px;width: 100%}
.head .head-container .headNav .drop-down ul li a{display:block;text-decoration: none;height: 30px;width: 100%}
/*head end*/

</style>
