/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
