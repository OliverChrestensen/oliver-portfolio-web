'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ManagerBackground from '../../components/ManagerBackground'
import FC25Navigation from '../../components/FC25Navigation'
import FC25MainContent from '../../components/FC25MainContent'

// Import all section components
import TacticsBoard from '../../components/TacticsBoard'
import Squad from '../../components/Squad'
import Matches from '../../components/Matches'
import TrainingGround from '../../components/TrainingGround'
import TransferMarket from '../../components/TransferMarket'

export default function TestPage() {
  const [activeSection, setActiveSection] = useState('home')

  const handleNavigate = (section: string) => {
    setActiveSection(section)
  }

  // Function to render the appropriate content based on active section
  const renderSectionContent = () => {
    switch (activeSection) {
      case 'home':
        return <FC25MainContent activeSection={activeSection} />
      case 'tactics':
        return <TacticsBoard />
      case 'squad':
        return <Squad />
      case 'matches':
        return <Matches />
      case 'training':
        return <TrainingGround />
      case 'transfer':
        return <TransferMarket />
      default:
        return <FC25MainContent activeSection={activeSection} />
    }
  }

  return (
    <>
      <ManagerBackground />
      
      {/* FC25-Style Layout */}
      <div className="relative z-10">
        {/* Left Navigation */}
        <FC25Navigation 
          onNavigate={handleNavigate} 
          activeSection={activeSection} 
        />
        
        {/* Main Content - Dynamic based on section */}
        <div className="ml-0 lg:ml-96 min-h-screen flex items-center justify-center p-8">
          <div className="w-full max-w-7xl mx-auto">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {renderSectionContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
