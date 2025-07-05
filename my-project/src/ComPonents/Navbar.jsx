import React from 'react'
import { Music2 } from 'lucide-react'

function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Music2 className="w-6 h-6 text-pink-500 animate-pulse" />
      <h1 className="text-3xl font-extrabold flex items-center">
        <span className="text-pink-500">Tik</span>
        <span className="text-cyan-400 ml-1">Tok</span>
      </h1>
    </div>
  )
}

export default Logo
