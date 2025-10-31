'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function TrainingGround() {
  const { ref, isInView } = useScrollAnimation()
  
  const learningAreas = [
    {
      title: 'Power Platform',
      description: 'Power Apps, Power Automate og Power BI',
      progress: 75,
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Next.js 13+',
      description: 'App Router, Server Components og moderne React patterns',
      progress: 85,
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'WooCommerce',
      description: 'Avancerede integrationer og custom plugins',
      progress: 70,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'TypeScript',
      description: 'Advanced types, generics og type safety',
      progress: 90,
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Cloud Architecture',
      description: 'Azure, AWS og serverless patterns',
      progress: 60,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'UI/UX Design',
      description: 'Framer Motion, Tailwind og moderne design patterns',
      progress: 80,
      color: 'from-pink-500 to-pink-600'
    }
  ]

  return (
    <div ref={ref} className="w-full max-w-7xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-6xl font-black text-white mb-4 bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent">
            🏟️ Training Ground
          </h1>
          <p className="text-xl text-blue-300 font-semibold">Læring og udvikling af færdigheder</p>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {learningAreas.map((area, index) => (
          <motion.div
            key={area.title}
            initial={{ 
              opacity: 0, 
              y: 50, 
              scale: 0.5,
              rotateZ: -10
            }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0, 
              scale: 1,
              rotateZ: 0
            } : { 
              opacity: 0, 
              y: 50, 
              scale: 0.5,
              rotateZ: -10
            }}
            transition={{ 
              delay: 0.3 + index * 0.1, 
              duration: 0.7,
              type: "spring",
              stiffness: 80,
              damping: 12
            }}
            className={`bg-gradient-to-br ${area.color} p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl`}
            whileHover={{ 
              scale: 1.05,
              rotateZ: 2,
              y: -5,
              boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
            }}
          >
            <h3 className="text-xl font-bold text-white mb-2 flex items-center">
              <span className="mr-2">📚</span>
              {area.title}
            </h3>
            <p className="text-white/80 text-sm mb-4 leading-relaxed">{area.description}</p>
            
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white text-sm font-medium">Progress</span>
                <motion.span 
                  className="text-white text-sm font-bold"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                >
                  {area.progress}%
                </motion.span>
              </div>
              <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white rounded-full"
                  initial={{ width: 0, scaleX: 0 }}
                  animate={isInView ? { 
                    width: `${area.progress}%`,
                    scaleX: 1
                  } : { 
                    width: 0,
                    scaleX: 0
                  }}
                  transition={{ 
                    delay: 0.6 + index * 0.1, 
                    duration: 1.2,
                    ease: "easeOut"
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
        animate={isInView ? { 
          opacity: 1, 
          scale: 1, 
          rotateX: 0 
        } : { 
          opacity: 0, 
          scale: 0.8, 
          rotateX: 45 
        }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-12 text-center"
      >
        <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
            <span className="mr-3">🎯</span>
            Current Focus
          </h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Jeg træner konstant mine færdigheder gennem kurser, projekter og 
            eksperimenter. Lige nu arbejder jeg med Power Apps, Next.js 13 og 
            avancerede WooCommerce integrationer.
          </p>
          <div className="flex justify-center space-x-4">
            {['Continuous Learning', 'Hands-on Projects', 'Industry Best Practices'].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0, rotate: 180 }}
                animate={isInView ? { 
                  opacity: 1, 
                  scale: 1, 
                  rotate: 0 
                } : { 
                  opacity: 0, 
                  scale: 0, 
                  rotate: 180 
                }}
                transition={{ 
                  delay: 1 + index * 0.15, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 150
                }}
                className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/30 backdrop-blur-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
