"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ThumbsUp, ThumbsDown, Share, LogOut, Music } from 'lucide-react'
import Footer from "../components/Footer"

interface Song {
  id: number
  url: string
  title: string
  votes: number
  thumbnail: string
}

const REFRESH_INTERVAL_MS = 10*1000

export default function NeonStreamPage() {
  const [songs, setSongs] = useState<Song[]>([
    { id: 1, url: "https://example.com/song1.mp3", title: "Neon Nights", votes: 5, thumbnail: "/placeholder.svg?height=80&width=80" },
    { id: 2, url: "https://example.com/song2.mp3", title: "Electric Dreams", votes: 3, thumbnail: "/placeholder.svg?height=80&width=80" },
    { id: 3, url: "https://example.com/song3.mp3", title: "Cyber Punk Beats", votes: 7, thumbnail: "/placeholder.svg?height=80&width=80" },
  ])
  const [newSongUrl, setNewSongUrl] = useState("")
  const [currentStream, setCurrentStream] = useState<Song | null>(null)

  function refreshStream(){

  }

  useEffect(()=>{
    refreshStream()
    const interval = setInterval(()=>{

    }, REFRESH_INTERVAL_MS)
  })

  const addSong = () => {
    if (newSongUrl) {
      const newSong: Song = {
        id: songs.length + 1,
        url: newSongUrl,
        title: `Neon Track ${songs.length + 1}`,
        votes: 0,
        thumbnail: "/placeholder.svg?height=80&width=80",
      }
      setSongs([...songs, newSong])
      setNewSongUrl("")
    }
  }

  const voteSong = (id: number, increment: number) => {
    setSongs(
      songs.map((song) =>
        song.id === id ? { ...song, votes: Math.max(0, song.votes + increment) } : song
      )
    )
  }

  const playSong = (url: string) => {
    setCurrentStream(url)
  }

  const shareStream = () => {
    alert("Sharing stream: " + currentStream)
  }

  const logout = () => {
    alert("Logging out...")
  }

  return (
    <>
    <div className="min-h-screen bg-black text-white overflow-hidden pb-20">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <header className="relative bg-black border-b-2 border-pink-500 p-4 shadow-lg shadow-pink-500/50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 animate-pulse">
            NeonBeat Stream
          </h1>
          <div className="flex gap-4">
            <Button onClick={shareStream} className="bg-blue-500 hover:bg-blue-400 text-black transition-colors shadow-lg shadow-blue-500/50">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button onClick={logout} className="bg-pink-500 hover:bg-pink-400 text-black transition-colors shadow-lg shadow-pink-500/50">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>
      <div className="container mx-auto p-4 pt-10 relative">
        {/* Stream Viewer */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400 glow">Current Stream</h2>
          <div className="aspect-video bg-black rounded-lg flex items-center justify-center border-2 border-pink-500 shadow-lg shadow-pink-500/50 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-blue-500/20"></div>
            <p className="text-pink-300 text-xl relative z-10">Stream URL: {currentStream}</p>
          </div>
        </div>
        
        {/* Song Input */}
        <div className="mb-8 pt-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-400 glow">Add a Song</h2>
          <div className="flex gap-2">
            <Input
              type="url"
              placeholder="Enter song URL"
              value={newSongUrl}
              onChange={(e) => setNewSongUrl(e.target.value)}
              className="flex-grow bg-black border-2 border-pink-500 text-white placeholder-pink-300 shadow-lg shadow-pink-500/30"
            />
            <Button onClick={addSong} className="bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600 transition-colors shadow-lg shadow-pink-500/50">
              <Music className="h-4 w-4 mr-2" />
              Add Song
            </Button>
          </div>
        </div>
        
        {/* Song List */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-blue-400 glow pt-10">Song List</h2>
          <div className="grid gap-4">
            {songs.sort((a, b) => b.votes - a.votes).map((song) => (
              <Card key={song.id} className="bg-black border-2 border-pink-500 shadow-lg shadow-pink-500/50 hover:shadow-xl hover:shadow-pink-500/70 transition-shadow">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => playSong(song.url)}
                      className="relative w-20 h-20 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 shadow-lg shadow-pink-500/30"
                      aria-label={`Play ${song.title}`}
                    >
                      <Image
                        src={song.thumbnail}
                        alt={`${song.title} thumbnail`}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 transform hover:scale-110"
                      />
                    </button>
                    <span className="text-pink-300 text-xl glow">{song.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={() => voteSong(song.id, 1)} className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black transition-colors shadow-md shadow-blue-400/30">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <span className="text-blue-300 text-xl glow">{song.votes}</span>
                    <Button variant="outline" size="icon" onClick={() => voteSong(song.id, -1)} className="border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black transition-colors shadow-md shadow-pink-400/30">
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

// Add this CSS to your global styles or a local CSS module
`
@keyframes glow {
  0%, 100% { text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor; }
  50% { text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor; }
}

.glow {
  animation: glow 2s ease-in-out infinite;
}
`