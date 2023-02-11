import request from './request'

function initHttp(config) {
  return () => request(config)
}

// 根据不同配置生成的一个ajax请求模块
export const Http = initHttp({
  baseURL: 'http://localhost:3000',
  timeout: 5 * 1000
})

export const Http2 = initHttp({
  baseURL: 'https://www.163.com',
  timeout: 5 * 1000
})
