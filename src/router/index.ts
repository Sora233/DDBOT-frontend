import {createWebHistory, createRouter} from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import HelloElePlus from "../components/HelloElePlus.vue";
import dashboard from "../components/dashboard.vue";
import help from "../components/help.vue";
import App from "../App.vue";

const routes = [
    {
        path: '/ele',
        component: HelloElePlus,
        props: {msg: "eleme"}
    },
    {
        path: '/vue',
        component: HelloWorld,
        props: {msg: "vue"}
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard,
    },
    {
        path: '/help',
        name: 'help',
        component: help,
    },
    {
        path: '/DDBOT',
        name: 'DDBOT',
        component: {}
    }
]
const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: (to, from, savedPosition) => {
        if (to.hash) {
            return {
                selector: to.hash
            }
        } else if (savedPosition) {
            return savedPosition
        }
        return {top: 0}
    },
    routes,
});

export {
    router
};
