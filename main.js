console.log("hola mundo")



async function getPkmn() {
    let randomValue = Math.floor(Math.random() * 751) + 1
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
    const pkmn1 = await getPkmn()
    const pkmn2 = await getPkmn()
    const pkmn3 = await getPkmn()
    const pkmn4 = await getPkmn()
    console.log(pkmn1.imagen)


    //const imageCatcher = document.querySelector(".imagen") selection DONE
    //imageCatcher.src = pkmn1.imagen
    //imageCatcher.className = "hidden"

    updatepkmn(pkmn1.imagen,"hidden")


}



function updatepkmn(sprite,mode){
    const img = document.querySelector(".pkmn-img");
    img.innerHTML = `<img src="${sprite}" class="${mode}">`
}

pkmnCollector()
