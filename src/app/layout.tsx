import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '박용락 Yongrak Park - AI 서비스 전략 기획자',
  description: 'AI를 통해 기업의 ROI를 높이는 실행 중심의 전략가. K뷰티 분야 AI 솔루션 개발 및 비즈니스 전략 기획 전문가.',
  keywords: ['AI', '서비스기획', '전략기획', '뷰티테크', '데이터분석', '스타트업'],
  authors: [{ name: 'Yongrak Park' }],
  creator: 'Yongrak Park',
  publisher: 'Yongrak Park',
  openGraph: {
    title: '박용락 Yongrak Park - AI 서비스 전략 기획자',
    description: 'AI를 통해 기업의 ROI를 높이는 실행 중심의 전략가',
    url: 'https://yongrak-portfolio.vercel.app',
    siteName: 'Yongrak Park Portfolio',
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '박용락 Yongrak Park - AI 서비스 전략 기획자',
    description: 'AI를 통해 기업의 ROI를 높이는 실행 중심의 전략가',
    creator: '@yongrak_pro',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}