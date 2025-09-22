const fs = require('fs');
const path = require('path');
const { portfolioData } = require('./src/data/portfolio.ts');

// 정적 HTML 템플릿 생성
const generateStaticHTML = () => {
  const html = `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${portfolioData.personalInfo.name} - AI 서비스 전략 기획자</title>
    <meta name="description" content="AI를 통해 기업의 ROI를 높이는 실행 중심의 전략가">
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
        .bg-gradient { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
        .glass { backdrop-filter: blur(10px); background: rgba(255, 255, 255, 0.1); }
    </style>
</head>
<body class="antialiased bg-gray-50">
    <!-- Fixed Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-white shadow-md z-50 border-b">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex items-center justify-between h-16">
                <h1 class="text-xl font-bold text-gray-800">박용락 Portfolio</h1>
                <div class="hidden md:flex space-x-6">
                    <a href="#home" class="text-gray-600 hover:text-blue-600 transition-colors">홈</a>
                    <a href="#documents" class="text-gray-600 hover:text-blue-600 transition-colors">문서 다운로드</a>
                    <a href="#about" class="text-gray-600 hover:text-blue-600 transition-colors">소개</a>
                    <a href="#projects" class="text-gray-600 hover:text-blue-600 transition-colors">AI 프로젝트</a>
                    <a href="#experience" class="text-gray-600 hover:text-blue-600 transition-colors">경력</a>
                    <a href="#skills" class="text-gray-600 hover:text-blue-600 transition-colors">스킬</a>
                    <a href="#contact" class="text-gray-600 hover:text-blue-600 transition-colors">연락처</a>
                </div>
            </div>
        </div>
    </nav>

    <div class="pt-16">
        <!-- Hero Section -->
        <section id="home" class="bg-gradient text-white py-20">
            <div class="max-w-6xl mx-auto px-4 text-center">
                <h1 class="text-5xl font-bold mb-6">${portfolioData.personalInfo.name}</h1>
                <p class="text-xl mb-8">AI를 통해 기업의 ROI를 높이는 실행 중심의 전략가</p>
                <div class="flex justify-center space-x-4">
                    <a href="#contact" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">연락하기</a>
                    <a href="#documents" class="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">이력서 다운로드</a>
                </div>
            </div>
        </section>

        <!-- Documents Section -->
        <section id="documents" class="py-16 bg-white">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">📄 문서 다운로드</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <div class="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg">
                        <h3 class="text-xl font-bold mb-4">상세 프로필</h3>
                        <p class="mb-4">개인 프로필 및 핵심 역량 정보</p>
                        <a href="/Profile_Updated.html" download class="inline-block bg-white text-blue-600 px-6 py-2 rounded font-medium hover:bg-gray-100 transition-colors">다운로드</a>
                    </div>
                    <div class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-lg">
                        <h3 class="text-xl font-bold mb-4">이력서 (CV)</h3>
                        <p class="mb-4">상세 경력 및 프로젝트 정보</p>
                        <a href="/CV_Updated.html" download class="inline-block bg-white text-purple-600 px-6 py-2 rounded font-medium hover:bg-gray-100 transition-colors">다운로드</a>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-16 bg-gray-50">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">👨‍💼 소개</h2>
                <div class="bg-white p-8 rounded-lg shadow-md">
                    <p class="text-lg leading-relaxed mb-6">
                        AI를 통해 기업의 ROI를 높이는 <strong>실행 중심의 전략가</strong>입니다. 
                        K뷰티 분야에서 AI 솔루션 개발과 비즈니스 전략 기획을 결합하여 
                        실질적인 성과를 창출합니다.
                    </p>
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <h3 class="font-bold text-lg mb-2">🎯 핵심 가치</h3>
                            <ul class="list-disc list-inside text-gray-700">
                                <li>Responsible AI 구현</li>
                                <li>데이터 기반 의사결정</li>
                                <li>실행 중심 전략 기획</li>
                                <li>크로스 도메인 전문성</li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="font-bold text-lg mb-2">📊 주요 성과</h3>
                            <ul class="list-disc list-inside text-gray-700">
                                <li>Microsoft AI School 캡스톤 리딩</li>
                                <li>VID Investment 85건 기업분석</li>
                                <li>Life Enjoy 35% 성장률 달성</li>
                                <li>98% 고객 만족도</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="py-16 bg-white">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">🚀 AI 프로젝트</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    ${portfolioData.projects.map(project => `
                        <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border">
                            <h3 class="text-xl font-bold mb-3">${project.title}</h3>
                            <p class="text-gray-700 mb-4">${project.description}</p>
                            <div class="mb-4">
                                <h4 class="font-medium mb-2">🛠️ 기술 스택:</h4>
                                <div class="flex flex-wrap gap-2">
                                    ${project.technologies.map(tech => `<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">${tech}</span>`).join('')}
                                </div>
                            </div>
                            ${project.results ? `
                                <div class="mb-4">
                                    <h4 class="font-medium mb-2">📈 성과:</h4>
                                    <ul class="list-disc list-inside text-sm text-gray-700">
                                        ${project.results.map(result => `<li>${result}</li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                            ${project.githubUrl ? `
                                <a href="${project.githubUrl}" class="inline-flex items-center text-blue-600 hover:text-blue-800">
                                    <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                                    </svg>
                                    GitHub
                                </a>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Experience Section -->
        <section id="experience" class="py-16 bg-gray-50">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">💼 경력</h2>
                <div class="space-y-6">
                    ${portfolioData.experiences.map(exp => `
                        <div class="bg-white p-6 rounded-lg shadow-md">
                            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <h3 class="text-xl font-bold">${exp.position} - ${exp.company}</h3>
                                <span class="text-gray-600">${exp.duration}</span>
                            </div>
                            <p class="text-gray-700 mb-4">${exp.description}</p>
                            ${exp.achievements ? `
                                <div>
                                    <h4 class="font-medium mb-2">🏆 주요 성과:</h4>
                                    <ul class="list-disc list-inside text-sm text-gray-700">
                                        ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                                    </ul>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Skills Section -->
        <section id="skills" class="py-16 bg-white">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-3xl font-bold text-center mb-12">🛠️ 스킬</h2>
                <div class="grid md:grid-cols-3 gap-8">
                    ${Object.entries(portfolioData.skills).map(([category, skills]) => `
                        <div class="bg-gray-50 p-6 rounded-lg">
                            <h3 class="text-lg font-bold mb-4 capitalize">${category}</h3>
                            <div class="flex flex-wrap gap-2">
                                ${skills.map(skill => `
                                    <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">${typeof skill === 'object' ? skill.name : skill}</span>
                                `).join('')}
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="py-16 bg-gradient text-white">
            <div class="max-w-6xl mx-auto px-4 text-center">
                <h2 class="text-3xl font-bold mb-12">📞 연락처</h2>
                <div class="mb-8">
                    <p class="text-xl mb-6">AI 프로젝트나 협업에 관심이 있으시다면 언제든 연락주세요!</p>
                </div>
                <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                    <a href="mailto:${portfolioData.personalInfo.email}" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                        📧 이메일 보내기
                    </a>
                    <a href="${portfolioData.personalInfo.linkedin}" target="_blank" class="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                        💼 LinkedIn
                    </a>
                    <a href="${portfolioData.personalInfo.github}" target="_blank" class="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
                        💻 GitHub
                    </a>
                </div>
            </div>
        </section>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8">
        <div class="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; 2024 ${portfolioData.personalInfo.name}. Made with ❤️ and HTML/CSS</p>
        </div>
    </footer>

    <script>
        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Download functionality for HTML files
        document.addEventListener('DOMContentLoaded', function() {
            const downloadLinks = document.querySelectorAll('a[download]');
            downloadLinks.forEach(link => {
                link.addEventListener('click', async function(e) {
                    e.preventDefault();
                    const href = this.getAttribute('href');
                    const filename = this.getAttribute('download') || href.split('/').pop();
                    
                    try {
                        const response = await fetch(href);
                        const blob = await response.blob();
                        const url = window.URL.createObjectURL(blob);
                        
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = filename;
                        document.body.appendChild(a);
                        a.click();
                        
                        window.URL.revokeObjectURL(url);
                        document.body.removeChild(a);
                    } catch (error) {
                        console.error('Download failed:', error);
                        // Fallback - open in new tab
                        window.open(href, '_blank');
                    }
                });
            });
        });
    </script>
</body>
</html>
`;

  // HTML 파일 생성
  fs.writeFileSync(path.join(__dirname, 'static-index.html'), html);
  console.log('Static HTML generated successfully!');
};

generateStaticHTML();