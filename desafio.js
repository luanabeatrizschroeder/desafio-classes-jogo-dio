class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.tipoAtaque = ''
    }

    atacar() {
        if (this.tipo === "mago") {
            this.tipoAtaque = "magia";
        } else if (this.tipo === "guerreiro") {
            this.tipoAtaque = "espada";
        } else if (this.tipo === "monge") {
            this.tipoAtaque = "artes marciais";
        } else if (this.tipo === "ninja") {
            this.tipoAtaque = "shuriken"
        }
    }

    escrever() {
        console.log(`O ${this.tipo} atacou usando ${this.tipoAtaque}.`)
    }
}

let heroiUm = new heroi("Guilherme", 29, "guerreiro");
let heroiDois = new heroi("Luana", 26, "ninja");

heroiUm.atacar();
heroiDois.atacar();
heroiUm.escrever();
heroiDois.escrever();