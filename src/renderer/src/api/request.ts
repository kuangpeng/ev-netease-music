import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosError,
  AxiosResponse,
  AxiosInstance
} from 'axios'
import qs from 'qs'
// 提示语功能引入
// import { Toast } from 'vant'

export interface HttpOption {
  url: string;
  data?: unknown;
  method?: string;
  headers?: unknown;
}

export type BaseResponse = {
  code: number;
}

export type HttpRequestMethod = <T>(url: string, data?: unknown) => Promise<T & BaseResponse>

const toLogin = (): void => {
  // 跳转登录
}

const errorHandle = (status: number, other?: string): void => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin()
      break
    // 403 token过期
    // 清除token并跳转登录页
    case 403:
      // ...
      break
    // 404请求不存在
    case 404:
      // ...
      break
    default:
      console.log(other)
  }
}

// 修改请求配置config,添加请求头
// config.headers.token = '' ...
const requestHandle = (config: AxiosRequestConfig): AxiosRequestConfig => {
  // do something
  return config
}

const responseHandle = (res: AxiosResponse): AxiosResponse => {
  const result = res.data
  // TODO: 判断返回结果标志位，成功则返回结果数据
  // if () {
  //   return res
  // } else {
  //   this.$message.error(res.message || 'error')
  //   return Promise.reject(new Error(res || 'Error'))
  // }
  return result
}

// axios请求拦截处理
const interceptorsRequest = {
  onFullfilled: (config: AxiosRequestConfig): AxiosRequestConfig => {
    return requestHandle(config)
  },
  onRejected: (error: AxiosError): Promise<AxiosError> => {
    return Promise.reject(error)
  }
}

// axios响应拦截处理
const interceptorsResponse = {
  onFullfilled: (response: AxiosResponse): AxiosResponse => {
    return responseHandle(response)
  },
  onRejected: (error: AxiosError): Promise<AxiosError> => {
    // 处理网络出错，服务器出错，对不同情况进行处理，如：401、404、503
    if (error.response?.status) {
      errorHandle(error.response.status)
      return Promise.reject(error)
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      if (!window.navigator.onLine) {
        // 断网处理

      }
      return Promise.reject(error)
    }
  }
}

const Get = (service: AxiosInstance): HttpRequestMethod => {
  return (url, data) => service({
    url,
    method: 'get',
    params: data
  })
}

const Post = (service: AxiosInstance): HttpRequestMethod=> {
  return (url, data) => service({
    url,
    method: 'post',
    data
  })
}

const PostForm = (service: AxiosInstance): HttpRequestMethod => {
  return (url, data) => service({
    url,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify(data)
  })
}

// 请求模块生成函数，根据不同配置生成不同axios实体
const request = (config: AxiosRequestConfig): {
  Get: HttpRequestMethod;
  Post: HttpRequestMethod;
  PostForm: HttpRequestMethod;
} => {
  const baseConfig = {
    baseURL: '',
    timeout: 5 * 1000
  }
  const instance = axios.create(Object.assign({}, baseConfig, config))
  instance.interceptors.request.use(interceptorsRequest.onFullfilled, interceptorsRequest.onRejected)
  instance.interceptors.response.use(interceptorsResponse.onFullfilled, interceptorsResponse.onRejected)

  return {
    Get: Get(instance),
    Post: Post(instance),
    PostForm: PostForm(instance)
  }
}

export default request
