'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface FC25MainContentProps {
  activeSection: string
}

export default function FC25MainContent({ activeSection }: FC25MainContentProps) {
  const getSectionContent = () => {
    switch (activeSection) {
      case 'tactics':
        return {
          title: 'TACTICS BOARD',
          subtitle: 'Min udviklingsfilosofi',
          description: 'Jeg tilgår hver udfordring med en struktureret metode og finder innovative løsninger der både er funktionelle og smukke.',
          icon: '📋',
          color: 'from-blue-500 to-blue-600'
        }
      case 'squad':
        return {
          title: 'SQUAD',
          subtitle: 'Mine færdigheder som spillere',
          description: 'En stærk trup af teknologier der arbejder sammen for at levere exceptionelle resultater.',
          icon: '👥',
          color: 'from-green-500 to-green-600'
        }
      case 'matches':
        return {
          title: 'MATCHES',
          subtitle: 'Mine projekter og kampresultater',
          description: 'Se mine seneste projekter og hvordan jeg har leveret succesfulde løsninger til forskellige udfordringer.',
          icon: '⚽',
          color: 'from-red-500 to-red-600'
        }
      case 'training':
        return {
          title: 'TRAINING GROUND',
          subtitle: 'Læring og udvikling',
          description: 'Kontinuerlig forbedring gennem læring af nye teknologier og best practices.',
          icon: '🏃‍♂️',
          color: 'from-purple-500 to-purple-600'
        }
      case 'transfer':
        return {
          title: 'TRANSFER MARKET',
          subtitle: 'Kontakt og samarbejde',
          description: 'Klar til nye udfordringer og samarbejde med teams der deler min passion for kvalitet.',
          icon: '🤝',
          color: 'from-yellow-500 to-yellow-600'
        }
      default:
        return {
          title: 'WELCOME',
          subtitle: 'Velkommen til min portfolio',
          description: 'Udforsk mine færdigheder, projekter og filosofi gennem denne interaktive oplevelse.',
          icon: '🏆',
          color: 'from-gray-500 to-gray-600'
        }
    }
  }

  const content = getSectionContent()

  // Welcome/Home Section
  if (activeSection === 'home' || activeSection === '') {
    return (
      <div className="ml-96 min-h-screen flex items-center justify-center p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content - Welcome Message */}
            <div className="text-left">
              {/* Welcome Icon */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                className="text-6xl mb-6"
              >
                🏆
              </motion.div>

              {/* Welcome Title */}
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-5xl font-bold text-white mb-4"
              >
                Welcome to My Portfolio
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-300 mb-6"
              >
                Oliver Møller Chrestensen
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg text-gray-400 leading-relaxed mb-8"
              >
                Velkommen til min interaktive portfolio! Jeg er en passioneret fullstack developer 
                der elsker at skabe innovative løsninger og lære nye teknologier. Udforsk mine 
                færdigheder, projekter og filosofi gennem denne spil-inspirerede oplevelse.
              </motion.p>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="grid grid-cols-3 gap-4 mb-8"
              >
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">3+</p>
                  <p className="text-gray-400 text-sm">Years</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">10+</p>
                  <p className="text-gray-400 text-sm">Technologies</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="text-gray-400 text-sm">Passionate</p>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-lg text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <span className="flex items-center space-x-2">
                    <span>🚀</span>
                    <span>Explore My Work</span>
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* Right Content - Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex justify-center"
            >
              {/* Profile Card */}
              <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-2xl max-w-md w-full">
                <div className="flex items-center space-x-6">
                  {/* Profile Image */}
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-600">
                      <Image
                        src="/oliver.webp"
                        alt="Oliver Møller Chrestensen"
                        width={96}
                        height={96}
                        className="object-cover object-center w-full h-full"
                        quality={95}
                      />
                    </div>
                  </div>

                  {/* Profile Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      Oliver Møller Chrestensen
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Fullstack Developer
                    </p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6 pt-6 border-t border-gray-700/50">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-white">3+</p>
                      <p className="text-gray-400 text-sm">Years Experience</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">100%</p>
                      <p className="text-gray-400 text-sm">Always learning</p>
                    </div>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mt-4 flex justify-center">
                  <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                    Available for Work
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

  // Other Sections (without profile card)
  return (
    <div className="ml-96 min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Content Area */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Large Icon */}
          <motion.div
            initial={{ scale: 0.5, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="text-8xl mb-8"
          >
            {content.icon}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-6xl font-black text-white mb-4"
          >
            {content.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl text-gray-300 mb-8"
          >
            {content.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            {content.description}
          </motion.p>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-gradient-to-r ${content.color} px-8 py-4 rounded-xl text-white font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300`}
          >
            <span className="flex items-center justify-center space-x-2">
              <span>→</span>
              <span>Enter {content.title}</span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
