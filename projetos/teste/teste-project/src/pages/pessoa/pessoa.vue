<template>
  <v-app>
    <v-main>
      <v-container>
        <listar-pessoas :items="pessoas" @adicionarPessoa="adicionarPessoa"> </listar-pessoas>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, reactive, ref} from 'vue';
import listarPessoas from './components/listarPessoas.vue';
import PessoaService from '@/domain/services/PessoaService';


const pessoas = ref([])


const listaDePessoas = async () => {
  try{
    const response = await PessoaService.buscarPessoas();
    console.log("chegou", response)
    pessoas.value = response.data;
  }catch(error){
    console.error("Erro ao buscar as pessoas", error);
  }
    console.log("chegou", pessoas)
}

onMounted(() => {
  listaDePessoas();
});

</script>
