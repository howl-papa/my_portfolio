import React from 'react';
import FluidGlass from '../components/reactbits/FluidGlass';

const MyWorks: React.FC = () => {
  const aiProjects = [
    {
      title: "AI 프로젝트 1",
      description: "머신러닝을 활용한 데이터 분석 시스템",
      tech: ["Python", "TensorFlow", "React"],
      status: "완료"
    },
    {
      title: "AI 프로젝트 2",
      description: "자연어 처리 기반 챗봇 개발",
      tech: ["Python", "NLP", "FastAPI"],
      status: "진행중"
    }
  ];

  const startupProjects = [
    {
      title: "스타트업 A",
      description: "AI 기반 솔루션 스타트업 창업",
      role: "CTO",
      period: "2023 - 현재"
    },
    {
      title: "스타트업 B",
      description: "모바일 앱 서비스 개발",
      role: "Co-founder",
      period: "2022 - 2023"
    }
  ];

  const investments = [
    {
      company: "투자 회사 1",
      sector: "AI/ML",
      stage: "Series A",
      description: "혁신적인 AI 솔루션 개발 회사"
    },
    {
      company: "투자 회사 2",
      sector: "Fintech",
      stage: "Seed",
      description: "금융 기술 스타트업"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">My Works</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AI 프로젝트 섹션 */}
          <FluidGlass
            padding="2rem"
            borderRadius={20}
            blur={15}
            bgColor="rgba(255,255,255,0.08)"
            borderColor="rgba(124,92,255,0.3)"
            className="lg:col-span-1"
          >
            <h2 className="text-2xl font-semibold text-purple-300 mb-6">AI 프로젝트</h2>
            <div className="space-y-4">
              {aiProjects.map((project, index) => (
                <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <h3 className="text-lg font-medium text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      project.status === '완료' 
                        ? 'bg-green-500/20 text-green-300' 
                        : 'bg-yellow-500/20 text-yellow-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FluidGlass>

          {/* 창업 섹션 */}
          <FluidGlass
            padding="2rem"
            borderRadius={20}
            blur={15}
            bgColor="rgba(255,255,255,0.08)"
            borderColor="rgba(59,130,246,0.3)"
            className="lg:col-span-1"
          >
            <h2 className="text-2xl font-semibold text-blue-300 mb-6">창업 (스타트업 실전)</h2>
            <div className="space-y-4">
              {startupProjects.map((startup, index) => (
                <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <h3 className="text-lg font-medium text-white mb-2">{startup.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{startup.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-blue-300 font-medium">{startup.role}</span>
                    <span className="text-gray-400">{startup.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </FluidGlass>

          {/* 투자 섹션 */}
          <FluidGlass
            padding="2rem"
            borderRadius={20}
            blur={15}
            bgColor="rgba(255,255,255,0.08)"
            borderColor="rgba(34,197,94,0.3)"
            className="lg:col-span-1"
          >
            <h2 className="text-2xl font-semibold text-green-300 mb-6">투자 활동</h2>
            <div className="space-y-4">
              {investments.map((investment, index) => (
                <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                  <h3 className="text-lg font-medium text-white mb-2">{investment.company}</h3>
                  <p className="text-gray-300 text-sm mb-3">{investment.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-green-300 font-medium">{investment.sector}</span>
                    <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-xs">
                      {investment.stage}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </FluidGlass>
        </div>

        {/* 성과 요약 섹션 */}
        <div className="mt-12">
          <FluidGlass
            padding="2rem"
            borderRadius={20}
            blur={15}
            bgColor="rgba(255,255,255,0.08)"
            borderColor="rgba(255,255,255,0.15)"
            width="100%"
          >
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">주요 성과</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-300">AI 프로젝트</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
                <div className="text-gray-300">창업 경험</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
                <div className="text-gray-300">투자 포트폴리오</div>
              </div>
            </div>
          </FluidGlass>
        </div>
      </div>
    </div>
  );
};

export default MyWorks;