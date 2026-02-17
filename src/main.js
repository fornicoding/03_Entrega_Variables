import "./style.css";


const estiloNombre = "font-weight: 700; font-size: 16px; color: green;";
const estiloNormal = "font-weight: 400; font-size: 12px; color: black;";

const poprock = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hardrock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";

let grupoMusical = {
    nombre: "The Beatles",
    anioFundacion: 1960,
    activo: true,
    genero: poprock
}

console.log(`%c ${grupoMusical.nombre} %c / ${grupoMusical.anioFundacion} / Activo: ${grupoMusical.activo} / ${grupoMusical.genero}` , estiloNombre, estiloNormal);

grupoMusical = {
    nombre: "Queen",
    anioFundacion: 1970,
    activo: false,
    genero: rock    
}
console.log(`%c ${grupoMusical.nombre} %c / ${grupoMusical.anioFundacion} / Activo: ${grupoMusical.activo} / ${grupoMusical.genero}` , estiloNombre, estiloNormal);

grupoMusical = {
    nombre: "AC DC",
    anioFundacion: 1973,
    activo: true,
    genero: hardrock    
}
console.log(`%c ${grupoMusical.nombre} %c / ${grupoMusical.anioFundacion} / Activo: ${grupoMusical.activo} / ${grupoMusical.genero}` , estiloNombre, estiloNormal);

grupoMusical = {
    nombre: "Ludwig van Beethoven",
    anioFundacion: 1770,
    activo: false,
    genero: clasica    
}
console.log(`%c ${grupoMusical.nombre} %c / ${grupoMusical.anioFundacion} / Activo: ${grupoMusical.activo} / ${grupoMusical.genero}` , estiloNombre, estiloNormal);

grupoMusical = {
    nombre: "The Rolling Stones",
    anioFundacion: 1962,
    activo: true,
    genero: rock    
}
console.log(`%c ${grupoMusical.nombre} %c / ${grupoMusical.anioFundacion} / Activo: ${grupoMusical.activo} / ${grupoMusical.genero}` , estiloNombre, estiloNormal);

