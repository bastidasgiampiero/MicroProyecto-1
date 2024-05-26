document.addEventListener("DOMContentLoaded", () => {
  let vidas = 6;
  const lineContainer = document.getElementById("lineContainer");
  const keyboardKeys = document.querySelectorAll(".key");

  let jugador = JSON.parse(sessionStorage.getItem("jugador"));
  console.log(jugador);

  document.getElementById("jugador").textContent = jugador.nombre;
  const puntosElemento = document.getElementById("puntos");
  puntosElemento.textContent = jugador.puntos;

  let palabra = JSON.parse(sessionStorage.getItem("palabra"));
  const palabraArray = palabra.toUpperCase().split("");

  console.log(palabra);

  // Crear líneas iniciales según el largo de la palabra
  palabraArray.forEach(() => {
    const line = document.createElement("div");
    line.classList.add("line");
    lineContainer.appendChild(line);
  });

  keyboardKeys.forEach((key) => {
    key.addEventListener("click", () => {
      const keyPressed = key.textContent.toUpperCase();
      let correctGuess = false;

      // Verificar si la letra pertenece a la palabra
      palabraArray.forEach((letra, index) => {
        if (letra === keyPressed) {
          const line = lineContainer.children[index];
          line.dataset.letter = keyPressed;
          correctGuess = true;
          jugador.puntos += 3;
          puntosElemento.textContent = jugador.puntos;
        }
      });

      if (!correctGuess) {
        vidas--;
        actualizarImagenAhorcado();
        if (vidas === 0) {
          mostrarPopUp2();
        }
      } else {
        verificarVictoria();
      }

      // Deshabilitar y ocultar tecla
      key.disabled = true;
      key.style.visibility = "hidden";
    });
  });

  function actualizarImagenAhorcado() {
    const imagenAhorcado = document.getElementById("hangmanImage");
    imagenAhorcado.src = `vidas${vidas}.png`;
  }

  function verificarVictoria() {
    const todasLetrasAdivinadas = Array.from(lineContainer.children).every(
      (line) => line.dataset.letter
    );
    if (todasLetrasAdivinadas && vidas != 0) {
      mostrarPopUp1();
    }
  }

  function mostrarPopUp1() {
    var popup = document.getElementById("popup1");
    popup.style.display = "block";
    const puntosElemento = document.getElementById("puntosGanados");
    puntosElemento.textContent = jugador.puntos;
    var fondoOscuro = document.getElementById("OscurecerFondo");
    fondoOscuro.style.display = "block";

    actualizarJugadores(vidas);
  }

  function mostrarPopUp2() {
    var popup = document.getElementById("popup2");
    popup.style.display = "block";
    const puntosElemento = document.getElementById("puntosPerdidos");
    puntosElemento.textContent = jugador.puntos;
    var fondoOscuro = document.getElementById("OscurecerFondo");
    fondoOscuro.style.display = "block";

    actualizarJugadores(vidas);
  }

  function actualizarJugadores(vidas) {
    let jugadores = JSON.parse(localStorage.getItem("jugadores")) || [];
    let jugadorExistente = jugadores.find((j) => j.nombre === jugador.nombre);

    if (jugadorExistente) {
      if (vidas != 0) {
        jugadorExistente.puntos += jugador.puntos;
        jugadorExistente.victorias = jugadorExistente.victorias + 1;
      } else {
        jugadorExistente.puntos += jugador.puntos;
      }
    } else {
      if (vidas != 0) {
        jugador.victorias = jugador.victorias + 1;
        jugadores.push(jugador);
      } else {
        jugadores.push(jugador);
      }
    }

    localStorage.setItem("jugadores", JSON.stringify(jugadores));
  }
});

function ocultarPopUp1() {
  var popup = document.getElementById("popup1");
  popup.style.display = "none";
  var fondoOscuro = document.getElementById("OscurecerFondo");
  fondoOscuro.style.display = "none";

  window.location.href = "index.html";
}

function ocultarPopUp2() {
  var popup = document.getElementById("popup2");
  popup.style.display = "none";
  var fondoOscuro = document.getElementById("OscurecerFondo");
  fondoOscuro.style.display = "none";

  window.location.href = "index.html";
}
