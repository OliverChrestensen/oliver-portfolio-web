'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FC25NavigationProps {
  onNavigate: (section: string) => void
  activeSection: string
}

export default function FC25Navigation({ onNavigate, activeSection }: FC25NavigationProps) {
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'tactics', label: 'Tactics Board' },
    { id: 'squad', label: 'Squad' },
    { id: 'matches', label: 'Matches' },
    { id: 'training', label: 'Training Ground' },
    { id: 'transfer', label: 'Transfer Market' }
  ]

  return (
    <div className="fixed left-20 top-20 h-full w-80 z-20 ">
      {/* Navigation Menu */}
      <nav className="px-8 mt-10">
        {menuItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full text-left py-4 px-2 transition-all duration-200 mt-10  ${
              activeSection === item.id
                ? 'text-white font-bold text-xl '
                : 'text-gray-300 hover:text-white text-xl font-medium'
            }`}
          >
            <span className="text-xl">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom Profile */}
      <div className="absolute bottom-20 left-8 right-8">
        <div className="bg-gray-800/30 p-6 rounded-lg backdrop-blur-sm">
          <p className="text-white text-base font-semibold">Oliver Møller Chrestensen</p>
          <p className="text-gray-400 text-sm">Fullstack Developer</p>
        </div>
      </div>
    </div>
  )
}
