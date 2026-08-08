import { motion } from "framer-motion"

import {
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  MapPin,
} from "lucide-react"

import MagicBento from "../reactbits/MagicBento"

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

const experienceTags = [
  "Desarrollo web",
  "JavaScript",
  "React",
  "APIs REST",
  "Automatización",
  "Integraciones",
  "Bases de datos",
  "Deploy",
  "Soporte técnico",
  "Logs",
]

function Experience() {
  return (
    <section
      id="experiencia"
      className="relative scroll-mt-24 overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-4xl"
        >
          <h2 className="text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Experiencia real desarrollando{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              software y soluciones digitales
            </span>
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            Más de 2 años de experiencia práctica construyendo aplicaciones web,
            sistemas internos, automatización de procesos, integraciones y
            herramientas digitales aplicadas a necesidades reales de negocio.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-10 overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 p-5 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl sm:p-7 lg:p-8"
        >
          <div className="grid gap-7 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="min-w-0">
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-300 shadow-lg shadow-indigo-500/10">
                <BriefcaseBusiness size={26} />
              </div>

              <p className="text-xs font-black uppercase tracking-[0.24em] text-indigo-300">
                Sapiens Inteligencia Creativa
              </p>

              <h3 className="mt-3 break-words text-3xl font-black leading-tight tracking-[-0.05em] text-white sm:text-4xl">
                Desarrollador de Soluciones Web y Automatización
              </h3>

              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                Desarrollo e implementación de soluciones tecnológicas para
                operación comercial: aplicaciones web, sitios corporativos,
                sistemas internos, automatización de procesos, integración de
                herramientas, soporte técnico, revisión de logs y despliegue de
                soluciones orientadas al negocio.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <CalendarDays
                      className="shrink-0 text-indigo-400"
                      size={19}
                    />

                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                      Periodo
                    </p>
                  </div>

                  <p className="text-lg font-black text-white">
                    Feb 2025 – Jul 2026
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <MapPin className="shrink-0 text-indigo-400" size={19} />

                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                      Ubicación
                    </p>
                  </div>

                  <p className="text-lg font-black text-white">
                    Durango, México
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <div className="mb-4 flex items-center gap-3">
                  <Code2 className="shrink-0 text-indigo-400" size={19} />

                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                    Stack y responsabilidades técnicas
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {experienceTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-indigo-300/15 bg-indigo-500/10 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-indigo-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.18 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative"
        >
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] bg-indigo-400/5 blur-3xl" />

          <MagicBento
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={320}
            particleCount={12}
            glowColor="99, 102, 241"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Experience