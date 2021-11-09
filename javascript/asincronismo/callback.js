function funcionAsincrona(callback) {
    setTimeout(function() {
        console.log("dentro de asincrona")
        callback();
    }, 1000);
}

console.log('Inicio');
funcionAsincrona(()=>{
    console.log('Fin');
});