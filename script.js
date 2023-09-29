const button = document.querySelector(".botao-task");
const input = document.querySelector(".input-task");
const listacompleta = document.querySelector(".lista-task");

let minhalistadeitens = [];

function adiconarnovatarefa() {
  minhalistadeitens.push({
    tarefa: input.value,
    concluida: false,
  });

  input.value = "";

  mostrartarefas();
}

function mostrartarefas() {
  let novali = "";
  minhalistadeitens.forEach((item, index) => {
    novali =
      novali +
      `<li class="linha-task ${item.concluida && "done"}">
        <img src="./imagens/checked.png" alt="check-na-tarefa" onclick="concluirtarefa(${index})" />
        <p>${item.tarefa}</p>
        <img src="./imagens/trash.png" alt="lixeira" onclick="deletaritem(${index})" />
      </li>`;
  });

  listacompleta.innerHTML = novali;

  localStorage.setItem("lista", JSON.stringify(minhalistadeitens));
}

function concluirtarefa(index) {
  minhalistadeitens[index].concluida = !minhalistadeitens[index].concluida;

  mostrartarefas();
}

function deletaritem(index) {
  minhalistadeitens.splice(index, 1);
  mostrartarefas();
}

function recarregartarefas() {
  const tarefasdolocalstorage = localStorage.getItem("lista");
  if (tarefasdolocalstorage) {
    minhalistadeitens = JSON.parse(tarefasdolocalstorage);
  }

  mostrartarefas();
}

recarregartarefas();

button.addEventListener("click", adiconarnovatarefa);
