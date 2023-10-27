document.querySelector('.tecla_pom');
function tocasom(){
document.querySelector (idElementoAudio).play('');
}
document.querySelector('.tecla_pom').oneclick=tocasompom();
const listadeteclas = document.querySelectorAll('.tecla')
let contador=0;
while (contador<9){
    listadeteclas [contador].oneclick = function (){
        tocasom ('#som_tecla_clap');
    };
    contador = contador + 1;
}
listadeteclas [1].oneclick = tocaSomClap 
listadeteclas [2].oneclick = tocaSomTim
listadeteclas [3].oneclick = tocaSomPuff
// document.queryselector('.tecla_pom').oneclick = toca
