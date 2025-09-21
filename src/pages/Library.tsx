import React from 'react';
import { Link } from 'react-router-dom';
import FluidGlass from '../components/reactbits/FluidGlass';

const Library: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">Library</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 독립출판사 시선 */}
          <FluidGlass
            padding="2rem"
            borderRadius={20}
            blur={15}
            bgColor="rgba(255,255,255,0.08)"
            borderColor="rgba(168,85,247,0.3)"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">📚</div>
              <h2 className="text-2xl font-semibold text-purple-300 mb-4">독립출판사 시선</h2>
              <p className="text-gray-300 mb-6">
                창작과 출판을 통해 다양한 이야기를 전달하는 독립출판사입니다.
                문학, 에세이, 시집 등 다양한 장르의 책을 출간하고 있습니다.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">주요 출간작</div>
                <div className="text-white">• 에세이집 "삶의 조각들"</div>
                <div className="text-white">• 시집 "마음의 풍경"</div>
                <div className="text-white">• 단편소설집 "시간의 흔적"</div>
              </div>
            </div>
          </FluidGlass>

          {/* 봉사활동 */}
          <FluidGlass
            padding="2rem"
            borderRadius={20}
            blur={15}
            bgColor="rgba(255,255,255,0.08)"
            borderColor="rgba(59,130,246,0.3)"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h2 className="text-2xl font-semibold text-blue-300 mb-4">봉사활동</h2>
              <p className="text-gray-300 mb-6">
                지역 사회와 함께하는 다양한 봉사활동을 통해 
                나눔의 가치를 실천하고 있습니다.
              </p>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">주요 활동</div>
                <div className="text-white">• 코딩 교육 봉사 (월 4회)</div>
                <div className="text-white">• 독서 멘토링</div>
                <div className="text-white">• 지역아동센터 후원</div>
                <div className="text-white">• 환경 정화 활동</div>
              </div>
            </div>
          </FluidGlass>

          {/* 취미부자 */}
          <FluidGlass
            padding="2rem"
            borderRadius={20}
            blur={15}
            bgColor="rgba(255,255,255,0.08)"
            borderColor="rgba(34,197,94,0.3)"
          >
            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h2 className="text-2xl font-semibold text-green-300 mb-4">취미부자</h2>
              <p className="text-gray-300 mb-6">
                다양한 취미 활동을 통해 균형 잡힌 삶을 추구하며,
                창의성과 영감을 얻고 있습니다.
              </p>
              <div className="space-y-4">
                <Link 
                  to="/library/hobbies"
                  className="inline-block px-6 py-3 bg-green-500/20 hover:bg-green-500/30 
                           text-green-300 rounded-lg transition-colors border border-green-500/30
                           hover:border-green-500/50"
                >
                  갤러리 보기
                </Link>
              </div>
            </div>
          </FluidGlass>
        </div>

        {/* 세부 정보 섹션 */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <FluidGlass
            padding="2rem"
            borderRadius={20}
            blur={15}
            bgColor="rgba(255,255,255,0.08)"
            borderColor="rgba(255,255,255,0.15)"
          >
            <h3 className="text-xl font-semibold text-white mb-4">출판 철학</h3>
            <p className="text-gray-300 leading-relaxed">
              독립출판사 '시선'을 통해 작가들의 진솔한 목소리를 세상에 전달하고 있습니다. 
              상업성보다는 문학적 가치와 사회적 메시지를 중요시하며, 
              독자들과 작가를 연결하는 다리 역할을 하고자 합니다.
            </p>
          </FluidGlass>

          <FluidGlass
            padding="2rem"
            borderRadius={20}
            blur={15}
            bgColor="rgba(255,255,255,0.08)"
            borderColor="rgba(255,255,255,0.15)"
          >
            <h3 className="text-xl font-semibold text-white mb-4">나눔의 가치</h3>
            <p className="text-gray-300 leading-relaxed">
              기술적 지식과 경험을 지역 사회와 나누며, 
              다음 세대가 더 나은 환경에서 성장할 수 있도록 돕고 있습니다. 
              봉사활동을 통해 받는 것이 주는 것보다 더 크다는 것을 매번 느끼고 있습니다.
            </p>
          </FluidGlass>
        </div>
      </div>
    </div>
  );
};

export default Library;