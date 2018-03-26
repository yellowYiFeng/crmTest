<template>
  <div id="app">
    <!-- <router-view/> -->
    <el-header class="center"></el-header>
    <div id="crm-layout" class="mt60">
      <nav-aside></nav-aside> 
      <nav-con></nav-con>
    </div>
  </div>
</template>

<script>
import navAside from './components/navAside.vue'
import navCon from './components/navCon.vue'
// import commonJs from './js/common'
export default {
  name: 'App',
  components : {
    navAside,
    navCon,
  }
}
</script>
<style>
@import './css/layout.css';
@import './css/common.css';
@import './css/base.css';
@import './css/iconfont.css';
body, dd, div, dl, dt, h1, h2, h3, h4, h5, h6, li, ol, p, td, th, ul{
  margin: 0;
  padding: 0
}
ol, ul{
  list-style: none
}
</style>



