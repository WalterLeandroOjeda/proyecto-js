alert("Bienvenido a The Manga Store 🎉🎉");
let comprarManga = prompt("¿Desea comprar manga? (si/no)").toLocaleLowerCase();
switch (comprarManga) {
    case "no":
    alert("Gracias por visitarnos. ¡Vuelve pronto!");
    break;
    case "si":
    let genero = prompt("Tenemos los siguientes géneros: Shojo, Shonnen e Isekai").toLocaleLowerCase();
    switch (genero) {
        case "shojo":
        let shojoTitulo = prompt("Seleccione el título que gustaría: Ao Haru Ride, Nana o Nisekoi").toLocaleLowerCase();
        switch (shojoTitulo) {
        case "ao haru ride":
            let aoHaruRideTomos = prompt("¿Cuántos tomos gustaría?");
            break;
        case "nana":
            let nanaTomos = prompt("¿Cuántos tomos gustaría?");
            break;
        case "nisekoi":
            let nisekoiTomos = prompt("¿Cuántos tomos gustaría?");
            break;
        default:
            alert("Título no válido.");
            break;
        }
        break;
        case "shonnen":
        let shonnenTitulo = prompt("Seleccione el título que gustaría: One Piece, Kimetsu no Yaiba o Fairy Tail").toLocaleLowerCase();
        switch (shonnenTitulo) {
        case "one piece":
            let onePieceTomos = prompt("¿Cuántos tomos gustaría?");
            break;
        case "kimetsu no yaiba":
            let kimetsuTomos = prompt("¿Cuántos tomos gustaría?");
            break;
        case "fairy tail":
            let fairyTailTomos = prompt("¿Cuántos tomos gustaría?");
            break;
        default:
            alert("Título no válido.");
            break;
        }
        break;
        case "isekai":
        let isekaiTitulo = prompt("Seleccione el título que gustaría: No Game No Life, Sword Art Online (SAO) o Inuyasha").toLocaleLowerCase();
        switch (isekaiTitulo) {
        case "no game no life":
            let noGameNoLifeTomos = prompt("¿Cuántos tomos gustaría?");
            break;
        case "sword art online":
            let saoTomos = prompt("¿Cuántos tomos gustaría?");
            break;
        case "inuyasha":
            let inuyashaTomos = prompt("¿Cuántos tomos gustaría?");
            break;
        default:
            alert("Título no válido.");
            break;
        }}}