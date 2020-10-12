<template>
  <div class="box">
    <div class="icon">
      <div class="icon_top">
          <div class="ic"></div>
          <p>154548787</p>
      </div>
      <div class="indent">
        <div class="te">
          <div class="tit">我的订单</div>
          <p>全部订单</p>
        </div>
        <span class="iconfont icon-youjiantou"></span>
      </div>
      <div class="icon_bottom">
        <div>
          <span class="iconfont icon-gouwuche"></span>
          <h1>待付款</h1>
        </div>
        <div>
          <span class="iconfont icon-wodeyouhuijuan"></span>
          <h1>优惠券</h1>
        </div>
        <div>
          <span class="iconfont icon-xin1"></span>
          <h1>收藏</h1>
        </div>
      </div>
    </div>
    <div class="bot">
      <div class="bot_t">
        <div class="bott_l"><span class="iconfont icon-xin"></span></div>
        <div class="bott_r">
          <p>会员中心</p>
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>
      <div class="bot_b">
        <div class="botb_l"><span class="iconfont icon-dingwei"></span></div>
        <div class="botb_r" @click="fun">
          <p>收货地址</p>
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>
    </div>
    <div class="bot">
      <div class="bot_t">
        <div class="bott_l"><span class="iconfont icon-wodeyouhuijuan"></span></div>
        <div class="bott_r">
          <p>我的优惠</p>
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>
      <div class="bot_b">
        <div class="botb_l"><span class="iconfont icon-message"></span></div>
        <div class="botb_r">
          <p>我的意见</p>
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>
    </div>
    <div class="bots">
      <div class="bot_ts">
        <div class="bott_l"><span class="iconfont icon-shijian"></span></div>
        <div class="bott_r">
          <p>浏览记录</p>
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>
    </div>
    <div class="bots">
      <div class="bot_ts">
        <div class="bott_l"><span class="iconfont icon-erweima"></span></div>
        <div class="bott_r">
          <p>我的名片</p>
          <span class="iconfont icon-youjiantou"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    },
    methods:{
      fun(){
        this.$router.push('/Sitemsg')
      }
    }
  }
</script>

<style lang="less" scoped>
body{
  background: red;
  .box{
    width: 100%;
    .icon{
      .icon_top{
        width: 100%;
        height: 2.38rem;
        background: #f37d0f;
        .ic{
          width: .85rem;
          height: .85rem;
          float: left;
          border-radius: 50%;
          border: .1rem solid #f8b16f;
          margin-left: .26rem;
          margin-top: .55rem;
        }
        p{
          float: left;
          color: #ffffff;
          font-size: .17rem;
          margin-left: 0.14rem;
          margin-top: 0.88rem;
        }
      }
      .indent{
        width: 100%;
        height: .82rem;
        border-bottom: 1px solid #ccc;
        .te{
          width: 6.7rem;
          height: .3rem;
          float: left;
          margin-left: .26rem;
          margin-top: .26rem;
          padding-right: .1rem;
          .tit{
            font-size: .3rem;
            color: #000;
            float: left;
          }
          p{
            float: right;
            font-size: .22rem;           
          }
        }
        span{
          float: left;
          font-size: .35rem;
          margin-top: .24rem;
        }
      }
      .icon_bottom{
        width: 100%;
        height: 2.68rem;
        background: #ffffff;
        display: flex;
        border-bottom: .22rem solid #f5f5f5;
        div{
          flex: 1;
          text-align: center;
          font-size: 1.3rem;
          span{
            font-size: .4rem;
          }
        }
      }
    }
    .bot{
      width: 100%;
      height: 1.85rem;
      border-bottom: .22rem solid #f5f5f5;
      .bot_t{
        width: 100%;
        height: .88rem;
        .bott_l{
          width: .97rem;
          height: .88rem;
          float: left;
          text-align: center;
          line-height: .88rem;
          span{
            font-size: .41rem;
            color: #ff6600;
          }
        }
        .bott_r{
          width: 6.53rem;
          height: .86rem;
          float: left;
          border-bottom: 1px solid #d9d9d9;
          p{
            font-size: .36rem;
            float: left;
            margin-top: .27rem;
          }
          span{
            float: right;
            margin-top: .27rem;
          }
        }
      }
      .bot_b{
        width: 100%;
          .botb_l{
          width: .97rem;
          height: .88rem;
          float: left;
          text-align: center;
          line-height: .88rem;
          span{
            font-size: .41rem;
            color: #ff6600;
          }
        }
        .botb_r{
          width: 6.53rem;
          height: .86rem;
          float: left;
          p{
            font-size: .36rem;
            float: left;
            margin-top: .27rem;
          }
          span{
            float: right;
            margin-top: .27rem;
          }
        }
      }
    }
    .bots{
      width: 100%;
      border-bottom: .22rem solid #f5f5f5;
      .bot_ts{
        width: 100%;
        height: .88rem;
        .bott_l{
          width: .97rem;
          height: .88rem;
          float: left;
          text-align: center;
          line-height: .88rem;
          span{
            font-size: .41rem;
            color: #ff6600;
          }
        }
        .bott_r{
          width: 6.53rem;
          height: .86rem;
          float: left;
          p{
            font-size: .36rem;
            float: left;
            margin-top: .27rem;
          }
          span{
            float: right;
            margin-top: .27rem;
          }
        }
      }
      }
  }
}

</style>