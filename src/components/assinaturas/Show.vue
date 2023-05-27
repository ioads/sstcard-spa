<template>
    <section id="tables">
      <mdb-row>
        <mdb-col md="12">
          <mdb-card cascade narrow class="mt-2">
            <mdb-view class="gradient-card-header blue darken-2">
              <h4 class="h4-responsive text-white">Visualizar Assinatura</h4>
            </mdb-view>
            <mdb-card-body style="font-size: large;">
                <p><span class="title-info">Nome do cliente:</span> {{ assinatura.customer.name }}</p>    
                <p><span class="title-info">CPF do cliente:</span> {{ formatCpf(assinatura.customer.document_number) }}</p>         
                <p><span class="title-info">E-mail do cliente:</span> {{  assinatura.customer.email }}</p>         
                <!-- <p><span class="title-info">Telefone do cliente:</span> {{  assinatura.customer.phone_numbers }}</p>          -->
                <p><span class="title-info">ID do Plano:</span> {{ assinatura.plan.id }}</p>   
                <p><span class="title-info">Plano:</span> {{ assinatura.plan.name }}</p>   
                <p><span class="title-info">Data de adesão:</span> {{ formatDate(assinatura.plan.date_created) }}</p>             
                <p><span class="title-info">Valor:</span> {{ formatPrice(assinatura.plan.amount) }}</p>
                
                <p><span class="title-info">Transação atual:</span> {{ assinatura.current_transaction.acquirer_response_message }}</p>
                <p><span class="title-info">Status transação atual:</span> {{ assinatura.current_transaction.status }}</p>

                
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
  </template>
  
  <script>
  import { mdbCard, mdbView, mdbCardBody } from 'mdbvue'
  import { axiosGet } from '../../services/http'
  import { formatPrice, formatDate, formatCpf } from '../../utils/format'
  
  export default {
    name: 'Tables',
    components: {
      mdbCard,
      mdbView,
      mdbCardBody,
    },
    data () {
      return {
        assinatura: []
      }
    },
    methods: {
        show() {
          axiosGet('assinaturas/'+this.$route.params.id).then((response) => {  
            this.assinatura = response.data
          });
        },
        formatPrice(value) {
            return formatPrice(value);
        },
        formatDate(value) {
            return formatDate(value);
        },
        formatCpf(value) {
            return formatCpf(value);
        }
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
  