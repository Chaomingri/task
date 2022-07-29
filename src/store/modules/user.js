import { login, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth';

const user = {
    namespaced: true,
    actions: {
        Login({ commit }, userInfo) {
            const username = userInfo.username.trim()
            return new Promise((resolve, reject) => {
                login(username, userInfo.password).then(response => {
                    const data = response.data
                    const tokenStr = data.tokenHead + data.token
                    setToken(tokenStr)
                    commit('SET_TOKEN', tokenStr)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        GetInfo({ commit, state }) {
            return new Promise((resolve, reject) => {
                if (Object.keys(state.userInfo).length === 0) {
                    getInfo().then(
                        res => {
                            commit('SET_USER_INFO', res.data)
                            resolve(response.data)
                        }
                    ).catch(error => {
                        reject(error)
                    });
                }
                resolve(state.userInfo)
            })
        }
    },
    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SET_USER_INFO: (state, userInfo) => {
            state.userInfo = userInfo;
        }
    },
    state: {
        token: getToken(),
        userInfo: {}
    }
}

export default user