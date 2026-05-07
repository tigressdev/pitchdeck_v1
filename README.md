# VitaCodex Pitch Deck — v0.2

**Startup One · FIAP 2026 · Helen Borges RM 364154 · André Lima RM 364124 · Gabriel Sanches RM 363699**

---

## O que é este projeto

Site de pitch interativo da VitaCodex, construído em **React + Vite + TypeScript + Tailwind CSS + Framer Motion**. A v0.2 é uma reformulação completa da v0.1 com três objetivos:

1. **Tema claro** — fundo branco em vez de preto, toda a paleta adaptada para leitura em light mode
2. **Conteúdo alinhado ao roteiro do vídeo** — a ordem e o texto das seções espelham exatamente o script de 3 min 30 s (`roteiro_video_vitacodex.md`), criando coerência entre vídeo e site quando apresentados juntos
3. **Novas seções** — Problema, Validação, Financeiro (2 cenários) e Roadmap, alinhadas ao checklist do professor

---

## O que mudou de v0.1 para v0.2

### Tema (dark → light)

| Token | v0.1 | v0.2 |
|-------|------|------|
| Background | `#050806` (preto) | `#ffffff` (branco) |
| Seções alternadas | `rgba(255,255,255,.015)` | `#f9fafb` (gray-50) |
| Texto primário | `text-white` | `text-gray-900` |
| Texto secundário | `text-white/65` | `text-gray-600` |
| Texto muted | `text-white/30` | `text-gray-400` |
| Bordas | `border-white/10` | `border-gray-200` |
| Botão primário | `bg-emerald-400 text-black` | `bg-emerald-600 text-white` |
| Label verde | `text-emerald-400` | `text-emerald-600` (mais escuro para contraste) |
| Cards | `bg-black/25` | `bg-white border border-gray-200 shadow-sm` |
| Scrollbar track | `#050806` | `#f1f5f9` |

### TransformDemo

O componente `TransformDemo.tsx` foi copiado **byte-a-byte** da v0.1 — nenhuma linha alterada. Ele vive dentro de um wrapper dark em `App.tsx` (gradiente `#0c1a14 → #050e08`) para que os cards com `bg-black/60` e `border-white/10` continuem renderizando corretamente, como se o componente ainda estivesse sobre um fundo escuro.

### Seções novas

| Seção | Roteiro | Descrição |
|-------|---------|-----------|
| `Problema` | Seções 1+2 | 3 problemas com quote direto do script, insight "o dado existe, a interpretação não" |
| `Validacao` | Seção 2 | 5 cards de entrevistas, quote da médica especialista, 4 learnings |
| `Financeiro` | Seção 5 | Dois cenários com seleção interativa, contadores animados, tabela de fases |
| `Roadmap` | Seção 6 | 4 fases com KPIs, chips de contexto e fala final da conclusão do vídeo |

### Seções reformuladas

| Seção | O que mudou |
|-------|-------------|
| `Nav` | Links atualizados: Problema, Validação, Demo, Solução, Negócio, Financeiro, Roadmap |
| `Hero` | Stats atualizados (33 SNPs, 5 entrevistas, 4 camadas, 2 cenários); CTA "Ver o problema" além de "Demo" |
| `HowItWorks` | 4 camadas em vez de 3 — inclui agora **Clinical Sync** como camada explícita; bloco de diferencial realinhado com fala do roteiro |
| `Business` | Barras de propensão animadas; bloco de API endpoints; tiers com cores; nota de validação reescrita |
| `Journey` | Light theme; quote do roteiro no bloco final |
| `Footer` | Fundo dark (gray-900) para contraste com o resto do site; tagline final do vídeo em destaque: "Seu corpo funciona em código. Nós te ajudamos a ler." |

### Estrutura de seções e ordem

A ordem das seções espelha o script do vídeo para que, ao exibir o site ao vivo durante a apresentação, o apresentador pode fazer scroll acompanhando a narrativa:

```
0:00 – 0:35  Hero          (gancho emocional + stats)
             TickerBar     (SNPs ao vivo — reforça escala)
0:35 – 1:05  Problema      (3 falhas sistêmicas + "o dado existe, a interpretação não")
             Validacao     (5 stakeholders + expert quote)
1:05 – 2:00  TransformDemo (slider TCF7L2 → Vita — coração do demo)
2:00 – 2:30  HowItWorks    (4 camadas + Clinical Sync + diferencial)
             Business      (4 ICPs + modelo API + barras de propensão)
2:30 – 3:05  Financeiro    (2 cenários: otimista e realista)
3:05 – 3:30  Roadmap       (4 fases + conclusão API-first)
             Journey       (origem NutriNest → pivot VitaCodex)
             Footer        (tagline final)
```

---

## Estrutura de arquivos

```
vitapitch_v02/
├── index.html                    # Meta, fontes (Syne, Inter, JetBrains Mono)
├── package.json                  # React 18, Framer Motion 11, Tailwind 3
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.js            # Tema: brand colors, animate-ticker, float, fadeUp
├── postcss.config.js
└── src/
    ├── main.tsx
    ├── index.css                 # Light body, scrollbar verde, classe demo-dark-section
    ├── App.tsx                   # Ordem de seções + dark wrapper do TransformDemo
    ├── data.ts                   # Toda a data layer (MARKERS, PIPELINE_STEPS, MARKET,
    │                             #   ICPS, TICKER_ITEMS, PROBLEMS, INTERVIEWS,
    │                             #   LEARNINGS, FINANCIAL_OPTIMISTIC/REALISTIC,
    │                             #   ROADMAP_PHASES, JOURNEY_PHASES)
    └── components/
        ├── Nav.tsx               # Light; links completos; badge FIAP
        ├── Hero.tsx              # Light; stats atualizados; DnaHelix opacity reduzida
        ├── TickerBar.tsx         # Light (bg-gray-50, texto gray-400)
        ├── Problema.tsx          # NEW — Seções 1+2 do roteiro
        ├── Validacao.tsx         # NEW — Seção 2 do roteiro
        ├── TransformDemo.tsx     # IDÊNTICO ao v0.1 (zero alterações)
        ├── HowItWorks.tsx        # Light; 4 camadas; diferencial expandido
        ├── Business.tsx          # Light; barras animadas; API endpoints; tiers
        ├── Financeiro.tsx        # NEW — Seção 5 do roteiro; 2 cenários
        ├── Roadmap.tsx           # NEW — Seção 6 do roteiro; 4 fases
        ├── Journey.tsx           # Light; quote do roteiro inserido
        └── Footer.tsx            # Dark (gray-900); tagline final do script
```

---

## Como rodar localmente

```bash
cd vitapitch_v02
npm install
npm run dev
```

Abrir em `http://localhost:5173`

Para build de produção:
```bash
npm run build
npm run preview
```

---

## Deploy (Vercel)

O projeto é 100% compatível com o deploy Vercel da v0.1. Para criar um novo projeto v0.2:

1. Fazer push do diretório `vitapitch_v02` para o repositório Git
2. No Vercel: **Add New Project** → selecionar o repositório
3. **Root Directory**: `vitapitch_v02`
4. **Build Command**: `npm run build`
5. **Output Directory**: `dist`
6. Deploy

---

## Checklist do professor — como cada item aparece

| Requisito | Onde no site |
|-----------|-------------|
| ✅ Entrevistas com usuários e clientes | `Validacao.tsx` — 5 cards com avatar, nome, perfil, citação e insight |
| ✅ Validação com stakeholders | `Validacao.tsx` — síntese + learnings + expert quote |
| ✅ Canvas B2C e B2B | `Business.tsx` — 4 ICPs + "a mesma API serve os quatro" |
| ✅ Diferencial dificilmente copiável | `HowItWorks.tsx` — bloco verde com citação explícita |
| ✅ Dois cenários financeiros | `Financeiro.tsx` — toggle otimista/realista com contadores animados |
| ✅ Pitch deck com fluxo claro | Ordem das seções espelha 1:1 o roteiro do vídeo |
| ✅ Protótipo com fluxo de uso | `TransformDemo.tsx` — slider interativo com auto-play |
| ✅ Entrega de valor para o público-alvo | `Business.tsx` + `HowItWorks.tsx` — Clinical Sync como ponte B2B |

---

## Decisões técnicas relevantes

### Por que o wrapper dark no TransformDemo?

O `TransformDemo` usa `bg-black/60`, `border-white/10`, `text-white` etc. — cores hardcoded que assumem fundo escuro. Para preservar o componente intacto (conforme solicitado) e ao mesmo tempo ter um site branco, o `App.tsx` envolve a seção em um `div` com gradiente dark (`#0c1a14 → #050e08`). Isso cria uma transição visual natural: site branco → zona escura do demo → volta ao branco.

### Por que o Footer é dark?

A tagline final do roteiro ("Seu corpo funciona em código. Nós te ajudamos a ler.") tem mais impacto emocional sobre fundo escuro, criando contraste e fechamento narrativo. É a mesma lógica do TransformDemo: ilhas dark em página clara.

### Financeiro — contadores animados

O `useCountUpOnce` dispara a animação uma única vez quando a seção entra na viewport (via `IntersectionObserver`). Valores não-numéricos como "Mês 8" são mostrados diretamente. A mudança de cenário usa `AnimatePresence` do Framer Motion para transição suave.

### Barra de propensão de adoção

Animada via `framer-motion` com `initial={{ width: 0 }}` e ativada pelo mesmo `IntersectionObserver` do `Business`. Reseta se o usuário rolar para fora e voltar (o `inView` state só vai a `true` uma vez — comportamento intencional para não repetir a animação).

---

## Paleta de cores

```css
/* Brand */
--emerald: #1D9E75;        /* labels, bordas verdes */
--emerald-bright: #2ec98f; /* efeitos no TransformDemo (dark wrapper) */
--emerald-btn: #16a34a;    /* bg dos botões primários (emerald-600) */

/* Accent */
--blue: #3f6df6;
--purple: #b846ff;
--orange: #f28a22;
--amber: #d97706;          /* cenário realista */

/* Light theme */
--bg: #ffffff;
--surface: #f9fafb;        /* gray-50, seções alternadas */
--text-primary: #0f172a;   /* slate-900 */
--text-sec: #4b5563;       /* gray-600 */
--text-muted: #9ca3af;     /* gray-400 */
--border: #e5e7eb;         /* gray-200 */

/* Dark islands (TransformDemo + Footer) */
--dark-bg: #0c1a14;        /* dark wrapper do demo */
--footer-bg: #111827;      /* gray-900 */
```

---

*VitaCodex · Startup One FIAP · Pitch Final 2026*
