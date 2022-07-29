import axios from 'axios'
import { Message } from 'element-ui'

const instance = axios.create({
    baseURL: "http://localhost:9090", // api的base_url
    timeout: 5000 // 请求超时时间
})

instance.interceptors.request.use(config => {
    // if (store.getters.token) {
    //   config.headers['Authorization'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    return config
}, error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
})
// respone拦截器
instance.interceptors.response.use(
    response => {
        /**
        * code为非200是抛错 可结合自己业务进行修改
        */
        const res = response.data
        if (res.code !== 200) {
            Message({
                message: res.message,
                type: 'error',
                duration: 3 * 1000
            })
            return Promise.reject('error')
        } else {
            return response.data
        }
    },
    error => {
        console.log('err' + error)// for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 3 * 1000
        })
        return Promise.reject(error)
    }
)

export default instance
