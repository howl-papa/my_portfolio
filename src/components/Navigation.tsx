'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useTheme } from './ThemeProvider'

const navItems = [
  { name: '홈', href: '#home' },
  { name: '문서 다운로드', href: '#documents' },
  { name: '소개', href: '#about' },
  { name: 'AI 프로젝트', href: '#ai-projects' },
  { name: '경력', href: '#experience' },
  { name: '스킬', href: '#skills' },
  { name: '연락처', href: '#contact' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // 현재 스크롤 위치에 따른 활성 섹션 감지
      const sections = navItems.map(item => item.href.substring(1)) // # 제거
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom > 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // 초기 실행
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold gradient-text"
          >
            Yongrak Park
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.substring(1)
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                  }`}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsOpen(false)
                    const element = document.getElementById(item.href.substring(1))
                    if (element) {
                      const offset = 80 // navigation height offset
                      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                      window.scrollTo({
                        top: elementPosition - offset,
                        behavior: 'smooth'
                      })
                    }
                  }}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </motion.a>
              )
            })}
            
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 dark:border-gray-700 py-4"
            >
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.substring(1)
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.1 }}
                    className={`block py-3 font-medium transition-all duration-200 relative ${
                      isActive
                        ? 'text-blue-600 dark:text-blue-400 font-semibold bg-blue-50 dark:bg-blue-900/20 px-4 -mx-4 rounded-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      setIsOpen(false)
                      const element = document.getElementById(item.href.substring(1))
                      if (element) {
                        const offset = 80 // navigation height offset
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                        window.scrollTo({
                          top: elementPosition - offset,
                          behavior: 'smooth'
                        })
                      }
                    }}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 dark:bg-blue-400 rounded-r"
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </motion.a>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}