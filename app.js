// console.log(dados);

let section = document.getElementById("resultados-pesquisa")
console.log(section);

for (let dado of dados) {
    section.innerHTML += `
    <div class="item-resultado">
        <img src="${dado.img}">
            <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais Informações</a>
    </div>
`
}