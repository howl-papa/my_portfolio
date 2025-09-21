'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/portfolio'
import { 
  Brain, 
  Code2, 
  Globe,
  Lightbulb,
  BarChart3,
  Palette,
  Database,
  Settings
} from 'lucide-react'

const categoryIcons: { [key: string]: any } = {
  'AI & Business Strategy': Brain,
  'Technical Skills': Code2,
  'Languages': Globe
}

const skillIcons: { [key: string]: any } = {
  '서비스 기획, 사업 개발': Lightbulb,
  '비즈니스 모델링, CRM': BarChart3,
  '데이터 분석, 재무 분석': Database,
  '이커머스 End-to-End 창업': Settings,
  'ROI 중심 프로젝트 리더십': Brain,
  'Excel, PowerPoint (고급)': BarChart3,
  'Notion, Miro (워크플로우 설계)': Palette,
  'Power BI, Postgresql (데이터 시각화)': Database,
  'Microsoft Azure (AI Fundamentals)': Brain,
  'FastAPI, React/Next.js': Code2,
  '한국어 (모국어)': Globe,
  'English (업무 가능, OPIc IM2)': Globe,
  'Python (중급)': Code2
}

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            다양한 분야의 전문 지식과 기술 역량
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-6" />
        </motion.div>

        <div className="space-y-12">
          {skills.map((skillCategory, categoryIndex) => {
            const CategoryIcon = categoryIcons[skillCategory.category] || Code2
            
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg mr-4">
                    <CategoryIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {skillCategory.category}
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skillCategory.items.map((skill, skillIndex) => {
                    const SkillIcon = skillIcons[skill] || Settings
                    
                    return (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1, 
                          duration: 0.5 
                        }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="flex items-center p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:from-primary-50 hover:to-secondary-50 dark:hover:from-primary-900/20 dark:hover:to-secondary-900/20 transition-all duration-300 hover-lift cursor-pointer">
                          <div className="flex items-center justify-center w-8 h-8 bg-white dark:bg-gray-600 rounded-lg mr-3 group-hover:bg-gradient-to-r group-hover:from-primary-500 group-hover:to-secondary-500 transition-all duration-300">
                            <SkillIcon className="w-4 h-4 text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                          </div>
                          <span className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                            {skill}
                          </span>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Skill Proficiency Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8 text-center">핵심 역량 레벨</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-4">비즈니스 & 전략</h4>
                <div className="space-y-3">
                  {[
                    { name: '서비스 기획', level: 95 },
                    { name: '사업 개발', level: 90 },
                    { name: '데이터 분석', level: 85 },
                    { name: '프로젝트 관리', level: 90 }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">{item.name}</span>
                        <span className="text-sm">{item.level}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          transition={{ delay: index * 0.2, duration: 1 }}
                          viewport={{ once: true }}
                          className="bg-white h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4">기술 & 도구</h4>
                <div className="space-y-3">
                  {[
                    { name: 'AI/ML 활용', level: 80 },
                    { name: 'Python', level: 75 },
                    { name: 'Data Visualization', level: 85 },
                    { name: 'Web Development', level: 70 }
                  ].map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm">{item.name}</span>
                        <span className="text-sm">{item.level}%</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          transition={{ delay: index * 0.2, duration: 1 }}
                          viewport={{ once: true }}
                          className="bg-white h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}