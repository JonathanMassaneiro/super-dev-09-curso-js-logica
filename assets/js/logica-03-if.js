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

function exemploOperadorLogicoE(){
    let idade = parseInt(prompt("Digite a Idade"));

    if ((idade >= 0) && (idade <= 17)) {
        alert("Criança ou Adolescente");
    } else if (idade >= 18) {
        alert("Adulto");
    } else {
        alert("Idade Invalida");
    }
}

function exemploOperadorLogicoOu(){
    let transporte = prompt("Digite o meio de transporte para viajar");

    // Pipeline |

    if ((transporte === "moto") || (transporte === "carro")) {
        alert("Viajar de Boas");
    } else {
        alert("Não vamos viajar");
    }
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

        /*
            Tabela Verdade Operador E
            V e V => V
            V e F => F
            F e V => F
            F e F => F
        */

        /*
            Limpar Banheiro ou limpar janelas => pão de queijo com quejo de minas
            caso contrario .....

            Tabela Verdade Ou
            V ou V => V
            V ou F => V
            F ou V => V
            F ou F => F
        */

    // moba, fps => 10%
    // aventura, rpg => 15%
    // roguelike, soulslike => 20%

    function exemploLoja(){
        let nome1 = prompt("Digite o nome do jogo 1");
        let categoria1 = prompt("Digite a categoria do jogo");
        let precoBase1 = 399.99;

        let precoComDesconto1 = 0;
        let percentualDesconto1 = 0;
        let precoDesconto1 = 0;

        if ((categoria1 === "moba") || (categoria1 === "fps")) {
            percentualDesconto1 = 0.10;
            precoDesconto1 = precoBase1 * percentualDesconto1;
            precoComDesconto1 = precoBase1 - precoDesconto1;
        } else if ((categoria1 === "aventura") || (categoria1 === "rpg")) {
            percentualDesconto = 0.15;
            precoDesconto1 = PercentualDesconto1 * precoBase1;
            precoComDesconto1 = percentualDesconto1 * precoBase1;
        } else if ((categoria1 === "roguelike") || (categoria1 === "soulslike")) {
            percentualDesconto1 = 0.20;
            precoDesconto1 = precoBase1 * percentualDesconto1;
            precoComDesconto = precoBase1 - precoDesconto1;
        }

        let nome2 = prompt("Digite o nome do jogo 2");
        let categoria2 = prompt("Digite a categoria do jogo");
        let precoBase2 = 190.99;

        let precoComDesconto2 = 0;
        let percentualDesconto2 = 0;
        let precoDesconto2 = 0;

        if ((categoria2 === "moba") || (categoria2 === "fps")) {
            percentualDesconto2 =0.10;
            precoDesconto2 = precoBase2 * percentualDesconto2;
        } else if ((categoria2 === "aventura") || (categoria2 === "rpg")) {
        percentualDesconto2 = 0,15;
        precoDesconto2 = percentualDesconto2 * precoBase2;
        precoComDesconto2 = precoBase2 - precoDesconto2;
        }   else if ((categoria2 === "roguelike") || (categoria2 === "soulslike")) {
            percentualDesconto2 = 0.20;
            precoDesconto2 = precoBase * percetualDesconto2;
            precoComDesconto2 = precoBase2 - precoDesconto2;
        }

        let totalPedido = precoComDesconto2;

        alert(
            "Nome: " + nome1 +
            "\nCategoria: " + categoria1 +
            "\nPreco base: R$ " + precoBase1.toFixed(2) +
            "\nValor do desconto R$ " + precoDesconto1.toFixed(2) +
            "\nPercentual de desconto: " + percentualDesconto1 * 100 + "%" +
            "\nPreço do jogo 1: R$ " + precoDesconto1.tofixed(2) +
        
            "\n\nNome: " + nome2 +
            "\nCategoria: " + categoria2 +
            "\nPreço base: R$ " + precoBase2.toFixed(2) +
            "\nValor do desconto: R$ " + precoDesconto2.toFixed(2) +
            "\nPercentual de desconto: " + percentualDesconto2 * 100 + "%" +
            "\npreço de jogo: R$ " + precoComDesconto2. tofixed(2) +
            "\n\nTotal: R$ " + totalPedido.toFixed(2));
     }