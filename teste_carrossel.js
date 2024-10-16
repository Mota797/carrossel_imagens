let contador = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    intervalo();
}, 8000)

function intervalo(){
    contador++;
    if(contador > 4){
        contador = 1
    }
    document.getElementById("radio" + contador).checked = true;
}