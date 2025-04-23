//Aula 25/02
//Exercício 1
console.log("Aula 25/02\nExercício 1\n");
let valores = [10, 15, 20];
let somaValores = valores.reduce((a, b) => a + b, 0);
console.log("Soma:", somaValores);
//Exercício 2
console.log("\nAula 25/02\nExercício 2\n");
function mensagem(nome) {
    return `Olá, ${nome}! Como você está ?`;
}
console.log(mensagem("Lucca"));
//Exercício 3
console.log("\nAula 25/02\nExercício 3\n");
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    detalhes() {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro = new Carro("Ford", "Mustang", 2020);
console.log(carro.detalhes());
//Aula 07/03
//Exercício 1
console.log("\nAula 07/03\nExercício 1\n");
const meuCarro = {
    marca: "Volkswagen",
    modelo: "gol",
    ano: 2016
};
//Exercício 2
console.log("\nAula 07/03\nExercício 2\n");
;
const operacao = (num1, num2) => {
    return num1 * num2;
};
console.log(operacao(5, 8));
//Exercício 3
console.log("\nAula 07/03\nExercício 3\n");
function inverterArray(array) {
    return array.slice().reverse();
}
;
console.log(inverterArray([1, 2, 3, 4, 5]));
//Exercício 4
console.log("\nAula 07/03\nExercício 4\n");
;
;
// Criando o repositório 
class RepositorioUsuario {
    constructor() {
        this.usuarios = [];
    }
    salvar(dado) {
        this.usuarios.push(dado);
    }
    obterTodos() {
        return this.usuarios;
    }
}
;
// Testando o repositório de usuários
const repoUsuarios = new RepositorioUsuario();
repoUsuarios.salvar({ nome: "Lucca", email: "lucca@gmail.com" });
repoUsuarios.salvar({ nome: "Samara", email: "samara@gmail.com" });
console.log(repoUsuarios.obterTodos());
//Exercício 5
console.log("\nAula 07/03\nExercício 5\n");
// Função para processar a resposta do servidor
function processarResposta(resposta) {
    if (typeof resposta === "string") {
        console.log(`Mensagem do servidor: ${resposta}`);
    }
    else {
        console.log(`Operação bem-sucedida: ${resposta}`);
    }
}
;
// Testando a função processarResposta
processarResposta("Dados salvos com sucesso!");
processarResposta(true);
processarResposta(false);
//Exercício 6
console.log("\nAula 07/03\nExercício 6\n");
;
;
// Criando o objeto 
const estudanteTrabalhador = {
    nome: "Lucca Vilaça",
    curso: "Engenharia de Software",
    empresa: "Eduxe",
    cargo: "Estagiário"
};
console.log(estudanteTrabalhador);
