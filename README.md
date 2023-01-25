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
    
    Enviar los datos en el body con formato JSON
    ```json
    {
    "name": "usuario",
    "email": "usuario@gmail.com",
    "password": "password"
    }
    ```
2. Login de usuarios (POST) en el endpoint ✔️

    <http://localhost:9001/api/v1/login>

    Enviar los datos en el body con formato JSON
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

    <http://localhost:9001/api/v1/users/:id>

    Enviar en el body con formato JSON algunos o todos los campos a actualizar
     ```json
    {
    "name": "usuario",
    "email": "usuario@gmail.com",
    "password": "password"
    }
    ```
5. Eliminar usuarios (DELETE) en el endpoint enviando su id y el token en el headers ❌
<http://localhost:9001/api/v1/users/:id>



### Songs 
Rutas para acceder a los metodos de las canciones

- GET : Muestra las canciones.

    Para los usuarios NO logeados se le mostrarán solo las      canciones públicas.

    Para los usuarios logeados se mostrarán todas las canciones (públicas y privadas)

    http://127.0.0.1:9001/api/v1/songs

- GET por iD: Muestra una canción específica pasando su id. 

    http://127.0.0.1:9001/api/v1/songs/:id

- POST :Para crear una canción.

    http://127.0.0.1:9001/api/v1/songs

    body: 

    ```json
    {
    "name": "Canción 1",
    "artist": "Artista 1",
    "album": "Album 1",
    "year": 2020,
    "genre": "Rock",
    "duration": 120,
    "publico": true
    }
    ```

- PUT: Para actualizar una canción.

    http://127.0.0.1:9001/api/v1/songs/:id

    ```json
    {
    "name": "Canción 1",
    "artist": "Artista 1",
    "album": "Album 1",
    "year": 2020,
    "genre": "Rock",
    "duration": 120,
    "publico": true
    }
    ```

- DELETE : Borrar una canción pasándole el ID
    
    Solo los usuarios logeados pueden borrar

    http://127.0.0.1:9001/api/v1/songs/:id


### Anotación

Cuando te logeas te brinda un TOKEN, con ese token podrás acceder a la ruta del GET para poder ver canciones públicas y privadas, también podrás acceder a la ruta del DELETE.



### Playlist 🎧

- Para agregar playlists (POST) ✔

    <http://localhost:9001/api/v1/playlist>

    Enviar los siguientes datos por el Body en formato Json

    ```json
    {
    "name": "playlist1",
    "user_id": 1
    }
    ```
- Para ver playlists (GET) 📋
    
    <http://localhost:9001/api/v1/playlist>

- Para eliminar playlist (DELETE) ❌
    
    <http://localhost:9001/api/v1/playlist/:id>

    Donde ":id" se reemplaza con el id de la playlist a eliminar

- Para agregar canciones a la playlist (POST) ✔

    <http://localhost:9001/api/v1/playlistadd>

    Enviar los siguientes datos por el body en formato JSON

    ```json
    {
    "id_song": 1,
    "id_playlist": 1
    }
    ```
- Para ver las canciones de la playlist (GET) 📋

    <http://localhost:9001/api/v1/playlistadd>

- Para eliminar una canción de una playlist (DELETE) ❌

    <http://localhost:9001/api/v1/playlistadd/:id_playlist/song/:id_song>

    ":id_playlist" es el id de la playlist donde se encuentra la canción.
    
    ":id_song" es el id de la canción a eliminar.
