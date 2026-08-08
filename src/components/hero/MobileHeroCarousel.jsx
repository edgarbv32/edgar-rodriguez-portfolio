import { useEffect, useRef, useState } from "react"

import {
  Code2,
  Database,
  GraduationCap,
  Layers3,
  Server,
  Zap,
} from "lucide-react"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"

const AUTO_ADVANCE_MS = 4500
const RESUME_AFTER_INTERACTION_MS = 6000

const slides = [
  {
    id: "languages",
    number: "01",
    title: "Lenguajes",
    subtitle: "Base de programación",
    description:
      "Conocimientos en JavaScript, TypeScript, Java, C#, C, C++, Python y Dart para construir soluciones web, escritorio y lógica de negocio.",
    icon: Code2,
    tags: ["JavaScript", "Java", "C# / .NET", "C / C++", "Python"],
  },
  {
    id: "frontend",
    number: "02",
    title: "Frontend",
    subtitle: "Interfaces modernas",
    description:
      "Desarrollo de interfaces responsivas y componentes reutilizables con React, HTML5, CSS3, Tailwind CSS y Vite.",
    icon: Layers3,
    tags: ["React", "HTML5", "CSS3", "Tailwind"],
  },
  {
    id: "backend",
    number: "03",
    title: "Backend",
    subtitle: "APIs e integraciones",
    description:
      "Construcción de lógica de negocio, servicios, APIs REST, integración de herramientas y automatización de procesos.",
    icon: Server,
    tags: ["Node.js", "APIs REST", ".NET básico", "Integraciones"],
  },
  {
    id: "data",
    number: "04",
    title: "Datos",
    subtitle: "SQL, NoSQL y persistencia",
    description:
      "Manejo de bases de datos locales, relacionales y servicios cloud para sistemas web, escritorio y plataformas internas.",
    icon: Database,
    tags: ["SQL", "SQLite", "Firebase", "MongoDB", "MySQL"],
  },
  {
    id: "automation",
    number: "05",
    title: "Automatización",
    subtitle: "Procesos y operación",
    description:
      "Automatización de flujos comerciales, herramientas internas, revisión de logs, procesos digitales e IA aplicada a negocio.",
    icon: Zap,
    tags: ["Procesos", "APIs", "Logs", "IA"],
  },
  {
    id: "profile",
    number: "06",
    title: "Perfil",
    subtitle: "Ingeniería en Sistemas",
    description:
      "Egresado de Ingeniería en Sistemas Computacionales con enfoque en desarrollo de software, soluciones digitales e integración tecnológica.",
    icon: GraduationCap,
    tags: ["ISC", "Software", "Negocio", "Soluciones"],
  },
]

function SlideBody({ slide }) {
  const Icon = slide.icon

  return (
    <>
      <div className="mb-8 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <span className="text-sm font-black text-indigo-300">
            {slide.number} /
          </span>

          <h3 className="mt-3 break-words text-[2.15rem] font-black leading-[0.9] tracking-[-0.065em] text-white min-[380px]:text-[2.4rem] sm:text-[2.65rem]">
            {slide.title}
          </h3>

          <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-slate-400">
            {slide.subtitle}
          </p>
        </div>

        <div className="grid h-[3.5rem] w-[3.5rem] shrink-0 place-items-center rounded-2xl border border-indigo-300/25 bg-indigo-500/10 text-indigo-200 shadow-lg shadow-indigo-500/10">
          <Icon size={26} />
        </div>
      </div>

      <p className="max-w-sm text-base font-medium leading-7 text-slate-300">
        {slide.description}
      </p>

      <div className="mt-7 flex flex-wrap gap-2">
        {slide.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  )
}

function SlideDots({ activeIndex, onSelect }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Ir a ${slide.title}`}
            className="flex items-center justify-center p-2"
          >
            <span
              className={`block h-2.5 rounded-full transition-all ${
                activeIndex === index
                  ? "w-8 bg-indigo-300"
                  : "w-2.5 bg-white/25"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

function MobileHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isInteracting, setIsInteracting] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const resumeTimeoutRef = useRef(null)

  const activeSlide = slides[activeIndex]

  const pauseAutoAdvance = () => {
    setIsInteracting(true)
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    resumeTimeoutRef.current = setTimeout(() => {
      setIsInteracting(false)
    }, RESUME_AFTER_INTERACTION_MS)
  }

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    }
  }, [])

  useEffect(() => {
    if (prefersReducedMotion || isInteracting) return

    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, AUTO_ADVANCE_MS)

    return () => clearInterval(id)
  }, [isInteracting, prefersReducedMotion])

  const goToSlide = (index) => {
    setActiveIndex(index)
    pauseAutoAdvance()
  }

  const handleDragEnd = (_, info) => {
    const swipeOffset = info.offset.x
    const swipeVelocity = info.velocity.x

    if (swipeOffset < -60 || swipeVelocity < -450) {
      setActiveIndex((current) => (current + 1) % slides.length)
      return
    }

    if (swipeOffset > 60 || swipeVelocity > 450) {
      setActiveIndex((current) =>
        current === 0 ? slides.length - 1 : current - 1,
      )
    }
  }

  return (
    <div className="lg:hidden">
      <div className="relative overflow-hidden rounded-[2rem] border border-indigo-300/20 bg-[#050816] shadow-2xl shadow-black/30 backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.2),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.13),transparent_42%)]" />

        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[length:42px_42px] opacity-20 [mask-image:radial-gradient(circle_at_top_right,black,transparent_62%)]" />

        {/*
          Height-locking trick: every slide's content is rendered once, invisibly,
          stacked in the same grid cell (col-start-1 row-start-1) as the visible
          animated slide below. CSS Grid sizes that cell to the tallest participant,
          so the card's height is always "as tall as the tallest slide" and never
          changes as slides swap — no per-slide layout shift on the rest of the page.
        */}
        <div className="grid grid-cols-1">
          {slides.map((slide) => (
            <div
              key={`sizer-${slide.id}`}
              aria-hidden="true"
              className="invisible col-start-1 row-start-1 flex flex-col p-5"
            >
              <SlideBody slide={slide} />
              <div className="mt-auto pt-6">
                <div className="mb-4 h-px w-full bg-white/10" />
                <SlideDots activeIndex={activeIndex} onSelect={() => {}} />
              </div>
            </div>
          ))}

          <motion.div
            className="relative col-start-1 row-start-1 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.14}
            onDragStart={pauseAutoAdvance}
            onDragEnd={handleDragEnd}
          >
            <AnimatePresence mode="wait">
              <motion.article
                key={activeSlide.id}
                initial={{ opacity: 0, x: 42, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -42, scale: 0.98 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="relative flex h-full flex-col p-5"
              >
                <SlideBody slide={activeSlide} />

                <div className="mt-auto pt-6">
                  <div className="mb-4 h-px w-full bg-white/10" />
                  <SlideDots activeIndex={activeIndex} onSelect={goToSlide} />
                </div>
              </motion.article>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default MobileHeroCarousel
