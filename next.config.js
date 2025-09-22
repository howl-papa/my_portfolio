/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages 배포 최적화
  output: 'export',
  trailingSlash: true,
  images: {
    domains: ['localhost', 'gensparkstorageprodwest.blob.core.windows.net'],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
}