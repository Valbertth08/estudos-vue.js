<template>
  <v-app>
    <v-main>
      <!-- <router-view /> -->
       <index :nome="pessoa.nome" :idade="pessoa.idade" ></index>
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import Index from './pages/index.vue';

let pessoa = reactive({
  nome: '',
  idade: 0
})

onMounted(()=>{
  pessoa.nome= "pedro"
  pessoa.idade= 12
})
</script>
