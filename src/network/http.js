import axios from "axios";

/****** 创建axios实例 ******/

const $http = axios.create({
  baseURL: 'http://127.0.0.1:3004/',  // api的base_url
  headers: {
    'token': window.localStorage['token']
  },
  timeout: 5000  // 请求超时时间
});


export default $http;

