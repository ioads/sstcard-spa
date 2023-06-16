<template>
    <section id="tables">
      <mdb-row>
        <mdb-col md="12">
          <mdb-card cascade narrow class="mt-2">
            <mdb-view class="gradient-card-header blue darken-2">
              <h4 class="h4-responsive text-white">Clientes</h4>
            </mdb-view>
            <mdb-card-body>
              <mdb-btn class="btn-sm float-right" color="warning" @click="exportarPdf()" type="button"><mdb-icon icon="download" class="mr-3" /> Exportar PDF </mdb-btn>
              <mdb-btn class="btn-sm float-right" color="success" @click="exportarExcel()" type="button"><mdb-icon icon="download" class="mr-3" /> Exportar Excel </mdb-btn>
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
  import { mdbIcon, mdbRow, mdbCol, mdbCard, mdbView, mdbCardBody, mdbBtn } from 'mdbvue'
  import { axiosGet, axiosPut } from '../../services/http'
  import axios from 'axios';
  
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
        },
        exportarExcel() {
          axios.get(process.env.VUE_APP_API_URL + '/export/excel/clientes',
              {responseType: 'arraybuffer'})
          .then(response => {
            console.log(response.data)
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement('a');
                fileLink.href = fileURL;
                fileLink.setAttribute('download', 'clientes.xlsx');
              document.body.appendChild(fileLink);
              fileLink.click();
            })
        },
        exportarPdf() {
          axios.get(process.env.VUE_APP_API_URL + '/export/pdf/clientes',
              {responseType: 'blob'})
          .then(response => {
            var fileURL = window.URL.createObjectURL(new Blob([response.data], {type: 'application/pdf'}));
            var fileLink = document.createElement('a');
            fileLink.href = fileURL;
            fileLink.setAttribute('download', 'file.pdf');
            document.body.appendChild(fileLink);
            fileLink.click();
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
  