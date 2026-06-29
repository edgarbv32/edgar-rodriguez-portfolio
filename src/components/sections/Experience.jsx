import { BriefcaseBusiness, CheckCircle2, Code2, Cpu, Users } from "lucide-react"
import { motion } from "framer-motion"

const highlights = [
  {
    icon: Users,
    title: "Coordinación operativa",
    description:
      "Coordinación de 2 colaboradores y 2 residentes para actividades de marketing, tecnología y operación.",
  },
  {
    icon: Code2,
    title: "Desarrollo web",
    description:
      "Desarrollo completo y despliegue de sitios web corporativos orientados a presencia digital y generación de leads.",
  },
  {
    icon: Cpu,
    title: "Automatización e integración",
    description:
      "Implementación de soluciones digitales, automatización de procesos y soporte en integración de servicios.",
  },
]

const responsibilities = [
  "Administración de Meta Business Suite, páginas de Facebook, flujos de mensajes y herramientas comerciales.",
  "Desarrollo de sitios web corporativos usando tecnologías modernas de frontend y despliegue web.",
  "Automatización de procesos internos y comerciales mediante herramientas digitales e IA aplicada.",
  "Integración de sistemas, seguimiento de logs, soporte técnico y resolución de incidencias en servicios.",
  "Organización de tareas, seguimiento operativo y colaboración con equipo interno bajo enfoque Scrum.",
]

const tech = [
  "React",
  "JavaScript",
  "Node.js",
  "APIs",
  "Firebase",
  "Vercel",
  "Hostinger",
  "Meta Business Suite",
  "IA aplicada",
  "Scrum",
]

function Experience() {
  return (
    <section
      id="experiencia"
      className="relative scroll-mt-28 px-5 py-16 md:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 sm:text-sm">
            Experiencia
          </p>

          <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Experiencia real aplicando tecnología en negocio.
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            He trabajado en un entorno real combinando desarrollo web,
            automatización, integración de herramientas, soporte técnico y
            operación digital.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 shadow-2xl shadow-cyan-500/10 backdrop-blur-xl"
          >
            <div className="border-b border-white/10 p-6 sm:p-7">
              <div className="mb-5 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                <BriefcaseBusiness size={26} />
              </div>

              <h3 className="text-2xl font-black leading-tight text-white sm:text-3xl">
                Encargado del Área de Marketing y Soluciones Tecnológicas
              </h3>

              <p className="mt-3 font-semibold text-cyan-200">
                Sapiens Inteligencia Creativa
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300">
                  2025–2026
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300">
                  Durango, México
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300">
                  Rol híbrido tech/operación
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-7">
              <p className="text-base leading-8 text-slate-300">
                Rol enfocado en implementar soluciones digitales para operación,
                marketing, presencia web, automatización de procesos,
                integración de herramientas e IA aplicada a negocio.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-semibold text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl"
                  >
                    <div className="mb-4 inline-flex rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                      <Icon size={22} />
                    </div>

                    <h4 className="font-bold leading-tight text-white">
                      {item.title}
                    </h4>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/45 p-5 backdrop-blur-xl sm:p-7">
              <h4 className="mb-5 text-xl font-black text-white">
                Responsabilidades principales
              </h4>

              <div className="space-y-4">
                {responsibilities.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-1 shrink-0 text-cyan-300"
                    />
                    <p className="text-sm leading-7 text-slate-300 sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience