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