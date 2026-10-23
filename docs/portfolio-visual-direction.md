# Portfólio: auditoria visual e estudo de direção criativa

Data: 2026-10-23. Escopo: aparência, tipografia, cor, composição, projetos, movimento e navegação. Conteúdo técnico dos projetos fica fora (vive em `portfolio-case-study-evidence.md`). Nenhum código do site foi alterado.

## 1. Evidência visual capturada

Capturas reais do site em produção, feitas com Playwright, em `docs/visual-audit/before/`:

| Arquivo | O que mostra |
| --- | --- |
| `home-desktop-1440-hero.png`, `home-desktop-1440-full.png` | primeira dobra e página inteira a 1440 px |
| `home-tablet-768-hero.png`, `home-tablet-768-full.png` | 768 px |
| `home-mobile-375-hero.png`, `home-mobile-375-full.png` | 375 px |
| `project-jac-desktop-full.png`, `project-jac-mobile-full.png` | página de projeto (JAC) |
| `project-lion-desktop-full.png` | página de projeto (James Fanstone) |
| `trajetoria-desktop-full.png` | página Trajetória |

**Inspecionado de fato por mim:** hero desktop e mobile, home inteira em desktop, seção de projetos e página do JAC em desktop. **Capturado mas não analisado:** tablet, página do James Fanstone, Trajetória, JAC em mobile. **Não capturado:** estados de hover e foco, menu mobile aberto, 320 px. Nada abaixo sobre esses itens é afirmado.

Medidas: sem overflow horizontal em 1440, 768 e 375 px (`scrollWidth` igual à largura da janela). Altura da home: 7.794 px (desktop), 8.339 px (tablet), 8.623 px (mobile).

## 2. Diagnóstico visual

O que funciona e deve ser preservado: fundo escuro quente com a luz laranja no canto, o nome em escala grande, a linha de credenciais com chips, as páginas de projeto e a Trajetória.

| # | Problema | Evidência | Prioridade |
| --- | --- | --- | --- |
| V-01 | **O banner de cookies cobre o CTA e as credenciais do hero** na primeira visita, em desktop e mobile. O visitante vê a faixa de aviso antes do botão "Ver trabalho selecionado". | `home-desktop-1440-hero.png`, `home-mobile-375-hero.png` | P0 |
| V-02 | **Capturas de projeto sem tratamento.** Telas claras e de tamanhos diferentes (login branco do James Fanstone, tela bege quase vazia do Aila, site claro da Maximiza) caem sobre um fundo quase preto, sem moldura, sem recorte padronizado e sem sombra. Os projetos parecem de quatro autores diferentes. | seção de projetos, `home-desktop-1440-full.png` | P0 |
| V-03 | **A captura do Aila e a do James Fanstone não vendem o trabalho.** Uma é uma tela de formulário vazia, a outra um cadastro. Um trabalho de backend precisa de outra linguagem visual (diagrama, linha do tempo, números), não de screenshot de login. | idem | P1 |
| V-04 | **Tipografia única.** Só Inter, em pesos de 300 a 700. É correta e legível, mas não carrega personalidade; a hierarquia depende só de tamanho. | `index.html`, hero | P1 |
| V-05 | **Ritmo vertical frouxo.** Há faixas grandes de vazio entre "Trabalho" e "Experiência" e entre blocos, sem separadores ou numeração que guiem a leitura. A página tem ≈7.800 px. | `home-desktop-1440-full.png` | P1 |
| V-06 | **Página de projeto é uma lista de rótulos e parágrafos.** Cinco blocos com rótulo laranja à esquerda e texto à direita, sem destaque numérico, diagrama ou variação de formato. A captura aparece cortada pela metade. | `project-jac-desktop-full.png` | P1 |
| V-07 | **Rótulo técnico vazando para a interface.** No JAC, o selo da página mostra "PROJETO PESSOAL / AVANÇADO — OWNER". "OWNER" é jargão interno, não texto de leitor. | `project-jac-desktop-full.png` | P1 |
| V-08 | **Credenciais em três linhas de chips** ocupam altura e disputam atenção com o título e o CTA; os chips de projeto e os estáticos têm peso visual quase igual. | hero desktop | P2 |
| V-09 | **Movimento e estados:** reveals e transições existem, mas não foram inspecionados em hover/foco nesta rodada. | n/a | a verificar |

Contraste do texto suave `#A89C8E` sobre `#000809`: estimado em cerca de 7:1 por cálculo manual; não medido com ferramenta.

## 3. Referências analisadas (Atlas)

Fonte: `faculdade/materias-ui-ux/referencias/portfolios.md`.

- **Brittany Chiang:** coluna fixa com identidade à esquerda e conteúdo rolando à direita; lista de experiência com período em mono; densidade alta com muito respiro. Lição para o seu site: o leitor sempre sabe quem é você e onde está.
- **Anthony Fu:** conteúdo textual como protagonista, navegação mínima, microinterações discretas. Lição: voz própria vale mais que efeito.
- **Rauno Freiberg:** detalhe de interface (cursor, estados, tipografia pequena e precisa) como assinatura. Lição: o refinamento está nos 10% finais, não na animação grande.

Uso: estudar hierarquia, restrição e tipografia; não copiar layout nem marca.

## 4. Três direções

A amostra visual está em `docs/visual-audit/directions.html` e `directions.png` (quatro painéis com o mesmo conteúdo: A, B, C e a combinação recomendada). São estudos de composição, não o site final.

### Direção A, Editorial Engineering

- **Conceito:** revista técnica. Papel quente, tinta preta, um acento vermelho-alaranjado, serifa de display e rótulos em mono.
- **Tipografia:** *Instrument Serif* (títulos, 76 a 96 px, entrelinha 0,95), *Geist* (texto, 16 a 18 px), *Geist Mono* (rótulos, datas, índices, caixa alta, 11 px, espaçamento 0,08em).
- **Cores:** fundo `#F2EDE3`, tinta `#15130F`, texto suave `#5E574B`, linha `#CFC7B6`, acento `#C8401C`.
- **Superfícies e grid:** fundo liso, filetes finos em vez de cartões, grid de 12 colunas com margem larga.
- **Cartão de projeto:** número + ano em mono, título serifado, imagem emoldurada por filete.
- **Navegação:** texto mono em caixa alta, sublinhado no ativo.
- **Movimento:** reveals de texto por linha, sem parallax.
- **Acessibilidade:** contraste do acento sobre o papel ≈ 4,6:1 (aceitável para texto grande; para texto pequeno usar a tinta).
- **Pontos fortes:** identidade autoral, destaca texto e raciocínio. **Trade-offs:** tema claro rompe com o atual; as capturas claras dos projetos perdem o contraste que hoje as destaca.

### Direção B, Contemporary Technical

- **Conceito:** interface de engenharia. Fundo grafite com grade sutil, tipografia sem serifa, acento lima, rótulos em estilo terminal.
- **Tipografia:** *Geist* 500 (títulos, 58 a 72 px, tracking −0,035em), *Geist Mono* (metadados e navegação).
- **Cores:** fundo `#0B0D10`, superfície `#12161B`, linha `#232A33`, texto `#E7ECF2`, suave `#8A96A3`, acento `#B6F24A`.
- **Superfícies:** cartões com borda de 1 px e raio de 8 a 12 px; grade de 40 px como textura.
- **Cartão de projeto:** moldura tipo painel, metadados em mono, chips de stack quadrados.
- **Navegação:** rótulos `~/trabalho`, cursor piscando no título.
- **Movimento:** digitação e destaque de foco; risco de parecer "tema hacker".
- **Acessibilidade:** o lima sobre grafite passa folgado (>12:1); a grade precisa ficar abaixo de 4% de opacidade.
- **Pontos fortes:** sinaliza engenharia de imediato. **Trade-offs:** é a direção mais comum no mercado; perde calor humano e pode ficar com cara de painel de controle.

### Direção C, Premium Minimal

- **Conceito:** evolução do que existe. Vazio generoso, imagem como protagonista, acento laranja único.
- **Tipografia:** *Inter Tight* 300/500 (títulos com tracking −0,045em), Inter no texto.
- **Cores:** as atuais: `#000809`, `#FFECD6`, `#A89C8E`, `#FF9537`.
- **Superfícies:** fundo liso com luz laranja; imagens grandes com raio de 22 px.
- **Cartão de projeto:** imagem enorme, título e meta embaixo.
- **Navegação:** texto simples.
- **Movimento:** o atual (reveal e fade).
- **Acessibilidade:** já validada visualmente; contraste alto.
- **Pontos fortes:** menor risco, nenhuma ruptura. **Trade-offs:** é o que já temos com polimento; não resolve a falta de personalidade tipográfica (V-04).

## 5. Recomendação: A + B, "Editorial Technical"

Alinhada à sua preferência inicial. É a quarta amostra do painel.

- **Base escura mantida**, para preservar a identidade Sunfall e a luz laranja que já funcionam. O papel claro da Direção A entra só em **seções de contraste** (por exemplo, o bloco de estudos de caso e a Trajetória), com `#EFE9DD` e tinta `#14120F`.
- **Tipografia:** *Instrument Serif* nos títulos e no nome (traz a nota editorial que falta), *Geist* no texto, *Geist Mono* em metadados (período, índice `01 / 04`, stack, categoria). A mistura serifa + mono é o que comunica "engenharia com autoria".
- **Cores:** `#0E0F11` fundo, `#EFE9DD` texto, `#9A9488` suave, `#24262A` linhas, `#FF9537` acento (o mesmo laranja atual, para continuidade).
- **Projetos:** cartões sem caixa, separados por filete; índice em mono; todas as capturas dentro de **uma moldura padrão** (raio 10 px, borda de 1 px, fundo neutro, proporção fixa 16:10, recorte consistente). Para James Fanstone e Aila, substituir o login por **diagrama de arquitetura ou linha do tempo de migração** a partir de evidências já confirmadas; nada será inventado.
- **Hero:** nome em serifa grande, uma linha de posicionamento, credenciais em **uma única linha** de texto mono (não três linhas de chips), um CTA dominante.
- **Banner de cookies:** passa a ser uma barra discreta no rodapé, sem cobrir o conteúdo do hero (V-01).
- **Páginas de projeto:** cabeçalho editorial, números de destaque em bloco, captura emoldurada, seções com variação de formato (lista, tabela de decisões, diagrama) em vez de cinco parágrafos iguais.
- **Movimento:** manter o conjunto atual (reveal e transição de página), com `prefers-reduced-motion` respeitado; acrescentar apenas estados de hover e foco refinados nos cartões e na navegação.

Riscos: duas famílias novas aumentam o peso de fontes (estimativa de 60 a 90 kB a mais, a medir); serifa em tema escuro exige peso e tamanho cuidadosos em mobile; a mudança de título altera o CLS se a fonte atrasar (mitigar com `font-display: swap` e métricas de fallback).

## 6. Roteiro de implementação (após sua aprovação)

1. **Tokens e fontes:** novas famílias, escala tipográfica, cores, espaçamento e raios em `src/styles/tokens.scss`. Sem mudar componentes.
2. **Hero e navegação:** nome em serifa, credenciais em uma linha, CTA e banner de cookies reposicionado.
3. **Projetos:** moldura única das capturas, cartões editoriais, índice em mono.
4. **Página de projeto:** novo cabeçalho, blocos de destaque e variação de formato.
5. **Experiência, Sobre, Contato e rodapé:** ritmo, filetes e metadados em mono.
6. **Verificação:** capturas antes e depois em 320, 375, 768, 1024 e 1440 px; foco por teclado; contraste medido; lint, type-check e build.

## 7. Decisões que preciso de você

1. Aprova a direção **A + B** (ou prefere A, B ou C puras)?
2. Aprova trazer *Instrument Serif*, *Geist* e *Geist Mono* (Google Fonts, licença aberta)?
3. Posso substituir as capturas do James Fanstone e do Aila por diagramas/linha do tempo feitos a partir de evidências já confirmadas, e usar capturas reais apenas onde forem representativas?
4. O banner de cookies pode virar uma barra no rodapé?
