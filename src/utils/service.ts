import axios from 'axios'
import { showToast } from 'vant'
import { useSystemStore } from '@/stores/system'

const useSystem = useSystemStore()

// 创建axios实例
const service = axios.create({
  // 服务接口请求
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 超时设置
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'x-platform': 'web',
    'x-lang': useSystem.lang,
  },
})

// 请求拦截
service.interceptors.request.use(
  config => {
    // 是否需要设置 token放在请求头
    // config.headers['Authorization'] = 'Bearer ' + getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    let data = {}
    if (config.method && config.method.toUpperCase() === 'GET') {
      data = config.params || {}
      config.params = data
    } else {
      // POST 需要塞入 data
      data = config.data || {}
      config.data = data
    }
    return config
  },
  error => {
    console.log(error)
    Promise.reject(error)
  },
)

// 响应拦截器
service.interceptors.response.use(
  (res: any) => {
    // 未设置状态码则默认成功状态
    const code = res.data.code || 200
    // 获取错误信息
    if (code === 200) {
      return Promise.resolve(res.data.data)
    }
    console.log(res)
    return Promise.reject(res.data)
  },
  error => {
    const { response, message } = error
    const msg = response?.data?.message ? response.data.message : message
    showToast(msg)
    return Promise.reject(response?.data ? response.data : error)
  },
)

export default service
