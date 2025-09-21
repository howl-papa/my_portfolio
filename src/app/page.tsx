'use client'

import { ThemeProvider } from '@/components/ThemeProvider'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import DocumentDownload from '@/components/DocumentDownload'
import About from '@/components/About'
import AIProjects from '@/components/AIProjects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navigation />
        <main>
          <section id="home">
            <Hero />
          </section>
          <section id="documents">
            <DocumentDownload />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="ai-projects">
            <AIProjects />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}