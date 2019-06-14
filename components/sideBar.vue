<template>
      <el-menu
          default-active="2"
          unique-opened
          :default-openeds="['1']"
        >
          
          <el-submenu index="1" popper-class="submenu-act">
            <template slot="title">
              <i class="el-icon-bell"></i>
              <span>知识产权8</span>
            </template>
            <el-menu-item index="1-1">专利申请</el-menu-item>
            <el-menu-item index="1-2">商标注册</el-menu-item>
          
            <el-submenu index="5-4">
              <template slot="title">软件著作权</template>
              <el-menu-item index="5-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-news"></i>
              <span>资质认定</span>
            </template>
            <el-menu-item index="2-1">专利申请</el-menu-item>
            <el-menu-item index="2-2">商标注册</el-menu-item>
          
            <el-submenu index="2-4">
              <template slot="title">软件著作权</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-edit-outline"></i>
              <span>体系认定</span>
            </template>
            <el-menu-item index="3-1">专利申请</el-menu-item>
            <el-menu-item index="3-2">商标注册</el-menu-item>
          
            <el-submenu index="3-4">
              <template slot="title">软件著作权</template>
              <el-menu-item index="3-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>

          <el-menu-item index="4">
            <i class="el-icon-mobile-phone"></i>
            <span slot="title">高新企业认定</span>
          </el-menu-item>

        </el-menu>
</template>
<script>
export default {
    methods: {
    
    }
}
</script>

