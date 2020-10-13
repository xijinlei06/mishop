<template>
  <div class="site">
    <div class="head">
      <div class="head_left" @click="gositemsg">
        <span class="iconfont icon-zuojiantou"></span>
      </div>
      <h1>新增收货地址</h1>
      <div class="head_right">
        <span class="iconfont icon-Magnifier"></span>
      </div>
    </div>
    <div class="personla_info">
      <div class="per_info_left">姓名:</div>
      <input type="text" class="per_info_right" placeholder="真实姓名" />
    </div>
    <div class="personla_info">
      <div class="per_info_left">手机号码:</div>
      <input type="text" class="per_info_right" placeholder="手机号码" />
    </div>
    <div class="personla_info">
      <div class="per_info_left">所在地区:</div>
      <van-row class="ssq">
        <van-cell is-link @click="showPopup">省 市 区 街道信息</van-cell>
        <van-popup v-model="show" position="bottom" :style="{ height: '30%' }">
          <van-area title="地区选择" :area-list="areaList" />
        </van-popup>
      </van-row>
    </div>
    <div class="personla_info">
      <div class="per_info_left">详细地址:</div>
      <input type="text" class="per_info_right" placeholder="详细地址" />
    </div>
    <div class="dalt">
      <div class="dalt_name">设为默认地址</div>
      <input type="checkbox" name="" id="" checked="checked" />
    </div>
    <button>保存地址</button>
  </div>
</template>

<script>
import region from "../../src/assets/js/region";
export default {
  data() {
    return {
      show: false,
      areaList: region
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    },
    gositemsg() {
      this.$router.push("/Sitemsg");
    }
  }
};
</script>

<style lang="less" scoped>
.site {
  width: 100%;
  .head {
    width: 100%;
    height: 0.85rem;
    background: #f2f2f2;
    display: flex;
    justify-content: space-between;
    .head_left {
      width: 0.4rem;
      height: 0.4rem;
      margin-top: 0.2rem;
      margin-left: 0.2rem;
    }
    h1 {
      color: #666666;
      font-size: 0.31rem;
      margin-top: 0.2rem;
    }
    .head_right {
      width: 0.5rem;
      height: 0.5rem;
      margin-top: 0.2rem;
      margin-right: 0.2rem;
    }
  }
  .personla_info {
    width: 100%;
    height: 1.11rem;
    border-bottom: 1px solid #ccc;
    .per_info_left {
      padding: 17.8px;
      float: left;
      font-size: 0.32rem;
    }
    .per_info_right {
      width: 72%;
      height: 1.1rem;
      float: left;
      border: none;
    }
    .ssq {
      width: 72%;
      height: 1.11rem;
      float: left;
      color: #ccc;
    }
    .van-cell {
      padding: 16px;
    }
  }
  .dalt {
    width: 100%;
    height: 0.76rem;
    border-bottom: 1px solid #ccc;
    .dalt_name {
      padding: 10px;
      float: left;
    }
    input {
      float: left;
      margin-left: 0.1rem;
      margin-top: 0.27rem;
    }
  }
  button {
    width: 100%;
    height: 0.85rem;
    background: #ff6700;
    color: #ffffff;
    font-size: 0.24rem;
    line-height: 0.85rem;
    border: none;
    position: fixed;
    left: 0;
    bottom: 0;
  }
}
</style>
