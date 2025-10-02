<template>
<v-dialog
    persistent
    max-width="600"
    
    v-model="mostrarModalCadastrar"
    eager
  >
    <v-card>
      <v-card-text>
        <v-text-field
          label="Nome"
          required
          outlined
          v-model="item.nome"
        />
        <v-text-field
          label="Idade"
          required
          outlined
          v-model="item.idade"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="cadastrarPessoa">Cadastrar</v-btn>
        <v-btn text @click="mostrarModalCadastrar=false">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from 'vue'

const item = ref({
    nome: '',
    idade: '',
})

const emits = defineEmits(['cadastrarPessoa'])

//defino aqui como model e no componente pai ele esta referenciado como uma ref ( no metodo mostrarModal ( é passado com true após clicar no botão)) 
const mostrarModalCadastrar = defineModel('mostrarModalCadastrar')

function cadastrarPessoa(){

  const novoItem = {...item.value }

  emits('cadastrarPessoa', novoItem)

  item.value = { nome: '', idade: '' }
  
  mostrarModalCadastrar.value = false
}

</script>


<style scoped>

</style>