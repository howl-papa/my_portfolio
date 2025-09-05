import React from 'react';
import { Link } from 'react-router-dom';
import DomeGallery, { GalleryItem } from '../components/reactbits/DomeGallery';
import FluidGlass from '../components/reactbits/FluidGlass';

const HobbiesGallery: React.FC = () => {
  // 샘플 이미지들 - 실제 프로젝트에서는 실제 이미지로 교체해주세요
  const hobbyItems: GalleryItem[] = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop',
      alt: '독서',
      title: '독서',
      description: '다양한 장르의 책을 통해 지식과 영감을 얻습니다.'
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1484069560501-87d72b0c3669?w=400&h=600&fit=crop',
      alt: '사진 촬영',
      title: '사진 촬영',
      description: '일상의 아름다운 순간들을 카메라에 담습니다.'
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=600&fit=crop',
      alt: '요리',
      title: '요리',
      description: '새로운 레시피에 도전하며 창의성을 발휘합니다.'
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=600&fit=crop',
      alt: '음악',
      title: '음악',
      description: '기타와 피아노를 통해 감정을 표현합니다.'
    },
    {
      id: '5',
      src: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=400&h=600&fit=crop',
      alt: '등산',
      title: '등산',
      description: '자연 속에서 몸과 마음을 재충전합니다.'
    },
    {
      id: '6',
      src: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=600&fit=crop',
      alt: '그림 그리기',
      title: '그림 그리기',
      description: '수채화와 스케치를 통해 예술적 감성을 키웁니다.'
    },
    {
      id: '7',
      src: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=600&fit=crop',
      alt: '여행',
      title: '여행',
      description: '새로운 문화와 경험을 통해 시야를 넓힙니다.'
    },
    {
      id: '8',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
      alt: '운동',
      title: '운동',
      description: '건강한 몸과 정신을 유지하기 위한 꾸준한 운동.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <Link 
            to="/library" 
            className="inline-flex items-center text-emerald-300 hover:text-emerald-200 mb-4"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Library
          </Link>
          <h1 className="text-4xl font-bold text-white mb-4">취미부자 갤러리</h1>
          <p className="text-gray-300 text-lg">다양한 취미 활동을 통한 창의적인 여정</p>
        </div>

        {/* Dome Gallery */}
        <DomeGallery 
          items={hobbyItems} 
          autoRotate={false}
          className="mb-12"
        />

        {/* 취미 카테고리 정보 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FluidGlass
            padding="1.5rem"
            borderRadius={16}
            blur={12}
            bgColor="rgba(255,255,255,0.06)"
            borderColor="rgba(168,85,247,0.3)"
          >
            <div className="text-center">
              <div className="text-2xl mb-3">🎨</div>
              <h3 className="font-semibold text-purple-300 mb-2">창작 활동</h3>
              <p className="text-sm text-gray-300">그림, 음악, 글쓰기를 통한 예술적 표현</p>
            </div>
          </FluidGlass>

          <FluidGlass
            padding="1.5rem"
            borderRadius={16}
            blur={12}
            bgColor="rgba(255,255,255,0.06)"
            borderColor="rgba(59,130,246,0.3)"
          >
            <div className="text-center">
              <div className="text-2xl mb-3">🏃</div>
              <h3 className="font-semibold text-blue-300 mb-2">액티브</h3>
              <p className="text-sm text-gray-300">등산, 운동을 통한 건강한 라이프스타일</p>
            </div>
          </FluidGlass>

          <FluidGlass
            padding="1.5rem"
            borderRadius={16}
            blur={12}
            bgColor="rgba(255,255,255,0.06)"
            borderColor="rgba(34,197,94,0.3)"
          >
            <div className="text-center">
              <div className="text-2xl mb-3">🧠</div>
              <h3 className="font-semibold text-green-300 mb-2">지적 탐구</h3>
              <p className="text-sm text-gray-300">독서와 학습을 통한 지식 확장</p>
            </div>
          </FluidGlass>

          <FluidGlass
            padding="1.5rem"
            borderRadius={16}
            blur={12}
            bgColor="rgba(255,255,255,0.06)"
            borderColor="rgba(245,101,101,0.3)"
          >
            <div className="text-center">
              <div className="text-2xl mb-3">🌍</div>
              <h3 className="font-semibold text-red-300 mb-2">경험</h3>
              <p className="text-sm text-gray-300">여행과 새로운 도전을 통한 성장</p>
            </div>
          </FluidGlass>
        </div>

        {/* 취미 철학 */}
        <div className="mt-12">
          <FluidGlass
            padding="2rem"
            borderRadius={20}
            blur={15}
            bgColor="rgba(255,255,255,0.08)"
            borderColor="rgba(255,255,255,0.15)"
            width="100%"
          >
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">취미를 통한 균형잡힌 삶</h2>
            <p className="text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              다양한 취미 활동은 단순한 여가가 아닌, 창의성과 영감의 원천입니다. 
              각각의 활동을 통해 새로운 관점을 얻고, 일상의 스트레스를 해소하며, 
              더 나은 사람이 되기 위한 여정을 이어가고 있습니다. 
              특히 창작 활동을 통해 얻은 경험들은 개발 업무에서도 큰 도움이 되고 있으며, 
              운동과 자연 활동을 통해 몸과 마음의 건강을 유지하고 있습니다.
            </p>
          </FluidGlass>
        </div>
      </div>
    </div>
  );
};

export default HobbiesGallery;