# Bierstube by H. Thate — Demo Web Premium

> **"La Cerveza nos reúne."**  
> Demo web funcional, responsive y de alto impacto visual para la cervecería alemana **Bierstube by H. Thate**, situada en **Licenciado Poza 50, Bilbao**.

---

## 1. Concepto Creativo & Dirección Visual

- **Identidad Propia**: Inspirada en la unión entre la tradición cervecera bávara (Hofbräu München) y la vitalidad urbana de la calle Licenciado Poza.
- **Hero de Alta Fidelidad**: Recreación del arte aprobado con jarra gigante en el 55% izquierdo, espuma efervescente, fondo azul cobalto con salpicaduras enérgicas y silueta artística del Museo Guggenheim y la ría de Bilbao.
- **Tipografía Híbrida**: Combinación de fuentes alemanas/góticas (`UnifrakturCook`, `Germania One`, `Pirata One`) con tipografías contemporáneas de alta legibilidad (`Space Grotesk`, `Plus Jakarta Sans`).
- **Composición Editorial Asimétrica**: Especialidades gastronómicas reales en grandes formatos fotográficos, sin cuadrículas genéricas de restaurante.
- **Carta Independiente y Sin Precios**: Menú visual con navegación por categorías (*Para Compartir*, *Nuestras Salchichas*, *Otras Especialidades*, *Cervezas HB & Bodega*), transcrita fielmente de las capturas originales de Instagram.
- **Cultura Deportiva de Pozas**: Presencia equilibrada del Athletic Club y Bilbao Basket como parte natural del ambiente de taberna previa y posterior a los partidos, con la bufanda histórica *All Iron* y el espíritu de reunión de la calle.

---

## 2. Estructura del Proyecto

```text
Bierstube/
├── public/
│   └── images/
│       ├── hero/                  # Arte de portada limpio y referencia original
│       ├── establishment/         # Fachada en Pozas 50, tiradores HB, barra de madera
│       ├── food/                  # Schweinehaxe, Surtido Bremen, Blutwurst, embutidos
│       ├── beer/                  # Brindis de jarras masivas HB, barril de madera Anstich
│       ├── sports/                # Estante All Iron, bufandas y bienvenidas
│       ├── brand/                 # Logotipo oficial Bierstube by H. Thate
│       └── instagram_menu/        # Capturas de referencia de stories de Instagram
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Navegación fija con selector de sección e Instagram
│   │   ├── Hero.tsx               # Portada de máxima fidelidad con textos vivos
│   │   ├── GastronomiaSection.tsx # Especialidades en composición asimétrica
│   │   ├── CervezaAmbienteSection.tsx # Brindis masivo HB y tradición de barril de madera
│   │   ├── DeporteBilbaoSection.tsx   # Cultura deportiva de Pozas y All Iron
│   │   ├── LocalSection.tsx       # Fachada en Pozas 50 y detalles del mostrador
│   │   ├── UbicacionSection.tsx   # Dirección, accesos en metro y mapa interactivo
│   │   └── Footer.tsx             # Pie de página institucional y créditos
│   ├── pages/
│   │   ├── HomePage.tsx           # Página principal completa
│   │   └── CartaPage.tsx          # Página independiente de Nuestra Carta
│   ├── App.tsx                    # Enrutador por hash (100% compatible con GitHub Pages)
│   ├── index.css                  # Tailwind CSS v4, estilos de marca y fuentes
│   └── main.tsx                   # Punto de entrada de React
├── dist/                          # Bundle de producción optimizado + 404.html fallback
├── verify-screenshots.cjs         # Script de pruebas automatizadas con Puppeteer
├── vite.config.ts                 # Configuración de Vite con base relativa './'
└── package.json                   # Dependencias y scripts de ejecución y despliegue
```

---

## 3. Instrucciones de Ejecución Local

### Prerrequisitos
- Node.js (v18 o superior)
- npm (v9 o superior)

### Pasos
1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Iniciar servidor de desarrollo**:
   ```bash
   npm run dev
   ```
   Abrirá la aplicación en `http://localhost:5173/`.

3. **Compilar para producción**:
   ```bash
   npm run build
   ```
   Genera la carpeta `dist/` con los archivos optimizados y el archivo de respaldo `404.html`.

4. **Probar el bundle localmente**:
   ```bash
   npm run preview
   ```

---

## 4. Instrucciones para Publicar en GitHub Pages

El proyecto ya está completamente configurado para publicarse en **GitHub Pages** sin problemas de rutas 404 ni rutas de imágenes rotas:
- `vite.config.ts` utiliza `base: './'` para garantizar que los assets carguen en cualquier subdirectorio (`https://<usuario>.github.io/<repositorio>/`).
- La navegación entre Inicio y Carta utiliza *hash routing* (`#carta`), lo que permite recargar la página o compartir el enlace directo sin requerir reescrituras de servidor.
- El comando `npm run build` duplica automáticamente `index.html` a `404.html` como salvaguarda adicional.

### Procedimiento de Despliegue:

1. **Crear repositorio en GitHub** y subir el código:
   ```bash
   git init
   git add .
   git commit -m "feat: demo web premium Bierstube by H. Thate"
   git branch -M main
   git remote add origin https://github.com/<tu-usuario>/<tu-repositorio>.git
   git push -u origin main
   ```

2. **Publicar en la rama `gh-pages`**:
   ```bash
   npm run deploy
   ```
   *(Este comando ejecuta `predeploy` para compilar la versión definitiva y luego sube el directorio `dist` a la rama `gh-pages` de tu repositorio).*

3. **Activar GitHub Pages en el repositorio**:
   - Ve a **Settings** → **Pages** en tu repositorio de GitHub.
   - En **Source**, asegúrate de que esté seleccionado **Deploy from a branch**.
   - En **Branch**, selecciona `gh-pages` / `/ (root)` y pulsa **Save**.
   - En unos segundos tu demo estará accesible en: `https://<tu-usuario>.github.io/<tu-repositorio>/`.

---

## 5. Datos Pendientes de Confirmar con Alfredo

Para la versión final de producción antes del lanzamiento público comercial, se han identificado los siguientes datos a contrastar directamente con Alfredo:

1. **Horarios de Apertura y Cocina**:
   - Actualmente no constan en las cartas de Instagram. En la demo se indica: *"Consulta horarios actualizados en nuestro Instagram oficial"*.
2. **Teléfono de Contacto / Política de Reservas**:
   - Se ha priorizado el canal oficial de Instagram (`@bierstube_bilbao`) y Google Maps. Conviene confirmar si se habilita teléfono directo o WhatsApp de reservas.
3. **Rotación de Grifos y Cervezas de Temporada**:
   - Están confirmadas Hofbräu Original, Hofbräu Dunkel, Hofbräu Helles y St. Bernardus Prior 8. Confirmar si se ofrecen cervezas estacionales (como la Oktoberfestbier o Maibock).
4. **Alérgenos y Opciones Vegetarianas / Sin Gluten**:
   - Identificar qué platos disponen de adaptaciones específicas para destacarlo en la carta.
