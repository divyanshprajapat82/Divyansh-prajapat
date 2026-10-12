'use client'
import { ArrowUpRight, CheckCircle2, Clock, Copy, Mail, MapPin, MessageSquare, Phone } from 'lucide-react'
import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { LuGithub } from 'react-icons/lu';
import { FaLinkedinIn } from 'react-icons/fa';


export default function Contact({ Magnetic, MaskText }) {
    const [copied, setCopied] = useState(false);
    const [phoneCopied, setPhoneCopied] = useState(false);
    const copyEmail = () => {
        const email = "divyanshprajapat82@gmail.com";
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(email).then(() => {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2500);
                }).catch(() => {
                    fallbackCopyText(email, 'email');
                });
            } else {
                fallbackCopyText(email, 'email');
            }
        } catch (err) {
            fallbackCopyText(email, 'email');
        }
    };

    const copyPhone = () => {
        const phone = "+91 72398 84322";
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(phone).then(() => {
                    setPhoneCopied(true);
                    setTimeout(() => setPhoneCopied(false), 2500);
                }).catch(() => {
                    fallbackCopyText(phone, 'phone');
                });
            } else {
                fallbackCopyText(phone, 'phone');
            }
        } catch (err) {
            fallbackCopyText(phone, 'phone');
        }
    };

    const fallbackCopyText = (text, type) => {
        try {
            const textArea = document.createElement("textarea");
            textArea.value = text;
            textArea.style.position = "fixed";
            textArea.style.top = "0";
            textArea.style.left = "0";
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            const successful = document.execCommand('copy');
            document.body.removeChild(textArea);
            if (successful) {
                if (type === 'email') {
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2500);
                } else {
                    setPhoneCopied(true);
                    setTimeout(() => setPhoneCopied(false), 2500);
                }
            }
        } catch (e) {
            console.error('Fallback copy failed', e);
        }
    };
    return (
        <section id="contact" className="py-32 px-4 md:px-12 bg-white/90 text-zinc-900 dark:bg-[#050505]/95 dark:text-white relative z-10 pointer-events-auto overflow-hidden backdrop-blur-xl transition-colors duration-500 border-t border-zinc-200 dark:border-zinc-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.06)_0,transparent_70%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-20">
                <MaskText phrase="LET'S WORK" className="text-6xl md:text-[8vw] font-black uppercase leading-[0.85] tracking-tighter" />
                <MaskText phrase="TOGETHER" className="text-6xl md:text-[8vw] font-black uppercase leading-[0.85] tracking-tighter text-blue-600 dark:text-blue-500" />

                <p className="mt-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl font-medium">
                    Have a project in mind, a freelance opportunity, or just want to connect? Let's build something exceptional together.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-6xl my-16 text-left">

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-3xl bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between shadow-lg relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-all" />
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 shadow-sm">
                                <Mail className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold tracking-tight">Direct Email</h3>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">Drop a line anytime. Quick replies guaranteed.</p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                            <span className="font-mono text-[11px] text-zinc-700 dark:text-zinc-300 font-medium truncate mr-2">divyanshprajapat82@gmail.com</span>
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={copyEmail}
                                className="p-2 rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white transition-colors cursor-pointer shrink-0"
                                title="Copy Email"
                            >
                                {copied ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-3xl bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between shadow-lg relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl group-hover:bg-emerald-500/20 transition-all" />
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6 shadow-sm">
                                <Phone className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold tracking-tight">Phone & WhatsApp</h3>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">Available for calls and WhatsApp.</p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                            {/* < className="font-mono text-xs text-zinc-700 dark:text-zinc-300 font-medium">+91 98765 43210</> */}
                            <span className="font-mono text-xs text-zinc-700 dark:text-zinc-300 font-medium">+91 72398 84322</span>
                            <motion.button
                                whileTap={{ scale: 0.9 }}
                                onClick={copyPhone}
                                className="p-2 rounded-xl bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors cursor-pointer shrink-0"
                                title="Copy Phone Number"
                            >
                                {phoneCopied ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-3xl bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between shadow-lg relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl group-hover:bg-indigo-500/20 transition-all" />
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 shadow-sm">
                                <MessageSquare className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold tracking-tight">Professional Network</h3>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">Connect with me on GitHub & LinkedIn.</p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center gap-3">
                            <a href="https://github.com/divyanshprajapat82" target="_blank" rel="noreferrer" className="flex-1 py-2 px-3 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:border-blue-500 transition-colors">
                                <LuGithub className="w-3.5 h-3.5" /> GitHub
                            </a>
                            <a href="https://www.linkedin.com/in/divyansh-prajapat-b78055296/" target="_blank" rel="noreferrer" className="flex-1 py-2 px-3 rounded-xl bg-blue-600 text-white text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 hover:bg-blue-700 transition-colors shadow-md shadow-blue-500/20">
                                <FaLinkedinIn className="w-3.5 h-3.5" /> LinkedIn
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-3xl bg-zinc-50/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between shadow-lg relative group overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/10 rounded-full blur-xl group-hover:bg-green-500/20 transition-all" />
                        <div>
                            <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center mb-6 shadow-sm">
                                <Clock className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-bold tracking-tight">Status & Location</h3>
                            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">Based in India • IST Timezone</p>
                        </div>
                        <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs font-mono font-semibold">
                            <span className="flex items-center gap-1 text-zinc-600 dark:text-zinc-300 text-[11px]">
                                <MapPin className="w-3.5 h-3.5 text-blue-500" /> India, Remote
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 flex items-center gap-1 text-[10px]">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Active
                            </span>
                        </div>
                    </motion.div>

                </div>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="mt-6 mb-16"
                >
                    <Magnetic>
                        <a
                            href="mailto:divyanshprajapat82@gmail.com"
                            className="w-44 h-44 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white flex flex-col items-center justify-center text-center p-6 shadow-2xl shadow-blue-500/40 group cursor-pointer"
                        >
                            <span className="text-lg font-bold group-hover:scale-105 transition-transform">Get in touch</span>
                            <ArrowUpRight className="w-6 h-6 mt-1 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                    </Magnetic>
                </motion.div>

                <div className="w-full mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                    <div className="flex flex-wrap justify-center gap-8">
                        <Magnetic><a href="https://github.com/divyanshprajapat82" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">GitHub</a></Magnetic>
                        <Magnetic><a href="https://www.linkedin.com/in/divyansh-prajapat-b78055296/" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">LinkedIn</a></Magnetic>
                    </div>
                    <div className="font-mono text-xs">© {new Date().getFullYear()} Divyansh Prajapat</div>
                    <Magnetic>
                        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1 cursor-pointer">
                            Back to top ↑
                        </button>
                    </Magnetic>
                </div>
            </div>
        </section>
    )
}
