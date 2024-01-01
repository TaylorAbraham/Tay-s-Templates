# Tay's Templates: React

## Setup

### Bun

```
bun create vite
```

### Mandatory Dependencies

```
npm i -S react-router-dom@6 @mui/material @emotion/react @emotion/styled @mui/icons-material fontsource-roboto
npm i -D tailwindcss eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks prettier eslint-config-prettier eslint-plugin-prettier
bunx tailwindcss init
```

Note: `@emotion/react` and `@emotion/styled` are currently dependencies of `@mui/material`. Consult [MUI's installation page](https://mui.com/getting-started/installation/) to verify that this is still the case.

### Optional Dependencies

```
npm i -S @feedback-fish/react
```

## Hosting

[Netlify](https://www.netlify.com/) is a great option for free hosting without the startup delay of Heroku.

Also refer to: https://dev.to/rajeshroyal/page-not-found-error-on-netlify-reactjs-react-router-solved-43oa
