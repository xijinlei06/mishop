<template>
  <div class="title">
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
        },
        {
          id: 1,
          path: '/Fenlei',
          name: '分类',
          src: 'icon-fenlei',
        },
        {
          id: 2,
          path: '/Gouwuche',
          name: '购物车',
          src: 'icon-gouwuche',
        },
        {
          id: 3,
          path: '/Geren',
          name: '个人',
          src: 'icon-geren',
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
    background:#fff;
    left: 0;
    bottom: 0;
    z-index: 999;
    li {
      width: 25%;
      height: 0.85rem;
      // background:red;
      float: left;
      text-align: center;
      span {
        font-size: 0.5rem;
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
