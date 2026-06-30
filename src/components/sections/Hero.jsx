import { useState } from "react"

import {
  ArrowRight,
  Code2,
  Database,
  Download,
  Layers3,
  Server,
  Sparkles,
  Zap,
} from "lucide-react"
import { FaGithub } from "react-icons/fa"

import { AnimatePresence, motion } from "framer-motion"

import MobileHeroCarousel from "../hero/MobileHeroCarousel"
import RotatingText from "../reactbits/RotatingText"

const capabilities = [
  {
    id: "backend",
    label: "Backend",
    title: "Backend Development",
    description:
      "APIs REST, lógica de negocio, autenticación, integración de servicios y análisis de incidencias.",
    icon: Server,
    tags: ["Node.js", "REST APIs", "Logs", "Integraciones"],
  },
  {
    id: "frontend",
    label: "Frontend",
    title: "Frontend Development",
    description:
      "Interfaces responsivas, componentes reutilizables, experiencia de usuario y desarrollo web moderno.",
    icon: Code2,
    tags: ["React", "Vite", "Tailwind", "UI"],
  },
  {
    id: "data",
    label: "Datos",
    title: "Bases de Datos",
    description:
      "Persistencia, consultas, estructuras de datos y manejo de información para sistemas web y escritorio.",
    icon: Database,
    tags: ["SQLite", "Firebase", "MongoDB", "SQL"],
  },
  {
    id: "automation",
    label: "Auto",
    title: "Automatización",
    description:
      "Automatización de procesos, flujos comerciales, herramientas internas e IA aplicada a operación.",
    icon: Zap,
    tags: ["Procesos", "IA", "Workflows", "Operación"],
  },
  {
    id: "deploy",
    label: "Deploy",
    title: "Deploy & Delivery",
    description:
      "Publicación, mantenimiento y despliegue de proyectos usando plataformas modernas.",
    icon: Layers3,
    tags: ["Vercel", "Hostinger", "GitHub", "Hosting"],
  },
]

const stats = [
  {
    value: "3+",
    label: "Sitios web reales",
  },
  {
    value: "1",
    label: "Sistema POS vendido",
  },
  {
    value: "B2",
    label: "Inglés",
  },
]

function Hero() {
  const [activeCapability, setActiveCapability] = useState(capabilities[0])

  const ActiveIcon = activeCapability.icon

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20 lg:pt-36"
    >
      <div className="mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="mb-7 inline-flex w-fit items-center gap-3 rounded-full border border-emerald-300/20 bg-emerald-400/[0.08] px-4 py-2 text-[0.72rem] font-black uppercase tracking-[0.22em] text-emerald-200 shadow-lg shadow-emerald-500/10 backdrop-blur-xl sm:text-xs"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.9)]" />
            Disponible para oportunidades
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
            className="mb-5 flex items-center gap-3 text-sm font-black uppercase tracking-[0.34em] text-cyan-300 sm:text-base"
          >
            <Sparkles size={16} />
            Portfolio profesional
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.24, ease: "easeOut" }}
            className="max-w-4xl text-[4.2rem] font-black leading-[0.9] tracking-[-0.085em] text-white sm:text-[5.5rem] md:text-[6.4rem] lg:text-[5.7rem] xl:text-[6.7rem]"
          >
            Edgar
            <br />
            Rodriguez
            <br />
            Backend &
            <br />
            Fullstack
            <br />
            Developer Jr
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.34, ease: "easeOut" }}
            className="mt-7 flex w-fit max-w-full flex-wrap items-center gap-3 rounded-[1.4rem] border border-white/10 bg-slate-950/50 px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl"
          >
            <span className="text-sm font-bold text-slate-400">
              Enfoque:
            </span>

            <div className="min-w-[13rem]">
              <RotatingText
                texts={[
                  "Backend",
                  "Fullstack",
                  "React",
                  "APIs REST",
                  "Automatización",
                ]}
                mainClassName="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-cyan-100"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2400}
              />
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.42, ease: "easeOut" }}
            className="mt-7 max-w-2xl text-lg font-medium leading-8 text-slate-300 sm:text-xl sm:leading-9"
          >
            Desarrollador junior con experiencia real creando sitios web,
            sistemas internos, automatizaciones, integraciones y soluciones
            digitales orientadas a negocio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.5, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a
              href="#proyectos"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-6 py-4 text-sm font-black text-cyan-50 shadow-lg shadow-cyan-500/10 transition hover:border-cyan-300/40 hover:bg-cyan-300/16"
            >
              Ver proyectos
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href="/CV_Edgar_Rodriguez.pdf"
              download
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-6 py-4 text-sm font-black text-slate-100 transition hover:border-white/20 hover:bg-white/[0.1]"
            >
              <Download size={17} />
              Descargar CV
            </a>

            <a
              href="https://github.com/edgarbv32"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-sm font-black text-slate-200 transition hover:border-white/20 hover:bg-white/[0.09]"
            >
              <FaGithub />
              GitHub
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.62, delay: 0.58, ease: "easeOut" }}
            className="mt-8 hidden grid-cols-3 gap-3 sm:grid"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-4 shadow-lg shadow-black/10 backdrop-blur-xl"
              >
                <p className="text-2xl font-black tracking-[-0.04em] text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.54 }}
            className="mt-9"
          >
            <MobileHeroCarousel />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.78, delay: 0.2, ease: "easeOut" }}
          className="relative z-10 hidden w-full min-w-0 lg:block"
        >
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/62 shadow-2xl shadow-black/35 backdrop-blur-2xl">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-fuchsia-500/10" />

            <div className="relative border-b border-white/10 p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-black tracking-[-0.05em] text-white">
                    Developer Command Center
                  </h2>

                  <p className="mt-2 text-base font-medium text-slate-400">
                    Selecciona una capacidad técnica
                  </p>
                </div>

                <div className="flex gap-2">
                  <span className="h-3.5 w-3.5 rounded-full bg-red-400" />
                  <span className="h-3.5 w-3.5 rounded-full bg-yellow-400" />
                  <span className="h-3.5 w-3.5 rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>

            <div className="relative border-b border-white/10 p-6">
              <div className="grid grid-cols-5 gap-3">
                {capabilities.map((capability) => {
                  const Icon = capability.icon
                  const isActive = activeCapability.id === capability.id

                  return (
                    <button
                      key={capability.id}
                      type="button"
                      onClick={() => setActiveCapability(capability)}
                      className={`group relative overflow-hidden rounded-2xl border p-4 text-center transition duration-300 ${
                        isActive
                          ? "border-cyan-300/35 bg-cyan-300/14 text-cyan-50 shadow-lg shadow-cyan-500/10"
                          : "border-white/10 bg-white/[0.035] text-slate-200 hover:border-cyan-300/20 hover:bg-white/[0.06]"
                      }`}
                    >
                      <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-300/8 to-transparent opacity-0 transition group-hover:opacity-100" />

                      <Icon
                        size={20}
                        className="relative mx-auto mb-4 text-cyan-300"
                      />

                      <span className="relative text-base font-black tracking-[-0.03em]">
                        {capability.label}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="relative p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCapability.id}
                  initial={{ opacity: 0, y: 16, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -14, scale: 0.98 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-8 text-center shadow-xl shadow-black/10"
                >
                  <div className="mx-auto mb-6 grid h-16 w-16 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 shadow-lg shadow-cyan-500/10">
                    <ActiveIcon size={30} />
                  </div>

                  <h3 className="text-4xl font-black tracking-[-0.065em] text-white">
                    {activeCapability.title}
                  </h3>

                  <p className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-8 text-slate-300">
                    {activeCapability.description}
                  </p>

                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    {activeCapability.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm font-black text-slate-200"
                      >
                        {tag}
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