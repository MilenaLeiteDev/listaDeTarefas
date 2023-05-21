let escrevendoTarefa = document.getElementById("texto")
let botaoEntrada = document.getElementById("botaoEntrada")
let main = document.getElementById("main")
let contador = 0


//Adicionando uma tarefa teclando o botão "Enter":
escrevendoTarefa.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        adicionarTarefa();
    }
});


//Adicionando uma tarefa clicando no botao "adicionar":
function adicionarTarefa(){

//Capturarndo o texto que foi escrito no campo de entrada:
let tarefaEscrita = escrevendoTarefa.value

++contador;


let novoItem = `

<div id="item${contador}">

    <div id="itemNaoClicado ${contador}" class="itemNaoClicadoJs showDisplay" >
        <span onclick="clicandoItem(${contador})" class="material-symbols-outlined iconeNaoClicadoJs">circle</span>
        <div onclick="clicandoItem(${contador})" > ${tarefaEscrita} </div> 
        <button onclick="deleteItem(${contador})" class="botaoDeleteJs">Delete</button>
    </div>

    <div id="itemClicado ${contador}" class="itemClicadoJs hideDisplay">
        <span onclick="clicandoItem(${contador})" class="material-symbols-outlined iconeNaoClicadoJs">task_alt</span>
        <div onclick="clicandoItem(${contador})" class="tarefaEscritaJs"> ${tarefaEscrita} </div>
        <button onclick="deleteItem(${contador})" class="botaoDeleteJs">Delete</button>
    </div>

</div>

`

main.innerHTML = main.innerHTML + novoItem


escrevendoTarefa.value = ""
}

//Deletando um item
function deleteItem (id) {

let deletandoItem = document.getElementById(`item${id}`)

deletandoItem.remove()
}

//Clicando e desclicando um item
let itemEstaSelecionado = false;

function clicandoItem(id) {
    let itemNaoClicado = document.getElementById(`itemNaoClicado ${id}`);
    let itemClicado = document.getElementById(`itemClicado ${id}`);

    if (!itemEstaSelecionado) {
        itemNaoClicado.classList.remove('showDisplay');
        itemNaoClicado.classList.add('hideDisplay');
        itemClicado.classList.remove('hideDisplay');
        itemClicado.classList.add('showDisplay');
        itemEstaSelecionado = true;
    } else {
        itemClicado.classList.remove('showDisplay');
        itemClicado.classList.add('hideDisplay');
        itemNaoClicado.classList.remove('hideDisplay');
        itemNaoClicado.classList.add('showDisplay');
        itemEstaSelecionado = false;
    }
}

