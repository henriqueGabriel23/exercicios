"use strict";
let NomePacote = document.getElementById("Nome");
let Data = document.getElementById("Data");
let Descricao = document.getElementById("Descricao");
let boxAtivo = document.getElementById("checkboxAtivo");
let boxInativo = document.getElementById("checkboxInativo");
let BotaoCadastrar = document.getElementById("Botao");
let botaoExcluir = document.getElementById("botaoExcluir");
let listagemDePacote = document.getElementById("Pacotes");
let pacotes = [];
let iD;
let resposta;
//gerar os pacotes em html
const pegarPacote = () => {
    let listagem = ``;
    for (let index = 0; index < pacotes.length; index++) {
        listagem += `<div class="Pacote" id="pacote1"><h2>' ${pacotes[index]._nome} '</h2><p class="Letra_do_Pacote">'${pacotes[index]._descricao}'</p><p>'${pacotes[index]._data}'</p><div class="Flex_Botoes"><button class="BotaoEditar" onclick='editar("${pacotes[index]._nome}","${pacotes[index]._descricao}","${pacotes[index]._data}","${pacotes[index]._status}","${pacotes[index]._id}")'>Editar</button><button class="BotaoExcluir" onclick="excluir()" id = "botaoExcluir">Excluir</button></div></div>`;
    }
    listagemDePacote.innerHTML = listagem;
    console.log(pacotes);
};
let boxSelecionado;
const cadastrar = () => {
    if (boxAtivo.checked) {
        boxSelecionado = true;
        console.log(boxSelecionado);
    }
    else if (boxInativo.checked) {
        boxSelecionado = false;
        console.log(boxSelecionado);
    }
    let CriarPacote = new Pacote(NomePacote.value, Descricao.value, Data.value, boxSelecionado, pacotes.length);
    pacotes.push(CriarPacote);
    pegarPacote();
};
const excluir = (index) => {
    resposta = confirm("Você tem certeza que deseja excluir?");
    if (resposta == true) {
        pacotes.splice(index, 1);
        alert("Pacote excluido");
    }
    else {
        alert("Exclusão cancelada");
    }
    pegarPacote();
};
const editar = (nome, descricao, data, status, id) => {
    console.log(nome, descricao, data, status, id);
    //passar pras inputs nome,descricao,data
    iD = id;
    NomePacote.value = nome;
    Descricao.value = descricao;
    Data.value = data;
    //mudar cadastro para editar
    BotaoCadastrar.innerHTML = "<button class= 'Ajustar' onclick='ajustar()'>Ajustar</button>";
};
const ajustar = () => {
    let devolver = new Pacote(NomePacote.value, Descricao.value, Data.value, false, iD);
    pacotes.splice(iD - 1, 1, devolver);
    console.log(iD);
    pegarPacote();
};
class Pacote {
    constructor(_nome, _descricao, _data, _status, _id) {
        this.nome = _nome;
        this.descricao = _descricao;
        this.data = _data;
        this.status = _status;
        this.id = _id;
    }
    get _nome() {
        return this.nome;
    }
    get _descricao() {
        return this.descricao;
    }
    get _data() {
        return this.data;
    }
    get _status() {
        return this.status;
    }
    get _id() {
        return this.id;
    }
    set _nome(_nome) {
        this.nome = _nome;
    }
    set _descricao(_descricao) {
        this.descricao = _descricao;
    }
    set _data(_data) {
        this.data = _data;
    }
    set _status(_status) {
        this.status = _status;
    }
    set _id(_id) {
        this.id = _id;
    }
}
var endpoint = 'https://62361b7feb166c26eb2f488a.mockapi.io/pacotes';
fetch(endpoint, {
    method: 'GET',
    headers: { 'Content-Type': "application/json" },
})
    .then(Response => Response.json())
    .then(Result => {
    console.log(Result);
    for (let index = 0; index < Result.length; index++) {
        pacotes[index] = new Pacote(Result[index].nome, Result[index].descricao, Result[index].data, Result[index].status, Result[index].id);
    }
    console.log(pacotes);
    pegarPacote();
})
    .catch(erro => console.log(erro));
