<template>
  <v-app>
    <v-main>
      <v-container>
        <listar-pessoas :items="pessoas" @atualizarListaCadastro="atualizarListaAposCadastro"> </listar-pessoas>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, ref, watch} from 'vue';
import listarPessoas from './components/listarPessoas.vue';
import PessoaService from '@/domain/services/PessoaService';


const pessoas = ref([])


const buscarPessoas = async () => {
  try{
    const response = await PessoaService.buscarPessoas();
    console.log("chegou", response)
    //passo uma copia nova da resposta para lista, se tentasse da forma direta não funcionaria
    pessoas.value = [...response.data]
  }catch(error){
    console.error("Erro ao buscar as pessoas", error);
  }
    console.log("chegou", pessoas)
}

watch(pessoas.value, () =>{
  console.log("Atualizou")
})

function atualizarListaAposCadastro(){
  console.log("chegou na função")
  buscarPessoas();
}

onMounted(() => {
  buscarPessoas();
});

</script>
