//对axios的二次封装
//第一步导入
import axios from "axios";
// import { reject } from "core-js/fn/promise";

//基础配置
// axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.timeout = 100000;

//网络请求拦截器

// 请求拦截器
axios.interceptors.request.use(
  //config:配置

  function(config) {
    // var token = sessionStorage.getItem("token");
    // config.haeders.Authorization = token;
    // console.log(config);
    return config;
  },
  function(error) {
    // console.log(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  function(response) {
    console.log(response);
    return response;
  },
  function(error) {
    console.log(JSON.parse(JSON.stringify(error)).response.status);
    return Promise.reject(error);
  }
);
//请求方式进行一次封装
function $http(url, data = {}, method = "GET") {
  let promise = null;
  if (method === "GET") {
    promise = axios.get(url, {
      params: data
    });
  } else if (method === "POST") {
    promise = axios.post(url, data);
  }
  return promise;
  //     let pormise = null
  //   Promise = new Promise(fucntion(resolve,reject) {
  //     if(method === "GET"){
  //       axios.get(url, {
  //             params: data
  //           }).then(resoolve().catch(reject))
  //     }else if(method === "POST"){
  //       axios.post(url, data);
  //     }
  //   })
  // promise.then(resolve()).catch(reject())
}

export default $http;
