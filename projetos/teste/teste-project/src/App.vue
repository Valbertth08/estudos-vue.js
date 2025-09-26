<template>
  <v-app>
    <v-main>
      <!-- <router-view /> -->
       <index :nome="pessoa.nome" :idade="pessoa.idade" @nome="exibirNome"></index>
       <h1>{{ nomeTitle }} </h1>
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
import Index from './pages/index.vue';
import { no } from 'vuetify/locale';

let pessoa = reactive({
  nome: '',
  idade: 0
})

let nomeTitle= ref();

const exibirNome=(nome)=>{
  nomeTitle.value=nome;
}

onMounted(()=>{
  pessoa.nome= "jose"
  pessoa.idade= 12
})
</script>
