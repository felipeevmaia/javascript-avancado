class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

    }
    
    adiciona(event) {
        event.preventDefault();
        
        let negociacao = this.getNegociacao();
        console.log(negociacao._data);
        console.log(DateHelper.dataParaTexto(negociacao._data)); 
        
        this._inputData.value = '';
        this._inputData.focus();
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
    }
    
    getNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade,
            this._inputValor
        );
    }

}