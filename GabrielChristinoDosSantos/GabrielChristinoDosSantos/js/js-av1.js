class Livro {
    constructor(codLivro, descLivro, qtdeDisponivel) {
        this.codLivro = codLivro;
        this.descLivro = descLivro;
        this.qtdeDisponivel = qtdeDisponivel;
    }

    reservarLivro(quantidade) {
        if (this.qtdeDisponivel >= quantidade) {

            this.qtdeDisponivel -= quantidade;
            alert(`Livro reservado com sucesso! Quantidade disponível atual é: ${this.qtdeDisponivel}`);
        } else {
            alert("Não há quantidade suficiente!");
        }
    }

    devolverLivro(quantidade) {

        this.qtdeDisponivel += quantidade;
        alert(`Livro devolvido com sucesso! Quantidade disponível atual é: ${this.qtdeDisponivel}`);
    }

    consultarDisponibilidade() {
        return `Código: ${this.codLivro}, Descrição: ${this.descLivro}, Quantidade disponível: ${this.qtdeDisponivel}`;
    }
}
