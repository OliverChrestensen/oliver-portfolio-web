'use client'

import { motion } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [videoEnded, setVideoEnded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleTimeUpdate = () => {
    const video = videoRef.current
    if (!video) return

    const currentTime = video.currentTime
    const duration = video.duration

    // Calculate loading progress based on video time
    const progress = (currentTime / duration) * 100
    setLoadingProgress(progress)

    // Adjust these times based on your video
    if (currentTime >= duration * 0.3 && currentStep < 1) {
      setCurrentStep(1) // Name appears at 30% of video
    }
    if (currentTime >= duration * 0.6 && currentStep < 2) {
      setCurrentStep(2) // Number appears at 60% of video
    }
    if (currentTime >= duration * 0.9 && currentStep < 3) {
      setCurrentStep(3) // Final effect at 90% of video
    }
  }

  const handleVideoEnd = () => {
    setVideoEnded(true)
    // Auto-complete after a short delay
    setTimeout(() => {
      onComplete()
    }, 1000)
  }

  return (
    <div className="fixed inset-0 bg-black z-50 overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnd}
      >
        <source src="/videos/entrance.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Player Name Overlay */}
      <motion.div
        className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ 
          opacity: currentStep >= 1 ? 1 : 0,
          y: currentStep >= 1 ? 0 : 50,
          scale: currentStep >= 1 ? 1 : 0.8
        }}
        transition={{ duration: 0.3 }}
      >
        
      </motion.div>

      {/* Football-Themed Loading Bar */}
      <motion.div
        className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1,
          y: 0
        }}
        transition={{ duration: 0.25 }}
      >
        <div className=" px-8 py-6">
          {/* Loading Text */}
        
          
          {/* Football Field Progress Bar */}
          <div className="w-64 h-8 bg-green-600 rounded-lg overflow-hidden relative border-2 border-white">
            {/* Field Lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-0.5 bg-white/60 rounded-full" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 h-full bg-white/60 rounded-full" />
            </div>
            
            {/* Progress Fill */}
            <motion.div
              className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-lg relative"
              initial={{ width: "0%" }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.1 }}
            >
              {/* Animated shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{
                  x: ["-100%", "100%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </motion.div>
            
            {/* Football Ball Moving Across */}
            <motion.div
              className="absolute  transform -translate-y-1/2"
              style={{
                left: `${loadingProgress}%`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <div className="text-lg">⚽</div>
            </motion.div>
          </div>
          
          {/* Progress Percentage */}
          <div className="text-white/80 text-sm text-center mt-2">
            {Math.round(loadingProgress)}%
          </div>
        </div>
      </motion.div>

      {/* Final Transition Effect */}
      <motion.div
        className="absolute inset-0 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: videoEnded ? 1 : 0 }}
        transition={{ duration: 0.25 }}
      />
    </div>
  )
}