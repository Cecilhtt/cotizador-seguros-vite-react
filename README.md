# 🏠 Cotizador de Seguros de Hogar

Simulador interactivo de cotización de seguros desarrollado con React como proyecto final del curso Front End.

## Descripción

Aplicación web que permite a los usuarios cotizar seguros de hogar de manera rápida e interactiva. El sistema calcula diferentes opciones de cobertura basándose en datos personales y características de la propiedad.

## Características Principales

- ✅ Formulario interactivo con validación en tiempo real
- ✅ Cálculo dinámico de cotizaciones según múltiples factores
- ✅ 3 opciones de cobertura (Básica, Plus, Premium)
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Interfaz moderna con imágenes de fondo personalizadas
- ✅ Mensajes de error descriptivos
- ✅ Animación de carga durante el cálculo

## Tecnologías Utilizadas

- **React 18+** - Librería de interfaz de usuario
- **Vite** - Herramienta de build y desarrollo
- **CSS3** - Estilos personalizados con diseño responsive
- **JavaScript ES6+** - Lógica de la aplicación

## Estructura del Proyecto
```
cotizador-seguros/
├── public/
│   └── images/              # Imágenes de fondo
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.jsx
│   │   ├── FormularioCotizador.jsx
│   │   └── ResultadoCotizacion.jsx
│   ├── utils/               # Lógica de negocio
│   │   └── calcularCotizacion.js
│   ├── styles/              # Archivos CSS
│   │   ├── App.css
│   │   ├── Formulario.css
│   │   └── Resultado.css
│   ├── App.jsx              # Componente principal
│   └── main.jsx             # Punto de entrada
├── package.json
├── vite.config.js
└── README.md
```

## Instalación y Uso

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 16 o superior) - [Descargar aquí](https://nodejs.org/)
- **npm** (se instala automáticamente con Node.js)

### Pasos para ejecutar localmente

1. **Clonar o descargar el repositorio**
   
   Si usas Git:
```bash
   git clone [URL-DEL-REPOSITORIO]
   cd cotizador-seguros
```
   
   O descarga el ZIP y descomprímelo.

2. **Instalar dependencias**
```bash
   npm install
```

3. **Iniciar servidor de desarrollo**
```bash
   npm run dev
```

4. **Abrir en el navegador**
   
   El proyecto se abrirá automáticamente en:
```
   http://localhost:5173
```

5. **Compilar para producción** (opcional)
```bash
   npm run build
```

## Funcionamiento del Algoritmo

### Factores que influyen en el cálculo

El sistema calcula el precio del seguro considerando:

**1. Precio Base**
- 2% del valor anual de la propiedad

**2. Factor por Edad**
- Menores de 25 años: +30% (mayor riesgo)
- 25-39 años: precio normal
- 40-59 años: -10% (menor riesgo)
- 60+ años: +10% (mayores cuidados)

**3. Factor por Tipo de Propiedad**
- Casa: +20% (mayor mantenimiento)
- Departamento: precio normal
- Duplex: +15%

**4. Factor por Tamaño**
- Menos de 50 m²: -10%
- 50-99 m²: precio normal
- 100-199 m²: +20%
- 200+ m²: +50%

### Validaciones Implementadas

| Campo | Validación |
|-------|------------|
| Nombre | Mínimo 3 caracteres |
| Edad | Entre 18 y 100 años |
| Tipo de propiedad | Selección obligatoria |
| Metros cuadrados | Entre 20 y 1000 m² |
| Valor de propiedad | Entre USD 10,000 y USD 10,000,000 |

##  Opciones de Cobertura

### Básica
Protección esencial que incluye:
- Incendio
- Robo con violencia
- Daños por agua
- Responsabilidad civil básica

### Plus (Recomendada) ⭐
Todo lo anterior más:
- Fenómenos naturales
- Daños eléctricos
- Rotura de cristales
- Responsabilidad civil ampliada

### Premium
Cobertura completa que incluye:
- Todo lo de Plus
- Terremoto e inundación
- Robo sin violencia
- Electrodomésticos
- Asistencia 24/7
- Hogar sustituto

## Paleta de Colores

| Uso | Colores |
|-----|---------|
| Fondos principales | Arena claro (#fefdfb, #f5f0e8) |
| Bordes y separadores | Arena medio (#e8dfd0, #d4c5b0) |
| Textos principales | Negro suave (#2c2c2c) |
| Textos secundarios | Gris (#5a5a5a) |
| Acentos y botones | Celeste cielo (#87CEEB) |

## Diseño Responsive

La aplicación se adapta a diferentes dispositivos:

- **Desktop (> 900px):** Grid de 3 columnas para las tarjetas
- **Tablet (768px - 900px):** Tarjetas en una columna
- **Móvil (< 768px):** Diseño optimizado y compacto

## Ejemplo de Uso

Para probar la aplicación, puedes usar estos datos:
```
Nombre: Juan Pérez
Edad: 35
Tipo de propiedad: Departamento
Metros cuadrados: 80
Valor de la propiedad: 100000
```

**Resultado esperado:** Aproximadamente $110-140 USD/mes en plan básico

## Conceptos de React Aplicados

Este proyecto demuestra el uso de:

- ✅ Componentes funcionales y composición
- ✅ Hooks: `useState` para manejo de estado
- ✅ Props para comunicación entre componentes
- ✅ Eventos: `onChange`, `onSubmit`, `onClick`
- ✅ Renderizado condicional
- ✅ Renderizado de listas con `.map()`
- ✅ Formularios controlados
- ✅ Validación de formularios
- ✅ Organización de estilos por componente

## 📝 Notas de Desarrollo

### Comandos útiles
```bash
npm run dev          # Inicia servidor de desarrollo
npm run build        # Compila para producción
npm run preview      # Previsualiza build de producción
```

### Estructura de componentes
```
App
├── Header
└── FormularioCotizador
    └── ResultadoCotizacion
```

## Autor

**Cecilia Lahitte**

Estudiante de UNTREF

Curso: Front End - React

Año: 2025

Este proyecto fue desarrollado como trabajo final para el curso Front End de UNTREF.

---

 Proyecto desarrollado con React + Vite

