<template>
      <el-menu
          default-active="2"
          unique-opened
          :default-openeds="['1']"
        >
          
          <el-submenu index="1" popper-class="submenu-act">
            <template slot="title">
              <i class="el-icon-bell"></i>
              <span>知识产权</span>
            </template>
           <el-menu-item index="2-1">
              <nuxt-link class="child-nav" to="/detail/patent">专利、商标申请</nuxt-link>
            </el-menu-item>
            <!-- <el-menu-item index="2-2">商标注册</el-menu-item> -->
            <el-menu-item index="2-3" >
               <nuxt-link style="display:block;color:#222;text-decoration:none;" to="/detail/softwareCopyright">软件著作权</nuxt-link>
            </el-menu-item>
          
            <!-- <el-submenu index="5-4">
              <template slot="title">软件著作权</template>
              <el-menu-item index="5-4-1">选项1</el-menu-item>
            </el-submenu> -->
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-news"></i>
              <span>资质认定</span>
            </template>
           <el-menu-item index="6-1">
              <nuxt-link class="child-nav" to="/detail/infoSystem">信息系统集成服务资质</nuxt-link>
            </el-menu-item>
            <el-menu-item index="6-2">信息安全服务资质</el-menu-item>
            <el-menu-item index="6-3">
               <nuxt-link class="child-nav" to="/detail/anFang">安防工程资质</nuxt-link>
            </el-menu-item>
            <el-menu-item index="6-4">
               <nuxt-link class="child-nav" to="/detail/softCompany">软件企业评估</nuxt-link>
            </el-menu-item>
            <el-menu-item index="6-5">
               <nuxt-link class="child-nav" to="/detail/zgcCompany">中关村高新技术企业认定</nuxt-link>
            </el-menu-item>
          
                <el-menu-item index="6-7">
               <nuxt-link class="child-nav" to="/detail/beijingSoft">北京市软件产品登记</nuxt-link>
            </el-menu-item>
          
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-edit-outline"></i>
              <span>体系认定</span>
            </template>
            <el-menu-item index="5-4-1">
              <nuxt-link class="child-nav" to="/detail/90001">ISO9001</nuxt-link>
              </el-menu-item>
              <el-menu-item index="5-4-2">
                 <nuxt-link class="child-nav" to="/detail/14001">ISO14001</nuxt-link>
              </el-menu-item>
              <el-menu-item index="5-4-3">
                <nuxt-link class="child-nav" to="/detail/18001">OHSAS18001</nuxt-link>
              </el-menu-item>
              <el-menu-item index="5-4-4">
                <nuxt-link class="child-nav" to="/detail/20000">ISO20000</nuxt-link>
              </el-menu-item>
              <el-menu-item index="5-4-5">
                <nuxt-link class="child-nav" to="/detail/27001">ISO27001</nuxt-link>
              </el-menu-item>
               <el-menu-item index="5-4-6">
               <nuxt-link class="child-nav" to="/detail/cmmi">CMMI体系认证</nuxt-link>
            </el-menu-item>
          
          </el-submenu>

          <el-menu-item index="4">
            <i class="el-icon-mobile-phone"></i>
            <!-- <span slot="title">高新企业认定</span> -->
             <nuxt-link class="child-nav" to="/detail/nationCompany">高新企业认定</nuxt-link>
          </el-menu-item>

        </el-menu>
</template>
<script>
export default {
    methods: {
    
    }
}
</script>
<style>
.child-nav{
  text-decoration: none;
  color: rgb(34, 34, 34);
}
</style>

