function exemploBasico() {
    let numero = 1;

    // se o numero é igual 1 faço alguma coisa
    if (numero === 1) {
        // fazer alguma coisa
        alert("um");
    } else { // else é o senão
        alert("outro numero");
    }
}

function exemploBasico02() {
    let idade = parseInt(prompt("Informe a idade"));

    if (idade < 18) { // se a idade é menor que 18 anos
        alert("Menor de idade");
    } else if (idade < 60) { // se a idade é menor que 60 anos
        alert("Adulto");
    } else { // senão eu sei que é maior que 59
        alert("Idoso");
    }
}

function exemploBasico03() {
    let numero = parseInt(prompt("Informe um numero"));

    // if (numero <= -1) {
    if (numero < 0) {
        alert("Numero negativo");
    } else if (numero > 0) {
        alert("Numero positivo");
    } else {
        alert("Numero neutro");
    }
}

function exemploProduto() {
    // produtos: Maçã 0.80, Pera 1.20, Laranja 2.50, Banana 2.00
    // senão for nenhuma das opções encerra a execução
    let produto = prompt("Digite o nome do produto");
    let quantidade = parseInt(prompt("Digite a quantidade"));

    let precoUnitario = 0;

    if (produto === "Maçã") {
        precoUnitario = 0.80;
    } else if (produto === "Pera") {
        precoUnitario = 1.20;
    } else if (produto === "Laranja") {
        precoUnitario = 2.50;
    } else if (produto === "Banana") {
        precoUnitario = 2.00;
    } else { // caso o produto não seja um produto válido
        alert("Produto não cadastrado");
        return;
    }

    let total = quantidade * precoUnitario;

    alert(
        "Produto: " + produto + "\n" +
        "Quantidade: " + quantidade + "\n" +
        "Preço unitário: R$ " + precoUnitario.toFixed(2) + "\n" +
        "Total: R$ " + total.toFixed(2)
    );
}

    let regular = 0;
    let bom = 0;
    let otimo = 0;

function avaliarRegular() {
    regular = regular + 1;
}

function avaliarBom() {
    bom = bom + 1;
}

function avaliarOtimo() {
    otimo = otimo + 1;
}

function finalizarAvaliacao() {
    alert(
        "Regular: " + regular + "\n" +
        "Bom: " + bom + "\n" +
        "Otimo: " + otimo
    );

    regular = 0;
    bom = 0;
    otimo = 0;
}



        /*
        Operadores Relacionais
        Igualdade de valor              ==
        Igualdade de valor e tipo       ===
        Menor                           <
        Menor ou igual                  <=
        Maior                           >
        Maior ou igual                  >=
        Diferente valor                 !=
        Diferente valor e tipo          !==
        */