<template>
    <section id="tables">
      <mdb-row>
        <mdb-col md="12">
          <mdb-card cascade narrow class="mt-2">
            <mdb-view class="gradient-card-header blue darken-2">
              <h4 class="h4-responsive text-white">Visualizar Plano</h4>
            </mdb-view>
            <mdb-card-body style="font-size: large;">
                <p><span class="title-info">Nome do plano:</span> {{ plano.name }}</p>    
                <p><span class="title-info">Valor:</span> {{  plano.amount }}</p>         
                <p><span class="title-info">Dias:</span> {{ plano.days }}</p>   
                <p><span class="title-info">Dias de teste:</span> {{ plano.trial_days }}</p>           
                <p><span class="title-info">Métodos de pagamento:</span> {{ plano.payment_methods }}</p>         
                <p><span class="title-info">Cor:</span> {{ plano.color }}</p>         
                <p><span class="title-info">Cargas:</span> {{ plano.charges }}</p>         
                <p><span class="title-info">Parcelas:</span> {{ plano.installments }}</p>         
                <p><span class="title-info">Lembrete de pagamento:</span> {{ plano.invoice_reminder }}</p>       
                <p><span class="title-info">Data de criação:</span> {{ plano.date_created }}</p>         
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
  </template>
  
  <script>
  import { mdbCard, mdbView, mdbCardBody } from 'mdbvue'
  
  export default {
    name: 'Tables',
    components: {
      mdbCard,
      mdbView,
      mdbCardBody,
    },
    data () {
      return {
        plano: []
      }
    },
    methods: {
        show() {
          fetch('http://127.0.0.1:8000/api/planos/'+this.$route.params.id, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Access': 'application/json',
            },
          }).then(response => response.json())
          .then(res => {
            this.plano = res.data
          })
        },
    },
    mounted() {
        this.show()
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
  