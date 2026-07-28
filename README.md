# Oral & Medic — protótipo estático

Protótipo mobile-first, sem framework e sem dependências externas. Foi criado para visualizar estrutura, copy, interações e arquitetura de URLs antes da implementação final.

## Como abrir

Não abra apenas clicando no `index.html`, porque as rotas usam URLs de diretório.

No terminal, dentro desta pasta:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

Também funciona em hospedagem estática, Apache, Nginx, Netlify, Cloudflare Pages ou servidor semelhante.

## Imagens

Coloque as imagens em `assets/img/` usando os nomes listados em `assets/img/LEIA-ME.txt`.
O JavaScript detecta o arquivo e troca automaticamente o marcador pelo fundo com a foto.

Arquivos obrigatórios de marca:

- `logooralemedic.png`
- `favoralemedic.png`
- `foto-og-oral-medic.png`

## O que precisa ser substituído antes de publicar

- Telefone e WhatsApp (`5500000000000`).
- Horários de atendimento.
- Nomes, especialidades e CRO dos profissionais.
- Textos de relatos de pacientes e respectivas autorizações.
- Política de privacidade e termos revisados juridicamente.
- Conexão do formulário com CRM, e-mail ou WhatsApp.
- Imagens e textos finais.
- Validação ética de conteúdo, depoimentos e uso de imagens.

## Arquitetura

O protótipo inclui:

- Página inicial.
- Página de tratamentos.
- Seis páginas de tratamento.
- Sobre a clínica.
- Processo de atendimento.
- Especialistas.
- Estrutura e tecnologia.
- Galeria da clínica.
- Dúvidas frequentes.
- Contato e localização.
- Sitemap, robots.txt, llms.txt, manifest e páginas legais de base.

## SEO técnico incluído

- URLs estáticas e legíveis.
- `title`, descrição e canonical por página.
- Open Graph.
- JSON-LD básico para clínica e tratamentos.
- Breadcrumbs visíveis.
- Sitemap com URLs canônicas.
- `robots.txt`.
- `llms.txt` experimental.
- HTML sem dependência de JavaScript para o conteúdo principal.

## Observação

Este é um protótipo visual e estrutural. Na produção, recomenda-se migrar para Astro ou outro gerador com componentes, CMS, pipeline de imagens, validação de formulário, consentimento, analytics e testes automatizados.
