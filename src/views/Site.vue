<template>
  <div class="site">
    <div class="head">
      <div class="head_left" @click="gositemsg"><span class="iconfont icon-zuojiantou"></span></div>
      <h1>新增收货地址</h1>
      <div class="head_right"><span class="iconfont icon-Magnifier"></span></div>
    </div> 
    <div class="personla_info">
      <div class="per_info_left">姓名:</div>
      <input type="text" class="per_info_right" placeholder="真实姓名">
    </div>
    <div class="personla_info">
      <div class="per_info_left">手机号码:</div>
      <input type="text" class="per_info_right" placeholder="手机号码">
    </div>
    <div class="personla_info">
      <div class="per_info_left">所在地区:</div>
      <input type="text" class="per_info_right" placeholder="省 市 区 街道信息">
    </div>
    <div class="personla_info">
      <div class="per_info_left">详细地址:</div>
      <input type="text" class="per_info_right" placeholder="详细地址">
    </div>
    <div class="dalt">
      <div class="dalt_name">设为默认地址</div>
      <input type="checkbox" name="" id="" checked="checked">
    </div>
    <button>保存地址</button>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    gositemsg(){
      this.$router.push('/Sitemsg')
    }
  }
}
</script>

<style lang="less" scoped>
  .site{
    width: 100%;
    .head{
      width: 100%;
      height: .85rem;
      background: #f2f2f2;
      display: flex;
      justify-content: space-between;
      .head_left{
        width: .4rem;
        height: .4rem;
        margin-top: .2rem;
        margin-left: .2rem;
      }
      h1{
        color: #666666;
        font-size: .31rem;
        margin-top: .2rem;
      }
      .head_right{
        width: .5rem;
        height: .5rem;
        margin-top: .2rem;
        margin-right: .2rem;
      }
    }
    .personla_info{
      width: 100%;
      height: 1.11rem;
      border-bottom: 1px solid #ccc;
      .per_info_left{
        padding: 17.8px;
        float: left;
        font-size: .32rem;
      }
      .per_info_right{
        width: 72%;
        height: 1.1rem;
        float: left;
        border: none;
      }
    }
    .dalt{
      width: 100%;
      height: .76rem;
      border-bottom: 1px solid #ccc;
      .dalt_name{
        padding: 10px;
        float: left;
      }
      input{
        float: left;
        margin-left: .1rem;
        margin-top: .27rem;
      }
    }
    button{
      width: 100%;
      height: .85rem;
      background:  #ff6700;
      color: #ffffff;
      font-size: .24rem;
      line-height: .85rem;
      border: none;
      position: fixed;
      left: 0;
      bottom: 0;
    }
  }
</style>