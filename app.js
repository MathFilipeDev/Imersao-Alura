function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value

// se campoPesquisa for uma string sem nada
if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi encontrado</p>" 
    return
}

campoPesquisa = campoPesquisa.toLowerCase()

console.log(campoPesquisa);

let resultados = "";
let titulo = "";
let descricao = "";

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {

        resultados += `
            <div class="item-resultado">
             <img src="${dado.img}">
              <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Mais Informações</a>
    </div>
`
    }

}

section.innerHTML = resultados
}
