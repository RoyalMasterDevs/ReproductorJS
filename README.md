# Proyecto 2: Reproductor de Audio Web
**Diplomado en Full Stack**

¡Bienvenido al Proyecto 2! En este reto aplicarás tus conocimientos de **HTML5, Tailwind CSS y JavaScript DOM** para construir una interfaz de reproductor de música moderna, completamente funcional y responsive.

---

## 📋 Descripción del Proyecto

El objetivo principal de esta entrega es tomar la lógica base en JavaScript e integrar una interfaz de usuario (*UI*) limpia, atractiva y funcional utilizando **Tailwind CSS** e iconografía mediante **Bootstrap Icons**.

El proyecto incluye la lógica necesaria para gestionar las funciones esenciales de un reproductor de audio:
* Reproducción y pausa de pistas.
* Control de volumen interactivo con actualización de ícono según nivel.
* Barra de progreso sincronizada con actualización en tiempo real.
* Salto entre canciones (Anterior / Siguiente).
* Modo de repetición en bucle (*Repeat*).

---

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Estructura semántica de la aplicación.
* **Tailwind CSS (v3 CDN):** Estilizado utilitario, layout flexbox/grid y efectos visuales modernos (*Glassmorphism UI*).
* **JavaScript (ES6+):** Manipulación del DOM, eventos multimedia (`HTMLAudioElement`) y gestión del estado del reproductor.
* **Bootstrap Icons:** Iconografía para los controles multimedia (`bi-play-fill`, `bi-pause-fill`, `bi-repeat`, etc.).

---

## 🚀 Requisitos del Sistema y Estructura del DOM

Para que la lógica JavaScript interactúe correctamente con el HTML, la plantilla debe contar obligatoriamente con los siguientes identificadores (`id`):

| ID del Elemento | Tipo de Etiqueta | Descripción |
| :--- | :--- | :--- |
| `audio-player` | `<audio>` | Elemento nativo de audio de HTML5. |
| `song-name` | `<h1>` / `<h2>` / `<span>` | Título de la canción en reproducción. |
| `song-author` | `<p>` / `<span>` | Nombre del artista o autor. |
| `player-progress` | `<input type="range">` | Barra deslizante de progreso del audio. |
| `player-current-time` | `<span>` | Tiempo transcurrido de la pista (`00:00`). |
| `player-duration` | `<span>` | Duración total de la pista (`00:00`). |
| `btn-play` | `<button>` | Botón principal de Reproducir / Pausar. |
| `btn-play-icon` | `<i>` | Ícono dinámico del botón de reproducción. |
| `btn-prev` | `<button>` | Botón para la canción anterior. |
| `btn-next` | `<button>` | Botón para la siguiente canción. |
| `btn-repeat` | `<button>` | Botón para alternar el modo repetición. |
| `player-volume` | `<input type="range">` | Control deslizante de volumen (`0` a `1`). |
| `btn-volume` | `<button>` / `<div>` | Contenedor o botón del ícono de volumen. |

---

## 📂 Estructura del Proyecto

```text
📁 proyecto-2-reproductor/
├── 📄 index.html      # Documento principal (Estructura, Estilos Tailwind y JS)
└── 📄 README.md       # Documentación oficial del proyecto
└── 📄 main.js         # Código de Javascript

```

---

## 🛠️ Pasos para Ejecutar el Proyecto Localmente

1. **Clonar o descargar el repositorio:**
   ```bash
   git clone <https://github.com/RoyalMasterDevs/ReproductorJS>
   cd ReproductorJS
   ```

2. **Abrir en el navegador:**
   * Abre directamente el archivo `index.html` en tu navegador de preferencia.
   * Alternativamente, puedes ejecutar la extensión **Live Server** desde Visual Studio Code para un entorno de desarrollo en vivo.

---

## 🎯 Criterios de Evaluación y Rúbrica

| Criterio | Descripción | Puntaje |
| :--- | :--- | :---: |
| **Diseño y UI/UX** | Maquetación limpia, responsiva y moderna con Tailwind CSS. | 30% |
| **Uso del DOM** | Correcta vinculación de los `id` requeridos por el script de JS. | 30% |
| **Funcionalidad** | El reproductor permite pausar, reproducir, cambiar volumen y tiempo. | 30% |
| **Buenas Prácticas** | Código semántico, organizado y bien documentado. | 10% |

---

## 💡 Consejos e Indicaciones para el Alumno

* **DevTools & Consola:** La consola del navegador (`F12` o `Ctrl + Shift + I`) será tu mejor aliada para depurar errores de selección de IDs, eventos no capturados o rutas de audio no encontradas.
* **Manejo de Autoplay:** Los navegadores modernos restringen la reproducción automática (*Autoplay Policy*). La primera interacción de audio debe ser iniciada explícitamente por un clic del usuario.
* **Estilos de Botones Activos:** Al presionar el botón de repetición (`btn-repeat`), se alternará la clase `.btn-activated` para indicarle al usuario visualmente que la función está activa.

---

## 🍀 ¡Mucho Éxito!

Recuerda que la documentación oficial y la consola de desarrollo son tus mejores herramientas. ¡Haz que este reproductor destaque en tu portafolio del diplomado!