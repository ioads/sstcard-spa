<template>
    <section id="tables">
      <mdb-row>
        <mdb-col md="12">
          <mdb-card cascade narrow class="mt-2">
            <mdb-view class="gradient-card-header blue darken-2">
              <h4 class="h4-responsive text-white">Clientes</h4>
            </mdb-view>
            <mdb-card-body>
              <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(cliente,i) in clientes" :key="i">
                      <th scope="row">{{ i+1 }}</th>
                      <td>{{ cliente.nome }}</td>
                      <td>{{ cliente.celular }}</td>
                      <td>{{ cliente.status }}</td>
                      <td>Ver</td>
                    </tr>
                </tbody>
              </table>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
  </template>
  
  <script>
  import { mdbRow, mdbCol, mdbCard, mdbView, mdbCardBody } from 'mdbvue'
  
  export default {
    name: 'Tables',
    components: {
      mdbRow,
      mdbCol,
      mdbCard,
      mdbView,
      mdbCardBody
    },
    data () {
      return {
        clientes: []
      }
    },
    methods: {
        list() {
          fetch('http://127.0.0.1:8000/api/clientes', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Access': 'application/json',
            },
            // body: JSON.stringify(payload)
          }).then(response => response.json())
          .then(res => {
            this.clientes = res
          })
        },
    },
    mounted() {
      this.list()
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .card.card-cascade .view.gradient-card-header {
    padding: 1rem 1rem;
    text-align: center;
  }
  .card.card-cascade h3,
  .card.card-cascade h4 {
    margin-bottom: 0;
  }
  </style>
  