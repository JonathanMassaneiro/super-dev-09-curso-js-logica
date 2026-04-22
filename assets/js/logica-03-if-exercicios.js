function exercicio1() {
    let nome = prompt("Digite seu nome:");
    let idade = parseInt(prompt("Digite sua idade:"));

    if (idade >= 18) {
        alert(nome + ", você tem 18 anos ou mais.");
    } else {
        alert(nome + ", você é menor de 18 anos.");
    }
}

function exercicio2() {
    let numero = parseInt(prompt("Digite um número:"));

    if (numero > 10) {
        alert("O número é maior que 10.");
    } else {
        alert("O número não é maior que 10.");
    }
}

function exercicio3() {
    let numero = parseInt(prompt("Digite um número:"));

    if (numero === 0) {
        alert("O número é zero.");
    } else {
        alert("O número não é zero.");
    }
}

function exercicio4() {
    let numero = parseInt(prompt("Digite um número:"));

    if (numero !== 8001) {
        alert("O número não é 8001.");
    } else {
        alert("O número é 8001.");
    }
}

function exercicio5() {
    let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

    let soma = numero1 + numero2;

    if (soma > 0) {
        alert("A soma é " + soma + " e o resultado é positivo.");
    } else {
        alert("A soma é " + soma + " e o resultado não é positivo.");
    }
}

function exercicio6() {
    let preco1 = parseFloat(prompt("Digite o primeiro preço:"));
    let preco2 = parseFloat(prompt("Digite o segundo preço:"));
    let preco3 = parseFloat(prompt("Digite o terceiro preço:"));

    let total = preco1 + preco2 + preco3;

    if (total <= 100) {
        alert("Total da compra: R$ " + total.toFixed(2) + ". Você pode realizar a compra.");
    } else {
        alert("Total da compra: R$ " + total.toFixed(2) + ". Você não pode realizar a compra.");
    }
}

function exercicio7() {
    let idade = parseInt(prompt("Digite sua idade:"));

    if (idade < 16) {
        alert("Não pode votar.");
    } else if (idade >= 16 && idade <= 17) {
        alert("Voto opcional.");
    } else {
        alert("Voto obrigatório.");
    }
}

function exercicio8() {
    let numero = parseInt(prompt("Digite um número:"));

    if (numero < 0) {
        alert("Número negativo.");
    } else if (numero > 0) {
        alert("Número positivo.");
    } else {
        alert("Número zero.");
    }
}

function exercicio9() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    if (numero1 > numero2) {
        alert("O maior número é: " + numero1);
    } else if (numero2 > numero1) {
        alert("O maior número é: " + numero2);
    } else {
        alert("Os dois números são iguais.");
    }
}

function exercicio10() {
    let numero = parseInt(prompt("Digite um número:"));

    if (numero >= 10 && numero <= 20) {
        alert("O número está entre 10 e 20.");
    } else {
        alert("O número não está entre 10 e 20.");
    }
}

function exercicio11() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let numero3 = parseFloat(prompt("Digite o terceiro número:"));

    if (numero1 > 0 && numero2 > 0 && numero3 > 0) {
        alert("Todos os números são positivos.");
    } else {
        alert("Nem todos os números são positivos.");
    }
}

function exercicio12() {
    let usuario = prompt("Digite o usuário:");
    let senha = prompt("Digite a senha:");

    if (usuario === "admin" && senha === "1234") {
        alert("Login correto.");
    } else {
        alert("Login inválido.");
    }
}

function exercicio13() {
    let numero = parseInt(prompt("Digite um número:"));

    if (numero % 2 === 0) {
        alert("Número par.");
    } else {
        alert("Número ímpar.");
    }
}

function exercicio14() {
    let salario = parseFloat(prompt("Digite o salário familiar:"));

    if (salario < 2000) {
        alert("Baixo.");
    } else if (salario <= 5000) {
        alert("Médio.");
    } else {
        alert("Alto.");
    }
}

function exercicio15() {
    let temperatura = parseFloat(prompt("Digite a temperatura:"));

    if (temperatura < 15) {
        alert("Frio.");
    } else if (temperatura <= 25) {
        alert("Agradável.");
    } else {
        alert("Quente.");
    }
}

function exercicio16() {
    let numero1 = parseInt(prompt("Digite o primeiro número:"));
    let numero2 = parseInt(prompt("Digite o segundo número:"));

    if (numero1 === 0 || numero2 === 0) {
        alert("Não é possível verificar múltiplos com zero.");
    } else if (numero1 % numero2 === 0 || numero2 % numero1 === 0) {
        alert("Um número é múltiplo do outro.");
    } else {
        alert("Um número não é múltiplo do outro.");
    }
}

function exercicio17() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));

    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7) {
        alert("Aprovado.");
    } else if (media >= 5) {
        alert("Recuperação.");
    } else {
        alert("Reprovado.");
    }
}

function exercicio18() {
    let idade = parseInt(prompt("Digite a idade:"));
    let renda = parseFloat(prompt("Digite a renda:"));

    if (idade >= 18 && renda >= 2000) {
        alert("Aprovado para crédito.");
    } else {
        alert("Não aprovado.");
    }
}

function exercicio19() {
    let horario = parseInt(prompt("Digite um horário de 0 até 23:"));

    if (horario >= 0 && horario <= 11) {
        alert("Bom dia.");
    } else if (horario >= 12 && horario <= 17) {
        alert("Boa tarde.");
    } else if (horario >= 18 && horario <= 23) {
        alert("Boa noite.");
    } else {
        alert("Hora inválida.");
    }
}

function exercicio20() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let opcao = parseInt(prompt(
        "Escolha uma operação:\n" +
        "1 - Soma\n" +
        "2 - Subtração\n" +
        "3 - Multiplicação\n" +
        "4 - Divisão"
    ));

    if (opcao === 1) {
        let resultado = numero1 + numero2;
        alert("Resultado: " + resultado);
    } else if (opcao === 2) {
        let resultado = numero1 - numero2;
        alert("Resultado: " + resultado);
    } else if (opcao === 3) {
        let resultado = numero1 * numero2;
        alert("Resultado: " + resultado);
    } else if (opcao === 4) {
        if (numero2 === 0) {
            alert("Não é possível dividir por zero.");
        } else {
            let resultado = numero1 / numero2;
            alert("Resultado: " + resultado);
        }
    } else {
        alert("Opção inválida.");
    }
}

function exercicio21() {
    let x = parseFloat(prompt("Digite o valor de x:"));
    let y = parseFloat(prompt("Digite o valor de y:"));
    let z = parseFloat(prompt("Digite o valor de z:"));

    if (x < y && y < z) {
        alert("Ordem crescente: " + x + ", " + y + ", " + z);
    } 
    else if (x < z && z < y) {
        alert("Ordem crescente: " + x + ", " + z + ", " + y);
    } 
    else if (y < x && x < z) {
        alert("Ordem crescente: " + y + ", " + x + ", " + z);
    } 
    else if (y < z && z < x) {
        alert("Ordem crescente: " + y + ", " + z + ", " + x);
    } 
    else if (z < x && x < y) {
        alert("Ordem crescente: " + z + ", " + x + ", " + y);
    } 
    else if (z < y && y < x) {
        alert("Ordem crescente: " + z + ", " + y + ", " + x);
    } 
    else if (x == y && y == z) {
        alert("Ordem crescente: " + x + ", " + y + ", " + z);
    } 
    else if (x == y && x < z) {
        alert("Ordem crescente: " + x + ", " + y + ", " + z);
    } 
    else if (x == y && x > z) {
        alert("Ordem crescente: " + z + ", " + x + ", " + y);
    } 
    else if (x == z && x < y) {
        alert("Ordem crescente: " + x + ", " + z + ", " + y);
    } 
    else if (x == z && x > y) {
        alert("Ordem crescente: " + y + ", " + x + ", " + z);
    } 
    else if (y == z && y < x) {
        alert("Ordem crescente: " + y + ", " + z + ", " + x);
    } 
    else if (y == z && y > x) {
        alert("Ordem crescente: " + x + ", " + y + ", " + z);
    }
}