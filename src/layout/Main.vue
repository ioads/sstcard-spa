<template>
    <div class="flexible-content">
      <!--Navbar-->
      <mdb-navbar class="flexible-navbar white" light position="top" scrolling>
        <mdb-navbar-toggler>
          <mdb-navbar-nav right>
            <mdb-nav-item href="#!" waves-fixed
              ><mdb-icon fab icon="user"/>Olá, Iago</mdb-nav-item>
            <mdb-nav-item href="#!" waves-fixed @click.native="logout"
              >Sair</mdb-nav-item>
          </mdb-navbar-nav>
        </mdb-navbar-toggler>
      </mdb-navbar>
      <!--/.Navbar-->
      <!-- Sidebar -->
      <div class="sidebar-fixed position-fixed">
        <a class="logo-wrapper"
          ><img alt="" class="img-fluid" src="../assets/logo_sstcard.png"
        /></a>
        <mdb-list-group class="list-group-flush">
          <router-link to="/" @click.native="activeItem = 1" v-if="role == 1">
            <mdb-list-group-item
              :action="true"
              :class="activeItem === 1 && 'active'"
              ><mdb-icon
                icon="chart-pie"
                class="mr-3"
              />Dashboard</mdb-list-group-item
            >
          </router-link>
          <router-link to="/clientes" @click.native="activeItem = 2" v-if="role == 1">
            <mdb-list-group-item
              :action="true"
              :class="activeItem === 2 && 'active'"
              ><mdb-icon icon="users" class="mr-3" />Clientes</mdb-list-group-item
            >
          </router-link>
          <router-link to="/planos" @click.native="activeItem = 3" v-if="role == 1">
            <mdb-list-group-item
              :action="true"
              :class="activeItem === 3 && 'active'"
              ><mdb-icon icon="table" class="mr-3" />Planos</mdb-list-group-item
            >
          </router-link>
          <router-link to="/parceiros" @click.native="activeItem = 4" v-if="role == 1">
            <mdb-list-group-item
              :action="true"
              :class="activeItem === 4 && 'active'"
              ><mdb-icon icon="handshake" class="mr-3" />Parceiros</mdb-list-group-item
            >
          </router-link>
          <!-- <router-link to="/pagamentos" @click.native="activeItem = 5">
            <mdb-list-group-item
              :action="true"
              :class="activeItem === 5 && 'active'"
              ><mdb-icon icon="credit-card" class="mr-3" />Pagamentos</mdb-list-group-item
            >
          </router-link> -->
          <router-link to="/relatorios" @click.native="activeItem = 6" v-if="role == 1">
            <mdb-list-group-item
              :action="true"
              :class="activeItem === 6 && 'active'"
              ><mdb-icon icon="file-pdf" class="mr-3" />Relatórios</mdb-list-group-item
            >
          </router-link>
          <router-link to="/vendas" @click.native="activeItem = 7" v-if="role == 2">
            <mdb-list-group-item
              :action="true"
              :class="activeItem === 7 && 'active'"
              ><mdb-icon icon="cash-register" class="mr-3" />Vendas</mdb-list-group-item
            >
          </router-link>
          <router-link to="/prontuarios" @click.native="activeItem = 8"  v-if="role == 2">
            <mdb-list-group-item
              :action="true"
              :class="activeItem === 8 && 'active'"
              ><mdb-icon icon="search" class="mr-3" />Prontuários</mdb-list-group-item
            >
          </router-link>
        </mdb-list-group>
      </div>
      <!-- /Sidebar  -->
      <main>
        <div class="mt-5 p-5">
          <router-view :key="$route.fullPath"></router-view>
        </div>
        <ftr color="primary-color-dark" class="text-center font-small darken-2">
          <hr class="my4" />
          <div class="pb-4">
            <a href="#"><mdb-icon fab icon="facebook-square" class="mr-3"/></a>
            <a href="#"><mdb-icon fab icon="twitter" class="mr-3"/></a>
            <a href="#"><mdb-icon fab icon="youtube" class="mr-3"/></a>
            <a href="#"><mdb-icon fab icon="instagram" class="mr-3"/></a>
          </div>
          <p class="footer-copyright mb-0 py-3 text-center">
            &copy; {{ new Date().getFullYear() }} Copyright:
            <a href="#"> sstcard.com </a>
          </p>
        </ftr>
      </main>
    </div>
  </template>
  
  <script>
  import {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbIcon,
    mdbListGroup,
    mdbListGroupItem,
    mdbFooter,
    waves
  } from "mdbvue";
  import Cookie from 'js-cookie'

  export default {
    name: "AdminTemplate",
    components: {
      mdbNavbar,
      mdbNavItem,
      mdbNavbarNav,
      mdbNavbarToggler,
      mdbListGroup,
      mdbListGroupItem,
      mdbIcon,
      ftr: mdbFooter
    },
    data() {
      return {
        teste: '/dashboard',
        activeItem: 1,
        role: ''
      };
    },
    methods: {
      logout() {
        Cookie.remove('_myapp_token');
        Cookie.remove('_myapp_role');
        this.$router.push({ name: 'login' })
      }
    },
    beforeMount() {
      this.activeItem = this.$route.matched[0].props.default.page;
    },
    mounted() {
      this.role = Cookie.get('_myapp_role');
    },
    mixins: [waves]
  };
  </script>
  
  <style>
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
  .navbar-light .navbar-brand {
    margin-left: 15px;
    color: #2196f3 !important;
    font-weight: bolder;
  }
  </style>
  
  <style scoped>
  main {
    background-color: #ededee;
  }
  .flexible-content {
    transition: padding-left 0.3s;
    padding-left: 270px;
  }
  .flexible-navbar {
    transition: padding-left 0.5s;
    padding-left: 270px;
  }
  .sidebar-fixed {
    left: 0;
    top: 0;
    height: 100vh;
    width: 270px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    z-index: 1050;
    background-color: #fff;
    padding: 1.5rem;
    padding-top: 0;
  }
  .sidebar-fixed .logo-wrapper img {
    width: 100%;
    padding: 2.5rem;
  }
  .sidebar-fixed .list-group-item {
    display: block !important;
    transition: background-color 0.3s;
  }
  .sidebar-fixed .list-group .active {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border-radius: 5px;
  }
  @media (max-width: 1199.98px) {
    .sidebar-fixed {
      display: none;
    }
    .flexible-content {
      padding-left: 0;
    }
    .flexible-navbar {
      padding-left: 10px;
    }
  }
  </style>