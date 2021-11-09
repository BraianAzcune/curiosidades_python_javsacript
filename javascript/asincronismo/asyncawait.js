async function hablar(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log(`Hola ${nombre}`);
            nombre = nombre +1;
            resolve(nombre);
        }, 200);
    });
}


async function main(){
    const recibo = await hablar('Juan');
    console.log("se recibio=", recibo);

    // esperar muchos en simultaneo
    const promesa1 = hablar('tambien se puede asi');
    const rta = await Promise.all([hablar("maria",), hablar("juan",), hablar("pedro",), promesa1]);
    console.log("rta=", rta);

}

main();