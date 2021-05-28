//Função que vai buscar os Pokemons
const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}` // id para representar todos os pokemons
const generatePokemonPromisess = () => Array(150).fill().map((_, index) =>
        fetch(getPokemonUrl(index + 1)).then(res => res.json())) // gerar e retornar um array de promises pokemons.

const generateHTML = pokemons => pokemons.reduce((acum, { name, id, types }) => { // reduzir o array em uma string.
    const elementTypes = types.map(typeInfo => typeInfo.type.name) // variável que vai guardar os tipos dos pokemons.

    acum += ` 
        <li class="card ${elementTypes[0]}" >
        <img class= " card-image" alt="${name}" src= "https://pokeres.bastionbot.org/images/pokemon/${id}.png" />
       <h2 class = "card-title ">${id} ${name}</h2>
       <p class="card-subtitle">${elementTypes.join(' | ')}</p>
        </li>`
    return acum
}, '')




const insertPokemonsIntoPage = pokemons => { // conter uma função e inserir a const ul e as li nas páginas
    const ul = document.querySelector('[data-js="pokedex"]') // Inserindo LI na página
    ul.innerHTML = pokemons // inserindo li dentro da ul.

}


const pokemonPromises = generatePokemonPromisess() // Usar o for para preencher o array vazio.

// for (let i = 1; i <= 150; i++) { //  cada loop, a promise seja adicionada em um array de promise
//     pokemonPromises.push(fetch(getPokemonUrl(i)).then(res => res.json())) // a cada iteração adicionar um item no final do array.
//         // requisição http(AJAX)
//         // fetch retorna uma promise, usar o then
// }

Promise.all(pokemonPromises) // Quando todas as promises estiveram resolvidas, retorna uma promise.
    .then(generateHTML)
    .then(insertPokemonsIntoPage)