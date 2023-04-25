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
          beforeEnter: Guard.auth,
          component: () => import('@/components/clientes/Index.vue'),
          props: { page: 2 },
        },
        {
          path: 'clientes/ver/:id',
          name: 'teste',
          beforeEnter: Guard.auth,
          component: () => import('@/components/clientes/Show.vue'),
          props: { page: 2 },
        },
        {
          path: 'parceiros',
          name: 'parceiros',
          beforeEnter: Guard.auth,
          component: () => import('@/components/parceiros/Index.vue'),
          props: { page: 2 },
        },
        {
          path: 'parceiros/ver/:id',
          name: 'parceirosVer',
          beforeEnter: Guard.auth,
          component: () => import('@/components/parceiros/Show.vue'),
          props: { page: 2 },
        },
        {
          path: 'parceiros/editar/:id',
          name: 'parceirosEditar',
          beforeEnter: Guard.auth,
          component: () => import('@/components/parceiros/Edit.vue'),
          props: { page: 2 },
        },
        {
          path: 'parceiros/cadastrar',
          name: 'parceirosCadastrar',
          beforeEnter: Guard.auth,
          component: () => import('@/components/parceiros/Create.vue'),
          props: { page: 2 },
        },
        {
          path: 'profile',
          name: 'profile',
          beforeEnter: Guard.auth,
          component: () => import('@/components/Profile.vue'),
          props: { page: 2 },
        },
        {
          path: 'tables',
          name: 'tables',
          beforeEnter: Guard.auth,
          component: () => import('@/components/Tables.vue'),
          props: { page: 3 },
        },
        {
          path: 'maps',
          name: 'maps',
          beforeEnter: Guard.auth,
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