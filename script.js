const palabras = [
  "amor",
  "agua",
  "aire",
  "animal",
  "arbol",
  "arte",
  "autor",
  "ave",
  "barco",
  "bebida",
  "boca",
  "brazo",
  "cabeza",
  "caja",
  "cama",
  "campo",
  "cancion",
  "cara",
  "carne",
  "carta",
  "casa",
  "celular",
  "ciudad",
  "clase",
  "coche",
  "comida",
  "cosa",
  "cuadro",
  "cuerpo",
  "deporte",
  "dia",
  "dinero",
  "doctor",
  "duda",
  "edad",
  "elefante",
  "energia",
  "enfermedad",
  "espejo",
  "estrella",
  "familia",
  "fiesta",
  "flor",
  "foto",
  "fruta",
  "fuego",
  "futuro",
  "gente",
  "gimnasio",
  "guerra",
  "hermano",
  "hijo",
  "historia",
  "hombre",
  "hormiga",
  "hospital",
  "idea",
  "idioma",
  "iglesia",
  "imagen",
  "informacion",
  "insecto",
  "isla",
  "jardin",
  "juego",
  "juguete",
  "lago",
  "laptop",
  "leccion",
  "libro",
  "luz",
  "madera",
  "mano",
  "mapa",
  "mar",
  "mascara",
  "medicina",
  "mesa",
  "montana",
  "mujer",
  "musica",
  "nacion",
  "nave",
  "nino",
  "noche",
  "nombre",
  "nota",
  "nube",
  "numero",
  "nueva",
  "ocasion",
  "ojo",
  "olla",
  "oracion",
  "oro",
  "pajaro",
  "palabra",
  "paleta",
  "pared",
  "parque",
  "pelicula",
  "persona",
  "pez",
  "piedra",
  "piel",
  "piso",
  "planta",
  "plato",
  "playa",
  "poema",
  "policia",
  "pueblo",
  "puerta",
  "rayo",
  "reina",
  "relato",
  "reloj",
  "rio",
  "roca",
  "ropa",
  "rosa",
  "rueda",
  "sabor",
  "salud",
  "selva",
  "silla",
  "sol",
  "sombrero",
  "sonido",
  "sopa",
  "sueno",
  "tarde",
  "techo",
  "television",
  "tierra",
  "tiempo",
  "tio",
  "torre",
  "trabajo",
  "tren",
  "universidad",
  "vacacion",
  "viento",
  "vino",
  "virus",
  "vida",
  "ventana",
  "verdad",
  "viaje",
  "victoria",
  "villano",
  "vino",
  "vuelo",
  "zapato",
  "zona",
  "zorro",
  "caballo",
  "leon",
  "gato",
  "perro",
  "conejo",
  "raton",
  "serpiente",
  "oso",
  "delfin",
  "tigre",
  "lobo",
  "ciervo",
  "jirafa",
  "rana",
  "tortuga",
  "aguila",
  "buho",
  "camaleon",
  "pavo",
  "cisne",
  "cocodrilo",
  "camello",
  "cebra",
  "burro",
  "mono",
  "ciempies",
  "alce",
  "bisonte",
  "elefante",
  "gorila",
  "hipopotamo",
  "iguana",
  "koala",
  "lemur",
  "leopardo",
  "mamut",
  "marmota",
  "morsa",
  "orca",
];

function mostrarFormulario() {
  //Muestro el formulario
  var popup = document.getElementById("inicioJuego");
  popup.style.display = "block";
  //Coloco el fondo opaco
  var fondoOscuro = document.getElementById("OscurecerFondo");
  fondoOscuro.style.display = "block";
}

function ocultarFormulario() {
  //Oculto el formulario
  var popup = document.getElementById("inicioJuego");
  popup.style.display = "none";
  //Oculto el fondo
  var fondoOscuro = document.getElementById("OscurecerFondo");
  fondoOscuro.style.display = "none";
}

function mostrarInstrucciones() {
  var popup = document.getElementById("instrucciones");
  popup.style.display = "block";
  var fondoOscuro = document.getElementById("OscurecerFondo");
  fondoOscuro.style.display = "block";
}

function ocultarInstrucciones() {
  var popup = document.getElementById("instrucciones");
  popup.style.display = "none";
  var fondoOscuro = document.getElementById("OscurecerFondo");
  fondoOscuro.style.display = "none";
}

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener el nombre ingresado en el formulario
    let jugadorInputHTML = document.getElementById("jugador").value;

    // Crear objeto jugador
    let jugador = { nombre: jugadorInputHTML, puntos: 0, victorias: 0 };

    // Almacenar valor en sessionStorage
    sessionStorage.setItem("jugador", JSON.stringify(jugador));

    //Seleccionar palabras
    let palabra = obtenerPalabra(palabras);
    sessionStorage.setItem("palabra", JSON.stringify(palabra));

    ocultarFormulario();
    window.location.href = "game.html";
  });

function obtenerPalabra(palabras) {
  const indiceAleatorio = Math.floor(Math.random() * palabras.length);
  return palabras[indiceAleatorio];
}

function llenarTabla() {
  
}
