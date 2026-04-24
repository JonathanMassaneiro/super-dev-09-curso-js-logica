function contarLetrasNome() {
    let nome = prompt("Digite um nome:");
    alert("O nome possui " + nome.length + " caracteres.");
}

function converterParaMaiusculas() {
    let frase = prompt("Digite uma frase:");
    alert(frase.toUpperCase());
}

function converterParaMinusculas() {
    let frase = prompt("Digite uma frase:");
    alert(frase.toLowerCase());
}

function mostrarPrimeiraLetra() {
    let palavra = prompt("Digite uma palavra:");
    alert("A primeira letra é: " + palavra.charAt(0));
}

function mostrarUltimaLetra() {
    let palavra = prompt("Digite uma palavra:");
    alert("A última letra é: " + palavra.charAt(palavra.length - 1));
}

function verificarPalavraNaFrase() {
    let frase = prompt("Digite uma frase:");
    let palavra = prompt("Digite a palavra que deseja procurar:");

    if (frase.includes(palavra)) {
        alert("A palavra aparece dentro da frase.");
    } else {
        alert("A palavra não aparece dentro da frase.");
    }
}

function substituirCorNaFrase() {
    let frase = prompt("Digite uma frase com a palavra azul:");
    let novaFrase = frase.replace("azul", "vermelho");

    alert(novaFrase);
}

function trocarEstacao() {
    let frase = "Eu gosto de verão";
    let novaFrase = frase.replace("verão", "inverno");

    alert(novaFrase);
}

function mostrarQuatroPrimeirosCaracteres() {
    let palavra = prompt("Digite uma palavra:");
    alert("Os 4 primeiros caracteres são: " + palavra.substring(0, 4));
}

function separarNomeCompleto() {
    let nomeCompleto = prompt("Digite seu nome completo:");
    let partes = nomeCompleto.split(" ");

    alert(partes.join("\n"));
}

function removerEspacosExtras() {
    let texto = "   JavaScript   ";
    let textoCorrigido = texto.trim();

    alert(textoCorrigido);
}

function repetirPalavraTresVezes() {
    let palavra = prompt("Digite uma palavra:");
    alert(palavra.repeat(3));
}

function encontrarPosicaoPalavra() {
    let frase = "Eu estudo JavaScript todos os dias";
    let posicao = frase.indexOf("JavaScript");

    alert("A palavra JavaScript começa na posição: " + posicao);
}

function verificarInicioEFim() {
    let palavra = prompt("Digite uma palavra:");

    if (palavra.startsWith("a") && palavra.endsWith("o")) {
        alert("A palavra começa com a letra a e termina com a letra o.");
    } else if (palavra.startsWith("a")) {
        alert("A palavra começa com a letra a, mas não termina com o.");
    } else if (palavra.endsWith("o")) {
        alert("A palavra não começa com a, mas termina com o.");
    } else {
        alert("A palavra não começa com a e não termina com o.");
    }
}

function trocarDominioEmail() {
    let email = prompt("Digite um e-mail com @gmail.com:");
    let novoEmail = email.replace("@gmail.com", "@hotmail.com");

    alert(novoEmail);
}