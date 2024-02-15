console.log("hola mundo")
const randomplmnID1 = randomizer()
const randomplmnID2 = randomizer()
const randomplmnID3 = randomizer()
const randomplmnID4 = randomizer()


function randomizer() {
    return Math.floor(Math.random() * 751) + 1
}


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

    const pkmn1 = await getPkmn(1)
    const pkmn2 = await getPkmn(2)
    const pkmn3 = await getPkmn(3)
    const pkmn4 = await getPkmn(4)
    console.log(pkmn1.imagen)
    console.log(pkmn1.nombre)
    console.log(pkmn2.nombre)

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

function updatepkmn(sprite,mode){
    const img = document.querySelector(".pkmn-img");
    img.innerHTML = `<img src="${sprite}" class="${mode}">`
}

pkmnCollector()
