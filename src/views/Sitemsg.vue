<template>
  <div class="sitemsg">
    <div class="head">
      <div class="head_left" @click="back">
        <span class="iconfont icon-zuojiantou"></span>
      </div>
      <h1>收货地址</h1>
      <div class="head_right">
        <span class="iconfont icon-Magnifier"></span>
      </div>
    </div>
    <div class="msg" v-for="item in info" :key="item.id">
      <div class="msg_top">
        <p class="user_name">{{ item.name }}</p>
        <p class="user_phone">{{ item.phone }}</p>
        <p class="del" @click="del">删除</p>
      </div>
      <div class="msg_bottom">
        <div class="msg_b_lt">
          <p>{{ item.address_region }}</p>
          <p>{{ item.address_info }}</p>
        </div>
        <div class="msg_b_ri">
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>
    </div>

    <button @click="newsite">新建地址</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: []
    };
  },
  created() {
    this.$axios.get("/data/address.json").then(res => {
      console.log(res);
      this.info = res.data;
      console.log(this.info);
    });
  },
  methods: {
    del() {},
    back() {
      this.$router.push("/geren");
    },
    newsite() {
      this.$router.push("/Site");
    }
  }
};
</script>

<style lang="less" scoped>
.sitemsg {
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
  .msg {
    width: 7.1rem;
    height: 2rem;
    margin-left: 0.1rem;
    margin-top: 0.2rem;
    border: 1px solid #ccc;
    .msg_top {
      width: 6.7rem;
      height: 0.94rem;
      border-bottom: 1px solid #ccc;
      margin-left: 0.17rem;
      display: flex;
      justify-content: space-around;
      .user_name {
        color: #ff6700;
      }
      .del {
        color: #a3a3a3;
      }
      .user_phone {
        color: #000000;
      }
      p {
        margin-top: 0.4rem;
      }
    }
    .msg_bottom {
      width: 6.7rem;
      height: 0.94rem;
      margin-left: 0.17rem;
      display: flex;
      justify-content: space-between;
      p {
        margin-left: 0.65rem;
        margin-top: 0.1rem;
      }
      .msg_b_ri {
        width: 0.4rem;
        height: 0.4rem;
        margin-top: 0.25rem;
      }
      .msg_b_lt {
        p {
          color: #3c3c3c;
        }
      }
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
