<template>
  <div id="app">
   
    <Tabbar></Tabbar>
     <router-view />
  </div>
</template>
<script>
  import Tabbar from './components/tabbar/Tabbar'
  export default {
    components:{Tabbar}
  }
</script>
<style lang="less">
</style>
