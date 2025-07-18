# NC Deployment - Backend Server

## 📋 Descripción

API REST desarrollada con NestJS y TypeScript que sirve como backend para la aplicación NC Deployment. Esta API proporciona endpoints para gestionar información y servicios de la aplicación.

## 🛠️ Tecnologías

- **Framework**: NestJS 11.x
- **Lenguaje**: TypeScript
- **Runtime**: Node.js
- **Herramientas de desarrollo**:
  - Nodemon para hot-reload en desarrollo
  - ESLint y Prettier para calidad de código
  - Jest para testing unitario y e2e
  - SWC para compilación rápida

## 📁 Estructura del Proyecto

```
src/
├── app.module.ts           # Módulo principal de la aplicación
├── main.ts                 # Punto de entrada de la aplicación
├── common/                 # Utilidades comunes
│   └── constants.ts
├── config/                 # Configuración de la aplicación
│   └── configuration.ts
├── interfaces/             # Definiciones de tipos e interfaces
└── modules/                # Módulos de funcionalidad
    └── info/               # Módulo de información
        ├── info.controller.ts
        ├── info.module.ts
        └── info.services.ts
```

## 🚀 Configuración

### Prerequisitos

- Node.js (v18 o superior)
- npm o yarn

### Instalación

1. **Instalar dependencias**

```bash
npm install
```

2. **Configurar variables de entorno**
   Crear un archivo `.env` basado en `.env.example` (si existe) o configurar las variables necesarias.

### Ejecución

```bash
# Desarrollo con hot-reload
npm run start:dev

# Producción
npm run start:prod

# Modo debug
npm run start:debug
```

El servidor se ejecutará en `http://localhost:3000` por defecto.

## 🐳 Docker

Para ejecutar con Docker:

```bash
# Construir y ejecutar
docker-compose up --build

# Solo ejecutar (si ya está construido)
docker-compose up
```

## 🔧 Scripts Disponibles

```bash
npm run build          # Compilar el proyecto
npm run format         # Formatear código con Prettier
npm run start          # Iniciar aplicación
npm run start:dev      # Desarrollo con hot-reload
npm run start:debug    # Modo debug
npm run start:prod     # Producción
npm run lint           # Linter con ESLint
npm run test           # Tests unitarios
npm run test:watch     # Tests en modo watch
npm run test:cov       # Coverage de tests
npm run test:debug     # Tests en modo debug
npm run test:e2e       # Tests end-to-end
```

## 📡 API Endpoints

### Info Module

- **GET** `/info` - Obtener información del sistema

```bash
curl http://localhost:3000/info
```

## 🧪 Testing

### Tests Unitarios

```bash
npm run test
```

### Tests E2E

```bash
npm run test:e2e
```

### Coverage

```bash
npm run test:cov
```

## 📝 Configuración

El servidor utiliza `@nestjs/config` para la gestión de configuración. Las variables de entorno se pueden configurar en:

- Archivo `.env`
- Variables de sistema
- Configuración por defecto en `src/config/configuration.ts`

### Variables de Entorno Principales

- `PORT` - Puerto del servidor (default: 3000)
- `NODE_ENV` - Entorno de ejecución (development/production)

## 🏗️ Arquitectura

La aplicación sigue la arquitectura modular de NestJS:

- **Controllers**: Manejan las peticiones HTTP
- **Services**: Contienen la lógica de negocio
- **Modules**: Organizan y encapsulan funcionalidades
- **Config**: Configuración centralizada de la aplicación

## 🔒 CORS

El servidor tiene CORS habilitado para permitir peticiones desde el frontend. La configuración se encuentra en `main.ts`.

## 📋 Desarrollo

### Estructura de Archivos

- Cada módulo debe tener su controller, service y module
- Los interfaces y tipos van en la carpeta `interfaces/`
- Las constantes comunes en `common/constants.ts`
- La configuración en `config/configuration.ts`

### Estándares de Código

- ESLint para linting
- Prettier para formateo
- TypeScript estricto
- Tests requeridos para nuevas funcionalidades

## 🚀 Despliegue

Para producción:

1. Compilar el proyecto: `npm run build`
2. Configurar variables de entorno de producción
3. Ejecutar: `npm run start:prod`

## 📚 Recursos

- [Documentación de NestJS](https://docs.nestjs.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

Para información del proyecto completo, consulta el README principal en la raíz del repositorio.

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
