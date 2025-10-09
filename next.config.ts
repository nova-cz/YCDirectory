import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración de errores para ignorar durante la compilación
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Configuración de IMÁGENES
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.basehub.com', 
      },
    ],
  },
  
  // 🧹 Configuraciones de desarrollo LIMPIAS y RENOMBRADAS
  devIndicators: {
    // buildActivityPosition renombrado a position
    position: "bottom-right", 
    // appIsrStatus y buildActivity fueron eliminados
  },
  
  // ❌ Se eliminó la sección 'experimental' para evitar el CanaryOnlyError
  // experimental: {
  //   ppr: "incremental",
  // },
};

export default nextConfig;