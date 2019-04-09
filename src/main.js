import Vue from "vue"
import "./lib/mui/css/mui.css"
import {Header} from "mint-ui"
import app from "./app.vue"
Vue.component(Header.name,Header);
var vm =new Vue({
    el:"#app",
    data:{},
    methods:{},
    render:function (c) {
        return c(app)
    }

})