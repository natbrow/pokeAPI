const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
const contenedor = document.querySelector('.container')
const listaHeader = document.querySelector('#pokedex');

async function cargarDatos(endPoint) {
    const respuesta = await fetch(endPoint, { method: 'GET' })
    const data = await respuesta.json()
    if (data.results) {
        //pintar muchos
        const array = data.results
        pintarPokemon(array, listaHeader)
    } else {
        //pintar uno
        pintarUnPokemon(data, listaHeader)
    }

    // const almacenar = data.results;
    // pintarPokemon(almacenar, listaHeader);
    // console.log(data);

}

cargarDatos(url);
function pintarPokemon(lista, lugar) {
    for (let pokemon of lista) {
        pintarUnPokemon(pokemon, lugar)
    }
}

async function pintarUnPokemon(lista, listaHeader) {
    const pokemonUrl = lista.url;
    const resultUrl = await fetch(pokemonUrl, { method: 'GET' });
    const infoPokemon = await resultUrl.json();

    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = infoPokemon.sprites.other['official-artwork'].front_default;
    img.alt = infoPokemon.name
    const h5 = document.createElement('h5');
    h5.textContent = infoPokemon.id
    const h2 = document.createElement('h2');
    h2.textContent = infoPokemon.name
    li.append(img, h2, h5,);
    listaHeader.appendChild(li)
    //lugar.appendChild(listaHeader);

}
//pintarPokemon();

