import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Fenlei from "../views/Fenlei.vue";
import Geren from "../views/Geren.vue";
import Gouwuche from "../views/Gouwuche.vue";
import Mini from "../views/mini/Mini.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "/Home",
    component: Home,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Gouwuche",
    name: "Gouwuche",
    component: Gouwuche
  },
  {
    path: "/geren",
    name: "Geren",
    component: Geren
  },
  {
    path: "/fenlei",
    name: "Fenlei",
    component: Fenlei
  },
  {
    path: "/Mini",
    name: "Mini",
    component: Mini
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
