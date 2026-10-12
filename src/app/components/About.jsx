import React from 'react'
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';


export default function About({ MaskText, Magnetic }) {
    const smoothEase = [0.22, 1, 0.36, 1];
    return (
        <section id="about" className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                <div className="md:col-span-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <MaskText phrase="ABOUT ME" className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-8 flex items-center gap-2" />
                    </motion.div>
                </div>
                <div className="md:col-span-8 text-2xl md:text-4xl font-medium leading-tight tracking-tight text-zinc-900 dark:text-white">
                    <MaskText phrase="I am a full-stack developer focused on building modern, responsive web applications using the MERN stack." />
                    <div className="mt-8">
                        <MaskText phrase="I enjoy working on frontend interfaces, backend APIs, database design, and solving practical development problems while pursuing my MCA." className="text-zinc-500 dark:text-zinc-400 text-xl md:text-2xl" />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: smoothEase }}
                        className="mt-16 flex gap-8 text-lg"
                    >
                        <Magnetic>
                            <motion.a
                                whileHover={{ x: 5 }}
                                href="#projects"
                                className="inline-flex items-center gap-3 border-b-2 border-blue-600 pb-1 text-zinc-900 dark:text-white font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                See my featured work <ArrowUpRight className="w-5 h-5 text-blue-600" />
                            </motion.a>
                        </Magnetic>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
