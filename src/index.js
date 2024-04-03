//Curso: Lógica de Programação
//Instrutor: Felipe Silva Aguiar
//Instituição: DIO.me

/*## Objetivo:

Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

- nome
- idade
- tipo (ex: guerreiro, mago, monge, ninja )

além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

- exibir a mensagem: "o {tipo} atacou usando {ataque}")
- aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

se mago -> no ataque exibir (usou magia)
se guerreiro -> no ataque exibir (usou espada)
se monge -> no ataque exibir (usou artes marciais)
se ninja -> no ataque exibir (usou shuriken)

## Saída

Ao final deve se exibir uma mensagem:

- "o {tipo} atacou usando {ataque}"
  ex: mago atacou usando magia,  guerreiro atacou usando espada
  */

// Iniciando código

//Criando classe chamada "caracteristicaHeroi"
class caracteristicasHeroi{
    constructor(nome, idade, tipo){  //Função para criar as propriedades do herói
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    escreverSaida(){  //Função para escrita de saída no console
        if(ataqueHeroi === "classe incorreta"){
            console.log(`Você não escolheu uma classe ou ela está incorreta, favor escolher 
            entre as classes: guerreiro, mago, monge ou ninja. ` + this.tipo)
        }else{
            console.log(`O ${this.nome} atacou usando ${ataqueHeroi}`)
        }
    }
}

let ataqueHeroi = ""  //Variável do tipo String para receber o ataque do herói
let heroi = new caracteristicasHeroi("Danielta", "30", "batedor") //Criação do objeto

//Estrutura para receber a classe do herói e retornar o ataque de acordo com sua classe
switch(heroi.tipo){ 
    case "guerreiro":
        ataqueHeroi = "espada"
    break

    case "mago":
        ataqueHeroi = "magia"
    break

    case "monge":
        ataqueHeroi = "artes marciais"
    break

    case "ninja":
        ataqueHeroi = "shuriken"
    break

    default:
        ataqueHeroi = "classe incorreta"
}

heroi.escreverSaida() //Utilizando a função escreverSaida para escrever no console