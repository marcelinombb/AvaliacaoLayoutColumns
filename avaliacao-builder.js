const DONTSPLIT = 'dontsplit'

function replacePlaceholders(prova) {
  function replacer(string, placeholders) {
    if (!string) return "";

    let replacedString = string;
    for (const placeholder in placeholders) {
      replacedString = replacedString.replace(
        new RegExp(placeholder, "g"),
        placeholders[placeholder] ?? "&nbsp;"
      );
    }

    return replacedString;
  }

  const folhaDeRostoPlaceholder = {
    "#DATA#": prova.modelo.prova.dataRealizacao,
    "#CURSO#": prova.modelo.prova.turma?.cursoUnidade.curso.nome,
    "#DISCIPLINA#": prova.modelo.prova.turma?.disciplina,
    "#TURMA#": prova.modelo.prova.turma?.codigoTurma,
    "#CODIGO_TURMA#": prova.modelo.prova.turma?.codigoTurma,
    "#PERIODO#":
      prova.modelo.prova.tipoProva.notaParcial +
      " - " +
      (prova.modelo.prova.turma?.periodoLetivo.nome ?? "&nbsp;"),
    "#MODELO#": " - Modelo " + prova.modelo.nome,
    "#PROFESSOR#":
      prova.modelo.prova.turma?.professor.nome == null &&
      prova.modelo.prova.usuario != null
        ? prova.modelo.prova.usuario.nome
        : prova.modelo.prova.turma?.professor.nome,
    "#TURNO#": prova.modelo.prova.turma?.cursoUnidade.turno.nome,
    "#DURACAO#": prova.modelo.prova.duracao,
    "#TOTALQUEST#": prova.modelo.listaProvaQuestao.length,
    "#NUM_QUESTOES#": prova.modelo.listaProvaQuestao.length,
    "#PONTOS#": prova.modelo.prova.totalPontos,
    "#INSTRUCAO#": prova.modelo.prova.instrucaoEspecifica?.texto,
  };

  const cabecalhoPlaceholders = {
    "#LOGO#": prova.modelo.prova.instituicao.linkFile,
    "#TIPOPROVA#": prova.modelo.prova.tipoProva.notaParcial,
    "#TIPOPROVANOME#": prova.modelo.prova.tipoProva.nome,
    "#DISCIPLINA#": prova.modelo.prova.turma?.disciplina,
    "#CURSO#": prova.modelo.prova.turma?.cursoUnidade.curso.nome,
    "#TURMA#": prova.modelo.prova.turma?.codigoTurma,
    "#TURMANOME#": prova.modelo.prova.turma?.nome,
    "#NOME_TURMA#": prova.modelo.prova.turma?.nome,
    "#TURNO#": prova.modelo.prova.turma?.cursoUnidade.turno.nome,
    "#PERIODO#": prova.modelo.prova.turma?.periodoLetivo.nome,
    "#TOTALQUEST#": prova.modelo.listaProvaQuestao.length,
    "#LAYOUTNOME#": prova.modelo.prova.layout.nome,
    "#NOMELAYOUT#": prova.modelo.prova.layout.nome,
    "#INSTRUCAO#": prova.modelo.prova.instrucaoEspecifica?.texto,
    "#PONTOS#": prova.modelo.prova.totalPontos,
  };

  const cabecalhoPaginaPlaceholders = {
    "#LOGO#": prova.modelo.prova.instituicao.linkFile,
    "#DISCIPLINA#": prova.modelo.prova.turma?.disciplina,
    "#CURSO#": prova.modelo.prova.turma?.cursoUnidade.curso.nome,
    "#CURSONOME#": prova.modelo.prova.turma?.cursoUnidade.curso.nome,
    "#PERIODO#": prova.modelo.prova.turma?.periodoLetivo.nome,
    "#PERIODOLET#": prova.modelo.prova.turma?.periodoLetivo.nome,
    "#TIPOPROVA#": prova.modelo.prova.tipoProva.notaParcial,
    "#TIPOPROVANOME#": prova.modelo.prova.tipoProva.nome,
  };

  const footerPlaceholders = {
    "#site#": prova.modelo.prova.instituicao.site,
  };

  prova.modelo.prova.layout.cabecalho = replacer(
    prova.modelo.prova.layout.cabecalho,
    cabecalhoPlaceholders
  );
  prova.modelo.prova.layout.folhaRosto = replacer(
    prova.modelo.prova.layout.folhaRosto,
    folhaDeRostoPlaceholder
  );
  prova.modelo.prova.layout.cabecalhoPagina = replacer(
    prova.modelo.prova.layout.cabecalhoPagina,
    cabecalhoPaginaPlaceholders
  );

  prova.modelo.prova.layout.rodape = replacer(
    prova.modelo.prova.layout.rodape,
    footerPlaceholders
  );

  return prova;
}

function createQuestoesTempContainer(provaModelo) {
  const tempContainer = document.createElement("div");
  tempContainer.className = "page-stage";

  const {
    cabecalhoPrimeiraQuestao,
    cabecalhoQuestao,
    ordemQuestaoPersonalizada,
    fonte,
  } = provaModelo.modelo.prova.layout;

  const formatCabecalho = (provaQuestao, cabecalhoTemplate) => {
    const ordem = ordemQuestaoPersonalizada
      ? provaQuestao.ordemPersonalizada ?? ""
      : provaQuestao.ordem;

    return cabecalhoTemplate
      .replace("#ORDEM#", ordem)
      .replace("#VALOR#", provaQuestao.valor.toString().replace(".", ","));
  };

  const generateQuestaoHTML = (provaQuestao) => {
    const cabecalhoTemplate =
      provaQuestao.ordem === 1 ? cabecalhoPrimeiraQuestao : cabecalhoQuestao;

    const cabecalhoQuestaoComValores = formatCabecalho(
      provaQuestao,
      cabecalhoTemplate
    );

    const tipoLinhaResposta = getTipoLinhaResposta(provaQuestao);

    const linhasDeEspacamento = "<br>".repeat(provaQuestao.linhasBranco);

    return `
          <div>
              <div class='questao-completa dontsplit'>
                  <div class='cabecalho-questao dontend'>
                      ${cabecalhoQuestaoComValores}
                  </div>
                  ${provaQuestao.questao.visualizaQuestao}
              </div>
              ${tipoLinhaResposta}
              <div>${linhasDeEspacamento}</div>
          </div>
      `;
  };

  tempContainer.innerHTML = provaModelo.modelo.listaProvaQuestao
    .map(generateQuestaoHTML)
    .join("");

  document.body.appendChild(tempContainer);

  tempContainer.querySelectorAll("p").forEach((p) => (p.style.marginLeft = 0));
  tempContainer.querySelectorAll("figure").forEach((figure) => (figure.classList.add(DONTSPLIT)));
  tempContainer.querySelectorAll("table").forEach((table) => (table.classList.add(DONTSPLIT)));

  return tempContainer;
}

function createPreviewQuestaoTempContainer(listaQuestao) {
  const tempContainer = document.createElement("div");
  tempContainer.className = "page-stage";
  const generateQuestaoHTML = (questao) => {
    return `
           <div class='questao-completa'>
              <div class='cabecalho-questao dontend'>
                  <div style="background:#A9A9A9;border:0px;padding:1px 1px;">
                    <span style="font-size:12px"><strong>QUESTÃO X</strong> ( valor: XX ponto(s) )</span>
                  </div>
              </div>
              ${questao.visualizaQuestao}
          </div>
      `;
  };

  tempContainer.innerHTML = listaQuestao.map(generateQuestaoHTML).join("");

  document.body.appendChild(tempContainer);

  tempContainer.querySelectorAll("p").forEach((p) => (p.style.marginLeft = 0));
  tempContainer.querySelectorAll("figure").forEach((figure) => (figure.classList.add(DONTSPLIT)));
  tempContainer.querySelectorAll("table").forEach((table) => (table.classList.add(DONTSPLIT)));

  return tempContainer;
}

function createNumberedLines(numberOfLines, withHeader = true) {
  const header = `
  <tr>
  <td class="side-number-header" colspan="2">Resposta</td>
  </tr>
  `;

  const rows = Array.from(
    { length: numberOfLines },
    (_, index) => `
  <tr>
  <td class="side-number">${index + 1}</td>
  <td class="side-number-content"></td>
  </tr>
  `
  ).join("");

  return `
  <table class="side-number-table">
  ${withHeader ? header : ""}
  ${rows}
  </table>
  `;
}

function createAnswerLinesTable(numberOfLines, withHeader = true) {
  const header = `
  <tr>
  <td class="side-number-header">Resposta</td>
  </tr>
  `;
  return `
    <table class="answer-table">
      ${withHeader ? header : ""}
      ${"<tr><td></td></tr>".repeat(numberOfLines)}
    </table>
  `;
}

function createAnswerBox(numberOfLines) {
  const height = Math.max(30 * numberOfLines, 30);
  return `
    <div class="box">
      <div class="box-header">Resposta</div>
      <div class="box-content" style='height: ${height}px'></div>
    </div>
  `;
}

function getTipoLinhaResposta(provaQuestao) {
  if (provaQuestao.tipoLinha === null) {
    return "";
  }

  let tipoLinhaQuestao = "";
  switch (provaQuestao.tipoLinha.codigo) {
    case 1:
      tipoLinhaQuestao = createNumberedLines(provaQuestao.numeroLinhas);
      break;
    case 2:
      tipoLinhaQuestao = createAnswerLinesTable(provaQuestao.numeroLinhas);
      break;
    case 3:
      tipoLinhaQuestao = "";
      break;
    case 4:
      tipoLinhaQuestao = createAnswerBox(provaQuestao.numeroLinhas);
      break;
    case 5:
      tipoLinhaQuestao = createAnswerLinesTable(
        provaQuestao.numeroLinhas,
        false
      );
      break;
  }

  return tipoLinhaQuestao;
}
