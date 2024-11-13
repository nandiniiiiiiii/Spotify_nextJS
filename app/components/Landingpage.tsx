"use client";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Music, Users, Vote, Mic2, Radio } from "lucide-react"

function Landingpage() {
    return (
        <div className="flex items-center justify-center">
        <main className="flex-1">
            <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-black to-purple-900">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                                Let Your Fans Choose the Beat
                            </h1>
                            <p className="mx-auto max-w-[700px] text-cyan-400 md:text-xl">
                                NeonBeat: Where creators and fans collaborate on the perfect playlist for every stream.
                            </p>
                        </div>
                        <div className="space-x-4">
                            <Button className="bg-pink-500 text-white hover:bg-pink-600 transition-colors">Get Started</Button>
                            <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors">Learn More</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="features" className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-black">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-pink-500">
                        Features
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center text-center p-6 bg-purple-900 rounded-lg shadow-lg shadow-pink-500/20">
                            <Vote className="h-12 w-12 mb-4 text-cyan-400" />
                            <h3 className="text-xl font-bold mb-2 text-pink-400">Fan Voting</h3>
                            <p className="text-cyan-300">Let your audience vote on the music they want to hear.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-purple-900 rounded-lg shadow-lg shadow-cyan-500/20">
                            <Radio className="h-12 w-12 mb-4 text-pink-400" />
                            <h3 className="text-xl font-bold mb-2 text-cyan-400">Live Streaming</h3>
                            <p className="text-pink-300">Stream your content with real-time music selection.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-6 bg-purple-900 rounded-lg shadow-lg shadow-blue-500/20">
                            <Users className="h-12 w-12 mb-4 text-blue-400" />
                            <h3 className="text-xl font-bold mb-2 text-blue-400">Community Building</h3>
                            <p className="text-blue-300">Engage with your audience and build a loyal fanbase.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="creators" className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-black to-purple-900">
                <div className="container px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4 text-pink-500">For Creators</h2>
                            <p className="text-cyan-400 mb-4">
                                Take your streams to the next level by involving your audience in the music selection process.
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <Mic2 className="h-5 w-5 mr-2 text-pink-400" />
                                    <span className="text-white">Customizable voting options</span>
                                </li>
                                <li className="flex items-center">
                                    <Users className="h-5 w-5 mr-2 text-cyan-400" />
                                    <span className="text-white">Audience engagement tools</span>
                                </li>
                                <li className="flex items-center">
                                    <Music className="h-5 w-5 mr-2 text-blue-400" />
                                    <span className="text-white">Extensive music library</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-black bg-opacity-50 rounded-lg p-8 border border-pink-500 shadow-lg shadow-pink-500/20">
                            <h3 className="text-xl font-bold mb-4 text-pink-400">Start Creating Today</h3>
                            <form className="space-y-4">
                                <Input placeholder="Your Name" className="bg-purple-900 border-pink-500 text-white placeholder-pink-300" />
                                <Input type="email" placeholder="Your Email" className="bg-purple-900 border-cyan-500 text-white placeholder-cyan-300" />
                                <Button className="w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600 transition-colors">Sign Up as Creator</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section id="fans" className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-black">
                <div className="container px-4 md:px-6">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-cyan-500">
                        For Fans
                    </h2>
                    <p className="text-center text-pink-400 mb-12 max-w-2xl mx-auto">
                        Be part of the show! Vote for your favorite tracks and influence the vibe of the stream.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-purple-900 rounded-lg p-6 shadow-lg shadow-pink-500/20 border border-pink-500">
                            <Vote className="h-12 w-12 mb-4 text-pink-400" />
                            <h3 className="text-xl font-bold mb-2 text-pink-400">Vote on Tracks</h3>
                            <p className="text-cyan-300">Cast your vote and shape the playlist in real-time.</p>
                        </div>
                        <div className="bg-purple-900 rounded-lg p-6 shadow-lg shadow-cyan-500/20 border border-cyan-500">
                            <Users className="h-12 w-12 mb-4 text-cyan-400" />
                            <h3 className="text-xl font-bold mb-2 text-cyan-400">Connect with Others</h3>
                            <p className="text-pink-300">Interact with other fans who share your music taste.</p>
                        </div>
                        <div className="bg-purple-900 rounded-lg p-6 shadow-lg shadow-blue-500/20 border border-blue-500">
                            <Music className="h-12 w-12 mb-4 text-blue-400" />
                            <h3 className="text-xl font-bold mb-2 text-blue-400">Discover New Music</h3>
                            <p className="text-blue-300">Explore new tracks and artists through community-curated streams.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-purple-900 to-black">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                                Ready to Revolutionize Your Streams?
                            </h2>
                            <p className="mx-auto max-w-[700px] text-cyan-400 md:text-xl">
                                Join NeonBeat today and create unforgettable, interactive music experiences for your audience.
                            </p>
                        </div>
                        <div className="space-x-4">
                            <Button size="lg" className="bg-gradient-to-r from-pink-500 to-blue-500 text-white hover:from-pink-600 hover:to-blue-600 transition-colors">Sign Up Now</Button>
                            <Button variant="outline" size="lg" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-colors">Watch Demo</Button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </div>
    )
}

export default Landingpage