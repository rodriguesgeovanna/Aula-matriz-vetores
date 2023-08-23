const caixa = document.querySelector("#caixa")
//Incluindo cursos

let cursos = []; //criando a matriz

let resposta = "";

//Incluindo curso na matriz

while (resposta != "N") {
    let curso = prompt("Digite o nome do curso");
    cursos.push(curso.toUpperCase());                          /* toUpperCase tudo caixa alta */
    resposta = prompt("Cadastrar outro curso S/N");

    if (resposta.toUpperCase() == "N") {
        cursos.forEach((aula) => {
            let p = document.createElement("p");
            p.innerHTML = aula + "<br>--------------------<br>";
            caixa.appendChild(p);
        })
        break;
    }
}


/* Excluir */

 resposta = prompt("Excluir curso S/N");

if (resposta.toUpperCase() =="S") {
    let curso = prompt("Digite o nome do curso para excluir")

    //Pegando a posição do elemento dentro da matriz
    alert("Posição do curso" + cursos.indexOf(curso.toUpperCase(),1));
    let posicao = cursos.indexOf(curso.toUpperCase(),1);

    //Apagando o curso com o método .splice
    cursos.splice(posicao);

    cursos.forEach((aula) => {
        let p = document.createElement("p");
        p.innerHTML = aula + "<br>------Lista Excluido-------<br>" + aula + "<br>-----------------<br>";
        caixa.appendChild(p);
    })
}

