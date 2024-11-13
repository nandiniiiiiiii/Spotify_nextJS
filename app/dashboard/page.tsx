"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ThumbsUp, ThumbsDown, Share, LogOut } from 'lucide-react'

interface Song {
  id: number
  url: string
  title: string
  votes: number
  thumbnail: string
}

export default function NeonStreamPage() {
  const [songs, setSongs] = useState<Song[]>([
    { id: 1, url: "https://example.com/song1.mp3", title: "Neon Nights", votes: 5, thumbnail: "/placeholder.svg?height=80&width=80" },
    { id: 2, url: "https://example.com/song2.mp3", title: "Electric Dreams", votes: 3, thumbnail: "/placeholder.svg?height=80&width=80" },
    { id: 3, url: "https://example.com/song3.mp3", title: "Cyber Punk Beats", votes: 7, thumbnail: "/placeholder.svg?height=80&width=80" },
  ])
  const [newSongUrl, setNewSongUrl] = useState("")
  const [currentStream, setCurrentStream] = useState("https://example.com/live-stream")

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
    // Implement share functionality here
    alert("Sharing stream: " + currentStream)
  }

  const logout = () => {
    // Implement logout functionality here
    alert("Logging out...")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-purple-900 border-b border-pink-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">NeonBeat Stream</h1>
          <div className="flex gap-4">
            <Button onClick={shareStream} className="bg-cyan-500 hover:bg-cyan-600 text-black transition-colors">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white transition-colors">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>
      <div className="container mx-auto p-4">
        {/* Stream Viewer */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Current Stream</h2>
          <div className="aspect-video bg-purple-900 rounded-lg flex items-center justify-center border border-pink-500 shadow-lg shadow-pink-500/20">
            <p className="text-pink-300">Stream URL: {currentStream}</p>
          </div>
        </div>
        
        {/* Song Input */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Add a Song</h2>
          <div className="flex gap-2">
            <Input
              type="url"
              placeholder="Enter song URL"
              value={newSongUrl}
              onChange={(e) => setNewSongUrl(e.target.value)}
              className="flex-grow bg-purple-900 border-pink-500 text-white placeholder-pink-300"
            />
            <Button onClick={addSong} className="bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600 transition-colors">
              Add Song
            </Button>
          </div>
        </div>
        
        {/* Song List */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Song List</h2>
          <div className="grid gap-4">
            {songs.sort((a, b) => b.votes - a.votes).map((song) => (
              <Card key={song.id} className="bg-purple-900 border border-pink-500 shadow-lg shadow-pink-500/20">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => playSong(song.url)}
                      className="relative w-20 h-20 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
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
                    <span className="text-pink-300 text-lg">{song.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" onClick={() => voteSong(song.id, 1)} className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-colors">
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <span className="text-cyan-300 text-lg">{song.votes}</span>
                    <Button variant="outline" size="icon" onClick={() => voteSong(song.id, -1)} className="border-red-400 text-red-400 hover:bg-red-400 hover:text-black transition-colors">
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
  )
}