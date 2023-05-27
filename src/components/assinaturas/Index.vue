<template>
    <section id="tables">
      <mdb-row>
        <mdb-col md="12">
          <mdb-card cascade narrow class="mt-2">
            <mdb-view class="gradient-card-header blue darken-2">
              <h4 class="h4-responsive text-white">Assinaturas</h4>
            </mdb-view>
            <mdb-card-body>
              <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>CPF</th>
                        <th>Cliente</th>
                        <th>Plano</th>
                        <th>Adesão</th>
                        <th>Status da Transação</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(assinatura,i) in assinaturas" :key="i">
                      <th scope="row">{{ i+1 }}</th>
                      <td>{{ formatCpf(assinatura.customer.document_number) }}</td>
                      <td>{{ assinatura.customer.name }}</td>
                      <td>{{ assinatura.plan.name }}</td>
                      <td>{{ formatDate(assinatura.plan.date_created) }}</td>
                      <td>{{ assinatura.status == 'paid' ? 'Pago' : assinatura.status }}</td>
                      <td>
                        <a :href="'/assinaturas/ver/'+ assinatura.id" title="Visualizar"><mdb-icon icon="eye" class="mr-3" /></a>
                        <a @click="updateStatus(assinatura.id);" title="Inativar" v-if="assinatura.status == 1"><mdb-icon icon="ban" class="mr-3" /></a>
                        <a @click="updateStatus(assinatura.id);" title="Ativar" v-else><mdb-icon icon="check-circle" class="mr-3" /></a>
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
  import { formatDate, formatCpf } from '../../utils/format'
  
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
        assinaturas: []
      }
    },
    methods: {
        list() {
          axiosGet('assinaturas').then((response) => {
            this.assinaturas = response
            console.log(this.assinaturas)
          });
        },
        updateStatus(id) {
          axiosPut('clientes/status', id).then(() => {
            this.$forceUpdate()
          });
        },
        formatDate(value) {
            return formatDate(value);
        },
        formatCpf(value) {
            return formatCpf(value);
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
  