'use client'

import { motion } from 'framer-motion'
import { Download, FileText, User } from 'lucide-react'

const documents = [
  {
    title: "박용락 Yongrak Park - Professional Profile",
    description: "상세한 전문 경력과 강점을 담은 프로필 문서",
    type: "Profile",
    icon: User,
    color: "from-blue-500 to-blue-600",
    downloadUrl: "https://gensparkstorageprodwest.blob.core.windows.net/web-drive/292fcc46-8c1a-45a4-8f0b-51661d1e63d7/a2e3cbf9-6cd5-4d0a-a61e-b2a2786363be?se=2025-09-21T17%3A24%3A47Z&sp=r&sv=2025-05-05&sr=b&rsct=text/html&sig=kjEFcSqhRRt8/JsKbX7lYMCgomdZWUw3QMpuGycZbyY%3D",
    fileName: "박용락_Yongrak_Park_Profile.html"
  },
  {
    title: "박용락 Yongrak Park - CV",
    description: "AI 프로젝트, 경력, 교육 등 종합적인 이력서",
    type: "CV",
    icon: FileText,
    color: "from-green-500 to-green-600", 
    downloadUrl: "https://gensparkstorageprodwest.blob.core.windows.net/web-drive/292fcc46-8c1a-45a4-8f0b-51661d1e63d7/62a4dfdc-7145-44d5-bb58-7878c3b23986?se=2025-09-21T17%3A24%3A47Z&sp=r&sv=2025-05-05&sr=b&rsct=text/html&sig=fFTU9c/fQdhQZVY07JhVHuZZP9N/UOfeYjQzxEzK6S0%3D",
    fileName: "박용락_Yongrak_Park_CV.html"
  }
]

export default function DocumentDownload() {
  const handleDownload = async (doc: typeof documents[0]) => {
    try {
      const response = await fetch(doc.downloadUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = doc.fileName
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('Download failed:', error)
      // 직접 링크로 리다이렉트
      window.open(doc.downloadUrl, '_blank')
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            📄 상세 문서 다운로드
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            더 자세한 이력과 경험을 담은 원본 문서를 다운로드하실 수 있습니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {documents.map((doc, index) => {
            const IconComponent = doc.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover-lift border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${doc.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${doc.color} rounded-lg`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <span className={`px-3 py-1 text-xs font-semibold bg-gradient-to-r ${doc.color} text-white rounded-full`}>
                        {doc.type}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {doc.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                      {doc.description}
                    </p>

                    <button
                      onClick={() => handleDownload(doc)}
                      className={`w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r ${doc.color} hover:shadow-lg text-white rounded-lg font-semibold transition-all duration-200 group-hover:scale-[1.02]`}
                    >
                      <Download size={18} />
                      <span>다운로드</span>
                    </button>

                    <div className="mt-3 text-xs text-gray-500 dark:text-gray-400 text-center">
                      파일 형식: HTML | 크기: {index === 0 ? '40KB' : '44KB'}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <FileText size={20} className="text-blue-600 dark:text-blue-400" />
              <span className="font-semibold text-gray-900 dark:text-white">
                원본 문서 정보
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              위 문서들은 박용락님이 직접 작성한 원본 이력서로, 
              모든 경력과 프로젝트 정보가 정확하게 반영되어 있습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}