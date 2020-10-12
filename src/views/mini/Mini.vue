<template>
  <div>
    <div class="box">
      <div class="span">
        <router-link to="/Gouwuche/">
        <div class="div">
          <span class="iconfont icon-zuojiantou"></span>
        </div>
</router-link>
        <img :src="msg.img" alt="" />
      </div>
      <div class="op">
        <p>{{ msg.name }}</p>
        <span>{{ msg.info }}</span>
        <h4>￥{{ msg.price }}</h4>
      </div>
      <ul>
        <li>
          <span>已选</span>
          <p>{{ msg.name }} {{ msg.edition[0].Memory }}</p>
          <span class="iconfont icon-youjiantou"></span>
        </li>
        <li style="border:none;">
          <span>送至</span>
          <p>北京</p>
          <span class="iconfont icon-youjiantou"></span>
        </li>
      </ul>
      <img :src="msg.info_img[0].img" alt="" class="img" />
      <div class="cuiguangyuan">
        <p>
          <span class="iconfont icon-shouye"></span>
          <b>首页</b>
        </p>
        <p>
          <span class="iconfont icon-gouwuche"></span>
          <b>购物车</b>
        </p>
        <h4 class="h4">加入购物车</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: this.$route.query.userid,
    }
  },
  created() {
    console.log(this.msg)
  },
}
</script>

<style lang="less" scoped>
.box {
  width: 100%;
  .div {
    width: 0.5rem;
    height: 0.5rem;
    background: #626262;
    border-radius: 50%;
    text-align: center;
    line-height: 0.5rem;
    margin-top: 0.4rem;
    margin-left: 0.3rem;
    margin-bottom: 0.3rem;

    span {
      color: #dcdcdc;
    }
  }
  .span {
    width: 100%;
    height: 7.06rem;
    background: #f6f6f6;
    overflow: hidden;
    color: #737373;
    img {
      width: 6.66rem;
      height: 5.02rem;
      display: block;
      margin: auto;
    }
  }
  .op {
    width: 5.93rem;
    height: 2.29rem;
    margin: auto;
    margin-top: 0.5rem;
    p {
      font-size: 0.45rem;
    }
    h4 {
      font-size: 0.4rem;
      color: #ff7529;
    }
  }
  ul {
    width: 5.87rem;
    height: 1.68rem;
    margin: auto;
    background: #fafafa;
    margin-top: 0.2rem;
    border-radius: 2px;
    li {
      width: 5.87rem;
      height: 0.86rem;
      border-bottom: 1px solid #cccccc;
      span {
        width: 0.58rem;
        height: 0.29rem;
        float: left;
        margin-top: 0.2rem;
        margin-left: 0.2rem;
      }
      p {
        width: 4.21rem;
        height: 0.28rem;
        margin-top: 0.2rem;
        float: left;
      }
    }
  }
}
.img {
  width: 100%;
  height: 15.54rem;
  margin-bottom: 1.2rem;
  margin-top: 0.8rem;
}
.cuiguangyuan {
  width: 90%;
  height: 0.88rem;
  background: #fff;
  margin-bottom: 2rem;
  position: absolute;
  left: 5%;
  bottom: -16rem;
  border-radius: 2px;
  p {
    width: 0.81rem;
    height: 0.83rem;
    text-align: center;
    line-height: 0.83rem;
    float: left;

    span {
      width: 1rem;
      height: 0.3rem;
      margin: auto;
      display: block;
    }
  }
}
.h4{
  width: 2.59rem;
  height: 0.61rem;
  background: #F56600;
  text-align: center;
  line-height: 0.61rem;
  float: right;
  border-radius: 2px;
  margin-top: 0.15rem;
  margin-right: 0.3rem;
  color:#fff;
}
</style>
