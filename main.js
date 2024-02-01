console.log("hola mundo")
let randomValue = Math.floor(Math.random() * 255) + 1


async function getPkmn() {
    const url = `https://pokeapi.co/api/v2/pokemon/${randomValue}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos
}


async function pkmnCollector(){
    const pkmn1 = await getPkmn()
    const pkmn2 = await getPkmn()
    const pkmn3 = await getPkmn()
    const pkmn4 = await getPkmn()


    console.log(pkmn1.name)
    console.log(pkmn2.name)
    console.log(pkmn3.name)
    console.log(pkmn4.name)
    console.log(pkmn1.sprites.front_default)
    
}

pkmnCollector()
