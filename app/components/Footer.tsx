'use client'

import React from 'react'
import Link from "next/link"
import { Music } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-black border-t-2 border-pink-500 shadow-lg shadow-pink-500/50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <Music className="h-6 w-6 text-pink-500 mr-2" />
            <p className="text-sm text-pink-400">
              © {new Date().getFullYear()} NeonBeat. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-6">
            <Link 
              className="text-sm text-blue-400 hover:text-pink-400 transition-colors duration-300 hover:underline underline-offset-4" 
              href="#"
            >
              Terms of Service
            </Link>
            <Link 
              className="text-sm text-blue-400 hover:text-pink-400 transition-colors duration-300 hover:underline underline-offset-4" 
              href="#"
            >
              Privacy Policy
            </Link>
            <Link 
              className="text-sm text-blue-400 hover:text-pink-400 transition-colors duration-300 hover:underline underline-offset-4" 
              href="#"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer