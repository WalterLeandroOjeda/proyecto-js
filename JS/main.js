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
    cuantos= Number(prompt("¿Cuantos tomos gustarias?"))
}
if('na' === cual){
    cuantos= Number(prompt("¿Cuantos tomos gustarias?"))
}
if('ni' === cual){
    cuantos= Number(prompt("¿Cuantos tomos gustarias?"))
}
if('one' === cual){
    cuantos= Number(prompt("¿Cuantos tomos gustarias?"))
}
if('ki' === cual){
    cuantos= Number(prompt("¿Cuantos tomos gustarias?"))
}
if('fa' === cual){
    cuantos= Number(prompt("¿Cuantos tomos gustarias?"))
}
if('no' === cual){
    cuantos= Number(prompt("¿Cuantos tomos gustarias?"))
}
if('sao' === cual){
    cuantos= Number(prompt("¿Cuantos tomos gustarias?"))
}
if('inu' === cual){
    cuantos= Number(prompt("¿Cuantos tomos gustarias?"))
}