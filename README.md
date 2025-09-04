# Amigo Secreto

Este proyecto es una aplicación web sencilla para organizar el juego de Amigo Secreto. Permite ingresar nombres de participantes y realizar el sorteo de manera aleatoria.

## Características

- Agregar nombres de amigos desde el input.
- Visualizar la lista de participantes.
- Sortear un amigo secreto de forma aleatoria.
- Interfaz moderna y responsiva.

## Instalación

1. **Descarga o clona el repositorio:**

   ```sh
   git clone <URL-del-repositorio>
   ```

2. **Accede a la carpeta del proyecto:**

   ```sh
   cd challenge-amigo-secreto_esp-main
   ```

3. **No requiere instalación de dependencias externas.**

## Ejecución

1. Abre el archivo `index.html` en tu navegador preferido (Chrome, Firefox, Edge, Safari, etc.).
2. Ingresa los nombres de los participantes en el campo de texto y haz clic en "Añadir".
3. Cuando todos los nombres estén agregados, haz clic en "Sortear amigo" para ver el resultado.

## Estructura de archivos

- `index.html`: Estructura principal de la aplicación web.
- `style.css`: Estilos visuales y responsivos.
- `app.js`: Lógica para agregar amigos y realizar el sorteo.
- `assets/`: Imágenes utilizadas en la interfaz.

## Dependencias

Este proyecto utiliza únicamente tecnologías web estándar:

- HTML5
- CSS3
- JavaScript (ES6)
- Fuentes de Google Fonts

No requiere Node.js, npm ni frameworks adicionales.

## Posibles problemas y soluciones

- **No se agregan nombres:**
  - Verifica que el campo de texto no esté vacío antes de añadir.
  - No se permiten nombres vacíos ni solo espacios.

- **No se muestra la lista de amigos:**
  - Asegúrate de que el archivo `app.js` esté correctamente enlazado en `index.html`.

- **No funciona el sorteo:**
  - Debes agregar al menos un nombre antes de sortear.

- **Problemas de visualización:**
  - Revisa que los archivos `style.css` y las imágenes en `assets/` estén presentes y correctamente enlazados.

## Autor

Desarrollado como parte de un desafío de lógica de programación de Alura.
