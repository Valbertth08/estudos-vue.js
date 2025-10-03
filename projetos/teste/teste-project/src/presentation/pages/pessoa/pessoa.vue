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
import { onMounted } from 'vue';
import listarPessoas from './components/listarPessoas.vue';
import { getPessoas } from '@/application/composables/use-buscar-cursos';


const {
  isLoading : carregarPessoas,
  data: pessoas,
  refetch: buscarTodasPessoas
} = getPessoas();


onMounted(() => {
  console.log("chegou no oumonted",pessoas)
})
</script>
