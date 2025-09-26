<template>
    <v-col cols="12" md="4">
      <v-card>
        <v-card-item>
          <v-card-title>Informação sobre Pessoa</v-card-title>
          <v-card-subtitle>Descrição sobre pessoa</v-card-subtitle>
        </v-card-item>
        <v-card-text>
          <p>nome: {{ nome }}</p>
          <p>idade: {{ idade }}</p>
        </v-card-text>
        <v-card-text>
          <v-btn class="btn" @click="$emit('descricao',nome)">Exibir nome</v-btn>
        </v-card-text>
      </v-card>
    </v-col>
</template> 

<script setup>
 defineProps(["nome","idade"])
 defineEmits(['descricao'])
</script>
<style scoped>

.card{
  display: flex;
  flex-direction:  column;
  align-items: center;
  gap: 10px;
   width: 20%;
}
</style>
