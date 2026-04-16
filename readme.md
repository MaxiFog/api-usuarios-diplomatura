============================================================
       API DE GESTIÓN DE USUARIOS - DIPLOMATURA 
============================================================

Alumno: Maxi
Tecnologías: Node.js, Express, MySQL, Sequelize, JWT.

--- 1. REQUISITOS PREVIOS ---
- Tener instalado Node.js (v16 o superior).
- Tener instalado MySQL Server.
- Crear la base de datos manualmente en MySQL:
  COMMAND: CREATE DATABASE usuarios_db;

--- 2. INSTALACIÓN ---
1. Descomprimir el archivo (asegurarse de que NO esté la carpeta node_modules).
2. Abrir una terminal en la carpeta del proyecto.
3. Ejecutar el comando para instalar dependencias:
   $ npm install

--- 3. CONFIGURACIÓN (.env) ---
Cree un archivo llamado .env en la raíz con los siguientes datos:
PORT=3000
DB_NAME=usuarios_db
DB_USER=root
DB_PASSWORD=tu_contraseña_aqui
DB_HOST=localhost
JWT_SECRET=clave_secreta_maxi_2026

--- 4. EJECUCIÓN ---
Para iniciar el servidor y sincronizar las tablas:
$ node src/index.js

--- 5. PRUEBAS (Thunder Client / Postman) ---
- POST /api/register : Registra un usuario (público).
- POST /api/login    : Devuelve el TOKEN JWT (público).
- GET  /api/profile  : Ver datos (Requiere Bearer Token).
- PUT  /api/update   : Editar datos (Requiere Bearer Token).
- DELETE /api/delete : Borrar cuenta (Requiere Bearer Token).

* Nota: El token tiene una validez de 1 hora.
============================================================