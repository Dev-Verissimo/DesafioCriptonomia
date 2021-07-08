function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaDiv(comentarios) {
    console.log(comentarios)
    div = document.createElement("div")
    h4Id = document.createElement("h4")
    pId = document.createElement("p")

    h4Id.innerHTML = comentarios.title
    pId.innerHTML = comentarios.body

    div.appendChild(h4Id)
    div.appendChild(pId)

    return div;
}

function main() {
    let postt = fazGet("https://jsonplaceholder.typicode.com/posts")
    let comentarios = JSON.parse(postt)
    let divPai = document.getElementById("principal")

    comentarios.forEach(element => {
        let div = criaDiv(element)
        divPai.appendChild(div)
    });
}
main()




let btn = document.getElementById("btn")

btn.addEventListener("click", function ocultarExibir() { // Quando clicar no botão.

    if (visibilidade) {//Se a variável visibilidade for igual a true, então...
        document.getElementById("principal").style.display = "none";//Ocultamos a div
        visibilidade = false;//alteramos o valor da variável para falso.
    } else {//ou se a variável estiver com o valor false..
        document.getElementById("principal").style.display = "flex";//Exibimos a div..
        visibilidade = true;//Alteramos o valor da variável para true.
    }
})

let visibilidade = true; //Variável que vai manipular o botão Exibir/ocultar

function exibir() {
    document.getElementById("principal").style.display = "block";
}

function ocultar() {
    document.getElementById("principal").style.display = "none";
}

// function ocultarExibir() { // Quando clicar no botão.

//     if (visibilidade) {//Se a variável visibilidade for igual a true, então...
//         document.getElementById("principal").style.display = "none";//Ocultamos a div
//         visibilidade = false;//alteramos o valor da variável para falso.
//     } else {//ou se a variável estiver com o valor false..
//         document.getElementById("principal").style.display = "block";//Exibimos a div..
//         visibilidade = true;//Alteramos o valor da variável para true.
//     }
// }











// console.log(fazGet("https://jsonplaceholder.typicode.com/posts"))