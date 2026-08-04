import { motion } from "framer-motion"

import {
  FaAws,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa"

import {
  SiDart,
  SiDotnet,
  SiFirebase,
  SiFlutter,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVite,
} from "react-icons/si"

import {
  TbApi,
  TbBrandVscode,
  TbCloudUpload,
  TbCode,
  TbDatabase,
  TbPlugConnected,
  TbServer,
} from "react-icons/tb"

import { MdAutoFixHigh } from "react-icons/md"

const mainLogos = [
  {
    name: "React",
    role: "UI",
    icon: FaReact,
    color: "#61DAFB",
    featured: true,
  },
  {
    name: "JavaScript",
    role: "Core language",
    icon: SiJavascript,
    color: "#F7DF1E",
    featured: true,
  },
  {
    name: "HTML5",
    role: "Markup",
    icon: FaHtml5,
    color: "#E34F26",
    featured: true,
  },
  {
    name: "CSS3",
    role: "Styling",
    icon: FaCss3Alt,
    color: "#1572B6",
    featured: true,
  },
  {
    name: "Node.js",
    role: "Backend",
    icon: FaNodeJs,
    color: "#5FA04E",
    featured: true,
  },
  {
    name: "Java",
    role: "Language",
    icon: FaJava,
    color: "#F89820",
    featured: true,
  },
  {
    name: "C# / .NET",
    role: "Backend base",
    icon: SiDotnet,
    color: "#512BD4",
    featured: true,
  },
  {
    name: "APIs REST",
    role: "Integración",
    icon: TbApi,
    color: "#818CF8",
    featured: true,
  },
  {
    name: "SQL",
    role: "Data",
    icon: TbDatabase,
    color: "#A78BFA",
    featured: true,
  },
  {
    name: "SQLite",
    role: "Local data",
    icon: SiSqlite,
    color: "#7C9CBF",
    featured: true,
  },
  {
    name: "Firebase",
    role: "Cloud data",
    icon: SiFirebase,
    color: "#FFCA28",
    featured: true,
  },
  {
    name: "GitHub",
    role: "Versioning",
    icon: FaGithub,
    color: "#FFFFFF",
    featured: true,
  },
  {
    name: "Vercel",
    role: "Deploy",
    icon: SiVercel,
    color: "#FFFFFF",
    featured: false,
  },
  {
    name: "Tailwind",
    role: "Styling",
    icon: SiTailwindcss,
    color: "#38BDF8",
    featured: false,
  },
  {
    name: "Automatización",
    role: "Workflow",
    icon: MdAutoFixHigh,
    color: "#C084FC",
    featured: false,
  },
]

const categories = [
  {
    title: "Lenguajes",
    description:
      "Base de programación para desarrollo web, backend, escritorio, móvil y fundamentos académicos.",
    icon: TbCode,
    items: [
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "#F7DF1E",
        strong: true,
      },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Java", icon: FaJava, color: "#F89820", strong: true },
      {
        name: "C# / .NET",
        icon: SiDotnet,
        color: "#512BD4",
        strong: true,
      },
      { name: "C", icon: TbCode, color: "#A8B9CC" },
      { name: "C++", icon: TbCode, color: "#659AD2" },
      { name: "Python", icon: FaPython, color: "#3776AB" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
    ],
  },
  {
    title: "Frontend",
    description:
      "Interfaces web, componentes reutilizables, estructura HTML, estilos CSS y diseño responsivo.",
    icon: FaReact,
    items: [
      { name: "React", icon: FaReact, color: "#61DAFB", strong: true },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26", strong: true },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", strong: true },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "#38BDF8",
        strong: true,
      },
      { name: "Vite", icon: SiVite, color: "#A855F7" },
    ],
  },
  {
    title: "Backend",
    description:
      "Lógica de negocio, APIs, integraciones, servicios internos y automatización de procesos.",
    icon: TbServer,
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#5FA04E", strong: true },
      { name: "APIs REST", icon: TbApi, color: "#818CF8", strong: true },
      {
        name: "Integraciones",
        icon: TbPlugConnected,
        color: "#A78BFA",
        strong: true,
      },
      { name: ".NET básico", icon: SiDotnet, color: "#512BD4" },
      {
        name: "Automatización",
        icon: MdAutoFixHigh,
        color: "#C084FC",
        strong: true,
      },
    ],
  },
  {
    title: "Bases de datos",
    description:
      "SQL, persistencia local, bases relacionales y servicios NoSQL para aplicaciones reales.",
    icon: TbDatabase,
    items: [
      { name: "SQL", icon: TbDatabase, color: "#A78BFA", strong: true },
      { name: "SQLite", icon: SiSqlite, color: "#7C9CBF", strong: true },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28", strong: true },
      { name: "Firestore", icon: SiFirebase, color: "#F59E0B" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "NoSQL", icon: TbDatabase, color: "#A78BFA" },
    ],
  },
  {
    title: "Deploy & Tools",
    description:
      "Publicación, control de versiones, pruebas de APIs, hosting y flujo de desarrollo.",
    icon: FaGithub,
    items: [
      { name: "Git", icon: FaGitAlt, color: "#F05032", strong: true },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF", strong: true },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF", strong: true },
      { name: "Hostinger", icon: TbCloudUpload, color: "#673DE6" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" },
      { name: "AWS básico", icon: FaAws, color: "#FF9900" },
    ],
  },
  {
    title: "Desktop / Mobile",
    description:
      "Experiencia complementaria en aplicaciones de escritorio, soluciones multiplataforma y móvil.",
    icon: TbApi,
    items: [
      { name: "Electron", icon: TbApi, color: "#47848F", strong: true },
      { name: "Tauri", icon: TbApi, color: "#FFC131" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
    ],
  },
]

const projectLinks = [
  {
    name: "Hotel San Carlos POS",
    type: "Desktop App",
    stack: "Electron · Node.js · SQLite · JavaScript · HTML · CSS",
  },
  {
    name: "SapiensAds AI",
    type: "Web Platform",
    stack: "React · Firebase · APIs REST · Tailwind · JavaScript",
  },
  {
    name: "Web Corporativo",
    type: "Corporate Websites",
    stack: "React · HTML5 · CSS3 · Vercel · Hostinger",
  },
]

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

function LogoCard({ item, index }) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.42,
        delay: index * 0.035,
        ease: "easeOut",
      }}
      className={[
        "group relative overflow-hidden rounded-3xl border bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-indigo-300/30 hover:bg-white/[0.065]",
        item.featured
          ? "border-indigo-300/20 p-5 shadow-xl shadow-indigo-500/10"
          : "border-white/10 p-4",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.18),transparent_62%)] opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div
          className={[
            "flex items-center justify-center rounded-2xl border border-white/10 bg-[#050816] shadow-lg shadow-black/20",
            item.featured ? "h-16 w-16" : "h-14 w-14",
          ].join(" ")}
        >
          <Icon
            className={[
              "transition duration-300 group-hover:scale-110",
              item.featured ? "text-4xl" : "text-3xl",
            ].join(" ")}
            style={{ color: item.color }}
          />
        </div>

        <h3
          className={[
            "mt-4 font-black tracking-[-0.04em] text-white",
            item.featured ? "text-xl" : "text-base",
          ].join(" ")}
        >
          {item.name}
        </h3>

        <p className="mt-1 text-[0.62rem] font-black uppercase tracking-[0.16em] text-slate-500">
          {item.role}
        </p>
      </div>
    </motion.div>
  )
}

function TechChip({ item }) {
  const Icon = item.icon

  return (
    <span
      className={[
        "group inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-black uppercase tracking-[0.1em] transition",
        item.strong
          ? "border-indigo-300/25 bg-indigo-500/10 text-indigo-100"
          : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-indigo-300/25 hover:bg-indigo-500/10 hover:text-white",
      ].join(" ")}
    >
      <Icon
        className="text-base transition duration-300 group-hover:scale-110"
        style={{ color: item.color }}
      />

      {item.name}
    </span>
  )
}

function CategoryRow({ category, index }) {
  const Icon = category.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.45,
        delay: index * 0.045,
        ease: "easeOut",
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:border-indigo-300/25 hover:bg-white/[0.05]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.13),transparent_44%)] opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative z-10 grid gap-5 lg:grid-cols-[0.48fr_1fr] lg:items-center">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-200">
            <Icon size={22} />
          </div>

          <div>
            <h3 className="text-2xl font-black tracking-[-0.05em] text-white">
              {category.title}
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-400">
              {category.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2.5 lg:justify-end">
          {category.items.map((item) => (
            <TechChip key={item.name} item={item} />
          ))}
        </div>
      </div>
    </motion.article>
  )
}

function ProjectLinkCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.42,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-indigo-300/25 hover:bg-white/[0.055]"
    >
      <p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-indigo-300">
        {item.type}
      </p>

      <h3 className="mt-3 text-xl font-black tracking-[-0.04em] text-white">
        {item.name}
      </h3>

      <p className="mt-3 text-sm font-semibold leading-6 text-slate-400">
        {item.stack}
      </p>
    </motion.article>
  )
}

function Stack() {
  return (
    <section
      id="stack"
      className="relative scroll-mt-24 px-5 py-16 md:px-8 lg:py-20"
    >
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Stack visual con base de{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              software, web y datos.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Tecnologías principales y complementarias organizadas para conectar
            con vacantes de desarrollo: lenguajes de programación, frontend,
            backend, bases de datos, herramientas, deploy y experiencia
            multiplataforma.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative mb-6 overflow-hidden rounded-[2rem] border border-indigo-300/20 bg-[#050816] p-5 shadow-2xl shadow-black/30 sm:p-6"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.2),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.13),transparent_42%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[length:42px_42px] opacity-20 [mask-image:radial-gradient(circle_at_top_right,black,transparent_62%)]" />

          <div className="relative z-10">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-slate-400">
                Tecnologías principales que fortalecen mi perfil para roles de
                Software Developer Jr, Web Developer, Backend Jr o Fullstack Jr.
              </p>

              <p className="text-sm font-black uppercase tracking-[0.18em] text-indigo-300">
                Primary stack
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {mainLogos.map((item, index) => (
                <LogoCard key={item.name} item={item} index={index} />
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4">
          {categories.map((category, index) => (
            <CategoryRow
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-6 rounded-[2rem] border border-white/10 bg-[#050816] p-6 shadow-2xl shadow-black/25"
        >
          <div className="mb-5">
            <h3 className="text-2xl font-black tracking-[-0.05em] text-white">
              Aplicación práctica
            </h3>

            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-400">
              Las tecnologías principales se conectan con proyectos reales:
              aplicaciones de escritorio, plataformas web, sitios corporativos,
              APIs, bases de datos y deploy.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {projectLinks.map((item, index) => (
              <ProjectLinkCard key={item.name} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stack