import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import App from '../App.vue';

Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    //path: '/',
    path: '/',
    name: 'App',
    component: App,
  },
  {
    //path: '/',
    path: '/home/:userName?',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/doctors',
    name: 'doctors',
    component: () => import(/* webpackChunkName: "doctors" */ '../views/Doctors.vue'),
  },
  {
    path: '/doctorInsert',
    name: 'doctorInsert',
    component: () => import(/* webpackChunkName: "doctorInsert" */ '../views/DoctorInsert.vue'),
  },
  {
    path: '/testItems',
    name: 'testItems',
    component: () => import(/* webpackChunkName: "testItems" */ '../views/TestItems.vue'),
  },
  {
    path: '/injectProvide',
    name: 'injectProvide',
    component: () => import(/* webpackChunkName: "injectProvide" */ '../views/InjectProvide.vue'),
  },
  {
    path: '/logon',
    name: 'logon',
    component: () => import(/* webpackChunkName: "logon" */ '../views/Logon.vue'),
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import(/* webpackChunkName: "logout" */ '../views/Logout.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
