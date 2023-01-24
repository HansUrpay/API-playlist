# Proyecto_NodeJS_Express

Con este proyecto puedes realizar operaciones CRUD de:
1. Usuarios. 🧍
2. Canciones. 🎵
3. Playlists. 🎧

Además realizar `Login de usuario` y añadir canciones a las playlists creadas.

## Instalación y configuración 🛠️

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

- Hacer las migraciones a la BD
    ```bash
    npx prisma migrate dev --name add_table
    ```
- Activar el servidor en modo desarrollador
    ```bash
    npm run dev
    ```
## Funcionamiento 

### User 🙋🏻‍♂️
1. Creación de usuarios (POST) en el endpoint ✔️

    <http://localhost:9001/api/v1/users>
    
    Con el formato
    ```json
    {
    "name": "usuario",
    "email": "usuario@gmail.com",
    "password": "password"
    }
    ```
2. Login de usuarios (POST) en el endpoint ✔️

    <http://localhost:9001/api/v1/login>

    Con el formato
    ```json
    {
    "email": "usuario@gmail.com",
    "password": "password"
    }
    ```
    Esto genera un token que se usará luego.

3. Obtener usuarios (GET) en el endpoint enviando el token en el headers 📜

    <http://localhost:9001/api/v1/users>

4. Actualizar usuarios (PUT) enviando su id en el endpoint y el token en el headers 🔃

    <http://localhost:9001/api/v1/users/id>

    Y enviar algunos o todos los campos a actualizar, en el formato 
     ```json
    {
    "name": "usuario",
    "email": "usuario@gmail.com",
    "password": "password"
    }
    ```
5. Borrar usuarios (DELETE) en el endpoint enviando su id y el token en el headers ❌

    <http://localhost:9001/api/v1/users/id>









