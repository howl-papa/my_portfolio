/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages 배포 최적화
  output: 'export',
  trailingSlash: false,
  distDir: 'out',
  images: {
    domains: ['localhost', 'gensparkstorageprodwest.blob.core.windows.net'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Cloudflare Pages 최적화
  compress: true,
  generateEtags: false,
  poweredByHeader: false,
}

module.exports = nextConfig