# PoC: Deprecación de X-editable

## 📋 Descripción

Este proyecto es una **Prueba de Concepto (PoC)** que simula un monolito híbrido con el objetivo de detectar y mapear todos los usos del componente **x-editable** de Bootstrap. El proyecto simula un escenario real donde una plataforma necesita migrar de Bootstrap 3 a Bootstrap 5, pero se encuentra bloqueada por la dependencia del componente x-editable.

## 🏗️ Arquitectura del Proyecto

### Monolito Híbrido
Este PoC simula un monolito con frontend híbrido que incluye:
- **Views en EJS** (simulando ERB/HAML de Rails)
- **Componentes Vue.js** (cargados via CDN)
- **Componentes React** (cargados via CDN)
- **Bootstrap 3** (únicamente para x-editable)
- **jQuery** (requerido por x-editable)

### Estructura de Carpetas

```
poc-xeditable/
├── mock/                          # Archivos mock que simulan código real
│   ├── users/
│   │   └── index.html.erb         # Vista de gestión de usuarios con x-editable
│   ├── roles/
│   │   └── form.haml              # Formulario de roles con x-editable
│   └── settings/
│       └── edit.vue               # Componente Vue con x-editable
├── public/                        # Archivos estáticos
│   ├── react-app.js              # Aplicación React con x-editable
│   └── vue-app.js                # Aplicación Vue con x-editable
├── views/
│   └── index.ejs                 # Vista principal del servidor
├── server.js                     # Servidor Express
├── script.js                     # Script de detección de x-editable
└── package.json                  # Dependencias del proyecto
```

## 🚀 Cómo Ejecutar el Proyecto

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm

### Instalación
```bash

# Instalar dependencias
npm install
```

### Ejecutar el Servidor
```bash
# Iniciar el servidor de desarrollo
node server.js
```

El servidor estará disponible en: **http://localhost:3000**

### Ejecutar el Script de Detección
```bash
# Ejecutar el script que detecta x-editable
node script.js
```

El script generará un archivo `x-editable-results.json` con los resultados de la detección.

## 📁 Descripción de Archivos

### Archivos del Servidor
- **`server.js`**: Servidor Express que sirve la aplicación monolítica
- **`views/index.ejs`**: Vista principal que carga Bootstrap 3, jQuery, x-editable y monta las apps Vue/React

### Script de Detección
- **`script.js`**: Script principal que:
  - Busca archivos `.erb`, `.haml`, `.vue`, `.js`
  - Detecta patrones de x-editable (`data-pk`, `data-type`, `data-mode`)
  - Extrae metadatos del módulo desde comentarios
  - Genera un reporte JSON con todos los usos encontrados

### Archivos Mock (Simulación)
Los archivos en la carpeta `mock/` simulan código real de una aplicación Rails:

- **`mock/users/index.html.erb`**: Vista de gestión de usuarios con múltiples tipos de x-editable:
  - Texto (nombre)
  - Email
  - Número (edad)
  - Select (estado)
  - Fecha (último login)
  - Textarea (mensaje del sistema)

- **`mock/roles/form.haml`**: Formulario de roles con x-editable
- **`mock/settings/edit.vue`**: Componente Vue con implementación de x-editable

### Aplicaciones Frontend
- **`public/vue-app.js`**: Aplicación Vue que demuestra x-editable en componentes Vue
- **`public/react-app.js`**: Aplicación React que demuestra x-editable en componentes React


## 🔧 Configuración Técnica

### Dependencias
- **Express**: Servidor web
- **EJS**: Motor de plantillas
- **Glob**: Búsqueda de archivos con patrones

### Stack Frontend Simulado
- **Bootstrap 3.4.1**: Únicamente para x-editable
- **jQuery 3.6.0**: Requerido por x-editable
- **Vue.js 3**: Framework de componentes (CDN)
- **React 18**: Framework de componentes (CDN)
- **X-editable 1.5.1**: Componente a deprecar
