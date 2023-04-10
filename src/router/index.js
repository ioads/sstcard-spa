import Vue from 'vue';
import Router from 'vue-router';
import Guard from '../services/middleware'


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/layout/Main.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          beforeEnter: Guard.auth,
          component: () => import('@/components/Dashboard.vue'),
          props: { page: 1 },
          alias: '/'
        },
        {
          path: 'clientes',
          name: 'clientes',
          component: () => import('@/components/clientes/Index.vue'),
          props: { page: 2 },
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('@/components/Profile.vue'),
          props: { page: 2 },
        },
        {
          path: 'tables',
          name: 'tables',
          component: () => import('@/components/Tables.vue'),
          props: { page: 3 },
        },
        {
          path: 'maps',
          name: 'maps',
          component: () => import('@/components/Maps.vue'),
          props: { page: 4 },
        },
        {
          path: '404',
          name: 'BadGateway',
          component: () => import('@/components/BadGateway.vue'),
          props: { page: 5 },
        },
        // {
        //   path: '*',
        //   name: 'BadGateway',
        //   redirect: '/404',
        //   props: { page: 5 },
        // },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/Login.vue'),
      props: { page: 6 }
    },
  ]
})