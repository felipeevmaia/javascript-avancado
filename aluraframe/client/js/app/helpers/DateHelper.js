class DateHelper {
    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
    
    static textoParaData(texto) {
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
            throw new Error(`A data deve ter o formato ano-mês-dia: ${texto}`);
        }
        return new Date(texto.split('-'));
    }
}