<template>
    <section id="maps">
      <a href="https://api.whatsapp.com/send?phone=5571991274417&text=Olá!"
          target="_blank"
          style="position:fixed;bottom:20px;right:30px;">
          <svg enable-background="new 0 0 512 512" width="50" height="50" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"><path d="M256.064,0h-0.128l0,0C114.784,0,0,114.816,0,256c0,56,18.048,107.904,48.736,150.048l-31.904,95.104  l98.4-31.456C155.712,496.512,204,512,256.064,512C397.216,512,512,397.152,512,256S397.216,0,256.064,0z" fill="#4CAF50"/><path d="m405.02 361.5c-6.176 17.44-30.688 31.904-50.24 36.128-13.376 2.848-30.848 5.12-89.664-19.264-75.232-31.168-123.68-107.62-127.46-112.58-3.616-4.96-30.4-40.48-30.4-77.216s18.656-54.624 26.176-62.304c6.176-6.304 16.384-9.184 26.176-9.184 3.168 0 6.016 0.16 8.576 0.288 7.52 0.32 11.296 0.768 16.256 12.64 6.176 14.88 21.216 51.616 23.008 55.392 1.824 3.776 3.648 8.896 1.088 13.856-2.4 5.12-4.512 7.392-8.288 11.744s-7.36 7.68-11.136 12.352c-3.456 4.064-7.36 8.416-3.008 15.936 4.352 7.36 19.392 31.904 41.536 51.616 28.576 25.44 51.744 33.568 60.032 37.024 6.176 2.56 13.536 1.952 18.048-2.848 5.728-6.176 12.8-16.416 20-26.496 5.12-7.232 11.584-8.128 18.368-5.568 6.912 2.4 43.488 20.48 51.008 24.224 7.52 3.776 12.48 5.568 14.304 8.736 1.792 3.168 1.792 18.048-4.384 35.52z" fill="#FAFAFA"/></svg>
      </a>
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
        searchCep() {
            if(this.cep.length == 9) {
                axiosGet('address/'+this.cep).then((response) => {  
                  this.logradouro = response.logradouro
                  this.complemento = response.complemento
                  this.bairro = response.bairro
                  this.cidade = response.localidade
                  this.uf = response.uf
                  this.disabled = false
                });
            } else {
                this.disabled = true
            }
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
  .card.card-cascade h3, .card.card-cascade h4 {
    margin-bottom: 0px;
  }
  </style>
  