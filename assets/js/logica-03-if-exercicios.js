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

function exercicio22() {
    let numero1 = parseFloat(prompt("Digite o primeiro numero:"));
    let numero2 = parseFloat(prompt("Digite o segundo numero:"));
    let numero3 = parseFloat(prompt("Digite o terceiro numero:"));

    if (numero1 > numero2 && numero1 > numero3) {
        alert("O maior número é: " + numero1);
    } else if (numero2 > numero1 && numero2 > numero3) {
        alert("O maior número é: " + numero2);
    } else {
        alert("O maior número é: " + numero3);
    }

}

function exercicio23() {
    let numero1 = parseFloat(prompt("Digite o primeiro numero:"));
    let numero2 = parseFloat(prompt("Digite o segundo numero:"));
    let numero3 = parseFloat(prompt("Digite o terceiro numero:"));

    if (numero1 < numero2 && numero1 < numero3) {
        alert("O menor número é: " + numero1);
    } else if (numero2 < numero1 && numero2 < numero3) {
        alert("O menor número é: " + numero2);
    } else {
        alert("O menor número é: " + numero3);
    }
}

function exercicio24() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let numero3 = parseFloat(prompt("Digite o terceiro número:"));

    if (numero1 < numero2 && numero2 < numero3) {
        alert("Os números estão em ordem crescente.");
    } else if (numero1 > numero2 && numero2 > numero3) {
        alert("Os números estão em ordem decrescente.");
    } else {
        alert("Os números estão sem ordem definida.");
    }
}

function exercicio25() {
    let idade = parseInt(prompt("Digite a idade:"));

    if (idade >= 0 && idade <= 12) {
        alert("Criança");
    } else if (idade >= 13 && idade <= 17) {
        alert("Adolescente");
    } else if (idade >= 18 && idade <= 59) {
        alert("Adulto");
    } else if (idade >= 60) {
        alert("Idoso");
    } else {
        alert("Idade inválida");
    }
}

function exercicio26() {
    let valorCompra = parseFloat(prompt("Digite o valor da compra:"));
    let formaPagamento = parseInt(prompt(
        "Escolha a forma de pagamento:\n" +
        "1 - Dinheiro ou Pix\n" +
        "2 - Cartão de débito\n" +
        "3 - Cartão de crédito"
    ));

    let valorFinal;

    if (formaPagamento === 1) {
        valorFinal = valorCompra - (valorCompra * 0.10);
        alert("Valor final: R$ " + valorFinal.toFixed(2));
    } else if (formaPagamento === 2) {
        valorFinal = valorCompra - (valorCompra * 0.05);
        alert("Valor final: R$ " + valorFinal.toFixed(2));
    } else if (formaPagamento === 3) {
        valorFinal = valorCompra + (valorCompra * 0.10);
        alert("Valor final: R$ " + valorFinal.toFixed(2));
    } else {
        alert("Forma de pagamento inválida.");
    }
}

function exercicio27() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    if (numero1 > 0 && numero2 > 0) {
        alert("Os dois números são positivos.");
    } else if (numero1 < 0 && numero2 < 0) {
        alert("Os dois números são negativos.");
    } else if ((numero1 > 0 && numero2 < 0) || (numero1 < 0 && numero2 > 0)) {
        alert("Há um positivo e um negativo.");
    } else {
        alert("Pelo menos um dos números é zero.");
    }
}

function exercicio28() {
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));
    let faltas = parseInt(prompt("Digite a quantidade de faltas:"));

    let media = (nota1 + nota2 + nota3) / 3;

    if (media >= 7 && faltas <= 10) {
        alert("Média: " + media.toFixed(2) + "\nAluno aprovado.");
    } else if (media >= 5 && media < 7 && faltas <= 10) {
        alert("Média: " + media.toFixed(2) + "\nAluno em recuperação.");
    } else if (faltas > 10) {
        alert("Média: " + media.toFixed(2) + "\nAluno reprovado por faltas.");
    } else {
        alert("Média: " + media.toFixed(2) + "\nAluno reprovado por nota.");
    }
}

function exercicio29() {
    let numero = parseInt(prompt("Digite um número:"));

    if (numero % 2 === 0 && numero % 3 === 0) {
        alert("O número é divisível por 2 e por 3.");
    } else if (numero % 2 === 0) {
        alert("O número é divisível por 2.");
    } else if (numero % 3 === 0) {
        alert("O número é divisível por 3.");
    } else {
        alert("O número não é divisível por 2 nem por 3.");
    }
}

function exercicio30() {
    let ano = parseInt(prompt("Digite um ano:"));

    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        alert("O ano é bissexto.");
    } else {
        alert("O ano não é bissexto.");
    }
}

function exercicio31() {
    let lado1 = parseFloat(prompt("Digite o primeiro lado:"));
    let lado2 = parseFloat(prompt("Digite o segundo lado:"));
    let lado3 = parseFloat(prompt("Digite o terceiro lado:"));

    if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
        if (lado1 === lado2 && lado2 === lado3) {
            alert("Triângulo equilátero.");
        } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
            alert("Triângulo isósceles.");
        } else {
            alert("Triângulo escaleno.");
        }
    } else {
        alert("Não é possível formar um triângulo.");
    }
}

function exercicio32() {
    let numero = parseFloat(prompt("Digite um número:"));

    if (numero >= 50 && numero <= 100) {
        alert("O número está entre 50 e 100.");
    } else {
        alert("O número está fora do intervalo.");
    }
}

function exercicio33() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    let diferenca = numero1 - numero2;

    if (diferenca > 0) {
        alert("Diferença: " + diferenca + "\nResultado positivo.");
    } else if (diferenca < 0) {
        alert("Diferença: " + diferenca + "\nResultado negativo.");
    } else {
        alert("Diferença: " + diferenca + "\nResultado zero.");
    }
}

function exercicio34() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let numero3 = parseFloat(prompt("Digite o terceiro número:"));

    let media = (numero1 + numero2 + numero3) / 3;

    if (media >= 7) {
        alert("Média: " + media.toFixed(2) + "\nMédia acima ou igual a 7.");
    } else {
        alert("Média: " + media.toFixed(2) + "\nMédia abaixo de 7.");
    }
}

function exercicio35() {
    let numero = parseInt(prompt("Digite um número:"));

    if (numero >= 10 || numero <= -10) {
        alert("O número possui mais de um dígito.");
    } else {
        alert("O número possui apenas um dígito.");
    }
}

function exercicio36() {
    let numero = parseInt(prompt("Digite um número:"));

    if (numero === 5 || numero === 10 || numero === 15 || numero === 20) {
        alert("O número pertence ao conjunto.");
    } else {
        alert("O número não pertence ao conjunto.");
    }
}

function exercicio37() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    if (numero1 === numero2) {
        alert("Os números são iguais.");
    } else if (numero1 > numero2) {
        alert("Os números são diferentes.\nO maior é: " + numero1);
    } else {
        alert("Os números são diferentes.\nO maior é: " + numero2);
    }
}

function exercicio38() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let numero3 = parseFloat(prompt("Digite o terceiro número:"));

    if (numero1 < 0 || numero2 < 0 || numero3 < 0) {
        alert("Pelo menos um número é negativo.");
    } else {
        alert("Nenhum número é negativo.");
    }
}

function exercicio39() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let numero3 = parseFloat(prompt("Digite o terceiro número:"));

    if (
        (numero1 > 0 && numero2 <= 0 && numero3 <= 0) ||
        (numero1 <= 0 && numero2 > 0 && numero3 <= 0) ||
        (numero1 <= 0 && numero2 <= 0 && numero3 > 0)
    ) {
        alert("Apenas um número é positivo.");
    } else {
        alert("Não existe apenas um número positivo.");
    }
}

function exercicio40() {
    let numero1 = parseInt(prompt("Digite o primeiro número:"));
    let numero2 = parseInt(prompt("Digite o segundo número:"));

    if (numero2 === 0) {
        alert("Não é possível dividir por zero.");
    } else if (numero1 % numero2 === 0) {
        alert("O primeiro número é múltiplo do segundo.");
    } else {
        alert("O primeiro número não é múltiplo do segundo.");
    }
}

function exercicio41() {
    let numero = parseFloat(prompt("Digite um número:"));

    if (numero >= 10 && numero <= 20) {
        alert("O número está no intervalo de 10 a 20.");
    } else if (numero >= 50 && numero <= 100) {
        alert("O número está no intervalo de 50 a 100.");
    } else {
        alert("O número não está em nenhum intervalo.");
    }
}

function exercicio42() {
    let numero = parseFloat(prompt("Digite um número:"));

    if (numero < 30 || numero > 60) {
        alert("O número não pertence ao intervalo de 30 a 60.");
    } else {
        alert("O número pertence ao intervalo de 30 a 60.");
    }
}

function exercicio43() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let numero3 = parseFloat(prompt("Digite o terceiro número:"));

    if (numero1 !== numero2 && numero1 !== numero3 && numero2 !== numero3) {
        alert("Todos são diferentes.");
    } else {
        alert("Nem todos são diferentes.");
    }
}

function exercicio44() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let numero3 = parseFloat(prompt("Digite o terceiro número:"));

    if (numero1 === numero2 || numero1 === numero3 || numero2 === numero3) {
        alert("Existem valores repetidos.");
    } else {
        alert("Não existem valores repetidos.");
    }
}

function exercicio45() {
    let valorCompra = parseFloat(prompt("Digite o valor da compra:"));
    let valorFinal;

    if (valorCompra >= 200) {
        valorFinal = valorCompra - (valorCompra * 0.10);
        alert("Valor final com desconto: R$ " + valorFinal.toFixed(2));
    } else {
        valorFinal = valorCompra;
        alert("Valor final sem desconto: R$ " + valorFinal.toFixed(2));
    }
}

function exercicio46() {
    let idade = parseInt(prompt("Digite sua idade:"));

    if (idade >= 18) {
        alert("Acesso permitido.");
    } else {
        alert("Acesso negado.");
    }
}

function exercicio47() {
    let numero = parseInt(prompt("Digite um número:"));

    if (numero % 5 === 0 && numero % 10 === 0) {
        alert("O número é divisível por 5 e por 10.");
    } else if (numero % 5 === 0) {
        alert("O número é divisível por 5.");
    } else if (numero % 10 === 0) {
        alert("O número é divisível por 10.");
    } else {
        alert("O número não é divisível por 5 nem por 10.");
    }
}

function exercicio48() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    if (numero1 >= 1 && numero1 <= 100 && numero2 >= 1 && numero2 <= 100) {
        alert("Os dois números estão dentro do intervalo.");
    } else {
        alert("Um ou os dois números estão fora do intervalo.");
    }
}

function exercicio49() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    let numero3 = parseFloat(prompt("Digite o terceiro número:"));

    if (numero1 + numero2 > numero3) {
        alert("A soma do primeiro com o segundo é maior que o terceiro.");
    } else {
        alert("A soma do primeiro com o segundo não é maior que o terceiro.");
    }
}

function exercicio50() {
    let numero = parseInt(prompt("Digite um número:"));

    if (numero > 0 && numero % 2 === 0) {
        alert("O número é positivo e par.");
    } else {
        alert("O número não atende às duas condições.");
    }
}