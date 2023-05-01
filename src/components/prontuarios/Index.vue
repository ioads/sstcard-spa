<template>
    <section id="tables">
      <mdb-row>
        <mdb-col md="12">
          <mdb-card cascade narrow class="mt-2">
            <mdb-view class="gradient-card-header blue darken-2">
              <h4 class="h4-responsive text-white">Consultar número de prontuário</h4>
            </mdb-view>
            <mdb-card-body style="font-size: large;">
                <form @submit.stop.prevent="search">
                    <mdb-input
                    type="text"
                    label="Digite o número do prontuário"
                    id="numero_prontuario"
                    v-model="numero_prontuario"
                    wrapperClass="mb-4"
                    />
                    <mdb-btn color="primary" type="submit"> Consultar <mdb-icon style="padding-left: 15px"  icon="search"/></mdb-btn>
                </form>          
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
  </template>
  
  <script>
  import { mdbRow, mdbCol, mdbCard, mdbView, mdbCardBody, mdbInput, mdbBtn, mdbIcon } from 'mdbvue'
  import { axiosGet } from '../../services/http'
  
  export default {
    name: 'Tables',
    components: {
      mdbRow,
      mdbCol,
      mdbCard,
      mdbView,
      mdbCardBody,
      mdbInput,
      mdbBtn,
      mdbIcon
    },
    data () {
      return {
        numero_prontuario: ''
      }
    },
    methods: {
      search() {
          axiosGet('clientes/prontuario/'+this.numero_prontuario).then((response) => {
              alert(response.data)
          });
        },
    },
    mounted() {
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
  .title-info {
    font-size: large;
    font-weight: bold;
  }
  </style>
  