import service from '@/utils/service'

// 获取首页数据
export function getLayout(params?: any) {
  return service({
    url: '/api/layouts',
    method: 'get',
    params,
  })
}
