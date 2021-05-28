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
            console.log(pokemons)

            const lisPokemons = pokemons.reduce((acum, pokemon) => { // reduzir o array em uma string.
                acum += ` 
                <li class="card">
               <h2 class = "card-title ">${pokemon.id} ${pokemon.name}</h2>
               <p class="card-subtitle">${pokemon.types.map(typeInfo => typeInfo.type.name).join(' | ')}</p>
                </li>`
                return acum
            }, '')
        })
}

fetchPokemon() // invocando a função