function exemplo01(){
    //prompt permite a interação com o usuario, ele podera digitar algo

    //string
    let nome = prompt("Digite o seu nome");

    let sobrenome = prompt("Digite o seu sobrenome");

    //Gerar o nome completo 
    //Concatenando nome, espaço e sobrenome
    let nomeCompleto = nome + " " + sobrenome;

    alert ("Nome completo; " + nomeCompleto);
}

function convercaoStringParaIntAlternativo(){
    
    let numero1 = parseInt(prompt("Digite o numero 1"));
    let numero2 = parseInt(prompt("Digite o numero 2"));
    let soma = numero1 + numero2;
    alert("Soma: " + soma);
}

function convercaoStringParaInt(){
    // Tudo que o usuario digitar vem como String(testo)

    // converter uma String para Int
    // "8" =>
    let numero1 = parseInt("8");
    let numero2 = parseInt("12");
    let soma = numero1 + numero2;
    alert("Soma: " + soma);
}

function convercaoStringParaFloat(){
    // Converter de String para Float

    let quantidadeHoras = parseInt(prompt("Digite a quantidade de horas Trabalhadas"));
    let valorHora = parseFloat(prompt("digite o valor hora"));

    let salarioBruto = quantidadeHoras * valorHora;
    alert(
        "Quantidade de horas: " + quantidadeHoras + "\n" +
        "Valor da hora: " + valorHora + "\n" +
        "salario bruto: " + salarioBruto
    );

}

function exemplo02(){
    let nome = prompt("Digite o nome do atleta");

    // Solicitar a altura em metros, para isso utilizaremos um float
    let altura = parseFloat(prompt("Digite a altura"));
    let peso = parseFloat(prompt("Digite o peso"));

    let imc = peso / (altura * altura);

    alert ("Atleta " + nome + " tem IMC " + imc);

}

function exemplo03(){
    
    let anoNascimento = parseInt(prompt("Digite o seu ano de Nascimento"));

    // let anoAtual = 2026;
    let anoAtual = new Date().getFullYear();

    let idade = anoAtual - anoNascimento;

    alert("Idade: " + idade);
}

function exemplo04(){
    let modelo = prompt("Informe o modelo do carro");
    let ano = parseInt(prompt("Informe o ano do carro"));

    let velocidadeMaxima = parseInt(prompt("Informe a velocidade maxima"));
    let tempoViagemHoras = parseInt(prompt("Informe as horas de viagem"));

    let distancia = velocidadeMaxima * tempoViagemHoras;
    
    alert("Carro: " + modelo +
        "\nAno: " + ano +
        "\nDistância estimada: " + distancia + " Km");
}
