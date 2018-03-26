
<template>
      <el-col :span="12" id="left-side-bar">
      <el-menu default-active="1"class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"background-color="#545c64" text-color="#fff"
        active-text-color="#ffd04b">
        <router-link to="clue">
          <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">线索</span>
          </el-menu-item>
        </router-link>
        <router-link to="business">
          <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">商机</span>
          </el-menu-item>
        </router-link>
        <router-link to="customer">
          <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">客户</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-col>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    }
  }
</script>

