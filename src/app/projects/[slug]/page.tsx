'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getProjectBySlug, type Project } from '@/data/projects'
import ManagerBackground from '@/components/ManagerBackground'

export default function ProjectDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)

  useEffect(() => {
    const slug = params.slug as string
    const foundProject = getProjectBySlug(slug)
    if (!foundProject) {
      router.push('/')
      return
    }
    setProject(foundProject)
  }, [params.slug, router])

  if (!project) {
    return (
      <>
        <ManagerBackground />
        <div className="min-h-screen relative z-10 pt-24 pb-16 px-6 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-white">Loading project...</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <ManagerBackground />
      <div className="min-h-screen relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined' && window.history.length > 1) {
                  router.back()
                } else {
                  router.push('/#matches')
                }
              }}
              className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors group"
            >
              <svg
                className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Projects
            </button>
          </motion.div>

          {/* Project Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`bg-gradient-to-br ${project.color} p-8 rounded-2xl border border-white/20 shadow-2xl mb-8`}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-5xl font-black text-white mb-3">{project.title}</h1>
                <p className="text-xl text-white/90 mb-4">{project.shortDescription}</p>
              </div>
              <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                project.status === 'completed' 
                  ? 'bg-green-500/30 text-green-100 border border-green-400/50'
                  : project.status === 'ongoing'
                  ? 'bg-yellow-500/30 text-yellow-100 border border-yellow-400/50'
                  : 'bg-gray-500/30 text-gray-100 border border-gray-400/50'
              } backdrop-blur-sm`}>
                {project.result}
              </span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              {project.githubFrontendUrl && (
                <a
                  href={project.githubFrontendUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all border border-white/30 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Frontend Repo
                </a>
              )}
              {project.githubBackendUrl && (
                <a
                  href={project.githubBackendUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all border border-white/30 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  Backend Repo
                </a>
              )}
              {/* Fallback single GitHub link if provided */}
              {!project.githubFrontendUrl && !project.githubBackendUrl && project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all border border-white/30 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  GitHub Repo
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg transition-all border border-white/30 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Live Site
                </a>
              )}
            </div>
          </motion.div>

          {/* Project Details */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 shadow-xl"
              >
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                  <span className="mr-3">📖</span>
                  About This Project
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.fullDescription}
                </p>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 shadow-xl"
              >
                <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                  <span className="mr-3">🛠️</span>
                  Technologies Used
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.35 + index * 0.05, duration: 0.2 }}
                      className="px-4 py-2 bg-blue-500/20 text-blue-200 rounded-lg border border-blue-400/30 backdrop-blur-sm font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 shadow-xl"
                >
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <span className="mr-3">⚡</span>
                    Challenges & Solutions
                  </h2>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.45 + index * 0.1, duration: 0.3 }}
                        className="flex items-start text-gray-300"
                      >
                        <span className="text-blue-400 mr-3 mt-1">•</span>
                        <span>{challenge}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Achievements */}
              {project.achievements && project.achievements.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 shadow-xl"
                >
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                    <span className="mr-3">🏆</span>
                    Key Achievements
                  </h2>
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.55 + index * 0.1, duration: 0.3 }}
                        className="flex items-start text-gray-300"
                      >
                        <span className="text-green-400 mr-3 mt-1">✓</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 shadow-xl"
              >
                <h3 className="text-xl font-bold text-white mb-4">Project Info</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Status</p>
                    <p className="text-white font-medium capitalize">{project.status}</p>
                  </div>
                  {project.dateStarted && (
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Started</p>
                      <p className="text-white font-medium">
                        {new Date(project.dateStarted).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  )}
                  {project.dateCompleted && (
                    <div>
                      <p className="text-gray-400 text-sm mb-1">Completed</p>
                      <p className="text-white font-medium">
                        {new Date(project.dateCompleted).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

