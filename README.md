# akiram-app-web

AkiraM Site — versão organizada (parciais + CSS externo)

Estrutura:
- index.html (carrega /partials via /assets/includes.js)
- /assets (styles.css, includes.js, imagens e ícones)
- /partials (header, hero, planos, processo, ecologico, contato, footer)

Como testar localmente:
- Inicie um servidor estático:
  - npx serve .
  - ou: python -m http.server 8080
- Abra http://localhost:3000 (ou a porta exibida) e verifique se os parciais carregaram.

Deploy (GitHub Pages, Netlify, Vercel ou S3+CloudFront) funciona sem build.