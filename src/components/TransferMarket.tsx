'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function TransferMarket() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <div ref={ref} className="w-full max-w-5xl mx-auto p-6">
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
            💸 Transfer Market
          </h1>
          <p className="text-xl text-blue-300 font-semibold">Vil du have mig på dit hold?</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ 
          opacity: 0, 
          scale: 0.3,
          rotateY: 45,
          rotateX: 15
        }}
        animate={isInView ? { 
          opacity: 1, 
          scale: 1,
          rotateY: 0,
          rotateX: 0
        } : { 
          opacity: 0, 
          scale: 0.3,
          rotateY: 45,
          rotateX: 15
        }}
        transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
        className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 shadow-2xl"
        
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center">
            <span className="mr-3">📧</span>
            Send Transfer Offer
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed text-lg">
            Jeg er åben for nye udfordringer og muligheder. 
            Lad os diskutere hvordan jeg kan hjælpe dit hold med at vinde!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateZ: -5 }}
            animate={isInView ? { 
              opacity: 1, 
              x: 0, 
              rotateZ: 0 
            } : { 
              opacity: 0, 
              x: -50, 
              rotateZ: -5 
            }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6 rounded-xl border border-blue-400/30"
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="mr-2">📧</span>
              Kontakt Information
            </h3>
            <div className="space-y-4">
              {[
                { icon: '📧', text: 'oliver.chrestensen@hotmail.com' },
                { icon: '📱', text: '+45 42 43 26 03' },
                { icon: '📍', text: 'København' }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -30, scale: 0.8 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    x: 0, 
                    scale: 1 
                  } : { 
                    opacity: 0, 
                    x: -30, 
                    scale: 0.8 
                  }}
                  transition={{ 
                    delay: 0.35 + index * 0.05, 
                    duration: 0.2,
                    type: "spring",
                    stiffness: 250
                  }}
                  className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm"
                >
                  <span className="text-blue-400 text-xl">{item.icon}</span>
                  <span className="text-white font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateZ: 5 }}
            animate={isInView ? { 
              opacity: 1, 
              x: 0, 
              rotateZ: 0 
            } : { 
              opacity: 0, 
              x: 50, 
              rotateZ: 5 
            }}
            transition={{ delay: 0.3, duration: 0.3 }}
            className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-6 rounded-xl border border-green-400/30"
          >
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="mr-2">⚽</span>
              Mine Styrker
            </h3>
            <div className="space-y-3">
              {[
                'Fullstack Development',
                'Team Collaboration',
                'Problem Solving',
                'Continuous Learning'
              ].map((strength, index) => (
                <motion.div
                  key={strength}
                  initial={{ opacity: 0, x: 30, scale: 0.8 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    x: 0, 
                    scale: 1 
                  } : { 
                    opacity: 0, 
                    x: 30, 
                    scale: 0.8 
                  }}
                  transition={{ 
                    delay: 0.35 + index * 0.05, 
                    duration: 0.2,
                    type: "spring",
                    stiffness: 250
                  }}
                  className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm"
                >
                  <span className="text-green-400 text-xl">✓</span>
                  <span className="text-white font-medium">{strength}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="text-center">
          <motion.a
            href="mailto:oliver@example.com"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 rounded-lg font-bold text-xl shadow-lg transition-all duration-300 border border-blue-400/30"
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={isInView ? { 
              opacity: 1, 
              scale: 1, 
              rotate: 0 
            } : { 
              opacity: 0, 
              scale: 0, 
              rotate: -180 
            }}
            transition={{ 
              delay: 0.4, 
              duration: 0.3,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Transfer Offer
          </motion.a>
        </div>
      </motion.div>
    </div>
  )
}
