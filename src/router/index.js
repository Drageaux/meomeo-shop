import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Home from '@/components/Home';

Vue.use(Router)

let router = new Router({
    routes: [
        {
            path: '/docs',
            name: 'Docs',
            component: Hello
        },
        {
            path: '/',
            name: 'Home',
            meta: {title: 'Trang Chủ'},
            component: Home
        }
    ]
})

router.beforeEach((to, from, next) => {
    window.document.title = to.meta.title ? to.meta.title + ' | Meomeo Shop' : 'Meomeo Shop';
    next()
})

export default router;
