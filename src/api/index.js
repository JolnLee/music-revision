// 用于处理数据请求相关
import Network from '@/api/network'
export const getBanner = () => Network.get('banner?type=2')
