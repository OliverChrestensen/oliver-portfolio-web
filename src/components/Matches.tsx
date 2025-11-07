'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Matches() {
  const { ref, isInView } = useScrollAnimation()
  
  const projects = [
    {
      title: 'Ownersclub.dk',
      description: 'E-commerce platform with React and WooCommerce API integration',
      technologies: ['React', 'WooCommerce', 'Node.js', 'MySQL'],
      result: 'Victory 🏆',
      status: 'completed',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'CRM Automation',
      description: 'Power Automate + Custom APIs for workflow optimization',
      technologies: ['Power Automate', 'Power Apps', 'Azure', 'SharePoint'],
      result: 'Clean Sheet 🧤',
      status: 'completed',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio with Next.js and Framer Motion animations',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
      result: 'In Progress ⚽',
      status: 'ongoing',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <div ref={ref} className="w-full max-w-7xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          <h1 className="text-6xl font-black text-white mb-4 bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent">
            ⚔️ Matches
          </h1>
          <p className="text-xl text-blue-300 font-semibold">My projects and match results</p>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, rotateX: 90, y: 50 }}
            animate={isInView ? { 
              opacity: 1, 
              rotateX: 0, 
              y: 0 
            } : { 
              opacity: 0, 
              rotateX: 90, 
              y: 50 
            }}
            transition={{ 
              delay: 0.15 + index * 0.1, 
              duration: 0.4,
              ease: "easeOut"
            }}
            className={`group bg-gradient-to-br ${project.color} p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl relative`}
          >
            {/* Enhanced Hover Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.25 + index * 0.1, duration: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">{project.description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.2 }}
                className="mb-4"
              >
                <h4 className="text-white font-semibold mb-3 flex items-center">
                  <span className="mr-2">🛠️</span>
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0, rotate: -45 }}
                      animate={isInView ? { 
                        opacity: 1, 
                        scale: 1, 
                        rotate: 0 
                      } : { 
                        opacity: 0, 
                        scale: 0, 
                        rotate: -45 
                      }}
                      transition={{ 
                        delay: 0.35 + index * 0.1 + techIndex * 0.05, 
                        duration: 0.2,
                        type: "spring",
                        stiffness: 250
                      }}
                      className="px-3 py-1 bg-white/20 text-white text-xs rounded-full border border-white/30 backdrop-blur-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.2 }}
                className="flex items-center justify-between"
              >
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  project.status === 'completed' 
                    ? 'bg-green-500/20 text-green-100 border border-green-400/30'
                    : 'bg-yellow-500/20 text-yellow-100 border border-yellow-400/30'
                } backdrop-blur-sm`}>
                  {project.result}
                </span>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
