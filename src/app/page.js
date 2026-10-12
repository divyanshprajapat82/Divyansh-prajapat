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

const PROJECTS = [
  {
    title: 'JobListener',
    category: 'Full-Stack Portal',
    tech: 'React, Next.js, Node.js',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1000&auto=format&fit=crop',
    live: '#',
    github: '#'
  },
  {
    title: 'UrbanNest Realty',
    category: 'Real Estate Platform',
    tech: 'Next.js, Tailwind, APIs',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop',
    live: 'https://urbannest-realty.vercel.app/',
    github: 'https://github.com/divyanshprajapat82/urbannest-realty'
  },
  {
    title: 'Gym Management',
    category: 'Management System',
    tech: 'React, Node.js, JWT',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop',
    live: 'https://gym-management-system-bay.vercel.app/',
    github: 'https://github.com/divyanshprajapat82/GYM-Management-System'
  },
  {
    title: 'Cruise Ship CMS',
    category: 'Dashboard',
    tech: 'React, Next.js, MongoDB',
    image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?q=80&w=1000&auto=format&fit=crop',
    live: 'https://cruise-ship-management-six.vercel.app/',
    github: '#'
  }
];

const SKILLS = [
  "React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "JavaScript",
  "Tailwind CSS", "Framer Motion", "REST APIs", "Git", "GitHub", "Postman", "Vercel"
];

const SKILL_CATEGORIES = [
  { title: "Frontend", skills: "React.js, Next.js, HTML, CSS, JavaScript, Tailwind CSS, Bootstrap" },
  { title: "Backend", skills: "Node.js, Express.js, REST APIs, JWT Authentication" },
  { title: "Database", skills: "MongoDB, Mongoose" },
  { title: "Tools & Platforms", skills: "Git, GitHub, Postman, VS Code, Cursor AI, MongoDB Atlas, Vercel, Netlify" },
  { title: "Development", skills: "Responsive Design, UI/UX, AI-Assisted Dev, API Integration, Agile Workflow" }
];

const EXPERIENCES = [
  {
    role: "Full Stack Developer Intern",
    company: "Unified Mentor",
    period: "Sep 2025 - Dec 2025",
    description: "Developed full-stack web applications using the MERN stack. Built responsive and user-friendly web interfaces. Integrated frontend applications with REST APIs and backend services. Worked with MongoDB and database-driven functionality."
  }
];

const EDUCATIONS = [
  {
    degree: "Master of Computer Applications (MCA)",
    school: "Lovely Professional University (LPU) - Online",
    period: "2025 - 2027"
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "St. Paul College of Science and Management",
    period: "2022 - 2025"
  }
];

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

// const ProjectList = () => {
//   const [modal, setModal] = useState({ active: false, index: 0 });
//   const modalContainer = useRef(null);

//   useEffect(() => {
//     const moveModal = (e) => {
//       const { clientX, clientY } = e;
//       if (modalContainer.current) {
//         requestAnimationFrame(() => {
//           if (modalContainer.current) {
//             modalContainer.current.style.transform = `translate3d(${clientX - 420}px, ${clientY - 140}px, 0) scale(${modal.active ? 1 : 0})`;
//           }
//         });
//       }
//     };

//     window.addEventListener('mousemove', moveModal);
//     return () => window.removeEventListener('mousemove', moveModal);
//   }, [modal.active]);

//   return (
//     <div className="w-full relative py-10 flex flex-col">
//       {PROJECTS.map((project, index) => (
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: index * 0.1 }}
//           data-cursor="project"
//           onMouseEnter={() => setModal({ active: true, index })}
//           onMouseLeave={() => setModal({ active: false, index })}
//           className="w-full border-t border-zinc-200 dark:border-zinc-800 py-10 md:py-16 px-4 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-center group transition-all duration-500 hover:bg-zinc-100/50 dark:hover:bg-zinc-900/60 hover:pl-6 relative backdrop-blur-sm"
//         >
//           <h2 className="text-4xl md:text-6xl font-bold tracking-tighter transition-transform duration-500 group-hover:-translate-x-2 text-zinc-900 dark:text-white">
//             {project.title}
//           </h2>
//           <div className="flex flex-col md:items-end mt-6 md:mt-0 transition-transform duration-500 group-hover:translate-x-2 relative z-20">
//             <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100">{project.category}</p>
//             <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{project.tech}</p>
//             <div className="flex items-center gap-3">
//               <motion.a
//                 whileHover={{ scale: 1.1, rotate: 5 }}
//                 whileTap={{ scale: 0.95 }}
//                 href={project.github}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-4 py-2 rounded-full border border-zinc-300 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors relative z-30 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 shadow-sm cursor-pointer backdrop-blur-md"
//                 title="View Source Code"
//               >
//                 <LuGithub className="w-4 h-4" />
//                 <span>GitHub</span>
//               </motion.a>

//               <motion.a
//                 whileHover={{ scale: 1.1, rotate: -5 }}
//                 whileTap={{ scale: 0.95 }}
//                 href={project.live}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors relative z-30 flex items-center gap-2 text-xs font-bold uppercase tracking-wider shadow-lg shadow-blue-500/30 cursor-pointer"
//                 title="View Live Site"
//               >
//                 <ArrowUpRight className="w-4 h-4" />
//                 <span>Live Preview</span>
//               </motion.a>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//       <div className="border-t border-zinc-200 dark:border-zinc-800 w-full" />

//       <div
//         ref={modalContainer}
//         className="fixed top-0 left-0 w-[280px] h-[200px] md:w-[360px] md:h-[250px] pointer-events-none overflow-hidden rounded-2xl z-10 hidden lg:block bg-zinc-100/90 dark:bg-zinc-900/90 shadow-2xl border border-blue-500/30 transition-transform duration-300 ease-out will-change-transform origin-center opacity-90 backdrop-blur-md"
//         style={{ transform: 'scale(0)' }}
//       >
//         <div
//           className="w-full h-full relative transition-transform duration-500 ease-[0.76,0,0.24,1]"
//           style={{ transform: `translateY(${modal.index * -100}%)` }}
//         >
//           {PROJECTS.map((project, index) => (
//             <div key={index} className="w-full h-full flex items-center justify-center relative">
//               <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay z-10 pointer-events-none" />
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const InfiniteMarquee = () => {
//   return (
//     <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-700 via-zinc-900 to-blue-700 text-white py-10 rotate-[-2deg] scale-110 flex z-10 shadow-2xl">
//       <div className="flex whitespace-nowrap animate-marquee">
//         {[...SKILLS, ...SKILLS, ...SKILLS].map((skill, index) => (
//           <motion.span
//             key={index}
//             whileHover={{ scale: 1.15, color: '#60a5fa' }}
//             className="text-4xl md:text-6xl font-black uppercase tracking-tighter mx-8 cursor-pointer transition-all duration-300 opacity-90 hover:opacity-100 drop-shadow-md"
//           >
//             {skill} <span className="text-blue-400 ml-8">•</span>
//           </motion.span>
//         ))}
//       </div>
//     </div>
//   );
// };

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
  const [copied, setCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  // const [resumeDownloaded, setResumeDownloaded] = useState(false);

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

  // const toggleTheme = () => {
  //   const newTheme = !isDark;
  //   setIsDark(newTheme);
  //   if (newTheme) {
  //     document.documentElement.classList.add('dark');
  //     localStorage.setItem('theme', 'dark');
  //   } else {
  //     document.documentElement.classList.remove('dark');
  //     localStorage.setItem('theme', 'light');
  //   }
  // };

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


  // const copyEmail = () => {
  //   const email = "divyanshprajapat@example.com";
  //   try {
  //     if (navigator.clipboard && navigator.clipboard.writeText) {
  //       navigator.clipboard.writeText(email).then(() => {
  //         setCopied(true);
  //         setTimeout(() => setCopied(false), 2500);
  //       }).catch(() => {
  //         fallbackCopyText(email, 'email');
  //       });
  //     } else {
  //       fallbackCopyText(email, 'email');
  //     }
  //   } catch (err) {
  //     fallbackCopyText(email, 'email');
  //   }
  // };

  // const copyPhone = () => {
  //   const phone = "+91 98765 43210";
  //   try {
  //     if (navigator.clipboard && navigator.clipboard.writeText) {
  //       navigator.clipboard.writeText(phone).then(() => {
  //         setPhoneCopied(true);
  //         setTimeout(() => setPhoneCopied(false), 2500);
  //       }).catch(() => {
  //         fallbackCopyText(phone, 'phone');
  //       });
  //     } else {
  //       fallbackCopyText(phone, 'phone');
  //     }
  //   } catch (err) {
  //     fallbackCopyText(phone, 'phone');
  //   }
  // };

  // const fallbackCopyText = (text, type) => {
  //   try {
  //     const textArea = document.createElement("textarea");
  //     textArea.value = text;
  //     textArea.style.position = "fixed";
  //     textArea.style.top = "0";
  //     textArea.style.left = "0";
  //     textArea.style.opacity = "0";
  //     document.body.appendChild(textArea);
  //     textArea.focus();
  //     textArea.select();
  //     const successful = document.execCommand('copy');
  //     document.body.removeChild(textArea);
  //     if (successful) {
  //       if (type === 'email') {
  //         setCopied(true);
  //         setTimeout(() => setCopied(false), 2500);
  //       } else {
  //         setPhoneCopied(true);
  //         setTimeout(() => setPhoneCopied(false), 2500);
  //       }
  //     }
  //   } catch (e) {
  //     console.error('Fallback copy failed', e);
  //   }
  // };

  // const handleDownloadResume = () => {
  //   setResumeDownloaded(true);
  //   setTimeout(() => setResumeDownloaded(false), 3000);
  //   const resumeText = `DIVYANSH PRAJAPAT - MERN Stack Developer\nMCA Student (2025-2027) | BCA Graduate (2022-2025)\nSkills: React.js, Next.js, Node.js, Express.js, MongoDB, JavaScript, Tailwind CSS\nExperience: Full Stack Developer Intern at Unified Mentor`;
  //   const blob = new Blob([resumeText], { type: 'text/plain' });
  //   const url = URL.createObjectURL(blob);
  //   const a = document.createElement('a');
  //   a.href = url;
  //   a.download = 'Divyansh_Prajapat_Resume.txt';
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   URL.revokeObjectURL(url);
  // };

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
        {/* <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center w-full px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 20 : 0, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-zinc-300 dark:border-zinc-800 bg-white/80 dark:bg-black/60 backdrop-blur-md text-sm font-bold uppercase tracking-widest text-zinc-800 dark:text-zinc-300 shadow-xl shadow-black/5"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping absolute" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 relative" />
              Available for Freelance & Internships
            </motion.div>

            <div className="flex flex-col items-center justify-center">
              <MaskText phrase="DIVYANSH" className="text-[16vw] md:text-[13vw] font-black uppercase leading-[1] md:leading-[0.9] tracking-tighter text-zinc-900 dark:text-white drop-shadow-sm" />
              <div className="relative w-full flex flex-col items-center">
                <MaskText phrase="PRAJAPAT" className="text-[16vw] md:text-[13vw] font-black uppercase leading-[1] md:leading-[0.9] tracking-tighter text-stroke-2" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
                  animate={{ opacity: isLoading ? 0 : 1, scale: 1, rotate: -6 }}
                  transition={{ delay: 1.4, duration: 0.8, type: "spring" }}
                  className="static md:absolute top-1/2 left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 mt-4 md:mt-0 w-full flex justify-center pointer-events-none z-20"
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
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 dark:text-zinc-500"
          >
            <span className="text-xs font-bold uppercase tracking-widest">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-[1.5px] h-12 bg-gradient-to-b from-blue-500 via-current to-transparent rounded-full"
            />
          </motion.div>
        </section> */}

        <Hero isLoading={isLoading} MaskText={MaskText} />

        {/* ABOUT SECTION */}
        {/* <section id="about" className="py-32 px-4 md:px-12 max-w-7xl mx-auto">
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
        </section> */}

        <About MaskText={MaskText} Magnetic={Magnetic} />

        {/* EXPERIENCE & SKILLS SECTION */}
        {/* <section id="experience" className="py-20 md:py-32 px-4 md:px-12 max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">

            <div className="md:col-span-5 flex flex-col gap-16">
              <div>
                <MaskText phrase="TECHNICAL SKILLS" className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-8" />
                <div className="flex flex-col">
                  {SKILL_CATEGORIES.map((category, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ x: 4 }}
                      className="py-6 border-b border-zinc-200 dark:border-zinc-800 last:border-0 transition-transform"
                    >
                      <h3 className="text-lg font-bold mb-2 text-zinc-900 dark:text-white flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        {category.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">{category.skills}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <MaskText phrase="CERTIFICATIONS" className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-8" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.4 }}
                  className="p-6 bg-white/80 dark:bg-[#111]/80 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl shadow-black/5 dark:shadow-none relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all" />
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white relative z-10">Full Stack Web Development</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mt-2 relative z-10 text-sm">Completed comprehensive training covering MERN stack development, API integration, and production deployment.</p>
                </motion.div>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col gap-16">
              <div>
                <MaskText phrase="WORK EXPERIENCE" className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-8" />
                <div className="flex flex-col gap-12">
                  {EXPERIENCES.map((exp, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      className="group bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:border-blue-500/50 transition-all duration-300"
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{exp.role}</h3>
                        <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 mt-2 md:mt-0 w-fit">{exp.period}</span>
                      </div>
                      <h4 className="text-base font-bold text-zinc-700 dark:text-zinc-400 mb-4">{exp.company}</h4>
                      <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed text-base">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <MaskText phrase="EDUCATION" className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-8" />
                <div className="flex flex-col gap-8">
                  {EDUCATIONS.map((edu, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.1 * idx }}
                      className="relative pl-6 border-l-2 border-blue-500/50 group"
                    >
                      <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-[7px] top-1.5 ring-4 ring-blue-500/20 group-hover:scale-125 transition-transform" />
                      <h3 className="text-xl font-bold tracking-tight mb-2 text-zinc-900 dark:text-white">{edu.degree}</h3>
                      <div className="flex flex-col md:flex-row md:items-center justify-between text-zinc-600 dark:text-zinc-400 text-sm">
                        <span className="font-medium text-zinc-800 dark:text-zinc-200">{edu.school}</span>
                        <span className="mt-1 md:mt-0 font-mono">{edu.period}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section> */}
        <ExpriencSkills MaskText={MaskText} />

        {/* InfiniteMarquee */}
        <InfiniteMarquee />

        {/* ProjectList */}

        {/* <section id="projects" className="pt-32 pb-20 max-w-7xl mx-auto"> */}
        {/* <div className="px-4 md:px-12 mb-12 flex items-center justify-between">
            <MaskText phrase="SELECTED WORKS" className="text-sm font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline">(HOVER TO PREVIEW)</span>
          </div> */}
        <ProjectList MaskText={MaskText} />
        {/* </section> */}

        {/* RESUME SECTION */}
        {/* <section id="resume" className="py-32 px-4 md:px-12 max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800"> */}
        {/* <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
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
                  className="px-5 py-2.5 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" /> Download PDF
                </button>
              </div>
            </div>
          </motion.div> */}

        <Resume MaskText={MaskText} />
        {/* </section> */}

        {/* ENHANCED CONTACT SECTION */}
        {/* <section id="contact" className="py-32 px-4 md:px-12 bg-white/90 text-zinc-900 dark:bg-[#050505]/95 dark:text-white relative z-10 pointer-events-auto overflow-hidden backdrop-blur-xl transition-colors duration-500 border-t border-zinc-200 dark:border-zinc-800">
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
                  <span className="font-mono text-[11px] text-zinc-700 dark:text-zinc-300 font-medium truncate mr-2">divyanshprajapat@example.com</span>
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
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">Available for calls and urgent queries.</p>
                </div>
                <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-700 dark:text-zinc-300 font-medium">+91 98765 43210</span>
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
                  href="mailto:divyanshprajapat@example.com"
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
        </section> */}
        <Contact Magnetic={Magnetic} MaskText={MaskText} />
      </main>
    </div>
  );
}