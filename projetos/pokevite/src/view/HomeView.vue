<script setup>
import { onMounted, reactive, ref } from "vue";
import ListPokemons from "../components/ListPokemons.vue";

let urlBaseSvg = ref("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/")
let pokemons = ref([]);

onMounted(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
        .then(res => res.json())
        .then(res =>
            pokemons.value = res.results)
})

</script>

<template>
    <main>
        <div class="container">
            <div class="row mt-4">
                <div class="col-sm-12 col-md-6">

                </div>
                <div class="col-sm-12 col-md-6">
                    <div class="card">

                        <div class="card-body row">
                            <div class="mb-3">
                                <label hidden for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    placeholder="name@example.com">
                            </div>
                            <ListPokemons v-for="pokemon in pokemons" :key="pokemon.name" :name="pokemon.name"
                                :urlBaseSvg="urlBaseSvg + pokemon.url.split('/')[6] + '.svg'" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>