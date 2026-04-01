# Hit Digital — Teste Técnico Nuxt

Aplicação SSR construída com **Nuxt 3** que consome a API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com), com listagem e detalhamento de posts.

## Tecnologias

- [Nuxt 3](https://nuxt.com) — framework SSR
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Zod](https://zod.dev) — validação de dados em runtime

## Configuração do ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
cp .env.example .env
```

Edite o .env com a URL da API:

NUXT_PUBLIC_API_URL=https://jsonplaceholder.typicode.com

### Instalação

```bash
pnpm install
```

### Desenvolvimento

Desenvolvimento

```bash
pnpm dev
```

Estrutura do projeto

app/
├── components/
│   ├── posts/
│   │   ├── Post.vue          # Card de post
│   │   └── Comments.vue      # Lista de comentários
│   ├── Header.vue
│   └── Footer.vue
├── composables/
│   ├── usePosts.ts           # Estado e fetch de posts
│   └── useComments.ts        # Estado e fetch de comentários
├── pages/
│   ├── index.vue             # Listagem de posts
│   └── posts/[id].vue        # Detalhamento de post
├── plugins/
│   └── api.ts                # Plugin $api com $fetch configurado
├── services/
│   └── index.ts              # Funções de acesso à API
├── types/
│   ├── Post.ts               # Schema Zod + tipo Post
│   └── Comments.ts           # Schema Zod + tipo Comment
└── layouts/
    └── default.vue