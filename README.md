# cabeça maluca

Site estático (portfólio + Caderno de ideias) publicado com GitHub Pages.

**URL:** https://olaconecta.github.io/cabeca-maluca/

## Estrutura

```
index.html            página principal (ideias, cabeça, escritos, contato)
escritos/index.html   índice dos textos
escritos/01..05.html  textos completos
assets/style.css      sistema visual
assets/main.js        modo calmo/caos + sorteador de pensamentos
```

## Como editar

- **Nome e textos:** `index.html` (procure por `Eduardo`).
- **Contato:** em `index.html`, seção `#contato` — troque `contato@exemplo.com` e o link do LinkedIn pelos seus reais.
- **Pensamentos da caixa:** array `pensamentos` em `assets/main.js`.
- **Modo caos:** cores e deslocamentos em `assets/style.css`, bloco `body[data-modo="caos"]`.
- **Novo texto:** copie um arquivo em `escritos/`, renomeie para `06.html`, atualize o índice e os links.

O repositório raiz `OlaConecta.github.io` não foi alterado — este é um projeto separado.

## Publicar alterações

```bash
git add .
git commit -m "atualiza site"
git push
```

O GitHub Pages reconstrói sozinho em poucos segundos.
