var num1;
var operacion;

function cargar(){
    res = document.getElementById("resultado");
}


function seleccionarNum(numero) {
    res.value+=numero
}
function borrar(){
    res.value = "";
}

function operation(num){

    switch(num){
        case 1: 
            num1 = parseFloat(res.value);
            operacion = 1;
            borrar();
            break;

        case 2:
            num1 = parseFloat(res.value);
            operacion = 2;
            borrar();
            break; 

        case 2:
                num1 = parseFloat(res.value);
                operacion = 2;
                borrar();
                break; 

    }
}

function resolver(){
var num2 = parseFloat(res.value)
    switch(operacion){
        case 1: 
        res.value = num1 + num2;
        console.log("sumo");
        break;

        case 2: 
        res.value = num1 - num2;
        console.log("resta");
        break;
    }

}
