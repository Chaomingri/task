import VueRouter from "vue-router";

export default new VueRouter({
    routes: [
        {path: '*', redirect: '/404', hidden: true},
        {path:"/login",component:()=>import("@/views/login/index")},
        {path:"/404",component:()=>import("@/views/404"),hidden: true}
]
})
