import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "reintenspark.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    qualities: [100, 75],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: {},
  experimental: {
    optimizePackageImports: ['framer-motion', 'react-icons'],
    // Speed up development compilation
    optimizeCss: false, // Disable in dev for faster builds
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Faster dev compilation
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.cache = {
        type: 'filesystem',
        buildDependencies: {
          config: [__filename],
        },
      };
      // Reduce module resolution time
      config.resolve = {
        ...config.resolve,
        symlinks: false,
      };
    }
    return config;
  },
  // Optimize dev server
  ...(process.env.NODE_ENV === 'development' && {
    onDemandEntries: {
      // Period (in ms) where the server will keep pages in the buffer
      maxInactiveAge: 60 * 1000,
      // Number of pages that should be kept simultaneously without being disposed
      pagesBufferLength: 5,
    },
  }),
};

export default nextConfig;
