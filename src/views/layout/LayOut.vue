<template>
  <div class="app-wrapper" :class="classObj">
    <Sidebar ></Sidebar>
    <div class="main-container"> <el-button type="primary" @click="ToggleSideBar">主要按钮</el-button></div>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar";
import {mapActions, mapState} from "vuex"
export default {
  name: "layout",
  components: { Sidebar },
  computed:{
     ...mapState("app",['sidebar']),
    classObj(){
        return {
            hideSidebar: !this.sidebar.status
        }
    }
  },
  methods: {
        ...mapActions("app",['ToggleSideBar'])
  },
};
</script>

<style scoped>
.main-container{
    margin-left: 200px;
    min-height: 100%;
    transition: margin-left .28s;
}
.hideSidebar .main-container{
    margin-left: 64px;
}
</style>