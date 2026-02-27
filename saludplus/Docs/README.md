Entendido, Andrea. Aquí tienes el README.md con la estructura profesional que pediste, separando completamente el bloque de inglés del bloque de español para que sea mucho más claro de leer.
Markdown

# 🏥 HealthPlus - Database Migration Project
---

## 🇺🇸 ENGLISH VERSION

### 📋 Description
This project implements a complete ETL (Extract, Transform, Load) process. It migrates 100 medical records from a CSV file into two different database systems: PostgreSQL for relational data and MongoDB for document-based clinical histories.

---

### 📂 Project Structure

#### 1. Root Directory
* **`package.json`**: Manages project metadata and dependencies like Express, Mongoose, and PG.
* **`.env`**: Stores environment variables and sensitive database credentials.
* **`README.md`**: Provides professional documentation and instructions.

#### 2. Data Folder (`/data`)
* **`datos.csv`**: The source file containing 100 raw medical records to be processed.

#### 3. Source Code (`/src`)
* **`/config`**:
    * `postgres.js`: Handles the connection to PostgreSQL and initializes relational tables.
    * `mongodb.js`: Handles the connection to MongoDB and defines the document schemas.
* **`/services`**:
    * `migrationService.js`: The core logic that reads the CSV and distributes data to both databases.
* **`server.js`**: The entry point that initializes the migration and starts the Express API server.

---

### 🛠️ Technical Requirements & Workflow

1. **Data Ingestion**: Using `csv-parse` to read and stream the local CSV file.
2. **SQL Persistence**: Normalizing data into tables (Patients, Doctors, Appointments) in PostgreSQL.
3. **NoSQL Persistence**: Transforming flat data into nested JSON documents for MongoDB.
4. **API Rest**: Exposing the data through web routes using Express.js.

---

### 📡 API Endpoints
* **PostgreSQL Data:** `GET http://localhost:3000/api/patients`
* **MongoDB Data:** `GET http://localhost:3000/api/histories`

---

### 💻 Git Commands
* `git init`: To initialize the repository.
* `git add .`: To stage all files.
* `git commit -m "message"`: To save the progress.

---
---

## 🇪🇸 VERSIÓN EN ESPAÑOL

### 📋 Descripción
Este proyecto implementa un proceso ETL (Extraer, Transformar, Cargar) completo. Migra 100 registros médicos desde un archivo CSV hacia dos sistemas de bases de datos diferentes: PostgreSQL para datos relacionales y MongoDB para historiales clínicos basados en documentos.

---

### 📂 Estructura del Proyecto

#### 1. Directorio Raíz
* **`package.json`**: Gestiona los metadatos y dependencias del proyecto (Express, Mongoose, PG).
* **`.env`**: Almacena variables de entorno y credenciales sensibles de la base de datos.
* **`README.md`**: Proporciona documentación profesional e instrucciones.

#### 2. Carpeta de Datos (`/data`)
* **`datos.csv`**: El archivo fuente que contiene los 100 registros médicos en bruto.

#### 3. Código Fuente (`/src`)
* **`/config`**:
    * `postgres.js`: Gestiona la conexión a PostgreSQL e inicializa las tablas relacionales.
    * `mongodb.js`: Gestiona la conexión a MongoDB y define los esquemas de documentos.
* **`/services`**:
    * `migrationService.js`: Lógica central que lee el CSV y distribuye los datos a ambas bases de datos.
* **`server.js`**: Punto de entrada que inicia la migración y levanta el servidor de la API Express.

---

### 🛠️ Requerimientos Técnicos y Flujo de Trabajo

1. **Ingesta de Datos**: Uso de `csv-parse` para leer y transmitir el archivo CSV local.
2. **Persistencia SQL**: Normalización de datos en tablas (Pacientes, Doctores, Citas) en PostgreSQL.
3. **Persistencia NoSQL**: Transformación de datos planos en documentos JSON anidados para MongoDB.
4. **API Rest**: Exposición de los datos mediante rutas web utilizando Express.js.

---

### 📡 Endpoints de la API
* **Datos PostgreSQL:** `GET http://localhost:3000/api/patients`
* **Datos MongoDB:** `GET http://localhost:3000/api/histories`

---

### 💻 Comandos de Git
* `git init`: Para inicializar el repositorio.
* `git add .`: Para preparar todos los archivos.
* `git commit -m "mensaje"`: Para guardar el progreso.

---
**Desarrollado por:** Andrea Lizcano  
**Estado:** Finalizado - 2026
