import VueRouter from "vue-router";

export default new VueRouter({
    routes: [
        {path: '*', redirect: '/404', hidden: true}
    // {
    //     path: "",
    //     component:
    // }
]
})
