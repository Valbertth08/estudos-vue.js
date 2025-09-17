<script setup>
import { onMounted, reactive, ref, computed } from "vue";
import ListPokemons from "../components/ListPokemons.vue";
import CardPokemonSelected from "../components/CardPokemonSelected.vue";

let urlBaseSvg = ref("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/")
let pokemons = reactive(ref());
let searchPokemonField=ref("");
let pokemonSelected= reactive(ref())
let loading= ref(false)


onMounted(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        .then(res => res.json())
        .then(res =>
            pokemons.value = res.results)
})

//se existir pokemons e o campo de pesquisa existir valores, sera filtrado os pokemons baseado no campo de pesquisa. 
const pokemonsFiltered = computed(()=>{
    if(pokemons.value && searchPokemonField.value){
            return pokemons.value.filter(pokemon=>
                pokemon.name.toLowerCase().includes(searchPokemonField.value.toLowerCase())
            )
    }
    return pokemons.value;
})
//função que pega os valores do pokemon, e eu utilizo para o componente CardPokemonSelected
const selectPokemon= async(pokemon)=>{

    //antes de chamar a api eu faço o loading
    loading.value=true;
     await fetch(pokemon.url)
    .then (res => res.json())
    .then(res => pokemonSelected.value = res)
    .catch(err => alert(err))
    //depois de chamar a api eu coloco o loading como false
    .finally(()=>{
        loading.value=false;
    })
}

</script>

<template>
    <main>
        <div class="container text-body-secondary">
            <div class="row mt-4">
                <div class="col-sm-12 col-md-6">
                    <CardPokemonSelected 
                    :name="pokemonSelected?.name"
                    :xp="pokemonSelected?.base_experience"
                    :height="pokemonSelected?.height"
                    :img="pokemonSelected?.sprites.other.dream_world.front_default"
                    :loading="loading">
                </CardPokemonSelected>
                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card card-list">

                        <div class="card-body row">
                            <div class="mb-3">
                                <label hidden for="searchPokemonField" class="form-label">Pesquisar</label>
                                <input type="text" class="form-control" id="searchPokemonField"
                                    placeholder="Pesquisar..." v-model="searchPokemonField">
                            </div>
                            <ListPokemons v-for="pokemon in pokemonsFiltered" :key="pokemon.name" :name="pokemon.name"
                                :urlBaseSvg="urlBaseSvg + pokemon.url.split('/')[6] + '.svg'"
                                @click="selectPokemon(pokemon)" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.card-list{
    max-height: 75vh;
    overflow-x: hidden;
    overflow-y: scroll;
}
</style>