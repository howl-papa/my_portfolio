/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages 배포 최적화 - Static Export
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  
  // 정적 파일 최적화
  images: {
    domains: ['localhost', 'gensparkstorageprodwest.blob.core.windows.net'],
    unoptimized: true, // Cloudflare Pages에서는 이미지 최적화 비활성화
  },
  
  // 빌드 설정
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  
  // 도메인 설정
  assetPrefix: '',
  basePath: '',
  
  // 정적 내보내기를 위한 설정
  generateEtags: false,
  poweredByHeader: false,
  
  // 헤더 설정 (보안)
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}