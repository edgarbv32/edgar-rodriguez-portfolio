import { motion } from "framer-motion"
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaAws,
} from "react-icons/fa"
import {
  SiJavascript,
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiSqlite,
  SiFirebase,
  SiDotnet,
  SiVercel,
  SiPostman,
  SiFlutter,
  SiDart,
} from "react-icons/si"
import { TbApi, TbBrandVscode } from "react-icons/tb"
import { MdAutoFixHigh } from "react-icons/md"

const skillGroups = [
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
      { name: ".NET básico", icon: SiDotnet, color: "#512BD4" },
      { name: "REST APIs", icon: TbApi, color: "#38BDF8" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Bases de datos",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firestore", icon: SiFirebase, color: "#FFCA28" },
      { name: "SQL / NoSQL", icon: TbApi, color: "#A78BFA" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Vite", icon: SiVite, color: "#646CFF" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Cloud & Deploy",
    items: [
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Hostinger", icon: TbApi, color: "#673DE6" },
      { name: "AWS básico", icon: FaAws, color: "#FF9900" },
      { name: "Variables de entorno", icon: TbApi, color: "#22C55E" },
    ],
  },
  {
    title: "Herramientas",
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
  {
    title: "Mobile / Desktop / Automatización",
    items: [
      { name: "Tauri", icon: TbApi, color: "#FFC131" },
      { name: "Electron", icon: TbApi, color: "#47848F" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "Automatización", icon: MdAutoFixHigh, color: "#C084FC" },
    ],
  },
]

function Stack() {
  return (
    <section id="stack" className="relative scroll-mt-24 px-5 py-24 md:px-8">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
            Stack tecnológico
          </p>

          <h2 className="text-4xl font-black text-white md:text-5xl">
            Tecnologías que uso para construir{" "}
            <span className="bg-linear-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
              soluciones completas.
            </span>
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="rounded-3xl border border-white/10 bg-slate-950/50 p-6 shadow-xl shadow-black/20 backdrop-blur-xl transition hover:border-white/20"
            >
              <h3 className="mb-6 text-xl font-bold text-white">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {group.items.map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.name}
                      style={{ "--skill-color": item.color }}
                      className="skill-card group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.025] p-4 text-center transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.055]"
                    >
                      <Icon className="skill-icon mb-3 text-3xl text-slate-300 transition duration-300" />

                      <p className="text-xs font-semibold text-slate-300 transition group-hover:text-white">
                        {item.name}
                      </p>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack