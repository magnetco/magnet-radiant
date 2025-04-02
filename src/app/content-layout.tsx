
'use client'

import { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

export default function ContentLayout({ children }: PropsWithChildren) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.75, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}
