import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enables React Strict Mode for development (optional)
  eslint: {
    // Ignore ESLint errors during build (optional, useful for deployment)
    ignoreDuringBuilds: true,
  },
  // Additional configuration options can go here
  swcMinify: true, // Enable SWC minification (optional for performance)
};

export default nextConfig;
