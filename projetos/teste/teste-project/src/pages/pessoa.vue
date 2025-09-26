<template>
  <v-app>
    <v-main>
      <v-container> 
       <v-row> 
         <CardPessoa v-for="pessoa in list" :key="pessoa.nome" :nome="pessoa.nome" :idade="pessoa.idade" @descricao="exibirNome"></CardPessoa>
        <h1>{{ nomeTitle }} </h1>
       </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue';
let list = reactive([])

let nomeTitle= ref();

const exibirNome=(nome)=>{
  nomeTitle.value=nome;
}

onMounted(() => {
  list.push(
    { nome: "jose", idade: 12 },
    { nome: "joao", idade: 33 },
    { nome: "fabio", idade: 55 }
  )
})
</script>
