<template>
  <div class="home">
    <div class="home_heider">
      <div class="heider_left">
          <div class="yuan"></div>
      </div>
      <div class="heider_right">
        <input type="text">
      </div>
    </div>
    <nav>
      <!-- 轮播图 -->
      <div class="swiper-container s">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in data_boy" :key="index">
            <img :src="item.img" alt="" />
          </div>
        </div>
      </div>
    </nav>
    <div class="heiht">
      <ul>
        <li> 
          <span class="iconfont icon-wodeyouhuijuan"></span>
          <p>icon1</p> 
        </li>
        <li> 
          <span class="iconfont icon-message"></span>
          <p>icon2</p> 
        </li>
        <li> 
          <span class="iconfont icon-xin"></span>
          <p>icon3</p> 
        </li>
        <li> 
          <span class="iconfont icon-erweima"></span>
          <p>icon4</p> 
        </li>
        <li> 
          <span class="iconfont icon-dingwei"></span>
          <p>icon5</p> 
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
import "swiper/swiper-bundle.css";
import Swiper from "swiper/swiper-bundle.js";
  export default {
    data(){
      return{
        data_boy:[]  
      }
    },
    created(){
    this.$axios.get('https://shiyaming1994.github.io/mi/static/rotationChart.json')
    .then(res=>{
      this.data_boy = res.data
    })
  },
    methods:{
        swiperdata () {
         
        }
    },
    watch: {
      data_boy(info){
        if(info){
          this.$nextTick(()=>{
             new Swiper(".s", {
            autoplay: {
              delay: 1000,
              stopOnLastSlide: false,
              disableOnInteraction: false
            },
            loop: true, // 循环模式选项
          })

          })
        }
      }
    
  },
  }
</script>

<style lang="less" scoped>
  .home{
    width: 100%;
    .home_heider{
      width: 100%;
      height: 1.12rem;
      background: #F2F2F2;
      .heider_left{
        width: 25%;
        height: 100%;
        float: left;
        .yuan{
          width: 0.72rem;
          height: 0.72rem;
          background: #87CEEB;
          border-radius: 50%;
          margin-top: 0.20rem;
          margin-left: 0.36rem;
        }
      }
      .heider_right{
        width: 75%;
        height: 100%;
        float: left;
        input{
          width: 4rem;
          height: 0.52rem;
          border-radius: 0.5rem;
          border: 1px solid #E5E5E5;
          text-indent: 0.2rem;
          margin-top: 0.3rem;
          margin-left: 0.2rem;
        }
      }
    }
  }
  .swiper-container {
  width: 100%;
  height: 3rem;
 
}
img {
  width: 100%;
  height: 3rem;
}
.heiht{
  width: 100%;
  height: 1.27rem;
  ul{
    display: flex;
    text-align: center;
    line-height: 0.4rem;
    li{
      flex: 1;
      margin-top: 0.2rem;
    }
  }
}
</style>