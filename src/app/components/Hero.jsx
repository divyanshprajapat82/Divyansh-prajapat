import React from 'react'

import { motion } from 'framer-motion';

export default function Hero({ isLoading, MaskText  }) {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden md:pt-20 pt-0">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center w-full px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-800 bg-white/80 dark:bg-black/60 backdrop-blur-md ms:text-sm sm:text-[10px] text-[8px] font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-300 shadow-xl shadow-black/5"
                >
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping absolute" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 relative" />
                    {/* Available for Freelance & Internships */}
                    Available For New Opportunitie
                </motion.div>

                <div className="flex flex-col items-center justify-center">
                    <MaskText phrase="DIVYANSH" className="text-[18vw] md:text-[13vw] font-black uppercase leading-[1] md:leading-[0.9] tracking-tighter text-zinc-900 dark:text-white drop-shadow-sm" />
                    <div className="relative w-full flex flex-col items-center">
                        <MaskText phrase="PRAJAPAT" className="text-[18vw] md:text-[13vw] font-black uppercase leading-[1] md:leading-[0.9] tracking-tighter text-stroke-2" />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                            animate={{ opacity: isLoading ? 0 : 1, scale: 1, rotate: -6 }}
                            transition={{ delay: 1.4, duration: 0.8, type: "spring" }}
                            className="static md:absolute top-1/2 left-1/2 md:-translate-2 md:-translate-y-1/2 mt-4 md:mt-0 w-full flex justify-center pointer-events-none z-20"
                        >
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs md:text-sm font-bold uppercase tracking-widest py-2 px-5 rounded-full shadow-2xl hover:rotate-0 transition-transform">
                                MERN Stack Dev
                            </span>
                        </motion.div>
                    </div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="mt-8 md:mt-12 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium max-w-xl text-center leading-relaxed"
                >
                    Crafting scalable full-stack web applications and exceptional digital experiences with modern technologies.
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoading ? 0 : 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute sm:bottom-10 bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-500"
            >
                <span className="text-xs font-bold uppercase tracking-widest">Scroll Down</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1.5px] h-12 bg-gradient-to-b from-blue-500 via-current to-transparent rounded-full"
                />
            </motion.div>
        </section>
    )
}
