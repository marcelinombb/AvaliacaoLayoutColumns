
export interface PreviewQuestao {
    visualizaQuestao: string
}

declare class LayoutProvaBuilder{
  pageHeader(header: string): LayoutProvaBuilder
  pageFooter(footer: string): LayoutProvaBuilder
  fonteTamanho(tamanho: string): LayoutProvaBuilder
  oneColumnLayout(provaModelo: unknown): void
  twoColumnLayout(provaModelo: unknown): void
  previewOneColumn(listaQuestoes: PreviewQuestao[]): void
  previewTwoColumn(listaQuestoes: PreviewQuestao[]): void
}
declare class LayoutProva {
  static builder(elementContainer: Element): LayoutProvaBuilder
}

export default LayoutProva
