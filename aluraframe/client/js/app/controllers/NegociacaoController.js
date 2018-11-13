class NegociacaoController {
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this._listaNegocicoes = new ListaNegociacoes();
    }
    
    adiciona(event) {
        event.preventDefault();
        
        let negociacao = this.getNegociacao();
        
        this._listaNegocicoes.adicina(negociacao);
        console.log(this._listaNegociacoes.negociacoes);

        _limpaFormulario();
    }
    
    _limpaFormulario() {
        this._inputData.value = '';
        this._inputData.focus();
        this._inputQuantidade.value = '';
        this._inputValor.value = 0.0;
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade,
            this._inputValor
        );
    }

}