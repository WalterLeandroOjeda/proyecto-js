alert("Bienvenido a The Manga Store 🎉🎉");
let comprarManga = confirm("¿Te gustaria comprar un manga?");
if (comprarManga){
    queGenero= prompt("¿Que genero estarias buscando? \n Ingrese 's' para Shojo  'ss' para Shonnen 'i' para Isekai")
};
if('s' === queGenero){
    cual= prompt("¿De cuales de estos titulos gustaría comprar? \n Ao Haru Ride 'Ao' Nana 'Na' Nisekoi 'Ni'")
}
if('ss' === queGenero){
    cual= prompt("¿De cuales de estos titulos gustaría comprar? \n One Piece 'One' Kimetsu No Yaiba 'Ki' Fairy Tail 'Fa'")
}
if('i' === queGenero){
    cual= prompt("¿De cuales de estos titulos gustaría comprar? \n No Game No Life 'No' Sword Art Online 'Sao' Inuyasha 'Inu'")
}
if('ao' === cual){
    cuantos= Number(prompt("¿Cuantos tomos gustarias? Seleccione del 1 al 13"))
}
if('na' === cual){
    cuantos= Number(prompt("¿Cuantos tomos gustarias? Seleccione del 1 al 21"))
}
if('ni' === cual){
    cuantos= Number(prompt("¿Cuantos tomos gustarias? Seleccione del 1 al 25"))
}
if('one' === cual){
    cuantos= Number(prompt("¿Cuantos tomos gustarias? Seleccione del 1 al 89"))
}
if('ki' === cual){
    cuantos= Number(prompt("¿Cuantos tomos gustarias? Seleccione del 1 al 23"))
}
if('fa' === cual){
    cuantos= Number(prompt("¿Cuantos tomos gustarias? Seleccione del 1 al 63"))
}
if('no' === cual){
    cuantos= Number(prompt("¿Cuantos tomos gustarias? Seleccione del 1 al 7"))
}
if('sao' === cual){
    cuantos= Number(prompt("¿Cuantos tomos gustarias? Seleccion del 1 al 27"))
}
if('inu' === cual){
    cuantos= Number(prompt("¿Cuantos tomos gustarias? Seleccione dle 1 al 56"))
}
if(cuantos>=5){
    alert("En breve estaremos comunicandonos con usted")
}
else if(cuantos<=4){
    alert("La compra minima son de 5 ejemplares")
}