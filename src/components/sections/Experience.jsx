import { motion } from "framer-motion"

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

function Experience() {
  return (
    <section
      id="experiencia"
      className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 max-w-3xl"
        >
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-black uppercase tracking-[0.22em] text-cyan-200">
            01 / Experiencia
          </div>

          <h2 className="text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Experiencia aplicada a negocio
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            Trabajo real combinando desarrollo web, automatización, integración
            de herramientas, soporte técnico y operación digital dentro de
            Sapiens Inteligencia Creativa.
          </p>

          <div className="mt-7 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-5 shadow-xl shadow-black/10 backdrop-blur-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                  Sapiens Inteligencia Creativa
                </p>

                <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-white">
                  Encargado de Marketing y Soluciones Tecnológicas
                </h3>
              </div>

              <p className="text-sm font-bold text-slate-400">
                Feb 2025 – May 2026 · Durango, México
              </p>
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
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-[2rem] bg-cyan-400/5 blur-3xl" />

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
            glowColor="34, 211, 238"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Experience