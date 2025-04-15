import axios from 'axios'

const service = axios.create({
    timeout: 5000
})

function getCookie(name){
    let cookies = document.cookie.split(';');
    name = name.trim();
    for(let i=0;i<cookies.length;i++){
        let cookie = cookies[i].split('=');
        let cookieName = cookie[0].trim();
        if(cookieName == name){
            return cookie[1];
        }
    }
    return null;
}

service.interceptors.request.use(
    config => {
        config.headers['token'] = getCookie['tltk']
        return config
    },
    error => {
        console.log('Request Error', error);
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    response => {
        if(response.status === 200 && response.data){
            if(response.data.code && response.data.code === 200){
                return Promise.resolve(response.data.data)
            }else{
                console.log('服务器错误，返回消息为：', response.data.data);
                return {'error': response.data.data}
            }
        }else{
            console.error('请求错误，状态码为：', response.status)
            return {'error': response.data.data}
        }
    },

    error => {
        console.log('Resonse Error:', error);
        return Promise.reject(error)
    }
)

export default service