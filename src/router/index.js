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
          beforeEnter: Guard.gestor,
          component: () => import('@/components/Dashboard.vue'),
          props: { page: 1 },
          alias: '/'
        },
        {
          path: 'clientes',
          name: 'clientes',
          beforeEnter: Guard.gestor,
          component: () => import('@/components/clientes/Index.vue'),
          props: { page: 2 },
        },
        {
          path: 'clientes/ver/:id',
          name: 'teste',
          beforeEnter: Guard.gestor,
          component: () => import('@/components/clientes/Show.vue'),
          props: { page: 2 },
        },
        {
          path: 'assinaturas',
          name: 'assinaturas',
          beforeEnter: Guard.gestor,
          component: () => import('@/components/assinaturas/Index.vue'),
          props: { page: 2 },
        },
        {
          path: 'parceiros',
          name: 'parceiros',
          beforeEnter: Guard.gestor,
          component: () => import('@/components/parceiros/Index.vue'),
          props: { page: 2 },
        },
        {
          path: 'parceiros/ver/:id',
          name: 'parceirosVer',
          beforeEnter: Guard.gestor,
          component: () => import('@/components/parceiros/Show.vue'),
          props: { page: 2 },
        },
        {
          path: 'parceiros/editar/:id',
          name: 'parceirosEditar',
          beforeEnter: Guard.gestor,
          component: () => import('@/components/parceiros/Edit.vue'),
          props: { page: 2 },
        },
        {
          path: 'parceiros/cadastrar',
          name: 'parceirosCadastrar',
          beforeEnter: Guard.gestor,
          component: () => import('@/components/parceiros/Create.vue'),
          props: { page: 2 },
        },
        {
          path: 'prontuarios',
          name: 'prontuarios',
          beforeEnter: Guard.parceiro,
          component: () => import('@/components/prontuarios/Index.vue'),
          props: { page: 8 },
        },
        {
          path: 'vendas',
          name: 'vendas',
          beforeEnter: Guard.parceiro,
          component: () => import('@/components/vendas/Index.vue'),
          props: { page: 8 },
        },
        {
          path: 'vendas/cadastrar',
          name: 'vendasCadastrar',
          beforeEnter: Guard.parceiro,
          component: () => import('@/components/vendas/Create.vue'),
          props: { page: 2 },
        },
        {
          path: 'vendas/editar/:id',
          name: 'vendasEditar',
          beforeEnter: Guard.parceiro,
          component: () => import('@/components/vendas/Edit.vue'),
          props: { page: 2 },
        },
        {
          path: 'planos',
          name: 'planos',
          beforeEnter: Guard.gestor,
          component: () => import('@/components/planos/Index.vue'),
          props: { page: 2 },
        },
        {
          path: 'planos/ver/:id',
          name: 'planosVer',
          beforeEnter: Guard.gestor,
          component: () => import('@/components/planos/Show.vue'),
          props: { page: 2 },
        },
        {
          path: 'profile',
          name: 'profile',
          beforeEnter: Guard.gestor,
          component: () => import('@/components/Profile.vue'),
          props: { page: 2 },
        },
        {
          path: 'tables',
          name: 'tables',
          beforeEnter: Guard.gestor,
          component: () => import('@/components/Tables.vue'),
          props: { page: 3 },
        },
        {
          path: 'maps',
          name: 'maps',
          beforeEnter: Guard.gestor,
          component: () => import('@/components/Maps.vue'),
          props: { page: 4 },
        },
        {
          path: '404',
          name: 'BadGateway',
          component: () => import('@/components/BadGateway.vue'),
          props: { page: 5 },
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/Login.vue'),
      props: { page: 6 }
    },
    {
      path: '/planos/:id/adesao',
      name: 'planoAdesao',
      component: () => import('@/components/planos/Adesao.vue'),
      props: { page: 6 }
    },
  ]
})