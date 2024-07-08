let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento("p" , "ya se sortearon todos los numeros posibles");
    } else {
        // si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();

        } listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
}}
function asignarTextoElemento (elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
 }


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    //en este bucle esta pendiente corregir el if
    if (listaNumerosSorteados == numeroMaximo){
        asignarTextoElemento("p","se termino el juego se terminaron las alternativas");
        document.querySelector("#empezar").setAttribute("disabled" , true);
    }
     if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p",`Acertaste el número! en ${intentos} ${intentos == 1 ? "vez" : "veces"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");

    } else { 
        if (numeroDeUsuario<numeroSecreto){
        asignarTextoElemento("p",'El numero secreto es mayor');
            } else {
                asignarTextoElemento("p",'El numero secreto es menor');
            }
            intentos++;
            limpiarCaja();
          }  
     return;
        
}
function condicionesIniciales(){
    asignarTextoElemento("h1", "Juego de un numero secreto!");
    asignarTextoElemento("p",`Elige un numero entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
    console.log("El numero secreto es: "+ numeroSecreto);
}
function limpiarCaja(){
   document.querySelector("#valorUsuario").value = '';
 }
 function reiniciarJuego(){
    // borramos el ultimo dato ingresado para empezar de nuevo
    limpiarCaja();
    //cambiamos el texto de inicio, reiniciamos el numero aleatorio
    // reiniciamos el contador
    condicionesIniciales();
    // desabilitamos el boton nuevo juego hasta que termine el juego
    document.querySelector("#reiniciar").setAttribute("disabled" , true);
 }

condicionesIniciales();

 