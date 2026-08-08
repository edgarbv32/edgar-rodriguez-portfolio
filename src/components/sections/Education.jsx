import {
  BadgeCheck,
  BookOpen,
  CalendarClock,
  Code2,
  Cpu,
  GraduationCap,
  MapPin,
  Network,
} from "lucide-react"

import { motion } from "framer-motion"

const focusItems = [
  {
    icon: Code2,
    title: "Desarrollo de software",
    description: "Base en programación, sistemas web y construcción de soluciones digitales.",
  },
  {
    icon: Network,
    title: "Transformación digital",
    description: "Aplicación de tecnología para mejorar procesos, operación y servicios.",
  },
  {
    icon: Cpu,
    title: "Sistemas computacionales",
    description: "Fundamentos técnicos para análisis, integración y resolución de problemas.",
  },
]

function Education() {
  return (
    <section
      id="formacion"
      className="relative scroll-mt-24 px-5 py-16 md:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Formación en{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
              sistemas computacionales
            </span>{" "}
            aplicada a tecnología y negocio.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            Base universitaria enfocada en desarrollo de software, fundamentos
            de sistemas y aplicación de tecnología para resolver necesidades
            reales dentro de organizaciones.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 p-5 shadow-2xl shadow-indigo-500/10 backdrop-blur-xl sm:p-7 lg:p-8"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

          <div className="relative grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="min-w-0 rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-5 sm:p-7">
              <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-lg shadow-indigo-500/10">
                    <img
                      src="/itd-logo.png"
                      alt="Logo del Instituto Tecnológico de Durango"
                      loading="lazy"
                      width={833}
                      height={536}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-black uppercase tracking-[0.24em] text-indigo-300">
                      Institución
                    </p>

                    <h3 className="mt-2 max-w-xl break-words text-3xl font-black leading-tight text-white sm:text-4xl">
                      Instituto Tecnológico de Durango
                    </h3>
                  </div>
                </div>

                <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-300 sm:flex">
                  <GraduationCap size={24} />
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <BookOpen className="shrink-0 text-indigo-400" size={19} />
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                      Carrera
                    </p>
                  </div>

                  <p className="text-xl font-black leading-8 text-white">
                    Ingeniería en Sistemas Computacionales
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/35 p-5">
                  <div className="mb-3 flex items-center gap-3">
                    <BadgeCheck className="shrink-0 text-indigo-400" size={19} />
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                      Especialidad
                    </p>
                  </div>

                  <p className="text-xl font-black leading-8 text-white">
                    Transformación Digital de las Organizaciones
                  </p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <CalendarClock
                    className="shrink-0 text-indigo-400"
                    size={18}
                  />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      Estado
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">
                      Titulación en proceso
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <MapPin className="shrink-0 text-indigo-400" size={18} />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                      Ubicación
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">
                      Durango, México
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-0 rounded-[1.6rem] border border-white/10 bg-white/[0.035] p-5 sm:p-7">
              <div className="mb-7">
                <p className="text-xs font-black uppercase tracking-[0.24em] text-indigo-300">
                  Enfoque académico
                </p>

                <h3 className="mt-3 break-words text-3xl font-black leading-tight text-white sm:text-4xl">
                  Base técnica alineada a desarrollo, integración y procesos.
                </h3>

                <p className="mt-4 text-base leading-7 text-slate-300">
                  Esta formación complementa mi experiencia práctica en
                  desarrollo web, automatización, soporte técnico e integración
                  de herramientas para operación digital.
                </p>
              </div>

              <div className="space-y-4">
                {focusItems.map((item) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={item.title}
                      className="group rounded-2xl border border-white/10 bg-slate-950/35 p-5 transition hover:border-indigo-400/30 hover:bg-white/[0.055]"
                    >
                      <div className="flex gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-300 transition group-hover:bg-indigo-500/15">
                          <Icon size={20} />
                        </div>

                        <div>
                          <h4 className="text-lg font-black text-white">
                            {item.title}
                          </h4>

                          <p className="mt-2 text-sm leading-7 text-slate-400 sm:text-base">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education