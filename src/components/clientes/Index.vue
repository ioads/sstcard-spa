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
                      <td>{{ cliente.status == 0 ? 'Inativo' : 'Ativo' }}</td>
                      <td>
                        <a :href="'/clientes/ver/'+ cliente.id" title="Visualizar"><mdb-icon icon="eye" class="mr-3" /></a>
                        <a @click="updateStatus(cliente.id);" title="Inativar" v-if="cliente.status == 1"><mdb-icon icon="ban" class="mr-3" /></a>
                        <a @click="updateStatus(cliente.id);" title="Ativar" v-else><mdb-icon icon="check-circle" class="mr-3" /></a>
                      </td>
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
  import { mdbIcon, mdbRow, mdbCol, mdbCard, mdbView, mdbCardBody } from 'mdbvue'
  import { axiosGet, axiosPut } from '../../services/http'
  
  export default {
    name: 'Tables',
    components: {
      mdbRow,
      mdbCol,
      mdbCard,
      mdbView,
      mdbCardBody,
      mdbIcon,
    },
    data () {
      return {
        clientes: []
      }
    },
    methods: {
        list() {
          axiosGet('clientes').then((response) => {
            this.clientes = response
          });
        },
        updateStatus(id) {
          axiosPut('clientes/status', id).then(() => {
            this.$forceUpdate()
          });
        }
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
  