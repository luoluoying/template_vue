// import qs from 'qs'
// axios
import request from '@/utils/request'
// home api

export function getMemberStatus(data) {
  return request({
    url: '/wx/member/front/getmemberstatus',
    method: 'post',
    data
  })
}
