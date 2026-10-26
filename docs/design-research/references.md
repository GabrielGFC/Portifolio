# Referências inspecionadas

Data da inspeção: 2026-10-26. Método: cada página foi aberta em navegador real (Chromium via Playwright, 1440 × 900, 4,5 s depois do carregamento), com captura de tela da primeira dobra e leitura de estilos computados (fonte, tamanho, peso, espaçamento, fundo), fontes carregadas, quantidade de `canvas`, `video` e imagens, e presença de regra `prefers-reduced-motion` nas folhas de estilo do mesmo domínio. As capturas estão em `references/`.

**Limites que valem para toda a tabela**
- É uma **captura estática da primeira dobra**. Comportamento de rolagem, transições e interações **não foram exercitados** (exceto o que apareceu sozinho na carga).
- A detecção de bibliotecas de animação (GSAP, Lenis, Three.js) **não é conclusiva**: nenhuma apareceu no escopo global, mas sites empacotados escondem isso.
- "Regra de movimento reduzido" só considera folhas do mesmo domínio; tratamento feito em JavaScript não é detectado.
- Banners de cookies e de região cobrem parte das capturas (Pagani, Rolls-Royce, McLaren, Aesop).
- **Não acessados nesta fase:** Awwwards, CSS Design Awards, The FWA, Godly, SiteInspire, minimal.gallery, Behance, Cosmos, Hoverstates e Codrops. Nenhuma conclusão deste pacote se apoia neles.
- Revisei visualmente com atenção 7 capturas (Pagani, Rolls-Royce, McLaren, Aesop, Lusion, Rauno, Brittany Chiang). As outras 10 têm só as métricas medidas.
- Sem tela, notas de "relevância" são juízo meu, não medição.

## Marcas de luxo e produto

| Referência | O que observei (medido) | O que observei (visual) | Princípio transferível | O que não copiar | Relevância p/ GFC |
| --- | --- | --- | --- | --- | --- |
| [Pagani](https://www.pagani.com/) | Fonte Istok Web, **peso 100**, 36 px, espaçamento 3,6 px (0,1 em); fundo preto; 2 vídeos; 23 imagens | Primeira dobra é uma fotografia de página inteira, tratada com trama em duotone; quase nenhum texto; "SCROLL DOWN" mínimo | Tipografia **ultrafina com espaçamento largo** sobre preto; texto como legenda da imagem; ritmo lento | Trama de fibra de carbono (proibido pelo briefing), fotografia de produto | Alta (atmosfera); baixa (recursos) |
| [Rolls-Royce](https://www.rolls-roycemotorcars.com/en_GB/home.html) | Fonte própria "Riviera Nights", **peso 300**, 70 px, 2,5 px (0,036 em), caixa alta; 9 vídeos | Cabeçalho centralizado com logotipo, **filete fino** sob o menu, título grande e leve centralizado, botão em pílula | **Quiet luxury**: título claro e largo, centralizado, um único botão, filete como estrutura | Vídeo de fundo, fotografia, a pílula branca grande como cópia | Alta |
| [McLaren](https://cars.mclaren.com/) | "McLaren Sans Display" (extensa), 32 px, peso 400, caixa alta | Preto com mídia imensa, título curto em caixa alta no canto inferior esquerdo, botão **retangular chapado** branco | Título **extenso e em caixa alta** colado na borda; botão retangular; hierarquia seca | Instrumentos de painel, vídeo, o logotipo | Alta |
| [Porsche](https://www.porsche.com/) | "Porsche Next"; sem `h1` na primeira dobra | Não analisada visualmente em detalhe | Uso de fonte própria com variantes estreitas | n/a | Média |
| [Bentley](https://www.bentleymotors.com/) | Fonte própria "Bentley", **peso 300**, 38 px; fundo branco; 71 imagens; **sem regra de movimento reduzido** (na folha do domínio) | Não analisada visualmente em detalhe | Peso leve como padrão do segmento | Densidade de 71 imagens na primeira dobra | Baixa |
| [Aesop](https://www.aesop.com/) | "SuisseIntl" 400, 36 px; fundo **creme `rgb(255,254,242)`**, texto `#333` | Banner de região e de cookies cobrem a página; faixa superior; menu em duas linhas | Fundo **creme quente** em vez de branco e cinza-grafite em vez de preto: calor sem cor | Modal de região, banner promocional | Média (paleta) |
| [Apple](https://www.apple.com/) | SF Pro, 34 px, peso 600, espaçamento −0,374 px; fundo branco | Não analisada visualmente em detalhe | **Espaçamento negativo leve** nos títulos; escala tipográfica fluida | Estética de produto de consumo | Baixa |

## Portfólios e estúdios

| Referência | O que observei (medido) | O que observei (visual) | Princípio transferível | O que não copiar | Relevância p/ GFC |
| --- | --- | --- | --- | --- | --- |
| [Brittany Chiang](https://brittanychiang.com/) | Inter, **700**, 48 px, −1,2 px; fundo azul-marinho `rgb(15,23,42)`; Next.js; regra de movimento reduzido | Coluna fixa à esquerda com navegação por filetes, conteúdo rolando à direita; experiência com datas e etiquetas | **Clareza para recrutadores**: nome, cargo e navegação sempre visíveis | O layout em si (é o modelo "padrão" dos portfólios de desenvolvedores) | Alta (referência de clareza) |
| [Rauno Freiberg](https://rauno.me/) | Fonte própria "X" 500, 32 px; fundo cinza `rgb(237,237,237)`; Next.js | Galeria horizontal, tipografia enorme com recuos, círculo amarelo; régua de escala no topo | **Detalhe de interface como assinatura** (régua, mira, legenda em tamanho mínimo) | O círculo amarelo e a galeria horizontal | Média |
| [Anthony Fu](https://antfu.me/) | Inter **800**, 36 px; fontes DM Mono e Roboto Condensed; 1 `canvas`; regra de movimento reduzido | Não analisada visualmente em detalhe | Mistura de sans e **monoespaçada** para metadados | n/a | Média |
| [Josh W. Comeau](https://www.joshwcomeau.com/) | Wotfard 700, 32 px; 1 `canvas`; regra de movimento reduzido | Não analisada visualmente em detalhe | Microinteração com respeito a movimento reduzido | n/a | Baixa |
| [Lee Robinson](https://leerob.com/) | **Serifa** "Iowan Old Style", 600, 42 px, −0,85 px; fundo marrom-grafite `rgb(27,26,25)`, texto creme `rgb(232,229,223)` | Não analisada visualmente em detalhe | **Serifa + fundo escuro quente** funciona para desenvolvedor | n/a | Média (valida direção C) |
| [Lusion](https://lusion.co/) | Aeonik; 3 `canvas`; sem regra de movimento reduzido | **Tela de carregamento com contador ("095")** antes de qualquer conteúdo | Contra-exemplo: carregamento forçado e contagem escondem o conteúdo | O pré-carregamento, o WebGL | Baixa (referência do que evitar) |
| [Locomotive](https://locomotive.ca/) | Fontes próprias; 2 `canvas`; 1 vídeo; 70 px | Não analisada visualmente em detalhe | Título muito grande, carregado, em agência | n/a | Baixa |
| [Unseen Studio](https://unseen.co/) | "Neue Montreal" e "Saol Display" (serifada); 1 `canvas`; sem regra de movimento reduzido | Não analisada visualmente em detalhe | Par grotesca + serifa de exibição | n/a | Média |
| [Active Theory](https://activetheory.com/) | 1 `canvas`; 2 vídeos; fonte própria; sem `h1`; sem regra de movimento reduzido | Não analisada visualmente em detalhe | Referência de WebGL de alto nível | O conteúdo só existir no `canvas` (sem texto acessível) | Baixa |
| [Bruno Simon](https://bruno-simon.com/) | Amatic SC e Nunito; 1 `canvas`; 44 imagens | Experiência 3D; **não interagi** | Jogo como portfólio: memorável, mas pouco escaneável | Dirigir um carro como navegação | Baixa |

## O que os dados medidos sugerem

1. **Luxo = peso leve e espaçamento largo.** Pagani (100), Rolls-Royce (300) e Bentley (300) usam pesos finos; títulos grandes em caixa alta têm 2,5 a 3,6 px de espaçamento. A família do site (Inter 600/700) é a oposta disso e tem tom mais "produto de tecnologia".
2. **Fundo quase preto ou creme, nunca branco puro nem colorido.** Pagani e McLaren em preto; Aesop em creme `#FFFEF2`; Lee Robinson em marrom-grafite com creme.
3. **Tudo se apoia em fotografia ou vídeo**, e o texto é pouco. O GFC **não tem fotografia**. A substituta honesta é: capturas reais dos sistemas tratadas como "produto fotografado" e a própria marca como forma escultórica.
4. **Botão: pílula (Rolls-Royce) ou retângulo chapado (McLaren).** Atualmente o site usa pílula azul.
5. **Carregamento forçado (Lusion) é anti-padrão** para quem quer ser lido em 30 s.
6. **Acessibilidade:** os sites de luxo e os portfólios técnicos têm regra de movimento reduzido; os estúdios de WebGL, em geral, não (não detectada).
