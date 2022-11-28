let diaSemana = prompt("¿Qué día es hoy?");
switch (diaSemana) {
    case "lunes":
    alert("Hoy es lunes de pierna, hombro y trapecio");
    break;

    case "martes":
    alert("Hoy es martes de pecho y trisep");
    break;

    case "miércoles":
    alert("Hoy es miércoles de espalda, bisep y antebrazo");
    break;

    case "jueves":
    alert("Hoy es jueves, toca repaso de pierna, pecho y hombro");
    break;

    case "viernes":
    alert("Hoy es viernes, toca espalda bisep y trisep");
    break;

    case "sábado":
    alert("Hoy es sábado, toca repaso de trapecio y antebrazo");
    break;

    case "domingo":
    alert("Hoy es domingo de cardio");
    break;

    default:
        alert("Escribe el día de la semana en minúsculas.");
}
for(i=20;i<=70;i++){

    document.write("El número es: " + i + "<br>");
    
}
// se define la cantidad de iteraciones en la variable "repeticiones" y se parsea el resultado
let repeticiones = parseInt(prompt(`ingresar la cantidad de iteraciones del Hola Mundo`))
// 1ra condicion es que empiece en definir "x"= 0
// 2da que "x" sea menor a "repeticiones"
// 3ra "x" sume uno por cada iteración
for (let x = 0; x < repeticiones.length; x++) {
    // se muestran los Hola Mundo por la consola
    console.log(`Hola Mundo!`);    
}