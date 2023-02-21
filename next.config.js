/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true, // next export not support :<
  },
  experimental: {
    runtime: 'edge'
  }
}

module.exports = nextConfig
