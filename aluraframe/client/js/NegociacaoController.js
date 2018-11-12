class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }
    
    adiciona(event) {
        event.preventDefault()    

        console.log(this.getNegociacao());

        reiniciarCampos();

    }

    getNegociacao() {
        return new Negociacao(
            new Date(this._inputData.value.replace(/-/g,',')),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }

    reiniciarCampos() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
    }
}