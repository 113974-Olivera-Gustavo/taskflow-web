# Copilot Instructions for Taskflow

## Arquitectura general
- Proyecto Angular con estructura estándar (`src/app`, `src/assets`, `src/environments`).
- El frontend se encuentra en `src/`, con componentes en `src/app/components/` y widgets reutilizables en `src/app/widgets/`.
- El archivo `server.ts` sugiere posible renderizado del lado del servidor (SSR) o integración backend.
- Los servicios están en `src/app/services/`, utilidades en `src/app/utils/` y modelos en `src/app/models/`.

## Flujos de desarrollo
- **Servidor de desarrollo:** `ng serve` (puerto 4200 por defecto).
- **Build:** `ng build` (output en `dist/`).
- **Tests unitarios:** `ng test` (Karma).
- **Tests end-to-end:** `ng e2e` (requiere configuración adicional).
- **Comandos npm:**
  - `npm start` inicia el servidor de desarrollo.
  - `npm test` ejecuta pruebas unitarias.

## Convenciones y patrones
- Componentes agrupados por funcionalidad en subcarpetas (`home`, `landing-page`, `navbar`).
- Uso de módulos Angular (`material.module.ts` para Material Design).
- Archivos de configuración separados para SSR (`main.server.ts`, `app.config.server.ts`).
- Estilos globales en `src/styles.scss`.
- Los servicios siguen el patrón singleton y se ubican en `services/`.
- Utilidades y constantes globales en `utils/` y `globalConstant.ts`.

## Integraciones y dependencias
- Angular Material (`material.module.ts`).
- Posible SSR o integración Node.js (`server.ts`).
- Estructura lista para agregar guards, modelos y vistas personalizadas.

## Ejemplo de flujo de trabajo
1. Crear componente: `ng generate component components/nuevo-componente`
2. Agregar servicio: `ng generate service services/nuevo-servicio`
3. Ejecutar pruebas: `npm test`
4. Construir para producción: `ng build --configuration production`

## Archivos clave
- `angular.json`, `tsconfig.json`, `package.json`: configuración principal del proyecto.
- `server.ts`: integración backend/SSR.
- `src/app/material.module.ts`: configuración de Angular Material.
- `src/app/components/`, `src/app/widgets/`: ejemplos de organización de UI.

## Notas para agentes
- Mantener la organización modular y la nomenclatura consistente.
- Priorizar la reutilización de widgets y servicios existentes.
- Documentar patrones nuevos en este archivo.
