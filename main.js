console.log("hola mundo")

function randomizer() {
    return Math.floor(Math.random() * 751) + 1
}

const randomplmnID1 = randomizer()
const randomplmnID2 = randomizer()
const randomplmnID3 = randomizer()
const randomplmnID4 = randomizer()



async function getPkmn(randomValue) {
    
    const url = `https://pokeapi.co/api/v2/pokemon/${randomValue}`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();

    const { name,sprites } = datos;
    const { front_default } = sprites;

    const informacion = {
        nombre: name,
        imagen: front_default
    }

    return informacion
}


async function pkmnCollector(){

    
    const pkmn1 = await getPkmn(randomplmnID1)
    const pkmn2 = await getPkmn(randomplmnID2)
    const pkmn3 = await getPkmn(randomplmnID3)
    const pkmn4 = await getPkmn(randomplmnID4)
    console.log(pkmn1.imagen)
    console.log(pkmn1.nombre)
    console.log(pkmn2.nombre)

    Showpokemons(pkmn1.nombre, pkmn2.nombre, pkmn3.nombre, pkmn4.nombre)

    const questionSheet  = {
        winner: pkmn1.name,
        winningImage: pkmn1.imagen,
        looser2: pkmn2.name,
        looser3: pkmn3.name,
        looser4: pkmn4.name
    }

    updatepkmn(questionSheet.winningImage,"hidden")


    document.querySelector(`.but1`).innerHTML = pkmn1.nombre
    document.querySelector(`.but2`).innerHTML = pkmn2.nombre
    document.querySelector(`.but3`).innerHTML = pkmn3.nombre
    document.querySelector(`.but4`).innerHTML = pkmn4.nombre
    
}


function updateAwnser(awnser) {
    const awnser1 = document.querySelector(`.but1`)
    const awnser2 = document.querySelector(`.but2`)
    const awnser3 = document.querySelector(`.but3`)
    const awnser4 = document.querySelector(`.but4`)

    const buttonRandom = [awnser1, awnser2, awnser3, awnser4]
    buttonRandom.sort(() => Math.random() -0.5)

    buttonRandom[0].value = awnser.winner
    buttonRandom[1].value = awnser.looser2
    buttonRandom[2].value = awnser.looser3
    buttonRandom[3].value = awnser.looser4
    


}
function Showpokemons(pkmnname1, pkmnname2, pkmnname3, pkmnname4) {
    const ButtonCatchPokemon1 = document.querySelector(".bu1")
    const ButtonCatchPokemon2 = document.querySelector(".bu2")
    const ButtonCatchPokemon3 = document.querySelector(".bu3")
    const ButtonCatchPokemon4 = document.querySelector(".bu4")

    ButtonCatchPokemon1.value = `${pkmnname1}`
    ButtonCatchPokemon2.value = `${pkmnname2}`
    ButtonCatchPokemon3.value = `${pkmnname3}`
    ButtonCatchPokemon4.value = `${pkmnname4}`
    
}

function updatepkmn(sprite,mode){
    const img = document.querySelector(".pkmn-img");
    img.innerHTML = `<img src="${sprite}" class="${mode}">`
}

pkmnCollector()
Showpokemons(pkmnname1, pkmnname2, pkmnname3, pkmnname4)

