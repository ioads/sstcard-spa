<template>
    <section id="tables">
      <mdb-row>
        <mdb-col md="12">
          <mdb-card cascade narrow class="mt-2">
            <mdb-view class="gradient-card-header blue darken-2">
              <h4 class="h4-responsive text-white">Cadastrar Parceiro</h4>
            </mdb-view>
            <mdb-card-body style="font-size: large;">
                <form @submit.stop.prevent="save">
                    <mdb-input
                    type="text"
                    label="CNPJ"
                    id="cnpj"
                    v-model="cnpj"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Nome fantasia"
                    id="nome_fantasia"
                    v-model="nome_fantasia"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Razão social"
                    id="razao_social"
                    v-model="razao_social"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Celular"
                    id="celular"
                    v-model="celular"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Telefone"
                    id="telefone"
                    v-model="telefone"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Fax"
                    id="fax"
                    v-model="fax"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="email"
                    label="E-mail"
                    id="email"
                    v-model="email"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Digite o CEP para pesquisar o endereço"
                    id="cep"
                    v-model="cep"
                    wrapperClass="mb-4"
                    maxlength="8"
                    />
                    <mdb-input
                    type="text"
                    label="Logradouro"
                    id="logradouro"
                    v-model="logradouro"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Número"
                    id="numero"
                    v-model="numero"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Complemento"
                    id="complemento"
                    v-model="complemento"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Bairro"
                    id="bairro"
                    v-model="bairro"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Referencia"
                    id="referencia"
                    v-model="referencia"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="Cidade"
                    id="cidade"
                    v-model="cidade"
                    wrapperClass="mb-4"
                    />
                    <mdb-input
                    type="text"
                    label="UF"
                    id="uf"
                    v-model="uf"
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
  import { axiosPost, axiosGet } from '../../services/http'
  
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
        cnpj: '',
        nome_fantasia: '',
        razao_social: '',
        celular: '',
        telefone: '',
        fax: '',
        email: '',
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        referencia: '',
        uf: '',
        cidade: '',
        disabled: true
      }
    },
    methods: {
        save() {
          let payload = {
            cnpj: this.cnpj,
            nome_fantasia: this.nome_fantasia,
            razao_social: this.razao_social,
            celular: this.celular,
            telefone: this.telefone,
            fax: this.fax,
            email: this.email,
            cep: this.cep,
            logradouro: this.logradouro,
            numero: this.numero,
            complemento: this.complemento,
            bairro: this.bairro,
            referencia: this.referencia,
            uf: this.uf,
            cidade: this.cidade,
          }
          axiosPost('parceiros', payload).then((response) => {
            console.log(response)
          });
        },
        searchCep() {
            if(this.cep.length == 8) {
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
  