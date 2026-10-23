# Auditoria do portfólio (Fase P0)

Data: 2026-10-23. Escopo: somente leitura do código, de produção e dos comandos de verificação. Nenhum arquivo do portfólio foi alterado além deste documento.

## 1. Diagnóstico executivo

- O redesenho e as quatro melhorias anteriores **existem** no repositório e em produção: `HEAD` = `origin/main` = `52e6061`, e o bundle de produção contém as rotas `/projetos/` e `trajetoria`.
- A base técnica é sólida (React 18, Vite, HashRouter, SCSS modules, framer-motion, i18n PT/EN tipado). `tsc --noEmit` passa e o build passa.
- Os problemas principais são de **credibilidade e descoberta**, não de estética: estudos de caso curtos demais para mostrar raciocínio de engenharia, nenhuma imagem de compartilhamento, nada indexável por projeto (HashRouter), sem `robots.txt`/`sitemap.xml`, e o lint falha.
- Preservar: identidade Sunfall, linha de credenciais, páginas de projeto, seção ativa, tags de stack, i18n.

## 2. Estado verificado

| Item | Resultado | Evidência |
| --- | --- | --- |
| Git | limpo, sem commits à frente ou atrás de origin/main | `git status`, `rev-list --left-right --count` = `0 0` |
| Produção no ar | HTTP 200 | `Invoke-WebRequest` na home e no PDF do currículo |
| Redesenho em produção | sim | bundle `main.C50RfnfX.js` contém `/projetos/` e `trajetoria` |
| Type-check | passa | `tsc --noEmit`, exit 0 |
| Build local | passa | JS 449 kB (145 kB gzip), CSS 35 kB (7 kB gzip), sourcemap 1,66 MB |
| Lint | **falha: 10 erros, 6 avisos** | `eslint .` |
| Testes unitários | **não existem** | `package.json` sem script de teste |
| `robots.txt`, `sitemap.xml` | **404** em produção | requisições diretas |

Observação: o hash do bundle local (`main.CmyoMXMD.js`) difere do de produção (`main.C50RfnfX.js`). O mais provável é diferença de ambiente de build (CI usa Bun); não foi investigado.

## 3. Achados

Severidade: P0 crítico, P1 alto impacto, P2 refino. Complexidade: B baixa, M média, A alta.

### A-01 · P1 · Estudos de caso rasos · M

- **Evidência:** cada aba tem de 23 a 313 caracteres (JSON `featured.<projeto>.caseStudy.tabs`). Soma por projeto ≈ 700 a 1.100 caracteres. Pasteur: arquitetura com 23 caracteres. Não há decisões e trade-offs, desafios, qualidade/testes, lições aprendidas nem diagramas, itens 6, 7, 9 e 11 do plano P2.
- **Arquivos:** `src/mocks/portuguese.json`, `src/mocks/english.json`, `src/pages/projeto/index.tsx`.
- **Correção:** estender o tipo `CaseStudyTabKey` com decisões, desafios, qualidade e lições para os quatro projetos principais. Conteúdo só a partir de código, documentação e histórico; lacunas viram perguntas para você confirmar.
- **Aceite:** cada um dos quatro projetos mostra raciocínio e contribuição individual, sem afirmação não confirmada.

### A-02 · P1 · Compartilhamento e indexação · M

- **Evidência:** `index.html` não tem `og:image`; `twitter:card` é `summary` sem imagem; título e descrição são fixos e `document.title` muda só no cliente. `HashRouter` (`src/routes/route.tsx:31`) faz com que `/#/projetos/jac` compartilhe sempre os metadados da home e não seja indexado como página própria.
- **Arquivos:** `index.html`, `src/routes/route.tsx`, `src/pages/projeto/index.tsx`.
- **Correção:** (a) adicionar imagem OG e `twitter:image`; (b) para páginas por projeto, avaliar `BrowserRouter` + `404.html` com redirecionamento na GitHub Pages, ou pré-renderização. **Não migrar o roteamento antes de validar a compatibilidade com Pages**, como o plano exige.
- **Aceite:** link de projeto colado em LinkedIn/WhatsApp mostra título e imagem corretos.

### A-03 · P1 · Sem `robots.txt` e `sitemap.xml` · B

- **Evidência:** ambos retornam 404 em produção; `public/` tem só `favicon.svg` e o PDF.
- **Correção:** adicionar os dois em `public/`. O sitemap só lista as URLs que forem realmente indexáveis (depende de A-02).
- **Aceite:** 200 nas duas URLs.

### A-04 · P1 · Lint falhando · B

- **Evidência:** 10 erros: aspas sem escape em `src/pages/cookies.tsx:93-94` e `src/pages/termos.tsx:90`; `any` em `src/types/assets.d.ts:7`; `__dirname` em `vite.config.ts:22,34`; uma regra `ban-types`. 6 avisos de `react-refresh/only-export-components` em `src/motion/motion.tsx` e `src/contexts/LanguageContext.tsx`.
- **Correção:** corrigir os erros (escapar aspas, tipar o módulo, usar `import.meta.dirname`/`fileURLToPath` e ajustar o `globals` do ESLint para o `vite.config.ts`). Os avisos podem ficar para P2.
- **Aceite:** `eslint .` com 0 erros.

### A-05 · P1 · Ativos não usados e imagens pesadas · B

- **Evidência:** `src/assets/projects/` tem 13 arquivos; só 9 são importados por `projectMedia.ts`. Sem uso aparente: `cannasys.png`, `fanstone.png` (606 KB), `farma.png` (590 KB), `Captura de tela 2026-06-03 180917.png` (149 KB). O `Menlo-Regular.woff` (231 KB) em `src/assets/fonts/` não é referenciado em `src/` por nome (confirmar antes de remover). O otimizador comprime o build (−78%), mas o maior PNG ainda sai com 445 kB (`coneleste`). Não há `width`/`height` nas `<img>`.
- **Correção:** confirmar o não-uso e remover (com sua aprovação, pois o plano proíbe apagar conteúdo sem autorização); converter as capturas para WebP/AVIF; definir `width`/`height`.
- **Aceite:** nenhum ativo órfão; sem salto de layout nas imagens.

### A-06 · P1 · Hierarquia de projetos · M

- **Evidência:** a ordem atual do pager é `lion-fanstone, jac, aila, maximiza, esports, fanstone-legacy, coneleste, pasteur, farm-xp`. O plano pede quatro estudos principais (JAC, Aila, James Fanstone, Maximiza) e o restante como arquivo; hoje nove projetos têm página com o mesmo peso.
- **Correção:** manter as nove páginas, mas marcar quatro como principais com a profundidade da A-01 e deixar as demais como "arquivo" com texto curto. Nada é apagado.
- **Aceite:** hierarquia visível na listagem; sem apresentação redundante.

### A-07 · P1 · Dependência sem uso real e fontes · B

- **Evidência:** `styled-components` só é usado em `src/styles/GlobalStyle.tsx` (192 bytes); o resto do projeto usa SCSS modules. `index.html` carrega Inter 300–700 e Cormorant Garamond 400–700 via Google Fonts; `--ff-serif` (Cormorant) está definido em `tokens.scss:97`, mas não foi verificado onde é usado.
- **Correção:** verificar se `GlobalStyle.tsx` ainda faz algo; se não, remover a dependência. Reduzir pesos de fonte carregados ao que é usado.
- **Aceite:** build sem a dependência e sem regressão visual.

### A-08 · P2 · Texto alternativo e semântica · B

- **Evidência:** as imagens de projeto usam `alt={título}` (`projeto/index.tsx:100`, `SelectedWork.tsx:54`), que identifica mas não descreve. O foco visível (`globals.scss:70`) e `prefers-reduced-motion` (`globals.scss:124`) existem.
- **Correção:** alt descritivo do que a captura mostra (precisa da sua confirmação do que cada tela é).

### A-09 · P2 · Páginas legais · B

- **Evidência:** `privacidade`, `termos` e `cookies` existem com `PrivacyConsent`. Os erros de lint da A-04 estão nelas. Conteúdo jurídico não foi revisado.

## 4. Não verificado nesta rodada

Para não marcar como feito o que não foi executado:

- **Lighthouse** (Performance, Acessibilidade, Boas práticas, SEO): não executado.
- **Contraste medido por ferramenta:** não executado. Estimativa manual do texto suave `#a89c8e` sobre `#000809`: ao redor de 7:1, a confirmar.
- **Navegação por teclado, leitor de tela, tamanho de alvo de toque:** não testados.
- **Viewports:** na sessão anterior conferi ausência de overflow horizontal em 320, 768, 1024 e 1440 px (375 px não foi testado). Não foi repetido nesta auditoria.
- **Modo de movimento reduzido:** não testado em navegador.
- **Veracidade do conteúdo dos estudos de caso** contra os repositórios dos projetos: não feita; entra na P2 quando você aprovar.
- **Todos os links externos** (repositórios, demos, referências): não verificados um a um.
- **Atlas:** `portfolios.md` foi consultado nesta sessão (Brittany Chiang, Anthony Fu, Rauno Freiberg), mas a comparação aplicada ainda não virou itens de backlog.

## 5. Ordem de correção proposta

1. **Lote 1 (B, sem risco de conteúdo):** A-04 lint, A-03 robots/sitemap, A-05 ativos e imagens, A-07 dependência/fontes.
2. **Lote 2:** A-02 imagem OG e decisão de roteamento (com teste em Pages antes de qualquer migração), A-06 hierarquia.
3. **Lote 3:** A-01 estudos de caso dos quatro projetos principais, com perguntas de confirmação para você.
4. **Lote 4:** A-08, A-09, Lighthouse, teclado e validação final em `docs/portfolio-validation.md`.

## 5.1 Atualização do Lote 2 (2026-10-23)

- **A-02, imagem OG: feito.** `public/og-image.png` (1200×630, gerada com `sharp`) e meta tags `og:image`, `og:image:alt`, `twitter:image` e `twitter:card=summary_large_image` no `index.html`. Pendente: confirmar o cartão no LinkedIn Post Inspector após o deploy, pois só funciona com a URL pública.
- **A-02, roteamento: sem migração.** A GitHub Pages não faz fallback de SPA; com `BrowserRouter`, abrir `/Portifolio/projetos/jac` direto devolve 404. O caminho seria um `404.html` que redireciona para `index.html` com a rota na query. Isso só pode ser validado no domínio de Pages, que não foi testado, e ainda assim o 404 HTTP prejudica a indexação. Mesmo com `HashRouter`, links `/#/projetos/<id>` não geram metadados por projeto. Opções, por custo: (a) manter como está; (b) `BrowserRouter` + `404.html`; (c) pré-renderizar páginas de projeto no build. Recomendação: manter (a) até a P2 terminar e decidir (c) com base em quanto o compartilhamento por projeto importa.
- **A-06, hierarquia: já atendida na home.** `lux.work.items` tem exatamente os quatro projetos principais (James Fanstone, JAC, Aila, Maximiza) e `lux.work.archive` tem os outros cinco, em um bloco recolhível. O achado original olhou o pager da página de projeto, que percorre os nove. Nenhuma alteração foi necessária.

## 6. Decisões que precisam da sua aprovação

- Remover os ativos órfãos listados na A-05?
- Investigar `BrowserRouter` + `404.html` (A-02) ou manter `HashRouter` e aceitar que projetos não são indexáveis?
- Confirmar os quatro projetos principais: JAC, Aila, James Fanstone e Maximiza.
