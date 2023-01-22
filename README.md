# Proyecto_NodeJS_Express

- Iniciando proyecto en TypeScript

## Implementacion de JWT
- Instalar el paquete `jsonwebtoken` con el comando:
    ``` bash
    npm install jsonwebtoken
    ```
    Y para el tipado de TS instalar:
    ``` bash
    npm install --save @types/jsonwebtoken
    ```
- Instalar `bcrypt` para el hasheo de password, con el comando:
    ```bash
    npm install bcrypt
    ```
    Y para el tipado de TS instalar:
    ``` bash
    npm install --save @types/jsonwebtoken
    ```

## Migracion de tablas
- Para migrar ejecutar el comando:
    ```bash
    npx prisma migrate dev --name add_table_<nombre_de_modelo>
    ```