import React from 'react'
import { motion } from 'framer-motion';


export default function ExpriencSkills({ MaskText }) {
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

  return (
    <section id="experience" className="py-20 md:py-32 px-4 md:px-12 max-w-7xl mx-auto border-t border-zinc-200 dark:border-zinc-800">
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
    </section>
  )
}
