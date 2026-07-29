import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import {
  ArrowUpRight,
  BadgeCheck,
  Code2,
  ImageIcon,
  Layers3,
  MonitorCog,
  X,
  Workflow,
} from "lucide-react"

import { FaGithub } from "react-icons/fa"

import { AnimatePresence, motion } from "framer-motion"

import Carousel from "../reactbits/Carousel"

const projects = [
  {
    id: "hotel-pos",
    number: "01",
    title: "Hotel San Carlos POS",
    shortTitle: "POS Hotel",
    type: "Desktop App Vendida",
    category: "Electron · Node.js · SQLite",
    previewType: "pos",
    screenshotLabel: "Screenshot del sistema POS",
    screenshotPath: "/projects/hotel-pos.png",
    description:
      "Sistema POS de escritorio desarrollado para operación hotelera, con persistencia local y flujo funcional para gestión de productos, ventas y operación diaria.",
    value:
      "Proyecto real vendido, construido como aplicación funcional para resolver una necesidad operativa concreta.",
    stack: ["Electron", "Node.js", "SQLite", "JavaScript", "HTML", "CSS"],
    responsibilities: [
      "Diseño y desarrollo de aplicación de escritorio.",
      "Persistencia local con SQLite.",
      "Flujo operativo para ventas y gestión.",
      "Entrega funcional para uso real.",
    ],
    highlights: ["Proyecto vendido", "Desktop app", "Base de datos local"],
    icon: MonitorCog,
    repo: "https://github.com/edgarbv32/hotel-san-carlos-pos",
  },
  {
    id: "sapiens-ads",
    number: "02",
    title: "SapiensAds AI",
    shortTitle: "SapiensAds",
    type: "Web Platform",
    category: "React · Firebase · APIs",
    previewType: "ads",
    screenshotLabel: "Screenshot de plataforma web",
    screenshotPath: "/projects/sapiensads.png",
    description:
      "Plataforma web orientada a operación digital, gestión de datos, automatización e integración de herramientas para flujos internos.",
    value:
      "Proyecto enfocado en resolver necesidades reales de operación mediante una interfaz web moderna y servicios conectados.",
    stack: ["React", "Node.js", "Firebase", "APIs REST", "Tailwind CSS"],
    responsibilities: [
      "Construcción de interfaz web con React.",
      "Integración con Firebase.",
      "Organización de flujos digitales internos.",
      "Apoyo en integración de servicios.",
    ],
    highlights: ["Web app", "Firebase", "Automatización"],
    icon: Workflow,
    repo: "https://github.com/edgarbv32/SapiensAds-main",
  },
  {
    id: "corporate-web",
    number: "03",
    title: "Desarrollo Web Corporativo",
    shortTitle: "Web Corporativo",
    type: "Corporate Websites",
    category: "React · Vercel · Hostinger",
    previewType: "web",
    screenshotLabel: "Screenshot de sitio web corporativo",
    screenshotPath: "/projects/corporate-web.png",
    description:
      "Desarrollo y publicación de sitios web corporativos para presencia digital, comunicación de servicios y generación de oportunidades comerciales.",
    value:
      "Trabajo aplicado en entorno empresarial, con enfoque en diseño responsivo, publicación web y utilidad comercial.",
    stack: ["React", "HTML5", "CSS3", "Vercel", "Hostinger", "GitHub"],
    responsibilities: [
      "Desarrollo de sitios web corporativos.",
      "Implementación de interfaces responsivas.",
      "Publicación y mantenimiento web.",
      "Alineación con objetivos comerciales.",
    ],
    highlights: ["Sitios reales", "Deploy", "Diseño responsivo"],
    icon: Code2,
    repo: "",
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

function useResponsiveCarouselSize() {
  const wrapperRef = useRef(null)

  const [size, setSize] = useState({
    width: 980,
    height: 640,
  })

  useEffect(() => {
    const element = wrapperRef.current

    if (!element) return undefined

    const updateSize = () => {
      const rect = element.getBoundingClientRect()
      const availableWidth = Math.floor(rect.width)
      const width = Math.min(1060, Math.max(320, availableWidth))

      let height = 610

      if (width < 520) {
        height = 650
      } else if (width < 768) {
        height = 640
      }

      setSize((previousSize) => {
        if (previousSize.width === width && previousSize.height === height) {
          return previousSize
        }

        return {
          width,
          height,
        }
      })
    }

    updateSize()

    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(updateSize)

      observer.observe(element)

      return () => observer.disconnect()
    }

    window.addEventListener("resize", updateSize)

    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return [wrapperRef, size]
}

function ScreenshotFrame({ project, large = false }) {
  const [imageFailed, setImageFailed] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    setImageFailed(false)
    setImageLoaded(false)
  }, [project.id])

  return (
    <div className="relative overflow-hidden rounded-[1.65rem] border border-indigo-300/20 bg-[#050816] shadow-2xl shadow-indigo-500/10">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#070a1a] px-4 py-3">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
        </div>

        <span className="rounded-full border border-indigo-300/20 bg-indigo-500/10 px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.18em] text-indigo-200">
          Screenshot
        </span>
      </div>

      <div
        className={[
          "relative overflow-hidden bg-[#050816]",
          large ? "min-h-[360px] lg:min-h-[430px]" : "aspect-[16/10]",
        ].join(" ")}
      >
        {!imageFailed ? (
          <img
            src={project.screenshotPath}
            alt={project.screenshotLabel}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageFailed(true)}
            className={[
              "absolute inset-0 h-full w-full object-cover transition duration-500",
              imageLoaded ? "opacity-100" : "opacity-0",
            ].join(" ")}
          />
        ) : null}

        {imageFailed || !imageLoaded ? (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:34px_34px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.24),transparent_48%),radial-gradient(circle_at_80%_100%,rgba(168,85,247,0.18),transparent_42%)]" />

            <div className="absolute inset-5 rounded-3xl border border-dashed border-indigo-300/25 bg-[#070a1a]">
              <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                <div
                  className={[
                    "mb-5 flex items-center justify-center rounded-2xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-200",
                    large ? "h-16 w-16" : "h-14 w-14",
                  ].join(" ")}
                >
                  <ImageIcon size={large ? 28 : 24} />
                </div>

                <p className="max-w-lg text-xs font-black uppercase tracking-[0.22em] text-indigo-200 sm:text-sm">
                  {project.screenshotLabel}
                </p>

                <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
                  Espacio reservado para agregar una captura real del proyecto.
                </p>

                <p className="mt-4 max-w-full overflow-hidden rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-slate-500">
                  {project.screenshotPath}
                </p>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}

function ProjectModal({ project, onClose }) {
  const Icon = project.icon

  useEffect(() => {
    const previousOverflow = document.body.style.overflow

    document.body.style.overflow = "hidden"

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[90] overflow-y-auto bg-black/75 px-4 py-6 backdrop-blur-md sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className="flex min-h-full items-center justify-center">
        <motion.article
          initial={{ opacity: 0, y: 24, scale: 0.975 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.975 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={(event) => event.stopPropagation()}
          className="relative w-full max-w-7xl overflow-hidden rounded-[2rem] border border-indigo-300/30 bg-[#050816] p-5 shadow-2xl shadow-indigo-500/20 sm:p-7 lg:p-8"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.2),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_40%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:44px_44px] opacity-20 [mask-image:radial-gradient(circle_at_top_right,black,transparent_62%)]" />

          <div className="relative z-10">
            <div className="mb-7 flex items-start justify-between gap-5">
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-indigo-300/25 bg-indigo-500/15 text-indigo-100">
                  <Icon size={25} />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.24em] text-indigo-300">
                    Proyecto {project.number}
                  </p>

                  <h3 className="mt-3 text-4xl font-black leading-none tracking-[-0.06em] text-white sm:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-lg font-bold text-indigo-300">
                    {project.type}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-indigo-300/30 hover:bg-indigo-500/10 hover:text-white"
                aria-label="Cerrar detalles del proyecto"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid gap-7 xl:grid-cols-[1.08fr_0.92fr] xl:items-start">
              <div>
                <ScreenshotFrame project={project} large />

                <div className="mt-5 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-[#070a1a] p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                      Tipo
                    </p>
                    <p className="mt-2 text-sm font-bold text-white">
                      {project.type}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#070a1a] p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                      Enfoque
                    </p>
                    <p className="mt-2 text-sm font-bold text-white">
                      {project.category}
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-[#070a1a] p-4">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                      Estado
                    </p>
                    <p className="mt-2 text-sm font-bold text-emerald-300">
                      Proyecto real
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="rounded-3xl border border-white/10 bg-[#070a1a] p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    Descripción
                  </p>

                  <p className="mt-4 text-base leading-8 text-slate-300">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 rounded-3xl border border-white/10 bg-[#070a1a] p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <BadgeCheck className="text-indigo-300" size={18} />

                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                      Valor del proyecto
                    </p>
                  </div>

                  <p className="text-base font-semibold leading-7 text-white">
                    {project.value}
                  </p>
                </div>

                <div className="mt-5 rounded-3xl border border-white/10 bg-[#070a1a] p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <Layers3 className="text-indigo-300" size={18} />

                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                      Responsabilidades
                    </p>
                  </div>

                  <ul className="grid gap-2">
                    {project.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-slate-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5">
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    Tecnologías utilizadas
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.12em] text-slate-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.repo ? (
                  <div className="mt-7">
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-indigo-300/20 bg-indigo-500/15 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-indigo-100 transition hover:border-indigo-300/35 hover:bg-indigo-500/20"
                    >
                      <FaGithub />
                      Ver en GitHub
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </motion.div>
  )
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id)
  const [carouselRef, carouselSize] = useResponsiveCarouselSize()

  const carouselItems = useMemo(
    () =>
      projects.map((project) => {
        const Icon = project.icon

        return {
          ...project,
          carouselIcon: <Icon className="project-carousel-icon" />,
          mediaIcon: <ImageIcon />,
        }
      }),
    [],
  )

  const handleActiveIndexChange = useCallback((activeIndex) => {
    setActiveProjectId(projects[activeIndex]?.id ?? projects[0].id)
  }, [])

  const handleOpenProject = useCallback((carouselProject) => {
    const originalProject =
      projects.find((project) => project.id === carouselProject.id) ??
      projects[0]

    setSelectedProject(originalProject)
  }, [])

  const activeProject =
    projects.find((project) => project.id === activeProjectId) ?? projects[0]

  return (
    <section
      id="proyectos"
      className="relative scroll-mt-28 overflow-visible px-5 py-16 md:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
        

          <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Proyectos reales para{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              operación, negocio y desarrollo web.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Una selección compacta de proyectos que muestran experiencia
            práctica construyendo sistemas funcionales, interfaces web,
            persistencia de datos, automatización e integración de herramientas.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(320px,0.44fr)] lg:items-center">
          <motion.div
            ref={carouselRef}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.58, ease: "easeOut" }}
            className="min-w-0"
          >
            <Carousel
              items={carouselItems}
              baseWidth={carouselSize.width}
              height={carouselSize.height}
              autoplay={false}
              pauseOnHover
              loop
              round={false}
              onActiveIndexChange={handleActiveIndexChange}
              onActiveItemClick={handleOpenProject}
            />
          </motion.div>

          <motion.aside
            key={activeProject.id}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="rounded-[2rem] border border-white/10 bg-[#050816] p-5 shadow-2xl shadow-black/30 lg:p-6"
          >
            <p className="text-xs font-black uppercase tracking-[0.22em] text-indigo-300">
              Proyecto seleccionado
            </p>

            <h3 className="mt-4 text-3xl font-black leading-none tracking-[-0.06em] text-white">
              {activeProject.title}
            </h3>

            <p className="mt-3 text-base font-bold text-indigo-300">
              {activeProject.type}
            </p>

            <p className="mt-5 text-sm leading-7 text-slate-300">
              {activeProject.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {activeProject.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-indigo-300/20 bg-indigo-500/10 px-3 py-2 text-[0.68rem] font-black uppercase tracking-[0.12em] text-indigo-100"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-[#070a1a] p-5">
              <div className="mb-3 flex items-center gap-3">
                <BadgeCheck className="text-indigo-300" size={18} />

                <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                  Valor
                </p>
              </div>

              <p className="text-sm font-semibold leading-7 text-white">
                {activeProject.value}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setSelectedProject(activeProject)}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-indigo-300/20 bg-indigo-500/15 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-indigo-100 transition hover:border-indigo-300/35 hover:bg-indigo-500/20"
            >
              Abrir proyecto completo
              <ArrowUpRight size={16} />
            </button>
          </motion.aside>
        </div>
      </div>

      <AnimatePresence>
        {selectedProject ? (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        ) : null}
      </AnimatePresence>
    </section>
  )
}

export default Projects