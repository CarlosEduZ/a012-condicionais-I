let idade = Number(prompt("Qual é sua idade?"))
let medio = prompt("Você Concluiu o Ensino Médio?")
let isCursandoOutraFaculdade = prompt("Está Cursando faculdade?")

//é de maior
if(idade >= 18){ 
    console.log("é de maior");

}else{
	console.log("é de menor");
};

// terminou o médio
if (medio === "Sim") {
    console.log("Concluiu");
}else {
    console.log("Não Concluiu.");
}

// está na faculdade

if (isCursandoOutraFaculdade === "Não") {
    console.log("Não esta cursando");
}else {
    console.log("Esta cursando.");
}