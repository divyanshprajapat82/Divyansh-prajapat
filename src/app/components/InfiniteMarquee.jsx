import React from 'react'
import { motion } from 'framer-motion';


export default function InfiniteMarquee() {
    const SKILLS = [
        "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "JavaScript",
        "Tailwind CSS", "Framer Motion", "REST APIs", "Git", "GitHub", "Postman", "Vercel"
    ];
    return (
        <div className="relative w-full select-none overflow-hidden bg-gradient-to-r from-blue-700 via-zinc-900 to-blue-700 text-white py-10 rotate-[-2deg] scale-110 flex z-10 shadow-2xl">
            <div className="flex whitespace-nowrap animate-marquee">
                {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, index) => (
                    <motion.span
                        key={index}
                        whileHover={{ scale: 1.15, color: '#60a5fa' }}
                        className="text-4xl md:text-6xl font-black uppercase tracking-tighter mx-8 cursor-pointer transition-all duration-300 opacity-90 hover:opacity-100 drop-shadow-md"
                    >
                        {skill} <span className="text-blue-400 ml-8">•</span>
                    </motion.span>
                ))}
            </div>
        </div>
    )
}