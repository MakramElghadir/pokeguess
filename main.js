console.log("hola mundo")

async function getPkmn() {
    const url = `https://pokeapi.co/api/v2/pokemon/1`;
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos
}

//Buttons

function button1() {
    console.log("FIRST button pressed")
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

//Buttons

//Quiz Generator

function Quizgenerator(Questions, quizContainer, resultsContainer, submitButton) {

}

//Quiz Generator