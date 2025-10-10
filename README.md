# 🚀 YCDirectory - Directorio de Startups

<div align="center">

**Un directorio de startups moderno y de alto rendimiento, construido con las últimas tecnologías para ofrecer una experiencia de usuario excepcional.**

</div>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=nextdotjs" alt="Next.js 14">
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" alt="React 18">
  <img src="https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-3-cyan?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Sanity-CMS-orange?style=for-the-badge&logo=sanity" alt="Sanity.io">
</p>

<div align="center">
  <img src="./img/pagina.jpeg" alt="Vista previa de la aplicación YCDirectory" width="800"/>
  
</div>



> [!NOTE]
> Características Principales

- **Interfaz Moderna y Responsiva**: Experiencia de usuario impecable en cualquier dispositivo, desde móviles hasta escritorios.
-**Rendimiento de Vanguardia**: Cargas casi instantáneas gracias a Next.js 14 con Server Side Rendering (SSR) y Static Site Generation (SSG).
- **Búsqueda Avanzada y Filtros**: Encuentra startups por nombre, sector, tecnologías o ubicación de forma rápida y precisa.
- **Contenido Dinámico**: Gestión de datos en tiempo real a través del headless CMS Sanity.io.
- **Autenticación Segura**: Sistema de registro e inicio de sesión robusto y seguro implementado con NextAuth.js.
- **Monitorización de Errores**: Integración con Sentry para la detección y resolución proactiva de problemas.
- **Componentes Reutilizables**: UI construida con Shadcn/ui, garantizando accesibilidad y consistencia.

> [!IMPORTANT]
> 🛠️ Stack Tecnológico

Este proyecto integra un conjunto de tecnologías modernas para garantizar escalabilidad, rendimiento y una excelente experiencia de desarrollo.

### Frontend
| Tecnología | Descripción |
| :--- | :--- |
| **Next.js 14** | Framework de React para producción con renderizado híbrido. |
| **TypeScript** | Superset de JavaScript con tipado estático para un código más robusto. |
| **Tailwind CSS** | Framework CSS utility-first para un diseño rápido y personalizable. |
| **Shadcn/ui** | Componentes de UI accesibles y componibles. |
| **React Hook Form** | Manejo de formularios performante y flexible. |
| **Zod** | Validación de esquemas para TypeScript. |
| **Framer Motion** | Biblioteca para crear animaciones fluidas y complejas. |

### Backend y Datos
| Tecnología | Descripción |
| :--- | :--- |
| **Next.js API Routes** | Creación de endpoints de API serverless. |
| **NextAuth.js** | Solución completa de autenticación para Next.js. |
| **Sanity.io** | Headless CMS para la gestión de contenido estructurado. |
| **MongoDB** | Base de datos NoSQL utilizada como almacenamiento principal. |

### Herramientas de Desarrollo y DevOps
| Herramienta | Descripción |
| :--- | :--- |
| **ESLint** | Linter para identificar y corregir problemas en el código. |
| **Prettier** | Formateador de código para mantener un estilo consistente. |
| **Husky & Commitlint** | Git hooks para automatizar la calidad y el formato de los commits. |
| **Sentry** | Monitorización de errores y rendimiento en tiempo real. |
| **Vercel** | Plataforma de despliegue continuo y hosting optimizada para Next.js. |

> [!TIP]
> 🚀 Cómo Empezar

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.

### Requisitos Previos

- **Node.js**: Versión 18.17 o superior.
- **npm** o **yarn**: Gestor de paquetes.
- **Cuenta en Sanity.io**: Para gestionar el contenido del directorio.
- **Base de datos MongoDB**: Puedes usar una instancia local o en la nube (MongoDB Atlas).

### Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone [https://github.com/tu-usuario/YCDirectory.git](https://github.com/tu-usuario/YCDirectory.git)
    cd YCDirectory
    ```

2.  **Instala las dependencias:**
    ```bash
    npm install
    # o
    yarn install
    ```

3.  **Configura las variables de entorno:**
    Crea un archivo `.env.local` en la raíz del proyecto y añade las siguientes variables. Puedes usar `.env.example` como plantilla.
    ```env
    # MongoDB
    MONGODB_URI=tu_uri_de_mongodb

    # NextAuth
    NEXTAUTH_SECRET=genera_un_secret_aqui
    NEXTAUTH_URL=http://localhost:3000
    GITHUB_ID=tu_github_client_id
    GITHUB_SECRET=tu_github_client_secret

    # Sanity.io
    SANITY_API_TOKEN=tu_token_de_sanity
    NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id_de_sanity
    NEXT_PUBLIC_SANITY_DATASET=production

    # Sentry
    SENTRY_DSN=tu_dsn_de_sentry
    ```

4.  **Ejecuta el proyecto:**
    ```bash
    npm run dev
    # o
    yarn dev
    ```

¡Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación en funcionamiento!

