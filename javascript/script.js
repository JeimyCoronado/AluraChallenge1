var info = document.querySelector("#ingresar");
info.focus();
var info2 = document.querySelector("#mostrar");
var vocales = ['a','e','i','o','u'];
var cambio = ['ai','enter','imes','ober','ufat'];
            
function mostrarResultado(){
    document.getElementById('inicio').style.display = 'none';
    document.getElementById('fin').style.display = 'inline-block';
}
function ocultarResultado(){
    document.getElementById('inicio').style.display = 'inline-block';
    document.getElementById('fin').style.display = 'none';
}

function encriptar(){
    var i = 0;
    texto = info.value;
    if(texto){
        mostrarResultado();
        while(i<texto.length){
            var posicion = vocales.indexOf(texto[i]);
            if( posicion >= 0 ){
                texto = texto.substring(0,i) + cambio[posicion] + texto.substring(i+1);
                i = i + cambio[posicion].length;
            }
            else{
                i++;
            }
        }
        info.value = '';
        info2.value = texto;
    }
    else{
        ocultarResultado();
        info.focus();
    }
}
            
function desencriptar(){
    var i = 0;
    texto = info.value;
    if(texto){
        mostrarResultado();
        while( i < cambio.length ){
            var posicion = texto.indexOf(cambio[i]);
            if( posicion >= 0 ){
                texto = texto.substring(0,posicion) + vocales[i] + texto.substring(posicion+cambio[i].length);
            }
            else{
                i++;
            }                
        }
        info.value = '';
        info2.value = texto;
    }
    else{
        ocultarResultado();
        info.focus();
    }
}

function copiar(){
    document.getElementById('mostrar').select();
    document.execCommand('copy');
    info.focus();
}