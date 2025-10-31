'use client'

import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Squad() {
  const { ref, isInView } = useScrollAnimation()
  
  const skills = [
    { skill: 'React', rating: 95, position: 'Forward', color: 'from-blue-500 to-blue-600' },
    { skill: 'Node.js', rating: 88, position: 'Midfielder', color: 'from-green-500 to-green-600' },
    { skill: 'TypeScript', rating: 90, position: 'Defender', color: 'from-blue-600 to-blue-700' },
    { skill: 'MySQL', rating: 85, position: 'Goalkeeper', color: 'from-orange-500 to-orange-600' },
    { skill: 'WordPress', rating: 80, position: 'Winger', color: 'from-purple-500 to-purple-600' },
    { skill: 'Tailwind', rating: 92, position: 'Striker', color: 'from-cyan-500 to-cyan-600' },
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
            👥 Squad
          </h1>
          <p className="text-xl text-blue-300 font-semibold">Mine færdigheder som spillere</p>
        </motion.div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((player, index) => (
          <motion.div
            key={player.skill}
            initial={{ opacity: 0, y: 100, scale: 0.3, rotate: -180 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              rotate: 0 
            } : { 
              opacity: 0, 
              y: 100, 
              scale: 0.3, 
              rotate: -180 
            }}
            transition={{ 
              delay: 0.3 + index * 0.15, 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 10
            }}
            className={`bg-gradient-to-br ${player.color} p-6 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-xl`}
            whileHover={{ 
              scale: 1.05,
              rotateY: 10,
              rotateX: 5,
              boxShadow: "0 25px 50px rgba(0,0,0,0.4)"
            }}
          >
            <div className="text-center">
              <motion.div 
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-3xl font-bold text-white mx-auto mb-4 border-2 border-white/30"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.2
                }}
                transition={{ duration: 0.6 }}
              >
                {player.skill.charAt(0)}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">{player.skill}</h3>
              <p className="text-white/80 mb-4 font-semibold">{player.position}</p>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-32 h-3 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${player.rating}%` } : { width: 0 }}
                    transition={{ delay: 0.8 + index * 0.15, duration: 1.2, ease: "easeOut" }}
                  />
                </div>
                <span className="text-white font-bold text-lg">{player.rating}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
