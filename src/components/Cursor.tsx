'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Cursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Add event listeners
    window.addEventListener('mousemove', updateMousePosition)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    // Add hover listeners for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => setIsHovering(true))
      el.addEventListener('mouseleave', () => setIsHovering(false))
    })

    return () => {
      window.removeEventListener('mousemove', updateMousePosition)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      >
        {/* Main Football Ball */}
        <motion.div
          className="w-10 h-10 bg-white rounded-full border-2 border-black relative shadow-lg"
          animate={{
            scale: isHovering ? 1.3 : 1,
            rotate: isHovering ? 180 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
        >
          {/* Realistic Football Pattern */}
          <div className="absolute inset-0">
            {/* Curved lines that look like a real football */}
            <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-black transform -rotate-12 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-black transform rotate-12 rounded-full"></div>
            <div className="absolute top-1/4 bottom-1/4 left-1/2 w-0.5 bg-black transform -rotate-12 rounded-full"></div>
            <div className="absolute top-1/4 bottom-1/4 left-1/2 w-0.5 bg-black transform rotate-12 rounded-full"></div>
          </div>
        </motion.div>

        {/* Hover Effect Ring */}
        <motion.div
          className="absolute inset-0 w-10 h-10 border-2 border-red-500 rounded-full"
          animate={{
            scale: isHovering ? 2.5 : 0,
            opacity: isHovering ? 0.4 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
        />

        {/* Click Effect */}
        <motion.div
          className="absolute inset-0 w-10 h-10 border-4 border-green-500 rounded-full"
          animate={{
            scale: isClicking ? 3 : 0,
            opacity: isClicking ? 0.6 : 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut"
          }}
        />

        {/* Trail Effect */}
        <motion.div
          className="absolute inset-0 w-10 h-10 bg-red-500/20 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Hide Default Cursor */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  )
}
