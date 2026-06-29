import { Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-500">
          Built with React, Vite & Tailwind CSS · 2026
        </p>

        <div className="flex gap-3">
          <a
            href="https://github.com/edgarbv32"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-slate-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="#"
            className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-slate-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="mailto:edgar.rdz.dev@gmail.com"
            className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-slate-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
            aria-label="Correo"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer