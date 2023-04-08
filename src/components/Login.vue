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
                    <form>
                        <!-- Email input -->
                        <mdb-input
                        type="email"
                        label="E-mail"
                        id="form1Email"
                        v-model="email"
                        wrapperClass="mb-4"
                        />
                        <!-- Password input -->
                        <mdb-input
                        type="password"
                        label="Senha"
                        id="form1Password"
                        v-model="password"
                        wrapperClass="mb-4"
                        />
                        <!-- 2 column grid layout for inline styling -->
                        <mdb-row class="mb-4">
                        <mdb-col class="d-flex justify-content-center">
                            <!-- Checkbox -->
                            <MDBCheckbox
                            label="Remember me"
                            id="form1LoginCheck"
                            v-model="form1LoginCheck"
                            wrapperClass="mb-3 mb-md-0"
                            />
                        </mdb-col>
                        <mdb-col>
                            <!-- Simple link -->
                            <a href="#!">Esqueceu a senha?</a>
                        </mdb-col>
                        </mdb-row>
                        <!-- Submit button -->
                        <mdb-btn color="primary" block> Entrar </mdb-btn>
                    </form>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
  </template>
  
  <script>
  import { mdbRow, mdbCol, mdbCard, mdbView, mdbCardBody, mdbInput, mdbBtn } from 'mdbvue'
  
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
      }
    }
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
  