
const prova2 = {
    "modelo": {
      "prova": {
        "codigo": 9011,
        "totalPontos": 10,
        "duracao": "00:50",
        "usuario": {
          "codigo": 489,
          "nome": "PESSOA 489",
          "login": "PESSOA489",
          "senha": null,
          "cpf": null,
          "dataDesativacao": null,
          "dataCadastro": null,
          "alterarSenha": false,
          "email": "489@gmail.com",
          "codigoImportacao": null,
          "listaGrupo": [],
          "listaCursoCategoria": [],
          "status": 1,
          "foto": null,
          "instituicao": null,
          "aluno": null
        },
        "listaProvaModelo": [
          {
            "prova": {
              "codigo": 9011,
              "totalPontos": null,
              "duracao": null,
              "usuario": null,
              "listaProvaModelo": null,
              "listaProvaAnexo": null,
              "instrucaoEspecifica": null,
              "tipoProva": null,
              "listaTurma": null,
              "status": null,
              "dataCriacao": null,
              "dataModeracao": null,
              "dataAprovacao": null,
              "usuarioAprovacao": null,
              "instituicao": null,
              "modo": null,
              "novo": null,
              "listaProvaAgendamento": null
            },
            "modelo": 1,
            "nome": "A",
            "fonteTamanho": 14,
            "listaProvaQuestao": [
              {
                "codigo": 898449,
                "provaModelo": null,
                "questao": {
                  "codigo": "CHR-98233",
                  "tipoFonte": 1,
                  "privacidade": 1,
                  "dificuldade": "M",
                  "instrucao": null,
                  "textoBase": null,
                  "comando": null,
                  "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\t\n\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">A reação química elementar de decomposição do dióxido de nitrogênio, representada a seguir, é um exemplo de modelo cinético não linear.</p><figure class=\"image\"><img src=\"data:image/png;base64,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\"></figure><p style=\"text-align:justify;\">Observe no gráfico a variação da velocidade dessa reação em função da concentração de dióxido de nitrogênio:</p><figure class=\"image\"><img src=\"data:image/jpeg;base64,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\"></figure></div>\n\t\t\n\t\t<div  style=\"padding-bottom: 12px;\" class=\"ng-scope\"></div>\t\t\t\t\t\t\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Considerando os dados, a constante cinética da reação corresponde a:&nbsp;</p></div>\n\t\t\n\t\t<div class=\"coluna-sm-12 adaptive-margin-bottom\">\n\t\t\t<div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >a)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>0,1.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >b)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>0,3.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >c)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>0,5.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >d)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>0,7.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >e)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>0,9.</p></span>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>",
                  "provaAprovada": false,
                  "tipoQuestao": "Múltipla Escolha - Resposta Única",
                  "dataCriacao": "2024-10-06T23:07:56.385+00:00",
                  "ultimaAplicacao": null,
                  "fonte": null,
                  "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>   \n\t\t\t\t<p>\n\t\t\t\t\t<span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t<span   class=\"ng-binding ng-scope\">Item: c)</span>\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span> \n\t\t\t      <span style=\"margin-left:10px;\"  class=\"ng-binding\"></span>\n\t\t\t    </p> \t\t\t\t\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
                  "referencia": null,
                  "listaTag": [],
                  "listaCategoria": [],
                  "listaCursos": [],
                  "categoriasEmTexto": null,
                  "tagsEmTexto": null,
                  "cursoEmTexto": null,
                  "instituicao": null,
                  "status": {
                    "codigo": 16,
                    "cor": "#ff9801",
                    "descricao": "Em moderação",
                    "nome": "EM_MODERACAO",
                    "tipo": "Q"
                  },
                  "dataModeracao": "2024-10-06T23:08:33.000+00:00",
                  "categoriaSup": null,
                  "geradaPorIA": false,
                  "usuario": null
                },
                "valor": 1,
                "ordem": 1,
                "ordemPersonalizada": null,
                "origem": "I",
                "tipoLinha": null,
                "linhasBranco": 2,
                "mostrarReferencia": false,
                "infoReferencia": null,
                "numeroLinhas": null,
                "quebraPagina": false
              },
              {
                "codigo": 898450,
                "provaModelo": null,
                "questao": {
                  "codigo": "CHR-98235",
                  "tipoFonte": 1,
                  "privacidade": 1,
                  "dificuldade": "M",
                  "instrucao": null,
                  "textoBase": null,
                  "comando": null,
                  "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Dada a reação elementar 2 HCl → H<sub>2</sub> + Cl<sub>2</sub>, quando se duplica a concentração do HCl a velocidade da reação&nbsp;</p></div>\n\t\t\n\t\t<div class=\"coluna-sm-12 adaptive-margin-bottom\">\n\t\t\t<div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >a)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>diminui 8 vezes.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >b)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>aumenta 4 vezes.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >c)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>aumenta 2 vezes.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >d)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>diminui duas vezes.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >e)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>não sofre alteração</p></span>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>",
                  "provaAprovada": false,
                  "tipoQuestao": "Múltipla Escolha - Resposta Única",
                  "dataCriacao": "2024-10-06T23:13:28.901+00:00",
                  "ultimaAplicacao": null,
                  "fonte": null,
                  "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>   \n\t\t\t\t<p>\n\t\t\t\t\t<span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t<span   class=\"ng-binding ng-scope\">Item: b)</span>\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span> \n\t\t\t      <span style=\"margin-left:10px;\"  class=\"ng-binding\"></span>\n\t\t\t    </p> \t\t\t\t\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
                  "referencia": null,
                  "listaTag": [],
                  "listaCategoria": [],
                  "listaCursos": [],
                  "categoriasEmTexto": null,
                  "tagsEmTexto": null,
                  "cursoEmTexto": null,
                  "instituicao": null,
                  "status": {
                    "codigo": 16,
                    "cor": "#ff9801",
                    "descricao": "Em moderação",
                    "nome": "EM_MODERACAO",
                    "tipo": "Q"
                  },
                  "dataModeracao": "2024-10-06T23:13:28.870+00:00",
                  "categoriaSup": null,
                  "geradaPorIA": false,
                  "usuario": null
                },
                "valor": 1,
                "ordem": 2,
                "ordemPersonalizada": null,
                "origem": "I",
                "tipoLinha": null,
                "linhasBranco": 0,
                "mostrarReferencia": false,
                "infoReferencia": null,
                "numeroLinhas": null,
                "quebraPagina": true
              },
              {
                "codigo": 898451,
                "provaModelo": null,
                "questao": {
                  "codigo": "CHR-98234",
                  "tipoFonte": 1,
                  "privacidade": 1,
                  "dificuldade": "M",
                  "instrucao": null,
                  "textoBase": null,
                  "comando": null,
                  "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\t\n\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">O airbag, componente de segurança passiva dos veículos automotores, possui um balão de ar muito resistente que contém, entre outras substâncias, o sólido azida de sódio (NaN<sub>3</sub>). Quando ocorre uma colisão, os sensores distribuídos em partes especificas dos veículos transmitem um impulso elétrico (faísca) que provoca a rápida decomposição desse sólido, em gás nitrogênio (N<sub>2</sub>), responsável por inflar o airbag, e o sólido sódio (Na), conforme a equação da reação:</p><p style=\"text-align:center;\"><img src=\"data:image/png;base64,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\" alt=\"Tabela\n\nDescrição gerada automaticamente\" width=\"290\" height=\"107\"></p></div>\n\t\t\n\t\t<div  style=\"padding-bottom: 12px;\" class=\"ng-scope\"></div>\t\t\t\t\t\t\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p>A velocidade média de formação do gás nitrogênio, no intervalo entre 0 e 10 minutos, é igual a&nbsp;</p></div>\n\t\t\n\t\t<div class=\"coluna-sm-12 adaptive-margin-bottom\">\n\t\t\t<div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >a)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>4,5 x 10<sup>– 2</sup> mol/s.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >b)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>5,0 x 10<sup>– 2</sup> mol/s.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >c)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>3,0 x 10<sup>– 3</sup> mol/s.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >d)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>5,0 x 10<sup>– 4</sup> mol/s.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >e)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>7,5 x 10<sup>– 4</sup> mol/s.</p></span>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>",
                  "provaAprovada": false,
                  "tipoQuestao": "Múltipla Escolha - Resposta Única",
                  "dataCriacao": "2024-10-06T23:11:01.819+00:00",
                  "ultimaAplicacao": null,
                  "fonte": null,
                  "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>   \n\t\t\t\t<p>\n\t\t\t\t\t<span  class=\"ng-scope\">\n\t\t\t    \t\t<span   class=\"ng-binding ng-scope\">Item: a)</span>\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span> \n\t\t\t      <span style=\"margin-left:10px;\"  class=\"ng-binding\"></span>\n\t\t\t    </p> \t\t\t\t\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
                  "referencia": null,
                  "listaTag": [],
                  "listaCategoria": [],
                  "listaCursos": [],
                  "categoriasEmTexto": null,
                  "tagsEmTexto": null,
                  "cursoEmTexto": null,
                  "instituicao": null,
                  "status": {
                    "codigo": 16,
                    "cor": "#ff9801",
                    "descricao": "Em moderação",
                    "nome": "EM_MODERACAO",
                    "tipo": "Q"
                  },
                  "dataModeracao": "2024-10-06T23:11:01.788+00:00",
                  "categoriaSup": null,
                  "geradaPorIA": false,
                  "usuario": null
                },
                "valor": 1,
                "ordem": 3,
                "ordemPersonalizada": null,
                "origem": "I",
                "tipoLinha": null,
                "linhasBranco": 2,
                "mostrarReferencia": false,
                "infoReferencia": null,
                "numeroLinhas": null,
                "quebraPagina": false
              },
              {
                "codigo": 898452,
                "provaModelo": null,
                "questao": {
                  "codigo": "CHR-98236",
                  "tipoFonte": 1,
                  "privacidade": 1,
                  "dificuldade": "M",
                  "instrucao": null,
                  "textoBase": null,
                  "comando": null,
                  "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\t\n\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p>O iodeto de hidrogênio é um gás incolor, muito solúvel em água, que pode ser preparado a partir da mistura de hidrogênio com iodo, de acordo com a seguinte equação em equilíbrio:</p><p style=\"text-align:center;\">H<sub>2</sub>(g) + l<sub>2</sub>(g)&nbsp;⇌ 2Hl(g)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;∆H = + 26,46 kJ/mol</p></div>\n\t\t\n\t\t<div  style=\"padding-bottom: 12px;\" class=\"ng-scope\"></div>\t\t\t\t\t\t\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p>A adição, de uma certa quantidade de iodo gasoso no sistema provocará:&nbsp;</p></div>\n\t\t\n\t\t<div class=\"coluna-sm-12 adaptive-margin-bottom\">\n\t\t\t<div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >a)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>deslocamento do equilíbrio para a esquerda.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >b)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>aumento da temperatura.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >c)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>redução da quantidade de HI.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >d)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>diminuição do valor de ∆H.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >e)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>redução de gás hidrogênio.</p></span>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>",
                  "provaAprovada": false,
                  "tipoQuestao": "Múltipla Escolha - Resposta Única",
                  "dataCriacao": "2024-10-06T23:14:50.692+00:00",
                  "ultimaAplicacao": null,
                  "fonte": null,
                  "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>   \n\t\t\t\t<p>\n\t\t\t\t\t<span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t<span   class=\"ng-binding ng-scope\">Item: e)</span>\n\t\t\t      \t</span> \n\t\t\t      <span style=\"margin-left:10px;\"  class=\"ng-binding\"></span>\n\t\t\t    </p> \t\t\t\t\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
                  "referencia": null,
                  "listaTag": [],
                  "listaCategoria": [],
                  "listaCursos": [],
                  "categoriasEmTexto": null,
                  "tagsEmTexto": null,
                  "cursoEmTexto": null,
                  "instituicao": null,
                  "status": {
                    "codigo": 16,
                    "cor": "#ff9801",
                    "descricao": "Em moderação",
                    "nome": "EM_MODERACAO",
                    "tipo": "Q"
                  },
                  "dataModeracao": "2024-10-06T23:14:50.662+00:00",
                  "categoriaSup": null,
                  "geradaPorIA": false,
                  "usuario": null
                },
                "valor": 1,
                "ordem": 4,
                "ordemPersonalizada": null,
                "origem": "I",
                "tipoLinha": null,
                "linhasBranco": 0,
                "mostrarReferencia": false,
                "infoReferencia": null,
                "numeroLinhas": null,
                "quebraPagina": true
              },
              {
                "codigo": 898453,
                "provaModelo": null,
                "questao": {
                  "codigo": "CHR-98239",
                  "tipoFonte": 1,
                  "privacidade": 1,
                  "dificuldade": "M",
                  "instrucao": null,
                  "textoBase": null,
                  "comando": null,
                  "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\n\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Um técnico de laboratório químico precisa preparar algumas soluções aquosas, que são obtidas a partir das pastilhas da substância precursora no estado sólido. A solubilização desta substância consiste em um processo endotérmico. Ele está atrasado e precisa otimizar o tempo ao máximo, a fim de que essas soluções fiquem prontas.&nbsp;</p></div>\n\t\t\n\t\t<div  style=\"padding-bottom: 12px;\" class=\"ng-scope\"></div>\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Desse modo, indique soluções duas soluções que o técnico deve aplicar para tornar o processo de dissolução das pastilhas mais rápido.&nbsp;</p></div>\n\t</div>",
                  "provaAprovada": false,
                  "tipoQuestao": "Aberta - Resposta Única",
                  "dataCriacao": "2024-10-06T23:20:12.799+00:00",
                  "ultimaAplicacao": null,
                  "fonte": null,
                  "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>\n\t\t\t\t<p  class=\"ng-binding\"><p style=\"text-align:justify;\">Aumentar a superfície de contato.</p></p>\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
                  "referencia": null,
                  "listaTag": [],
                  "listaCategoria": [],
                  "listaCursos": [],
                  "categoriasEmTexto": null,
                  "tagsEmTexto": null,
                  "cursoEmTexto": null,
                  "instituicao": null,
                  "status": {
                    "codigo": 16,
                    "cor": "#ff9801",
                    "descricao": "Em moderação",
                    "nome": "EM_MODERACAO",
                    "tipo": "Q"
                  },
                  "dataModeracao": "2024-10-06T23:20:12.770+00:00",
                  "categoriaSup": null,
                  "geradaPorIA": false,
                  "usuario": null
                },
                "valor": 1,
                "ordem": 5,
                "ordemPersonalizada": null,
                "origem": "I",
                "tipoLinha": {
                  "codigo": 5,
                  "nome": "Linhas de Resposta Sem Título Resposta"
                },
                "linhasBranco": 1,
                "mostrarReferencia": false,
                "infoReferencia": null,
                "numeroLinhas": 4,
                "quebraPagina": false
              },
              {
                "codigo": 898454,
                "provaModelo": null,
                "questao": {
                  "codigo": "CHR-98240",
                  "tipoFonte": 1,
                  "privacidade": 1,
                  "dificuldade": "M",
                  "instrucao": null,
                  "textoBase": null,
                  "comando": null,
                  "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\n\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">A equação iônica balanceada representa a reação do ácido bromídrico com o ácido brômico em meio aquoso.</p><p style=\"text-align:center;\">1 BrO<sub>3</sub><sup>– </sup><sub>(aq)&nbsp;</sub>+&nbsp; 5 Br<sup>–&nbsp;</sup><sub>(aq)</sub>+ 6 H<sup>+</sup><sub>(aq)</sub> → 3 Br<sub>2(g)</sub> + 3 H<sub>2</sub>O<sub>(l)</sub></p><p style=\"text-align:justify;\">Em um estudo cinético dessa reação, em temperatura controlada, mediu-se a velocidade de consumo de cada reagente em diferentes concentrações. A tabela apresenta os resultados obtidos.</p><figure class=\"image image-style-align-center\"><img style=\"aspect-ratio:420/132;\" src=\"data:image/png;base64,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\" alt=\"Tabela\n\nDescrição gerada automaticamente\" width=\"420\" height=\"132\"></figure></div>\n\t\t\n\t\t<div  style=\"padding-bottom: 12px;\" class=\"ng-scope\"></div>\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Determine a ordem da reação com relação ao&nbsp;BrO<sub>3</sub><sup>– &nbsp;</sup>na reação.</p></div>\n\t</div>",
                  "provaAprovada": false,
                  "tipoQuestao": "Aberta - Resposta Única",
                  "dataCriacao": "2024-10-06T23:22:59.406+00:00",
                  "ultimaAplicacao": null,
                  "fonte": null,
                  "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>\n\t\t\t\t<p  class=\"ng-binding\"><p>Reação de primeira ordem</p></p>\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
                  "referencia": null,
                  "listaTag": [],
                  "listaCategoria": [],
                  "listaCursos": [],
                  "categoriasEmTexto": null,
                  "tagsEmTexto": null,
                  "cursoEmTexto": null,
                  "instituicao": null,
                  "status": {
                    "codigo": 16,
                    "cor": "#ff9801",
                    "descricao": "Em moderação",
                    "nome": "EM_MODERACAO",
                    "tipo": "Q"
                  },
                  "dataModeracao": "2024-10-06T23:22:59.376+00:00",
                  "categoriaSup": null,
                  "geradaPorIA": false,
                  "usuario": null
                },
                "valor": 1,
                "ordem": 6,
                "ordemPersonalizada": null,
                "origem": "I",
                "tipoLinha": {
                  "codigo": 4,
                  "nome": "Quadro"
                },
                "linhasBranco": 0,
                "mostrarReferencia": false,
                "infoReferencia": null,
                "numeroLinhas": 9,
                "quebraPagina": false
              },
              {
                "codigo": 898455,
                "provaModelo": null,
                "questao": {
                  "codigo": "CHR-98241",
                  "tipoFonte": 1,
                  "privacidade": 1,
                  "dificuldade": "M",
                  "instrucao": null,
                  "textoBase": null,
                  "comando": null,
                  "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\n\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Em água, o ácido carbônico, H<sub>2</sub>CO<sub>3</sub>, encontra-se ionizado conforme indicação simplificada nas equações a seguir:</p><p style=\"text-align:justify;\">I. H<sub>2</sub>CO<sub>3(aq) </sub>⇌ HCO<sub>3</sub><sup> –&nbsp;</sup><sub>(aq)&nbsp;</sub>+ H<sup>+</sup><sub>(aq)&nbsp;</sub>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K<sub>1</sub> = 2,5 × 10<sup> –4</sup>&nbsp;</p><p style=\"text-align:justify;\">II. HCO<sub>3</sub><sup> –&nbsp;</sup><sub>(aq)</sub>⇌ CO<sub>3</sub><sup> –2</sup><sub>(aq)&nbsp;</sub>+ H<sup>+</sup><sub>(aq)</sub>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K<sub>2</sub> = 5,6 × 10<sup>-11</sup>&nbsp;</p><p style=\"text-align:justify;\">III H<sub>2</sub>CO<sub>3(aq) </sub>⇌&nbsp;CO<sub>3</sub><sup> –2&nbsp;</sup><sub>(aq)&nbsp;</sub>+ 2H<sup>+</sup><sub>(aq)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</sub>K<sub>3</sub> = ?</p></div>\n\t\t\n\t\t<div  style=\"padding-bottom: 12px;\" class=\"ng-scope\"></div>\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p>Determine o valor da constante K<sub>3</sub> na da reação de ionização do ácido carbônico.</p></div>\n\t</div>",
                  "provaAprovada": false,
                  "tipoQuestao": "Aberta - Resposta Única",
                  "dataCriacao": "2024-10-06T23:25:38.603+00:00",
                  "ultimaAplicacao": null,
                  "fonte": null,
                  "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>\n\t\t\t\t<p  class=\"ng-binding\"><p>K = 1,4 x 10<sup>– 14</sup></p></p>\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
                  "referencia": null,
                  "listaTag": [],
                  "listaCategoria": [],
                  "listaCursos": [],
                  "categoriasEmTexto": null,
                  "tagsEmTexto": null,
                  "cursoEmTexto": null,
                  "instituicao": null,
                  "status": {
                    "codigo": 16,
                    "cor": "#ff9801",
                    "descricao": "Em moderação",
                    "nome": "EM_MODERACAO",
                    "tipo": "Q"
                  },
                  "dataModeracao": "2024-10-06T23:25:38.576+00:00",
                  "categoriaSup": null,
                  "geradaPorIA": false,
                  "usuario": null
                },
                "valor": 1,
                "ordem": 7,
                "ordemPersonalizada": null,
                "origem": "I",
                "tipoLinha": {
                  "codigo": 4,
                  "nome": "Quadro"
                },
                "linhasBranco": 0,
                "mostrarReferencia": false,
                "infoReferencia": null,
                "numeroLinhas": 8,
                "quebraPagina": false
              },
              {
                "codigo": 898456,
                "provaModelo": null,
                "questao": {
                  "codigo": "CHR-98244",
                  "tipoFonte": 1,
                  "privacidade": 1,
                  "dificuldade": "M",
                  "instrucao": null,
                  "textoBase": null,
                  "comando": null,
                  "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\n\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Dois fatores que podem alterar o pH sanguíneo são: a intensidade da respiração (quanto maior a intensidade, menor o teor de CO<sub>2</sub> no sangue) e o teor de bicarbonato na urina (quanto maior o teor de bicarbonato na urina, maior a diminuição de sua concentração no sangue).</p><p style=\"text-align:center;\">CO<sub>2(g)</sub> + H<sub>2</sub>O<sub>(ℓ)</sub>&nbsp;⇌ H<sup>+</sup><sub>(aq)</sub> + HCO<sub>3</sub><sup>–</sup><sub> (aq)</sub></p></div>\n\t\t\n\t\t<div  style=\"padding-bottom: 12px;\" class=\"ng-scope\"></div>\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Quais os efeitos do aumento da intensidade da respiração sobre os valores do pH sanguíneo? Justifique sua resposta.</p></div>\n\t</div>",
                  "provaAprovada": false,
                  "tipoQuestao": "Aberta - Resposta Única",
                  "dataCriacao": "2024-10-06T23:28:02.406+00:00",
                  "ultimaAplicacao": null,
                  "fonte": null,
                  "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>\n\t\t\t\t<p  class=\"ng-binding\"><p>Aumento do pH sanguíneo.</p></p>\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
                  "referencia": null,
                  "listaTag": [],
                  "listaCategoria": [],
                  "listaCursos": [],
                  "categoriasEmTexto": null,
                  "tagsEmTexto": null,
                  "cursoEmTexto": null,
                  "instituicao": null,
                  "status": {
                    "codigo": 16,
                    "cor": "#ff9801",
                    "descricao": "Em moderação",
                    "nome": "EM_MODERACAO",
                    "tipo": "Q"
                  },
                  "dataModeracao": "2024-10-06T23:28:02.369+00:00",
                  "categoriaSup": null,
                  "geradaPorIA": false,
                  "usuario": null
                },
                "valor": 1,
                "ordem": 8,
                "ordemPersonalizada": null,
                "origem": "I",
                "tipoLinha": {
                  "codigo": 5,
                  "nome": "Linhas de Resposta Sem Título Resposta"
                },
                "linhasBranco": 1,
                "mostrarReferencia": false,
                "infoReferencia": null,
                "numeroLinhas": 4,
                "quebraPagina": false
              },
              {
                "codigo": 898457,
                "provaModelo": null,
                "questao": {
                  "codigo": "CHR-98246",
                  "tipoFonte": 1,
                  "privacidade": 1,
                  "dificuldade": "M",
                  "instrucao": null,
                  "textoBase": null,
                  "comando": null,
                  "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\n\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Considere o equilíbrio entre os íons cromato (CrO<sub>4</sub><sup>2-</sup>) e dicromato (Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>) em solução aquosa, descrito a seguir.</p><p style=\"text-align:center;\">Cr<sub>2</sub>O<sub>7 </sub><sup>2–</sup><sub>(aq)&nbsp;</sub>+ H<sub>2</sub>O<sub>(ℓ)&nbsp;</sub>⇌ 2 H<sup>+</sup><sub>(aq) </sub>+ 2 CrO<sub>4&nbsp;</sub><sup>2–</sup><sub>(aq)</sub></p></div>\n\t\t\n\t\t<div  style=\"padding-bottom: 12px;\" class=\"ng-scope\"></div>\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p>Escreva a equação da constante de equilíbrio iônica entre os íons cromato e dicromato.</p></div>\n\t</div>",
                  "provaAprovada": false,
                  "tipoQuestao": "Aberta - Resposta Única",
                  "dataCriacao": "2024-10-06T23:34:14.808+00:00",
                  "ultimaAplicacao": null,
                  "fonte": null,
                  "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>\n\t\t\t\t<p  class=\"ng-binding\"><p>Equacionamento padrão do equilíbrio.</p></p>\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
                  "referencia": null,
                  "listaTag": [],
                  "listaCategoria": [],
                  "listaCursos": [],
                  "categoriasEmTexto": null,
                  "tagsEmTexto": null,
                  "cursoEmTexto": null,
                  "instituicao": null,
                  "status": {
                    "codigo": 16,
                    "cor": "#ff9801",
                    "descricao": "Em moderação",
                    "nome": "EM_MODERACAO",
                    "tipo": "Q"
                  },
                  "dataModeracao": "2024-10-06T23:34:14.779+00:00",
                  "categoriaSup": null,
                  "geradaPorIA": false,
                  "usuario": null
                },
                "valor": 1,
                "ordem": 9,
                "ordemPersonalizada": null,
                "origem": "I",
                "tipoLinha": null,
                "linhasBranco": 0,
                "mostrarReferencia": false,
                "infoReferencia": null,
                "numeroLinhas": null,
                "quebraPagina": true
              },
              {
                "codigo": 898458,
                "provaModelo": null,
                "questao": {
                  "codigo": "CHR-98247",
                  "tipoFonte": 1,
                  "privacidade": 1,
                  "dificuldade": "M",
                  "instrucao": null,
                  "textoBase": null,
                  "comando": null,
                  "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\n\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">O metanol pode ser obtido industrialmente pela reação entre o monóxido de carbono e o hidrogênio conforme a equação adiante:</p><p style=\"text-align:center;\">CO<sub>(g)</sub> + 2 H<sub>2(g)</sub>&nbsp;⇌ CH<sub>3</sub>OH<sub>(g)</sub></p></div>\n\t\t\n\t\t<div  style=\"padding-bottom: 12px;\" class=\"ng-scope\"></div>\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Há uma certa temperatura, em um recipiente de 2L. Após um certo tempo, o equilíbrio é atingido com 3 mols de monóxido de carbono, 2 mols de hidrogênio e 1 mol de metanol. Assim, determine o valor da constante de equilíbrio da reação.&nbsp;</p></div>\n\t</div>",
                  "provaAprovada": false,
                  "tipoQuestao": "Aberta - Resposta Única",
                  "dataCriacao": "2024-10-06T23:37:37.629+00:00",
                  "ultimaAplicacao": null,
                  "fonte": null,
                  "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>\n\t\t\t\t<p  class=\"ng-binding\"><p>K = 0,333</p></p>\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
                  "referencia": null,
                  "listaTag": [],
                  "listaCategoria": [],
                  "listaCursos": [],
                  "categoriasEmTexto": null,
                  "tagsEmTexto": null,
                  "cursoEmTexto": null,
                  "instituicao": null,
                  "status": {
                    "codigo": 16,
                    "cor": "#ff9801",
                    "descricao": "Em moderação",
                    "nome": "EM_MODERACAO",
                    "tipo": "Q"
                  },
                  "dataModeracao": "2024-10-06T23:37:37.510+00:00",
                  "categoriaSup": null,
                  "geradaPorIA": false,
                  "usuario": null
                },
                "valor": 1,
                "ordem": 10,
                "ordemPersonalizada": null,
                "origem": "I",
                "tipoLinha": null,
                "linhasBranco": 0,
                "mostrarReferencia": false,
                "infoReferencia": null,
                "numeroLinhas": null,
                "quebraPagina": false
              }
            ]
          }
        ],
        "listaProvaAnexo": [],
        "instrucaoEspecifica": null,
        "tipoProva": {
          "codigo": 7,
          "nome": "TESTE DE RECUPERAÇÃO",
          "notaParcial": "REC",
          "cor": null,
          "instituicao": null,
          "multiploAgendamento": true,
          "bloqueioQuestao": true,
          "listaLayout": []
        },
        "listaTurma": [
          {
            "codigo": 38861,
            "codigoTurma": "21SU22MAQUI2",
            "nome": "A",
            "disciplina": "QUÍMICA II",
            "periodoLetivo": {
              "codigo": 24,
              "nome": "RECUPERAÇÃO - 2024",
              "ativo": true,
              "instituicao": null
            },
            "professor": {
              "codigo": 489,
              "nome": "PESSOA 489",
              "login": null,
              "senha": null,
              "cpf": null,
              "dataDesativacao": null,
              "dataCadastro": null,
              "alterarSenha": null,
              "email": null,
              "codigoImportacao": null,
              "listaGrupo": [],
              "listaCursoCategoria": [],
              "status": null,
              "foto": null,
              "instituicao": null,
              "aluno": null
            },
            "cursoUnidade": {
              "codigo": 31,
              "unidade": {
                "codigo": 5,
                "nome": "SUL",
                "instituicao": null
              },
              "curso": {
                "codigo": 22,
                "nome": "2ª SÉRIE / EM",
                "instituicao": null,
                "categoria": null,
                "listaCategorias": [],
                "listaTipoProvaCurso": [],
                "check": false
              },
              "turno": {
                "codigo": 1,
                "nome": "Manhã"
              },
              "graficaPadrao": null,
              "listaGrafica": [],
              "listaCoordenador": [],
              "listaLayout": []
            },
            "dataDesativacao": null,
            "listaCoordenador": [],
            "listaAluno": [],
            "listaAgendamento": null,
            "novo": null,
            "listaAgrupamento": []
          }
        ],
        "status": {
          "codigo": 2,
          "nome": "EM_MODERACAO",
          "descricao": "Em moderação",
          "tipo": null,
          "cor": "#ff9801"
        },
        "dataCriacao": "2024-10-17T03:00:00.000+00:00",
        "dataModeracao": "2024-10-17T03:00:00.000+00:00",
        "dataAprovacao": null,
        "usuarioAprovacao": null,
        "instituicao": {
          "auth": 1,
          "codigo": 1,
          "emailAlt": true,
          "exitusUrl": "https://exitus.christus.com.br",
          "googleChave": null,
          "instituicaoExterna": 1,
          "linkFile": "",
          "logo": null,
          "mesesBloqueioQuestao": 12,
          "nome": "Christus",
          "nomeFile": "logo/2022-10-11-132142464.png",
          "prefixoQuestao": "CHR",
          "provaVisualiza": false,
          "site": "www.christus.com.br",
          "textoBaseObg": false
        },
        "modo": "I",
        "novo": true,
        "listaProvaAgendamento": [],
        "layout": {
          "codigo": 149,
          "nome": "Atividade/Teste - Clássica (Sem valor da questão)",
          "cabecalho": "<div id=\"cabecalho_colegio\">\n\t<p style=\"text-align:right\">\n\t\t<img id=\"logo_prova\" class=\"logo-cabecalho\" alt=\"\" src=\"#LOGO#\" style=\"border:0px; solid black; float:left; margin:0px; height:70px; width:200px;\"/>&nbsp; &nbsp; &nbsp; &nbsp;\n\t</p>\n\t\t\n\t<p style=\"text-align:center;\">\n\t\t<span style=\"font-size:20px\">\n\t\t\t<strong>#CURSO# - #PERIODO#</strong>\n\t\t</span>\n\t</p>\n\t<p style=\"text-align:center\">\n\t\t<span style=\"font-size:16px\">\n\t\t\t<strong>#TIPOPROVANOME# DE #DISCIPLINA#</strong>\n\t\t</span>\n\t</p>\n</div>",
          "rodape": "<hr style=\"border-color: black;\" /><p style=\"font-size:11px; text-align: center;\"><strong>#site# | <img alt=\"\" style=\"height: 15px; vertical-align: middle;\" src=\"data:image/png;base64,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\"/> @colegiochristus | <img alt=\"\" style=\"height: 15px; vertical-align: middle;\" src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAIAAABuYg/PAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANtSURBVFhHzZdNKD1RGMZ9XyxYWOhufISkfISk5DtRNoq1rKRYECU2FlciK4kICUWUKImw8bFTipCyscEK+f6W/9OcZ+6duXdm7gyl/293zvu87zNz5pz33Ovz/Yf892YfHx9fX18cWMGU2cvLy+HhYWdnZ0tLS21tbWlpaXl5eX19PYbd3d0nJyfv7++UGuLF7OnpaXR0NCcnJzg42EcHhEpKSmZmZt7e3pimg5HZzs5OZmYmS5qgoKBgf3+fyVromvX19YWEhLCMaSIiIiYnJ1nCA22zrq4uZlvH19e3v7+fhdRomOGdmPdT4DcxMcFyCtzNNjc3DfaCeUJDQ/f29lhURmV2fX2dmppKuUxYWFhDQ0N8fDzHpikqKnp+fmZpCZXZ4OAghTI2m212dhah4+PjmJgYzppmYWFBVBa4zHBy09LSqJKprq5mWPJLSEhgwBw4f5+fn8xXmm1tbQUEBFAls7KywrAE+oinxgB8OTwik5VmPT09lChYXV1lWGqJzc3N2GmMmWN+fp75SrPCwkLGFQwNDYkoWlFTUxNnrVBVVSUqAJdZSkoK4wqysrLEop+ennLKIsXFxaI+cJl5bnoQGBi4uLiI6MXFRWRkJGetkJ+fL+oDL2YgPT394eEBgvX19R90S20zzWUUtLW1Cc3w8LCl3QhwFYhc4DLDpcW4B0FBQdPT00I2MjKCDc2A9P2Xl5fj4uI49qCsrEwkApdZe3s741pgAZ2beGNjIyoqCpMVFRW3t7eYOTo6io2NFUo3BgYGRBZwma2trfn5+VGiBfycvfzs7AytSHxLAQ5vUlISpTLYXwcHB1QozR4fHxMTE6nSAU/T2Nh4c3PDHDV4Cepk8vLyXl9fGVaaAYfDQZUhycnJU1NT9/f3TJPY3t4Wa6tkfHycYQmV2eXlZXR0NIXeyMjIQE/Z3d3FQuF1w8PDGZDB9hZf1InKDOBZqDUHFtbf358DBZhcWlpiURl3M4Crkhm/oKOjg+UUaJhhp1RWVjLpR9TU1Ljd0QINM4C1rqurY6pFWltbcQ+zkBptMwGahd5R1QTnbG5ujslaGJmB8/NzdBa73c56OuDnUG9vL34vMU0HL2aCq6ursbExXNPZ2dnoI05yc3Px3wJ30N3dHaWGmDJzgs+Os+hE2R3MYM3sl/yh2ff3P5bv1d6146b9AAAAAElFTkSuQmCC\"/> (85) 3277.1515</strong></p>",
          "folhaRosto": "<table cellpadding=\"2\" cellspacing=\"0\" style=\"margin-top:10px; width:100%; max-width:100% !important; border:solid black 1px;\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td style=\"height:20px; width:625px !important; font-size:10px; border-right:solid black 1px; padding-left:5px;\"><small>Aluno(a)</small></td>\n\t\t\t<td style=\"width:90px !important; font-size:10px; padding-left:5px;\"><small>Data</small></td>\t\t\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td style=\"text-align:center; height:25px; width:625px !important; font-size:13px; border-right:solid black 1px;\">&nbsp;</td>\n\t\t\t<td style=\"text-align:center; width:90px !important; font-size:13px;\">#DATA#</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<table cellpadding=\"2\" cellspacing=\"0\" style=\"width:100%; max-width:100% !important; margin-top:-1px; border:solid black 1px;\">\n\t<tbody>\n\t\t<tr>\n\t\t\t<td style=\"height:20px; width:90px !important; font-size:10px; border-right:solid black 1px; padding-left:5px;\"><small>Número</small></td>\n\t\t\t<td style=\"width:175px !important; font-size:10px; border-right:solid black 1px; padding-left:5px;\"><small>Sede</small></td>\n\t\t\t<td style=\"width:90px !important; font-size:10px; border-right:solid black 1px; padding-left:5px;\"><small>Turno</small></td>\n\t\t\t<td style=\"width:90px !important; font-size:10px; border-right:solid black 1px; padding-left:5px;\"><small>Turma</small></td>\n\t\t\t<td style=\"width:90px !important; font-size:10px; border-right:solid black 1px; padding-left:5px;\"><small>Nº Questões</small></td>\n\t\t\t<td style=\"width:90px !important; font-size:10px; border-right:solid black 1px; padding-left:5px;\"><small>Nota Máxima</small></td>\t\n\t\t\t<td style=\"width:90px !important; font-size:10px; padding-left:5px;\"><small>Nota</small></td>\t\n\t\t</tr>\n\t\t<tr>\n\t\t\t<td style=\"text-align:center; height:25px; width:90px !important; font-size:13px; border-right:solid black 1px;\">&nbsp;</td>\n\t\t\t<td style=\"text-align:center; width:175px !important; font-size:13px; border-right:solid black 1px;\">&nbsp;</td>\n\t\t\t<td style=\"text-align:center; width:90px !important; font-size:13px; border-right:solid black 1px;\">#TURNO#</td>\n\t\t\t<td style=\"text-align:center; width:90px !important; font-size:13px; border-right:solid black 1px;\">&nbsp;</td>\n\t\t\t<td style=\"text-align:center; width:90px !important; font-size:13px; border-right:solid black 1px;\">#TOTALQUEST#</td>\n\t\t\t<td style=\"text-align:center; width:90px !important; font-size:13px; border-right:solid black 1px;\">#PONTOS#</td>\n\t\t\t<td style=\"text-align:center; width:90px !important; font-size:13px;\">&nbsp;</td>\n\t\t</tr>\n\t</tbody>\n</table>\n\n<p style=\"margin-top:10px; text-align:center; border:solid black 1px; background-color:#ebebeb; padding-top:3px; padding-bottom:3px;\"><strong>LEIA ATENTAMENTE AS INSTRUÇÕES SEGUINTES:</strong></p>\n\n<div style=\"border:solid black 1px; padding:5px 5px; margin-top:-1px\">\n\t<ol style=\"margin-top:5px; margin-bottom:5px; padding-right:5px; padding-left:30px;\">\n\t\t<li style=\"text-align:justify;\">Preencha o cabeçalho de todas as páginas corretamente.</li>\n\t\t<li style=\"text-align:justify;\">Verifique se o exemplar de sua avaliação está completo. Nenhuma folha poderá ser destacada ou substituída.</li>\n\t\t<li style=\"text-align:justify;\">Verifique, após autorizado o início da avaliação, se existem falhas ou imperfeições gráficas que lhe causem dúvidas. Reclamações só serão aceitas durante a primeira hora da avaliação.</li>\n\t\t<li style=\"text-align:justify;\">A interpretação do conteúdo, a compreensão vocabular e o conhecimento da norma-padrão são inerentes à avaliação, por isso leia e analise atentamente cada questão.</li>\n\t\t<li style=\"text-align:justify;\">Não rasure nem use corretivo. Questões rasuradas ou com corretivo equivalem a questões erradas.</li>\n\t\t<li style=\"text-align:justify;\">Para as questões de múltipla escolha (do tipo a, b, c, d, e), assinale uma única resposta.</li>\n\t\t<li style=\"text-align:justify;\">A inobservância ao comando integral da questão poderá acarretar perda da pontuação.</li>\n\t\t<li style=\"text-align:justify;\">Os cálculos são necessários e podem ser feitos a lápis. As respostas devem ser grafadas com caneta esferográfica de cor azul ou preta e com corpo transparente.</li>\n\t\t<li style=\"text-align:justify;\">Sempre que houver gabarito, este deverá ser preenchido com letra de forma.</li>\n\t\t<li style=\"text-align:justify;\">Não é permitido ao aluno portar celular, <i>smartphone</i>, <i>smartwatch</i> ou outro dispositivo eletrônico durante a avaliação, mesmo que este esteja desligado, nem fazer uso de recursos impróprios à sua avaliação pessoal.</li>\n\t\t<li style=\"text-align:justify;\">Não é permitida a utilização de livros, cadernos, calculadoras etc.</li>\n\t\t<li style=\"text-align:justify;\">Não é permitida a troca de material entre os alunos.</li>\n\t\t<li style=\"text-align:justify;\">A fraude, a indisciplina e o desrespeito ao(s) funcionário(s) encarregado(s) da fiscalização são faltas passíveis de punição.</li>\n\t\t<li style=\"text-align:justify;\">O aluno está ciente de que, caso a sala possua câmeras, suas imagens poderão ser registradas e utilizadas para análise de ocorrências.</li>\n\t\t<li style=\"text-align:justify;\">Não é permitido o uso de marca-texto em nenhum local da avaliação.</li>\n\t\t<li style=\"text-align:justify;\">Contestações acerca da avaliação somente poderão ser analisadas em até 72 horas depois da devolução da atividade ou do teste corrigido pelo professor.</li>\n\t</ol>\n</div>\n<p style=\"margin-top:5px; text-align: center;\"><strong>BOM DESEMPENHO!</strong></p>\n<div class=\"page-break\"></div>",
          "paginacao": "<p style=\"float: left; text-align: right; font-size:12px;\"><span>Admin Christus - 03/12/2024</span></p> <p style=\"text-align: right; font-size:12px; margin-top:-15px;\"><span class=\"pageNum\"></span>/<span class=\"pages\"></span></p>",
          "tipoFolha": "A4",
          "margem": 1,
          "cabecalhoQuestao": "<div style=\"background-color:#c6c6c6; border:0px; padding:1px 1px; margin-top:15px; margin-bottom:5px; \"><span style=\"font-size:12px\"><strong>QUESTÃO #ORDEM#</strong></span></div>",
          "orientacaoFolha": "portrait",
          "rodapeRosto": null,
          "rascunho": "<div class=\"ng-hide source-back-header\">\n\t\t\t<p style=\"text-align:right\"><img alt=\"\"  src=\"#logo#\" style=\"border:0px solid black; float:left; height:auto; margin:0px; width:auto; max-height:60px;\"  />&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>\n\t\t</div>\n\t\t<div class=\"ng-hide source-back\"></div>\n\t\t<div id=\"page2el\" class=\"ng-hide source-back-footer\">\n\t\t\t<p style=\"text-align:center\"><span style=\"color:#696969\"><span style=\"font-family:times new roman,times,serif\"><span style=\"font-size:28px\"><strong>RASCUNHO</strong></span></span></span></p>\n\t\t</div>",
          "colunas": 1,
          "marcaDagua": "https://storage.googleapis.com/exitus-christus/logo/Christus%20-%20px.png",
          "cabecalhoPagina": "<div id=\"cabecalho2\" class=\"ng-hide source-back-header\">\n\t<div style=\"display: flow-root;\">\n\t\t<p style=\"text-align:right\">\n\t\t\t<img id=\"logo_prova\" class=\"logo-cabecalho\" alt=\"\" src=\"#LOGO#\" style=\"border:0px; solid black; float:left; margin:0px; height:55px; width:185px;\"/>&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;\n\t\t</p>\n\t\t<p style=\"text-align:center; margin-top:-15px;\">\n\t\t\t<span style=\"font-size:16px\">\n\t\t\t\t<strong>#CURSO# - #PERIODO#</strong>\n\t\t\t</span>\n\t\t</p>\n\t\t<p style=\"text-align:center\">\n\t\t\t<span style=\"font-size:16px\">\n\t\t\t\t<strong>#TIPOPROVANOME# DE #DISCIPLINA#</strong>\n\t\t\t</span>\n\t\t</p>\n\t</div>\n\t\n\t<table cellpadding=\"2\" cellspacing=\"0\" style=\"width:100%; max-width:100% !important; margin-top:10px; border:solid black 1px;\">\n\t\t<tbody>\n\t\t\t<tr>\n\t\t\t\t<td style=\"height:20px; width:500px !important; font-size:10px; border-right:solid black 1px; padding-left:5px;\"><small>Aluno(a)</small></td>\n\t\t\t\t<td style=\"width:100px !important; font-size:10px; border-right:solid black 1px; padding-left:5px;\"><small>Número</small></td>\n\t\t\t\t<td style=\"width:120px !important; font-size:10px; padding-left:5px;\"><small>Turma</small></td>\t\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td style=\"text-align:center; height:25px; width:500px !important; font-size:13px; border-right:solid black 1px;\">&nbsp;</td>\n\t\t\t\t<td style=\"text-align:center; width:100px !important; font-size:13px; border-right:solid black 1px;\">&nbsp;</td>\n\t\t\t\t<td style=\"text-align:center; width:120px !important; font-size:13px;\">&nbsp;</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>",
          "fonte": "Arial",
          "fonteTamanho": 14,
          "origemQuestao": false,
          "cabecalhoPrimeiraQuestao": "<div style=\"background-color:#c6c6c6; border:0px; padding:1px 1px; margin-top:15px; margin-bottom:5px; \"><span style=\"font-size:12px\"><strong>QUESTÃO #ORDEM#</strong></span></div>",
          "ordemQuestaoPersonalizada": false,
          "ativo": null,
          "tamanhosSuportados": "12, 14, 16, 18"
        },
        "dataRealizacao": "16/12/2024",
        "folhasRascunho": 0,
        "corImpressao": "P",
        "tipoImpressao": "FV",
        "obs": null,
        "dataAplicacao": null,
        "listaCTE": [],
        "turmasEmTexto": null,
        "ctesEmTexto": null,
        "quebraQuestao": true,
        "$promise": {},
        "$resolved": true,
        "turma": {
          "codigo": 38861,
          "codigoTurma": "21SU22MAQUI2",
          "nome": "A",
          "disciplina": "QUÍMICA II",
          "periodoLetivo": {
            "codigo": 24,
            "nome": "RECUPERAÇÃO - 2024",
            "ativo": true,
            "instituicao": null
          },
          "professor": {
            "codigo": 489,
            "nome": "PESSOA 489",
            "login": null,
            "senha": null,
            "cpf": null,
            "dataDesativacao": null,
            "dataCadastro": null,
            "alterarSenha": null,
            "email": null,
            "codigoImportacao": null,
            "listaGrupo": [],
            "listaCursoCategoria": [],
            "status": null,
            "foto": null,
            "instituicao": null,
            "aluno": null
          },
          "cursoUnidade": {
            "codigo": 31,
            "unidade": {
              "codigo": 5,
              "nome": "SUL",
              "instituicao": null
            },
            "curso": {
              "codigo": 22,
              "nome": "2ª SÉRIE / EM",
              "instituicao": null,
              "categoria": null,
              "listaCategorias": [],
              "listaTipoProvaCurso": [],
              "check": false
            },
            "turno": {
              "codigo": 1,
              "nome": "Manhã"
            },
            "graficaPadrao": null,
            "listaGrafica": [],
            "listaCoordenador": [],
            "listaLayout": []
          },
          "dataDesativacao": null,
          "listaCoordenador": [],
          "listaAluno": [],
          "listaAgendamento": null,
          "novo": null,
          "listaAgrupamento": []
        }
      },
      "modelo": 1,
      "nome": "A",
      "fonteTamanho": 14,
      "listaProvaQuestao": [
        {
          "codigo": 898449,
          "provaModelo": null,
          "questao": {
            "codigo": "CHR-98233",
            "tipoFonte": 1,
            "privacidade": 1,
            "dificuldade": "M",
            "instrucao": null,
            "textoBase": null,
            "comando": null,
            "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\t\n\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">A reação química elementar de decomposição do dióxido de nitrogênio, representada a seguir, é um exemplo de modelo cinético não linear.</p><figure class=\"image\"><img src=\"data:image/png;base64,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\"></figure><p style=\"text-align:justify;\">Observe no gráfico a variação da velocidade dessa reação em função da concentração de dióxido de nitrogênio:</p><figure class=\"image\"><img src=\"data:image/jpeg;base64,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\"></figure></div>\n\t\t\n\t\t<div  style=\"padding-bottom: 12px;\" class=\"ng-scope\"></div>\t\t\t\t\t\t\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Considerando os dados, a constante cinética da reação corresponde a:&nbsp;</p></div>\n\t\t\n\t\t<div class=\"coluna-sm-12 adaptive-margin-bottom\">\n\t\t\t<div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >a)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>0,1.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >b)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>0,3.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >c)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>0,5.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >d)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>0,7.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >e)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>0,9.</p></span>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>",
            "provaAprovada": false,
            "tipoQuestao": "Múltipla Escolha - Resposta Única",
            "dataCriacao": "2024-10-06T23:07:56.385+00:00",
            "ultimaAplicacao": null,
            "fonte": null,
            "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>   \n\t\t\t\t<p>\n\t\t\t\t\t<span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t<span   class=\"ng-binding ng-scope\">Item: c)</span>\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span> \n\t\t\t      <span style=\"margin-left:10px;\"  class=\"ng-binding\"></span>\n\t\t\t    </p> \t\t\t\t\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
            "referencia": null,
            "listaTag": [],
            "listaCategoria": [],
            "listaCursos": [],
            "categoriasEmTexto": null,
            "tagsEmTexto": null,
            "cursoEmTexto": null,
            "instituicao": null,
            "status": {
              "codigo": 16,
              "cor": "#ff9801",
              "descricao": "Em moderação",
              "nome": "EM_MODERACAO",
              "tipo": "Q"
            },
            "dataModeracao": "2024-10-06T23:08:33.000+00:00",
            "categoriaSup": null,
            "geradaPorIA": false,
            "usuario": null
          },
          "valor": 1,
          "ordem": 1,
          "ordemPersonalizada": null,
          "origem": "I",
          "tipoLinha": null,
          "linhasBranco": 2,
          "mostrarReferencia": false,
          "infoReferencia": null,
          "numeroLinhas": null,
          "quebraPagina": false
        },
        {
          "codigo": 898450,
          "provaModelo": null,
          "questao": {
            "codigo": "CHR-98235",
            "tipoFonte": 1,
            "privacidade": 1,
            "dificuldade": "M",
            "instrucao": null,
            "textoBase": null,
            "comando": null,
            "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\t\n\t\t\n\t\t\n\t\t\n\t\t\n\t\t\t\t\t\t\t\t\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Dada a reação elementar 2 HCl → H<sub>2</sub> + Cl<sub>2</sub>, quando se duplica a concentração do HCl a velocidade da reação&nbsp;</p></div>\n\t\t\n\t\t<div class=\"coluna-sm-12 adaptive-margin-bottom\">\n\t\t\t<div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >a)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>diminui 8 vezes.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >b)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>aumenta 4 vezes.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >c)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>aumenta 2 vezes.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >d)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>diminui duas vezes.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >e)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>não sofre alteração</p></span>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>",
            "provaAprovada": false,
            "tipoQuestao": "Múltipla Escolha - Resposta Única",
            "dataCriacao": "2024-10-06T23:13:28.901+00:00",
            "ultimaAplicacao": null,
            "fonte": null,
            "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>   \n\t\t\t\t<p>\n\t\t\t\t\t<span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t<span   class=\"ng-binding ng-scope\">Item: b)</span>\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span> \n\t\t\t      <span style=\"margin-left:10px;\"  class=\"ng-binding\"></span>\n\t\t\t    </p> \t\t\t\t\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
            "referencia": null,
            "listaTag": [],
            "listaCategoria": [],
            "listaCursos": [],
            "categoriasEmTexto": null,
            "tagsEmTexto": null,
            "cursoEmTexto": null,
            "instituicao": null,
            "status": {
              "codigo": 16,
              "cor": "#ff9801",
              "descricao": "Em moderação",
              "nome": "EM_MODERACAO",
              "tipo": "Q"
            },
            "dataModeracao": "2024-10-06T23:13:28.870+00:00",
            "categoriaSup": null,
            "geradaPorIA": false,
            "usuario": null
          },
          "valor": 1,
          "ordem": 2,
          "ordemPersonalizada": null,
          "origem": "I",
          "tipoLinha": null,
          "linhasBranco": 0,
          "mostrarReferencia": false,
          "infoReferencia": null,
          "numeroLinhas": null,
          "quebraPagina": true
        },
        {
          "codigo": 898451,
          "provaModelo": null,
          "questao": {
            "codigo": "CHR-98234",
            "tipoFonte": 1,
            "privacidade": 1,
            "dificuldade": "M",
            "instrucao": null,
            "textoBase": null,
            "comando": null,
            "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\t\n\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">O airbag, componente de segurança passiva dos veículos automotores, possui um balão de ar muito resistente que contém, entre outras substâncias, o sólido azida de sódio (NaN<sub>3</sub>). Quando ocorre uma colisão, os sensores distribuídos em partes especificas dos veículos transmitem um impulso elétrico (faísca) que provoca a rápida decomposição desse sólido, em gás nitrogênio (N<sub>2</sub>), responsável por inflar o airbag, e o sólido sódio (Na), conforme a equação da reação:</p><p style=\"text-align:center;\"><img src=\"data:image/png;base64,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\" alt=\"Tabela\n\nDescrição gerada automaticamente\" width=\"290\" height=\"107\"></p></div>\n\t\t\n\t\t<div  style=\"padding-bottom: 12px;\" class=\"ng-scope\"></div>\t\t\t\t\t\t\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p>A velocidade média de formação do gás nitrogênio, no intervalo entre 0 e 10 minutos, é igual a&nbsp;</p></div>\n\t\t\n\t\t<div class=\"coluna-sm-12 adaptive-margin-bottom\">\n\t\t\t<div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >a)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>4,5 x 10<sup>– 2</sup> mol/s.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >b)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>5,0 x 10<sup>– 2</sup> mol/s.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >c)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>3,0 x 10<sup>– 3</sup> mol/s.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >d)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>5,0 x 10<sup>– 4</sup> mol/s.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >e)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>7,5 x 10<sup>– 4</sup> mol/s.</p></span>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>",
            "provaAprovada": false,
            "tipoQuestao": "Múltipla Escolha - Resposta Única",
            "dataCriacao": "2024-10-06T23:11:01.819+00:00",
            "ultimaAplicacao": null,
            "fonte": null,
            "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>   \n\t\t\t\t<p>\n\t\t\t\t\t<span  class=\"ng-scope\">\n\t\t\t    \t\t<span   class=\"ng-binding ng-scope\">Item: a)</span>\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span> \n\t\t\t      <span style=\"margin-left:10px;\"  class=\"ng-binding\"></span>\n\t\t\t    </p> \t\t\t\t\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
            "referencia": null,
            "listaTag": [],
            "listaCategoria": [],
            "listaCursos": [],
            "categoriasEmTexto": null,
            "tagsEmTexto": null,
            "cursoEmTexto": null,
            "instituicao": null,
            "status": {
              "codigo": 16,
              "cor": "#ff9801",
              "descricao": "Em moderação",
              "nome": "EM_MODERACAO",
              "tipo": "Q"
            },
            "dataModeracao": "2024-10-06T23:11:01.788+00:00",
            "categoriaSup": null,
            "geradaPorIA": false,
            "usuario": null
          },
          "valor": 1,
          "ordem": 3,
          "ordemPersonalizada": null,
          "origem": "I",
          "tipoLinha": null,
          "linhasBranco": 2,
          "mostrarReferencia": false,
          "infoReferencia": null,
          "numeroLinhas": null,
          "quebraPagina": false
        },
        {
          "codigo": 898452,
          "provaModelo": null,
          "questao": {
            "codigo": "CHR-98236",
            "tipoFonte": 1,
            "privacidade": 1,
            "dificuldade": "M",
            "instrucao": null,
            "textoBase": null,
            "comando": null,
            "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\t\n\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p>O iodeto de hidrogênio é um gás incolor, muito solúvel em água, que pode ser preparado a partir da mistura de hidrogênio com iodo, de acordo com a seguinte equação em equilíbrio:</p><p style=\"text-align:center;\">H<sub>2</sub>(g) + l<sub>2</sub>(g)&nbsp;⇌ 2Hl(g)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;∆H = + 26,46 kJ/mol</p></div>\n\t\t\n\t\t<div  style=\"padding-bottom: 12px;\" class=\"ng-scope\"></div>\t\t\t\t\t\t\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p>A adição, de uma certa quantidade de iodo gasoso no sistema provocará:&nbsp;</p></div>\n\t\t\n\t\t<div class=\"coluna-sm-12 adaptive-margin-bottom\">\n\t\t\t<div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >a)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>deslocamento do equilíbrio para a esquerda.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >b)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>aumento da temperatura.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >c)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>redução da quantidade de HI.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >d)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>diminuição do valor de ∆H.</p></span>\n\t\t\t</div><div class=\"linha-alternativa ng-scope\"  >\n\t\t\t\t<span class=\"media-esq ng-binding\" >e)</span>\n\t\t\t\t<span class=\"media-corpo ng-binding\" ><p>redução de gás hidrogênio.</p></span>\n\t\t\t</div>\n\t\t</div>\t\n\t</div>",
            "provaAprovada": false,
            "tipoQuestao": "Múltipla Escolha - Resposta Única",
            "dataCriacao": "2024-10-06T23:14:50.692+00:00",
            "ultimaAplicacao": null,
            "fonte": null,
            "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>   \n\t\t\t\t<p>\n\t\t\t\t\t<span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t\n\t\t\t      \t</span><span  class=\"ng-scope\">\n\t\t\t    \t\t<span   class=\"ng-binding ng-scope\">Item: e)</span>\n\t\t\t      \t</span> \n\t\t\t      <span style=\"margin-left:10px;\"  class=\"ng-binding\"></span>\n\t\t\t    </p> \t\t\t\t\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
            "referencia": null,
            "listaTag": [],
            "listaCategoria": [],
            "listaCursos": [],
            "categoriasEmTexto": null,
            "tagsEmTexto": null,
            "cursoEmTexto": null,
            "instituicao": null,
            "status": {
              "codigo": 16,
              "cor": "#ff9801",
              "descricao": "Em moderação",
              "nome": "EM_MODERACAO",
              "tipo": "Q"
            },
            "dataModeracao": "2024-10-06T23:14:50.662+00:00",
            "categoriaSup": null,
            "geradaPorIA": false,
            "usuario": null
          },
          "valor": 1,
          "ordem": 4,
          "ordemPersonalizada": null,
          "origem": "I",
          "tipoLinha": null,
          "linhasBranco": 0,
          "mostrarReferencia": false,
          "infoReferencia": null,
          "numeroLinhas": null,
          "quebraPagina": true
        },
        {
          "codigo": 898453,
          "provaModelo": null,
          "questao": {
            "codigo": "CHR-98239",
            "tipoFonte": 1,
            "privacidade": 1,
            "dificuldade": "M",
            "instrucao": null,
            "textoBase": null,
            "comando": null,
            "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\n\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Um técnico de laboratório químico precisa preparar algumas soluções aquosas, que são obtidas a partir das pastilhas da substância precursora no estado sólido. A solubilização desta substância consiste em um processo endotérmico. Ele está atrasado e precisa otimizar o tempo ao máximo, a fim de que essas soluções fiquem prontas.&nbsp;</p></div>\n\t\t\n\t\t<div  style=\"padding-bottom: 12px;\" class=\"ng-scope\"></div>\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Desse modo, indique soluções duas soluções que o técnico deve aplicar para tornar o processo de dissolução das pastilhas mais rápido.&nbsp;</p></div>\n\t</div>",
            "provaAprovada": false,
            "tipoQuestao": "Aberta - Resposta Única",
            "dataCriacao": "2024-10-06T23:20:12.799+00:00",
            "ultimaAplicacao": null,
            "fonte": null,
            "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>\n\t\t\t\t<p  class=\"ng-binding\"><p style=\"text-align:justify;\">Aumentar a superfície de contato.</p></p>\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
            "referencia": null,
            "listaTag": [],
            "listaCategoria": [],
            "listaCursos": [],
            "categoriasEmTexto": null,
            "tagsEmTexto": null,
            "cursoEmTexto": null,
            "instituicao": null,
            "status": {
              "codigo": 16,
              "cor": "#ff9801",
              "descricao": "Em moderação",
              "nome": "EM_MODERACAO",
              "tipo": "Q"
            },
            "dataModeracao": "2024-10-06T23:20:12.770+00:00",
            "categoriaSup": null,
            "geradaPorIA": false,
            "usuario": null
          },
          "valor": 1,
          "ordem": 5,
          "ordemPersonalizada": null,
          "origem": "I",
          "tipoLinha": {
            "codigo": 5,
            "nome": "Linhas de Resposta Sem Título Resposta"
          },
          "linhasBranco": 1,
          "mostrarReferencia": false,
          "infoReferencia": null,
          "numeroLinhas": 4,
          "quebraPagina": false
        },
        {
          "codigo": 898454,
          "provaModelo": null,
          "questao": {
            "codigo": "CHR-98240",
            "tipoFonte": 1,
            "privacidade": 1,
            "dificuldade": "M",
            "instrucao": null,
            "textoBase": null,
            "comando": null,
            "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\n\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">A equação iônica balanceada representa a reação do ácido bromídrico com o ácido brômico em meio aquoso.</p><p style=\"text-align:center;\">1 BrO<sub>3</sub><sup>– </sup><sub>(aq)&nbsp;</sub>+&nbsp; 5 Br<sup>–&nbsp;</sup><sub>(aq)</sub>+ 6 H<sup>+</sup><sub>(aq)</sub> → 3 Br<sub>2(g)</sub> + 3 H<sub>2</sub>O<sub>(l)</sub></p><p style=\"text-align:justify;\">Em um estudo cinético dessa reação, em temperatura controlada, mediu-se a velocidade de consumo de cada reagente em diferentes concentrações. A tabela apresenta os resultados obtidos.</p><figure class=\"image image-style-align-center\"><img style=\"aspect-ratio:420/132;\" src=\"data:image/png;base64,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\" alt=\"Tabela\n\nDescrição gerada automaticamente\" width=\"420\" height=\"132\"></figure></div>\n\t\t\n\t\t<div  style=\"padding-bottom: 12px;\" class=\"ng-scope\"></div>\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Determine a ordem da reação com relação ao&nbsp;BrO<sub>3</sub><sup>– &nbsp;</sup>na reação.</p></div>\n\t</div>",
            "provaAprovada": false,
            "tipoQuestao": "Aberta - Resposta Única",
            "dataCriacao": "2024-10-06T23:22:59.406+00:00",
            "ultimaAplicacao": null,
            "fonte": null,
            "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>\n\t\t\t\t<p  class=\"ng-binding\"><p>Reação de primeira ordem</p></p>\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
            "referencia": null,
            "listaTag": [],
            "listaCategoria": [],
            "listaCursos": [],
            "categoriasEmTexto": null,
            "tagsEmTexto": null,
            "cursoEmTexto": null,
            "instituicao": null,
            "status": {
              "codigo": 16,
              "cor": "#ff9801",
              "descricao": "Em moderação",
              "nome": "EM_MODERACAO",
              "tipo": "Q"
            },
            "dataModeracao": "2024-10-06T23:22:59.376+00:00",
            "categoriaSup": null,
            "geradaPorIA": false,
            "usuario": null
          },
          "valor": 1,
          "ordem": 6,
          "ordemPersonalizada": null,
          "origem": "I",
          "tipoLinha": {
            "codigo": 4,
            "nome": "Quadro"
          },
          "linhasBranco": 0,
          "mostrarReferencia": false,
          "infoReferencia": null,
          "numeroLinhas": 9,
          "quebraPagina": false
        },
        {
          "codigo": 898455,
          "provaModelo": null,
          "questao": {
            "codigo": "CHR-98241",
            "tipoFonte": 1,
            "privacidade": 1,
            "dificuldade": "M",
            "instrucao": null,
            "textoBase": null,
            "comando": null,
            "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\n\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Em água, o ácido carbônico, H<sub>2</sub>CO<sub>3</sub>, encontra-se ionizado conforme indicação simplificada nas equações a seguir:</p><p style=\"text-align:justify;\">I. H<sub>2</sub>CO<sub>3(aq) </sub>⇌ HCO<sub>3</sub><sup> –&nbsp;</sup><sub>(aq)&nbsp;</sub>+ H<sup>+</sup><sub>(aq)&nbsp;</sub>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K<sub>1</sub> = 2,5 × 10<sup> –4</sup>&nbsp;</p><p style=\"text-align:justify;\">II. HCO<sub>3</sub><sup> –&nbsp;</sup><sub>(aq)</sub>⇌ CO<sub>3</sub><sup> –2</sup><sub>(aq)&nbsp;</sub>+ H<sup>+</sup><sub>(aq)</sub>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K<sub>2</sub> = 5,6 × 10<sup>-11</sup>&nbsp;</p><p style=\"text-align:justify;\">III H<sub>2</sub>CO<sub>3(aq) </sub>⇌&nbsp;CO<sub>3</sub><sup> –2&nbsp;</sup><sub>(aq)&nbsp;</sub>+ 2H<sup>+</sup><sub>(aq)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</sub>K<sub>3</sub> = ?</p></div>\n\t\t\n\t\t<div  style=\"padding-bottom: 12px;\" class=\"ng-scope\"></div>\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p>Determine o valor da constante K<sub>3</sub> na da reação de ionização do ácido carbônico.</p></div>\n\t</div>",
            "provaAprovada": false,
            "tipoQuestao": "Aberta - Resposta Única",
            "dataCriacao": "2024-10-06T23:25:38.603+00:00",
            "ultimaAplicacao": null,
            "fonte": null,
            "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>\n\t\t\t\t<p  class=\"ng-binding\"><p>K = 1,4 x 10<sup>– 14</sup></p></p>\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
            "referencia": null,
            "listaTag": [],
            "listaCategoria": [],
            "listaCursos": [],
            "categoriasEmTexto": null,
            "tagsEmTexto": null,
            "cursoEmTexto": null,
            "instituicao": null,
            "status": {
              "codigo": 16,
              "cor": "#ff9801",
              "descricao": "Em moderação",
              "nome": "EM_MODERACAO",
              "tipo": "Q"
            },
            "dataModeracao": "2024-10-06T23:25:38.576+00:00",
            "categoriaSup": null,
            "geradaPorIA": false,
            "usuario": null
          },
          "valor": 1,
          "ordem": 7,
          "ordemPersonalizada": null,
          "origem": "I",
          "tipoLinha": {
            "codigo": 4,
            "nome": "Quadro"
          },
          "linhasBranco": 0,
          "mostrarReferencia": false,
          "infoReferencia": null,
          "numeroLinhas": 8,
          "quebraPagina": false
        },
        {
          "codigo": 898456,
          "provaModelo": null,
          "questao": {
            "codigo": "CHR-98244",
            "tipoFonte": 1,
            "privacidade": 1,
            "dificuldade": "M",
            "instrucao": null,
            "textoBase": null,
            "comando": null,
            "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\n\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Dois fatores que podem alterar o pH sanguíneo são: a intensidade da respiração (quanto maior a intensidade, menor o teor de CO<sub>2</sub> no sangue) e o teor de bicarbonato na urina (quanto maior o teor de bicarbonato na urina, maior a diminuição de sua concentração no sangue).</p><p style=\"text-align:center;\">CO<sub>2(g)</sub> + H<sub>2</sub>O<sub>(ℓ)</sub>&nbsp;⇌ H<sup>+</sup><sub>(aq)</sub> + HCO<sub>3</sub><sup>–</sup><sub> (aq)</sub></p></div>\n\t\t\n\t\t<div  style=\"padding-bottom: 12px;\" class=\"ng-scope\"></div>\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Quais os efeitos do aumento da intensidade da respiração sobre os valores do pH sanguíneo? Justifique sua resposta.</p></div>\n\t</div>",
            "provaAprovada": false,
            "tipoQuestao": "Aberta - Resposta Única",
            "dataCriacao": "2024-10-06T23:28:02.406+00:00",
            "ultimaAplicacao": null,
            "fonte": null,
            "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>\n\t\t\t\t<p  class=\"ng-binding\"><p>Aumento do pH sanguíneo.</p></p>\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
            "referencia": null,
            "listaTag": [],
            "listaCategoria": [],
            "listaCursos": [],
            "categoriasEmTexto": null,
            "tagsEmTexto": null,
            "cursoEmTexto": null,
            "instituicao": null,
            "status": {
              "codigo": 16,
              "cor": "#ff9801",
              "descricao": "Em moderação",
              "nome": "EM_MODERACAO",
              "tipo": "Q"
            },
            "dataModeracao": "2024-10-06T23:28:02.369+00:00",
            "categoriaSup": null,
            "geradaPorIA": false,
            "usuario": null
          },
          "valor": 1,
          "ordem": 8,
          "ordemPersonalizada": null,
          "origem": "I",
          "tipoLinha": {
            "codigo": 5,
            "nome": "Linhas de Resposta Sem Título Resposta"
          },
          "linhasBranco": 1,
          "mostrarReferencia": false,
          "infoReferencia": null,
          "numeroLinhas": 4,
          "quebraPagina": false
        },
        {
          "codigo": 898457,
          "provaModelo": null,
          "questao": {
            "codigo": "CHR-98246",
            "tipoFonte": 1,
            "privacidade": 1,
            "dificuldade": "M",
            "instrucao": null,
            "textoBase": null,
            "comando": null,
            "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\n\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Considere o equilíbrio entre os íons cromato (CrO<sub>4</sub><sup>2-</sup>) e dicromato (Cr<sub>2</sub>O<sub>7</sub><sup>2-</sup>) em solução aquosa, descrito a seguir.</p><p style=\"text-align:center;\">Cr<sub>2</sub>O<sub>7 </sub><sup>2–</sup><sub>(aq)&nbsp;</sub>+ H<sub>2</sub>O<sub>(ℓ)&nbsp;</sub>⇌ 2 H<sup>+</sup><sub>(aq) </sub>+ 2 CrO<sub>4&nbsp;</sub><sup>2–</sup><sub>(aq)</sub></p></div>\n\t\t\n\t\t<div  style=\"padding-bottom: 12px;\" class=\"ng-scope\"></div>\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p>Escreva a equação da constante de equilíbrio iônica entre os íons cromato e dicromato.</p></div>\n\t</div>",
            "provaAprovada": false,
            "tipoQuestao": "Aberta - Resposta Única",
            "dataCriacao": "2024-10-06T23:34:14.808+00:00",
            "ultimaAplicacao": null,
            "fonte": null,
            "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>\n\t\t\t\t<p  class=\"ng-binding\"><p>Equacionamento padrão do equilíbrio.</p></p>\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
            "referencia": null,
            "listaTag": [],
            "listaCategoria": [],
            "listaCursos": [],
            "categoriasEmTexto": null,
            "tagsEmTexto": null,
            "cursoEmTexto": null,
            "instituicao": null,
            "status": {
              "codigo": 16,
              "cor": "#ff9801",
              "descricao": "Em moderação",
              "nome": "EM_MODERACAO",
              "tipo": "Q"
            },
            "dataModeracao": "2024-10-06T23:34:14.779+00:00",
            "categoriaSup": null,
            "geradaPorIA": false,
            "usuario": null
          },
          "valor": 1,
          "ordem": 9,
          "ordemPersonalizada": null,
          "origem": "I",
          "tipoLinha": null,
          "linhasBranco": 0,
          "mostrarReferencia": false,
          "infoReferencia": null,
          "numeroLinhas": null,
          "quebraPagina": true
        },
        {
          "codigo": 898458,
          "provaModelo": null,
          "questao": {
            "codigo": "CHR-98247",
            "tipoFonte": 1,
            "privacidade": 1,
            "dificuldade": "M",
            "instrucao": null,
            "textoBase": null,
            "comando": null,
            "visualizaQuestao": "<div class=\"adaptive-block-avalicao-visualize\">\n\t\t\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">O metanol pode ser obtido industrialmente pela reação entre o monóxido de carbono e o hidrogênio conforme a equação adiante:</p><p style=\"text-align:center;\">CO<sub>(g)</sub> + 2 H<sub>2(g)</sub>&nbsp;⇌ CH<sub>3</sub>OH<sub>(g)</sub></p></div>\n\t\t\n\t\t<div  style=\"padding-bottom: 12px;\" class=\"ng-scope\"></div>\n\t\t\n\t\t<div   class=\"ng-binding ng-scope\"><p style=\"text-align:justify;\">Há uma certa temperatura, em um recipiente de 2L. Após um certo tempo, o equilíbrio é atingido com 3 mols de monóxido de carbono, 2 mols de hidrogênio e 1 mol de metanol. Assim, determine o valor da constante de equilíbrio da reação.&nbsp;</p></div>\n\t</div>",
            "provaAprovada": false,
            "tipoQuestao": "Aberta - Resposta Única",
            "dataCriacao": "2024-10-06T23:37:37.629+00:00",
            "ultimaAplicacao": null,
            "fonte": null,
            "visualizaResposta": "<br>\n\n\t<div style=\"background: #e0dede; border: 0px; padding: 1px 1px;\">\n\t\t<span style=\"font-size: 12px\"> <strong>RESPOSTA</strong>\n\t\t</span>\n\t</div>\n\n\t<div class=\"coluna-sm-12\">\n\t\t<div>\n\t\t\t<br>\n\t\t\t<div>\n\t\t\t\t<p  class=\"ng-binding\"><p>K = 0,333</p></p>\n\t\t\t</div>\n\t\t\t<br>\n\t\t</div>\n\t</div>",
            "referencia": null,
            "listaTag": [],
            "listaCategoria": [],
            "listaCursos": [],
            "categoriasEmTexto": null,
            "tagsEmTexto": null,
            "cursoEmTexto": null,
            "instituicao": null,
            "status": {
              "codigo": 16,
              "cor": "#ff9801",
              "descricao": "Em moderação",
              "nome": "EM_MODERACAO",
              "tipo": "Q"
            },
            "dataModeracao": "2024-10-06T23:37:37.510+00:00",
            "categoriaSup": null,
            "geradaPorIA": false,
            "usuario": null
          },
          "valor": 1,
          "ordem": 10,
          "ordemPersonalizada": null,
          "origem": "I",
          "tipoLinha": null,
          "linhasBranco": 0,
          "mostrarReferencia": false,
          "infoReferencia": null,
          "numeroLinhas": null,
          "quebraPagina": false
        }
      ]
    },
    "path": "/Avaliacao/view/9011",
    "grupo": true
  }

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const pages = document.getElementById('pages-container');
  const paddingsTopBottom = (20 * (96 / 25.4))
  const containerHeight = 297 * (96 / 25.4) - paddingsTopBottom;

  const tempContainer = document.createElement('div');

  const questoesVisualizaQuestao = prova2.modelo.listaProvaQuestao

  tempContainer.innerHTML = [
    ...shuffle(questoesVisualizaQuestao),
    ...shuffle(questoesVisualizaQuestao),
    ...shuffle(questoesVisualizaQuestao),
    
    
  ].reduce((acc, provaQuestao, index) => {

    const tipoLinhaResposta = getTipoLinhaResposta(provaQuestao)

    acc += `
      <div>
        <div class='questao-completa'>
          <div class='cabecalho-questao dontend' style="background:#A9A9A9;border:0px;padding:1px 1px;">
            <span style="font-size:12px"><strong>QUESTÃO ${index + 1}</strong> ( valor: XX ponto(s) )</span>
          </div>
          ${provaQuestao.questao.visualizaQuestao}  
        </div>
        ${tipoLinhaResposta}
      </div>
    `
    return acc
  }, '');

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

  function createNewOneColumnPage(templateLayout) {
    const newPage = document.createElement('div');
    newPage.className = 'page';
    newPage.innerHTML = templateLayout
    pages.appendChild(newPage);
    return {
      pageHeader: newPage.querySelector('.page-header'),
      pageContent: newPage.querySelector('.content-container'),
      pageColumn: newPage.querySelector('.one-column > .content-column'),
      pageFooter: newPage.querySelector('.page-footer')
    };
  }

  function createNewTwoColumnsPage(templateLayout) {
    const newPage = document.createElement('div');
    newPage.className = 'page';
    newPage.innerHTML = templateLayout;
    pages.appendChild(newPage);
    return {
      pageHeader: newPage.querySelector('.page-header'),
      pageContent: newPage.querySelector('.content-container'),
      pageColumns: newPage.querySelectorAll('.two-column > .content-column'),
      pageFooter: newPage.querySelector('.page-footer')
    }; 
    
    
  }

  function resetBodyContent() {
    pages.innerHTML = ''
  }

  function findRemoveReturn(arr, predicate) {

    const index = arr.findIndex(predicate);
    
    if (index !== -1) {
      return arr.splice(index, 1)[0];
    }
  
    return undefined;
  }

  function splitQuestao(overflowElement) {

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

  function fitOverflow(overflowElement, pageColumn, remainingHeight, breakQuestion = false) {

    overflowElement = breakQuestion ? splitQuestao(overflowElement) : overflowElement;

    for (child of [...overflowElement.children]) {
        
      const lastAppendedChild = pageColumn.lastChild
      
      pageColumn.appendChild(child.cloneNode(true));

      if (pageColumn.scrollHeight > remainingHeight) {

        if(lastAppendedChild.classList.contains('dontend')) {
            overflowElement.insertBefore(lastAppendedChild.cloneNode(true), overflowElement.firstChild) // re-insert the childNode to the overflowElement
            console.log(lastAppendedChild);
            
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

  function folhaDeRosto(cabecalhoPagina, conteudo, rodape) {
    const layout = templateLayoutOneColumn(cabecalhoPagina, rodape)
    
    let { pageColumn } = createNewOneColumnPage(layout);

    const columnContent = document.createElement('div')
    columnContent.innerHTML = conteudo

    pageColumn.appendChild(columnContent)

  }

  function oneColumnLayout() {

    const layout = templateLayoutOneColumn(prova2.modelo.prova.layout.cabecalhoPagina, 
    `<div>${prova2.modelo.prova.layout.rodape}</div><div>${prova2.modelo.prova.layout.paginacao}</div>`)

    let pageObjects = createNewOneColumnPage(layout);

    const remainingHeight = containerHeight - (pageObjects.pageHeader.scrollHeight + pageObjects.pageFooter.scrollHeight)           

    Array.from(tempContainer.children).forEach(element => {

      const { pageColumn } = pageObjects

      pageColumn.appendChild(element.cloneNode(true));
      
      if (pageColumn.scrollHeight > remainingHeight) {

        pageColumn.removeChild(pageColumn.lastChild);

        // Se o elemento que exceder a altura máxima tiver filhos que caibam no espaço disponível,
        // eles serão adicionados; o restante irá para a próxima coluna ou página
        let overflowElement = fitOverflow(element.cloneNode(true), pageColumn, remainingHeight, true)

        
        pageObjects = createNewOneColumnPage(layout)
        pageObjects.pageColumn.appendChild(overflowElement);
      }
    });
  }

  function twoColumnLayout() {

    const layout = templateLayoutTwoColumn(prova2.modelo.prova.layout.cabecalhoPagina, 
    `<div>${prova2.modelo.prova.layout.rodape}</div><div>${prova2.modelo.prova.layout.paginacao}</div>`)

    let pageObjects = createNewTwoColumnsPage(layout);

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
        let overflowElement = fitOverflow(element.cloneNode(true), currentColumn, remainingHeight, false)

        if (currentColumnIndex === 0) {
          currentColumnIndex = 1;
        } else {
          pageObjects = createNewTwoColumnsPage(layout);
          currentColumnIndex = 0;
        }

        pageObjects.pageColumns[currentColumnIndex].appendChild(overflowElement);
      }
    });

    setPagination()
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

  function oneColumnPage() {
    return waitForImages(tempContainer)
      .then(() => {
        resetBodyContent()
        folhaDeRosto(prova2.modelo.prova.layout.cabecalho,
                     prova2.modelo.prova.layout.folhaRosto,
                    `<div>${prova2.modelo.prova.layout.rodape}</div><div>${prova2.modelo.prova.layout.paginacao}</div>`)
        oneColumnLayout()
      })
      .then(() => {
        setPagination()
      })
  }

  function twoColumnPage() {
    return waitForImages(tempContainer)
      .then(() => {
        resetBodyContent()
        folhaDeRosto(prova2.modelo.prova.layout.cabecalho,
                     prova2.modelo.prova.layout.folhaRosto,
                    `<div>${prova2.modelo.prova.layout.rodape}</div><div>${prova2.modelo.prova.layout.paginacao}</div>`)
        twoColumnLayout()
      })
  }