import { useState } from "react"

import {
  ArrowRight,
  Code2,
  Database,
  Download,
  Layers3,
  Server,
  Zap,
} from "lucide-react"

import { FaGithub } from "react-icons/fa"

import { AnimatePresence, motion } from "framer-motion"

import MobileHeroCarousel from "../hero/MobileHeroCarousel"
import RotatingText from "../reactbits/RotatingText"

const rotatingTexts = [
  "Software Developer",
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Node.js",
  "Java",
  "C# / .NET",
  "APIs REST",
  "SQL",
]

const capabilities = [
  {
    id: "languages",
    label: "Lenguajes",
    title: "Lenguajes de programación",
    description:
      "Base técnica en JavaScript, TypeScript, Java, C#, C, C++, Python y Dart, aplicada en proyectos web, escritorio, bases de datos e integración de servicios.",
    icon: Code2,
    tags: ["JavaScript", "Java", "C# / .NET", "C / C++", "Python"],
  },
  {
    id: "frontend",
    label: "Frontend",
    title: "Frontend Development",
    description:
      "Construcción de interfaces responsivas, componentes reutilizables y experiencias web modernas con React, HTML5, CSS3, Tailwind CSS y Vite.",
    icon: Layers3,
    tags: ["React", "HTML5", "CSS3", "Tailwind", "Vite"],
  },
  {
    id: "backend",
    label: "Backend",
    title: "Backend Development",
    description:
      "Desarrollo de lógica de negocio, servicios, APIs REST, integraciones, automatización y soporte técnico para soluciones digitales reales.",
    icon: Server,
    tags: ["Node.js", "APIs REST", ".NET", "Integraciones"],
  },
  {
    id: "data",
    label: "Datos",
    title: "Bases de datos",
    description:
      "Manejo de persistencia local, bases relacionales y servicios NoSQL para sistemas web, aplicaciones de escritorio y flujos internos.",
    icon: Database,
    tags: ["SQL", "SQLite", "Firebase", "MongoDB", "MySQL"],
  },
  {
    id: "automation",
    label: "Auto",
    title: "Automatización e integración",
    description:
      "Automatización de procesos, conexión de herramientas, revisión de logs, soporte operativo e implementación de soluciones orientadas a negocio.",
    icon: Zap,
    tags: ["Automatización", "APIs", "Logs", "Procesos"],
  },
]

const stats = [
  {
    value: "+2",
    label: "Años de experiencia práctica",
  },
  {
    value: "ISC",
    label: "Ingeniería en Sistemas Computacionales",
  },
  {
    value: "3+",
    label: "Proyectos web reales",
  },
  {
    value: "POS",
    label: "Sistema vendido",
  },
]

function Hero() {
  const [activeCapability, setActiveCapability] = useState(capabilities[0])
  const ActiveIcon = activeCapability.icon

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pb-16 pt-28 md:px-8 lg:pb-20 lg:pt-32"
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.78fr)] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="min-w-0"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.8)]" />
            Disponible para oportunidades
          </div>

          <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-slate-500">
            Edgar Yarib Rodriguez Carrasco
          </p>

          <h1 className="max-w-5xl text-[3.4rem] font-black leading-[0.9] tracking-[-0.075em] text-white min-[390px]:text-[3.85rem] sm:text-[5rem] md:text-[5.6rem] lg:text-[6.1rem] xl:text-[6.9rem]">
            Full Stack
            <br />
            Developer
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
              Stack:
            </span>

            <RotatingText
              texts={rotatingTexts}
              mainClassName="rounded-xl border border-indigo-300/20 bg-indigo-500/10 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-indigo-100"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2200}
            />
          </div>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Ingeniero en Sistemas Computacionales con más de 2 años de
            experiencia práctica desarrollando software, aplicaciones web,
            sistemas internos, integraciones, automatización de procesos y
            soluciones tecnológicas orientadas al negocio.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-4 font-black text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-1"
            >
              Ver proyectos
              <ArrowRight size={18} />
            </a>

            <a
              href="/CV_Edgar_Rodriguez.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 font-black text-white transition hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-indigo-500/10"
            >
              Descargar CV
              <Download size={18} />
            </a>

            <a
              href="https://github.com/edgarbv32"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 font-black text-white transition hover:-translate-y-1 hover:border-indigo-400/30 hover:bg-indigo-500/10"
            >
              <FaGithub />
              GitHub
            </a>
          </div>

          <div className="mt-8 grid max-w-4xl gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
              >
                <p className="text-2xl font-black tracking-[-0.05em] text-white">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div>
          <div className="hidden lg:block">
            <motion.div
              initial={{ opacity: 0, x: 28, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.08 }}
              className="relative overflow-hidden rounded-[2rem] border border-indigo-300/20 bg-[#050816] p-5 shadow-2xl shadow-black/30 xl:p-6"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.2),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.13),transparent_42%)]" />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[length:42px_42px] opacity-20 [mask-image:radial-gradient(circle_at_top_right,black,transparent_62%)]" />

              <div className="relative z-10">
                <div className="mb-5 text-center">
                  <h2 className="text-[2.05rem] font-black leading-none tracking-[-0.06em] text-white xl:text-[2.35rem]">
                    Capacidades técnicas principales
                  </h2>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {capabilities.map((capability) => {
                    const Icon = capability.icon
                    const isActive = activeCapability.id === capability.id

                    return (
                      <button
                        key={capability.id}
                        type="button"
                        onClick={() => setActiveCapability(capability)}
                        className={[
                          "group flex min-h-[4.6rem] min-w-0 flex-col items-center justify-center rounded-2xl border px-2 py-3 text-center transition duration-300",
                          isActive
                            ? "border-indigo-400/40 bg-indigo-400/14 text-indigo-50 shadow-lg shadow-indigo-500/10"
                            : "border-white/10 bg-white/[0.035] text-slate-200 hover:border-indigo-400/20 hover:bg-white/[0.06]",
                        ].join(" ")}
                      >
                        <Icon className="mb-2" size={18} />

                        <span className="block max-w-full truncate text-[0.6rem] font-black uppercase tracking-[0.12em] xl:text-[0.64rem]">
                          {capability.label}
                        </span>
                      </button>
                    )
                  })}
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCapability.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.24, ease: "easeOut" }}
                    className="mt-5 rounded-3xl border border-white/10 bg-white/[0.035] p-6"
                  >
                    <div className="mb-5 flex flex-col items-center text-center">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-200">
                        <ActiveIcon size={25} />
                      </div>

                      <div className="mt-5 max-w-xl">
                        <h3 className="text-3xl font-black tracking-[-0.06em] text-white">
                          {activeCapability.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-400">
                          {activeCapability.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2">
                      {activeCapability.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.12em] text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          <MobileHeroCarousel />
        </div>
      </div>
    </section>
  )
}

export default Hero