# Roteamento com URLs limpas e pré-geração estática

Data: 26/10/2026. Estado: implementado e validado localmente; **sem commit, push ou deploy**.

## Decisão

`HashRouter` foi trocado por `BrowserRouter` (`basename` `/Portifolio`, vindo do `base` do Vite) e cada rota é **pré-renderizada no build**: o build grava um `index.html` por página, já com o HTML da página e os metadados próprios. Escolhida entre quatro opções (manter hash; `BrowserRouter` + `404.html`; `BrowserRouter` + pré-geração; migrar para Astro/Next). Motivo: cada projeto passa a ter URL própria, status 200, conteúdo no HTML e prévia própria no LinkedIn e no WhatsApp.

Ferramenta: o padrão oficial de SSR/pré-renderização do Vite (`vite build --ssr` + `react-dom/server` + `StaticRouter`), em vez de uma dependência nova. Motivos: `vite-react-ssg` exige Vite 6.4+ (o projeto usa 6.3.5) e uma troca da definição de rotas; adicionar dependência também mexeria em `bun.lock`, que já diverge entre Bun 1.3.3 (local) e 1.1.34 (CI). O script tem ~90 linhas e falha em voz alta se uma tag do modelo não existir.

## Como funciona

1. `vite build`: cliente em `dist/` (inclui o modelo `dist/index.html`).
2. `vite build --ssr src/entry-server.tsx --outDir dist-ssr`: módulo `entry-server.mjs`, que expõe `render(url, basename)` e a lista de páginas (`src/seo/pages.ts`). Nesta etapa não roda o otimizador de imagens nem copia `public/`.
3. `node scripts/prerender.mjs`: para cada página grava `dist/<rota>/index.html` com título, `description`, `canonical`, Open Graph e Twitter Card próprios e o HTML renderizado dentro de `#root`; grava `dist/404.html` (com `noindex`) e `dist/sitemap.xml`; apaga `dist-ssr`.
4. No navegador, `main.tsx` usa `hydrateRoot` quando `#root` já tem HTML e `createRoot` quando não tem (modo `npm run dev`).

`npm run build` / `bun run build` executa as três etapas em sequência.

## Arquivos

| Arquivo | O que mudou |
| --- | --- |
| `src/routes/route.tsx` | `BrowserRouter` com `basename`. |
| `src/routes/AppRoutes.tsx` (novo) | Rotas compartilhadas entre cliente e servidor; rota `*` agora mostra "Página não encontrada". |
| `src/entry-server.tsx` (novo) | `render()` com `StaticRouter`, mais exportação das páginas. |
| `src/main.tsx` | Hidratação quando há HTML pré-renderizado. |
| `src/seo/pages.ts` (novo) | Fonte única de rotas, títulos, descrições e imagens (14 páginas). |
| `scripts/prerender.mjs` (novo) | Geração dos HTMLs, `404.html` e `sitemap.xml`. |
| `scripts/og-images.mjs` (novo) | Gera `public/og/<id>.png` (1200x630) a partir das capturas reais; só roda quando uma captura mudar. |
| `public/og/*.png` (novos) | Nove imagens de compartilhamento, uma por projeto. |
| `public/sitemap.xml` | Removido: o sitemap passa a ser gerado no build. `robots.txt` não mudou. |
| `index.html` | Script de redirecionamento dos links antigos com `#`; `<noscript>` que mostra o conteúdo sem JavaScript. |
| `vite.config.ts` | Configuração distinta para a build de servidor. |
| `src/components/lux/Monogram.tsx` | Estado inicial igual no servidor e no cliente (hidratação); quem já viu a entrada na sessão pula a animação antes da primeira pintura. |
| `src/pages/naoEncontrado.tsx` (novo), JSONs | Página 404 e chave `pageNotFound` (PT e EN); links legais do JSON sem `#`. |
| `src/vite-env.d.ts` (novo), `package.json` | Tipos do Vite e script `build`. |

## URLs esperadas

`/Portifolio/`, `/trajetoria/`, `/projetos/<id>/` (aila, maximiza, pasteur, esports, jac, lion-fanstone, coneleste, farm-xp, fanstone-legacy), `/privacidade/`, `/termos/`, `/cookies/`. Sem a barra final, a GitHub Pages redireciona (301) para a versão com barra. Rota inexistente: a Pages serve `404.html` com status 404 e `noindex`. As 14 páginas pré-geradas não dependem desse fallback.

Links antigos: `/Portifolio/#/projetos/jac` abre `/Portifolio/projetos/jac/` (script no `index.html`; o fragmento não chega ao servidor, então só o navegador pode resolver). Parâmetros de consulta são preservados e não há laço (a URL de destino não tem `#`).

## Testes executados (build local, servidor que imita a GitHub Pages)

- HTML bruto de `/`, `/trajetoria/`, `/projetos/jac/`, `/projetos/lion-fanstone/`, `/privacidade/`: título, `canonical`, `og:image` e `h1` próprios, antes de qualquer JavaScript. `404.html` com `noindex`.
- Acesso direto a `/`, `/projetos/jac/`, `/trajetoria/`, `/cookies/`: título correto, sem erros no console (build de produção, onde React registra falhas de hidratação como erro). Sem erros também com movimento reduzido.
- Links antigos `#/projetos/jac`, `#/trajetoria`, `#/privacidade`, `#/` levam às URLs novas.
- Navegação interna (home para projeto), recarga na subrota, rota inexistente (status 404, h1 e título corretos), troca PT para EN depois da hidratação.
- Sem JavaScript: o conteúdo da página de projeto aparece e visível (opacidade 1).
- `tsc` 0 erros; ESLint 0 erros (6 avisos antigos); `bun run build` (Bun 1.3.3) ok.
- Lighthouse, home no celular, em servidor com compressão: 93 a 94 (FCP 1,8 s, LCP 2,9 s), igual ao de antes da migração (93). Em um servidor de teste sem compressão deu 74; é artefato do servidor, a GitHub Pages comprime. Desktop 99 a 100.

## Sem ganho prometido

A pré-renderização põe o conteúdo e os metadados no HTML, mas os componentes de entrada (`Reveal`, `MaskedTitle`, `PageTransition`) começam com opacidade 0 e só aparecem após a hidratação. Por isso **o LCP não melhorou** e não é um objetivo desta mudança. O ganho é de SEO, prévia de compartilhamento e URLs.

## Riscos residuais

- A GitHub Pages só valida de fato após o deploy: conferir o redirecionamento 301 sem barra final e o status do `404.html` na URL real.
- O CI usa Bun 1.1.34 e `node` do runner (script exige Node 18+). Testado localmente com Bun 1.3.3; não há como rodar o 1.1.34 aqui.
- Idioma: o HTML é sempre em português; visitante em inglês vê português até a hidratação e então troca pelo botão (o app já iniciava em português para todos).
- Prévias já guardadas em cache pelas redes (LinkedIn, WhatsApp) mantêm a imagem antiga por um tempo; use o depurador de links de cada rede para atualizar.
- Novo projeto ou página: basta incluir em `featuredProjects` / `src/seo/pages.ts`; sem isso a rota não é pré-gerada nem entra no sitemap.

## Rollback

Antes do deploy: descartar as alterações (`git checkout -- .` e remover os arquivos novos) volta ao `HashRouter`. Depois do deploy: reverter o commit da migração e publicar; os links `#/...` antigos voltam a funcionar nativamente e os novos (`/projetos/jac/`) deixam de existir (a Pages passa a servir 404), então só compartilhe os links novos depois de validar na URL real.
