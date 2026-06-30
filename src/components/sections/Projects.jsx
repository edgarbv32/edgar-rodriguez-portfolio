import {
  Bot,
  CheckCircle2,
  ExternalLink,
  PanelsTopLeft,
  ReceiptText,
} from "lucide-react"
import { FaGithub } from "react-icons/fa"

import { motion } from "framer-motion"

import ScrollStack, { ScrollStackItem } from "../reactbits/ScrollStack"

const projects = [
  {
    title: "Hotel San Carlos POS",
    category: "Desktop Application",
    status: "Proyecto vendido",
    icon: ReceiptText,
    summary:
      "Sistema POS de escritorio para operación interna, ventas y persistencia local.",
    stack: ["Electron", "Node.js", "SQLite", "JavaScript"],
    highlights: [
      "Aplicación de escritorio",
      "Persistencia local",
      "Sistema vendido",
    ],
    github: "https://github.com/edgarbv32/hotel-san-carlos-pos",
    live: "",
  },
  {
    title: "SapiensAds AI",
    category: "Web Platform",
    status: "Proyecto interno",
    icon: Bot,
    summary:
      "Plataforma web para automatización, administración de información y flujos digitales.",
    stack: ["React", "Node.js", "Firebase", "APIs REST"],
    highlights: [
      "Autenticación y datos",
      "Flujos digitales",
      "Integración de servicios",
    ],
    github: "https://github.com/edgarbv32/SapiensAds-main",
    live: "",
  },
  {
    title: "Desarrollo Web Corporativo",
    category: "Business Websites",
    status: "Experiencia real",
    icon: PanelsTopLeft,
    summary:
      "Sitios web corporativos para presencia digital, servicios, marketing y generación de leads.",
    stack: ["React", "HTML5", "CSS3", "Vercel", "Hostinger"],
    highlights: [
      "Sitios responsivos",
      "Deploy profesional",
      "Enfoque comercial",
    ],
    github: "",
    live: "",
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

function Projects() {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10 max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
            02 / Proyectos
          </div>

          <h2 className="text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Proyectos destacados
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            Proyectos reales donde apliqué desarrollo web, bases de datos,
            automatización, deploy e integración de herramientas para resolver
            necesidades de negocio.
          </p>
        </motion.div>

        <div className="relative h-[820px] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/30 shadow-2xl shadow-black/25 backdrop-blur-xl sm:h-[860px] lg:h-[900px]">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-transparent to-fuchsia-500/10" />

          <ScrollStack
            itemDistance={140}
            itemScale={0.035}
            itemStackDistance={34}
            stackPosition="20%"
            scaleEndPosition="10%"
            baseScale={0.86}
            scaleDuration={0.5}
            rotationAmount={0}
            blurAmount={0}
            useWindowScroll={false}
          >
            {projects.map((project, index) => {
              const Icon = project.icon

              return (
                <ScrollStackItem
                  key={project.title}
                  itemClassName="border border-white/10 bg-slate-950/95 text-white"
                >
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-400/12 via-transparent to-fuchsia-500/12" />

                  <div className="relative z-10 flex h-full min-h-0 flex-col justify-between gap-8">
                    <div className="flex items-start justify-between gap-6">
                      <div className="min-w-0">
                        <div className="mb-5 flex flex-wrap items-center gap-3">
                          <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-slate-300 sm:text-xs">
                            {project.category}
                          </span>

                          <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.16em] text-emerald-200 sm:text-xs">
                            {project.status}
                          </span>
                        </div>

                        <p className="text-sm font-black text-cyan-300">
                          {String(index + 1).padStart(2, "0")} /
                        </p>

                        <h3 className="mt-2 max-w-4xl text-[2.35rem] font-black leading-[0.92] tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                          {project.title}
                        </h3>
                      </div>

                      <div className="hidden h-16 w-16 shrink-0 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 shadow-lg shadow-cyan-500/10 sm:grid">
                        <Icon size={28} />
                      </div>
                    </div>

                    <div className="grid gap-7 lg:grid-cols-[1fr_0.9fr] lg:items-end">
                      <div>
                        <p className="max-w-2xl text-base font-medium leading-7 text-slate-300 sm:text-xl sm:leading-9">
                          {project.summary}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.12em] text-slate-200 sm:text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="grid gap-3">
                        {project.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-bold text-slate-200"
                          >
                            <CheckCircle2
                              size={17}
                              className="shrink-0 text-cyan-300"
                            />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex min-h-[3rem] flex-wrap items-center gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-5 py-3 text-sm font-black text-slate-100 transition hover:border-white/20 hover:bg-white/[0.12]"
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
                          className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-black text-cyan-100 transition hover:bg-cyan-400/20"
                        >
                          Demo
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollStackItem>
              )
            })}
          </ScrollStack>
        </div>
      </div>
    </section>
  )
}

export default Projects