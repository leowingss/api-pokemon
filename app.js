//Função que vai buscar os Pokemons
const fetchPokemon = () => {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}` // id para representar todos os pokemons

    for (const i = 1; i <= 150; i++) {
        fetch(getPokemonUrl) // requisição http(AJAX)
            .then(res => res.json) // fetch retorna uma promise, usar o then
    }

}

fetchPokemon() // invocando a função