import { Mail } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { SiIndeed } from "react-icons/si"

const INDEED_URL = "https://profile.indeed.com/?hl=es_MX&co=MX&from=gnav-homepage"

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
            className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-slate-300 transition hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub size={18} />
          </a>

          <a
            href={INDEED_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-slate-300 transition hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white"
            aria-label="Indeed"
          >
            <SiIndeed size={18} />
          </a>

          <a
            href="mailto:edgar.rdz.dev@gmail.com"
            className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-slate-300 transition hover:border-indigo-400/30 hover:bg-indigo-500/10 hover:text-white"
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