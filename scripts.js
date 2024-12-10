  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const paddingsTopBottom = (20 * (96 / 25.4))
  const containerHeight = 297 * (96 / 25.4) - paddingsTopBottom;

  const setPagination = () => {
    const pages = document.querySelectorAll('.page')

    pages.forEach((page, index) => {
      page.querySelector('span.pageNum').innerHTML = index + 1
      page.querySelector('span.pages').innerHTML = pages.length
    })
  }

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
  }

  const templateLayoutTwoColumn = (header, footer) => {
    return `
      <div class='page-header'>
        ${header}
      </div>
      <div class="content-container">
        <div class="two-column tiptap">
          <div class="content-column"></div>  
        </div>
        <div class="two-column tiptap">
          <div class="content-column"></div>  
        </div>
      </div>
      <div class='page-footer'>
        ${footer}
      </div>
    `
  } 

  function resetBodyContent(pages) {
    pages.innerHTML = ''
  }

  function findRemoveReturn(arr, predicate) {

    const index = arr.findIndex(predicate);
    
    if (index !== -1) {
      return arr.splice(index, 1)[0];
    }
  
    return undefined;
  }

  function splitElementInTwo(element) {
    if (!(element instanceof HTMLElement)) {
        throw new Error("Provided input is not a valid HTML element.");
    }

    function splitChildren(parent) {
        const children = Array.from(parent.children);

        // If there's only one child, recurse into it
        if (children.length === 1 && children[0].children.length > 0) {
            return splitChildren(children[0]);
        }

        const splitIndex = Math.ceil(children.length / 2);

        // Create a clone of the parent for the second part
        const secondPart = parent.cloneNode(false);

        // Move the latter half of the children to the second part
        let i = splitIndex;
        while (i < children.length) {
            secondPart.appendChild(children[i]); // Move child to the clone
            i++;
        }

        const tempDiv = document.createElement('div')
        tempDiv.append(...[parent, secondPart]);

        return tempDiv
    }

    return splitChildren(element);
  }


  function splitColumn(overflowElement) {

    console.log(splitElementInTwo(overflowElement.cloneNode(true)));
    
    let overflowChilds = Array.from(overflowElement.children)

    const questaoCompleta = findRemoveReturn(overflowChilds, (el) => el.classList.contains('questao-completa'))
        
    let questaoCompletaChildrens = []

    if(questaoCompleta) {
        questaoCompletaChildrens = questaoCompleta.children        
        questaoCompletaChildrens  = Array.from(questaoCompletaChildrens).reduce((acc, att) => {

            if(att.classList.contains('adaptive-block-avalicao-visualize')){
                let clonnedNodes = Array.from(att.children)
                    .filter(node => node.innerHTML.trim() !== '') // remove empty nodes
                    .map(node => {                    
                        const clone = att.cloneNode(false);                    
                        clone.appendChild(node.cloneNode(true))
                        return clone
                    })

                return [...acc, ...clonnedNodes]
            }else {
                return [...acc, att]
            }
            
        }, [])  
    }

    const questaoSplited = document.createElement('div')
    questaoSplited.append(...[...questaoCompletaChildrens, ...overflowChilds])
    
    return questaoSplited

  }

  function fitOverflow(overflowElement, pageColumn, remainingHeight, breakColumn = false) {

    overflowElement = breakColumn ? splitElementInTwo(overflowElement) : overflowElement;
    
    for (child of [...overflowElement.children]) {
      
      const lastAppendedChild = pageColumn.lastChild
      
      pageColumn.appendChild(child.cloneNode(true));
      
      if (pageColumn.scrollHeight > remainingHeight) {

        if(lastAppendedChild && lastAppendedChild.children.length === 1  && lastAppendedChild.children[0].classList.contains("dontend")) {
            overflowElement.insertBefore(lastAppendedChild.cloneNode(true), overflowElement.firstChild) // re-insert the childNode to the overflowElement            
            pageColumn.removeChild(lastAppendedChild);
        }

        pageColumn.removeChild(pageColumn.lastChild);
        break;
      } else {    
          overflowElement.removeChild(child)
      }
    }

    return overflowElement
  }

  function folhaDeRosto(pages, header, conteudo, footer) {
    
    let { pageColumn } = createNewOneColumnPage(pages, header, footer);

    const columnContent = document.createElement('div')
    columnContent.innerHTML = conteudo

    pageColumn.appendChild(columnContent)

  }

  function oneColumnLayout(pages, tempContainer, header, footer) {

    let pageObjects = createNewOneColumnPage(pages, header, footer);

    const remainingHeight = containerHeight - (pageObjects.pageHeader.scrollHeight + pageObjects.pageFooter.scrollHeight)           

    Array.from(tempContainer.children).forEach(element => {

      const { pageColumn } = pageObjects

      pageColumn.appendChild(element.cloneNode(true));
      
      if (pageColumn.scrollHeight > remainingHeight) {

        pageColumn.removeChild(pageColumn.lastChild);

        // Se o elemento que exceder a altura máxima tiver filhos que caibam no espaço disponível,
        // eles serão adicionados; o restante irá para a próxima coluna ou página
        let overflowElement = fitOverflow(element.cloneNode(true), pageColumn, remainingHeight, true)
        
        
        
        pageObjects = createNewOneColumnPage(pages, header, footer)
        pageObjects.pageColumn.appendChild(overflowElement);
      }
    });
  }

  function twoColumnLayout(pages, tempContainer, header, footer) {

    let pageObjects = createNewTwoColumnsPage(pages, header, footer);

    const remainingHeight = containerHeight - (pageObjects.pageHeader.scrollHeight + pageObjects.pageFooter.scrollHeight)   

    let currentColumnIndex = 0;

    Array.from(tempContainer.children).forEach(element => {
      const { pageColumns } = pageObjects

      const currentColumn = pageColumns[currentColumnIndex];

      currentColumn.appendChild(element.cloneNode(true));

      if (currentColumn.scrollHeight > remainingHeight) {

        currentColumn.removeChild(currentColumn.lastChild);

        // Se o elemento que exceder a altura máxima tiver filhos que caibam no espaço disponível,
        // eles serão adicionados; o restante irá para a próxima coluna ou página
        let overflowElement = fitOverflow(element.cloneNode(true), currentColumn, remainingHeight, true)

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

    const tempContainer = createQuestoesTempContainer(provaModelo)

    return waitForImages(tempContainer)
      .then(() => {
        resetBodyContent(elementContainer)

        const {cabecalhoPagina, cabecalho, folhaRosto, paginacao, rodape} = provaModelo.modelo.prova.layout

        folhaDeRosto(elementContainer, cabecalho, folhaRosto, `<div>${rodape}</div><div>${paginacao}</div>`)

        oneColumnLayout(elementContainer, tempContainer, cabecalhoPagina, `<div>${rodape}</div><div>${paginacao}</div>`)
      })
      .then(() => {
        setPagination()
        tempContainer.innerHTML = ''
      })
  }

  function previewQuestaoOneColumn(elementContainer, provaModelo) {

    const tempContainer = createPreviewQuestaoTempContainer(provaModelo)

    return waitForImages(tempContainer)
      .then(() => {
        resetBodyContent(elementContainer)
        oneColumnLayout(elementContainer, tempContainer, '', '')
      })
      .then(() => {
        tempContainer.innerHTML = ''
      })
  }

  function previewQuestaoTwoColumn(elementContainer, provaModelo) {

    const tempContainer = createPreviewQuestaoTempContainer(provaModelo)

    return waitForImages(tempContainer)
      .then(() => {
        resetBodyContent(elementContainer)
        twoColumnLayout(elementContainer, tempContainer, '', '')
      })
      .then(() => {
        tempContainer.innerHTML = ''
      })
  }

  function twoColumnPage(elementContainer, provaModelo) {

    const tempContainer = createQuestoesTempContainer(provaModelo)

    return waitForImages(tempContainer)
      .then(() => {
        resetBodyContent(elementContainer)

        const {cabecalhoPagina, cabecalho, folhaRosto, paginacao, rodape} = provaModelo.modelo.prova.layout

        folhaDeRosto(elementContainer, cabecalho, folhaRosto, `<div>${rodape}</div><div>${paginacao}</div>`)

        twoColumnLayout(elementContainer, tempContainer, cabecalhoPagina, `<div>${rodape}</div><div>${paginacao}</div>`)
      }).then(() => {
        setPagination()
        tempContainer.innerHTML = ''
      })
  }

  function createQuestoesTempContainer(prova) {
    const tempContainer = document.createElement('div');

    const {
        cabecalhoPrimeiraQuestao,
        cabecalhoQuestao,
        ordemQuestaoPersonalizada
    } = prova.modelo.prova.layout;

    const formatCabecalho = (provaQuestao, cabecalhoTemplate) => {
        const ordem = ordemQuestaoPersonalizada
            ? (provaQuestao.ordemPersonalizada ?? '')
            : provaQuestao.ordem;

        return cabecalhoTemplate
            .replace('#ORDEM#', ordem)
            .replace('#VALOR#', provaQuestao.valor.toString().replace('.', ','));
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
        .join('');

    return tempContainer;
  }

  function createPreviewQuestaoTempContainer(prova) {
    const tempContainer = document.createElement('div');

    const generateQuestaoHTML = (provaQuestao) => {

        const tipoLinhaResposta = getTipoLinhaResposta(provaQuestao);

        return `
            <div>
                <div class='questao-completa'>
                    <div class='cabecalho-questao dontend'>
                        <div style="background:#A9A9A9;border:0px;padding:1px 1px;">
                          <span style="font-size:12px"><strong>QUESTÃO X</strong> ( valor: XX ponto(s) )</span>
                        </div>
                    </div>
                    ${provaQuestao.questao.visualizaQuestao}
                </div>
                ${tipoLinhaResposta}
            </div>
        `;
    };

    tempContainer.innerHTML = prova.modelo.listaProvaQuestao
        .map(generateQuestaoHTML)
        .join('');

    return tempContainer;
  }

  function createNumberedLines(numberOfLines, withHeader = true) {
    const header = `
    <tr>
    <td class="side-number-header" colspan="2">Resposta</td>
    </tr>
    `;

    const rows = Array.from({ length: numberOfLines }, (_, index) => `
    <tr>
    <td class="side-number">${index + 1}</td>
    <td class="side-number-content"></td>
    </tr>
    `).join('');

    return `
    <table class="side-number-table">
    ${withHeader ? header : ''}
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
        ${withHeader ? header : ''}
        ${"<tr><td></td></tr>".repeat(numberOfLines)
      }
      </table>
    `
  }

  function createAnswerBox(numberOfLines) {
    const height = Math.max(30 * numberOfLines, 30);
    return `
      <div class="box">
        <div class="box-header">Resposta</div>
        <div class="box-content" style='height: ${height}px'></div>
      </div>
    `
  }

  function getTipoLinhaResposta(provaQuestao) {
    if (provaQuestao.tipoLinha === null) {
      return ''
    }

    let tipoLinhaQuestao = ''
    switch (provaQuestao.tipoLinha.codigo) {
      case 1:
        tipoLinhaQuestao = createNumberedLines(provaQuestao.numeroLinhas)
        break;
      case 2:
        tipoLinhaQuestao = createAnswerLinesTable(provaQuestao.numeroLinhas)
        break;
      case 3:
        tipoLinhaQuestao = ''
        break;
      case 4:
        tipoLinhaQuestao = createAnswerBox(provaQuestao.numeroLinhas)
        break;
      case 5:
        tipoLinhaQuestao = createAnswerLinesTable(provaQuestao.numeroLinhas, false)
        break;
    }

    return tipoLinhaQuestao
  }

  function createNewOneColumnPage(pages, header, footer) {
    const newPage = document.createElement('div');
    newPage.className = 'page';
    newPage.innerHTML = templateLayoutOneColumn(header, footer)
    pages.appendChild(newPage);
    return {
      pageHeader: newPage.querySelector('.page-header'),
      pageContent: newPage.querySelector('.content-container'),
      pageColumn: newPage.querySelector('.one-column > .content-column'),
      pageFooter: newPage.querySelector('.page-footer')
    };
  }

  function createNewTwoColumnsPage(pages, header, footer) {
    const newPage = document.createElement('div');
    newPage.className = 'page';
    newPage.innerHTML = templateLayoutTwoColumn(header, footer);
    pages.appendChild(newPage);
    return {
      pageHeader: newPage.querySelector('.page-header'),
      pageContent: newPage.querySelector('.content-container'),
      pageColumns: newPage.querySelectorAll('.two-column > .content-column'),
      pageFooter: newPage.querySelector('.page-footer')
    }; 
    
    
  }