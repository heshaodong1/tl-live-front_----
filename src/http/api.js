import request from './request'
import qs from 'qs'

// 发送验证码
export function sendSMS(data){
    return request.port('/user/sendSMS', qs.stringify(data))
}

// 根据ID查询用户信息
export function queryUserById(data){
    return request.post('/user/queryUser', qs.stringify(data))
}

// 用户登录请求
export function mobileLogin(data){
    // 这种传参，springBoot需要使用@RequestBoyd接受参数
    return request({
        url: '/user/mobileLogin',
        method: 'post',
        data
    })
}