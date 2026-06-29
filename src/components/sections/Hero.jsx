import { useState } from "react"
import {
  ArrowDown,
  Code2,
  Database,
  Layers3,
  Server,
  Zap,
} from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const techChips = ["Node.js", "React", "MongoDB", "SQL", "APIs REST"]

const capabilities = [
  {
    label: "Backend",
    icon: Server,
    title: "Backend Development",
    description:
      "APIs REST, lógica de negocio, autenticación, integración de servicios y análisis de incidencias.",
    points: ["Node.js", "REST APIs", "Logs", "Integraciones"],
  },
  {
    label: "Frontend",
    icon: Code2,
    title: "Frontend Interfaces",
    description:
      "Interfaces modernas, responsivas y orientadas a experiencia de usuario con React, Vite y Tailwind CSS.",
    points: ["React", "Vite", "Tailwind", "Responsive UI"],
  },
  {
    label: "Datos",
    icon: Database,
    title: "Data & Persistence",
    description:
      "Manejo de bases de datos SQL y NoSQL para aplicaciones web, sistemas internos, dashboards y persistencia local.",
    points: ["MongoDB", "SQLite", "MySQL", "Firebase"],
  },
  {
    label: "Auto",
    icon: Zap,
    title: "Automation & Workflows",
    description:
      "Automatización de procesos comerciales, flujos digitales, herramientas internas e IA aplicada a negocio.",
    points: ["Procesos", "IA aplicada", "Servicios", "Operación"],
  },
  {
    label: "Deploy",
    icon: Layers3,
    title: "Deploy & Delivery",
    description:
      "Publicación, mantenimiento y despliegue de sitios y aplicaciones usando plataformas modernas.",
    points: ["Vercel", "Hostinger", "GitHub", "AWS básico"],
  },
]

function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeCapability = capabilities[activeIndex]
  const ActiveIcon = activeCapability.icon

  return (
    <section
      id="inicio"
      className="relative scroll-mt-28 px-5 pb-10 pt-24 md:px-8 md:pb-12 md:pt-30 lg:pb-14 lg:pt-36"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="min-w-0"
        >
          <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-emerald-200 shadow-lg shadow-emerald-500/10 backdrop-blur-xl sm:text-sm sm:tracking-[0.18em]">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span className="sm:hidden">Disponible</span>
            <span className="hidden sm:inline">
              Disponible para oportunidades
            </span>
          </div>

          <h1 className="max-w-4xl text-[2.75rem] font-black leading-[0.96] tracking-tight text-white min-[390px]:text-[3.2rem] sm:text-6xl lg:text-7xl xl:text-8xl">
            Edgar Rodriguez
          </h1>

          <h2 className="mt-5 max-w-3xl text-[1.9rem] font-extrabold leading-tight text-slate-100 min-[390px]:text-[2.15rem] sm:text-4xl lg:text-5xl">
            Backend Developer{" "}
            <span className="block bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent sm:inline">
              | Fullstack Developer
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Desarrollador enfocado en crear soluciones web, APIs,
            automatización e integración de sistemas. Experiencia real
            construyendo proyectos para negocio, operación y presencia digital.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-2.5 min-[420px]:grid-cols-3 sm:flex sm:flex-wrap">
            {techChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-center text-sm font-semibold text-slate-200 backdrop-blur-xl"
              >
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 px-6 py-4 font-bold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:shadow-cyan-500/30"
            >
              Ver proyectos
              <ArrowDown size={18} />
            </a>

            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 font-bold text-white backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              Contáctame
            </a>
          </div>

          <div className="mt-7 flex items-center gap-3">
            <a
              href="https://github.com/edgarbv32"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-slate-300 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              aria-label="GitHub"
            >
              <FaGithub size={19} />
            </a>

            <a
              href="#"
              className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-slate-300 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={19} />
            </a>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
              <p className="text-3xl font-black text-white">3+</p>
              <p className="mt-1 text-sm font-medium text-slate-400">
                Proyectos reales
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
              <p className="text-2xl font-black text-white sm:text-3xl">
                2025–2026
              </p>
              <p className="mt-1 text-sm font-medium text-slate-400">
                Experiencia profesional
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl">
              <p className="text-2xl font-black text-white sm:text-3xl">
                SQL + NoSQL
              </p>
              <p className="mt-1 text-sm font-medium text-slate-400">
                Bases de datos
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="min-w-0"
        >
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/45 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div className="min-w-0">
                <p className="text-sm font-bold text-white">
                  Developer Command Center
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Selecciona una capacidad técnica
                </p>
              </div>

              <div className="flex shrink-0 gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 border-b border-white/10 p-3 min-[430px]:grid-cols-3 lg:grid-cols-5">
              {capabilities.map((item, index) => {
                const Icon = item.icon
                const isActive = activeIndex === index

                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`min-w-0 rounded-2xl border p-3 text-left transition ${
                      isActive
                        ? "border-cyan-300/45 bg-cyan-400/15 shadow-lg shadow-cyan-500/10"
                        : "border-white/10 bg-white/[0.035] hover:border-cyan-400/30 hover:bg-cyan-400/10"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={
                        isActive ? "mb-2 text-cyan-200" : "mb-2 text-cyan-300"
                      }
                    />

                    <p className="text-sm font-bold leading-tight text-slate-100">
                      {item.label}
                    </p>
                  </button>
                )
              })}
            </div>

            <div className="p-5 sm:p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-5"
                >
                  <div className="mb-4 flex items-start gap-3">
                    <div className="shrink-0 rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                      <ActiveIcon size={22} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-xl font-black leading-tight text-white">
                        {activeCapability.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base">
                        {activeCapability.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {activeCapability.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-slate-300"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero