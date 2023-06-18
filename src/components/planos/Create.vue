<template>
    <section id="tables">
      <mdb-row>
        <mdb-col md="12">
          <mdb-card cascade narrow class="mt-2">
            <mdb-view class="gradient-card-header blue darken-2">
              <h4 class="h4-responsive text-white">Cadastrar Plano</h4>
            </mdb-view>
            <mdb-card-body style="font-size: large;">
                <form @submit.stop.prevent="save">
                    <mdb-input
                    type="text"
                    label="Valor"
                    id="amount"
                    v-model="amount"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Dias (Prazo, em dias, para cobrança das parcelas)"
                    id="days"
                    v-model="days"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Nome"
                    id="name"
                    v-model="name"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Dias de teste"
                    id="trial_days"
                    v-model="trial_days"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Número de cobranças"
                    id="charges"
                    v-model="charges"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Número de parcelas"
                    id="installments"
                    v-model="installments"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Lembrete de vencimento (define em até quantos dias antes o cliente será avisado sobre o vencimento do boleto.)"
                    id="invoice_reminder"
                    v-model="invoice_reminder"
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
  import { axiosPost } from '../../services/http'
  
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
        amount: '',
        days: '',
        name: '',
        trial_days: '',
        charges: '',
        installments: '',
        invoice_reminder: ''
      }
    },
    methods: {
        save() {
          const payload = {
            amount: this.amount,
            days: this.amount,
            name: this.name,
            trial_days: this.trial_days,
            charges: this.charges,
            installments: this.installments,
            invoice_reminder: this.invoice_reminder
          };
          axiosPost('planos', payload).then((response) => {
            this.$swal(response);
          });
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
  