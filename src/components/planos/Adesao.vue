<template>
    <section id="maps">
      <mdb-row class="justify-content-center">
        <mdb-col md="10">
          <!-- <a class="logo-wrapper"
            ><img alt="" class="img-fluid" src="../../assets/logo_sstcard.png"
          /></a> -->
          <mdb-card cascade narrow class="mt-5">
            <mdb-view class="gradient-card-header blue darken-2">
              <h4 class="h4-responsive text-white">
                ADESÃO DE PLANO - {{ this.plano.name }}
              </h4>
              <h5 class="h5-responsive text-white">
                Preencha todos os campos a seguir para concluir a sua assinatura:
              </h5>
            </mdb-view>
            <mdb-card-body class="text-center">
                    <form @submit.stop.prevent="cadastrar">
                      <!-- Dados pessoais -->
                      <mdb-row md="12">
                        <mdb-col md="5">
                          <mdb-input
                          type="text"
                          label="Nome Completo"
                          id="nome"
                          v-model="nome"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                        <mdb-col md="2">
                          <mdb-input
                          type="text"
                          label="CPF"
                          id="cpf"
                          v-mask="'###.###.###-##'"
                          v-model="cpf"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                        <mdb-col md="2">
                          <mdb-input
                          type="text"
                          label="RG"
                          id="rg"
                          v-model="rg"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                        <mdb-col md="3">
                          <mdb-input
                          type="date"
                          label="Data de nascimento"
                          id="data_nascimento"
                          v-model="data_nascimento"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                      </mdb-row>
                      <mdb-row md="12">
                        <mdb-col md="5">
                          <mdb-input
                          type="email"
                          label="E-mail"
                          id="email"
                          v-model="email"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                        <mdb-col md="1">
                          <mdb-input
                          type="text"
                          label="DDD"
                          id="ddd"
                          v-mask="'(##)'"
                          v-model="ddd"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                        <mdb-col md="3">
                          <mdb-input
                          type="text"
                          label="Celular"
                          id="celular"
                          v-mask="'#####-####'"
                          v-model="celular"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                        <mdb-col md="3">
                          <mdb-input
                          type="text"
                          label="Sexo"
                          id="sexo"
                          v-model="sexo"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                      </mdb-row>
                      
                      <!-- Dados de endereço -->
                      <mdb-row md="12">
                        <mdb-col md="2">
                          <mdb-input
                          type="text"
                          label="CEP"
                          id="cep"
                          v-mask="'#####-###'"
                          v-model="cep"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                        <mdb-col md="5">
                          <mdb-input
                          type="text"
                          label="Logradouro"
                          id="logradouro"
                          v-model="logradouro"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                        <mdb-col md="1">
                          <mdb-input
                          type="text"
                          label="N°"
                          id="numero"
                          v-model="numero"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                        <mdb-col md="4">
                          <mdb-input
                          type="text"
                          label="Complemento"
                          id="complemento"
                          v-model="complemento"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                      </mdb-row>
                      <mdb-row md="12">
                        <mdb-col md="4">
                          <mdb-input
                          type="text"
                          label="Referência"
                          id="referencia"
                          v-model="referencia"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                        <mdb-col md="3">
                          <mdb-input
                          type="text"
                          label="Bairro"
                          id="bairro"
                          v-model="bairro"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                        <mdb-col md="4">
                          <mdb-input
                          type="text"
                          label="Cidade"
                          id="cidade"
                          v-model="cidade"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                        <mdb-col md="1">
                          <mdb-input
                          type="text"
                          label="UF"
                          id="uf"
                          v-model="uf"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                      </mdb-row>

                      <!-- Dados de pagamento -->
                      <mdb-row md="12">
                        <mdb-col md="4">
                          <mdb-input
                          type="text"
                          label="Nome do titular"
                          id="cartao_nome"
                          v-model="cartao_nome"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                        <mdb-col md="4">
                          <mdb-input
                          type="text"
                          label="Número do Cartão"
                          id="cartao_numero"
                          v-mask="'#### #### #### ####'"
                          v-model="cartao_numero"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                        <mdb-col md="2">
                          <mdb-input
                          type="text"
                          label="CVV"
                          id="cartao_cvv"
                          v-model="cartao_cvv"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                        <mdb-col md="2">
                          <mdb-input
                          type="text"
                          label="Validade"
                          id="cartao_validade"
                          v-mask="'##/##'"
                          v-model="cartao_validade"
                          wrapperClass="mb-4"
                          />
                        </mdb-col>
                      </mdb-row>
                      <mdb-btn color="primary" type="submit"> Enviar </mdb-btn>
                    </form>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
  </template>
  
  <script>
import { mdbRow, mdbCol, mdbCard, mdbView, mdbCardBody, mdbInput, mdbBtn } from 'mdbvue'    
import { axiosGet, axiosPost } from '../../services/http'
import {mask} from 'vue-the-mask'
  
  export default {
    name: 'Maps',
    directives: {mask},
    components: {
      mdbRow,
      mdbInput,
      mdbCol,
      mdbCard,
      mdbView,
      mdbCardBody,
      mdbBtn
    },
    data () {
      return {
        plano: [],
        nome: '',
        cpf: '',
        rg: '',
        email: '',
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        referencia: '',
        bairro: '',
        cidade: '',
        uf: '',
        ddd: '',
        celular: '',
        sexo: '',
        data_nascimento: '',
        cartao_numero: '5200480622211952',
        cartao_cvv: '814',
        cartao_nome: 'Iago Silva Oliveira',
        cartao_validade: '0531'
      }
    },

    methods: {
        show() {
          axiosGet('planos/'+this.$route.params.id).then((response) => {  
            this.plano = response.data
            console.log(response.data)
          });
        },
        cadastrar() {
          const payload = {
            id_plano: this.$route.params.id,
            cliente: {
              nome: this.nome,
              cpf: this.cpf,
              rg: this.rg,
              email: this.email,
              cep: this.cep,
              logradouro: this.logradouro,
              numero: this.numero,
              complemento: this.complemento,
              referencia: this.referencia,
              bairro: this.bairro,
              cidade: this.cidade,
              uf: this.uf,
              ddd: this.ddd,
              celular: this.celular,
              sexo: this.sexo,
              data_nascimento: this.data_nascimento,
            },
            cartao: {      
              cartao_numero: this.cartao_numero,
              cartao_cvv: this.cartao_cvv,
              cartao_nome: this.cartao_nome,
              cartao_validade: this.cartao_validade
            }      
          };
          console.log(payload)
          axiosPost('assinaturas', payload).then((response) => {
            console.log(response)
          });
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
  .card.card-cascade h3, .card.card-cascade h4 {
    margin-bottom: 0px;
  }
  </style>
  