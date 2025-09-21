'use client'

import { motion } from 'framer-motion'
import { personalInfo } from '@/data/portfolio'
import { Mail, Linkedin, Github, MessageSquare, Calendar, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contact Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            새로운 기회와 협업에 항상 열려있습니다. 언제든 연락 주세요!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-6" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                연락 정보
              </h3>
              
              <div className="space-y-6">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-xl hover-lift group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-500 rounded-lg mr-4 group-hover:bg-primary-600 transition-colors duration-200">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">이메일</div>
                    <div className="text-primary-600 dark:text-primary-400">{personalInfo.email}</div>
                  </div>
                </motion.a>

                <motion.a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl hover-lift group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500 rounded-lg mr-4 group-hover:bg-blue-600 transition-colors duration-200">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">LinkedIn</div>
                    <div className="text-blue-600 dark:text-blue-400">linkedin.com/in/yongrak-pro</div>
                  </div>
                </motion.a>

                <motion.a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl hover-lift group"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-800 dark:bg-gray-600 rounded-lg mr-4 group-hover:bg-gray-900 dark:group-hover:bg-gray-500 transition-colors duration-200">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">GitHub</div>
                    <div className="text-gray-600 dark:text-gray-400">github.com/howl-papa</div>
                  </div>
                </motion.a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                협업 관심 분야
              </h3>
              <div className="space-y-3">
                {[
                  'AI 서비스 기획 및 전략',
                  '뷰티테크 & 리테일 솔루션',
                  '데이터 기반 비즈니스 개발',
                  '스타트업 컨설팅',
                  '프로덕트 매니지먼트'
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full" />
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Call to Action Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  함께 일하고 싶으시다면?
                </h3>
                <p className="text-lg mb-6 opacity-90">
                  혁신적인 AI 솔루션으로 비즈니스 가치를 창출하는 프로젝트에 함께하고 싶습니다. 
                  언제든 편하게 연락 주세요!
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <MessageSquare size={20} />
                    <span>빠른 응답 보장 (24시간 이내)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar size={20} />
                    <span>미팅 일정 조율 가능</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin size={20} />
                    <span>온/오프라인 미팅 모두 가능</span>
                  </div>
                </div>

                <a
                  href={`mailto:${personalInfo.email}?subject=협업 제안&body=안녕하세요, 박용락님의 포트폴리오를 보고 연락드립니다.`}
                  className="inline-flex items-center space-x-2 bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
                >
                  <Mail size={18} />
                  <span>이메일 보내기</span>
                </a>
              </div>

              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-32 translate-x-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24" />
            </div>

            {/* Additional Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 grid grid-cols-2 gap-4"
            >
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">5년+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">업계 경험</div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
                <div className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">프로젝트 성공률</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}