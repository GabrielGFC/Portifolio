# Validação do portfólio

Data: 2026-10-23. Estado validado: árvore de trabalho local, **sem commit** (o commit publicado em produção é anterior a estas mudanças). Tudo abaixo foi executado de fato; o que não foi executado está em "Limites e não verificado".

## 1. Verificações de código

| Verificação | Comando | Resultado |
| --- | --- | --- |
| Tipos | `tsc --noEmit` | passou (exit 0) |
| Lint | `eslint .` | 0 erros, 6 avisos (`react-refresh/only-export-components` em `motion.tsx` e `LanguageContext.tsx`, já existentes) |
| Build de produção | `vite build` | passou; JS 429 kB (137 kB gzip), CSS 37 kB (8 kB gzip) |
| Testes unitários do portfólio | n/a | **não existem**; o projeto não tem suíte de testes |

## 2. Lighthouse 13.5.0

Condições: build de produção servido por `vite preview` em `localhost:4175`, Edge headless, categorias Performance, Accessibility, Best Practices e SEO, uma execução por página e modo. "Mobile" usa a simulação padrão do Lighthouse (4G lento, CPU 4× mais lenta); "Desktop" usa o preset desktop. As fontes vêm do Google Fonts pela rede real. O `vite preview` não comprime as respostas como a GitHub Pages, então os tempos de transferência reais podem ser um pouco melhores. Uma única execução por página varia; trate os números como indicativos.

| Página | Modo | Perf. | Acess. | Boas práticas | SEO | FCP | LCP | TBT | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Home | Mobile | 86 | 100 | 100 | 100 | 2,7 s | 3,3 s | 160 ms | 0,016 |
| Home | Desktop | 98 | 100 | 100 | 100 | 0,9 s | 0,9 s | 0 ms | 0,03 |
| Trajetória | Mobile | 91 | 100 | 100 | 100 | 2,8 s | 2,8 s | 0 ms | 0 |
| Trajetória | Desktop | 98 | 100 | 100 | 100 | 0,9 s | 0,9 s | 0 ms | 0,024 |
| Projeto (JAC) | Mobile | 88 | 100 | 100 | 100 | 2,7 s | 3,0 s | 20 ms | 0 |
| Projeto (JAC) | Desktop | 98 | 100 | 100 | 100 | 0,9 s | 0,9 s | 0 ms | 0 |

Meta do plano (≥ 90 em todas as categorias): atendida em todas as páginas no desktop e em Acessibilidade, Boas práticas e SEO no mobile. **Desempenho no mobile ficou abaixo de 90 na home (86) e no projeto (88)**; a Trajetória passou (91).

### Achados do Lighthouse

| Item | Evidência | Impacto | Sugestão |
| --- | --- | --- | --- |
| CSS bloqueante das fontes | Google Fonts bloqueia a renderização, estimativa de 1.180 ms (988 ms só da folha de fontes) | O LCP da home é o `<h1>` do hero, então a fonte atrasa o elemento principal | Carregar as fontes de forma não bloqueante (`preload` + `media`/`onload`) ou hospedar Inter e Geist Mono no próprio site com `font-display: swap` |
| Imagens dos projetos | "Melhorar a entrega de imagens", economia estimada de 139 KiB | PNGs dos cartões da home são maiores que o necessário | Converter para WebP/AVIF e entregar em tamanho de exibição |
| JavaScript não usado | 49 KiB no bundle principal | Pouco impacto; um único chunk | Dividir as rotas com `React.lazy` se o peso crescer |
| `label-content-name-mismatch` | Link da marca com `aria-label="Início"` e texto visível "GFC"; botão de idioma com `aria-label="Switch to English"` e texto visível "PT / EN" | Não entra na nota de Acessibilidade (100), mas descumpre o critério WCAG 2.5.3 (rótulo no nome) para quem usa comando de voz | Incluir o texto visível no nome acessível (por exemplo, "GFC, início" e "PT / EN, mudar idioma") |

## 3. Verificações no navegador (Playwright)

- **Larguras 320, 375, 768, 1024 e 1440 px:** sem overflow horizontal nas páginas Home, Trajetória e projetos (JAC e James Fanstone); hero, Trabalho, Experiência, Sobre e Contato capturados em todas as cinco larguras. Imagens em `docs/visual-audit/` (`antes/`, `depois/`, `trabalho/`, `secoes/`, `paginas/`, `hero-proposals/`, `monograma/`). Nem toda captura foi inspecionada a olho: as de 768 e 320 px de várias seções só tiveram a medição de overflow.
- **Teclado:** Tab percorre os quatro cartões de projeto, com contorno de 2 px; Enter abre o estudo de caso. O botão "Detalhes" da Experiência abre e fecha com Enter (`aria-expanded` muda). O índice da Trajetória responde ao Enter e marca o capítulo. Links de contato mostram contorno de foco.
- **Movimento reduzido:** com `prefers-reduced-motion` o monograma aparece já desenhado.
- **Animação do monograma:** roda uma vez por sessão (marcador em `sessionStorage`); numa segunda carga da mesma sessão a marca já aparece pronta.
- **Console:** sem erros nas navegações testadas; apenas avisos do ambiente de desenvolvimento.
- **Contraste (cálculo manual, não por ferramenta de página):** marfim sobre ink 14,6:1; texto suave sobre ink 8,6:1; texto suave sobre cartão 7,4:1; ciano sobre ink 7,75:1; creme sobre fundo noturno 10,4:1. O Lighthouse não reportou falha de contraste.
- **Alvos de toque:** botões de contato com 44 px de altura.

## 4. Conteúdo

Os números de testes publicados vêm de `docs/portfolio-case-study-evidence.md` (seção "Medições de testes", 2026-10-23): James Fanstone 482, JAC 353 unitários, Maximiza 239, Aila 112 executados (mais 70 que exigem PostgreSQL).

## 5. Limites e não verificado

- Nenhuma execução em dispositivos físicos nem em Safari/Firefox; só Chromium (Playwright e Edge).
- Leitor de tela, zoom de 200 % e navegação só por voz **não foram testados**. A conformidade com WCAG 2.2 AA **não está comprovada**: a nota 100 do Lighthouse cobre só as verificações automáticas.
- Lighthouse foi executado uma vez por página e modo, contra `localhost`, e não contra a URL publicada na GitHub Pages.
- O cartão de compartilhamento (`og-image.png`) não foi validado nas redes sociais; isso só funciona com a URL pública.
- O favicon não tem versão simplificada para 16 px; não há `favicon.ico` nem manifesto PWA.
- O site publicado ainda é o commit anterior; estas mudanças não foram enviadas, e o primeiro deploy pode revelar diferenças (o `bun.lock` foi alterado com o Bun 1.3.3 local, e o CI fixa o 1.1.34 com `--frozen-lockfile`).
- Roteamento por hash (`#/`): páginas de projeto não têm metadados nem indexação próprios; decisão adiada (ver `portfolio-audit.md`).
- Questões de conteúdo pendentes de você: vínculo do JAC com a UniEVANGÉLICA ("Projeto pessoal"), estado de produção de Aila e do JAC, e o que o fluxo de Fiança da Maximiza faz.

## 6. Recomendação

**Pronto para revisão e commit, com ressalvas; não pronto para ser chamado de "validado".**

- Para publicar com segurança: corrigir o carregamento das fontes (maior ganho de LCP no mobile), ajustar os dois nomes acessíveis e conferir o primeiro deploy.
- Pode esperar: conversão das imagens para WebP/AVIF, divisão do bundle por rota, favicon de 16 px.
- Antes de afirmar conformidade WCAG ou desempenho em produção: testar com leitor de tela e repetir o Lighthouse na URL publicada.
