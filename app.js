//Função que vai buscar os Pokemons
const fetchPokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}` // id para representar todos os pokemons

    const pokemonPromises = []

    for (const i = 1; i <= 150; i++) { //  cada loop, a promise seja adicionada em um array de promise
        pokemonPromises.push(fetch(getPokemonUrl(i)).then(res => res.json())) // a cada iteração adicionar um item no final do array.
            // requisição http(AJAX)
            // fetch retorna uma promise, usar o then
    }

    Promise.all(pokemonPromises) // Quando todas as promises estiveram resolvidas, retorna uma promise.
        .then(pokemons => {


            const lisPokemons = pokemons.reduce((acum, pokemon) => { // reduzir o array em uma string.
                const types = pokemon.types.map(typeInfo => typeInfo.type.name) // variável que vai guardar os tipos dos pokemons.

                acum += ` 
                <li class="card">
                <img class= " card-image ${types[0]}" alt="${pokemon.name} src= "https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" />
               <h2 class = "card-title ">${pokemon.id} ${pokemon.name}</h2>
               <p class="card-subtitle">${types.join(' | ')}</p>
                </li>`
                return acum
            }, '')

            const ul = document.querySelector('[data-js="pokedex"]')

            console.log(lisPokemons)
        })
}

fetchPokemon() // invocando a função