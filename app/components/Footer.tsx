'use client'
import React from 'react'
import Link from "next/link"

function Footer() {
  return (
    <div>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-pink-500">
        <p className="text-xs text-pink-400">© 2024 NeonBeat. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-cyan-400 hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-cyan-400 hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

export default Footer