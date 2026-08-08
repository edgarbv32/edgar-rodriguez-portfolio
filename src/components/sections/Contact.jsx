import { ArrowUpRight, Mail, MapPin, Phone, Send } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import { motion } from "framer-motion"

const LINKEDIN_URL = "https://www.linkedin.com/in/edgar-rodriguez-fullstack/"

const contactItems = [
  {
    label: "Correo",
    value: "edgar.rdz.dev@gmail.com",
    href: "mailto:edgar.rdz.dev@gmail.com",
    icon: Mail,
  },
  {
    label: "Teléfono",
    value: "618-329-59-53",
    href: "tel:+526183295953",
    icon: Phone,
  },
  {
    label: "Ubicación",
    value: "Durango, Durango, México",
    href: null,
    icon: MapPin,
  },
]

const profileLinks = [
  {
    label: "GitHub",
    href: "https://github.com/edgarbv32",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: LINKEDIN_URL,
    icon: FaLinkedin,
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

function ContactItem({ item }) {
  const Icon = item.icon

  const content = (
    <>
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-indigo-300/20 bg-indigo-500/10 text-indigo-200">
        <Icon size={19} />
      </div>

      <div className="min-w-0">
        <p className="text-[0.65rem] font-black uppercase tracking-[0.18em] text-slate-500">
          {item.label}
        </p>

        <p className="mt-1 break-words text-sm font-bold text-slate-200 sm:text-base">
          {item.value}
        </p>
      </div>
    </>
  )

  if (!item.href) {
    return (
      <div className="flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
        {content}
      </div>
    )
  }

  return (
    <a
      href={item.href}
      className="group flex min-w-0 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:-translate-y-0.5 hover:border-indigo-400/30 hover:bg-white/[0.06]"
    >
      {content}
    </a>
  )
}

function ProfileLink({ item }) {
  const Icon = item.icon

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.035] px-5 py-4 transition hover:-translate-y-0.5 hover:border-indigo-400/30 hover:bg-indigo-500/10"
    >
      <span className="flex items-center gap-3 font-black text-white">
        <Icon className="text-slate-200 transition group-hover:scale-110" />
        {item.label}
      </span>

      <ArrowUpRight
        className="text-slate-500 transition group-hover:text-indigo-200"
        size={17}
      />
    </a>
  )
}

function Contact() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 px-5 py-16 md:px-8 lg:py-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-[2rem] border border-indigo-300/20 bg-[#050816] p-6 shadow-2xl shadow-black/30 sm:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.13),transparent_40%)]" />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.032)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.032)_1px,transparent_1px)] bg-[length:42px_42px] opacity-20 [mask-image:radial-gradient(circle_at_top_right,black,transparent_62%)]" />

          <div className="relative z-10 grid gap-9 lg:grid-cols-[minmax(0,0.95fr)_minmax(340px,0.65fr)] lg:items-center">
            <div className="min-w-0">
              <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
                Abierto a oportunidades donde pueda{" "}
                <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                  construir soluciones digitales.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Soy egresado de Ingeniería en Sistemas Computacionales y busco
                colaborar en proyectos de tecnología donde pueda aportar
                desarrollo web, integración de servicios, bases de datos,
                automatización y mejora de procesos reales de negocio.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="mailto:edgar.rdz.dev@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-6 py-4 font-black text-white shadow-lg shadow-indigo-500/20 transition hover:-translate-y-1"
                >
                  Envíame un correo
                  <Send size={18} />
                </a>
              </div>
            </div>

            <div className="min-w-0">
              <div className="grid gap-3">
                {contactItems.map((item) => (
                  <ContactItem key={item.label} item={item} />
                ))}
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {profileLinks.map((item) => (
                  <ProfileLink key={item.label} item={item} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact