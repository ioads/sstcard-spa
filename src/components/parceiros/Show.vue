<template>
    <section id="tables">
      <mdb-row>
        <mdb-col md="12">
          <mdb-card cascade narrow class="mt-2">
            <mdb-view class="gradient-card-header blue darken-2">
              <h4 class="h4-responsive text-white">Visualizar Parceiro</h4>
            </mdb-view>
            <mdb-card-body style="font-size: large;">
                <p><span class="title-info">Razão Social:</span> {{ parceiro.razao_social }}</p>    
                <p><span class="title-info">Nome Fantasia:</span> {{  parceiro.nome_fantasia }}</p>         
                <p><span class="title-info">CNPJ:</span> {{ parceiro.cnpj }}</p>   
                <p><span class="title-info">Celular:</span> {{ parceiro.celular }}</p>         
                <p><span class="title-info">Telefone:</span> {{ parceiro.telefone }}</p>         
                <p><span class="title-info">Fax:</span> {{ parceiro.fax }}</p>         
                <p><span class="title-info">E-mail:</span> {{ parceiro.email }}</p>         
                <p><span class="title-info">CEP:</span> {{ parceiro.cep }}</p>         
                <p><span class="title-info">Logradouro:</span> {{ parceiro.logradouro }}</p>         
                <p><span class="title-info">Número:</span> {{ parceiro.numero }}</p>         
                <p><span class="title-info">Complemento:</span> {{ parceiro.complemento }}</p>         
                <p><span class="title-info">Referência:</span> {{ parceiro.referencia }}</p>         
                <p><span class="title-info">Cidade:</span> {{ parceiro.cidade }}</p>         
                <p><span class="title-info">UF:</span> {{ parceiro.uf }}</p>         
                <p><span class="title-info">Status:</span> {{ parceiro.status }}</p>         
                <p><span class="title-info">Cadastrado em:</span> {{ parceiro.created_at }}</p>              
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
  </template>
  
  <script>
  import { mdbCard, mdbView, mdbCardBody, mdbRow, mdbCol } from 'mdbvue'
  
  export default {
    name: 'Tables',
    components: {
      mdbCard,
      mdbView,
      mdbCardBody,
      mdbRow,
      mdbCol
    },
    data () {
      return {
        parceiro: []
      }
    },
    methods: {
        show() {
          fetch('http://127.0.0.1:8000/api/parceiros/'+this.$route.params.id, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Access': 'application/json',
            },
          }).then(response => response.json())
          .then(res => {
            this.parceiro = res
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
  