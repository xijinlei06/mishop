// //存储项目中所有的接口
// import $http from "./request"; //调用request里面数据

// //开始封装接口
// //首页轮播图
// export const homecasual = () => $http("/api/homecasual");
// // 首页导航数据
// export const zuohua = () => $http("/api/homenav");
// //首页商品请求地址
// export const houlist = () => $http("/api/homeshoplist");
// //首页下滑数据
// export const Shouye = val =>
//   $http("/api/homegooddetail", {
//     goods_id: val
//   });
// // params:{
// //   goods_id:this.msg
// // }
// //搜索页
// export const sou = () => $http("/api/searchgoods");
// //验证码
// export const yanzheng = ceol =>
//   $http("/api/send_code", {
//     phone: ceol
//   });
// //登录操作
// export const denglu = (ceol, code) =>
//   $http(
//     "/api/login_code",
//     {
//       phone: ceol,
//       code: code
//     },
//     "POST"
//   );

// //推荐数据页
// export const recommendshoplist = params =>
//   $http("/api/recommendshoplist", params);
// //添加到购物车
// export const gouwu = params => $http("/api/add_shop_cart", params, "POST");
// //查询购物车内容
// export const chagou = () => $http("/api/cart_goods");
// //删除购物车数据
// export const shanchu = goods_id => $http("/api/del_cart_goods", goods_id);
