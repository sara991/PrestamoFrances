// Importar express
// -----variable para importar modulo, express es un servidor web escuchar peticiones
//y dar respuestas a las peticiones
const express = require("express");

//iMPORTAR HANDELEBARS COMO PLANTILLA
const exphbs = require("express-handlebars");



// crear un servidor express en app
const app= express();
//  INDICAR A EXPRESS USAR HANDLEBARS COMO PLANTILLA
//
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));

app.set("view engine", "hbs");
// Crear una ruta para /
//render cargar 
app.get("/", (req, res, next) => {
 res.render("formulario_prestamo");
});



// Inicializar el servidor express en un puerto en específico
app.listen(5000, () => {
  console.log("Servidor ejecutándose en el puerto 5000");
});


