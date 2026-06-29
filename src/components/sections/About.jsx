import {
  BriefcaseBusiness,
  GraduationCap,
  Languages,
  MapPin,
  Code2,
  Workflow,
  Lightbulb,
} from "lucide-react"
import { motion } from "framer-motion"

const profileDetails = [
  {
    icon: GraduationCap,
    label: "Formación",
    value: "Ingeniería en Sistemas Computacionales",
  },
  {
    icon: BriefcaseBusiness,
    label: "Experiencia",
    value: "Desarrollo web y soluciones empresariales",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Durango, México · Disponible remoto",
  },
  {
    icon: Languages,
    label: "Idiomas",
    value: "Español nativo · Inglés B2",
  },
]

const strengths = [
  {
    icon: Code2,
    title: "Experiencia práctica",
    description:
      "He desarrollado sistemas administrativos, aplicaciones web y sitios corporativos utilizados en proyectos y entornos reales.",
  },
  {
    icon: Workflow,
    title: "Visión integral",
    description:
      "Comprendo el ciclo completo de una solución: interfaz, lógica de negocio, datos, integraciones, despliegue y soporte.",
  },
  {
    icon: Lightbulb,
    title: "Enfoque en soluciones",
    description:
      "Analizo las necesidades del usuario y del negocio para convertirlas en software funcional, claro y mantenible.",
  },
]

function About() {
  return (
    <section
      id="sobre-mi"
      className="relative scroll-mt-24 overflow-hidden px-5 py-24 md:px-8 lg:py-32"
    >
      <div className="absolute -left-32 top-1/3 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
        >
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Sobre mí
            </p>

            <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
              Ingeniería, desarrollo y una visión enfocada en{" "}
              <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                resolver problemas reales.
              </span>
            </h2>

            <div className="mt-8 h-1 w-20 rounded-full bg-linear-to-r from-cyan-400 to-purple-500" />
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-8 text-slate-300">
              Soy Ingeniero en Sistemas Computacionales orientado al desarrollo
              backend y fullstack. Cuento con experiencia creando aplicaciones
              web, sistemas administrativos, sitios corporativos, automatizaciones
              e integraciones para apoyar procesos reales de operación y negocio.
            </p>

            <p className="text-lg leading-8 text-slate-400">
              Disfruto convertir necesidades concretas en soluciones funcionales:
              desde diseñar una interfaz y desarrollar la lógica de negocio hasta
              gestionar datos, integrar servicios, desplegar la aplicación y
              dar seguimiento a su funcionamiento.
            </p>

            <p className="text-lg leading-8 text-slate-400">
              Actualmente busco integrarme a un equipo de desarrollo donde pueda
              aportar mi experiencia práctica, fortalecer mis conocimientos y
              continuar creciendo como desarrollador.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-14 grid overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4"
        >
          {profileDetails.map((item, index) => {
            const Icon = item.icon

            return (
              <div
                key={item.label}
                className={`p-6 ${
                  index !== profileDetails.length - 1
                    ? "border-b border-white/10 sm:border-b-0 sm:border-r"
                    : ""
                } ${
                  index === 1
                    ? "sm:border-r-0 lg:border-r"
                    : ""
                } ${
                  index === 2
                    ? "sm:border-t sm:border-r lg:border-t-0"
                    : ""
                } ${
                  index === 3 ? "sm:border-t lg:border-t-0" : ""
                }`}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <Icon size={22} />
                </div>

                <p className="text-sm font-medium text-slate-500">
                  {item.label}
                </p>

                <p className="mt-2 font-semibold leading-6 text-slate-200">
                  {item.value}
                </p>
              </div>
            )
          })}
        </motion.div>

        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {strengths.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.055]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-400/10 text-purple-300 transition group-hover:scale-105">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-bold text-white">{item.title}</h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About