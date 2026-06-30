import { useState } from "react"

import { Code2, Database, Layers3, Server, Zap } from "lucide-react"

import { AnimatePresence, motion } from "framer-motion"

const slides = [
  {
    id: "backend",
    number: "01",
    title: "Backend",
    subtitle: "Lógica, APIs e integraciones",
    description:
      "Construcción de APIs REST, lógica de negocio, servicios internos, autenticación y análisis de incidencias.",
    icon: Server,
    tags: ["Node.js", "REST APIs", "Logs"],
  },
  {
    id: "frontend",
    number: "02",
    title: "Frontend",
    subtitle: "Interfaces modernas",
    description:
      "Desarrollo de interfaces responsivas, limpias y funcionales con React, Vite y Tailwind CSS.",
    icon: Code2,
    tags: ["React", "Vite", "Tailwind"],
  },
  {
    id: "data",
    number: "03",
    title: "Datos",
    subtitle: "SQL, NoSQL y persistencia",
    description:
      "Manejo de datos para sistemas web, dashboards, aplicaciones internas y persistencia local.",
    icon: Database,
    tags: ["MongoDB", "SQLite", "Firebase"],
  },
  {
    id: "automation",
    number: "04",
    title: "Automatización",
    subtitle: "Procesos y operación",
    description:
      "Automatización de flujos comerciales, herramientas internas, procesos digitales e IA aplicada a negocio.",
    icon: Zap,
    tags: ["Procesos", "IA", "Operación"],
  },
  {
    id: "deploy",
    number: "05",
    title: "Deploy",
    subtitle: "Entrega y publicación",
    description:
      "Publicación, mantenimiento y despliegue de sitios y aplicaciones usando plataformas modernas.",
    icon: Layers3,
    tags: ["Vercel", "Hostinger", "GitHub"],
  },
]

function MobileHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeSlide = slides[activeIndex]
  const ActiveIcon = activeSlide.icon

  const goToSlide = (index) => {
    setActiveIndex(index)
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
      <div className="mb-3 flex items-center justify-between px-1">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-300">
            Tech Carousel
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-400">
            Desliza para explorar
          </p>
        </div>

        <div className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-black uppercase tracking-[0.18em] text-slate-300">
          Drag
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 shadow-2xl shadow-black/30 backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/15 via-transparent to-fuchsia-500/15" />

        <motion.div
          className="relative cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.14}
          onDragEnd={handleDragEnd}
        >
          <AnimatePresence mode="wait">
            <motion.article
              key={activeSlide.id}
              initial={{ opacity: 0, x: 42, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -42, scale: 0.98 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative min-h-[22rem] p-5"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div>
                  <span className="text-sm font-black text-cyan-300">
                    {activeSlide.number} /
                  </span>

                  <h3 className="mt-3 text-[2.65rem] font-black leading-[0.9] tracking-[-0.065em] text-white">
                    {activeSlide.title}
                  </h3>

                  <p className="mt-3 text-sm font-black uppercase tracking-[0.16em] text-slate-400">
                    {activeSlide.subtitle}
                  </p>
                </div>

                <div className="grid h-[3.5rem] w-[3.5rem] shrink-0 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 shadow-lg shadow-cyan-500/10">
                  <ActiveIcon size={26} />
                </div>
              </div>

              <p className="max-w-sm text-base font-medium leading-7 text-slate-300">
                {activeSlide.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {activeSlide.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="absolute bottom-5 left-5 right-5">
                <div className="mb-4 h-px w-full bg-white/10" />

                <div className="flex items-center justify-between">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                    Swipe / Tap
                  </p>

                  <div className="flex gap-2">
                    {slides.map((slide, index) => (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => goToSlide(index)}
                        aria-label={`Ir a ${slide.title}`}
                        className={`h-2.5 rounded-full transition-all ${
                          activeIndex === index
                            ? "w-8 bg-cyan-300"
                            : "w-2.5 bg-white/25"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}

export default MobileHeroCarousel