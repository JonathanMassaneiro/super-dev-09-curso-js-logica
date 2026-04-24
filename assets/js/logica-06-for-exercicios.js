function exercicio01MostrarNumeros() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }

    alert("Números mostrados no console.");
}

function exercicio02MostrarNomeVariasVezes() {
    let nome = prompt("Digite um nome:");

    for (let i = 1; i <= 3; i++) {
        console.log(nome);
    }

    alert("Nome mostrado 3 vezes no console.");
}

function exercicio03ContarAteDez() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }

    alert("Números de 1 até 10 mostrados no console.");
}

function exercicio04ContarRegressivo() {
    for (let i = 5; i >= 1; i--) {
        console.log(i);
    }

    alert("Contagem regressiva mostrada no console.");
}

function exercicio05SomarNumeros() {
    let soma = 0;

    for (let i = 1; i <= 5; i++) {
        soma = soma + i;
    }

    alert("A soma dos números de 1 até 5 é: " + soma);
}

function exercicio06MostrarNumerosPares() {
    for (let i = 0; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

    alert("Números pares mostrados no console.");
}

function exercicio07MostrarNumerosImpares() {
    for (let i = 1; i <= 9; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }

    alert("Números ímpares mostrados no console.");
}

function exercicio08SolicitarTresNomes() {
    for (let i = 1; i <= 3; i++) {
        let nome = prompt("Digite o nome da pessoa " + i + ":");
        console.log(nome);
    }

    alert("Nomes mostrados no console.");
}

function exercicio09SomarTresIdades() {
    let soma = 0;

    for (let i = 1; i <= 3; i++) {
        let idade = parseInt(prompt("Digite a idade da pessoa " + i + ":"));
        soma = soma + idade;
    }

    alert("Soma total das idades: " + soma);
}

function exercicio10CalcularMediaSimples() {
    let soma = 0;

    for (let i = 1; i <= 4; i++) {
        let nota = parseFloat(prompt("Digite a nota " + i + ":"));
        soma = soma + nota;
    }

    let media = soma / 4;

    alert("A média é: " + media.toFixed(2));
}

function exercicio11ContarMaioresDeIdade() {
    let maiores = 0;

    for (let i = 1; i <= 5; i++) {
        let idade = parseInt(prompt("Digite a idade da pessoa " + i + ":"));

        if (idade >= 18) {
            maiores++;
        }
    }

    alert("Quantidade de pessoas maiores de idade: " + maiores);
}

function exercicio12MostrarTabuada() {
    let numero = parseInt(prompt("Digite um número:"));
    let resultado = "";

    for (let i = 1; i <= 10; i++) {
        resultado = resultado + numero + " x " + i + " = " + (numero * i) + "\n";
    }

    alert(resultado);
}

function exercicio13ContarLetrasNomes() {
    for (let i = 1; i <= 4; i++) {
        let nome = prompt("Digite o nome da pessoa " + i + ":");
        alert("O nome " + nome + " possui " + nome.length + " letras.");
    }
}

function exercicio14MaiorNumero() {
    let maior = 0;

    for (let i = 1; i <= 5; i++) {
        let numero = parseFloat(prompt("Digite o número " + i + ":"));

        if (i === 1) {
            maior = numero;
        } else if (numero > maior) {
            maior = numero;
        }
    }

    alert("O maior número digitado foi: " + maior);
}

function exercicio15MenorNumero() {
    let menor = 0;

    for (let i = 1; i <= 5; i++) {
        let numero = parseFloat(prompt("Digite o número " + i + ":"));

        if (i === 1) {
            menor = numero;
        } else if (numero < menor) {
            menor = numero;
        }
    }

    alert("O menor número digitado foi: " + menor);
}

function exercicio16ContarPositivos() {
    let positivos = 0;

    for (let i = 1; i <= 6; i++) {
        let numero = parseFloat(prompt("Digite o número " + i + ":"));

        if (numero > 0) {
            positivos++;
        }
    }

    alert("Quantidade de números positivos: " + positivos);
}

function exercicio17SomarPares() {
    let soma = 0;

    for (let i = 1; i <= 5; i++) {
        let numero = parseInt(prompt("Digite o número " + i + ":"));

        if (numero % 2 === 0) {
            soma = soma + numero;
        }
    }

    alert("Soma dos números pares: " + soma);
}

function exercicio18MostrarMultiplosDeTres() {
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }

    alert("Múltiplos de 3 mostrados no console.");
}

function exercicio19CadastrarProdutos() {
    for (let i = 1; i <= 3; i++) {
        let produto = prompt("Digite o nome do produto " + i + ":");
    }

    alert("Produtos cadastrados com sucesso");
}

function exercicio20RelatorioSimples() {
    let quantidade = 0;
    let somaIdades = 0;

    for (let i = 1; i <= 3; i++) {
        let nome = prompt("Digite o nome da pessoa " + i + ":");
        let idade = parseInt(prompt("Digite a idade da pessoa " + i + ":"));

        quantidade++;
        somaIdades = somaIdades + idade;
    }

    let media = somaIdades / quantidade;

    alert(
        "Quantidade de pessoas cadastradas: " + quantidade +
        "\nSoma das idades: " + somaIdades +
        "\nMédia das idades: " + media.toFixed(2)
    );
}

function exercicio21MostrarNumerosParesIntervalo() {
    let inicio = parseInt(prompt("Digite o número inicial:"));
    let fim = parseInt(prompt("Digite o número final:"));

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }

    alert("Números pares do intervalo mostrados no console.");
}

function exercicio22SomarNumerosIntervalo() {
    let inicio = parseInt(prompt("Digite o número inicial:"));
    let fim = parseInt(prompt("Digite o número final:"));
    let soma = 0;

    for (let i = inicio; i <= fim; i++) {
        soma = soma + i;
    }

    alert("Soma total do intervalo: " + soma);
}

function exercicio23ContarNumerosNegativos() {
    let negativos = 0;

    for (let i = 1; i <= 6; i++) {
        let numero = parseFloat(prompt("Digite o número " + i + ":"));

        if (numero < 0) {
            negativos++;
        }
    }

    alert("Quantidade de números negativos: " + negativos);
}

function exercicio24CalcularMediaAlturas() {
    let somaAlturas = 0;

    for (let i = 1; i <= 5; i++) {
        let altura = parseFloat(prompt("Digite a altura da pessoa " + i + ":"));

        somaAlturas = somaAlturas + altura;
    }

    let media = somaAlturas / 5;

    alert("Média das alturas: " + media.toFixed(2));
}

function exercicio25ContarNotasAcimaSete() {
    let quantidade = 0;

    for (let i = 1; i <= 8; i++) {
        let nota = parseFloat(prompt("Digite a nota " + i + ":"));

        if (nota >= 7) {
            quantidade++;
        }
    }

    alert("Quantidade de notas maiores ou iguais a 7: " + quantidade);
}

function exercicio26MaiorEMenorNumero() {
    let maior = 0;
    let menor = 0;

    for (let i = 1; i <= 7; i++) {
        let numero = parseFloat(prompt("Digite o número " + i + ":"));

        if (i === 1) {
            maior = numero;
            menor = numero;
        } else {
            if (numero > maior) {
                maior = numero;
            }

            if (numero < menor) {
                menor = numero;
            }
        }
    }

    alert(
        "Maior número: " + maior +
        "\nMenor número: " + menor
    );
}

function exercicio27SomarIdadesMaioresDeIdade() {
    let soma = 0;

    for (let i = 1; i <= 5; i++) {
        let nome = prompt("Digite o nome da pessoa " + i + ":");
        let idade = parseInt(prompt("Digite a idade da pessoa " + i + ":"));

        if (idade >= 18) {
            soma = soma + idade;
        }
    }

    alert("Soma das idades das pessoas maiores de idade: " + soma);
}

function exercicio28ContarHomensEMulheres() {
    let homens = 0;
    let mulheres = 0;

    for (let i = 1; i <= 6; i++) {
        let nome = prompt("Digite o nome da pessoa " + i + ":");
        let sexo = prompt("Digite o sexo da pessoa " + i + " - M ou F:");
        sexo = sexo.toUpperCase();

        if (sexo === "M") {
            homens++;
        } else if (sexo === "F") {
            mulheres++;
        }
    }

    alert(
        "Quantidade de homens: " + homens +
        "\nQuantidade de mulheres: " + mulheres
    );
}

function exercicio29ValidarNota() {
    let soma = 0;

    for (let i = 1; i <= 5; i++) {
        let nota = parseFloat(prompt("Digite a nota " + i + ":"));

        while (nota < 0 || nota > 10) {
            nota = parseFloat(prompt("Nota inválida. Digite novamente a nota " + i + ":"));
        }

        soma = soma + nota;
    }

    let media = soma / 5;

    alert("Média das notas válidas: " + media.toFixed(2));
}

function exercicio30TabuadasCompletas() {
    let resultado = "";

    for (let numero = 1; numero <= 5; numero++) {
        resultado = resultado + "Tabuada do " + numero + "\n";

        for (let i = 1; i <= 10; i++) {
            resultado = resultado + numero + " x " + i + " = " + (numero * i) + "\n";
        }

        resultado = resultado + "\n";
    }

    alert(resultado);
}

function exercicio31ContarAprovadosReprovados() {
    let aprovados = 0;
    let reprovados = 0;

    for (let i = 1; i <= 6; i++) {
        let nome = prompt("Digite o nome do aluno " + i + ":");
        let nota = parseFloat(prompt("Digite a nota do aluno " + i + ":"));

        if (nota >= 7) {
            aprovados++;
        } else {
            reprovados++;
        }
    }

    alert(
        "Quantidade de aprovados: " + aprovados +
        "\nQuantidade de reprovados: " + reprovados
    );
}

function exercicio32SomarValoresPositivos() {
    let soma = 0;

    for (let i = 1; i <= 8; i++) {
        let numero = parseFloat(prompt("Digite o número " + i + ":"));

        if (numero > 0) {
            soma = soma + numero;
        }
    }

    alert("Soma dos valores positivos: " + soma);
}

function exercicio33EncontrarNomeMaisLongo() {
    let nomeMaisLongo = "";

    for (let i = 1; i <= 5; i++) {
        let nome = prompt("Digite o nome " + i + ":");

        if (i === 1) {
            nomeMaisLongo = nome;
        } else if (nome.length > nomeMaisLongo.length) {
            nomeMaisLongo = nome;
        }
    }

    alert("Nome mais longo digitado: " + nomeMaisLongo);
}

function exercicio34CalcularFatorial() {
    let numero = parseInt(prompt("Digite um número:"));
    let fatorial = 1;

    for (let i = 1; i <= numero; i++) {
        fatorial = fatorial * i;
    }

    alert("O fatorial de " + numero + " é: " + fatorial);
}

function exercicio35ContagemRegressivaPersonalizada() {
    let numero = parseInt(prompt("Digite um número:"));

    for (let i = numero; i >= 0; i--) {
        console.log(i);
    }

    alert("Fim da contagem");
}

function exercicio36ContarNotasEmFaixas() {
    let faixa1 = 0;
    let faixa2 = 0;
    let faixa3 = 0;
    let faixa4 = 0;

    for (let i = 1; i <= 8; i++) {
        let nota = parseFloat(prompt("Digite a nota " + i + ":"));

        if (nota >= 0 && nota <= 4) {
            faixa1++;
        } else if (nota >= 5 && nota <= 6) {
            faixa2++;
        } else if (nota >= 7 && nota <= 8) {
            faixa3++;
        } else if (nota >= 9 && nota <= 10) {
            faixa4++;
        }
    }

    alert(
        "Notas entre 0 e 4: " + faixa1 +
        "\nNotas entre 5 e 6: " + faixa2 +
        "\nNotas entre 7 e 8: " + faixa3 +
        "\nNotas entre 9 e 10: " + faixa4
    );
}

function exercicio37SomarMultiplosDeDoisETres() {
    let numero = parseInt(prompt("Digite um número:"));
    let soma = 0;

    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0 || i % 3 === 0) {
            soma = soma + i;
        }
    }

    alert("Soma dos múltiplos de 2 ou de 3: " + soma);
}

function exercicio38CalcularMediaComValidacao() {
    let soma = 0;
    let notasAcimaSete = 0;

    for (let i = 1; i <= 6; i++) {
        let nota = parseFloat(prompt("Digite a nota " + i + ":"));

        while (nota < 0 || nota > 10) {
            nota = parseFloat(prompt("Nota inválida. Digite novamente a nota " + i + ":"));
        }

        soma = soma + nota;

        if (nota >= 7) {
            notasAcimaSete++;
        }
    }

    let media = soma / 6;

    alert(
        "Soma das notas: " + soma.toFixed(2) +
        "\nMédia final: " + media.toFixed(2) +
        "\nNotas maiores ou iguais a 7: " + notasAcimaSete
    );
}

function exercicio39ContarParesEImparesDigitados() {
    let pares = 0;
    let impares = 0;
    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        let numero = parseInt(prompt("Digite o número " + i + ":"));

        soma = soma + numero;

        if (numero % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }

    alert(
        "Quantidade de números pares: " + pares +
        "\nQuantidade de números ímpares: " + impares +
        "\nSoma de todos os números: " + soma
    );
}

function exercicio40RelatorioCompletoTurmaSemVetor() {
    let quantidadeAlunos = 0;
    let aprovados = 0;
    let reprovados = 0;
    let maiorMedia = 0;
    let menorMedia = 0;
    let nomeMaiorMedia = "";

    for (let i = 1; i <= 5; i++) {
        let nome = prompt("Digite o nome do aluno " + i + ":");
        let nota1 = parseFloat(prompt("Digite a primeira nota do aluno " + i + ":"));
        let nota2 = parseFloat(prompt("Digite a segunda nota do aluno " + i + ":"));

        let media = (nota1 + nota2) / 2;

        quantidadeAlunos++;

        if (media >= 7) {
            aprovados++;
        } else {
            reprovados++;
        }

        if (i === 1) {
            maiorMedia = media;
            menorMedia = media;
            nomeMaiorMedia = nome;
        } else {
            if (media > maiorMedia) {
                maiorMedia = media;
                nomeMaiorMedia = nome;
            }

            if (media < menorMedia) {
                menorMedia = media;
            }
        }
    }

    alert(
        "Quantidade de alunos cadastrados: " + quantidadeAlunos +
        "\nQuantidade de alunos aprovados: " + aprovados +
        "\nQuantidade de alunos reprovados: " + reprovados +
        "\nMaior média da turma: " + maiorMedia.toFixed(2) +
        "\nMenor média da turma: " + menorMedia.toFixed(2) +
        "\nAluno com maior média: " + nomeMaiorMedia
    );
}