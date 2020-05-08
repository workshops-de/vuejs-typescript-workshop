import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import BookList from '@/views/BookList.vue';
import BookDetail from '@/views/BookDetail.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '',
    redirect: '/books',
  },
  {
    path: '/books',
    name: 'Books',
    component: BookList,
  },
  {
    path: '/books/:isbn',
    name: 'BookDetail',
    component: BookDetail,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
