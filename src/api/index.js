// 用于处理数据请求相关
import Network from '@/api/network'
export const getBanner = () => Network.get('banner?type=2')
export const getPersonalized = () => Network.get('personalized', {
  limit: 6
})
export const getAlbum = () => Network.get('/album/newest')
export const getNewSong = () => Network.get('personalized/newsong', {
  limit: 10
})
