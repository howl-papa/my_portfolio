import React from 'react';
import FluidGlass from '../components/reactbits/FluidGlass';

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">About Me</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <FluidGlass
            padding="2rem"
            borderRadius={20}
            blur={15}
            bgColor="rgba(255,255,255,0.08)"
            borderColor="rgba(255,255,255,0.15)"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">가치관 & 스토리</h2>
            <div className="space-y-4 text-gray-200">
              <p>
                "진정성 있는 관계의 힘이 있는 대화"를 중시하며, 
                몰입할 때의 힘을 믿는 개발자입니다.
              </p>
              <p>
                AI 기술 발전과 창업을 통해 더 나은 세상을 만들어가고 있으며, 
                지속적인 학습과 성장을 추구합니다.
              </p>
              <p>
                독립출판사 '시선'을 통해 창작 활동을 하며, 
                다양한 관심사를 통해 균형잡힌 삶을 살고 있습니다.
              </p>
            </div>
          </FluidGlass>

          <FluidGlass
            padding="2rem"
            borderRadius={20}
            blur={15}
            bgColor="rgba(255,255,255,0.08)"
            borderColor="rgba(255,255,255,0.15)"
          >
            <h2 className="text-2xl font-semibold text-white mb-4">개인 정보</h2>
            <div className="space-y-3 text-gray-200">
              <div>
                <strong>이름:</strong> [당신의 이름]
              </div>
              <div>
                <strong>전문 분야:</strong> AI 개발, 창업, 투자
              </div>
              <div>
                <strong>관심사:</strong> 기술 혁신, 독립출판, 봉사활동
              </div>
              <div>
                <strong>좌우명:</strong> "진정성 있는 관계의 힘"
              </div>
            </div>
          </FluidGlass>
        </div>

        <FluidGlass
          padding="2rem"
          borderRadius={20}
          blur={15}
          bgColor="rgba(255,255,255,0.08)"
          borderColor="rgba(255,255,255,0.15)"
          width="100%"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">나의 여정</h2>
          <div className="space-y-6 text-gray-200">
            <div className="border-l-4 border-purple-400 pl-6">
              <h3 className="text-xl font-medium text-purple-300 mb-2">AI 개발자로서의 성장</h3>
              <p>
                최신 AI 기술을 활용한 혁신적인 솔루션 개발에 집중하며, 
                실무 경험을 통해 기술적 전문성을 키워나가고 있습니다.
              </p>
            </div>
            
            <div className="border-l-4 border-blue-400 pl-6">
              <h3 className="text-xl font-medium text-blue-300 mb-2">창업과 투자 활동</h3>
              <p>
                스타트업 실전 경험을 바탕으로 혁신적인 아이디어를 현실화하고, 
                투자 활동을 통해 미래 기술 트렌드를 분석합니다.
              </p>
            </div>
            
            <div className="border-l-4 border-green-400 pl-6">
              <h3 className="text-xl font-medium text-green-300 mb-2">독립출판사 '시선' 운영</h3>
              <p>
                창작과 출판을 통해 다양한 이야기를 전달하며, 
                문화 콘텐츠 제작에도 관심을 갖고 활동하고 있습니다.
              </p>
            </div>
          </div>
        </FluidGlass>
      </div>
    </div>
  );
};

export default AboutMe;