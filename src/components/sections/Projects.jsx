import { useEffect, useState } from "react"

import {
  ArrowUpRight,
  BadgeCheck,
  Code2,
  ExternalLink,
  MonitorCog,
  Workflow,
} from "lucide-react"

import { FaGithub } from "react-icons/fa"

import { motion } from "framer-motion"

const projects = [
  {
    id: "hotel-pos",
    number: "01",
    title: "Hotel San Carlos POS",
    type: "Desktop App",
    status: "Proyecto vendido",
    category: "Electron · Node.js · SQLite",
    screenshotPath: "/projects/hotel-pos.png",
    screenshotLabel: "Screenshot del sistema POS",
    summary:
      "Sistema POS de escritorio para operación hotelera, ventas, gestión diaria y persistencia local.",
    impact:
      "Solución funcional vendida y entregada para una necesidad operativa real.",
    stack: ["Electron", "Node.js", "SQLite", "JavaScript", "HTML", "CSS"],
    responsibilities: [
      "Aplicación de escritorio",
      "Base de datos local",
      "Flujo de ventas",
      "Entrega funcional",
    ],
    icon: MonitorCog,
    repo: "https://github.com/edgarbv32/hotel-san-carlos-pos",
    featured: true,
  },
  {
    id: "sapiens-ads",
    number: "02",
    title: "SapiensAds AI",
    type: "Web Platform",
    status: "Proyecto interno",
    category: "React · Firebase · APIs REST",
    screenshotPath: "/projects/sapiensads.png",
    screenshotLabel: "Screenshot de plataforma web",
    summary:
      "Plataforma web para operación digital, gestión de datos, automatización e integración de herramientas.",
    impact:
      "Apoyo a procesos internos reales mediante interfaz web y servicios conectados.",
    stack: ["React", "Firebase", "APIs REST", "JavaScript", "Tailwind"],
    responsibilities: [
      "Interfaz web",
      "Firebase",
      "Integraciones",
      "Automatización",
    ],
    icon: Workflow,
    repo: "https://github.com/edgarbv32/SapiensAds-main",
    featured: false,
  },
  {
    id: "corporate-web",
    number: "03",
    title: "Desarrollo Web Corporativo",
    type: "Corporate Websites",
    status: "Sitios reales",
    category: "React · HTML5 · CSS3 · Deploy",
    screenshotPath: "/projects/corporate-web.png",
    screenshotLabel: "Screenshot de sitio web corporativo",
    summary:
      "Sitios web corporativos para presencia digital, comunicación de servicios y oportunidades comerciales.",
    impact:
      "Trabajo aplicado a necesidades reales de negocio, publicación web y diseño responsivo.",
    stack: ["React", "HTML5", "CSS3", "JavaScript", "Vercel", "Hostinger"],
    responsibilities: [
      "Sitios corporativos",
      "Responsive UI",
      "Deploy",
      "Mantenimiento",
    ],
    icon: Code2,
    repo: "",
    featured: false,
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

function ScreenshotPreview({ project }) {
  const [imageFailed, setImageFailed] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const Icon = project.icon

  useEffect(() => {
    setImageFailed(false)
    setImageLoaded(false)
  }, [project.id])

  return (
    <div className="relative overflow-hidden rounded-[1.5rem] border border-indigo-300/20 bg-[#050816]">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#070a1a] px-4 py-3">
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
        </div>

        <span className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-indigo-200">
          Preview
        </span>
      </div>

      <div className="relative aspect-[16/9] overflow-hidden bg-[#050816]">
        {!imageFailed ? (
          <img
            src={project.screenshotPath}
            alt={project.screenshotLabel}
            loading="lazy"
            width={1280}
            height={720}
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
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:32px_32px]" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.24),transparent_48%),radial-gradient(circle_at_80%_100%,rgba(168,85,247,0.18),transparent_42%)]" />

            <div className="absolute inset-4 rounded-3xl border border-dashed border-indigo-300/25 bg-[#070a1a]/85">
              <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-200">
                  <Icon size={26} />
                </div>

                <div>
                  <p className="text-lg font-black tracking-[-0.03em] text-white">
                    {project.title}
                  </p>

                  <p className="mt-1 text-[0.66rem] font-black uppercase tracking-[0.18em] text-indigo-300">
                    {project.type}
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  )
}

function TechPill({ item }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-[0.66rem] font-black uppercase tracking-[0.12em] text-slate-200">
      {item}
    </span>
  )
}

function ProjectCard({ project, index }) {
  const Icon = project.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.55,
        delay: index * 0.06,
        ease: "easeOut",
      }}
      className={[
        "group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#050816] p-5 shadow-2xl shadow-black/25 transition duration-300 hover:-translate-y-1 hover:border-indigo-300/30 hover:bg-white/[0.035]",
        project.featured ? "lg:col-span-2" : "",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_42%)] opacity-80" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[length:42px_42px] opacity-20 [mask-image:radial-gradient(circle_at_top_right,black,transparent_62%)]" />

      <div className="relative z-10 grid h-full gap-5">
        <ScreenshotPreview project={project} />

        <div>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className="inline-flex h-10 min-w-10 items-center justify-center rounded-2xl border border-indigo-300/20 bg-indigo-500/10 px-3 text-xs font-black text-indigo-200">
              {project.number}
            </span>

            <span className="rounded-full border border-emerald-300/15 bg-emerald-400/10 px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.14em] text-emerald-200">
              {project.status}
            </span>

            <span className="rounded-full border border-indigo-300/15 bg-indigo-500/10 px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.14em] text-indigo-100">
              {project.type}
            </span>
          </div>

          <div className="flex items-start gap-4">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-200 sm:flex">
              <Icon size={22} />
            </div>

            <div className="min-w-0">
              <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-indigo-300">
                {project.category}
              </p>

              <h3 className="mt-3 text-3xl font-black leading-none tracking-[-0.06em] text-white sm:text-4xl">
                {project.title}
              </h3>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-300">
            {project.summary}
          </p>

          <div className="mt-5 rounded-3xl border border-indigo-300/15 bg-indigo-500/10 p-4">
            <div className="mb-2 flex items-center gap-2">
              <BadgeCheck className="text-indigo-200" size={17} />

              <p className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-indigo-200">
                Valor
              </p>
            </div>

            <p className="text-sm font-semibold leading-6 text-white">
              {project.impact}
            </p>
          </div>

          <div className="mt-5">
            <p className="mb-3 text-[0.68rem] font-black uppercase tracking-[0.2em] text-slate-500">
              Responsabilidades
            </p>

            <div className="flex flex-wrap gap-2">
              {project.responsibilities.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-bold text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="mb-3 text-[0.68rem] font-black uppercase tracking-[0.2em] text-slate-500">
              Stack
            </p>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <TechPill key={tech} item={tech} />
              ))}
            </div>
          </div>

          <div className="mt-6">
            {project.repo ? (
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-300/20 bg-indigo-500/15 px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-indigo-100 transition hover:-translate-y-1 hover:border-indigo-300/35 hover:bg-indigo-500/20"
              >
                <FaGithub />
                Ver GitHub
                <ArrowUpRight size={16} />
              </a>
            ) : (
              <span className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-5 py-3 text-sm font-black uppercase tracking-[0.14em] text-slate-400">
                <ExternalLink size={16} />
                Repositorio no público
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function Projects() {
  return (
    <section
      id="proyectos"
      className="relative scroll-mt-24 overflow-hidden px-5 py-16 md:px-8 lg:py-20"
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
            Proyectos reales que demuestran{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              desarrollo, integración y negocio.
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Una vista compacta de proyectos donde apliqué software, desarrollo
            web, bases de datos, automatización, APIs y despliegue en escenarios
            reales.
          </p>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects