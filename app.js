function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById("campo-pesquisa").value

// se campoPesquisa for uma string sem nada
if (!campoPesquisa) {
    section.innerHTML = "<p style='color: yellow;'>Nada foi encontrado. Escreva o nome de um jogo</p>"; 
    return;
}

campoPesquisa = campoPesquisa.toLowerCase()

console.log(campoPesquisa);

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

    // Exibe todos os jogos se o usuário digitar "todos"
    if (campoPesquisa === "todos") {
        for (let dado of dados) {
            resultados += `
                <div class="item-resultado">
                    <img src="${dado.img}">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais Informações</a>
                </div>
            `;
        }
    } else {
        // Caso contrário, faz a pesquisa normal
        for (let dado of dados) {
            titulo = dado.titulo.toLowerCase();
            descricao = dado.descricao.toLowerCase();
            tags = dado.tags.toLowerCase();

            if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
                resultados += `
                    <div class="item-resultado">
                        <img src="${dado.img}">
                        <h2>${dado.titulo}</h2>
                        <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Mais Informações</a>
                    </div>
                `;
            }
        }
    }

    if (!resultados) {
        resultados = "<p style='color: yellow;'>Nada foi encontrado</p>";
    }

    section.innerHTML = resultados;
}
