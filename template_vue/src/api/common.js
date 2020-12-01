import api from './index'
import request from '@/utils/request'
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
