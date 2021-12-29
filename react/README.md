# Tay's Templates: React

## Setup

### Create React App

https://create-react-app.dev/docs/getting-started/

```
npx create-react-app MyApp --template typescript
```

### Mandatory Dependencies

```
npm i -S react-router-dom@6 @mui/material @emotion/react @emotion/styled @mui/icons-material fontsource-roboto
npm i -D sass eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks prettier eslint-config-prettier eslint-plugin-prettier
```

Note: `@emotion/react` and `@emotion/styled` are currently dependencies of `@mui/material`. Consult [MUI's installation page](https://mui.com/getting-started/installation/) to verify that this is still the case.

### Optional Dependencies

```
npm i -S @feedback-fish/react
```

## Hosting

[Netlify](https://www.netlify.com/) is a great option for free hosting without the startup delay of Heroku.
