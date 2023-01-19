import request from './request'

// 根据不同配置生成的一个ajax请求模块
export const http = request({
  baseURL: 'http://localhost:3000',
  timeout: 5 * 1000
})

export const http2 = request({
  baseURL: 'https://www.163.com',
  timeout: 5 * 1000
})
