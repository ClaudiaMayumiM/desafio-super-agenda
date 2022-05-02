console.log("==== Super Agenda ===");

// a classe responsável por instanciar cada novo contato
class Pessoa {
    constructor(nome, email, telefone){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}

// o objeto, com uma propriedade (que é um array), responsável por armazenar cada contato adicionado
// este objeto também possui um método responsável por fazer essa adição 
const contatos = {
    novoContato: [],

    addContato: function addContato(contato){
        [].push.call(this.novoContato, contato);
    }
};

function adicionar() {

    // entrada
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    if(nome == "" || email == "" || telefone == "") return;

    // processamento 
    const contato = new Pessoa(nome, email, telefone);

    contatos.addContato(contato);

    // saída
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";

    const dados = contatos.novoContato.map((contato, index) => {
        
        return `<tr>
                <td>${index+1}</td>
                <td>${contato.nome}</td>
                <td>${contato.email}</td>
                <td>${contato.telefone}</td>
            </tr>`
}).join("");


document.getElementById("contatos").innerHTML = dados;

console.log(contato, contatos);

};

