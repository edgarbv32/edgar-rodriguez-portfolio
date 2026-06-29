import { useState } from "react"
import { Download, Menu, X } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Stack", href: "#stack" },
  { label: "Contacto", href: "#contacto" },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-3">
      <nav className="mx-auto hidden h-16 max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-[#050816]/55 px-6 shadow-2xl shadow-black/20 backdrop-blur-2xl md:flex">
        <div className="w-[180px]" />

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/edgarbv32"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/[0.035] p-3 text-slate-300 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub size={17} />
          </a>

          <a
            href="#"
            className="rounded-xl border border-white/10 bg-white/[0.035] p-3 text-slate-300 transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={17} />
          </a>

          <a
            href="/CV_Edgar_Rodriguez_Definitivo_Sin_Foto.pdf"
            className="flex items-center gap-2 rounded-xl border border-cyan-400/35 bg-cyan-400/10 px-4 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/60 hover:bg-cyan-400/20"
          >
            <Download size={16} />
            Descargar CV
          </a>
        </div>
      </nav>

      <div className="flex items-center justify-between md:hidden">
        <a
          href="/CV_Edgar_Rodriguez_Definitivo_Sin_Foto.pdf"
          className="flex items-center gap-2 rounded-2xl border border-cyan-400/35 bg-[#061827]/60 px-4 py-2.5 text-sm font-bold text-white shadow-xl shadow-black/20 backdrop-blur-2xl transition hover:bg-cyan-400/20"
        >
          <Download size={15} />
          CV
        </a>

        <button
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-2xl border border-white/10 bg-white/[0.08] p-2.5 text-white shadow-xl shadow-black/20 backdrop-blur-2xl transition hover:bg-white/[0.12]"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="mt-3 overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.08] p-3 shadow-2xl shadow-black/40 backdrop-blur-2xl md:hidden"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-purple-500/10" />

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-2xl border border-transparent px-4 py-3.5 text-base font-semibold text-slate-100 transition hover:border-white/10 hover:bg-white/[0.08] hover:text-cyan-100"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 border-t border-white/10 pt-3">
              <a
                href="https://github.com/edgarbv32"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3.5 font-semibold text-slate-100 transition hover:bg-white/[0.12]"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="#"
                onClick={closeMenu}
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3.5 font-semibold text-slate-100 transition hover:bg-white/[0.12]"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar