
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

function splitElement(element, availableHeight, pageColumn) {

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
      pageColumn.appendChild(child.cloneNode(true))
      const childHeight = pageColumn.lastChild.scrollHeight
      pageColumn.removeChild(pageColumn.lastChild)
      if ( childHeight >= availableHeight) {
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

  return tempDiv
}

function fitOverflow(overflowElement, pageColumn, remainingHeight) {
  const newChildrens = splitElement(overflowElement, remainingHeight, pageColumn)

  let availableHeight = remainingHeight;

  for (const newChild of [...newChildrens.children]) {

    const lastAppendedChild = pageColumn.lastChild;

    pageColumn.appendChild(newChild.cloneNode(true));

    if (pageColumn.scrollHeight > remainingHeight) {

      if(lastAppendedChild && lastAppendedChild.children.length === 1  && lastAppendedChild.children[0].classList.contains("dontend")) {
          newChildrens.insertBefore(lastAppendedChild.cloneNode(true), newChildrens.firstChild) // re-insert the childNode to the overflowElement
          pageColumn.removeChild(lastAppendedChild);
      }

      pageColumn.removeChild(pageColumn.lastChild);
      break;
    } else {
      availableHeight -= pageColumn.scrollHeight;
      newChildrens.removeChild(newChild);
    }
  }

  return newChildrens;
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
    const cabecalhoTemplate = provaQuestao.ordem === 1 ? cabecalhoPrimeiraQuestao : cabecalhoQuestao;

    const cabecalhoQuestaoComValores = formatCabecalho(provaQuestao, cabecalhoTemplate);

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

export default class LayoutProva {

  constructor(
    elementContainer,
    pageHeader,
    pageFooter,
    fonteTamanho
  ) {
    this.elementContainer = elementContainer
    this.pageHeader = pageHeader
    this.pageFooter = pageFooter
    this.fonteTamanho = fonteTamanho
  }

  resetBodyContent() {
    this.elementContainer.innerHTML = ''
  }

  folhaDeRosto(header, conteudo, footer) {

    const newPage = document.createElement("div");
    newPage.className = "page";
    newPage.innerHTML = this.templateLayoutOneColumn(header, footer);
    this.elementContainer.appendChild(newPage);

    const pageColumn = newPage.querySelector(".one-column > .content-column")

    const columnContent = document.createElement("div");
    columnContent.innerHTML = conteudo;

    pageColumn.appendChild(columnContent);
  }

  oneColumnPage(provaModelo) {
    this.provaModelo = provaModelo
    const tempContainer = createQuestoesTempContainer(this.provaModelo);

    return waitForImages(tempContainer)
      .then(() => {
        resetBodyContent(this.elementContainer);

        replacePlaceholders(this.provaModelo);

        const {
          cabecalho,
          folhaRosto,
          paginacao,
          rodape,
          rodapeRosto,
        } = provaModelo.modelo.prova.layout;

        this.folhaDeRosto(
          cabecalho,
          folhaRosto,
          `<div>${rodapeRosto ?? rodape}</div><div>${paginacao}</div>`
        );

        this.oneColumnLayout(
          tempContainer
        );
      })
      .then(() => {
        setPagination();
        document.body.removeChild(tempContainer)
      });
  }

  twoColumnPage(provaModelo) {
    const tempContainer = createQuestoesTempContainer(provaModelo);

    return waitForImages(tempContainer)
      .then(() => {
        this.resetBodyContent();

        replacePlaceholders(provaModelo);

        const { cabecalho, folhaRosto, paginacao, rodape } =
          provaModelo.modelo.prova.layout;

        this.folhaDeRosto(
          cabecalho,
          folhaRosto,
          `<div>${rodape}</div><div>${paginacao}</div>`
        );

        this.twoColumnLayout(tempContainer);
      })
      .then(() => {
        setPagination();
        document.body.removeChild(tempContainer)
      });
  }

  oneColumnLayout(tempContainer) {
    let pageObjects = this.createNewOneColumnPage();

    const remainingHeight =
      containerHeight -
      (pageObjects.pageHeader.scrollHeight + pageObjects.pageFooter.scrollHeight);

    Array.from(tempContainer.children).forEach((element) => {
      pageObjects = this.columnizeOneColumn(element, pageObjects, remainingHeight)
    });
  }

  twoColumnLayout(tempContainer) {
    let pageObjects = this.createNewTwoColumnsPage();

    const remainingHeight =
      containerHeight -
      (pageObjects.pageHeader.scrollHeight + pageObjects.pageFooter.scrollHeight);

    let currentColumnIndex = 0; // index = 0 primera coluna, index = 1 segunda coluna.

    Array.from(tempContainer.children).forEach((element) => {
      let  newValues = this.columnizeTwoColumn(element, pageObjects, remainingHeight, currentColumnIndex)
      pageObjects = newValues.pageObjects
      currentColumnIndex = newValues.currentColumnIndex
    });
  }

  previewOneColumn(listaQuestao) {
    const tempContainer = createPreviewQuestaoTempContainer(listaQuestao);

    return waitForImages(tempContainer)
      .then(() => {
        this.resetBodyContent();
        this.oneColumnLayout(tempContainer);
      })
      .then(() => {
        document.body.removeChild(tempContainer)
      });
  }

  previewTwoColumn(listaQuestao) {

    const tempContainer = createPreviewQuestaoTempContainer(listaQuestao);

    return waitForImages(tempContainer)
      .then(() => {
        this.resetBodyContent();
        this.twoColumnLayout(tempContainer);
      })
      .then(() => {
        document.body.removeChild(tempContainer)
      });
  }

  columnizeOneColumn(element, pageObjects, remainingHeight) {
    const pageColumn = pageObjects.pageColumn;
    pageColumn.appendChild(element.cloneNode(true));

    if (pageColumn.scrollHeight > remainingHeight) {
      pageColumn.removeChild(pageColumn.lastChild);

      // Se o elemento que exceder a altura máxima tiver filhos que caibam no espaço disponível,
      // eles serão adicionados; o restante irá para a próxima coluna ou página
      const newPageElements = fitOverflow(element, pageColumn, remainingHeight);

      pageObjects = this.columnizeOneColumn(newPageElements, this.createNewOneColumnPage(), remainingHeight);

    }

    return pageObjects

  }

  columnizeTwoColumn(element, pageObjects, remainingHeight, currentColumnIndex) {

    const currentColumn = pageObjects.pageColumns[currentColumnIndex];

    currentColumn.appendChild(element.cloneNode(true));

    if (currentColumn.scrollHeight > remainingHeight) {

      currentColumn.removeChild(currentColumn.lastChild);

      // Se o elemento que exceder a altura máxima tiver filhos que caibam no espaço disponível,
      // eles serão adicionados; o restante irá para a próxima coluna
      let overflowElement = fitOverflow(element, currentColumn, remainingHeight);

      if (currentColumnIndex === 0) {
        const newValues = this.columnizeTwoColumn(overflowElement, pageObjects, remainingHeight, 1)
        pageObjects = newValues.pageObjects
        currentColumnIndex = newValues.currentColumnIndex
      } else {
        const newValues = this.columnizeTwoColumn(overflowElement, this.createNewTwoColumnsPage(), remainingHeight, 0)
        pageObjects = newValues.pageObjects
        currentColumnIndex = newValues.currentColumnIndex
      }
    }

    return {
      pageObjects,
      currentColumnIndex
    }
  }

  createNewTwoColumnsPage() {
    const newPage = document.createElement("div");
    newPage.className = "page";
    newPage.innerHTML = this.templateLayoutTwoColumn(this.pageHeader, this.pageFooter);
    this.elementContainer.appendChild(newPage);
    return {
      pageHeader: newPage.querySelector(".page-header"),
      pageContent: newPage.querySelector(".content-container"),
      pageColumns: newPage.querySelectorAll(".two-column > .content-column"),
      pageFooter: newPage.querySelector(".page-footer"),
    };
  }

  createNewOneColumnPage() {
    const newPage = document.createElement("div");
    newPage.className = "page";
    newPage.innerHTML = this.templateLayoutOneColumn(this.pageHeader, this.pageFooter);
    this.elementContainer.appendChild(newPage);
    return {
      pageHeader: newPage.querySelector(".page-header"),
      pageContent: newPage.querySelector(".content-container"),
      pageColumn: newPage.querySelector(".one-column > .content-column"),
      pageFooter: newPage.querySelector(".page-footer"),
    };
  }

  templateLayoutOneColumn(header, footer){
    return `
      <div class='page-header'>
        ${header}
      </div>
      <div class="content-container" style="font-size: ${this.fonteTamanho}px;">
        <div class="one-column">
          <div class="content-column"></div>
        </div>
      </div>
      <div class='page-footer'>
        ${footer}
      </div>
    `;
  };

  templateLayoutTwoColumn(header, footer){
    return `
      <div class='page-header'>
        ${header}
      </div>
      <div class="content-container" style="font-size: ${this.fonteTamanho}px;">
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

  static builder(elementContainer) {
    return new LayoutProvaBuilder(elementContainer)
  }

}

class LayoutProvaBuilder {

  constructor(elementContainer) {
    this.elementContainer = elementContainer
    this.header = ''
    this.footer = ''
    this.fontSize = '12'
  }

  folhaDeRosto(header, conteudo, footer) {
    return this
  }

  pageHeader(header) {
    this.header = header
    return this
  }

  pageFooter(footer) {
    this.footer = footer
    return this
  }

  fonteTamanho(tamanho) {
    this.fontSize = tamanho
    return this
  }

  oneColumnLayout(provaModelo) {
    new LayoutProva(this.elementContainer, this.header, this.footer, this.fontSize)
    .oneColumnPage(provaModelo)
  }

  twoColumnLayout(provaModelo) {
    new LayoutProva(this.elementContainer, this.header, this.footer, this.fontSize)
    .twoColumnPage(provaModelo)
  }

  previewOneColumn(listaQuestoes) {
    new LayoutProva(this.elementContainer, this.header, this.footer, this.fontSize)
    .previewOneColumn(listaQuestoes)
  }

  previewTwoColumn(listaQuestoes) {
    new LayoutProva(this.elementContainer, this.header, this.footer, this.fontSize)
    .previewTwoColumn(listaQuestoes)
  }
}
