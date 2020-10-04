//1
// Importar express
// -----variable para importar modulo, express es un servidor web escuchar peticiones
//y dar respuestas a las peticiones
const express = require("express");

//3iMPORTAR HANDELEBARS COMO PLANTILLA
const exphbs = require("express-handlebars");

// 4 Importar body parser que nos permite acceder al cuerpo de la petición HTTP
//Permite acceder a la informacion que se da del formulario
//funciona  despues de haber inicializdo el engine y antes de las rutas
const bodyParser = require("body-parser");


//Imprtar la funcion del calculo del metodo frances
const calcularMetodoFrances = require("./calculoMetodoFrances");

// 2crear un servidor express en app
const app= express();

// 3 cmd INDICAR A EXPRESS USAR HANDLEBARS COMO PLANTILLA
//
app.engine("hbs", exphbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

//4 
// Habilitar body parse para leer los datos del cuerpo de peticiones POST
//extraer los datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));


//2 Crear una ruta para /
//render cargar 
// https://developer.mozilla.org/es/docs/Web/HTTP/Methods
app.get("/", (req, res, next) => {
 res.render("formulario_prestamo");
});

//5
app.post("/prestamo", (req, res, next) => {
  // Asignación por destructuring
  // https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/Destructuring_assignment
  const { monto, tasaInteres, periodo } = req.body;

  calcularMetodoFrances(monto, tasaInteres, periodo);

  res.send("Petición aceptada");
});

// 1 cmd Inicializar el servidor express en un puerto en específico
app.listen(5000, () => {
  console.log("Servidor ejecutándose en el puerto 5000");
});


