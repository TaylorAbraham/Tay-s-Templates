# Tay's Templates: Express

## Setup

### Mandatory Dependencies

```
npm i -S express cors morgan
npm i -D typescript tsc-watch eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin prettier eslint-config-prettier eslint-plugin-prettier @types/express @types/morgan @types/cors
```

### Optional Dependencies

```
npm i -S dotenv node-fetch@2.0 firebase
npm i -D @types/node-fetch@^2.0
```

## Sources

`tsconfig.json` based on https://github.com/metachris/typescript-boilerplate/blob/master/tsconfig.json

## Hosting

[Heroku](https://www.heroku.com/) is a great option for free hosting. To avoid the startup delay of pinging the server for the first time, you can have your client ping a `/ping` or dummy route on the server when the client starts up.
