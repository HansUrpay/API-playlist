# Proyecto_NodeJS_Express

Este proyecto tiene como funciones realizar las operaciones CRUD de:
1. Usuarios.
2. Canciones.
3. Playlists.
Además de hacer `Login de usuario` y añadir canciones a las playlists.

## Instalación y configuración

- Instalar las depedencias del proyecto
    ```bash
    npm install
    ```
- Configurar las variables de entorno en el archivo `.env` en la raíz del proyecto con los parámetros
    ```node
    DATABASE_URL= "file:./dev.db"
    
    SECRET_KEY = "mysecretkey"
    ```
   Para mayor seguridad del `SECRET_KEY`, encriptarlo con la función de Node.

   Ingresar al CLI de Node en el terminal
   ```bash
    node
   ```
    Ejecutar
    ```bash
    require("crypto").randomBytes(64).toString("hex")
    ```
    Esto nos dará una clave la cual usaremos como `SECRET_KEY`

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

