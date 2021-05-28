//Função que vai buscar os Pokemons
const fetchPokemon = () => {
    const url = `https://pokeapi.co/api/v2/pokemon/`
    fetch(url) // requisição http(AJAX)

}

fetchPokemon() // invocando a função