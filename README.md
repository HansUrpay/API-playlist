# Proyecto_NodeJS_Express

Con este proyecto puedes realizar operaciones CRUD de:
1. Usuarios. 🧍
2. Canciones. 🎵
3. Playlists. 🎧

Además realizar `Login de usuario` y añadir canciones a las playlists creadas.

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

- Hacer las migraciones a la BD
    ```bash
    npx prisma migrate dev --name add_table
    ```
- Activar el servidor en modo desarrollador
    ```bash
    npm run dev
    ```
## Funcionamiento

### User
- Crear usuarios (POST) en el endpoint 

    <http://localhost:9001/api/v1/users>
    
    Con el formato
    ```json
    {
    "name": "usuario",
    "email": "usuario@gmail.com",
    "password": "password"
    }
    ```
- Login de usuarios (POST) en el endpoint

    <http://localhost:9001/api/v1/login>

    Con el formato
    ```json
    {
    "email": "usuario@gmail.com",
    "password": "password"
    }
    ```
    Esto genera un token que se usará luego.

- Obtener usuarios (GET) en el endpoint enviando el token en el headers

    <http://localhost:9001/api/v1/users>

- Para actualizar usuarios (PUT), enviar el id en el endpoint

    <http://localhost:9001/api/v1/users/id>

    Y enviar algunos o todos los campos a actualizar en el formato 
     ```json
    {
    "name": "usuario",
    "email": "usuario@gmail.com",
    "password": "password"
    }
    ```
### Playlist

- Para agregar playlists(POST):

    <http://localhost:9001/api/v1/playlist>

    Enviar los siguientes datos por el Body en formato Json

    ```json
    {
    "name": "playlist1",
    "user_id": 1
    }
    ```
- Para ver playlists(GET):
    
    <http://localhost:9001/api/v1/playlist>

- Para eliminar playlist(DELETE):
    
    <http://localhost:9001/api/v1/playlist/:id>

    Donde ":id" se reemplaza con el id de la playlist a eliminar

- Para agregar canciones a la playlist (POST):

    <http://localhost:9001/api/v1/playlistadd>

    Enviar los siguientes datos por el Body en formato Json

    ```json
    {
    "id_song": 1,
    "id_playlist": 1
    }
    ```
- Para ver las canciones de la playlist(GET):

    <http://localhost:9001/api/v1/playlistadd>

- Para eliminar una canción de una playlist(DELETE):

    <http://localhost:9001/api/v1/playlistadd/:id_playlist/song/:id_song>

    ":id_playlist" es el id de la playlist donde se encuentra la canción
    ":id_song" es el id de la canción a eliminar











