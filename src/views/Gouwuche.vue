<template>
  <div>
    <div class="title">
      <div class="xs">
        <div class="x">
          <p><span class="iconfont icon-zuojiantou"></span></p>
          <p>购物车</p>
          <p><span class="iconfont icon-Magnifier"></span></p>
        </div>
        <div class="xx">
          <p class="p">登录后享受更多优惠</p>
          <p class="ps">
            <span>去登陆</span>
            <span class="iconfont icon-youjiantou"></span>
          </p>
        </div>
        <div class="xxx">
          <div v-if="false">
            <p>购物车还是空的</p>
            <span class="spans">去逛逛</span>
          </div>
          <ol class="ul">
            <li>
              <img src="../assets/img/1.jpg" alt="">
              <div class="a">
                <p>小木吧屏幕指纹版</p>
                <p class="c">￥7999</p>
                <div class="xjl">
                  <p style="background:#F6F6F6">-</p>
                  <p style="background:#fff">4</p>
                  <p style="background:#F6F6F6">+</p>
                </div>
                <span class="iconfont icon-lajitong" id="span"></span>
              </div>
            </li>
          </ol>
        </div>
        <img src="../assets/img/1.jpg" alt="" />
        <div class="div">
          <ul>
           
            <li v-for="(item, index) in arr" :key="index" @click="fn(item)"> 
            
              <!-- {{item}} -->
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
              <span>{{ item.content }}</span>
              <h3>￥{{ item.price }}</h3>
           
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [],
    }
  },
  created() {
    this.$axios.get('/data/homeGoods.json').then((res) => {
      this.arr = res.data
      console.log(res.data)
    })
  },
  methods: {
    fn(i){
      this.$router.push({path:'/Mini',query:{userid:i}})
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  height: 12rem;
  margin: auto;
  img {
    width: 100%;
  }
  .x {
    width: 100%;
    display: flex;
    justify-content: space-between; //三行自适应
    background: #f2f2f2;
    position: fixed;
    left: 0;
    top: 0;
    p {
      width: 1.2rem;
      height: 0.7rem;
      text-align: center;
      line-height: 0.7rem;
    }
  }
  .xx {
    width: 100%;
    height: 1.12rem;
    background: #fff;
    display: flex;
    justify-content: space-between;
    margin-top: 0.7rem;
    p {
      height: 1.12rem;
      text-align: center;
      line-height: 1.12rem;
    }
    .p {
      width: 4.6rem;
      font-size: 0.4rem;
    }
    .ps {
      width: 2rem;
      font-size: 0.2rem;
    }
  }
  .xxx {
    width: 100%;
    // height: 1.21rem;
    background: #ebebeb;
    overflow: hidden;
    div {
      width: 3.34rem;
      // height: 0.55rem;
      margin-top: 0.5rem;
      margin: auto;
      p {
        color: #ababab;
        float: left;
        // height: 0.5rem;
        // line-height: 0.5rem;
        // margin-top: 0.4rem;
      }
      .spans {
        width: 1.24rem;
        height: 0.5rem;
        display: block;
        text-align: center;
        line-height: 0.5rem;
        color: #000;
        border: 2px solid #c8c8c8;
        float: right;
        margin-top: 0.3rem;
      }
    }
  }
}
.div {
  width: 100%;
  // height: 7.34rem;
  // position: absolute;
  // overflow: hidden;
  margin-bottom: 0.7rem;
}
ul {
  width: 100%;
  height: 14.8rem;;
  li {
    width: 48%;
    height: 4.61rem;
    float: left;
    margin-left: 1.5%;
    margin-top: 0.1rem;
    span {
      margin-left: 0.2rem;
    }
    img {
      width: 100%;
      height: 3.18rem;
    }
    h3 {
      margin-left: 0.2rem;
      color: red;
    }
    p {
      font-size: 0.32rem;
      margin-left: 0.2rem;
      margin-top: 0.1rem;
    }
  }
}
.ul{
  width:100%; 
  background:#fff; 
  p{

    margin-top:0rem;
  }
 li{
   width:100%;
   height:2.22rem;
   img{
     width: 1.67rem;
     height:1.87rem;
     margin-left:0.2rem;
     margin-top: 0.15rem;
     float: left;
   }
   .a{
     width:4.64rem;
     height:1.73rem;
     float: left;
     margin-left: 0.1rem;
     margin-top: 0.2rem;

   }
 }

}

.xjl{
  width:2.42rem;
  height: 0.72rem;
  float: left;
  border:1px solid #BBBBBB;
  border-radius: 2px;
  p{
    width: 33%;
    height: 0.72rem;
    text-align: center;
    line-height: 0.72rem;
  }
}
#span{
  display: block;
  float: right;
}
.c{
  width: 3rem;
}
</style>
