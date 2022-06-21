/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'default',
    domains: ['https://strapi-4197.onrender.com/'],
  },
}

module.exports = nextConfig
