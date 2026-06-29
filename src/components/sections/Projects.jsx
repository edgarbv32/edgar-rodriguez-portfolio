import { useState } from "react"
import {
  Bot,
  Building2,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  PanelsTopLeft,
  ReceiptText,
} from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    title: "Hotel San Carlos POS",
    category: "Desktop Application",
    status: "Proyecto vendido",
    icon: ReceiptText,
    featured: true,
    summary:
      "Sistema POS de escritorio para operación interna, ventas y persistencia local.",
    description:
      "Sistema POS de escritorio desarrollado para un hotel, enfocado en operación interna, control de ventas, administración de información y persistencia local.",
    problem:
      "El negocio necesitaba una solución práctica para gestionar operaciones internas sin depender de herramientas externas complejas o conexión constante a internet.",
    solution:
      "Se desarrolló una aplicación de escritorio con base de datos local, interfaz funcional y estructura pensada para facilitar el uso operativo diario.",
    impact:
      "Proyecto real entregado y vendido, útil para demostrar experiencia práctica más allá de ejercicios académicos.",
    features: [
      "Aplicación de escritorio para operación de hotel.",
      "Persistencia de información con base de datos local.",
      "Interfaz enfocada en uso práctico y flujo operativo.",
      "Estructura modular para facilitar mantenimiento.",
      "Proyecto real desarrollado para un cliente.",
    ],
    stack: ["React", "Vite", "Tauri", "SQLite", "JavaScript"],
    github: "https://github.com/edgarbv32/hotel-san-carlos-pos",
    live: "",
  },
  {
    title: "SapiensAds AI",
    category: "SaaS Platform",
    status: "Proyecto interno",
    icon: Bot,
    featured: true,
    summary:
      "Plataforma web para automatización, administración de información y flujos digitales.",
    description:
      "Plataforma web orientada a automatizar procesos relacionados con anuncios, administración de información y flujos digitales usando tecnologías modernas.",
    problem:
      "La operación requería una herramienta más centralizada para trabajar con procesos digitales, información y automatización aplicada a marketing.",
    solution:
      "Se construyó una plataforma web con React, backend en Node.js, Firebase y Firestore para manejar autenticación, datos y flujos internos.",
    impact:
      "Demuestra experiencia combinando frontend, backend, base de datos, autenticación, APIs e integración de servicios.",
    features: [
      "Interfaz web moderna y responsiva.",
      "Uso de Firebase y Firestore para datos y autenticación.",
      "Integración con servicios y flujos internos.",
      "Estructura tipo plataforma SaaS.",
      "Orientación a automatización y operación digital.",
    ],
    stack: ["React", "Node.js", "Firebase", "Firestore", "APIs REST"],
    github: "https://github.com/edgarbv32/SapiensAds-main",
    live: "",
  },
  {
    title: "Desarrollo Web Corporativo",
    category: "Business Websites",
    status: "Experiencia profesional",
    icon: PanelsTopLeft,
    featured: false,
    summary:
      "Sitios web corporativos para presencia digital, servicios, marketing y leads.",
    description:
      "Desarrollo de sitios web corporativos para presencia digital, comunicación de servicios, marketing y generación de oportunidades comerciales.",
    problem:
      "La empresa necesitaba fortalecer su presencia digital con sitios web profesionales, funcionales y alineados a objetivos comerciales.",
    solution:
      "Se desarrollaron y desplegaron sitios web completos usando tecnologías frontend, hosting moderno y buenas prácticas visuales.",
    impact:
      "Experiencia real creando soluciones web para negocio, no solo proyectos personales o académicos.",
    features: [
      "Desarrollo completo de sitios web corporativos.",
      "Diseño responsive para distintos dispositivos.",
      "Publicación en plataformas de hosting.",
      "Enfoque en presencia digital y generación de leads.",
      "Mantenimiento y ajustes según necesidades del negocio.",
    ],
    stack: ["React", "HTML5", "CSS3", "JavaScript", "Vercel", "Hostinger"],
    github: "",
    live: "",
  },
]

function Projects() {
  const [openProjects, setOpenProjects] = useState([])

  const toggleProject = (projectTitle) => {
    setOpenProjects((currentProjects) =>
      currentProjects.includes(projectTitle)
        ? currentProjects.filter((title) => title !== projectTitle)
        : [...currentProjects, projectTitle]
    )
  }

  const handleMouseMove = (event) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    card.style.setProperty("--mouse-x", `${x}px`)
    card.style.setProperty("--mouse-y", `${y}px`)
  }

  return (
    <section
      id="proyectos"
      className="relative scroll-mt-28 px-5 py-10 md:px-8 md:py-12 lg:py-14"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6 }}
          className="mb-7 max-w-3xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 sm:text-sm">
            Proyectos destacados
          </p>

          <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Proyectos reales con enfoque técnico y de negocio.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            Una selección de proyectos donde apliqué desarrollo web, bases de
            datos, automatización, despliegue e integración de herramientas.
          </p>
        </motion.div>

        <div className="grid items-start gap-5 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon
            const isOpen = openProjects.includes(project.title)

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                onMouseMove={handleMouseMove}
                className={`group relative overflow-hidden rounded-[2rem] border backdrop-blur-xl transition duration-300 ${
                  isOpen
                    ? "border-cyan-400/35 bg-slate-950/62 shadow-2xl shadow-cyan-500/10"
                    : "border-white/10 bg-slate-950/45 shadow-2xl shadow-cyan-500/5 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-slate-950/55"
                }`}
              >
                <div
                  className="pointer-events-none absolute inset-0 hidden opacity-0 transition duration-300 group-hover:opacity-100 lg:block"
                  style={{
                    background:
                      "radial-gradient(520px circle at var(--mouse-x) var(--mouse-y), rgba(34, 211, 238, 0.18), rgba(139, 92, 246, 0.10) 32%, transparent 58%)",
                  }}
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.035] via-transparent to-purple-500/[0.04]" />

                <button
                  type="button"
                  onClick={() => toggleProject(project.title)}
                  className="relative z-10 w-full p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div
                      className={`rounded-2xl p-3 transition ${
                        isOpen
                          ? "bg-cyan-400/15 text-cyan-200"
                          : "bg-cyan-400/10 text-cyan-300 group-hover:bg-cyan-400/15 group-hover:text-cyan-200"
                      }`}
                    >
                      <Icon size={27} />
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      {project.featured && (
                        <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">
                          Featured
                        </span>
                      )}

                      <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-semibold text-slate-300">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <p className="mb-3 text-sm font-semibold text-cyan-200">
                    {project.category}
                  </p>

                  <h3 className="text-2xl font-black leading-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {project.summary}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                    <span className="text-sm font-bold text-cyan-200">
                      {isOpen ? "Ocultar detalles" : "Ver detalles"}
                    </span>

                    <span
                      className={`rounded-xl border border-white/10 bg-white/[0.06] p-2 text-white transition duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <ChevronDown size={18} />
                    </span>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="relative z-10 overflow-hidden border-t border-white/10"
                    >
                      <div className="space-y-5 p-6 pt-5">
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-slate-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                          <h4 className="mb-3 font-black text-white">
                            Descripción
                          </h4>

                          <p className="text-sm leading-7 text-slate-300">
                            {project.description}
                          </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                          <div className="mb-3 flex items-center gap-2 font-black text-white">
                            <Building2 size={18} className="text-cyan-300" />
                            Problema
                          </div>

                          <p className="text-sm leading-7 text-slate-300">
                            {project.problem}
                          </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                          <div className="mb-3 flex items-center gap-2 font-black text-white">
                            <CheckCircle2
                              size={18}
                              className="text-emerald-300"
                            />
                            Solución
                          </div>

                          <p className="text-sm leading-7 text-slate-300">
                            {project.solution}
                          </p>
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
                          <h4 className="mb-4 font-black text-white">
                            Funcionalidades
                          </h4>

                          <div className="space-y-3">
                            {project.features.map((feature) => (
                              <div key={feature} className="flex gap-3">
                                <CheckCircle2
                                  size={17}
                                  className="mt-1 shrink-0 text-cyan-300"
                                />
                                <p className="text-sm leading-6 text-slate-300">
                                  {feature}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-5">
                          <h4 className="mb-3 font-black text-white">
                            Impacto
                          </h4>

                          <p className="text-sm leading-7 text-cyan-50">
                            {project.impact}
                          </p>
                        </div>

                        <div className="flex flex-col gap-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(event) => event.stopPropagation()}
                              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-3.5 font-bold text-slate-100 transition hover:border-white/20 hover:bg-white/[0.1]"
                            >
                              <FaGithub />
                              Código
                            </a>
                          )}

                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noreferrer"
                              onClick={(event) => event.stopPropagation()}
                              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3.5 font-bold text-cyan-100 transition hover:bg-cyan-400/20"
                            >
                              <ExternalLink size={18} />
                              Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects