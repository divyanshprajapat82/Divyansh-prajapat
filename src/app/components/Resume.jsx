'use client'
import React, { useState } from 'react'
import {
    motion,
} from 'framer-motion';
import { CheckCircle2, Download } from 'lucide-react';

export default function Resume({ MaskText }) {
    const [resumeDownloaded, setResumeDownloaded] = useState(false);

    const handleDownloadResume = () => {
        setResumeDownloaded(true);
        setTimeout(() => setResumeDownloaded(false), 3000);

        const a = document.createElement("a");
        a.href = "/Divyansh-Prajapat-Resume.pdf";
        a.download = "Divyansh_Prajapat_Resume.pdf";

        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };


    return (
        <section id="resume" className="py-32 px-4 md:px-12 max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
                <div>
                    <MaskText phrase="CURRICULUM VITAE" className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-4" />
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 dark:text-white">
                        My Professional Resume
                    </h2>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDownloadResume}
                    className="mt-6 md:mt-0 px-6 py-3.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 font-bold uppercase tracking-wider text-xs flex items-center gap-2 shadow-xl shadow-blue-500/30 cursor-pointer transition-colors"
                >
                    {resumeDownloaded ? <CheckCircle2 className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                    <span>{resumeDownloaded ? "Resume Downloaded!" : "Download Full Resume"}</span>
                </motion.button>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 md:p-12 rounded-3xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-xl relative overflow-hidden group"
            >
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center pb-8 border-b border-zinc-200 dark:border-zinc-800 gap-6">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white">Divyansh Prajapat</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-mono text-sm mt-1">Full Stack MERN Developer & MCA Scholar</p>
                    </div>
                    <div className="flex flex-wrap gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                        <span className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800">India</span>
                        <span className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800">MCA (2025-2027)</span>
                        <span className="px-3 py-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800">BCA (2022-2025)</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
                    <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-4">Core Expertise</h4>
                        <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                            <li>• React.js & Next.js Framework</li>
                            <li>• Node.js & Express.js Backend</li>
                            <li>• MongoDB & Database Modeling</li>
                            <li>• RESTful API Architecture</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-4">Experience Highlights</h4>
                        <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                            <li>• Full Stack Intern at Unified Mentor</li>
                            <li>• Built JobListener & UrbanNest Realty</li>
                            <li>• Scalable REST API Integration</li>
                            <li>• Responsive UI/UX Development</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 mb-4">Education</h4>
                        <ul className="space-y-2 text-sm text-zinc-700 dark:text-zinc-300 font-medium">
                            <li>• MCA - LPU Online (2025-2027)</li>
                            <li>• BCA - St. Paul College (2022-2025)</li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <span className="text-xs text-zinc-500 font-mono">Looking for a dedicated MERN stack developer? Let's talk.</span>
                    <div className="flex items-center gap-4">
                        <a
                            href="#contact"
                            className="px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-700 hover:border-blue-500 text-xs font-bold uppercase tracking-wider transition-colors"
                        >
                            Contact Me
                        </a>
                        <button
                            onClick={handleDownloadResume}
                            className="px-5 py-2.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2 cursor-pointer"
                        >
                            <Download className="w-3.5 h-3.5" /> Download PDF
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
