import api from './index'
import request from '@/utils/request'
// import qs from 'qs'
// home api

export function getCaptcha(params) {
  return request({
    url: api.GetCaptcha,
    method: 'get',
    params
  })
}

export function sendMessage(data) {
  return request({
    url: api.SendMessage,
    method: 'post',
    data
  })
}

// axios自动处理content-type: multipart/form-data
export function Upload(formData) {
  return request.post(
    '/wx/member/active/front/uploadidcphoto',
    formData
  )
  // 测试 手动设置content-type
  // const data = qs.stringify(formData)
  // console.log(data)
  // return request({
  //   url: '/wx/member/active/front/uploadidcphoto',
  //   method: 'post',
  //   // formData,
  //   data,
  //   headers: { 'content-type': 'multipart/form-data' }
  // })
}
