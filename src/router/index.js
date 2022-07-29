import VueRouter from "vue-router";

export default new VueRouter({
    routes: [
        {path:"/login",component:()=>import("@/views/login/index"),hidden: true},
        {path:"/404",component:()=>import("@/views/404"),hidden: true},
        {path:"",component:()=>import("@/views/layout/LayOut")},
        {path: '*', redirect: '/404', hidden: true}
]
})
