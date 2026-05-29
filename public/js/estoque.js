const listaProdutos = document.getElementById('listaProdutos');

const buscaProduto = document.getElementById('buscaProduto');

const categoriaInput = document.getElementById('categoria');
const nomeInput = document.getElementById('nome');
const precoInput = document.getElementById('preco');

const btnSalvar = document.getElementById('btnSalvar');

let produtoEditando = null;

async function carregarProdutos() {

    const resposta = await fetch('/api/produtos');

    const produtos = await resposta.json();

    renderizarProdutos(produtos);

}

function renderizarProdutos(produtos) {

    listaProdutos.innerHTML = '';

    const busca = buscaProduto.value.toLowerCase();

    produtos
    .filter(p => p.nome.toLowerCase().includes(busca))
    .forEach(produto => {

        listaProdutos.innerHTML += `
        
            <div class="item-produto">

                <div>
                    <strong>${produto.nome}</strong>
                    <br>
                    <small>${produto.categoria}</small>
                </div>

                <div>
                    R$ ${produto.preco}
                </div>

                <button class="btn-editar"
                    onclick='editarProduto(${JSON.stringify(produto)})'>
                    Editar
                </button>

                <button class="btn-excluir"
                    onclick='excluirProduto(${produto.id})'>
                    Excluir
                </button>

            </div>

        `;

    });

}

btnSalvar.addEventListener('click', async () => {

    const produto = {

        categoria: categoriaInput.value,
        nome: nomeInput.value,
        preco: precoInput.value

    };

    // VALIDAÇÃO
if(!produto.categoria){

    alert('Selecione uma categoria');
    return;

}

if(!produto.nome){

    alert('Digite o nome do produto');
    return;

}

if(!produto.preco){

    alert('Digite o preço');
    return;

}

    if(produtoEditando){

        await fetch(`/api/produtos/${produtoEditando}`, {

            method: 'PUT',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(produto)

        });

    } else {

        await fetch('/api/produtos', {

            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(produto)

        });

    }

    limparFormulario();

    carregarProdutos();

});

function editarProduto(produto){

    produtoEditando = produto.id;

    categoriaInput.value = produto.categoria;
    nomeInput.value = produto.nome;
    precoInput.value = produto.preco;

}

async function excluirProduto(id){

    if(!confirm('Excluir produto?')) return;

    await fetch(`/api/produtos/${id}`, {

        method: 'DELETE'

    });

    carregarProdutos();

}

function limparFormulario(){

    produtoEditando = null;

    categoriaInput.value = '';
    nomeInput.value = '';
    precoInput.value = '';

}

buscaProduto.addEventListener('input', carregarProdutos);

carregarProdutos();