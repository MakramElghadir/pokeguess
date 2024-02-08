console.log("hola mundo")
const randomplmnID1 = randomizer()
const randomplmnID2 = randomizer()
const randomplmnID3 = randomizer()
const randomplmnID4 = randomizer()


function buttonRandom() {
    console.log(Math.floor(Math.random() * 4) + 1)
    return Math.floor(Math.random() * 4) + 1
}

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
    
    

    const buttonRandomizer1 = buttonRandom()
    const buttonRandomizer2 = buttonRandom()
    const buttonRandomizer3 = buttonRandom()
    const buttonRandomizer4 = buttonRandom()
    
    

    const pkmn1 = await getPkmn(randomplmnID1)
    const pkmn2 = await getPkmn(randomplmnID2)
    const pkmn3 = await getPkmn(randomplmnID3)
    const pkmn4 = await getPkmn(randomplmnID4)
    console.log(pkmn1.imagen)
    console.log(pkmn1.nombre)
    console.log(pkmn2.nombre)



    updatepkmn(pkmn1.imagen,"hidden")


    document.querySelector(`.but${buttonRandomizer1}`).innerHTML = pkmn1.nombre
    document.querySelector(`.but${buttonRandomizer2}`).innerHTML = pkmn2.nombre
    document.querySelector(`.but${buttonRandomizer3}`).innerHTML = pkmn3.nombre
    document.querySelector(`.but${buttonRandomizer4}`).innerHTML = pkmn4.nombre
}

async function button1() {
    const buttonResult1 = await getPkmn(1)
    console.log(buttonResult1.nombre)
}
async function button2() {
    console.log("Button 2")
}
async function button3() {
    console.log("Button 3")
}
async function button4() {
    console.log("Button 4")
}


function updatepkmn(sprite,mode){
    const img = document.querySelector(".pkmn-img");
    img.innerHTML = `<img src="${sprite}" class="${mode}">`
}

pkmnCollector()
