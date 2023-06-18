<template>
    <section id="tables">    
      <mdb-row>
        <mdb-col md="12">
          <mdb-card cascade narrow class="mt-2">
            <mdb-view class="gradient-card-header blue darken-2">
              <h4 class="h4-responsive text-white">Vendas</h4>
            </mdb-view>
            <mdb-card-body>
            <mdb-btn class="btn-sm float-right" color="primary" @click="cadastrar()" type="button"><mdb-icon icon="plus" class="mr-3" /> Cadastrar </mdb-btn>
              <mdb-btn class="btn-sm float-right" color="warning" @click="exportarPdf()" type="button"><mdb-icon icon="download" class="mr-3" /> Exportar PDF </mdb-btn>
              <mdb-btn class="btn-sm float-right" color="success" @click="exportarExcel()" type="button"><mdb-icon icon="download" class="mr-3" /> Exportar Excel </mdb-btn>
              <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Cliente</th>
                        <th>Valor Bruto</th>
                        <th>Valor do Desconto</th>
                        <th>Valor Líquido</th>
                        <th>Data da Venda</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(venda,i) in vendas" :key="i">
                      <th scope="row">{{ i+1 }}</th>
                      <td>{{ venda.cliente.nome }}</td>
                      <td>{{ venda.valor_bruto }}</td>
                      <td>{{ venda.valor_desconto }}</td>
                      <td>{{ venda.valor_liquido }}</td>
                      <td>{{ venda.data }}</td>
                      <td>
                        <a :href="'/vendas/ver/'+ venda.id" title="Visualizar"><mdb-icon icon="eye" class="mr-3" /></a>
                        <a :href="'/vendas/editar/'+ venda.id" title="Editar"><mdb-icon icon="edit" class="mr-3" /></a>
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
  import { mdbIcon, mdbRow, mdbCol, mdbCard, mdbView, mdbCardBody, mdbBtn } from 'mdbvue'
  import { axiosGet, axiosExcel, axiosPdf } from '../../services/http'
  
  export default {
    name: 'Tables',
    components: {
      mdbRow,
      mdbCol,
      mdbCard,
      mdbView,
      mdbCardBody,
      mdbIcon,
      mdbBtn
    },
    data () {
      return {
        vendas: []
      }
    },
    methods: {
        list() {
          axiosGet('vendas').then((response) => {
            this.vendas = response
          });
        },
        cadastrar() {
            this.$router.push({ name: 'vendasCadastrar' })
        },
        exportarExcel() {
          axiosExcel('/export/excel/vendas', 'vendas').then((response) => {
            console.log(response)
          });          
        },
        exportarPdf() {
          axiosPdf('/export/pdf/vendas', 'vendas').then((response) => {
            console.log(response)
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
  