import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CardNav, { CardItem } from './components/reactbits/CardNav';
import FluidGlass from './components/reactbits/FluidGlass';
import AboutMe from './pages/AboutMe';
import MyWorks from './pages/MyWorks';
import Library from './pages/Library';
import HobbiesGallery from './pages/HobbiesGallery';
import { User, Briefcase, Library as LibraryIcon } from 'lucide-react';

function App() {
  const [activeNav, setActiveNav] = useState('about');

  const navItems: CardItem[] = [
    {
      id: 'about',
      title: 'About Me',
      subtitle: '가치관 & 스토리',
      icon: <User size={20} />,
    },
    {
      id: 'works',
      title: 'My Works',
      subtitle: 'AI, 창업, 투자',
      icon: <Briefcase size={20} />,
    },
    {
      id: 'library',
      title: 'Library',
      subtitle: '독립출판사 시선, 봉사, 취미부자',
      icon: <LibraryIcon size={20} />,
    },
  ];

  const getRouteFromNav = (navId: string) => {
    switch (navId) {
      case 'about': return '/about';
      case 'works': return '/works';
      case 'library': return '/library';
      default: return '/about';
    }
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header with Navigation */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
          <div className="max-w-6xl mx-auto p-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <FluidGlass
                padding="1rem 2rem"
                borderRadius={12}
                blur={10}
                bgColor="rgba(255,255,255,0.05)"
                borderColor="rgba(255,255,255,0.1)"
              >
                <h1 className="text-2xl font-bold text-white">Portfolio</h1>
              </FluidGlass>

              <div className="w-full md:w-auto">
                <CardNav
                  items={navItems}
                  value={activeNav}
                  onChange={(id) => {
                    setActiveNav(id);
                    window.location.href = getRouteFromNav(id);
                  }}
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/works" element={<MyWorks />} />
            <Route path="/library" element={<Library />} />
            <Route path="/library/hobbies" element={<HobbiesGallery />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-black/30 border-t border-white/10">
          <div className="max-w-6xl mx-auto p-8">
            <FluidGlass
              padding="2rem"
              borderRadius={16}
              blur={12}
              bgColor="rgba(255,255,255,0.03)"
              borderColor="rgba(255,255,255,0.08)"
              width="100%"
            >
              <div className="text-center">
                <h3 className="text-lg font-semibold text-white mb-2">연락하기</h3>
                <p className="text-gray-300 mb-4">
                  새로운 기회와 협업에 항상 열려있습니다.
                </p>
                <div className="flex justify-center space-x-6 text-sm text-gray-400">
                  <a href="mailto:contact@example.com" className="hover:text-white transition-colors">
                    Email
                  </a>
                  <a href="https://linkedin.com" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                  <a href="https://github.com" className="hover:text-white transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </FluidGlass>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;