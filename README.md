[README.md](https://github.com/user-attachments/files/33579869/README.md)
# 🕯️ Aura & Cera - Tienda Web de Velas Artesanales & Personalizadas

Una página web moderna, atractiva, elegante y lista para publicar gratis en **GitHub Pages**. Diseñada con una paleta cálida y cautivadora (tonos ámbar dorado, terracota, cera de soja natural y detalles botánicos) pensada para enamorar a los visitantes e impulsar tus ventas.

---

## ✨ Características Principales

1. **Estudio Interactivo en Vivo ("Diseña tu Vela")**:
   - **Formas & Recipientes:** Vaso ámbar vintage, cerámica rústica beige, escultura bubble escandinava, flor de loto sagrada, etc.
   - **Aromas Exclusivos:** Vainilla Bourbon, Lavanda silvestre & Eucalipto, Canela dulce & Naranja, Jazmín blanco & Sándalo, Café Espresso, Brisa marina, etc.
   - **Personalización de Etiqueta en Tiempo Real:** El cliente escribe su nombre, dedicatoria o frase y la ve reflejada inmediatamente sobre la vela con efecto visual realista.
   - **Opciones de Empaque de Regalo:** Caja Kraft eco con flores secas, caja rígida de lujo con lazo de terciopelo, bolsa de lino con sello de lacre dorado.
   - **Cálculo dinámico de precio** y botón directo para pedir esa vela configurada por WhatsApp con 1 clic.

2. **Catálogo de Productos con Filtros y Buscador Rápido**:
   - Filtros por categoría: *Todas*, *Aromáticas en Vaso*, *Escultóricas & Formas*, *Kits de Regalo*, *Recuerdos para Eventos*.
   - Buscador por texto (aromas, notas, nombres).
   - Pirámide olfativa detallada (notas de salida, corazón y fondo).

3. **Carrito de Compras Integrado (Flyout Drawer)**:
   - Carrito lateral animado que almacena los productos en el navegador (`localStorage`).
   - Permite sumar cantidades, eliminar artículos y calcular subtotales.
   - **Botón de Checkout WhatsApp:** Redacta y envía de forma automática un mensaje detallado y ordenado con todo el pedido para que cierres la venta al instante por WhatsApp.

4. **Guía de Aromaterapia & Beneficios Emocionales**:
   - Explicación de los efectos de cada aroma (calma, concentración, romance, energía).

5. **Diseño 100% Responsivo & Optimizado para Móviles**:
   - Se adapta perfectamente a smartphones, tablets y computadores.
   - Micro-animaciones de resplandor de llama y botones flotantes de WhatsApp.

---

## 🚀 Cómo Probarla Localmente en tu Computadora

1. Dirígete a la carpeta del proyecto:
   `c:\Users\jhond\Documents\py jhon`
2. Haz doble clic sobre el archivo **`index.html`**.
3. Se abrirá automáticamente en tu navegador favorito (Chrome, Edge, Firefox, Brave). ¡Puedes interactuar con el personalizador, catálogo y carrito de inmediato!

---

## ⚙️ Cómo Personalizar tu Número de WhatsApp y Nombre

Abre el archivo [app.js](file:///c:/Users/jhond/Documents/py%20jhon/app.js) en tu editor y en las primeras líneas encontrarás:

```javascript
const CONFIG = {
  // Reemplaza con tu número de WhatsApp real (con código de país, sin espacios ni signos +)
  // Ejemplo Colombia: "573001234567", México: "5215512345678", España: "34612345678"
  WHATSAPP_PHONE: "573000000000",
  STORE_NAME: "Aura & Cera Atelier",
  CURRENCY: "COP",
  CURRENCY_SYMBOL: "$"
};
```

Guarda el archivo y listo: todos los botones de la página enviarán los pedidos directamente a tu WhatsApp.

---

## 🌐 Cómo Subirla a GITHUB y Publicarla Gratis en Internet (GitHub Pages)

Para que tu página esté en internet con un enlace público que puedas compartir en Instagram, TikTok o WhatsApp, sigue estos sencillos pasos:

### Opción 1: Directamente desde la web de GitHub (Sin instalar nada)

1. Ingresa a [GitHub.com](https://github.com) e inicia sesión con tu cuenta (o créate una gratis).
2. Haz clic en el botón verde **"New"** (Nuevo Repositorio).
3. Nombra tu repositorio, por ejemplo: `velas-personalizadas` o `aura-y-cera`.
4. Asegúrate de marcarlo como **"Public"** (Público) y haz clic en **"Create repository"**.
5. En la pantalla que aparece, haz clic en el enlace que dice **"uploading an existing file"** (subir archivos existentes).
6. Arrastra y suelta los siguientes archivos de tu carpeta:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `README.md`
7. Haz clic en el botón verde **"Commit changes"**.

#### 🌟 Activar tu enlace gratis (GitHub Pages):
1. En tu repositorio de GitHub, entra en la pestaña **Settings** (Configuración, arriba a la derecha).
2. En el menú de la izquierda, haz clic en **Pages**.
3. En la sección **Branch**, selecciona `main` (o `master`) y en la carpeta deja `/ (root)`.
4. Haz clic en **Save** (Guardar).
5. Espera unos 1 a 2 minutos y recarga la página: GitHub te mostrará tu enlace en vivo, por ejemplo:
   👉 `https://tu-usuario.github.io/velas-personalizadas/`

---

### Opción 2: Si usas GitHub Desktop

1. Abre **GitHub Desktop**.
2. Ve a **File > Add local repository...**
3. Selecciona la carpeta: `c:\Users\jhond\Documents\py jhon`
4. Si te pide inicializar el repositorio, haz clic en **Create a repository**.
5. Haz clic en **Publish repository** a GitHub.
6. Entra a tu repositorio en GitHub y activa **Pages** como se explicó en la Opción 1.

---

## 🎨 Estructura de Archivos

```text
├── index.html       # Estructura semántica, personalizador en vivo, catálogo y carrito
├── styles.css       # Estilos estéticos de lujo, animaciones, tipografías y responsive design
├── app.js           # Lógica interactiva, personalizador, filtros, carrito y pedidos WhatsApp
└── README.md        # Documentación y guía de despliegue en GitHub Pages
```

---
*Hecho con cariño para impulsar tu emprendimiento de velas artesanales.* 🕯️
