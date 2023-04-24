<template>
    <section id="tables">
      <mdb-row>
        <mdb-col md="12">
          <mdb-card cascade narrow class="mt-2">
            <mdb-view class="gradient-card-header blue darken-2">
              <h4 class="h4-responsive text-white">Parceiros</h4>
            </mdb-view>
            <mdb-card-body>
              <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Razão Social</th>
                        <th>CNPJ</th>
                        <th>Telefone</th>
                        <th>Status</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(parceiro,i) in parceiros" :key="i">
                      <th scope="row">{{ i+1 }}</th>
                      <td>{{ parceiro.razao_social }}</td>
                      <td>{{ parceiro.cnpj }}</td>
                      <td>{{ parceiro.celular }}</td>
                      <td>{{ parceiro.status == 0 ? 'Inativo' : 'Ativo' }}</td>
                      <td>
                        <a :href="'/parceiros/ver/'+ parceiro.id" title="Visualizar"><mdb-icon icon="eye" class="mr-3" /></a>
                        <a @click="updateStatus(parceiro.id);" title="Inativar" v-if="parceiro.status == 1"><mdb-icon icon="ban" class="mr-3" /></a>
                        <a @click="updateStatus(parceiro.id);" title="Ativar" v-else><mdb-icon icon="check-circle" class="mr-3" /></a>
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
        parceiros: []
      }
    },
    methods: {
        list() {
          fetch('http://127.0.0.1:8000/api/parceiros', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Access': 'application/json',
            },
          }).then(response => response.json())
          .then(res => {
            this.parceiros = res
          })
        },
        updateStatus(id) {
          fetch('http://127.0.0.1:8000/api/parceiros/status/'+id, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
              'Access': 'application/json',
            },
          }).then(response => {
            console.log(response)
            this.$forceUpdate()
          })
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
  