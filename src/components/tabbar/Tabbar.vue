<template>
  <div class="title" v-show="$route.meta.isShowTabber">
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        @click="fun2(index)"
        :class="s === index ? 'x' : ''"
      >
        <router-link :to="item.path">
          <span :class="'iconfont ' + item.src"></span>
          <p>{{ item.name }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      s: 0,
      list: [
        {
          id: 0,
          path: '/Home',
          name: '首页',
          src: 'icon-shouye',
          bcak: '#87D7F3',
        },
        {
          id: 1,
          path: '/Fenlei',
          name: '分类',
          src: 'icon-fenlei',
          bcak: '#87D7F3',
        },
        {
          id: 2,
          path: '/Gouwuche',
          name: '购物车',
          src: 'icon-gouwuche',
          bcak: '#87D7F3',
        },
        {
          id: 3,
          path: '/Geren',
          name: '个人',
          src: 'icon-geren',
          bcak: '#87D7F3',
        },
      ],
    }
  },
  methods: {
    fun2(index) {
      this.s = index
    },
  },
}
</script>

<style lang="less" scoped>
.title {
  ul {
    width: 100%;
    height: 0.85rem;
    position: fixed;
    left: 0;
    bottom: 0;
    li {
      width: 25%;
      height: 0.85rem;
      // background:red;
      float: left;
      text-align: center;
      span {
        font-size: 0.5rem;
        // color:red;
      }
    }
  }
}
.x {
  span {
    color: #87d7f3;
  }
  p {
    color: #87d7f3;
  }
}
</style>
