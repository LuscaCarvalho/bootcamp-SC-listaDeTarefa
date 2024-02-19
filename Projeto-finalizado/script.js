// -- Inicio do código --

// Função para adicionar tarefa à lista
function adicionarTarefas() {
  // Obter o valor do campo de entrada de tarefas e remover espaços em branco iniciais e finais.
  const nomeTarefas = entradaTarefas.value.trim();

  // Verifica se o número de itens na lista é menor que 20 antes de adicionar uma nova tarefa.
  if (listaTarefas.children.length < 20) {
    // Valida se nomeTarefas tem apenas letras.
    const apenasLetras = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s]+$/;

    // Verifica se o nomeTarefas tem apenas letras usando uma expressão regular.
    if (apenasLetras.test(nomeTarefas)) {
      // Se verdadeiro, chama a função tarefaDom para adicionar a tarefa a lista
      tarefaDom(nomeTarefas, false);

      // Limpa o campo de entrada.
      entradaTarefas.value = "";

      // Se o nomeTarefas não tiver apenas letras, mostra na tela superior um alerta.
    } else {
      alert("Por favor, digite uma tarefa válida contendo apenas letras.");
    }
  }
  // Se listaTarefas for maior que 20 itens, mostra na tela superior um alerta.
  else {
    alert("Você atingiu o limite máximo de 20 itens na lista!");
  }
}

// Função para adicionar tarefa à lista no DOM.
function tarefaDom(nomeTarefas, concluido) {
  // Criar um novo elemento <li> para representar a tarefa.
  const criarTags = document.createElement("li");

  // Usando template string para definir o conteúdo HTML do <li> com uma checkbox, nome da tarefa e botão de exclusão.
  criarTags.innerHTML = ` 
      <input type="checkbox" class="checkbox" ${
        concluido ? "checked" : ""
      } onchange="checagemTarefas(this)">
      <span class="nomeTarefas ${
        concluido ? "tarefaFeita" : ""
      }">${nomeTarefas}</span>
      <button onclick="excluirTarefas(this)">Excluir</button>
  `;

  // Adiciona o elemento <li> a lista de tarefas no DOM.
  listaTarefas.appendChild(criarTags);
}

// Função para marcar e desmarcar tarefa como concluída.
function checagemTarefas(checkbox) {
  // Obtem o elemento irmão seguinte do checkbox (que é o <span> contendo o texto da tarefa).
  const textoTarefas = checkbox.nextElementSibling;

  // Alterna a classe "tarefaFeita" no elemento de texto da tarefa.
  // Isso adiciona a classe se ausente e a remove se presente, alterando o estilo(CSS) de acordo.
  textoTarefas.classList.toggle("tarefaFeita");
}

// Função para excluir tarefa.
function excluirTarefas(button) {
  // Obtem o elemento pai do botão (que é o <li> contendo a tarefa a ser removida).
  const removerTarefabtn = button.parentNode;

  // Remove o elemento <li> da lista de tarefas no DOM.
  listaTarefas.removeChild(removerTarefabtn);
}

// Função para excluir todos os itens da lista
function excluirTodos() {
  const listaVazia = listaTarefas.childElementCount === 0;

  if (listaVazia) {
    // Mostra um alerta se não tiver itens na lista
    alert("Nenhum item para excluir.");
  } else {
    // Remove todos os elementos <li> da lista no DOM
    // Cria um loop que enquanto houver tarefas na lista, remove uma por uma, até excluir toda a lista.
    while (listaTarefas.firstChild) {
      listaTarefas.removeChild(listaTarefas.firstChild);
    }
  }
}

// Adiciona um botão para excluir todos os itens
const excluirTodosBtn = document.getElementById("excluirTodosBtn");

if (excluirTodosBtn) {
  excluirTodosBtn.addEventListener("click", function () {
    // Chama a função excluirTodos quando o botão for clicado
    excluirTodos();
  });
}

// Adicionando evento para Tecla Enter
// Quando a tecla "Enter" é apertada no teclado, chama a função adicionarTarefas()
document
  .getElementById("entradaTarefas")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      adicionarTarefas();
    }
  });

// -- Final do código JavaScript --
