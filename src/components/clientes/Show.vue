<template>
    <section id="tables">
      <mdb-row>
        <mdb-col md="12">
          <mdb-card cascade narrow class="mt-2">
            <mdb-view class="gradient-card-header blue darken-2">
              <h4 class="h4-responsive text-white">Visualizar Cliente</h4>
            </mdb-view>
            <mdb-card-body style="font-size: large;">
                <p><span class="title-info">Nome do cliente:</span> {{ cliente.nome }}</p>    
                <p><span class="title-info">CPF:</span> {{  cliente.cpf }}</p>         
                <p><span class="title-info">RG:</span> {{ cliente.rg }}</p>   
                <p><span class="title-info">Celular:</span> {{ cliente.celular }}</p>         
                <p><span class="title-info">E-mail:</span> {{ cliente.email }}</p>         
                <p><span class="title-info">Número do Protocolo:</span> {{ cliente.numero_protocolo }}</p>         
                <p><span class="title-info">CEP:</span> {{ cliente.cep }}</p>         
                <p><span class="title-info">Logradouro:</span> {{ cliente.logradouro }}</p>         
                <p><span class="title-info">Número:</span> {{ cliente.numero }}</p>         
                <p><span class="title-info">Complemento:</span> {{ cliente.complemento }}</p>         
                <p><span class="title-info">Referência:</span> {{ cliente.referencia }}</p>         
                <p><span class="title-info">Cidade:</span> {{ cliente.cidade }}</p>         
                <p><span class="title-info">UF:</span> {{ cliente.uf }}</p>         
                <p><span class="title-info">Status:</span> {{ cliente.status }}</p>         
                <p><span class="title-info">Cadastrado em:</span> {{ cliente.created_at }}</p>              
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
        cliente: []
      }
    },
    methods: {
        show() {
          fetch('http://127.0.0.1:8000/api/clientes/'+this.$route.params.id, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Access': 'application/json',
            },
          }).then(response => response.json())
          .then(res => {
            this.cliente = res
          })
        },
    },
    mounted() {
        this.show()
        console.log(this.$route.params.id)
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
  