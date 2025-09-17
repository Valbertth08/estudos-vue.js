<script setup>

const pokemon = defineProps(["name","xp","height","img","loading"])

</script>


<template>
    <div class="card CardPokemonSelecte"
    :class="loading?'': 'animate__animated animate__flipInY'">

    <img
    v-if="pokemon.name" 
    :src="pokemon.img" 
    class="card-img-top pt-2" 
    :alt="pokemon.name" 
    height="250" >


    <img 
    v-else
    src="../assets/egg_pokemon.svg" 
    class="card-img-top pt-2" 
    alt="???" 
    height="250" >


    <div class="card-body">
        <h5 class="card-title text-center">{{ pokemon.name ||'???' }}</h5>
        <hr>
        <div class="row">
            <section class="col">
                <strong>XP:</strong>
                <span>{{ pokemon.xp }}</span>
            </section>
            <section class="col">
                <strong>Altura</strong>
                <span> {{pokemon.height}} </span>
            </section>
        </div>
    </div>
    </div>
</template>

<style scoped>
.CardPokemonSelecte{
    height: 75vh;
      background: #2cceff;
    background: radial-gradient(circle, rgb(199, 196, 46) 0%, rgba(226, 26, 26, 0.562) 100%);

}
</style>