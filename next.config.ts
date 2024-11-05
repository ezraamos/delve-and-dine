import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.spoonacular.com',
        port: '', // Leave empty for default
        pathname: '/**', // Allows all paths
      },
    ],
  },
};

export default nextConfig;
