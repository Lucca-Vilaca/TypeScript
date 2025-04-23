//Aula 25/02
//Exercício 1
console.log("Aula 25/02\nExercício 1\n");
let valores: number[] = [10, 15, 20];
let somaValores: number = valores.reduce((a, b) => a + b, 0);
console.log("Soma:", somaValores);

//Exercício 2
console.log("\nAula 25/02\nExercício 2\n");
function mensagem(nome: string): string {
    return `Olá, ${nome}! Como você está ?`;
}
console.log(mensagem("Lucca"));

//Exercício 3
console.log("\nAula 25/02\nExercício 3\n");
class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro = new Carro("Ford", "Mustang", 2020);
console.log(carro.detalhes())

//Aula 07/03
//Exercício 1
console.log("\nAula 07/03\nExercício 1\n");
interface Car {
    marca: string;
    modelo: string;
    ano: number;
    motor?:string;
}
const meuCarro: Car = {
    marca: "Volkswagen",
    modelo: "gol",
    ano: 2016
};

//Exercício 2
console.log("\nAula 07/03\nExercício 2\n");
interface Multiplicacao {

    (num1: number, num2: number): number;
};
const operacao: Multiplicacao = (num1,num2) => {
    return num1 * num2;
};

console.log(operacao(5,8));

//Exercício 3
console.log("\nAula 07/03\nExercício 3\n");
function inverterArray<T>(array: T[]): T[] {
    return array.slice().reverse();
};

  console.log(inverterArray([1, 2, 3, 4, 5])); 

//Exercício 4
console.log("\nAula 07/03\nExercício 4\n");
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
  };
  
  // Definição da interface Usuario
  interface Usuario {
    nome: string;
    email: string;
  };
  
  // Criando o repositório 
  class RepositorioUsuario implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];
  
    salvar(dado: Usuario): void {
      this.usuarios.push(dado);
    }
  
    obterTodos(): Usuario[] {
      return this.usuarios;
    }
  };
  
  // Testando o repositório de usuários
  const repoUsuarios = new RepositorioUsuario();
  repoUsuarios.salvar({ nome: "Lucca", email: "lucca@gmail.com" });
  repoUsuarios.salvar({ nome: "Samara", email: "samara@gmail.com" });
  console.log(repoUsuarios.obterTodos());


//Exercício 5
console.log("\nAula 07/03\nExercício 5\n");
type RespostaServidor = string | boolean;

// Função para processar a resposta do servidor
function processarResposta(resposta: RespostaServidor): void {
  if (typeof resposta === "string") {
    console.log(`Mensagem do servidor: ${resposta}`);
  } else {
    console.log(`Operação bem-sucedida: ${resposta}`);
  }
};

// Testando a função processarResposta
processarResposta("Dados salvos com sucesso!");
processarResposta(true); 
processarResposta(false); 

//Exercício 6
console.log("\nAula 07/03\nExercício 6\n");
interface Estudante {
    nome: string;
    curso: string;
  };
  
  interface Trabalhador {
    empresa: string;
    cargo: string;
  };
  
  type EstudanteTrabalhador = Estudante & Trabalhador;
  
  // Criando o objeto 
  const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Lucca Vilaça",
    curso: "Engenharia de Software",
    empresa: "Eduxe",
    cargo: "Estagiário"
  };

  console.log(estudanteTrabalhador);