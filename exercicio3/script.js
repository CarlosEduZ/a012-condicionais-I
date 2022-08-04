let nacionalidade = prompt("Qual País você nasceu?").toLowerCase()

if (nacionalidade === "brasil") {
    console.log("brasileiro(a)")
    } else if(nacionalidade === "argentina"){
    console.log("argentino(a)");
}else if(nacionalidade === "colombia") {
    console.log("colombiano(a)");
}else if(nacionalidade === "uruguai") {
    console.log("uruguaio(a)");
}else if(nacionalidade === "chile") {
    console.log("Chileno(a)");
}else {
    console.log("nacionalidade não registrada")
}