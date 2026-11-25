import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/access-vision',
  /* config options here */
  reactCompiler: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
};

export default nextConfig;
