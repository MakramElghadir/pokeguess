console.log("hola mundo")

async function getPkmn() {
    const url = `https://pokeapi.co/api/v2/pokemon/1`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos
}



function button1() {
    console.log("FIRST button pressed")
    pokemonFetcher()
}

function button2() {
    console.log("SECOND button pressed")
}

function button3() {
    console.log("SECOND button pressed")
}

function button4() {
    console.log("FOURTH button pressed")
}

function pokemonFetcher() {
    let randomValue = 2 
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomValue}`)
        .then(function(datos){
            console.log(datos);
    })
}
