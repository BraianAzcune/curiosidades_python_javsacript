/*
funcionamiento de asincronismo normal
Comportamiento:
---------------------------
entro main
VM172:9 entro no_espera
undefined
VM172:18 entro espera
VM172:11 termine esperar
VM172:12 sale no_espera
---------------------------
*/
function main(){
    console.log('entro main');
    no_espera();
}

async function no_espera(){
    console.log('entro no_espera');
    let x = await espera();
    console.log(x);
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