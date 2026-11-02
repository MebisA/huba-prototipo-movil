# h.UBA — Prototipo de navegación

**Proyecto:** h.UBA — Tu vida universitaria en una sola app  
**Autoría del prototipo académico:** Patricia Retamozo  
**Materia:** Introducción al Conocimiento Proyectual 2

## Contenido

- **`index.html`**: prototipo navegable para navegador. Abre las siete vistas principales y ofrece formularios y recorridos secundarios.
- **`styles.css`** y **`prototype.js`**: presentación, interacción, navegación y datos de demostración.
- **`assets/`**: pantallas originales y QR.
- **`figma_png/`**: 19 vistas listas para crear el prototipo en Figma mediante el importador local.
- **`figma_frames/`**: 19 archivos SVG individuales. Las siete primeras vistas conservan las capturas del diseño; las doce vistas secundarias tienen ilustraciones, formas y textos vectoriales.
- **`figma_plugin/`**: importador local para Figma que dispone las pantallas y conecta las principales interacciones.
- **`materiales/`**: cuatro documentos PDF para demostrar el flujo de consulta.
- **`mapa_interacciones.json`**: relación entre pantallas y destinos.
- **`preview_pantallas.png`**: vista conjunta de los 19 diseños.

## Probar sin Figma

Descomprimí el proyecto y abrí **`index.html`** en Chrome, Edge o Firefox. En el panel lateral elegí una pantalla, o hacé clic sobre los controles del teléfono.

El navegador permite probar el recorrido de pantallas, la búsqueda, el asistente con respuestas orientativas, el alta de materias, los eventos, los recordatorios, el modo oscuro, la sección Compartir y la apertura de recursos académicos. Algunos datos de demostración se guardan mediante LocalStorage en ese navegador.

Si tu navegador restringe el uso de archivos locales, podés abrir la carpeta en Visual Studio Code con Live Server o ejecutar desde la carpeta:

```powershell
python -m http.server 8000
```

Después abrí `http://localhost:8000`.

## Crear el prototipo navegable dentro de Figma

### A. Preparar el plugin local

Para crear un plugin de desarrollo, **Figma Desktop** asigna el identificador propio del plugin. No se debe reemplazar ni inventar ese identificador.

1. Abrí la aplicación de escritorio Figma y creá un archivo nuevo de Figma Design.
2. En **Plugins → Development → New Plugin...**, creá un plugin vacío de JavaScript con un nombre como `h.UBA - Prototipo navegable`.
3. Figma generará una carpeta con `manifest.json` y un ID válido.
4. Copiá `figma_plugin/code.js` y `figma_plugin/ui.html` a esa carpeta, reemplazando `code.js` si existe.
5. En el `manifest.json` creado por Figma, mantené el `id` asignado y verificá estos campos (además de los que ya tenga):

```json
{
  "name": "h.UBA - Prototipo navegable",
  "api": "1.0.0",
  "main": "code.js",
  "ui": "ui.html",
  "editorType": ["figma"],
  "documentAccess": "dynamic-page",
  "networkAccess": { "allowedDomains": ["none"] }
}
```

El `manifest.json` incluido en `figma_plugin/` es una plantilla. Conservá el identificador `id` generado para tu plugin en Figma.

### B. Crear y conectar las 19 pantallas

6. En Figma Desktop, abrí **Plugins → Development → h.UBA - Prototipo navegable**.
7. Seleccioná **los 19 PNG** incluidos en la carpeta `figma_png/` (podés elegirlos todos con `Ctrl + A` desde el selector de archivos).
8. Hacé clic en **Crear pantallas y enlaces**.
9. El plugin crea una página nueva, 19 frames y las conexiones entre las pantallas. Para previsualizar, seleccioná `01 · inicio` y presioná **Presentar**.

Al terminar, el archivo se puede guardar y compartir normalmente desde tu cuenta de Figma.

### Edición dentro de Figma

El importador conserva la apariencia de los diseños y superpone interacciones editables. Las 19 pantallas ingresadas como PNG son imágenes, no capas de texto independientes. Para editar el contenido gráfico de las vistas secundarias, importá los SVG de `figma_frames/` y personalizá las capas que Figma reconozca como vectores. Las siete capturas originales siguen siendo imágenes y se pueden redibujar si se necesita editar cada componente.

El prototipo de Figma permite navegar entre pantallas; los formularios no guardan datos en Figma. Para probar ingresos de texto y almacenamiento, usá `index.html`.

## Organización de pantallas

01 Inicio · 02 Asistente virtual · 03 Buscador · 04 Mis cosas · 05 Calendario · 06 Recordatorios · 07 Más opciones · 08 Configuración · 09 Alejandría · 10 Códice · 11 PDF por materia · 12 Plan de estudio · 13 Agregar evento · 14 Nuevo recordatorio · 15 Ayuda · 16 Compartir · 17 Acerca de · 18 Chat · 19 Buscar recursos.

## Alcance

Se trata de un prototipo académico independiente, no de una aplicación oficial de la Universidad de Buenos Aires. Los sitios institucionales se abren mediante enlaces externos. Las siete vistas principales corresponden a las maquetas de referencia; los nuevos formularios y vistas secundarias son extensiones de diseño para completar la navegación.
