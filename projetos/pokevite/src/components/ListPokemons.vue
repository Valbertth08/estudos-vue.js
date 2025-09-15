<script setup>

const pokemon= defineProps(["name","urlBaseSvg"])
</script>

<template>  
    <!-- a linha(row) foi definida no outro componente, mas eu consigo manipualar a coluna nesse outro -->
    <div class="col-4">
        <div class="card p-2 mb-3 cardListPokemon">
            <p class="text-center">{{ pokemon.name }}</p>
            <img :src="urlBaseSvg" class="card-img-top" 
            alt=""
            height="80">
        </div>
    </div>
</template>

<style scoped>
.cardListPokemon{
    background: #2cceff;
    background: radial-gradient(circle, rgb(38, 248, 255) 0%, rgb(75, 196, 226) 100%);
    cursor:pointer
}

.cardListPokemon:hover{
    background: #29ffe2;
    background: radial-gradient(circle, rgba(110, 252, 252, 0.1) 0%, rgba(64, 242, 255, 0.938) 100%);
}

.cardListPokemon img:hover{
    padding: .1rem;
}
</style>