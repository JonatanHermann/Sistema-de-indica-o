import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,  // ✅ Mantém o modo estrito

  // ✅ Permite acessar via IP local, tipo 192.168.x.x:3000
  // devIndicators: {
  //   buildActivity: true,
  // },

  // ✅ Opcional, melhora source maps só se tiver muito erro de stack trace
  productionBrowserSourceMaps: false,
};

export default nextConfig;
