class Autor{
    constructor(id,nome,nascimento){
        this.id = id;
        this.nascimento = nascimento;
        this.nome = nome;
    }


}

var listaAutores = []






function lerArquivoCSV(arquivo, callback) {
    const leitor = new FileReader();

    leitor.onload = function (evento) {
        const conteudo = evento.target.result;
        callback(conteudo);
    };

    leitor.readAsText(arquivo);
}

function converterCSVparaArray(conteudoCSV) {
    const linhas = conteudoCSV.split('\n');
    const arrayCSV = [];

    linhas.forEach(function (linha) {
        const valores = linha.split(',');
        console.log("id " +valores[0] + " Nome " +valores[1] + " nascimento " + valores[2])
        let autor = new Autor(valores[0],valores[1],valores[2]);
        listaAutores.push(autor);
        arrayCSV.push(valores);
    });

    return arrayCSV;
}

// Selecionar o formulário e adicionar o evento de submissão
const formCSV = document.getElementById('formCSV');

formCSV.addEventListener('submit', function (evento) {
    evento.preventDefault(); // Impede o envio padrão do formulário

    const inputArquivo = document.getElementById('arquivoCSV');
    const arquivo = inputArquivo.files[0]; // Seleciona o arquivo CSV

    if (arquivo) {
        lerArquivoCSV(arquivo, function (conteudo) {
            const arrayCSV = converterCSVparaArray(conteudo);
            console.log(arrayCSV);

            arrayCSV.forEach(function (linha) {
                console.log(linha);
            });
        });
    } else {
        console.error("Nenhum arquivo selecionado");
    }
});