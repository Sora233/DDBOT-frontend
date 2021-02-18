import {createWebHistory, createRouter} from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import HelloElePlus from "../components/HelloElePlus.vue";
import dashboard from "../components/dashboard.vue";

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
        component: dashboard,
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export {
    router
};
