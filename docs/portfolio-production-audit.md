# Auditoria da versão publicada

Data: 2026-10-26. URL auditada: https://gabrielgfc.github.io/Portifolio/ (commit `67c8773`, igual a `origin/main`). Nada foi alterado no código; este documento e os arquivos de `docs/visual-audit/favicon/` são os únicos artefatos novos. Sem commit.

## Atualização: correções imediatas 1 a 5 aplicadas (2026-10-26, sem commit)

Aplicadas na árvore de trabalho local e verificadas contra o servidor de desenvolvimento. **Ainda não estão na versão publicada.** Os números do restante deste documento descrevem a versão publicada antes das correções.

| # | Correção | Como foi feita | Verificação |
| --- | --- | --- | --- |
| 1 | `lang` acompanha o idioma | `LanguageContext` define `document.documentElement.lang` (`pt-BR` ou `en`); as três páginas legais, que só existem em português, ganharam `lang="pt-BR"` no `<main>` | `pt-BR` ao abrir, `en` após trocar para inglês; `main` das páginas legais com `pt-BR` |
| 2 | Moldura do diagrama focável | Componente `DiagramFrame` mede se a moldura rola; só então recebe `tabIndex=0`, `role="region"` e um `aria-label` próprio ("… diagrama, role na horizontal") | A 375 px: `tabindex=0`, `role=region`; a 1280 px: sem `tabindex` (não cria parada de Tab inútil) |
| 3 | Títulos das páginas legais | `document.title` definido em Privacidade, Termos e Cookies | "Política de Privacidade \| Gabriel Fernandes de Carvalho", "Termos de Uso \| …", "Política de Cookies \| …" |
| 4 | Texto escondido do `h3` | Removido o `sr-only` de dentro do título; "Ver estudo de caso" virou descrição (`aria-describedby`) do link | Título dos cartões é só o nome do projeto; a descrição é lida junto com o link |
| 5 | Favicon simplificado | `public/favicon.svg`, `favicon.ico` (16, 32 e 48 px), `favicon-32.png` e `apple-touch-icon.png` (180 px) substituídos pela versão simplificada; `index.html` ganhou o `<link>` do `.ico` | Os quatro arquivos respondem 200 no servidor local; tags `<link rel=icon>` presentes |

**Achado extra corrigido:** o botão "reabrir banner" da página de Cookies mandava o visitante para `/` (raiz do domínio `github.io`, fora do portfólio). Agora usa `document.baseURI` e volta a `/Portifolio/`. Verificado: o destino foi `…/Portifolio/`.

**Efeito colateral encontrado e corrigido na validação:** a primeira versão do rótulo da moldura repetia o nome da página e disparou `landmark-unique` no axe. O rótulo agora é distinto.

**Verificação geral após as correções**

- `tsc` sem erros; `eslint` 0 erros e 6 avisos (os mesmos de antes); build de produção passa.
- axe-core 4.14.0 (WCAG 2.0 a 2.2 A/AA e boas práticas), 14 combinações (7 rotas × 375 e 1280 px): **sem violações em nenhuma**, incluindo a antiga `scrollable-region-focusable`.
- Não repeti o Lighthouse nem a medição de contraste; não houve mudança visual relevante, exceto o favicon.
- O favicon só foi verificado pelos arquivos e pelas tags; a aparência na aba do navegador não foi vista.
- Leitor de tela continua **não testado**.

## 1. Lighthouse na URL publicada

Lighthouse 13.5.0, Edge headless, uma execução por página e modo. Mobile usa a simulação padrão (4G lento, CPU 4× mais lenta); desktop usa o preset desktop.

| Página | Modo | Perf. | Acess. | Boas práticas | SEO | FCP | LCP | TBT | CLS | Peso |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Home | Mobile | 97 | 100 | 100 | 100 | 2,0 s | 2,0 s | 80 ms | 0,016 | 306 KiB |
| Home | Desktop | 100 | 100 | 100 | 100 | 0,4 s | 0,4 s | 0 ms | 0,015 | 306 KiB |
| Trajetória | Mobile | 97 | 100 | 100 | 100 | 2,1 s | 2,1 s | 10 ms | 0 | 221 KiB |
| Trajetória | Desktop | 100 | 100 | 100 | 100 | 0,4 s | 0,4 s | 0 ms | 0,025 | 221 KiB |
| Projeto (JAC) | Mobile | 95 | 100 | 100 | 100 | 2,1 s | 2,1 s | 0 ms | 0 | 260 KiB |
| Projeto (JAC) | Desktop | 100 | 100 | 100 | 100 | 0,4 s | 0,4 s | 0 ms | 0 | 260 KiB |

**Campo (INP e dados reais de usuários):** não obtive. A API do PageSpeed Insights respondeu 429 (limite sem chave de API) e, com o tráfego esperado de um portfólio, o Chrome UX Report costuma não ter dados para a origem. INP não é mensurável em laboratório; o TBT acima é o substituto. O que falta: consultar a Search Console ou o PageSpeed com uma chave quando houver tráfego.

### Produção contra `localhost`

| Aspecto | `localhost` (3ª rodada) | Produção | Leitura |
| --- | --- | --- | --- |
| Perf. mobile | 95 / 96 / 96 | 97 / 97 / 95 | Equivalente; diferença dentro da variação de uma execução |
| Perf. desktop | 100 | 100 | Igual |
| LCP mobile | 2,3 a 2,5 s | 2,0 a 2,1 s | Produção melhor (o servidor local não comprime) |
| Cache de ativos | sem auditoria | **Auditoria de cache em 0** (TTL de 10 min) | **Específico de produção**: a GitHub Pages envia `Cache-Control: max-age=600` em tudo, inclusive nos arquivos com hash |
| Peso | 215 a 301 KiB | 221 a 306 KiB | Igual |

## 2. Funcionamento: rotas, links, metadados

| Verificação | Resultado |
| --- | --- |
| 15 rotas (home, Trajetória, 3 páginas legais, 9 projetos, 1 inexistente) | Todas renderizam o conteúdo certo; sem erros de console e sem requisições falhas |
| Rota inexistente (`#/projetos/inexistente`) | Mostra "Projeto não encontrado" |
| Caminhos sem hash (`/projetos/jac`, `/trajetoria`, `/privacidade`) | **HTTP 404** (a GitHub Pages não faz fallback de SPA e não há `404.html` próprio) |
| Cabeçalhos da home | Servidor GitHub.com, `Cache-Control: max-age=600` |
| `robots.txt`, `sitemap.xml`, `og-image.png`, favicons, currículo | Todos respondem 200; sitemap lista só a home |
| `<head>` | Título, descrição, canonical, Open Graph e Twitter Card presentes; fontes do Google removidas; imagem de compartilhamento nova |
| Títulos por rota | Home, Trajetória e os 9 projetos têm título próprio; **Privacidade, Termos e Cookies ficam com o título da home** |

**Links externos (16 verificados por requisição HTTP):**

| Link | Status |
| --- | --- |
| Maximiza (workers.dev), E-Sports, James Fanstone legado, Coneleste, Farm XP, GitHub (perfil e 6 repositórios), LinkedIn | 200 (LinkedIn devolve 999 para robôs; **não verificável** por requisição) |
| **JAC: `https://jac-front-end.vercel.app/`** | **404** (o link da página do projeto está morto) |
| **Repositório `GabrielGFC/nuclei`** (arquivo, "Nuclei Security Lab") | **404** (o repositório não aparece entre os públicos; privado, apagado ou renomeado) |
| Alternativa do JAC: `jac-front-end.gabriel-fernandes-f48.workers.dev` | A página responde 200, mas **`/api/csrf` e `/api/public/events` respondem 503**: o proxy da API não está funcionando, então o sistema não opera por esse endereço |

## 3. Acessibilidade

**Verificações automáticas**

- axe-core 4.14.0 (WCAG 2.0, 2.1 e 2.2 A/AA e boas práticas) em Home, Trajetória, JAC, James Fanstone e Privacidade, em 1280 e 375 px: **0 violações em 9 das 10 combinações**. Uma violação grave: `scrollable-region-focusable` na página do James Fanstone a 375 px (moldura do diagrama rola na horizontal e não recebe foco por teclado).
- `color-contrast` ficou como "a revisar" (16 a 89 elementos por página): o axe não calcula contraste sobre gradientes. Meus cálculos manuais (marfim sobre ink 14,6:1, texto suave 7,4 a 8,6:1, ciano 7,75:1) não foram refeitos com ferramenta sobre a página.

**Verificações manuais no navegador (Playwright, não leitor de tela)**

| Verificação | Resultado |
| --- | --- |
| Teclado | 44 paradas de Tab na home, 28 elementos distintos; sem armadilha; ordem coerente (pular conteúdo, marca, menu, idioma, CTAs, cartões, ...) |
| Foco visível | Todas as 44 paradas têm contorno visível |
| Alvos de toque | Nenhum link ou botão com menos de 24 × 24 px |
| Zoom 200 % (640 px) e 400 % (320 px) | Sem rolagem horizontal; botão de menu aparece |
| `prefers-reduced-motion` | Nenhuma animação em execução; monograma visível já na primeira pintura |
| Estrutura | 1 `h1`, `h2` e `h3` em ordem, landmarks `header`/`nav`/`main`/`footer`, link "Pular para o conteúdo" |
| Imagens | 0 sem atributo `alt`; 4 com `alt=""` (capturas dos cartões, decorativas, o cartão tem nome acessível) |
| **Idioma** | `lang="pt-BR"` **continua assim ao trocar para inglês** (leitores de tela leem o texto em inglês com voz em português) |
| Cabeçalho dos cartões | O texto escondido "— Ver estudo de caso" faz parte do `h3`; a lista de títulos fica redundante |

**Leitor de tela: não testado.** O NVDA não está instalado nesta máquina e não consigo operar um leitor de tela por aqui. Não declaro conformidade WCAG. Recomendação: teste manual com NVDA e Firefox, e com VoiceOver no celular, nas rotas Home, um projeto e Contato.

## 4. Favicon (proposta, não aplicada)

Arquivos em `docs/visual-audit/favicon/`: `favicon-simplificado.svg`, `favicon-simplificado-16.png`, `-32.png`, `-48.png`, `favicon-simplificado.ico` (16, 32 e 48 px) e `comparacao-favicon.png` (atual em cima, proposta embaixo, cada tamanho ampliado 8× por vizinho mais próximo).

- **Problema do atual a 16 px:** o gradiente, o triângulo oliva e a faixa escura viram ruído; a fita azul e o verde perdem forma.
- **Proposta:** mesma geometria das três fitas (mesmos caminhos do monograma aprovado), cores chapadas, sem triângulo oliva e sem faixa escura, e a marca ocupando mais do quadrado (margem de 4 em 64 unidades). Os cantos arredondados ficaram em 13/64.
- **Fidelidade:** a marca principal não foi alterada; o favicon é uma simplificação, como o próprio kit v1 recomenda para 16 a 32 px. Cores: azul `#6FB4C8` (mais claro que o do hero, para ler a 16 px), creme `#EBD3B5`, coral `#E5705C`, verde `#3E9A72`.
- **Limite:** vi só a comparação ampliada; não testei na aba do navegador, no modo escuro do sistema nem em outros navegadores.

## 5. SEO e roteamento

| Opção | O que resolve | O que não resolve | Risco de regressão |
| --- | --- | --- | --- |
| **A. Manter `HashRouter`** | Funciona hoje, sem configuração; links antigos (`/#/projetos/...`) seguem válidos | O que vem depois do `#` não chega ao servidor: todo link de projeto mostra, nas redes sociais, o título e a imagem da home; buscadores indexam só a raiz; sitemap só pode listar a home | Nenhum |
| **B. `BrowserRouter` + `404.html` com redirecionamento** | URLs limpas (`/projetos/jac`) abrem o app | A Pages devolve **HTTP 404** na primeira resposta; rastreadores de preview e buscadores tratam como erro; metadados continuam iguais aos da home (o app só os troca no navegador) | Médio: `basename`, estado de rota (`scrollTo`), links com `#`, recarga em subrota |
| **C. `BrowserRouter` + HTML pré-gerado por rota no build** | URLs limpas com **HTTP 200**; título, descrição, canonical e imagem de compartilhamento **por projeto**; sitemap completo; prévias sociais corretas | Exige um passo no build (um script que copia o `index.html` para `projetos/<id>/index.html` trocando as tags) e um `404.html` para rotas desconhecidas; sem dependências novas | Médio: mesmo da B, mais teste do build e da Pages; os links antigos com `#/` precisam de um pequeno redirecionamento em `index.html` |

**Links já compartilhados:** os endereços atuais usam `/#/...`. Em B e C, um script de poucas linhas no `index.html` converte `#/rota` em `/rota` ao abrir, e os links antigos continuam funcionando.

**Configuração da GitHub Pages:** não consegui ler as configurações do repositório (o `gh` não está instalado aqui). As evidências HTTP mostram publicação em `github.io/Portifolio` (sem domínio próprio), 404 padrão da GitHub e cache de 10 minutos. Com domínio próprio por trás do Cloudflare seria possível controlar cache e redirecionamentos, mas isso é decisão sua.

**Recomendação:** não migrar agora. Se o compartilhamento de estudos de caso em redes sociais e a indexação de cada projeto forem importantes, a opção C é a única que entrega os dois sem dependências. Se o link principal for sempre a home, A basta.

## 6. Relatório de problemas

### Correções imediatas (sem mudar conteúdo factual)

Status: **itens 1 a 5 aplicados localmente (ver "Atualização" no topo); 6 e 7 seguem abertos.**

| # | Problema | Evidência | Impacto | Prioridade | Solução proposta | Risco de regressão |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `lang` não muda ao alternar o idioma | `document.documentElement.lang` fica `pt-BR` ao trocar para inglês | Leitor de tela lê o texto em inglês com pronúncia portuguesa (WCAG 3.1.1) | Alta | Atualizar `lang` no `LanguageContext` ao trocar | Baixo |
| 2 | Moldura do diagrama rola sem foco por teclado (375 px) | axe: `scrollable-region-focusable`, grave, na página do James Fanstone | Usuário de teclado não alcança o diagrama | Alta | `tabIndex={0}`, `role="region"` e `aria-label` na moldura quando rola | Baixo |
| 3 | Páginas legais ficam com o título da home | Privacidade, Termos e Cookies sem `document.title` próprio | Abas e histórico ambíguos; SEO | Média | Definir título em cada página | Baixo |
| 4 | Texto escondido dentro do `h3` dos cartões | Títulos de seção ficam "Nome — Ver estudo de caso" | Navegação por títulos redundante | Baixa | Mover o texto escondido para `aria-describedby` ou para fora do `h3` | Baixo |
| 5 | Favicon ilegível a 16 px | Comparação ampliada | Qualidade percebida na aba | Média | Aplicar `favicon-simplificado.svg` e o `.ico` | Baixo (proposta pronta) |
| 6 | Imagens dos cartões ainda acima do necessário | Lighthouse: entrega de imagens 50/100, 59 KiB | Pequeno (peso total já 221 a 306 KiB) | Baixa | Versões menores com `srcset` | Baixo |
| 7 | CSS principal bloqueante | Lighthouse: 8,6 KB, estimativa de 150 a 600 ms | Pequeno | Baixa | Inlining do CSS crítico ou aceitar | Médio (FOUC) |

### Conteúdo e links que dependem de você

| # | Problema | Evidência | Impacto | Prioridade | Solução proposta |
| --- | --- | --- | --- | --- | --- |
| 8 | **Link do JAC está morto** | `jac-front-end.vercel.app` responde 404 | Visitante clica em "Ver referência" e cai em erro | Alta | Substituir pelo endereço correto ou remover o botão; depende de qual é a produção real |
| 9 | **JAC por `workers.dev` não funciona** | `/api/csrf` e `/api/public/events` respondem 503 | Se for o endereço de produção, o sistema não opera; o proxy da API precisa de correção no próprio JAC | Alta (fora do portfólio) | Corrigir o proxy da API no repositório do JAC; só então linkar |
| 10 | **Repositório `nuclei` retorna 404** | `github.com/GabrielGFC/nuclei` | Link quebrado no arquivo de projetos públicos | Média | Tornar público, corrigir o nome ou remover da lista |
| 11 | Maximiza aponta para `workers.dev` | O link atual é de preview | Parece provisório | Média | Informar o domínio definitivo |
| 12 | James Fanstone em Java sem link público | Não há URL no código | Sistema "em produção" sem link de acesso | Baixa | Informar a URL, se houver |
| 13 | Capturas fracas de Aila e James Fanstone | Telas de formulário e cadastro | Cartões dizem pouco | Baixa | Capturas melhores |

### Decisões arquiteturais

| # | Decisão | Opções | Quando decidir |
| --- | --- | --- | --- |
| 14 | Roteamento e SEO por projeto | A (manter), B (404.html), C (pré-geração por rota); ver seção 5 | Depende de a prévia por projeto importar |
| 15 | Cache de 10 minutos em todos os ativos | A GitHub Pages não permite mudar o `Cache-Control`; só mudaria atrás de um CDN (por exemplo, Cloudflare) | Só se o ganho justificar mais uma peça |
| 16 | Teste com leitor de tela | NVDA (Windows) e VoiceOver (celular); manual | Antes de afirmar acessibilidade |

## 7. Limites desta auditoria

- Lighthouse: uma execução por página e modo; variação de alguns pontos é normal.
- Dados de campo (INP, LCP real): indisponíveis (429 do PageSpeed; baixa amostra provável).
- Leitor de tela: **não testado**; WCAG 2.2 AA **não comprovada**.
- Contraste sobre gradientes: o axe marcou "a revisar"; cálculo manual não substitui medição na página.
- Só Chromium (Playwright e Edge); sem Safari, Firefox ou dispositivos físicos.
- Links do LinkedIn não verificáveis por requisição (HTTP 999).
- Configurações da GitHub Pages inferidas por HTTP; o painel do repositório não foi lido.
