<template>
    <section id="maps">
      <mdb-row class="justify-content-center">
        <mdb-col md="5">
          <mdb-card cascade narrow class="mt-5">
            <mdb-view class="gradient-card-header blue darken-2">
              <h4 class="h4-responsive text-white">
                Login
              </h4>
            </mdb-view>
            <mdb-card-body class="text-center">
                    <form @submit.stop.prevent="login">
                        <!-- Email input -->
                        <mdb-input
                        type="email"
                        label="E-mail"
                        id="email"
                        v-model="email"
                        wrapperClass="mb-4"
                        />
                        <!-- Password input -->
                        <mdb-input
                        type="password"
                        label="Senha"
                        id="password"
                        v-model="password"
                        wrapperClass="mb-4"
                        />
                        <!-- 2 column grid layout for inline styling -->
                        <mdb-row class="mb-4">
                        <mdb-col>
                            <!-- Simple link -->
                            <a href="#!">Esqueceu a senha?</a>
                        </mdb-col>
                        </mdb-row>
                        <!-- Submit button -->
                        <mdb-btn color="primary" type="submit"> Entrar </mdb-btn>
                    </form>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
  </template>
  
  <script>
import { mdbRow, mdbCol, mdbCard, mdbView, mdbCardBody, mdbInput, mdbBtn } from 'mdbvue'    
// import axios from "axios";
import Cookie from 'js-cookie'
  
  export default {
    name: 'Maps',
    components: {
      mdbRow,
      mdbInput,
      mdbCol,
      mdbCard,
      mdbView,
      mdbCardBody,
      mdbBtn
    },
    data () {
      return {
        email: '',
        password: ''
      }
    },

    // created () {
    //   Cookie.remove('_myapp_token');
    // },

    methods: {
        login() {
          const payload = {
            email: this.email,
            password: this.password
          };

          fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access': 'application/json',
            },
            body: JSON.stringify(payload)
          }).then(response => response.json())
          .then(res => {
            if(res.access_token) {
              Cookie.set('_myapp_token', res.access_token);
              this.$router.push({ name: 'dashboard' });
            }
          })
        },
    },
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .card.card-cascade .view.gradient-card-header {
    padding: 1rem 1rem;
    text-align: center;
  }
  .card.card-cascade h3, .card.card-cascade h4 {
    margin-bottom: 0px;
  }
  </style>
  