import axios from 'axios'
import {URL} from '../../url'

const TIMEOUT = 5000;

export function request(config) {
  // 创建 axios 实列
  const instance = axios.create({
    baseURL: URL,
    timeout: TIMEOUT
  });

  // axios 拦截器
  // 请求拦截
  instance.interceptors.request.use(config => {
    return config;
  }, error => {
    console.log(error);
  });

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error);
  })

  // 发送网络请求
  return instance(config);
}
