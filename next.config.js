/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
      },
    ],
  },

  reactStrictMode: true,
};

module.exports = nextConfig;
