'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function TacticsBoard() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <div ref={ref} className="w-full max-w-6xl mx-auto p-6">
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
            📋 Tactics Board
          </h1>
          <p className="text-xl text-blue-300 font-semibold">My development philosophy</p>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -100, rotateY: -15 }}
          animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -100, rotateY: -15 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
          className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 shadow-2xl hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative"
        >
          {/* Enhanced Hover Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
          <div className="relative z-10">
          <motion.h3 
            className="text-2xl font-bold text-white mb-4 flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="mr-3 text-3xl">⚡</span>
            Offensive Approach
          </motion.h3>
            <p className="text-gray-300 leading-relaxed">
              I play with an offensive approach to development: fast execution,
              solid architecture and an eye for detail. My philosophy is about building
              solutions that are both functional and beautiful.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, rotateY: 15 }}
          animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 100, rotateY: 15 }}
          transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
          className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 shadow-2xl hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl relative"
        >
          {/* Enhanced Hover Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={false}
          />
          <div className="relative z-10">
          <motion.h3 
            className="text-2xl font-bold text-white mb-4 flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="mr-3 text-3xl">🎯</span>
            Strategic Thinking
          </motion.h3>
            <p className="text-gray-300 leading-relaxed">
              Every line of code is a tactical move. I plan my projects like a
              manager plans a match - with backup plans, flexibility and focus on
              the end goal.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
