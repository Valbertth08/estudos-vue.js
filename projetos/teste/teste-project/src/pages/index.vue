<template>
  <v-card>
  <v-card-title> 
    Pessoa
  </v-card-title>
  <v-card-text >
    <p> nome: {{ nome }}</p>
    <p> nome: {{ idade }}</p>
    <v-btn class="btn" @click="$emit('nome',nome)">Exibir nome </v-btn>
  </v-card-text>
  </v-card>
</template>

<script setup>
 defineProps(["nome","idade"])
 defineEmits(['nome','idade'])
</script>
