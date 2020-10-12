<template>
  <div>
    <div class="box">
  
      {{   this.$route.query.userid}}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // msg:JSON.parse(this.$route.params.items)
    }
  },
  created () {
    // console.log(JSON.stringify(this.$route.params.item))
  }
}
</script>

<style lang="less" scoped>
.box{
  width: 5rem;
  height: 5rem;
  background:red;
}
</style>