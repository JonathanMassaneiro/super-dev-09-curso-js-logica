function exemploMensagem(){
    alert("Hello World minha primeira mensagem Jonathan")
}

function exemploString(){
    // Criando a variavel
    let nome = "Elias";
    let sobrenome = " Otto com Dois T";

    // Alterar o valor da variavel sobrenome
    sobrenome = "Otto";

    //Apresentando a varialvel
    alert(nome)
    alert(sobrenome)
}

function exemploStringConcatenacao(){
    let nomeProduto = "Sabão em pó";
    let marcaProduto = "Omo";

    // Concatenação: juntar um String(texto) com alguma outra coisa
    // "Sabão em pó" + " " => " Sabão em pó "
    let texto = nomeProduto + " " + marcaProduto;

    alert(texto);
}

function exemploNumeroInteiro(){
    let produto = "PC Gamer da Xuxa";
    let quantidadePcs = 16;

    let quantidadeMemoriaPorPc = 8;

    let totalGb = quantidadePcs * quantidadeMemoriaPorPc;
    // "\n" serve pra quebrar a linha

    alert(
        "produto: " + produto + 
        "\nQuantidade de PCs: " + quantidadePcs +
        "\nMemoria RAM por PC: " + quantidadeMemoriaPorPc + "GB" +
        "\nTotal de GB dos PCs: " + totalGb + "GB");
}

function exemploFloat(){
    let endereco = "Rua XV de Novembro"; // STRING
    let largura = 12.20;
    let comprimento = 45.50;
    let metroQuadrado = largura * comprimento;

    alert("M² do terreno: " + metroQuadrado);
}

function exemploBoolean(){
    // Quando entra na empresa
    let tenhoFeriasVencidas = false;

    // completei 1 ano de empresa
    tenhoFeriasVencidas = true;

    alert("Férias vencidas? " + tenhoFeriasVencidas);
}

function exemploCalcularSalario() {
    let colaborador = "Judity Silva";
    let email = "judity.gamer@gg.com";
    let valorHora = 150.60; // por hora de streaming
    let horasPorMes = 50;
    let beneficioDonate = 3500.98;

    // Calcular o salario bruto
    let salarioBruto = valorHora * horasPorMes;

    // Calcular o salario liquido
    let salarioLiquido = salarioBruto + beneficioDonate;

    alert(
        "colaborador: " + colaborador + "\n" +
        "email: " + email + "\n" +
        "valor por hora: " + valorHora.toFixed(2) + "\n" +
        "horas por mês: " + horasPorMes + "\n" +
        "salario bruto: R$ " + salarioBruto.toFixed(2) + "\n" +
        "beneficio Donate: R$ " + beneficioDonate.toFixed(2) + "\n" +
        "salario liquido: R$ " + salarioLiquido.toFixed(2)
    )
}

function exercicio01() {
    let personagemFavorito = "Homem-Aranha";
    let anoNascimento = 2000;
    let idade = 2026 - anoNascimento;
    let altura = 1.75;
    let peso = 70;
    let imc = peso / (altura * altura);
    let categoria = "Saudável";
    let quantidadeJobs = 5;
    let valorPorJob = 100;
    let salario = quantidadeJobs * valorPorJob;

    alert(
        "Personagem favorito: " + personagemFavorito +
        "\nAno de nascimento: " + anoNascimento +
        "\nIdade: " + idade +
        "\nAltura: " + altura +
        "\nPeso: " + peso +
        "\nIMC: " + imc.toFixed(2) +
        "\nCategoria: " + categoria +
        "\nQuantidade de jobs: " + quantidadeJobs +
        "\nValor por job: R$ " + valorPorJob.toFixed(2) +
        "\nSalário: R$ " + salario.toFixed(2)
    );
}

function exercicio02() {
    let nomeAluno = "Jonathan";
    let nota1 = 8.0;
    let nota2 = 7.5;
    let nota3 = 9.0;
    let nota4 = 6.5;
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    alert(
        "Nome do aluno: " + nomeAluno +
        "\nNota 1: " + nota1 +
        "\nNota 2: " + nota2 +
        "\nNota 3: " + nota3 +
        "\nNota 4: " + nota4 +
        "\nMédia: " + media.toFixed(2)
    );
}

function exercicio03() {
    let nomeProduto = "Notebook";
    let precoProduto = 2500;
    let quantidade = 2;
    let valorTotal = precoProduto * quantidade;
    let desconto = valorTotal * 0.10;
    let valorComDesconto = valorTotal - desconto;

    alert(
        "Produto: " + nomeProduto +
        "\nPreço: R$ " + precoProduto.toFixed(2) +
        "\nQuantidade: " + quantidade +
        "\nValor total: R$ " + valorTotal.toFixed(2) +
        "\nDesconto: R$ " + desconto.toFixed(2) +
        "\nValor com desconto: R$ " + valorComDesconto.toFixed(2)
    );
}

function exercicio04() {
    let nomeCarro = "Gol";
    let anoCarro = 2019;
    let velocidadeMaxima = 180;
    let tempoViagem = 3;
    let distancia = velocidadeMaxima * tempoViagem;

    alert(
        "Nome do carro: " + nomeCarro +
        "\nAno do carro: " + anoCarro +
        "\nVelocidade máxima: " + velocidadeMaxima + " km/h" +
        "\nTempo de viagem: " + tempoViagem + " horas" +
        "\nDistância: " + distancia + " km"
    );
}

function exercicio05() {
    let nomeCidade = "Blumenau";
    let populacao = 380000;
    let area = 519.8;
    let densidadeDemografica = populacao / area;

    alert(
        "Cidade: " + nomeCidade +
        "\nPopulação: " + populacao +
        "\nÁrea: " + area + " km²" +
        "\nDensidade demográfica: " + densidadeDemografica.toFixed(2) + " hab/km²"
    );
}

function exercicio06() {
    let nomeFilme = "Vingadores";
    let duracao = 180;
    let classificacao = "12 anos";
    let vezesAssistido = 4;

    alert(
        "Filme: " + nomeFilme +
        "\nDuração: " + duracao + " minutos" +
        "\nClassificação: " + classificacao +
        "\nQuantidade de vezes assistido: " + vezesAssistido
    );
}

function exercicio07() {
    let nomeFuncionario = "Carlos";
    let salarioBase = 2500;
    let horasExtras = 10;
    let valorHoraExtra = 30;
    let totalHorasExtras = horasExtras * valorHoraExtra;
    let salarioFinal = salarioBase + totalHorasExtras;

    alert(
        "Funcionário: " + nomeFuncionario +
        "\nSalário base: R$ " + salarioBase.toFixed(2) +
        "\nHoras extras: " + horasExtras +
        "\nValor por hora extra: R$ " + valorHoraExtra.toFixed(2) +
        "\nTotal horas extras: R$ " + totalHorasExtras.toFixed(2) +
        "\nSalário final: R$ " + salarioFinal.toFixed(2)
    );
}