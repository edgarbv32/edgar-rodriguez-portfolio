import { Mail, MapPin, Phone, Send } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"

function Contact() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-28 px-5 py-20 md:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/55 p-5 shadow-2xl shadow-purple-500/10 backdrop-blur-xl sm:p-8 md:p-10 lg:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="min-w-0">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300 sm:text-sm">
                Contacto
              </p>

              <h2 className="block text-[2rem] font-black leading-[1.08] tracking-tight text-white min-[390px]:text-[2.15rem] sm:hidden">
                Disponible para roles{" "}
                <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Backend
                </span>{" "}
                y Fullstack.
              </h2>

              <h2 className="hidden max-w-3xl text-5xl font-black leading-tight tracking-tight text-white sm:block lg:text-6xl">
                ¿Buscas un desarrollador{" "}
                <span className="bg-linear-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  backend/fullstack
                </span>{" "}
                con experiencia práctica?
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Estoy disponible para oportunidades laborales, colaboraciones y
                proyectos tecnológicos donde pueda aportar desarrollo,
                integración, automatización y soluciones orientadas a negocio.
              </p>

              <a
                href="mailto:edgar.rdz.dev@gmail.com"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 sm:w-auto"
              >
                Envíame un correo
                <Send size={18} />
              </a>
            </div>

            <div className="min-w-0 space-y-4">
              <a
                href="mailto:edgar.rdz.dev@gmail.com"
                className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-slate-300 transition hover:border-cyan-400/30 hover:bg-white/[0.055] sm:p-5"
              >
                <Mail className="shrink-0 text-cyan-300" size={20} />
                <span className="min-w-0 break-all text-sm sm:text-base">
                  edgar.rdz.dev@gmail.com
                </span>
              </a>

              <a
                href="tel:+526183295953"
                className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-slate-300 transition hover:border-cyan-400/30 hover:bg-white/[0.055] sm:p-5"
              >
                <Phone className="shrink-0 text-cyan-300" size={20} />
                <span className="text-sm sm:text-base">618-329-59-53</span>
              </a>

              <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] p-4 text-slate-300 sm:p-5">
                <MapPin className="shrink-0 text-cyan-300" size={20} />
                <span className="text-sm sm:text-base">
                  Durango, Durango, México
                </span>
              </div>

              <div className="grid gap-3 min-[390px]:grid-cols-2">
                <a
                  href="https://github.com/edgarbv32"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href="#"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact