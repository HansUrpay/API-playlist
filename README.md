# Proyecto_NodeJS_Express

- Iniciando proyecto en TypeScript

## Instalacion de dependencias
- Instalar TS y el tipado de TS
    ```bash
    npm install typescript ts-node @types/node --save-dev
    ```
    Iniciar TS
    ```bash
    npx tsc --init
    ```
- Instalar Prisma CLI
    ```bash
    npm install prisma --save-dev
    ```

## Implementacion de JWT
- Instalar el paquete `jsonwebtoken`
    ``` bash
    npm install jsonwebtoken
    ```
    Instalar el tipado de "jsonwebtoken" en TS
    ``` bash
    npm install --save @types/jsonwebtoken
    ```
- Instalar `bcrypt` para el hasheo de password en el login
    ```bash
    npm install bcrypt
    ```
    Y para el tipado de "bcrypt" en TS
    ``` bash
    npm install --save @types/jsonwebtoken
    ```
- Para mayor seguridad del SECRET_KEY que se usará en el .env, encriptarlo con requiere("crypto")
    en la CLI de Node con `node` y ejecutar:
    ```node
    require("crypto").randomBytes(64).toString("hex")
    ```
- Instalar dotenv
    ```bash
    npm i dotenv
    ```

## SQLite como DB y migracion de tablas
- Iniciar Prisma y establecer SQLite com DB del proyecto con:
    ```bash
    npx prisma init --datasource-provider sqlite
    ```
- Luego de crear los modelos hacer las migraciones con el comando:
    ```bash
    npx prisma migrate dev --name add_table
    ```

