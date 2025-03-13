const MM_TO_INCH = 25.4;
const DEFAULT_DPI = 96;
const DONTSPLIT = "dontsplit";

const TEXT_NODE = 3;

const mmToPixels = (mm, dpi = DEFAULT_DPI) => (mm / MM_TO_INCH) * dpi;

const paddingsTopBottom = mmToPixels(20);
const containerHeight = mmToPixels(297) - paddingsTopBottom;

const setPagination = (elementContainer) => {
  try {
    const pages = elementContainer.querySelectorAll(".page");

    pages.forEach((page, index) => {
      page.querySelector("span.pageNum").innerHTML = index + 1;
      page.querySelector("span.pages").innerHTML = pages.length;
    });
  } catch (error) {
    console.warn("Erro ao gerar paginação.");
    console.warn(error);
  }
};

function resetBodyContent(pages) {
  pages.innerHTML = "";
}

function getAbsoluteHeight(element, includeMargin = true) {
  if (!element) return 0;

  const rect = element.getBoundingClientRect();
  let height = rect.height;

  if (includeMargin) {
    const computedStyle = window.getComputedStyle(element);
    const marginTop = parseFloat(computedStyle.marginTop);
    const marginBottom = parseFloat(computedStyle.marginBottom);
    height += marginTop + marginBottom;
  }

  return height;
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

function splitElement(element, putInHere, pageColumn, availableHeight) {

  const lastContent = putInHere.lastElementChild;

  if (lastContent && (lastContent.classList.contains("columnbreak") || lastContent.querySelector(".columnbreak"))) {
      return;
  }

  if (element.children.length === 0) return

  let cloneMe = element.firstElementChild;

  if (!cloneMe || cloneMe.nodeType !== 1) return

  let clone = cloneMe.cloneNode(true);

  availableHeight -= pageColumn.offsetHeight;

  if(cloneMe.classList.contains("columnbreak")) {
    putInHere.appendChild(clone);
    cloneMe.remove();
  } else {
    putInHere.appendChild(clone);

    const isImage = clone.tagName === "IMG";
    const isDontSplit = cloneMe.classList.contains(DONTSPLIT);
    const fitsInPage = pageColumn.offsetHeight < availableHeight + 20;
    const overflowsPage = pageColumn.offsetHeight > availableHeight;

    if ((isImage || isDontSplit) && fitsInPage) {
      cloneMe.remove();
    } else if (isImage || isDontSplit) {
      clone.remove();
    } else {

      clone.innerHTML = "";

      if (!fitOverflow(cloneMe, clone, pageColumn, availableHeight)) {
        if(cloneMe.children.length) {
          splitElement(cloneMe, clone, pageColumn, availableHeight);
        }
      }

      if (clone.childNodes.length === 0) {
        // it was split, but nothing is in it :(
        clone.remove();
        //cloneMe.removeClass(prefixTheClassName("split"));
      } else if (clone.childNodes.length == 1) {
        // was the only child node a text node w/ whitespace?
        let onlyNode = clone.childNodes[0];
        if (onlyNode.nodeType == TEXT_NODE) {
          // text node
          let nonwhitespace = /\S/;
          let str = onlyNode.nodeValue;
          if (!nonwhitespace.test(str)) {
            // yep, only a whitespace textnode
            clone.remove();
            //cloneMe.removeClass(prefixTheClassName("split"));
          }
        }
      }
    }
  }

}

function fitOverflow(overflowElement, putInHere, pageColumn, remainingHeight) {
  let pullOutHere = overflowElement;

  if (!pullOutHere) return;

  putInHere = putInHere.appendChild(pullOutHere.cloneNode(false));

  while (
    pageColumn.scrollHeight < remainingHeight &&
    pullOutHere.childNodes.length
  ) {
    let node = pullOutHere.childNodes[0];

    if (node.nodeType !== TEXT_NODE && (node.querySelector(".columnbreak") || node.classList.contains("columnbreak"))) {
        return;
    }

    putInHere.appendChild(node);
  }

  if (putInHere.childNodes.length === 0) return;

  const lastAppendedChild = putInHere.lastChild;
  putInHere.removeChild(lastAppendedChild);

  if (lastAppendedChild.nodeType == TEXT_NODE) {
  }

  if (overflowElement.children.length) {
    pullOutHere.prepend(lastAppendedChild);
  } else {
    pullOutHere.appendChild(lastAppendedChild);
  }

  return lastAppendedChild.nodeType === TEXT_NODE;
}

class LayoutProva {
  constructor(
    elementContainer,
    pageHeader,
    pageFooter,
    fonteTamanho,
    marcaDaqua = false,
    _folhaDeRosto,
    numeroFolhasRascunho = null
  ) {
    this.elementContainer = elementContainer;
    this.pageHeader = pageHeader;
    this.pageFooter = pageFooter;
    this.fonteTamanho = fonteTamanho;
    this.marcaDaqua = marcaDaqua;
    this._folhaDeRosto = _folhaDeRosto;
    this.numeroFolhasRascunho = numeroFolhasRascunho;
  }

  resetBodyContent() {
    this.elementContainer.innerHTML = "";
  }

  folhaDeRosto(header, content, footer) {
    const newPage = document.createElement("div");
    const marcadagua = this.marcaDaqua ? "marcadagua-px-rascunho" : "";
    newPage.className = "page " + marcadagua;
    newPage.innerHTML = this.gePageTemplate("one-column", header, footer);
    this.elementContainer.appendChild(newPage);

    const pageColumn = newPage.querySelector(".one-column > .content-column");

    const columnContent = document.createElement("div");
    columnContent.innerHTML = content;

    pageColumn.appendChild(columnContent);
  }

  rascunho() {
    for (let i = 0; i < this.numeroFolhasRascunho; i++) {
      this.createNewOneColumnPage();
    }
  }

  oneColumnPage(tempContainer) {
    return waitForImages(tempContainer)
      .then(() => {
        resetBodyContent(this.elementContainer);

        if (this._folhaDeRosto !== null) {
          const { header, content, footer } = this._folhaDeRosto;
          this.folhaDeRosto(header, content, footer);
        }

        this.oneColumnLayout(tempContainer);

        if (this.numeroFolhasRascunho) {
          this.rascunho();
        }
      })
      .then(() => {
        setPagination(this.elementContainer);
        tempContainer.remove();
      });
  }

  twoColumnPage(tempContainer) {
    return waitForImages(tempContainer)
      .then(() => {
        this.resetBodyContent();

        if (this._folhaDeRosto !== null) {
          const { header, content, footer } = this._folhaDeRosto;
          this.folhaDeRosto(header, content, footer);
        }

        this.twoColumnLayout(tempContainer);
      })
      .then(() => {
        setPagination(this.elementContainer);
        tempContainer.remove();
      });
  }

  oneColumnLayout(tempContainer) {
    let pageObjects = this.createNewOneColumnPage();

    const remainingHeight =
      containerHeight -
      (pageObjects.pageHeader.scrollHeight +
        pageObjects.pageFooter.scrollHeight);

    Array.from(tempContainer.children).forEach((element) => {
      pageObjects = this.columnizeOneColumn(
        element,
        pageObjects,
        remainingHeight
      );
    });
  }

  twoColumnLayout(tempContainer) {
    let pageObjects = this.createNewTwoColumnsPage();

    const remainingHeight =
      containerHeight -
      (pageObjects.pageHeader.scrollHeight +
        pageObjects.pageFooter.scrollHeight);

    let currentColumnIndex = 0; // index = 0 primera coluna, index = 1 segunda coluna.

    Array.from(tempContainer.children).forEach((element) => {
      let newValues = this.columnizeTwoColumn(
        element,
        pageObjects,
        remainingHeight,
        currentColumnIndex
      );
      pageObjects = newValues.pageObjects;
      currentColumnIndex = newValues.currentColumnIndex;
    });
  }

  columnizeOneColumn(element, pageObjects, remainingHeight) {
    const pageColumn = pageObjects.pageColumn;

    if(!element.children[0]) return pageObjects;

    element.classList.add("column-element");
    element.children[0].classList.add("column-element");

    pageColumn.appendChild(element.cloneNode(true));

    const isDontSplit = element.children[0].classList.contains(DONTSPLIT);

    const lastChildHeight = getAbsoluteHeight(pageColumn.lastChild);

    pageColumn.removeChild(pageColumn.lastChild);

    if (isDontSplit) {
      if (lastChildHeight > remainingHeight) {
        element.children[0].classList.remove(DONTSPLIT);
      }
    }

    fitOverflow(element, pageColumn, pageColumn, remainingHeight);
    splitElement(element, pageColumn, pageColumn, remainingHeight);

    if(element.children.length) {
      pageObjects = this.columnizeOneColumn(
        element,
        this.createNewOneColumnPage(),
        remainingHeight
      );
    }

    return pageObjects;
  }

  columnizeTwoColumn(
    element,
    pageObjects,
    remainingHeight,
    currentColumnIndex
  ) {
    const currentColumn = pageObjects.pageColumns[currentColumnIndex];

    element.classList.add("column-element");
    element.children[0].classList.add("column-element");

    currentColumn.appendChild(element.cloneNode(true));

    const isDontSplit = element.children[0].classList.contains(DONTSPLIT);

    const lastChildHeight = getAbsoluteHeight(currentColumn.lastChild);

    currentColumn.removeChild(currentColumn.lastChild);

    // Se o elemento que exceder a altura máxima tiver filhos que caibam no espaço disponível,
    // eles serão adicionados; o restante irá para a próxima coluna

    if (isDontSplit) {
      if (lastChildHeight > remainingHeight) {
        element.children[0].classList.remove(DONTSPLIT);
      }
    }

    fitOverflow(element, currentColumn, currentColumn, remainingHeight);
    splitElement(element, currentColumn, currentColumn, remainingHeight);

    if(element.children.length) {
      if (currentColumnIndex === 0) {
        const newValues = this.columnizeTwoColumn(
          element,
          pageObjects,
          remainingHeight,
          1
        );
        pageObjects = newValues.pageObjects;
        currentColumnIndex = newValues.currentColumnIndex;
      } else {
        const newValues = this.columnizeTwoColumn(
          element,
          this.createNewTwoColumnsPage(),
          remainingHeight,
          0
        );
        pageObjects = newValues.pageObjects;
        currentColumnIndex = newValues.currentColumnIndex;
      }
    }

    return {
      pageObjects,
      currentColumnIndex,
    };
  }

  createNewTwoColumnsPage() {
    const newPage = document.createElement("div");

    const marcadagua = this.marcaDaqua ? "marcadagua-px-rascunho" : "";
    newPage.className = "page " + marcadagua;

    newPage.innerHTML = this.gePageTemplate(
      "two-column",
      this.pageHeader,
      this.pageFooter
    );
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
    const marcadagua = this.marcaDaqua ? "marcadagua-px-rascunho" : "";
    newPage.className = "page " + marcadagua;

    newPage.innerHTML = this.gePageTemplate(
      "one-column",
      this.pageHeader,
      this.pageFooter
    );
    this.elementContainer.appendChild(newPage);
    return {
      pageHeader: newPage.querySelector(".page-header"),
      pageContent: newPage.querySelector(".content-container"),
      pageColumn: newPage.querySelector(".one-column > .content-column"),
      pageFooter: newPage.querySelector(".page-footer"),
    };
  }

  gePageTemplate(layoutType, header, footer) {
    const oneColumnLayout =
      '<div class="one-column"><div class="content-column"></div></div>';
    const twoColumnLayout =
      '<div class="two-column"><div class="content-column"></div></div>'.repeat(
        2
      );
    return `
      <div class='page-header'>
        ${header}
      </div>
      <div class="content-container" style="font-size: ${this.fonteTamanho}px;">
        ${layoutType === "one-column" ? oneColumnLayout : twoColumnLayout}
      </div>
      <div class='page-footer'>
        ${footer}
      </div>
    `;
  }

  static builder(elementContainer) {
    return new LayoutProvaBuilder(elementContainer);
  }
}

class LayoutProvaBuilder {
  constructor(elementContainer) {
    this.elementContainer = elementContainer;
    this.header = "";
    this.footer = "";
    this.fontSize = 12;
    this._folhaDeRosto = null;
    this.numeroFolhasRascunho = null;
    this.comMarcaDaqua = false;
  }

  folhaDeRosto({ header, content, footer }) {
    const valid = header != null && content != null && footer != null;

    if (!valid) {
      throw new Error(
        "Todas as propriedades de folha de rosto são obrigatorias. header, content e footer"
      );
    }

    this._folhaDeRosto = { header, content, footer };

    return this;
  }

  pageHeader(header) {
    this.header = header;
    return this;
  }

  pageFooter(footer) {
    this.footer = footer;
    return this;
  }

  marcaDaqua() {
    this.comMarcaDaqua = true;
    return this;
  }

  fonteTamanho(tamanho) {
    if (isNaN(tamanho)) {
      throw new Error("O valor da fonte deve ser um valor numerico.");
    }
    this.fontSize = tamanho;
    return this;
  }

  rascunho(numeroFolhas) {
    if (isNaN(numeroFolhas)) {
      throw new Error("O valor da rascunho deve ser um valor numerico.");
    }
    this.numeroFolhasRascunho = numeroFolhas;
    return this;
  }

  layoutProva() {
    return new LayoutProva(
      this.elementContainer,
      this.header,
      this.footer,
      this.fontSize,
      this.comMarcaDaqua,
      this._folhaDeRosto,
      this.numeroFolhasRascunho
    );
  }

  oneColumnLayout(provaModelo) {
    this.layoutProva().oneColumnPage(provaModelo);
  }

  twoColumnLayout(provaModelo) {
    this.layoutProva().twoColumnPage(provaModelo);
  }
}

export { LayoutProva };
