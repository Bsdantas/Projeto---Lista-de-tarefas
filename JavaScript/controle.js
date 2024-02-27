let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    let valorInput = input.value;

    if (valorInput.trim() !== "") {
        ++contador;

        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
            </div>
            <div onclick="marcarTarefa(${contador})" class="item-nome" style="color: #00ff00;"> <!-- Adiciona estilo de cor verde Matrix -->
                ${valorInput}
            </div>
            <div class="item-botao">
                <button onclick="deletar(${contador})" class="delete" style="background-color: #660000;"><i class="mdi mdi-delete"></i></button> <!-- Botão Deletar em tom de vermelho escuro -->
            </div>
        </div>`;

        main.insertAdjacentHTML('beforeend', novoItem);

        input.value = "";
        input.focus();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe == "item") {
        item.classList.add('clicado');
        item.style.backgroundColor = "#660000"; // Vermelho escuro Matrix
        item.style.borderColor = "#ff0000"; // Bordas vermelhas Matrix

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');
        icone.style.color = "#ff0000"; // Cor do ícone vermelho Matrix
    }
}

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
});
