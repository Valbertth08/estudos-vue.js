<template>
    <v-data-table :items="props.items" :headers="headers" class="text-left" >
        <template v-slot:[`item.actions`]="{ item }">
            <div class="d-flex justify-center">
                <v-btn icon size="small" variant="text" @click="visualizarItem(item)" class="mr-1">
                    <v-icon color="primary">mdi-eye</v-icon>
                </v-btn>

                <v-btn icon size="small" variant="text" @click="editarItem" class="mr-1">
                    <v-icon color="orange">mdi-pencil</v-icon>
                    <atualizarPessoa v-model:mostrarModalAtualizar="mostrarModalAtualizarItem" :item="item"></atualizarPessoa>
                </v-btn>

                <v-btn icon size="small" variant="text" @click="excluirItem(item)">
                    <v-icon color="red">mdi-delete</v-icon>
                </v-btn>
            </div>
        </template>
    </v-data-table>
    <br>
    <br>
    <v-btn color="primary" @click="ModalCadastrar">Cadastrar Pessoa</v-btn>
    <CadastrarPessoa v-model:mostrarModalCadastrar="mostrarModalCadastrar" @cadastrarPessoa="atualizarLista" />
</template>

<script setup>
import { ref } from 'vue';
import CadastrarPessoa from './cadastrarPessoa.vue';
import atualizarPessoa from './atualizarPessoa.vue';

const props = defineProps(['items'])
const emits = defineEmits(['adicionarPessoa'])

const  mostrarModalCadastrar = ref();
const  mostrarModalAtualizarItem = ref();


const headers = [
    { text: "id", value: "id" },
    { text: "nome", value: "nome" },
    { text: "Ações", value: "actions", sortable: false}
];

function ModalCadastrar(){
 mostrarModalCadastrar.value = true;
}

function editarItem(){
 mostrarModalAtualizarItem.value=true;
}
function atualizarLista(item){
    console.log('chegou',item)
    emits('adicionarPessoa',item)
}

</script>

<style scoped>

</style>