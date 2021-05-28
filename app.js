//Função que vai buscar os Pokemons
const fetchPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/` // url da api Pokemon
    fetch(url) // requisição http(AJAX)
        .then(res => res.json) // fetch retorna uma promise, usar o then
        .then(pokemon => { // o then retorna uma promise também.
            console.log(pokemon)
        })
}

fetchPokemon() // invocando a função