// Importar express
// -----variable para importar modulo, express es un servidor web escuchar peticiones
//y dar respuestas a las peticiones
const express = require("express");

// crear un servidor express en app
const app= express();


// Crear una ruta para /

app.get("/", (req, res, next) => {
 res.send("Bienvenido");
});



// Inicializar el servidor express en un puerto en específico
app.listen(5000, () => {
  console.log("Servidor ejecutándose en el puerto 8080");
});