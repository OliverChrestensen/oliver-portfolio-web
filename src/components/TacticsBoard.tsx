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
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="text-6xl font-black text-white mb-4 bg-gradient-to-r from-blue-400 via-white to-blue-400 bg-clip-text text-transparent">
            📋 Tactics Board
          </h1>
          <p className="text-xl text-blue-300 font-semibold">Min udviklingsfilosofi</p>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -100, rotateY: -15 }}
          animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -100, rotateY: -15 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 shadow-2xl hover:border-blue-400/50 transition-all duration-300"
          whileHover={{ 
            scale: 1.02,
            rotateY: 5,
            boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
          }}
        >
          <motion.h3 
            className="text-2xl font-bold text-white mb-4 flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="mr-3 text-3xl">⚡</span>
            Offensiv Tilgang
          </motion.h3>
          <p className="text-gray-300 leading-relaxed">
            Jeg spiller med en offensiv tilgang til udvikling: hurtig eksekvering,
            solid arkitektur og et øje for detaljen. Min filosofi handler om at bygge
            løsninger der både er funktionelle og smukke.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100, rotateY: 15 }}
          animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: 100, rotateY: 15 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/30 shadow-2xl hover:border-blue-400/50 transition-all duration-300"
          whileHover={{ 
            scale: 1.02,
            rotateY: -5,
            boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)"
          }}
        >
          <motion.h3 
            className="text-2xl font-bold text-white mb-4 flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <span className="mr-3 text-3xl">🎯</span>
            Strategisk Tænkning
          </motion.h3>
          <p className="text-gray-300 leading-relaxed">
            Hver linje kode er et taktisk træk. Jeg planlægger mine projekter som en
            manager planlægger en kamp - med backup-planer, fleksibilitet og fokus på
            det endelige mål.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
