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
// console.log(fazGet("https://jsonplaceholder.typicode.com/posts"))