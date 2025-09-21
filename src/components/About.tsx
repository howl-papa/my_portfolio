'use client'

import { motion } from 'framer-motion'
import { personalInfo, strengths } from '@/data/portfolio'
import { Target, Lightbulb, Users, Briefcase } from 'lucide-react'

const icons = {
  0: Target,
  1: Lightbulb, 
  2: Users,
  3: Briefcase
}

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {personalInfo.summary.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 hover-lift">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">26%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">ROI 개선</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400 mb-2">98%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">고객 만족도</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">130+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">독서모임 참여</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">모임 운영 경험</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Strengths Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            핵심 강점
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            경제학 + 창업 + AI 기술의 융합으로 만들어진 차별화된 전문성
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {strengths.map((strength, index) => {
            const IconComponent = icons[index as keyof typeof icons]
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover-lift border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                      {strength.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Key Achievements</h3>
              <p className="text-lg opacity-90">
                실전 경험을 통해 검증된 성과들
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">85건</div>
                <div className="text-sm opacity-90">VID Investment 기업분석 리포트</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">35%</div>
                <div className="text-sm opacity-90">Life Enjoy 월평균 매출 성장률</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">1.8K</div>
                <div className="text-sm opacity-90">패션 SNS 계정 팔로워</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}