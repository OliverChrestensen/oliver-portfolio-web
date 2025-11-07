'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface NavigationProps {
  onNavigate: (section: string) => void
  activeSection: string
}

export default function Navigation({ onNavigate, activeSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { id: 'tactics', label: 'Tactics Board', icon: '📋', description: 'Min filosofi' },
    { id: 'squad', label: 'Squad', icon: '👥', description: 'Mine færdigheder' },
    { id: 'matches', label: 'Matches', icon: '⚔️', description: 'Mine projekter' },
    { id: 'training', label: 'Training Ground', icon: '��️', description: 'Læring & udvikling' },
    { id: 'transfer', label: 'Transfer Market', icon: '💸', description: 'Kontakt mig' },
  ]

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-black/90 backdrop-blur-md border-b border-blue-500/30">
      <div className="max-w-7xl mx-auto px-6 py-4">
        {/* FIFA-style Header */}
        <div className="flex items-center justify-between">
          {/* FIFA-style Logo */}
          <motion.div
            className="flex items-center space-x-4"
            whileHover={{ scale: 1.05 }}
            onClick={() => onNavigate('home')}
          >
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                O
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-xs">⚽</span>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Oliver Møller Chrestensen</h1>
              <p className="text-sm text-blue-300">The Special One</p>
            </div>
          </motion.div>

          {/* FIFA-style Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg border border-blue-400'
                    : 'text-gray-300 hover:text-white hover:bg-white/10 border border-transparent hover:border-blue-500/30'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* FIFA-style Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <motion.div
                className="w-full h-0.5 bg-white"
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
              />
              <motion.div
                className="w-full h-0.5 bg-white"
                animate={{ opacity: isOpen ? 0 : 1 }}
              />
              <motion.div
                className="w-full h-0.5 bg-white"
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
              />
            </div>
          </motion.button>
        </div>

        {/* FIFA-style Mobile Navigation */}
        <motion.div
          className="md:hidden mt-4"
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="space-y-2 pb-4">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id)
                  setIsOpen(false)
                }}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                whileHover={{ x: 10 }}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
                <p className="text-xs text-gray-400 mt-1">{item.description}</p>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
