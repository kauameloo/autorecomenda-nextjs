import type { NextConfig } from "next";

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8080/:path*', // URL da sua API
      },
    ];
  },
};

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['avatars.githubusercontent.com', 'media.licdn.com'],
  },
};


export default nextConfig;
