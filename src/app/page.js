'use client'

import React, { useState, useEffect, useRef } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue
} from 'framer-motion';


import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Sun,
  Moon,
  Menu,
  X,
  Sparkles,
  Code2,
  Layers,
  Copy,
  CheckCircle2,
  Calendar,
  MessageSquare,
  MapPin,
  Clock,
  Phone,
  Send,
  Terminal,
  Cpu,
  Database,
  FileText,
  Download,
  Eye
} from 'lucide-react';
import { LuGithub } from 'react-icons/lu';
import { FaLinkedinIn } from 'react-icons/fa';
import { ProjectList } from './components/ProjectList';
import Resume from './components/Resume';
import Hero from './components/Hero';
import About from './components/About';
import ExpriencSkills from './components/ExpriencSkills';
import InfiniteMarquee from './components/InfiniteMarquee';
import Contact from './components/Contact';

const smoothEase = [0.22, 1, 0.36, 1];

const FloatingCodeBoxesBackground = ({ isDark }) => {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -350]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, -500]);

  const rotate1 = useTransform(scrollYProgress, [0, 1], [-10, 15]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [-5, 20]);

  const floatingTransition = (duration, delay = 0) => ({
    duration,
    delay,
    repeat: Infinity,
    ease: "easeInOut",
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30 dark:opacity-40">
      {/* CODE BOX 1 — AUTH.JS */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={floatingTransition(6)}
        className="absolute top-[15%] left-[5%] md:left-[8%]"
      >
        <motion.div
          style={{ y: y1, rotate: rotate1 }}
          className="w-64 md:w-72 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-blue-500/30 rounded-xl p-4 shadow-2xl font-mono text-[11px]"
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-200 dark:border-zinc-800 text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="text-[10px]">Auth.js</span>
          </div>

          <p className="text-blue-600 dark:text-blue-400">
            const{" "}
            <span className="text-zinc-800 dark:text-zinc-200">
              verifyToken
            </span>{" "}
            = async (req, res) =&gt; {"{"}
          </p>
          <p className="pl-4 text-zinc-600 dark:text-zinc-400">
            const token = req.headers.authorization;
          </p>
          <p className="pl-4 text-green-600 dark:text-green-400">
            if (!token) return res.status(401);
          </p>
          <p className="text-blue-600 dark:text-blue-400">{"}"}</p>
        </motion.div>
      </motion.div>

      {/* CODE BOX 2 — PROJECT MODEL */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={floatingTransition(7, 0.5)}
        className="absolute top-[40%] right-[5%] md:right-[10%]"
      >
        <motion.div
          style={{ y: y2, rotate: rotate2 }}
          className="w-72 md:w-80 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-indigo-500/30 rounded-xl p-4 shadow-2xl font-mono text-[11px]"
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-200 dark:border-zinc-800 text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="text-[10px]">ProjectModel.js</span>
          </div>

          <p className="text-purple-600 dark:text-purple-400">
            const{" "}
            <span className="text-zinc-800 dark:text-zinc-200">
              ProjectSchema
            </span>{" "}
            = new mongoose.Schema({"{"}
          </p>
          <p className="pl-4 text-zinc-600 dark:text-zinc-400">
            title: {"{"} type: String, required: true {"}"},
          </p>
          <p className="pl-4 text-zinc-600 dark:text-zinc-400">
            techStack: [String],
          </p>
          <p className="pl-4 text-blue-600 dark:text-blue-400">
            createdAt: {"{"} type: Date, default: Date.now {"}"}
          </p>
          <p className="text-purple-600 dark:text-purple-400">{"}"});</p>
        </motion.div>
      </motion.div>

      {/* CODE BOX 3 — ANIMATION */}
      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={floatingTransition(6, 1)}
        className="absolute top-[70%] left-[8%] md:left-[12%]"
      >
        <motion.div
          style={{ y: y3, rotate: rotate3 }}
          className="w-64 md:w-72 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-cyan-500/30 rounded-xl p-4 shadow-2xl font-mono text-[11px]"
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-200 dark:border-zinc-800 text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="text-[10px]">Animation.jsx</span>
          </div>

          <p className="text-cyan-600 dark:text-cyan-400">
            export default function{" "}
            <span className="text-zinc-800 dark:text-zinc-200">Hero</span>() {"{"}
          </p>
          <p className="pl-4 text-zinc-600 dark:text-zinc-400">return (</p>
          <p className="pl-8 text-emerald-600 dark:text-emerald-400">
            &lt;motion.div animate={"{{"} scale: 1 {"}}"}&gt;
          </p>
          <p className="pl-12 text-zinc-600 dark:text-zinc-400">
            &lt;h1&gt;Divyansh Prajapat&lt;/h1&gt;
          </p>
          <p className="pl-8 text-emerald-600 dark:text-emerald-400">
            &lt;/motion.div&gt;
          </p>
          <p className="pl-4 text-zinc-600 dark:text-zinc-400">);</p>
          <p className="text-cyan-600 dark:text-cyan-400">{"}"}</p>
        </motion.div>
      </motion.div>

      {/* CODE BOX 4 — API */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={floatingTransition(8, 1.5)}
        className="absolute top-[88%] right-[10%] md:right-[15%]"
      >
        <motion.div
          style={{ y: y4 }}
          className="w-60 md:w-64 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md border border-emerald-500/30 rounded-xl p-4 shadow-2xl font-mono text-[11px]"
        >
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-zinc-200 dark:border-zinc-800 text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            </div>
            <span className="text-[10px]">API.rest</span>
          </div>

          <p className="text-emerald-600 dark:text-emerald-400">
            GET /api/v1/projects HTTP/1.1
          </p>
          <p className="text-zinc-600 dark:text-zinc-400">
            Host: localhost:5000
          </p>
          <p className="text-amber-600 dark:text-amber-400">
            Status: 200 OK (14ms)
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};


const RulerScrollbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 25, restDelta: 0.001 });
  const [activeSection, setActiveSection] = useState('home');
  const [scrollPct, setScrollPct] = useState(0);

  const sections = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'resume', label: 'RESUME' },
    { id: 'contact', label: 'CONTACT' }
  ];

  useEffect(() => {
    const handleScrollPos = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? Math.round((window.scrollY / totalScroll) * 100) : 0;
      setScrollPct(Math.min(100, Math.max(0, currentProgress)));

      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollPos);
    handleScrollPos();
    return () => window.removeEventListener('scroll', handleScrollPos);
  }, []);

  const topPosition = useTransform(scrollYProgress, [0, 1], ["0%", "96%"]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className="fixed right-0 top-0 h-full w-28 pointer-events-none z-[140] hidden md:flex flex-col items-end bg-gradient-to-l from-zinc-200/40 via-zinc-100/10 to-transparent dark:from-zinc-900/50 dark:via-zinc-950/10 dark:to-transparent backdrop-blur-[2px]"
    >
      <div className="absolute right-6 top-0 h-full w-[1.5px] bg-gradient-to-b from-blue-500/40 via-zinc-400 dark:via-zinc-700 to-blue-500/40 shadow-[0_0_8px_rgba(59,130,246,0.3)]" />

      <motion.div
        className="absolute right-5 w-5 h-[3px] bg-gradient-to-r from-blue-400 to-blue-600 shadow-[0_0_12px_rgba(59,130,246,1)] z-10 origin-right rounded-full"
        style={{ scaleY }}
      />

      <motion.div
        className="absolute right-10 z-20 pointer-events-none transform -translate-y-1/2"
        style={{ top: topPosition }}
      >
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-zinc-950/95 dark:bg-black/95 px-2 py-1 rounded-md shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center gap-1.5 font-mono text-[10px] text-blue-400 whitespace-nowrap"
        >
          <span className="text-zinc-500 font-bold">$</span>
          <span className="font-semibold">{scrollPct}%</span>
          <span className="w-1.5 h-3 bg-blue-400 animate-pulse ml-0.5 rounded-sm" />
        </motion.div>
      </motion.div>

      <div className="absolute right-0 h-full w-full flex flex-col justify-between py-12 pr-4 select-none pointer-events-auto">
        {Array.from({ length: 41 }).map((_, i) => {
          const isMajor = i % 10 === 0;
          const isMedium = i % 5 === 0 && !isMajor;

          let sectionObj = null;
          if (i === 0) sectionObj = sections.find(s => s.id === 'home');
          else if (i === 8) sectionObj = sections.find(s => s.id === 'about');
          else if (i === 16) sectionObj = sections.find(s => s.id === 'experience');
          else if (i === 24) sectionObj = sections.find(s => s.id === 'projects');
          else if (i === 32) sectionObj = sections.find(s => s.id === 'resume');
          else if (i === 40) sectionObj = sections.find(s => s.id === 'contact');

          const isActive = sectionObj && activeSection === sectionObj.id;

          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-end w-full cursor-pointer py-[1px] group/tick"
              onClick={() => {
                if (sectionObj) {
                  const el = document.getElementById(sectionObj.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {sectionObj && (
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    const el = document.getElementById(sectionObj.id);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-[8.5px] font-mono font-bold mr-1.5 tracking-tighter cursor-pointer transition-all duration-300 ${isActive
                    ? 'text-blue-500 scale-110 drop-shadow-[0_0_8px_rgba(59,130,246,0.9)] translate-x-[-2px]'
                    : 'text-zinc-500 dark:text-zinc-400 group-hover/tick:text-blue-500 dark:group-hover/tick:text-blue-300'
                    }`}
                >
                  {sectionObj.label}
                </span>
              )}

              <div
                className={`transition-all duration-300 ${isMajor
                  ? 'w-4 h-[2px] bg-zinc-700 dark:bg-zinc-200'
                  : isMedium
                    ? 'w-3 h-[1.5px] bg-zinc-500 dark:bg-zinc-400'
                    : 'w-1.5 h-[1px] bg-zinc-400/85 dark:bg-zinc-600'
                  } ${isActive ? 'bg-blue-500 w-5 h-[2.5px] shadow-[0_0_10px_rgba(59,130,246,1)]' : 'group-hover/tick:bg-blue-500 group-hover/tick:w-4'}`}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

const Magnetic = ({ children }) => {
  const ref = useRef(null);
  const position = { x: useMotionValue(0), y: useMotionValue(0) };

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    position.x.set(middleX * 0.15);
    position.y.set(middleY * 0.15);
  };

  const reset = () => {
    position.x.set(0);
    position.y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x.get(), y: position.y.get() }}
      transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

const MaskText = ({ phrase, tag: Tag = "h1", className }) => {
  const animation = {
    initial: { y: "100%", opacity: 0 },
    enter: i => ({ y: "0", opacity: 1, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.05 * i } })
  };

  return (
    <div className={className}>
      {phrase.split(" ").map((word, index) => (
        <div key={index} className="inline-flex overflow-hidden mr-[0.25em] p-[0.1em] -m-[0.1em]">
          <motion.span
            custom={index}
            variants={animation}
            initial="initial"
            whileInView="enter"
            viewport={{ once: true, margin: "-10%" }}
            className="inline-block"
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  );
};

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('[data-cursor="project"]')) {
        setIsHovered(true);
        setCursorText("VIEW");
      } else if (target.closest('a') || target.closest('button')) {
        setIsHovered(true);
        setCursorText("");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 -ml-2 -mt-2 bg-zinc-900 dark:bg-white rounded-full pointer-events-none z-[160] mix-blend-difference hidden lg:flex items-center justify-center transition-all duration-300 ease-out will-change-transform"
      style={{
        width: isHovered ? (cursorText ? '80px' : '40px') : '16px',
        height: isHovered ? (cursorText ? '80px' : '40px') : '16px',
        marginLeft: isHovered ? (cursorText ? '-40px' : '-20px') : '-8px',
        marginTop: isHovered ? (cursorText ? '-40px' : '-20px') : '-8px',
        opacity: 1
      }}
    >
      <span className={`text-zinc-900 font-bold text-[10px] tracking-widest ${cursorText ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
        {cursorText}
      </span>
    </div>
  );
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: "-100vh" }}
      transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 1.5 }}
      onAnimationComplete={() => setLoading(false)}
      className="fixed inset-0 z-[200] flex items-center justify-center bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-white"
    >
      <div className="overflow-hidden flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-4 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/50"
        >
          D
        </motion.div>
        <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: smoothEase }}
          className="text-3xl md:text-5xl font-bold tracking-tighter"
        >
          Divyansh Prajapat<span className="text-blue-500 animate-pulse">.</span>
        </motion.h1>
      </div>
    </motion.div>
  );
};


const Navbar = ({ isDark, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Calcutta', hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 10000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: smoothEase, delay: 1.2 }}
        className={`fixed top-0 left-0 w-full md:pr-28 z-[150] px-6 transition-all duration-500 flex justify-between items-center pointer-events-none ${scrolled
          ? 'py-4 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white shadow-lg shadow-black/5'
          : 'py-6 text-zinc-900 dark:text-white bg-transparent'
          }`}
      >
        <div className="flex items-center gap-4 pointer-events-auto">
          <Magnetic>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#home"
              className="text-xl font-black tracking-tighter cursor-pointer flex items-center gap-2"
            >
              <span className="w-7 h-7 bg-blue-600 text-white flex items-center justify-center rounded-full text-xs shadow-md shadow-blue-500/40">D</span>
              <span className="text-zinc-900 dark:text-white font-mono tracking-wider">
                PRAJAPAT
              </span>
            </motion.a>
          </Magnetic>
        </div>

        <div className="flex items-center gap-4 md:gap-8 font-medium text-sm uppercase tracking-widest pointer-events-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden lg:flex items-center gap-2 text-zinc-500 mr-2 bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 font-mono text-xs"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            IND {time}
          </motion.div>

          <div className="hidden md:flex gap-6 lg:gap-8">
            {['About', 'Experience', 'Projects', 'Resume', 'Contact'].map((item) => (
              <Magnetic key={item}>
                <a href={`#${item.toLowerCase()}`} className="relative h-[1.5em] inline-flex items-center overflow-hidden group px-1 py-0.5">
                  <div className="flex flex-col transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:-translate-y-[1.5em]">
                    <span className="h-[1.5em] text-zinc-800 dark:text-zinc-200 flex items-center leading-none font-semibold">{item}</span>
                    <span className="h-[1.5em] text-blue-600 dark:text-blue-400 flex items-center leading-none absolute top-full left-0 font-semibold">{item}</span>
                  </div>
                </a>
              </Magnetic>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Magnetic>
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={toggleTheme}
                className="relative z-[200] w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md flex items-center justify-center hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer shadow-sm pointer-events-auto"
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-800" />}
              </motion.button>
            </Magnetic>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-[200] w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md flex items-center justify-center text-zinc-900 dark:text-white shadow-sm pointer-events-auto"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[180] bg-zinc-950/95 dark:bg-black/95 backdrop-blur-2xl flex flex-col justify-center px-8 md:hidden"
          >
            <div className="flex flex-col gap-8 text-center">
              <span className="font-mono text-xs text-blue-500 uppercase tracking-widest">$ navigation.menu</span>
              {['Home', 'About', 'Experience', 'Projects', 'Resume', 'Contact'].map((item, idx) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-4xl font-black uppercase tracking-tighter text-white hover:text-blue-500 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span>IND {time}</span>
              <span>Divyansh Prajapat</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);


  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const dark = savedTheme !== "light";

    setIsDark(dark);
    document.documentElement.classList.toggle("dark", dark);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setIsDark((current) => {
      const next = !current;

      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");

      return next;
    });
  };

  if (!mounted) return null;



  return (
    <div className={`min-h-screen bg-zinc-50 text-zinc-900 selection:bg-blue-600 selection:text-white dark:bg-[#0a0a0a] dark:text-zinc-50 dark:selection:bg-blue-500 dark:selection:text-white transition-colors duration-500 font-sans overflow-x-hidden ${isDark ? 'dark' : ''}`}>
      <style>{`
        html { 
          scroll-behavior: smooth; 
          scrollbar-width: none; 
          -ms-overflow-style: none; 
        }
        html::-webkit-scrollbar {
          display: none; 
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .text-stroke-2 {
          -webkit-text-stroke: 2px #18181b;
          color: transparent;
        }
        .dark .text-stroke-2 {
          -webkit-text-stroke: 2px #ffffff;
        }
        @media (max-width: 768px) {
          .text-stroke-2 {
            -webkit-text-stroke: 1.5px #18181b;
          }
          .dark .text-stroke-2 {
            -webkit-text-stroke: 1.5px #ffffff;
          }
        }
      `}</style>

      <AnimatePresence mode="wait">
        {isLoading && <Loader setLoading={setIsLoading} />}
      </AnimatePresence>

      <FloatingCodeBoxesBackground isDark={isDark} />
      <CustomCursor />
      <RulerScrollbar />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      <main className="relative md:pr-28 z-10">
        {/* HERO SECTION */}
        <Hero isLoading={isLoading} MaskText={MaskText} />

        {/* ABOUT SECTION */}
        <About MaskText={MaskText} Magnetic={Magnetic} />

        {/* EXPERIENCE & SKILLS SECTION */}
        <ExpriencSkills MaskText={MaskText} />

        {/* InfiniteMarquee */}
        <InfiniteMarquee />

        {/* ProjectList */}
        <ProjectList MaskText={MaskText} />

        {/* RESUME SECTION */}
        <Resume MaskText={MaskText} />

        {/* ENHANCED CONTACT SECTION */}
        <Contact Magnetic={Magnetic} MaskText={MaskText} />
      </main>
    </div>
  );
}