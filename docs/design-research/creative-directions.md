# Três direções de arte para o GFC

Data: 2026-10-26. Os mockups são páginas HTML reais, renderizadas em navegador (não são imagens geradas por IA): `mockups/direcao-*.html`, com capturas `a-*`, `b-*` e `c-*` (hero, trabalho, contato, página inteira, em 1440 e 390 px) e a prancha `mockups/comparacao-tres-direcoes.png`.

**O que os mockups usam:** o monograma aprovado em vetor (`docs/visual-audit/monograma/gfc-mark.svg`), capturas reais de JAC, Maximiza e E-Sports, e textos já verificados (482 testes, 31 controllers, 26 migrações, 353 testes unitários, 239 testes, 3 falhas P0). As fontes dos mockups vêm do Google Fonts apenas para a renderização; na implementação seriam hospedadas no site, como já são Inter e Geist Mono.

**O que os mockups não são:** não há fotografia, vídeo nem movimento (são quadros estáticos); o movimento está descrito abaixo e não foi demonstrado.

**Limitação de design importante:** os sites de luxo estudados vivem de fotografia e vídeo de produto. O GFC não tem esse material. Cada direção resolve essa lacuna de um jeito: A usa vazio e tipografia; B usa a captura real como "slab" técnico; C usa a própria marca como forma.

## Direção A: Quiet Luxury

**Conceito.** Silêncio e precisão. Um nome em serifa leve, centralizado, com muito ar; as capturas dos sistemas entram como grandes "momentos" de imagem, uma por vez.

- **Cor.** Fundo grafite `#1A1B1F` (neutro, sem azul), marfim `#EBECDC`, sálvia `#C3D5C7` para texto secundário. Acento mínimo (ciano `#54BAD2` só em um halo no herói). Coral e verde não aparecem.
- **Tipografia.** Cormorant Garamond 300 para títulos, em caixa alta com 0,08 em de espaçamento (como Rolls-Royce e Pagani); Inter 300/400 para texto; rótulos em caixa alta com 0,22 a 0,32 em.
- **Herói.** Logotipo centralizado entre dois grupos de links, filete fino, nome em três linhas, uma frase, um botão em pílula vazada, indicador "Role".
- **Projetos.** Imagem em 16:9 de ponta a ponta com borda de 1 px; legenda abaixo em duas colunas (número romano em itálico + título; descrição + metadados em caixa alta + link sublinhado). Um projeto por tela.
- **Navegação.** Cinco palavras em caixa alta com espaçamento largo; sem sublinhado animado.
- **Movimento (proposto).** Revelação de linhas de título em 700 ms com a curva `cubic-bezier(.16,1,.3,1)`; imagens aparecem com fade de 900 ms; sem paralaxe; sem movimento contínuo.
- **Contato.** Título em serifa, e-mail grande sublinhado, quatro pílulas pequenas.
- **Riscos de acessibilidade.** Texto de 11 px em caixa alta com espaçamento largo precisa de contraste alto (marfim sobre grafite: 14:1) e de tamanho mínimo de 12 px para leitura confortável; serifa fina em 300 exige tamanho grande.
- **Desempenho.** Leve: duas famílias, nenhuma biblioteca nova.
- **Complexidade.** Baixa a média.
- **Pontos fortes:** é a mais refinada tipograficamente; projetos ganham o máximo de espaço. **Fraquezas:** o herói é só texto e parece vazio; é a mais próxima da linguagem de Rolls-Royce, com risco de parecer derivada; mostra pouca "engenharia".

## Direção B: Performance Engineering

**Conceito.** Precisão técnica em movimento: títulos extensos em caixa alta, cortes diagonais que ecoam as pontas inclinadas do monograma e uma faixa de números verificados.

- **Cor.** Preto-azulado `#0A0D10`, painel `#11161B`, marfim e ciano `#54BAD2` como único acento (aplicado ao sobrenome). Sem coral e sem verde.
- **Tipografia.** Barlow Condensed 700 em caixa alta, em tamanho de até 168 px e entrelinha 0,86; Geist Mono para metadados; Inter para texto.
- **Herói.** Nome em quatro linhas coladas na borda esquerda inferior, uma "lâmina" diagonal à direita com a captura do JAC, uma linha ciano alinhada à diagonal, dois botões retangulares chapados (como McLaren).
- **Faixa de números.** Quatro métricas grandes em tabular: 482 testes, 31 controllers e 26 migrações, 3+ anos, 5 sistemas. (O "5 sistemas em produção ou no ar" é um número a **confirmar**.)
- **Projetos.** Painéis horizontais com a imagem recortada em diagonal e uma tabela de especificação (Stack, Testes, Segurança, Status).
- **Navegação.** Caixa alta, 12 px, espaçamento 0,14 em.
- **Movimento (proposto).** A lâmina desliza 24 px em 500 ms; os números contam de 0 ao valor em 800 ms uma única vez; as imagens dos painéis se revelam por máscara diagonal.
- **Contato.** Título gigante em duas linhas e e-mail em monoespaçada.
- **Riscos de acessibilidade.** Títulos longos em caixa alta e condensados são mais difíceis de ler; no mobile, a lâmina diagonal passa por trás do texto (visível na prancha: o texto cobre a captura e perde legibilidade); contagem de números precisa de alternativa estática.
- **Desempenho.** Média: três famílias; sem biblioteca nova.
- **Complexidade.** Média.
- **Pontos fortes:** a mais escaneável para um gerente (números e tabelas em primeiro plano); identidade técnica clara. **Fraquezas:** "grita" mais que as outras; o mobile precisa de redesenho próprio; é a mais próxima do tom de McLaren, com risco de parecer imitação de marca automotiva.

## Direção C: Engineered Elegance

**Conceito.** A marca como escultura e os projetos como pranchas de uma exposição. Serifa leve com itálico, papel marfim na galeria, o monograma em escala monumental no herói, cortado pela borda.

- **Cor.** Tinta `#101B24`, marfim `#EBECDC`, papel `#E7E6D6` na galeria, azul-escuro `#284261` para links sobre papel, coral `#C65046` só no número das pranchas, ciano `#54BAD2` só no botão principal.
- **Tipografia.** Fraunces 300 (com eixo óptico) e itálico para títulos; Inter 300/400/500 para texto; legendas em caixa alta com 0,12 a 0,3 em.
- **Herói.** Nome em serifa grande com "de Carvalho" em itálico sálvia, uma frase, dois botões (primário ciano e vazado); o monograma ocupa o lado direito em escala de ~128 % da altura, cortado pela borda, com um degradê que protege a leitura do texto.
- **Projetos.** Seção em papel marfim com título editorial ("Sistemas construídos com precisão, apresentados como obras de engenharia"); cada projeto é uma "Prancha" numerada: captura grande à esquerda ou direita com sombra suave, legenda à lateral em serifa e metadados em lista. Três números em destaque no fim (482; 31 · 26; 3+ anos).
- **Navegação.** Marca com "GFC" à esquerda; quatro links em caixa alta à direita.
- **Movimento (proposto).** Entrada do herói em 600 ms (texto sobe 16 px e aparece); o monograma se revela uma vez por sessão, por fita, em 1,1 s (como já faz hoje); pranchas aparecem com fade e leve subida; a transição entre fundo escuro e papel é um corte, não uma animação.
- **Contato.** Título "Vamos *conversar*." em serifa, e-mail grande, quatro botões.
- **Riscos de acessibilidade.** O texto do herói fica ao lado de uma forma grande e colorida: o degradê precisa garantir contraste mínimo de 4,5:1 sobre o trecho mais claro da fita (a validar com medição); itálico leve em tamanhos pequenos é menos legível.
- **Riscos de marca.** O monograma aparece **ampliado e cortado**; a proporção e as cores são as mesmas do vetor aprovado, mas o recorte é uma decisão de uso da marca que precisa da sua aprovação.
- **Desempenho.** Média: duas famílias, um SVG de ~3 KB; o degradê e a ampliação são CSS.
- **Complexidade.** Média a alta (seção em papel, pranchas, ajustes de contraste).
- **Pontos fortes:** é a mais original e a que melhor resolve a falta de fotografia; a galeria em papel dá ritmo à rolagem. **Fraquezas:** a escala da marca compete com o nome; o papel marfim introduz uma seção clara que rompe com o resto escuro se não for bem dosada; a serifa leve exige cuidado em telas pequenas.

## Comparação direta

| Aspecto | A, Quiet Luxury | B, Performance | C, Engineered Elegance |
| --- | --- | --- | --- |
| Primeira impressão | Calma, refinada, vazia | Forte, técnica, ruidosa | Escultural, autoral |
| Onde está a "imagem" | Nas capturas, uma por vez | Na lâmina diagonal | Na marca monumental |
| Prova técnica visível | Baixa (metadados discretos) | **Alta** (números e tabelas) | Média (legendas e três números) |
| Risco principal | Parecer Rolls-Royce | Parecer McLaren; mobile | Escala da marca; contraste |
| Reaproveitamento do que existe | Alto | Médio | Médio (marca e fontes já existem) |
