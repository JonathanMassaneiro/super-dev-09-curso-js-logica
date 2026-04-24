function exercicio01SolicitarDadosMedico() {
    let contador = 1;

    while (contador <= 5) {
        let nome = prompt("Digite o nome do médico:");
        let crm = prompt("Digite o CRM do médico:");

        contador++;
    }

    alert("Obrigado por utilizar nosso sistema Hospitalar");
}

function exercicio02SolicitarDadosPaciente() {
    let contador = 1;
    let quantidade = 0;

    while (contador <= 4) {
        let nome = prompt("Digite o nome do paciente:");
        let idade = parseInt(prompt("Digite a idade do paciente:"));

        quantidade++;
        contador++;
    }

    alert("Quantidade de pacientes cadastrados: " + quantidade);
}

function exercicio03SomarIdadesPacientes() {
    let contador = 1;
    let somaIdades = 0;

    while (contador <= 6) {
        let idade = parseInt(prompt("Digite a idade do paciente:"));

        somaIdades = somaIdades + idade;
        contador++;
    }

    alert("Soma total das idades: " + somaIdades);
}

function exercicio04CalcularMediaIdades() {
    let contador = 1;
    let somaIdades = 0;
    let media;

    while (contador <= 5) {
        let idade = parseInt(prompt("Digite a idade do paciente:"));

        somaIdades = somaIdades + idade;
        contador++;
    }

    media = somaIdades / 5;

    alert("Média das idades: " + media.toFixed(2));
}

function exercicio05ContarMaioresIdade() {
    let contador = 1;
    let maioresIdade = 0;

    while (contador <= 7) {
        let nome = prompt("Digite o nome do paciente:");
        let idade = parseInt(prompt("Digite a idade do paciente:"));

        if (idade >= 18) {
            maioresIdade++;
        }

        contador++;
    }

    alert("Quantidade de pacientes maiores de idade: " + maioresIdade);
}

function exercicio06ValidarCRM() {
    let contador = 1;

    while (contador <= 5) {
        let nome = prompt("Digite o nome do médico:");
        let crm = prompt("Digite o CRM do médico:");

        while (crm === "") {
            crm = prompt("CRM inválido. Digite o CRM novamente:");
        }

        contador++;
    }

    alert("Cadastro dos médicos finalizado");
}

function exercicio07SolicitarPressaoArterial() {
    let contador = 1;
    let pressaoAlta = 0;

    while (contador <= 6) {
        let pressao = parseFloat(prompt("Digite a pressão arterial do paciente:"));

        if (pressao > 14) {
            pressaoAlta++;
        }

        contador++;
    }

    alert("Quantidade de pacientes com pressão acima de 14: " + pressaoAlta);
}

function exercicio08MenuContinuarCadastro() {
    let continuar = "sim";
    let quantidade = 0;

    while (continuar === "sim") {
        let nome = prompt("Digite o nome do paciente:");

        quantidade++;

        continuar = prompt("Deseja continuar cadastrando? Digite sim ou não:");
        continuar = continuar.toLowerCase();
    }

    alert("Quantidade de pacientes cadastrados: " + quantidade);
}

function exercicio09SomarFrequenciaCardiaca() {
    let frequencia = parseInt(prompt("Digite a frequência cardíaca do paciente ou 0 para encerrar:"));
    let soma = 0;

    while (frequencia !== 0) {
        soma = soma + frequencia;

        frequencia = parseInt(prompt("Digite a frequência cardíaca do paciente ou 0 para encerrar:"));
    }

    alert("Soma total das frequências cardíacas: " + soma);
}

function exercicio10MaiorTemperatura() {
    let contador = 1;
    let maiorTemperatura = 0;

    while (contador <= 5) {
        let temperatura = parseFloat(prompt("Digite a temperatura do paciente:"));

        if (contador === 1) {
            maiorTemperatura = temperatura;
        } else if (temperatura > maiorTemperatura) {
            maiorTemperatura = temperatura;
        }

        contador++;
    }

    alert("Maior temperatura digitada: " + maiorTemperatura);
}

function exercicio11MenorTemperatura() {
    let contador = 1;
    let menorTemperatura = 0;

    while (contador <= 5) {
        let temperatura = parseFloat(prompt("Digite a temperatura do paciente:"));

        if (contador === 1) {
            menorTemperatura = temperatura;
        } else if (temperatura < menorTemperatura) {
            menorTemperatura = temperatura;
        }

        contador++;
    }

    alert("Menor temperatura digitada: " + menorTemperatura);
}

function exercicio12ContarSintomas() {
    let contador = 1;
    let quantidadeFebre = 0;

    while (contador <= 5) {
        let nome = prompt("Digite o nome do paciente:");
        let febre = prompt("O paciente está com febre? Digite sim ou não:");
        febre = febre.toLowerCase();

        if (febre === "sim") {
            quantidadeFebre++;
        }

        contador++;
    }

    alert("Quantidade de pacientes com febre: " + quantidadeFebre);
}

function exercicio13SepararPacientesPorIdade() {
    let contador = 1;
    let criancas = 0;
    let adolescentes = 0;
    let adultos = 0;

    while (contador <= 8) {
        let nome = prompt("Digite o nome do paciente:");
        let idade = parseInt(prompt("Digite a idade do paciente:"));

        if (idade < 12) {
            criancas++;
        } else if (idade >= 12 && idade <= 17) {
            adolescentes++;
        } else {
            adultos++;
        }

        contador++;
    }

    alert(
        "Crianças: " + criancas +
        "\nAdolescentes: " + adolescentes +
        "\nAdultos: " + adultos
    );
}

function exercicio14ValidarOpcaoMenu() {
    let opcao = 0;

    while (opcao !== 3) {
        opcao = parseInt(prompt(
            "Menu Hospitalar\n" +
            "1 - Cadastrar paciente\n" +
            "2 - Cadastrar médico\n" +
            "3 - Sair"
        ));

        if (opcao === 1) {
            alert("Paciente cadastrado.");
        } else if (opcao === 2) {
            alert("Médico cadastrado.");
        } else if (opcao === 3) {
            alert("Sistema encerrado");
        } else {
            alert("Opção inválida.");
        }
    }
}

function exercicio15RelatorioPacientes() {
    let contador = 1;
    let quantidadePacientes = 0;
    let somaIdades = 0;
    let maiorTemperatura = 0;
    let menorTemperatura = 0;
    let idosos = 0;

    while (contador <= 5) {
        let nome = prompt("Digite o nome do paciente:");
        let idade = parseInt(prompt("Digite a idade do paciente:"));
        let temperatura = parseFloat(prompt("Digite a temperatura do paciente:"));

        quantidadePacientes++;
        somaIdades = somaIdades + idade;

        if (contador === 1) {
            maiorTemperatura = temperatura;
            menorTemperatura = temperatura;
        } else {
            if (temperatura > maiorTemperatura) {
                maiorTemperatura = temperatura;
            }

            if (temperatura < menorTemperatura) {
                menorTemperatura = temperatura;
            }
        }

        if (idade >= 60) {
            idosos++;
        }

        contador++;
    }

    let mediaIdades = somaIdades / quantidadePacientes;

    alert(
        "Quantidade de pacientes cadastrados: " + quantidadePacientes +
        "\nMédia das idades: " + mediaIdades.toFixed(2) +
        "\nMaior temperatura: " + maiorTemperatura +
        "\nMenor temperatura: " + menorTemperatura +
        "\nPacientes com 60 anos ou mais: " + idosos
    );
}

function exercicio16SenhaAcessoSistema() {
    let senha = prompt("Digite a senha de acesso:");

    while (senha !== "hospital123") {
        senha = prompt("Senha incorreta. Digite novamente:");
    }

    alert("Acesso liberado ao sistema hospitalar");
}

function exercicio17CadastroComValidacaoCompleta() {
    let contador = 1;
    let cadastrados = 0;

    while (contador <= 5) {
        let nome = prompt("Digite o nome do médico:");
        let crm = prompt("Digite o CRM do médico:");

        if (nome !== "" && crm !== "") {
            cadastrados++;
            contador++;
        } else {
            alert("Dados inválidos. Digite novamente.");
        }
    }

    alert("Médicos cadastrados corretamente: " + cadastrados);
}

function exercicio18RelatorioFinalInternacoes() {
    let contador = 1;
    let totalDias = 0;
    let maiorDias = 0;
    let nomeMaiorInternacao = "";

    while (contador <= 6) {
        let nome = prompt("Digite o nome do paciente:");
        let dias = parseInt(prompt("Digite a quantidade de dias internado:"));

        totalDias = totalDias + dias;

        if (contador === 1) {
            maiorDias = dias;
            nomeMaiorInternacao = nome;
        } else if (dias > maiorDias) {
            maiorDias = dias;
            nomeMaiorInternacao = nome;
        }

        contador++;
    }

    let mediaDias = totalDias / 6;

    alert(
        "Total de dias de internação: " + totalDias +
        "\nMédia de dias internados: " + mediaDias.toFixed(2) +
        "\nPaciente com maior tempo de internação: " + nomeMaiorInternacao
    );
}

function exercicio19CadastrarPacientesAteLimite() {
    let somaIdades = 0;
    let quantidade = 0;

    while (somaIdades <= 100) {
        let nome = prompt("Digite o nome do paciente:");
        let idade = parseInt(prompt("Digite a idade do paciente:"));

        somaIdades = somaIdades + idade;
        quantidade++;
    }

    alert(
        "Quantidade de pacientes cadastrados: " + quantidade +
        "\nSoma total das idades: " + somaIdades +
        "\nLimite de idades atingido"
    );
}

function exercicio20ValidarIdadePaciente() {
    let contador = 1;
    let cadastrados = 0;

    while (contador <= 6) {
        let nome = prompt("Digite o nome do paciente:");
        let idade = parseInt(prompt("Digite a idade do paciente:"));

        while (idade < 0 || idade > 120) {
            idade = parseInt(prompt("Idade inválida. Digite uma idade entre 0 e 120:"));
        }

        cadastrados++;
        contador++;
    }

    alert("Pacientes cadastrados com sucesso: " + cadastrados);
}

function exercicio21ContarHomensEMulheres() {
    let contador = 1;
    let homens = 0;
    let mulheres = 0;
    let somaIdades = 0;

    while (contador <= 8) {
        let nome = prompt("Digite o nome do paciente:");
        let idade = parseInt(prompt("Digite a idade do paciente:"));
        let sexo = prompt("Digite o sexo do paciente: M ou F");
        sexo = sexo.toUpperCase();

        while (sexo !== "M" && sexo !== "F") {
            sexo = prompt("Sexo inválido. Digite M ou F:");
            sexo = sexo.toUpperCase();
        }

        if (sexo === "M") {
            homens++;
        } else {
            mulheres++;
        }

        somaIdades = somaIdades + idade;
        contador++;
    }

    let mediaIdade = somaIdades / 8;

    alert(
        "Pacientes do sexo masculino: " + homens +
        "\nPacientes do sexo feminino: " + mulheres +
        "\nMédia de idade: " + mediaIdade.toFixed(2)
    );
}

function exercicio22PesquisarPaciente() {
    let pacientes = [];
    let contador = 0;

    while (contador < 5) {
        let nome = prompt("Digite o nome do paciente:");
        pacientes.push(nome);

        contador++;
    }

    let pesquisa = prompt("Digite o nome do paciente que deseja pesquisar:");
    let encontrado = false;
    let i = 0;

    while (i < pacientes.length) {
        if (pacientes[i] === pesquisa) {
            encontrado = true;
        }

        i++;
    }

    if (encontrado === true) {
        alert("Paciente encontrado");
    } else {
        alert("Paciente não encontrado");
    }
}

function exercicio23MenuCadastroHospital() {
    let opcao = 0;
    let pacientes = 0;
    let medicos = 0;

    while (opcao !== 4) {
        opcao = parseInt(prompt(
            "Menu Hospitalar\n" +
            "1 - Cadastrar paciente\n" +
            "2 - Cadastrar médico\n" +
            "3 - Mostrar total de cadastros\n" +
            "4 - Encerrar"
        ));

        if (opcao === 1) {
            pacientes++;
            alert("Paciente cadastrado.");
        } else if (opcao === 2) {
            medicos++;
            alert("Médico cadastrado.");
        } else if (opcao === 3) {
            alert(
                "Pacientes cadastrados: " + pacientes +
                "\nMédicos cadastrados: " + medicos
            );
        } else if (opcao === 4) {
            alert("Sistema hospitalar encerrado");
        } else {
            alert("Opção inválida.");
        }
    }
}

function exercicio24CalcularFolhaPagamentoMedicos() {
    let contador = 1;
    let relatorio = "";
    let somaFolha = 0;
    let maiorPagamento = 0;

    while (contador <= 5) {
        let nome = prompt("Digite o nome do médico:");
        let plantoes = parseInt(prompt("Digite a quantidade de plantões:"));
        let valorPlantao = parseFloat(prompt("Digite o valor recebido por plantão:"));

        let pagamentoTotal = plantoes * valorPlantao;

        relatorio = relatorio + nome + " - R$ " + pagamentoTotal.toFixed(2) + "\n";
        somaFolha = somaFolha + pagamentoTotal;

        if (contador === 1) {
            maiorPagamento = pagamentoTotal;
        } else if (pagamentoTotal > maiorPagamento) {
            maiorPagamento = pagamentoTotal;
        }

        contador++;
    }

    alert(
        "Pagamentos dos médicos:\n" + relatorio +
        "\nSoma total da folha: R$ " + somaFolha.toFixed(2) +
        "\nMaior pagamento: R$ " + maiorPagamento.toFixed(2)
    );
}

function exercicio25RepetirCadastroComErro() {
    let contador = 1;

    while (contador <= 4) {
        let nome = prompt("Digite o nome do médico:");
        let crm = prompt("Digite o CRM do médico:");

        if (nome === "" || crm === "") {
            alert("Dados inválidos");
        } else {
            contador++;
        }
    }

    alert("Todos os médicos foram cadastrados corretamente");
}

function exercicio26ControleLeitosHospital() {
    let contador = 1;
    let ocupados = 0;
    let livres = 0;

    while (contador <= 10) {
        let status = prompt("O leito " + contador + " está ocupado ou livre?");
        status = status.toLowerCase();

        while (status !== "ocupado" && status !== "livre") {
            status = prompt("Opção inválida. Digite ocupado ou livre:");
            status = status.toLowerCase();
        }

        if (status === "ocupado") {
            ocupados++;
        } else {
            livres++;
        }

        contador++;
    }

    let porcentagem = (ocupados / 10) * 100;

    alert(
        "Total de leitos ocupados: " + ocupados +
        "\nTotal de leitos livres: " + livres +
        "\nPorcentagem de ocupação: " + porcentagem.toFixed(2) + "%"
    );
}

function exercicio27CadastroAteSenhaCorreta() {
    let senha = prompt("Digite a senha de administrador:");

    while (senha !== "admin123") {
        senha = prompt("Senha incorreta. Digite novamente:");
    }

    let contador = 1;

    while (contador <= 3) {
        let nome = prompt("Digite o nome do médico:");
        let crm = prompt("Digite o CRM do médico:");

        contador++;
    }

    alert("Cadastro autorizado e finalizado com sucesso");
}

function exercicio28RelatorioCompletoAtendimento() {
    let contador = 1;
    let quantidadePacientes = 0;
    let somaIdades = 0;
    let maiorTemperatura = 0;
    let pacientesComFebre = 0;
    let pacientesComDor = 0;
    let maiorIdade = 0;
    let nomeMaiorIdade = "";

    while (contador <= 7) {
        let nome = prompt("Digite o nome do paciente:");
        let idade = parseInt(prompt("Digite a idade do paciente:"));
        let temperatura = parseFloat(prompt("Digite a temperatura do paciente:"));
        let dor = prompt("O paciente está com dor? Digite sim ou não:");
        dor = dor.toLowerCase();

        quantidadePacientes++;
        somaIdades = somaIdades + idade;

        if (contador === 1) {
            maiorTemperatura = temperatura;
            maiorIdade = idade;
            nomeMaiorIdade = nome;
        } else {
            if (temperatura > maiorTemperatura) {
                maiorTemperatura = temperatura;
            }

            if (idade > maiorIdade) {
                maiorIdade = idade;
                nomeMaiorIdade = nome;
            }
        }

        if (temperatura >= 37.8) {
            pacientesComFebre++;
        }

        if (dor === "sim") {
            pacientesComDor++;
        }

        contador++;
    }

    let mediaIdades = somaIdades / quantidadePacientes;

    alert(
        "Quantidade total de pacientes cadastrados: " + quantidadePacientes +
        "\nMédia das idades: " + mediaIdades.toFixed(2) +
        "\nMaior temperatura informada: " + maiorTemperatura +
        "\nPacientes com febre: " + pacientesComFebre +
        "\nPacientes com dor: " + pacientesComDor +
        "\nPaciente com maior idade: " + nomeMaiorIdade
    );
}