function hablar(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(`Hola ${nombre}`);
            nombre = nombre +1;
            resolve(nombre);
        }, 200);
    });
}

hablar(1).
    then(hablar).
    then(hablar).
    then((mensaje) => {
        console.log("recibo",mensaje);
    }).
    catch((error) => {
        console.log("error",error);
    });
