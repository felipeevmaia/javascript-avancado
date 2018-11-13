class ListaNegociacoes {
    constructor(){
        this._negociacoes = [];
    }
    
    adicina(negociacao) {
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

}