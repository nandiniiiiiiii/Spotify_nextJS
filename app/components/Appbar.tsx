"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Music, Users, Vote, Mic2, Radio } from "lucide-react"

export function Appbar() {
  const session = useSession()

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b border-pink-500">
        <Link className="flex items-center justify-center" href="#">
          <Music className="h-6 w-6 text-pink-500" />
          <span className="ml-2 text-2xl font-bold text-pink-500">NeonBeat</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-pink-400 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-pink-400 transition-colors" href="#creators">
            For Creators
          </Link>
          <div>
            {session.data?.user && <button className="m-2 p-2 bg-blue-400" onClick={()=>signOut()}>Logout</button>}
            {!session.data?.user && <button className="m-2 p-2 bg-blue-400" onClick={()=>signIn()}>Signin</button>}
          </div>
        </nav>
      </header>
  );
}