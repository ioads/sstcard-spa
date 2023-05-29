<template>
    <section id="tables">
      <mdb-row>
        <mdb-col md="12">
          <mdb-card cascade narrow class="mt-2">
            <mdb-view class="gradient-card-header blue darken-2">
              <h4 class="h4-responsive text-white">Planos</h4>
            </mdb-view>
            <mdb-card-body>
              <mdb-btn class="btn-sm float-right" color="primary" @click="cadastrar()" type="button"><mdb-icon icon="plus" class="mr-3" /> Cadastrar </mdb-btn>
              <table class="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID Api</th>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Dias</th>
                        <th>Parcelas</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(plano,i) in planos" :key="i">
                      <th scope="row">{{ i+1 }}</th>
                      <td>{{ plano.id }}</td>
                      <td>{{ plano.name }}</td>
                      <td>{{ formatPrice(plano.amount) }}</td>
                      <td>{{ plano.days }}</td>
                      <td>{{ plano.installments }}</td>
                      <td>
                        <a :href="'/planos/ver/'+ plano.id" title="Visualizar"><mdb-icon icon="eye" class="mr-3" /></a>
                      </td>
                    </tr>
                </tbody>
              </table>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
      </mdb-row>
    </section>
  </template>
  
  <script>
  import { mdbIcon, mdbRow, mdbCol, mdbCard, mdbView, mdbCardBody , mdbBtn} from 'mdbvue'
  import { axiosGet } from '../../services/http'
  import { formatPrice } from '../../utils/format'
  
  export default {
    name: 'Tables',
    components: {
      mdbRow,
      mdbCol,
      mdbCard,
      mdbView,
      mdbCardBody,
      mdbIcon,
      mdbBtn
    },
    data () {
      return {
        planos: []
      }
    },
    methods: {
        list() {
          axiosGet('planos').then((response) => {
            this.planos = response
          });
        },
        formatPrice(value) {
            return formatPrice(value);
        },
        cadastrar() {
            this.$router.push({ name: 'planosCadastrar' })
        }
    },
    mounted() {
      this.list()
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
  </style>
  