import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

const Books = () => import(/* webpackChunkName: "books" */ '@/views/Books.vue');
const BookList = () => import(/* webpackChunkName: "books" */ '@/views/BookList.vue');
const BookDetail = () => import(/* webpackChunkName: "books" */ '@/views/BookDetail.vue');

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '',
    redirect: '/books',
  },
  {
    path: '/books',
    component: Books,
    children: [{
      path: '',
      name: 'Books',
      component: BookList,
    }, {
      path: ':isbn',
      name: 'BookDetail',
      component: BookDetail,
    }],
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
