var turno = true;

function seleccionarNum(numero) {
    var res = document.getElementById("resultado");

    var valorA = resultado.value;

    var valorN = valorA + numero;

    resultado.value = valorN;

}

function borrar(){
    var res = document.getElementById("resultado");
    res.value = "";
}

function sumar(){
    var btnSum = document.getElementById("suma")
    var resultado = document.getElementById("resultado");
    var igual = document.getElementById("igual");

    if(turno){
        n1 = parseInt(resultado.value);
        
        console.log(n1,turno);
        turno = false;    
    } else if(!turno){
        n2 = parseInt(resultado.value);

        n1+n2;
        console.log(n1+n2,turno);
        igual.onclick(getRes(1,n1,n2));
        turno = true;
    }
}


function getRes(tipo,n1,n2){
var resultado = document.getElementById("resultado");

    switch(tipo){
        case 1: resultado.value = parseInt(n1+n2); break; // suma
        case 2: return n1-n2; break; // resta
        }
}