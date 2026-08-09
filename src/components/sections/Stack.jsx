import { useState } from "react"

import {
  AnimatePresence,
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
} from "framer-motion"
import { ChevronDown } from "lucide-react"

import {
  FaAws,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa"

import {
  SiDart,
  SiDotnet,
  SiFirebase,
  SiJavascript,
  SiMeta,
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
  TbActivity,
  TbApi,
  TbBrain,
  TbBrandVscode,
  TbCloudUpload,
  TbCode,
  TbDatabase,
  TbFileText,
  TbLock,
  TbPlugConnected,
  TbRepeat,
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
      { name: "PHP", icon: FaPhp, color: "#777BB4" },
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
      {
        name: "Autenticación",
        icon: TbLock,
        color: "#6366F1",
        strong: true,
      },
      { name: "Análisis de logs", icon: TbFileText, color: "#818CF8" },
      { name: "Monitoreo de servicios", icon: TbActivity, color: "#A78BFA" },
      { name: "IA aplicada", icon: TbBrain, color: "#C084FC" },
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
      { name: "Scrum", icon: TbRepeat, color: "#38BDF8" },
      {
        name: "Meta Business Suite",
        icon: SiMeta,
        color: "#0866FF",
      },
    ],
  },
  {
    title: "Desktop / Mobile",
    description:
      "Experiencia complementaria en aplicaciones de escritorio, soluciones multiplataforma y móvil.",
    icon: TbApi,
    items: [
      { name: "Tauri", icon: TbApi, color: "#FFC131", strong: true },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
    ],
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

function StackTile({ item, index }) {
  const Icon = item.icon
  const [isActive, setIsActive] = useState(false)

  return (
    <motion.button
      type="button"
      aria-label={item.name}
      initial={{ opacity: 0, y: 14, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.025, ease: "easeOut" }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onBlur={() => setIsActive(false)}
      onClick={() => setIsActive((current) => !current)}
      style={{
        borderColor: isActive ? `${item.color}66` : undefined,
        boxShadow: isActive
          ? `0 0 28px -4px ${item.color}66, inset 0 1px 0 rgba(255,255,255,0.08)`
          : undefined,
      }}
      className="group relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] transition-all duration-300 sm:h-16 sm:w-16"
    >
      <Icon
        className="text-2xl transition-transform duration-300 group-hover:scale-110 sm:text-3xl"
        style={{ color: item.color }}
      />

      <AnimatePresence>
        {isActive && (
          <motion.span
            role="tooltip"
            initial={{ opacity: 0, y: 6, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 6, x: "-50%" }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="pointer-events-none absolute -top-3 left-1/2 -translate-y-full whitespace-nowrap rounded-full border border-white/10 bg-[#0a0f1f] px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-black/40"
          >
            {item.name}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

const RING_STEP_DEG = 24
const RING_DRAG_SENSITIVITY = 0.35

// Orders items center-out (0deg, +step, -step, +2*step, -2*step, ...) so
// items placed first in `items` land closest to the front-facing angle.
function buildRingSlots(items) {
  const angles = [0]
  let step = 1

  while (angles.length < items.length) {
    angles.push(step * RING_STEP_DEG)
    if (angles.length < items.length) angles.push(-step * RING_STEP_DEG)
    step += 1
  }

  return items.map((item, index) => ({ ...item, angle: angles[index] }))
}

const ringItems = buildRingSlots([
  ...mainLogos.filter((item) => item.featured),
  ...mainLogos.filter((item) => !item.featured),
])

function StackRingItem({ item }) {
  const Icon = item.icon
  const [isActive, setIsActive] = useState(false)
  const depth = Math.min(Math.abs(item.angle) / 180, 1)
  const restOpacity = 1 - depth * 0.65

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        "--item-angle": `${item.angle}deg`,
        transform:
          "translate(-50%, -50%) translate3d(calc(var(--ring-radius-x) * sin(var(--item-angle))), 0px, calc(var(--ring-radius-z) * cos(var(--item-angle)))) rotateY(var(--item-angle))",
      }}
    >
      <button
        type="button"
        aria-label={item.name}
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        onClick={() => setIsActive((current) => !current)}
        style={{
          opacity: isActive ? 1 : restOpacity,
          borderColor: isActive ? `${item.color}66` : undefined,
          boxShadow: isActive
            ? `0 0 28px -4px ${item.color}66, inset 0 1px 0 rgba(255,255,255,0.08)`
            : undefined,
        }}
        className="group relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] transition-[opacity,box-shadow,border-color] duration-300 sm:h-16 sm:w-16"
      >
        <Icon
          className="text-2xl transition-transform duration-300 group-hover:scale-110 sm:text-3xl"
          style={{ color: item.color }}
        />

        <AnimatePresence>
          {isActive && (
            <motion.span
              role="tooltip"
              initial={{ opacity: 0, y: 6, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 6, x: "-50%" }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="pointer-events-none absolute -top-3 left-1/2 -translate-y-full whitespace-nowrap rounded-full border border-white/10 bg-[#0a0f1f] px-3 py-1.5 text-xs font-black uppercase tracking-[0.12em] text-white shadow-lg shadow-black/40"
            >
              {item.name}
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  )
}

function StackRing() {
  const rotateY = useMotionValue(0)

  const handleDrag = (_, info) => {
    rotateY.set(rotateY.get() + info.delta.x * RING_DRAG_SENSITIVITY)
  }

  const handleDragEnd = (_, info) => {
    const velocity = info.velocity.x * RING_DRAG_SENSITIVITY

    animate(rotateY, rotateY.get() + velocity * 0.25, {
      type: "inertia",
      velocity,
      power: 0.5,
      timeConstant: 350,
      restDelta: 0.02,
    })
  }

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      animate(rotateY, rotateY.get() - RING_STEP_DEG, {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      })
    } else if (event.key === "ArrowRight") {
      event.preventDefault()
      animate(rotateY, rotateY.get() + RING_STEP_DEG, {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      })
    }
  }

  return (
    <motion.div
      role="group"
      aria-label="Tecnologías principales. Arrastra o usa las flechas del teclado para rotar."
      tabIndex={0}
      onKeyDown={handleKeyDown}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0}
      dragMomentum={false}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      className="relative mx-auto h-64 w-full max-w-xl cursor-grab touch-pan-y select-none rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030712] active:cursor-grabbing sm:h-72 sm:max-w-2xl lg:max-w-3xl [--ring-radius-x:clamp(188px,20vw,227px)] lg:[--ring-radius-x:clamp(227px,30vw,380px)]"
      style={{
        perspective: "1000px",
        "--ring-radius-z": "clamp(188px, 20vw, 227px)",
      }}
    >
      <motion.div
        style={{ rotateY, transformStyle: "preserve-3d" }}
        className="absolute left-1/2 top-1/2 h-0 w-0"
      >
        {ringItems.map((item) => (
          <StackRingItem key={item.name} item={item} />
        ))}
      </motion.div>
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

function CategoryAccordionItem({ category, index }) {
  const Icon = category.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
        ease: "easeOut",
      }}
    >
      <details className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] open:border-indigo-300/25 open:bg-white/5">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 p-4 marker:content-none [&::-webkit-details-marker]:hidden">
          <span className="flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-200">
              <Icon size={17} />
            </span>

            <span className="truncate text-sm font-black tracking-[-0.03em] text-white">
              {category.title}
            </span>

            <span className="shrink-0 text-[0.65rem] font-bold text-slate-500">
              ({category.items.length})
            </span>
          </span>

          <ChevronDown
            className="shrink-0 text-slate-500 transition duration-300 group-open:rotate-180 group-open:text-indigo-300"
            size={18}
          />
        </summary>

        <div className="px-4 pb-4">
          <p className="mb-3 text-sm leading-6 text-slate-400">
            {category.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {category.items.map((item) => (
              <TechChip key={item.name} item={item} />
            ))}
          </div>
        </div>
      </details>
    </motion.div>
  )
}

function Stack() {
  const prefersReducedMotion = useReducedMotion()

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
            Stack de{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              software, web y datos.
            </span>
          </h2>

          <p className="mt-6 hidden max-w-3xl text-lg leading-8 text-slate-300 md:block">
            Tecnologías principales y complementarias organizadas para conectar
            con vacantes de desarrollo: lenguajes de programación, frontend,
            backend, bases de datos, herramientas, deploy y experiencia
            multiplataforma.
          </p>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:hidden">
            Tecnologías organizadas por área: lenguajes, frontend, backend,
            datos y deploy.
          </p>
        </motion.div>

        {prefersReducedMotion ? (
          <div className="mb-14 flex flex-wrap justify-center gap-3 sm:gap-4 md:grid md:grid-cols-5 md:items-center md:justify-items-center md:gap-6">
            {mainLogos.map((item, index) => (
              <StackTile key={item.name} item={item} index={index} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-14"
          >
            <StackRing />
          </motion.div>
        )}

        <div className="hidden gap-4 md:grid">
          {categories.map((category, index) => (
            <CategoryRow
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>

        <div className="grid gap-2.5 md:hidden">
          {categories.map((category, index) => (
            <CategoryAccordionItem
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stack