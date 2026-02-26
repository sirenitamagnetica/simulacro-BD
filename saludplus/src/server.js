//es el Director de Orquesta.
//  Su única misión es dar las órdenes en el orden correcto para que el programa arranque.
// Es el que dice: "Primero conecten las bases de datos y luego enciendan al recepcionista (app)".


import { createTables } from "./config/postgres.js";  // Trae los planos para construir las tablas.
//import app from "./app.js"; 
//import { env } from "./config/env.js";
import { migrate } from "./services/migrationService.js";  // Trae al equipo que mueve los datos del CSV.


/* 
El Bloque de Seguridad (try...catch)

Todo el proceso está envuelto en un try { ... } catch.

    try: "Intenta hacer todo esto".

    catch: "Si algo falla en cualquier paso, detente y dime qué pasó".

    process.exit(1): Si hay un error grave (como que no haya conexión a internet o a la base de datos), 
    esta línea apaga el programa por completo para no causar daños.
*/
try{ // aqui se empieza a construir las tablas 
    console.log("Connecting to postgres...");
    await createTables(); // Llama a la función (la de los CREATE TABLE). y el await le pide que espere que no pase a la siguiente linea hasta que las tablas no esten creadas 
    console.log("Connected to postgres successfully");
    

    //Mudanza de Datos (Migración)
    console.log("Migrating data...");
    await migrate(true); // el clearBefore de migrationService.js  Al ponerle true aquí, le estás diciendo: "Cada vez que encienda el programa, borra lo que había antes y carga el CSV desde cero". Así siempre tienes datos limpios para tus pruebas.
    console.log("Data migrated successfully");

    /* 
    se usa para encender un servidor web. al tener  estos archivos listos el siguiente paso es ejecutarlo. En tu terminal de la uni deberías escribir algo como:
    node src/services.js 
    */ 

    /* app.listen(env.port, () => {
        console.log(`Server running on port ${env.port}`);
    }); */  


}catch(error){
    console.error("Error starting server:", error);
    process.exit(1);
}


startApp();