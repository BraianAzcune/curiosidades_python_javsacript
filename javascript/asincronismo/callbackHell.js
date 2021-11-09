function hablar(callback) {

    setTimeout(function() {
        console.log('estoy hablando');
        callback();
    },200);
}

// como evitamos esto?
/*
(function(){
    hablar(function() {
        hablar(function(){
            hablar(function(){
                hablar(function(){
                    hablar(function(){
                        console.log('sexto');
                    });
                    console.log('quinto');
                });
                console.log('cuarto');
            });
            console.log('tercero');
        });
        console.log('segundo');
    });
    console.log('primero');
})();
*/

//forma correcta
function conversacion(veces,callback){
    if(veces>0){
        hablar(function(){
            conversacion(veces-1,callback);
        });
    }else{
        callback(()=>{console.log('termino la conversacion')});
    }
}
conversacion(5,hablar);
