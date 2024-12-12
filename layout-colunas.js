const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const paddingsTopBottom = 20 * (96 / 25.4);
const containerHeight = 297 * (96 / 25.4) - paddingsTopBottom;

const setPagination = () => {
  const pages = document.querySelectorAll(".page");

  pages.forEach((page, index) => {
    page.querySelector("span.pageNum").innerHTML = index + 1;
    page.querySelector("span.pages").innerHTML = pages.length;
  });
};

const templateLayoutOneColumn = (header, footer) => {
  return `
    <div class='page-header'>
      ${header}
    </div>
    <div class="content-container">
      <div class="one-column">
        <div class="content-column"></div>
      </div>
    </div>
    <div class='page-footer'>
      ${footer}
    </div>
  `;
};

const templateLayoutTwoColumn = (header, footer) => {
  return `
    <div class='page-header'>
      ${header}
    </div>
    <div class="content-container">
      <div class="two-column">
        <div class="content-column"></div>
      </div>
      <div class="two-column">
        <div class="content-column"></div>
      </div>
    </div>
    <div class='page-footer'>
      ${footer}
    </div>
  `;
};

function resetBodyContent(pages) {
  pages.innerHTML = "";
}

function isNodeEmpty(element) {
  return (
    !element.hasChildNodes() ||
    [...element.childNodes].every(
      (node) =>
        node.nodeType === Node.TEXT_NODE && node.textContent.trim() === ""
    )
  );
}

function splitElement(element, availableHeight) {
  if (!(element instanceof HTMLElement)) {
    throw new Error("Provided input is not a valid HTML element.");
  }

  const newChildrens = [];

  function splitChildren(parent, newChildrens) {
    const children = Array.from(parent.children);

    // If there's only one child, recurse into it
    if (children.length === 1 && children[0].children.length > 0) {
      return splitChildren(children[0], newChildrens);
    }

    for (const child of children) {
      if (child.scrollHeight >= availableHeight) {        
        return splitChildren(child, newChildrens);
      } else {
        if (isNodeEmpty(child)) {
          continue;
        }
        const originalParent = parent.cloneNode(false);
        originalParent.appendChild(child.cloneNode(true));
        newChildrens.push(originalParent);
      }
    }

    return newChildrens;
  }

  const tempDiv = document.createElement("div");
  let temp = splitChildren(element, newChildrens);

  tempDiv.append(...temp);

  return tempDiv;
}

function fitOverflow(overflowElement, pageColumn, remainingHeight, breakColumn = false) {
  const newChildrens = splitElement(overflowElement, remainingHeight);

  let availableHeight = remainingHeight;

  for (const newChild of [...newChildrens.children]) {
    //console.log(newChild);

    const lastAppendedChild = pageColumn.lastChild;

    pageColumn.appendChild(newChild.cloneNode(true));

    if (pageColumn.scrollHeight > remainingHeight) {
      console.log(availableHeight);
      
      /* if(lastAppendedChild && lastAppendedChild.children.length === 1  && lastAppendedChild.children[0].classList.contains("dontend")) {
          overflowElement.insertBefore(lastAppendedChild.cloneNode(true), overflowElement.firstChild) // re-insert the childNode to the overflowElement
          pageColumn.removeChild(lastAppendedChild);
      } */


      pageColumn.removeChild(pageColumn.lastChild);
      break;
    } else {
      availableHeight -= pageColumn.scrollHeight;
      newChildrens.removeChild(newChild);
    }
  }

  return newChildrens;
}

function folhaDeRosto(pages, header, conteudo, footer) {
  let { pageColumn } = createNewOneColumnPage(pages, header, footer);

  const columnContent = document.createElement("div");
  columnContent.innerHTML = conteudo;

  pageColumn.appendChild(columnContent);
}

function oneColumnLayout(pages, tempContainer, header, footer) {
  let pageObjects = createNewOneColumnPage(pages, header, footer);

  const remainingHeight =
    containerHeight -
    (pageObjects.pageHeader.scrollHeight + pageObjects.pageFooter.scrollHeight);

  Array.from(tempContainer.children).forEach((element) => {
    const { pageColumn } = pageObjects;

    pageColumn.appendChild(element.cloneNode(true));

    if (pageColumn.scrollHeight > remainingHeight) {
      pageColumn.removeChild(pageColumn.lastChild);

      // Se o elemento que exceder a altura máxima tiver filhos que caibam no espaço disponível,
      // eles serão adicionados; o restante irá para a próxima coluna ou página
      const newPageElements = fitOverflow(
        element,
        pageColumn,
        remainingHeight,
        true
      );

      pageObjects = createNewOneColumnPage(pages, header, footer);
      pageObjects.pageColumn.appendChild(newPageElements);
    }
  });
}

function twoColumnLayout(pages, tempContainer, header, footer) {
  let pageObjects = createNewTwoColumnsPage(pages, header, footer);

  const remainingHeight =
    containerHeight -
    (pageObjects.pageHeader.scrollHeight + pageObjects.pageFooter.scrollHeight);

  let currentColumnIndex = 0; // index = 0 primera coluna, index = 1 segunda coluna.

  Array.from(tempContainer.children).forEach((element) => {
    const { pageColumns } = pageObjects;

    const currentColumn = pageColumns[currentColumnIndex];

    currentColumn.appendChild(element.cloneNode(true));

    if (currentColumn.scrollHeight > remainingHeight) {
      currentColumn.removeChild(currentColumn.lastChild);

      // Se o elemento que exceder a altura máxima tiver filhos que caibam no espaço disponível,
      // eles serão adicionados; o restante irá para a próxima coluna ou página
      let overflowElement = fitOverflow(
        element,
        currentColumn,
        remainingHeight,
        true
      );

      if (currentColumnIndex === 0) {
        currentColumnIndex = 1;
      } else {
        pageObjects = createNewTwoColumnsPage(pages, header, footer);
        currentColumnIndex = 0;
      }

      pageObjects.pageColumns[currentColumnIndex].appendChild(overflowElement);
    }
  });
}

function waitForImages(container) {
  return new Promise((resolve) => {
    const images = Array.from(container.querySelectorAll("img"));
    let remaining = images.length;

    if (remaining === 0) {
      resolve();
      return;
    }

    const checkIfFinished = () => {
      remaining--;
      if (remaining === 0) {
        resolve();
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        checkIfFinished();
      } else {
        img.onload = checkIfFinished;
        img.onerror = checkIfFinished;
      }
    });
  });
}

function oneColumnPage(elementContainer, provaModelo) {
  const tempContainer = createQuestoesTempContainer(provaModelo);

  return waitForImages(tempContainer)
    .then(() => {
      resetBodyContent(elementContainer);

      replacePlaceholders(provaModelo);

      const {
        cabecalhoPagina,
        cabecalho,
        folhaRosto,
        paginacao,
        rodape,
        rodapeRosto,
      } = provaModelo.modelo.prova.layout;

      folhaDeRosto(
        elementContainer,
        cabecalho,
        folhaRosto,
        `<div>${rodapeRosto ?? rodape}</div><div>${paginacao}</div>`
      );

      oneColumnLayout(
        elementContainer,
        tempContainer,
        cabecalhoPagina,
        `<div>${rodape}</div><div>${paginacao}</div>`
      );
    })
    .then(() => {
      setPagination();
      document.body.removeChild(tempContainer)
    });
}

function twoColumnPage(elementContainer, provaModelo) {
  const tempContainer = createQuestoesTempContainer(provaModelo);

  return waitForImages(tempContainer)
    .then(() => {
      resetBodyContent(elementContainer);

      replacePlaceholders(provaModelo);

      const { cabecalhoPagina, cabecalho, folhaRosto, paginacao, rodape } =
        provaModelo.modelo.prova.layout;

      folhaDeRosto(
        elementContainer,
        cabecalho,
        folhaRosto,
        `<div>${rodape}</div><div>${paginacao}</div>`
      );

      twoColumnLayout(
        elementContainer,
        tempContainer,
        cabecalhoPagina,
        `<div>${rodape}</div><div>${paginacao}</div>`
      );
    })
    .then(() => {
      setPagination();
      document.body.removeChild(tempContainer)
    });
}

function previewQuestaoOneColumn(elementContainer, listaQuestao) {
  const tempContainer = createPreviewQuestaoTempContainer(listaQuestao);

  return waitForImages(tempContainer)
    .then(() => {
      resetBodyContent(elementContainer);
      oneColumnLayout(elementContainer, tempContainer, "", "");
    })
    .then(() => {
      document.body.removeChild(tempContainer)
    });
}

function previewQuestaoTwoColumn(elementContainer, listaQuestao) {
  console.log(listaQuestao);

  const tempContainer = createPreviewQuestaoTempContainer(listaQuestao);

  return waitForImages(tempContainer)
    .then(() => {
      resetBodyContent(elementContainer);
      twoColumnLayout(elementContainer, tempContainer, "", "");
    })
    .then(() => {
      document.body.removeChild(tempContainer)
      tempContainer.innerHTML = "";
    });
}

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
    "#CURSO#": prova.modelo.prova.turma?.cursoUnidade.curso.nome,
    "#DISCIPLINA#": prova.modelo.prova.turma?.disciplina,
    "#TURMA#": prova.modelo.prova.turma?.codigoTurma,
    "#CODIGO_TURMA#": prova.modelo.prova.turma?.codigoTurma,
    "#PERIODO#":
      prova.modelo.prova.tipoProva.notaParcial +
      " - " +
      (prova.modelo.prova.turma?.periodoLetivo.nome ?? "&nbsp;"),
    "#MODELO#":
      prova.modelo.prova.listaProvaModelo.length > 1
        ? " - Modelo " + prova.modelo.nome
        : "",
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
}

function createQuestoesTempContainer(prova) {
  const tempContainer = document.createElement("div");
  tempContainer.className = "page-stage";

  const {
    cabecalhoPrimeiraQuestao,
    cabecalhoQuestao,
    ordemQuestaoPersonalizada,
  } = prova.modelo.prova.layout;

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

    return `
          <div>
              <div class='questao-completa'>
                  <div class='cabecalho-questao dontend'>
                      ${cabecalhoQuestaoComValores}
                  </div>
                  ${provaQuestao.questao.visualizaQuestao}
              </div>
              ${tipoLinhaResposta}
          </div>
      `;
  };

  tempContainer.innerHTML = prova.modelo.listaProvaQuestao
    .map(generateQuestaoHTML)
    .join("");

  document.body.appendChild(tempContainer);

  return tempContainer;
}

function createPreviewQuestaoTempContainer(listaQuestao) {
  const tempContainer = document.createElement("div");
  tempContainer.className = "page-stage";
  const generateQuestaoHTML = (questao) => {
    console.log(questao);
    return `
          <div>
              <div class='questao-completa'>
                  <div class='cabecalho-questao dontend'>
                      <div style="background:#A9A9A9;border:0px;padding:1px 1px;">
                        <span style="font-size:12px"><strong>QUESTÃO X</strong> ( valor: XX ponto(s) )</span>
                      </div>
                  </div>
                  ${questao.visualizaQuestao}
              </div>
          </div>
      `;
  };

  tempContainer.innerHTML = listaQuestao.map(generateQuestaoHTML).join("");

  document.body.appendChild(tempContainer);

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

function createNewOneColumnPage(pages, header, footer) {
  const newPage = document.createElement("div");
  newPage.className = "page";
  newPage.innerHTML = templateLayoutOneColumn(header, footer);
  pages.appendChild(newPage);
  return {
    pageHeader: newPage.querySelector(".page-header"),
    pageContent: newPage.querySelector(".content-container"),
    pageColumn: newPage.querySelector(".one-column > .content-column"),
    pageFooter: newPage.querySelector(".page-footer"),
  };
}

function createNewTwoColumnsPage(pages, header, footer) {
  const newPage = document.createElement("div");
  newPage.className = "page";
  newPage.innerHTML = templateLayoutTwoColumn(header, footer);
  pages.appendChild(newPage);
  return {
    pageHeader: newPage.querySelector(".page-header"),
    pageContent: newPage.querySelector(".content-container"),
    pageColumns: newPage.querySelectorAll(".two-column > .content-column"),
    pageFooter: newPage.querySelector(".page-footer"),
  };
}
