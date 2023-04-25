<template>
    <section id="tables">
      <mdb-row>
        <mdb-col md="12">
          <mdb-card cascade narrow class="mt-2">
            <mdb-view class="gradient-card-header blue darken-2">
              <h4 class="h4-responsive text-white">Consultar número de prontuário</h4>
            </mdb-view>
            <mdb-card-body style="font-size: large;">
                <form @submit.stop.prevent="save">
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
        save() {
          fetch('http://127.0.0.1:8000/api/clientes/prontuario/'+this.numero_prontuario, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Access': 'application/json',
            },
          }).then(response => response.json())
          .then(res => {
            // if(res.success == 'true') {
                alert(res.data)
            // }
          })
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
  