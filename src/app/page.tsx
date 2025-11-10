'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import LoadingScreen from '../components/LoadingScreen'
//import Cursor from '../components/Cursor'
import ManagerBackground from '../components/ManagerBackground'
import TacticsBoard from '../components/TacticsBoard'
import Squad from '../components/Squad'
import Matches from '../components/Matches'
import TrainingGround from '../components/TrainingGround'
import TransferMarket from '../components/TransferMarket'

export default function Home() {
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        return sessionStorage.getItem('hasSeenLoader') !== 'true'
      } catch {
        return true
      }
    }
    return true
  })
  const [activeSection, setActiveSection] = useState('home')

  // Note: initial isLoading is derived from sessionStorage in the useState initializer above.

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Track which section is currently in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'tactics', 'squad', 'matches', 'training', 'transfer']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigationItems = [
    {
      id: 'tactics',
      title: 'TACTICS BOARD',
      subtitle: 'My philosophy and approach',
      icon: '📋',
      color: 'from-blue-500/30 to-blue-600/30',
      borderColor: 'border-blue-500/50',
      hoverColor: 'hover:border-blue-400/70'
    },
    {
      id: 'squad',
      title: 'SQUAD',
      subtitle: 'My skills and technologies',
      icon: '👥',
      color: 'from-green-500/30 to-green-600/30',
      borderColor: 'border-green-500/50',
      hoverColor: 'hover:border-green-400/70'
    },
    {
      id: 'matches',
      title: 'MATCHES',
      subtitle: 'My projects and victories',
      icon: '⚽',
      color: 'from-red-500/30 to-red-600/30',
      borderColor: 'border-red-500/50',
      hoverColor: 'hover:border-red-400/70'
    },
    {
      id: 'training',
      title: 'TRAINING GROUND',
      subtitle: 'Learning and development',
      icon: '🏃‍♂️',
      color: 'from-purple-500/30 to-purple-600/30',
      borderColor: 'border-purple-500/50',
      hoverColor: 'hover:border-purple-400/70'
    },
    {
      id: 'transfer',
      title: 'TRANSFER MARKET',
      subtitle: 'Contact and collaboration',
      icon: '🤝',
      color: 'from-yellow-500/30 to-yellow-600/30',
      borderColor: 'border-yellow-500/50',
      hoverColor: 'hover:border-yellow-400/70'
    }
  ]

  return (
    <>
      {isLoading && (
        <LoadingScreen
          onComplete={() => {
            try {
              if (typeof window !== 'undefined') {
                sessionStorage.setItem('hasSeenLoader', 'true')
              }
            } catch {
              // ignore storage errors
            }
            setIsLoading(false)
          }}
        />
      )}

      {!isLoading && (
        <>
          <ManagerBackground />
          {/*<Cursor />*/}
          
          {/* FIFA-Style Home Section */}
          <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-6">
            <div className="w-full max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                
                {/* Left Panel - Player Profile */}
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.35 }}
                  className="lg:col-span-1 flex flex-col items-center lg:items-start"
                >
                  {/* Player Image */}
                  <motion.div
                    className="relative mb-6 w-64 h-80"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/40 to-purple-500/40 p-2 shadow-2xl">
                      <div className="w-full h-full rounded-2xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 p-3 shadow-inner">
                        <div className="relative w-full h-full rounded-xl overflow-hidden">
                          <Image
                            src="/oliver.webp"
                            alt="Oliver Møller Chrestensen"
                            fill
                            className="object-cover object-center"
                            quality={95}
                            priority
                            sizes="(max-width: 768px) 256px, 256px"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Player Info */}
                  <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                    className="text-center lg:text-left"
                  >
                    <h1 className="text-3xl lg:text-4xl font-black text-white mb-2 drop-shadow-lg">
                      Oliver Møller Chrestensen
                    </h1>
                    <p className="text-xl text-blue-400 font-bold mb-1 drop-shadow-md">
                      Fullstack Developer
                    </p>
                    <p className="text-lg text-gray-200 mb-4 drop-shadow-md">
                      &quot;The Special One&quot;
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                      <span className="px-3 py-1 bg-blue-500/30 text-blue-200 rounded-full text-sm border border-blue-500/50 shadow-md">
                        React
                      </span>
                      <span className="px-3 py-1 bg-green-500/30 text-green-200 rounded-full text-sm border border-green-500/50 shadow-md">
                        Node.js
                      </span>
                      <span className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm border border-purple-500/50 shadow-md">
                        TypeScript
                      </span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right Panel - Navigation Grid */}
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.35 }}
                  className="lg:col-span-2"
                >
                  {/* Smart Grid Layout - handles uneven numbers */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {navigationItems.map((item, index) => {
                      // If it's the last item and we have an odd number, make it span full width
                      const isLastItem = index === navigationItems.length - 1
                      const isOddNumber = navigationItems.length % 2 !== 0
                      const shouldSpanFull = isLastItem && isOddNumber
                      
                      return (
                        <motion.div
                          key={item.id}
                          initial={{ y: 50, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2 + index * 0.05, duration: 0.3 }}
                          onClick={() => handleNavigate(item.id)}
                          className={`group cursor-pointer bg-gradient-to-br ${item.color} backdrop-blur-sm rounded-2xl border-2 ${item.borderColor} ${item.hoverColor} p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-xl ${
                            shouldSpanFull ? 'md:col-span-2' : ''
                          }`}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <div className="text-4xl drop-shadow-md">{item.icon}</div>
                          
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors drop-shadow-md">
                            {item.title}
                          </h3>
                          <p className="text-gray-200 text-sm group-hover:text-gray-100 transition-colors drop-shadow-sm">
                            {item.subtitle}
                          </p>
                          
                          {/* Enhanced Hover Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            initial={false}
                          />
                        </motion.div>
                      )
                    })}
                  </div>
                </motion.div>
              </div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.25 }}
                className="text-center mt-16"
              >
                
                <motion.div
                  className="inline-flex flex-col items-center space-y-2"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-12 h-12 bg-blue-500/30 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-blue-500/50 shadow-lg">
                    {/* Clean Chevron Arrow */}
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      className="text-white drop-shadow-md"
                    >
                      <path 
                        d="M6 9L12 15L18 9" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-transparent rounded-full shadow-md" />
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Tactics Board Section */}
          <section id="tactics" className="min-h-screen flex items-center justify-center relative z-10">
            <TacticsBoard />
          </section>

          {/* Squad Section */}
          <section id="squad" className="min-h-screen flex items-center justify-center relative z-10">
            <Squad />
          </section>

          {/* Matches Section */}
          <section id="matches" className="min-h-screen flex items-center justify-center relative z-10">
            <Matches />
          </section>

          {/* Training Ground Section */}
          <section id="training" className="min-h-screen flex items-center justify-center relative z-10">
            <TrainingGround />
          </section>

          {/* Transfer Market Section */}
          <section id="transfer" className="min-h-screen flex items-center justify-center relative z-10">
            <TransferMarket />
          </section>
        </>
      )}
    </>
  )
}
