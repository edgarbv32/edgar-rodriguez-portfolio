import { useEffect, useState } from "react"

import { Download, Menu, X } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

import { AnimatePresence, motion } from "framer-motion"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contacto" },
]

const GITHUB_URL = "https://github.com/edgarbv32"
const LINKEDIN_URL = ""
const CV_FILE = "/CV_Edgar_Rodriguez.pdf"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""))

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 12)

      let currentSection = "inicio"

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId)

        if (!section) return

        const sectionTop = section.getBoundingClientRect().top

        if (sectionTop <= 150) {
          currentSection = sectionId
        }
      })

      setActiveSection(currentSection)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const originalOverflow = document.body.style.overflow

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }

    document.body.style.overflow = "hidden"
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = originalOverflow
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen])

  const closeMenu = () => {
    setIsOpen(false)
  }

  const isActive = (href) => activeSection === href.replace("#", "")

  const socialLinks = [
    {
      label: "GitHub",
      href: GITHUB_URL,
      icon: FaGithub,
    },
    ...(LINKEDIN_URL
      ? [
          {
            label: "LinkedIn",
            href: LINKEDIN_URL,
            icon: FaLinkedin,
          },
        ]
      : []),
  ]

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4">
      <nav
        className={`mx-auto hidden h-16 max-w-6xl items-center justify-between rounded-full border px-4 shadow-2xl backdrop-blur-2xl transition-all duration-300 md:flex ${
          hasScrolled
            ? "border-white/15 bg-slate-950/75 shadow-black/30"
            : "border-white/10 bg-slate-950/55 shadow-black/20"
        }`}
      >
        <a
          href="#inicio"
          aria-label="Ir al inicio"
          className="group flex items-center gap-3 rounded-full pr-3"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-sm font-black tracking-tight text-white shadow-lg shadow-cyan-500/10 transition group-hover:border-cyan-300/45 group-hover:bg-cyan-300/15">
            ER
          </span>

          <span className="hidden text-sm font-bold text-white lg:inline">
            Edgar Rodriguez
          </span>
        </a>

        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive(link.href)
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {isActive(link.href) && (
                <motion.span
                  layoutId="navbar-active-pill"
                  className="absolute inset-0 -z-10 rounded-full border border-cyan-300/25 bg-cyan-300/10 shadow-lg shadow-cyan-500/10"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 32,
                  }}
                />
              )}

              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {socialLinks.map((link) => {
            const Icon = link.icon

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                aria-label={link.label}
              >
                <Icon size={17} />
              </a>
            )
          })}

          <a
            href={CV_FILE}
            download
            className="flex items-center gap-2 rounded-full border border-cyan-300/35 bg-cyan-300/10 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/10 transition hover:border-cyan-300/60 hover:bg-cyan-300/20"
          >
            <Download size={16} />
            Descargar CV
          </a>
        </div>
      </nav>

      <div className="flex items-center justify-between md:hidden">
        <a
          href="#inicio"
          onClick={closeMenu}
          aria-label="Ir al inicio"
          className="flex items-center gap-3 rounded-full border border-white/10 bg-slate-950/65 px-3 py-2 shadow-xl shadow-black/20 backdrop-blur-2xl"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-xs font-black text-white">
            ER
          </span>

          <span className="text-sm font-bold text-white">Edgar</span>
        </a>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.08] text-white shadow-xl shadow-black/20 backdrop-blur-2xl transition hover:bg-white/[0.12]"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Cerrar menú"
              className="fixed inset-0 -z-10 bg-slate-950/45 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed left-4 right-4 top-20 overflow-hidden rounded-[2rem] border border-white/15 bg-slate-950/80 p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl md:hidden"
            >
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-purple-500/10" />

              <div className="mb-3 flex items-center justify-between border-b border-white/10 px-2 pb-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                    Navegación
                  </p>
                  <p className="mt-1 text-sm text-slate-400">
                    Portafolio profesional
                  </p>
                </div>

                <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-200">
                  Disponible
                </span>
              </div>

              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={`rounded-2xl border px-4 py-3.5 text-base font-semibold transition ${
                      isActive(link.href)
                        ? "border-cyan-300/25 bg-cyan-300/10 text-white"
                        : "border-transparent text-slate-200 hover:border-white/10 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-4 grid gap-3 border-t border-white/10 pt-4">
                <a
                  href={CV_FILE}
                  download
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-cyan-300/35 bg-cyan-300/10 px-4 py-3.5 font-bold text-white transition hover:bg-cyan-300/20"
                >
                  <Download size={17} />
                  Descargar CV
                </a>

                <div
                  className={`grid gap-3 ${
                    socialLinks.length > 1 ? "grid-cols-2" : "grid-cols-1"
                  }`}
                >
                  {socialLinks.map((link) => {
                    const Icon = link.icon

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={closeMenu}
                        className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3.5 font-semibold text-slate-100 transition hover:bg-white/[0.12]"
                      >
                        <Icon />
                        {link.label}
                      </a>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar