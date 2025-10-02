<template>
    <v-dialog v-model="mostrarModalAtualizar" persistent max-width="600" eager>
        <v-card>
            <v-card-text>
                <v-text-field label="Nome" required outined v-model="item.nome" />
                <v-text-field label="Idade" required outined v-model="item.idade" />
            </v-card-text>
        <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="atualizarPessoa">Autalizar</v-btn>
        <v-btn text @click="mostrarModalAtualizar=false">Fechar</v-btn>
      </v-card-actions>
        </v-card>
    </v-dialog>

</template>

<script setup>
import { ref } from 'vue'

const props= defineProps(['item'])
const mostrarModalAtualizar= defineModel('mostrarModalAtualizar')

const item = ref({
    nome: '',
    idade: '',
})

//essa não é a melhor solução porque estou alternado diretamente na props, o certo seria emitir um evendo para o pai e ele atualiza
function atualizarPessoa(){
    mostrarModalAtualizar.value=false;
    props.item.nome=item.value.nome;
    props.item.idade=item.value.idade;
}

</script>

<style scoped>

</style>