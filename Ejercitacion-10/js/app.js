


let nombre = "Programación" + " es Fácil.";
let saludo = "Les doy la bienvenida a ";
let revDigital = "Animate a Programar " + "donde la ";
let fraseCompleta = saludo + nombre + revDigital;
console.log(fraseCompleta);



let frase = "JavaScript " + "es un lenguaje" + "esencial para crear " + "sitios web poderosos.";
console.log(frase);


let numeroEscrito1 =  "Numero diez: "
let numeroEscrito2 = "Numero veinte: "
let numeroEscrito3 = "Numero treinta: "
let numeroString1 = "10";
let numeroString2 = "20";
let numeroString3 = "30";
let concatenaNumeros = numeroString1 + numeroString2 + numeroString3;
console.log(concatenaNumeros);



let edad;
let sexo;
sexo = prompt("Introduce tu sexo (femenino) o (masculino)");
edad = prompt("Introduce tu edad");
if (sexo == "masculino" || sexo == "MASCULINO"){
    if (edad >= 18){
    alert("Puedes entrar, eres mayor de edad.");
    } else {
    alert("No puedes entrar, eres menor de edad.");
    }
} else if (sexo == "femenino" || sexo == "FEMENINO") {
    if (edad >= 20){
        alert("Puedes entrar, eres mayor de edad.");
    } else {
        alert("No puedes entrar, eres menor de edad.");
    }
}