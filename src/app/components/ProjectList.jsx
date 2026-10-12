
"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { LuGithub } from "react-icons/lu";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
    // {
    //     title: "JobListener",
    //     category: "Full-Stack Portal",
    //     tech: "React, Next.js, Node.js",
    //     image:
    //         "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop",
    //     live: "#",
    //     github: "#",
    // },
    {
        title: "UrbanNest Realty",
        category: "Real Estate Platform",
        tech: "Next.js, Tailwind, APIs",
        image:
            "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
        live: "https://urbannest-realty.vercel.app/",
        github: "https://github.com/divyanshprajapat82/urbannest-realty",
    },
    {
        title: "Gym Management",
        category: "Management System",
        tech: "React, Node.js, JWT",
        image:
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
        live: "https://gym-management-system-bay.vercel.app/",
        github:
            "https://github.com/divyanshprajapat82/GYM-Management-System",
    },
    {
        title: "Cruise Ship CMS",
        category: "Dashboard",
        tech: "React, Next.js, MongoDB",
        image:
            "https://images.unsplash.com/photo-1599640842225-85d111c60e6b?q=80&w=1000&auto=format&fit=crop",
        live: "https://cruise-ship-management-six.vercel.app/",
        github: "#",
    },
];

export const ProjectList = ({ MaskText }) => {
    const [modal, setModal] = useState({
        active: false,
        index: 0,
    });

    const modalContainer = useRef(null);
    const animationFrame = useRef(null);

    useEffect(() => {
        const moveModal = (event) => {
            const { clientX, clientY } = event;

            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }

            animationFrame.current = requestAnimationFrame(() => {
                if (modalContainer.current) {
                    modalContainer.current.style.transform = `
            translate3d(${clientX - 180}px, ${clientY - 125}px, 0)
            scale(${modal.active ? 1 : 0})
          `;
                }
            });
        };

        window.addEventListener("mousemove", moveModal);

        return () => {
            window.removeEventListener("mousemove", moveModal);

            if (animationFrame.current) {
                cancelAnimationFrame(animationFrame.current);
            }
        };
    }, [modal.active]);

    return (
        <section
            id="projects"
            className="mx-auto max-w-7xl select-none px-0 pb-20 pt-32"
        >
            <div className="mb-12 flex items-center justify-between px-4 md:px-12">
                {MaskText ? (
                    <MaskText
                        phrase="SELECTED WORKS"
                        className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400"
                    />
                ) : (
                    <h2 className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                        SELECTED WORKS
                    </h2>
                )}

                <span className="hidden font-mono text-xs text-zinc-400 sm:inline">
                    (HOVER TO PREVIEW)
                </span>
            </div>

            <div className="relative flex w-full flex-col py-10">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        data-cursor="project"
                        onMouseEnter={() => setModal({ active: true, index })}
                        onMouseLeave={() => setModal({ active: false, index })}
                        className="group relative flex w-full flex-col items-start justify-between border-t border-zinc-200 px-4 py-10 transition-all duration-500 hover:bg-zinc-100/50 dark:border-zinc-800 dark:hover:bg-zinc-900/60 md:flex-row md:items-center md:px-10 md:py-16"
                    >
                        <h3 className="text-4xl font-bold tracking-tighter text-zinc-900 transition-transform duration-500 group-hover:-translate-x-2 dark:text-white md:text-6xl">
                            {project.title}
                        </h3>

                        <div className="relative z-20 mt-6 flex flex-col transition-transform duration-500 group-hover:translate-x-2 md:mt-0 md:items-end">
                            <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
                                {project.category}
                            </p>

                            <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                                {project.tech}
                            </p>

                            <div className="flex items-center gap-3">
                                <motion.a
                                    whileHover={{ scale: 1.05, rotate: 3 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(event) => {
                                        if (project.github === "#") {
                                            event.preventDefault();
                                        }
                                    }}
                                    className="relative z-30 flex cursor-pointer items-center gap-2 rounded-full border border-zinc-300 bg-white/90 px-4 py-2 text-xs font-bold uppercase tracking-wider text-zinc-900 shadow-sm transition-colors hover:bg-zinc-200 dark:border-zinc-700 dark:bg-zinc-900/90 dark:text-zinc-100 dark:hover:bg-zinc-800"
                                    title="View Source Code"
                                >
                                    <LuGithub className="h-4 w-4" />
                                    <span>GitHub</span>
                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.05, rotate: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={(event) => {
                                        if (project.live === "#") {
                                            event.preventDefault();
                                        }
                                    }}
                                    className="relative z-30 flex cursor-pointer items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-blue-500/30 transition-colors hover:bg-blue-700"
                                    title="View Live Site"
                                >
                                    <ArrowUpRight className="h-4 w-4" />
                                    <span>Live Preview</span>
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                ))}

                <div className="w-full border-t border-zinc-200 dark:border-zinc-800" />

                {/* Floating project preview */}
                <div
                    ref={modalContainer}
                    className="pointer-events-none fixed left-0 top-0 z-10 hidden h-[250px] w-[360px] origin-center overflow-hidden rounded-2xl border border-blue-500/30 bg-zinc-100/90 opacity-90 shadow-2xl backdrop-blur-md transition-transform duration-300 ease-out will-change-transform dark:bg-zinc-900/90 lg:block"
                    style={{
                        transform: "translate3d(0, 0, 0) scale(0)",
                    }}
                >
                    <div
                        className="relative h-full w-full transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
                        style={{
                            transform: `translateY(${modal.index * -100}%)`,
                        }}
                    >
                        {PROJECTS.map((project) => (
                            <div
                                key={project.title}
                                className="relative flex h-full w-full items-center justify-center"
                            >
                                <div className="pointer-events-none absolute inset-0 z-10 bg-blue-500/10 mix-blend-overlay" />

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

