/*
funcionamiento de asincronismo no esperamos por la funcion espera.
esto es util para funciones asincronas que no se necesita esperar ni por su efecto ni por su respuesta.
Comportamiento:
---------------------------
main();
VM208:2 entro main
VM208:7 entro no_espera
VM208:9 sale no_espera
undefined
VM208:15 entro espera
---------------------------
*/
function main(){
    console.log('entro main');
    no_espera();
}

async function no_espera(){
    console.log('entro no_espera');
    void espera();
    console.log('sale no_espera');
}

async function espera(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('entro espera');
            resolve('termine esperar');
        }, 2000);
    });
}


main();