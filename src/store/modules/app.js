import { setStore, getStore } from "@/utils/localStore"

const app = {
    namespaced: true,
    actions: {
        ToggleSideBar: ({ commit }) => {
            commit('TOGGLE_SIDEBAR')
        },
    },
    mutations: {
        TOGGLE_SIDEBAR: state => {
            if (state.sidebar.status) {
                setStore('sidebarStatus', 1)
            } else {
                setStore('sidebarStatus', 0)
            }
            state.sidebar.status = !state.sidebar.status
        },
    },
    state: {
        sidebar: {
            status: !getStore("sidebarStatus")
        },
    }
}

export default app