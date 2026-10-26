# Avaliação, recomendação e plano

Data: 2026-10-26. Fase 4 do briefing: **parada para aprovação.** Nada do site foi alterado.

## 1. Rubrica (0 a 10)

Notas são juízo meu, com base nas capturas e nas medições listadas em `references.md` e em `portfolio-production-audit.md`; não são medições. As direções foram avaliadas **como mockups estáticos**; movimento, desempenho e acessibilidade reais só se medem depois de implementar.

| Critério | Atual | A | B | C | Justificativa curta |
| --- | --- | --- | --- | --- | --- |
| 1. Originalidade | 5 | 6,5 | 7 | **8,5** | O atual segue o padrão "dois cantos e cartões"; A lembra Rolls-Royce; B lembra McLaren; C usa a marca como forma |
| 2. Sofisticação visual | 6 | 8 | 7 | **8** | A e C têm mais controle de ritmo; B depende de contraste forte |
| 3. Tipografia | 6,5 | **8,5** | 7,5 | 8 | Inter sozinha é correta e neutra; serifa leve (A e C) comunica cuidado |
| 4. Composição | 6,5 | 7 | 7,5 | 8 | C e B têm mais tensão; A é equilibrada, mas estática |
| 5. Consistência com a marca | 8 | 6,5 | 7 | 8 | A sai do azul da marca; B usa só ciano; C mantém paleta e marca |
| 6. Narrativa dos projetos | 7,5 | 7 | 8,5 | 7 | B coloca números e tabelas; C fica entre arte e informação |
| 7. Movimento | 5,5 | 6 | **8** | 7,5 | Atual quase sem movimento relevante; B e C têm conceito claro (proposto, não demonstrado) |
| 8. Usabilidade | 8 | 7,5 | 7 | 7 | O atual é muito direto; A, B e C pedem mais atenção à leitura |
| 9. Acessibilidade | 8,5 | 8 | 6,5 | 7 | Atual mede 0 violações no axe; B tem texto sobre imagem no mobile; C tem contraste a validar |
| 10. Viabilidade de desempenho | 9,5 | 9,5 | 8,5 | 8 | Atual 95 a 100 no Lighthouse; B e C acrescentam fontes e formas |
| 11. Credibilidade profissional | 7,5 | 7 | **8,5** | 7,5 | B mostra mais prova técnica logo de início |
| 12. Execução no mobile | 8 | 8 | 6 | 7 | B é a que mais precisa ser redesenhada para telas pequenas |

## 2. Matriz de decisão com os pesos que você indicou

| Critério (peso) | Atual | A | B | C |
| --- | --- | --- | --- | --- |
| Direção de arte e originalidade (25 %) | 5,0 | 6,5 | 7,0 | 8,5 |
| Tipografia, composição e imagens (20 %) | 6,5 | 8,0 | 7,5 | 8,0 |
| Clareza profissional e estudos de caso (20 %) | 7,5 | 7,0 | 8,5 | 7,0 |
| Interações e movimento (15 %) | 5,5 | 6,0 | 8,0 | 7,5 |
| Mobile e acessibilidade (10 %) | 8,0 | 8,0 | 6,5 | 7,0 |
| Desempenho e viabilidade (10 %) | 9,5 | 9,5 | 8,5 | 8,0 |
| **Total ponderado** | **6,6** | **7,4** | **7,7** | **7,8** |

C e B ficam **empatados dentro da margem de erro** de um julgamento como este (0,1 ponto). C vence por originalidade, que é o critério de maior peso; B vence por clareza profissional e movimento. A é a mais segura e a menos autoral. As três superam o site atual, com a ressalva de que o site atual é o único com medições reais de acessibilidade e desempenho.

## 3. Recomendação

**Base na Direção C (Engineered Elegance), incorporando de A o rigor tipográfico e o vazio, e de B a faixa de números verificados.** Concretamente:

1. Herói da C, mas com o monograma em escala menor que a do mockup (por volta de 70 a 90 % da altura da tela), para não competir com o nome. **Decisão sua:** aprovar o uso do monograma ampliado e cortado pela borda.
2. Projetos em "pranchas" (C), cada uma com uma tabela curta de especificação em mono (B): stack, testes, status.
3. Faixa de números (B) logo após o herói, **somente com valores verificados**; o "5 sistemas" do mockup B precisa de confirmação antes de entrar.
4. Serifa leve nos títulos (A e C). **Decisão sua:** Fraunces, Cormorant Garamond ou outra; ambas têm licença aberta (OFL).
5. Manter o que funciona: marca, paleta, Inter no texto, hospedagem local das fontes, e as correções de acessibilidade já feitas.

**Por que não B como base:** a leitura mobile precisa de um desenho próprio; o tom "esportivo" pode distrair de projetos institucionais. **Por que não A:** é a mais bonita tipograficamente, mas a menos distintiva.

## 4. Pontos que dependem de você

- **[CONFIRMAÇÃO NECESSÁRIA]** Escala e corte do monograma no herói (Direção C).
- **[CONFIRMAÇÃO NECESSÁRIA]** Família serifada a adotar e a licença.
- **[CONFIRMAÇÃO NECESSÁRIA]** Número "5 sistemas em produção ou no ar" e demais números da faixa.
- **[CONFIRMAÇÃO NECESSÁRIA]** Fotografia: não há material do tipo; vale ou não produzir (por exemplo, capturas de qualidade e uma sessão de retratos).
- **[CONFIRMAÇÃO NECESSÁRIA]** Link de produção do James Fanstone em Java e do JAC; links do JAC e do nuclei quebrados (ver `portfolio-production-audit.md`).
- Estudos de caso: capturas melhores de Aila e James Fanstone.

## 5. Especificações preliminares (para aprovação)

**Tokens (esboço).**

| Token | Valor |
| --- | --- |
| Fundo | `#101B24` (tinta) |
| Superfície | `#142330` |
| Texto | `#EBECDC` (marfim) |
| Texto suave | `#A9BBAE` |
| Acento primário | `#54BAD2` (ciano), só em ações |
| Acento de enumeração | `#C65046` (coral), só em números de prancha |
| Papel (galeria) | `#E7E6D6` com texto `#101B24` |
| Raios | 0 (linhas), 10 px (molduras), 999 px (botões) |
| Título | serifa leve, `clamp(46px, 8.2vw, 128px)`, entrelinha 0,96, espaçamento −0,02 em |
| Texto | Inter 300 a 500, 16 a 18 px, entrelinha 1,6 a 1,75 |
| Metadados | Geist Mono 12 px, caixa alta, 0,1 em |
| Container | 1240 px, margens 20 a 60 px |

**Movimento (preliminar).** Curva `cubic-bezier(.16,1,.3,1)`. Durações: micro 220 ms; revelação 600 a 900 ms; monograma 1,1 s (uma vez por sessão). Gatilhos: carga (herói), entrada na tela (pranchas, `once`). Alternativa com movimento reduzido: tudo visível já na primeira pintura e sem deslocamento.

**Orçamento de desempenho (sugerido, a partir da linha de base real).** LCP ≤ 2,5 s no mobile simulado (hoje 2,0 a 2,1 s); CLS ≤ 0,1 (hoje ≤ 0,03); JavaScript ≤ 160 kB gzip (hoje 138 kB); imagens da home ≤ 400 KB no total; fontes ≤ 250 kB; Lighthouse ≥ 90 em todas as categorias (hoje 95 a 100).

**SEO e roteamento.** Sem mudança nesta fase. A recomendação está em `portfolio-production-audit.md` (opção C: pré-geração por rota) e continua dependendo de aprovação.

## 6. Plano de implementação (após aprovação)

| Etapa | Entrega | Ponto de aprovação |
| --- | --- | --- |
| 1 | Tokens, fonte serifada hospedada e herói da C no código real, com captura antes e depois | Você vê o herói implementado |
| 2 | Faixa de números e "pranchas" na seção Trabalho | Números confirmados |
| 3 | Páginas de projeto no mesmo sistema (capítulos, tabela de especificação) | Conteúdo dos estudos de caso |
| 4 | Contato, rodapé e transições entre páginas | |
| 5 | Medição: Lighthouse na URL real, axe, teclado, zoom 200 %, leitor de tela (NVDA) | Resultados |
| 6 | Decisão de roteamento e SEO por projeto | Sua decisão |

Riscos: contraste do texto ao lado da marca (C), escala da marca, peso das fontes e a seção em papel. **Estimativa de esforço:** etapa 1 e 2 são as mais custosas; as demais reaproveitam os componentes. Não dou prazos em horas porque dependem das decisões acima.

## 7. O que esta fase não entregou

- Mockups são **estáticos**; nenhum movimento foi demonstrado.
- Sem fotografia, vídeo ou imagens geradas por IA (não há ferramenta de geração de imagem disponível aqui).
- Não analisei Awwwards, CSSDA, FWA, Godly, SiteInspire, minimal.gallery, Behance, Cosmos, Hoverstates nem Codrops; não houve inspeção de rolagem nos sites de referência.
- O estado atual não foi reauditado: usa as medições de `portfolio-production-audit.md` (2026-10-26) e `portfolio-validation.md`.
- Sem teste com leitor de tela.

## Etapa 1 implementada (herói, faixa de números, Fraunces hospedada)

Medições em build local (Lighthouse 13.5.0, Edge, 26/10/2026):

| Medição | Antes | Etapa 1 inicial | Etapa 1 final |
| --- | --- | --- | --- |
| Desempenho desktop | 100 | 99 | 99 (LCP 0,6 s) |
| Desempenho celular | 95–97 | 85 (LCP 3,4 s) | 93 (FCP 1,8 s, LCP 3,0 s) |
| Acessibilidade / Boas práticas / SEO | 100 | 100 | 100 |
| Fontes Fraunces | n/a | 67 kB + 82 kB | 30 kB + 37 kB |

Correção da queda no celular: Fraunces reduzida com `fontTools` (tamanho óptico fixo em 144, peso 300–500 e itálico 300–400) e `preload` das duas Fraunces e da Inter em `index.html`. Restante da diferença (−2 a −4 pontos) vem do peso da marca vetorial e das fontes novas.

Verificado: `tsc` 0 erros, ESLint 0 erros (6 avisos antigos), axe 0 violações a 1280 e 390 px, inglês no herói e na faixa, animações em movimento reduzido: 0 em execução.
Não verificado: contraste do texto ao lado da marca por ferramenta (axe marca "a revisar" por causa do gradiente), leitor de tela, medição na URL publicada.

## Etapa 2 implementada (galeria em papel na seção Trabalho)

- `SelectedWork.module.scss`: a seção passa a usar papel `#e7e6d6` com tinta `#101b24`; os tokens de cor são redefinidos só dentro da seção (texto suave `#435260`, links e acento `#284261`), de modo que cartões, tags, links e o arquivo herdam o tema claro sem mexer no componente.
- Cada cartão ganha o número da prancha (01 a 04, contador CSS, em Fraunces coral, decorativo) e o título da seção usa Fraunces 300.
- Contrastes calculados: tinta/papel ~14:1, texto suave ~6:1, azul ~8:1. Coral só em corpo grande (30 px).
- Verificado: `tsc` 0, ESLint 0 erros, build ok, sem rolagem horizontal a 1440 e 390 px, axe na seção sem violações (`color-contrast` fica "a revisar" por causa do degradê dos cartões).
- Não feito: tabela de especificação em mono por prancha (stack, testes, status) e contagem animada, pois dependem de números por projeto que ainda não estão todos confirmados.
- Capturas: `docs/design-research/etapa2/trabalho-1440.png` e `trabalho-390.png`.

## Etapa 3 implementada (páginas de projeto)

- `projeto.module.scss`: título em Fraunces 300 em corpo maior, blocos numerados (01 a 05, contador CSS, coral em 30 px, decorativo) e títulos do paginador em serifa. A página continua escura e a estrutura do componente não mudou.
- Verificado: `tsc` 0, ESLint 0 erros, build ok, sem rolagem horizontal a 1440 e 390 px, axe sem violações (`color-contrast` "a revisar" em 25 nós, texto sobre fundo com degradê).
- Capturas: `docs/design-research/etapa3/projeto-1440.png` e `projeto-390.png`.

## Etapa 4 implementada (contato)

- `Closing.module.scss`: título "Vamos conversar." em Fraunces 300 (até 96 px) e e-mail em Geist Mono, como no mockup C. Botões e canais não mudaram. O rodapé foi mantido como está (já usa Inter e mono, sem necessidade de ajuste).
- Verificado: `tsc` 0, ESLint 0 erros, build ok, sem rolagem horizontal a 1440 e 390 px, axe na seção sem violações (`color-contrast` "a revisar" em 10 nós).
- Capturas: `docs/design-research/etapa4/contato-1440.png` e `contato-390.png`.

## Etapa 5: medição final (build local, 26/10/2026)

Lighthouse 13.5.0 (Edge), desempenho / acessibilidade / boas práticas / SEO:

| Página | Celular | Desktop |
| --- | --- | --- |
| Home | 93 / 100 / 100 / 100 (LCP 3,0 s, CLS 0,06, TBT 30 ms) | 100 / 100 / 100 / 100 (LCP 0,6 s) |
| Projeto (James Fanstone) | 95 / 100 / 100 / 100 (LCP 2,7 s, CLS 0) | 100 / 100 / 100 / 100 (LCP 0,6 s) |

- axe completo na home e na página de projeto a 1280, 390 e 320 px: 0 violações; sem rolagem horizontal em nenhuma largura (reflow ok até 320 px, equivalente a 400 % de zoom).
- Teclado na home: ordem lógica (link de pular, marca, navegação, idioma, botões do herói, quatro projetos, arquivo, trajetória, contato, canais, rodapé) e ciclo fechado sem armadilha.
- Movimento reduzido: 0 animações em execução na home.
- Corrigido: a tela "projeto não encontrado" não tinha `h1` (agora tem).
- Pendente, não medido: leitor de tela (NVDA), medição na URL publicada (só existe após o deploy, que depende de autorização), contraste do texto sobre degradês por ferramenta (axe marca "a revisar"; razões calculadas à mão nas etapas 2 a 4).

## Menu móvel (correção antes da migração de roteamento)

- Causa: o cabeçalho com `backdrop-filter` (classe `solid`) vira o bloco de contenção do menu `position: fixed`, então o menu aberto media 80 px de altura (em vez de ~770) e o conteúdo da página aparecia por baixo, sobreposto.
- Correção: com o menu aberto o cabeçalho usa fundo sólido, sem `backdrop-filter` (`SiteHeader.tsx` e `SiteHeader.module.scss`).
- Verificado a 390 e 768 px com a página rolada: menu ocupa de 72 px até o fim da tela (772 e 952 px de altura); Esc fecha. Capturas em `docs/design-research/etapa6/` (`menu-antes.png`, `menu-depois-390.png`, `menu-depois-768.png`).
