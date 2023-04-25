<template>
    <section id="tables">
      <mdb-row>
        <mdb-col md="12">
          <mdb-card cascade narrow class="mt-2">
            <mdb-view class="gradient-card-header blue darken-2">
              <h4 class="h4-responsive text-white">Cadastrar Venda</h4>
            </mdb-view>
            <mdb-card-body style="font-size: large;">
                <form @submit.stop.prevent="save">
                    <mdb-input
                    type="text"
                    label="Código do Prontuário do Cliente"
                    id="numero_prontuario"
                    v-model="numero_prontuario"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Valor da Venda (sem descontos)"
                    id="valor_bruto"
                    v-model="valor_bruto"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Valor do Desconto"
                    id="valor_desconto"
                    v-model="valor_desconto"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Valor Final"
                    id="valor_liquido"
                    v-model="valor_liquido"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="date"
                    label="Data da Venda"
                    id="data"
                    v-model="data"
                    wrapperClass="mb-4"
                    />
                    <mdb-btn color="primary" type="submit"> Salvar </mdb-btn>
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
    name: 'Tables',
    components: {
      mdbRow,
      mdbCol,
      mdbCard,
      mdbView,
      mdbCardBody,
      mdbInput,
      mdbBtn
    },
    data () {
      return {
        numero_prontuario: '',
        valor_bruto: '',
        valor_desconto: '',
        valor_liquido: '',
        data: ''
      }
    },
    methods: {
        save() {
          let payload = {
            numero_prontuario: this.numero_prontuario,
            venda: {
                valor_bruto: this.valor_bruto,
                valor_desconto: this.valor_desconto,
                valor_liquido: this.valor_liquido,
                data: this.data
            }
          }
          fetch('http://127.0.0.1:8000/api/vendas/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Access': 'application/json',
            },
            body: JSON.stringify(payload)
          }).then(response => response.json())
          .then(res => {
            this.clientes = res
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
  .card.card-cascade h3,
  .card.card-cascade h4 {
    margin-bottom: 0;
  }
  .title-info {
    font-size: large;
    font-weight: bold;
  }
  </style>
  