'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ManagerBackground() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Football Pitch Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/fm.jpg"
          alt="Football Pitch Background"
          fill
          className="object-cover"
          quality={90}
          priority
        />
        {/* Dark overlay to maintain readability */}
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      
     
    </div>
  )
}
