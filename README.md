# Mercedetalles Landing

Landing page para **Mercedetalles**, empresa de decoracion de fiestas y eventos en Lima, Peru.

La web muestra trabajos realizados, especialidades, servicios, paquetes editables y contacto directo por WhatsApp.

## Stack

- React
- Vite
- CSS nativo
- GitHub Pages con GitHub Actions

## Requisitos

- Node.js 22 o superior recomendado
- npm

## Instalacion

```bash
npm install
```

## Desarrollo local

```bash
npm run dev
```

Luego abrir la URL que muestra Vite, normalmente:

```text
http://127.0.0.1:5173/
```

## Build de produccion

```bash
npm run build
```

El resultado se genera en `dist/`.

## Preview del build

```bash
npm run preview
```

## Editar contenido

El contenido principal esta en:

```text
src/data.js
```

Ahi puedes cambiar:

- Datos de contacto
- Categorias
- Galeria
- Especialidades
- Paquetes
- Adicionales
- Descuentos

Las imagenes publicas estan en:

```text
public/assets/img/
```

Para agregar una imagen nueva:

1. Copiar la imagen a `public/assets/img/gallery/`.
2. Agregar un objeto nuevo en `gallery` dentro de `src/data.js`.
3. Usar una ruta como:

```js
`${assetBase}assets/img/gallery/nombre-imagen.jpg`
```

## Despliegue en GitHub Pages

El proyecto ya incluye workflow:

```text
.github/workflows/deploy.yml
```

Pasos:

```bash
git init
git add .
git commit -m "Initial Mercedetalles landing"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

En GitHub:

1. Ir a `Settings`.
2. Ir a `Pages`.
3. En `Source`, elegir `GitHub Actions`.
4. Esperar que termine el workflow.

No se necesitan credenciales dentro del proyecto.

## Archivos que si se suben

- `package.json`
- `package-lock.json`
- `src/`
- `public/`
- `index.html`
- `vite.config.js`
- `.github/workflows/deploy.yml`
- `README.md`

## Archivos que no se suben

Ver `.gitignore`.

Principalmente:

- `node_modules/`
- `dist/`
- `.agents/`
- `.codex/`
- `skills-lock.json`
- archivos `.env`
- capturas `preview-*.png`
