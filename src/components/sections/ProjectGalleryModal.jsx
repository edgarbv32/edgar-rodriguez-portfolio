import { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

function ProjectGalleryModal({ project, paths, activeIndex, onClose, onNavigate }) {
  const isOpen = Boolean(project)
  const total = paths?.length ?? 0

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose()
      if (event.key === "ArrowRight") onNavigate((activeIndex + 1) % total)
      if (event.key === "ArrowLeft") onNavigate((activeIndex - 1 + total) % total)
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, activeIndex, total, onClose, onNavigate])

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm"
          onClick={onClose}
        >
          <div className="flex items-center justify-between px-5 py-4 md:px-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.14em] text-indigo-200">
                {project.title}
              </p>

              <p className="mt-1 text-xs font-bold text-slate-400">
                {activeIndex + 1} / {total}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Cerrar galería"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:border-indigo-300/30 hover:bg-white/[0.12]"
            >
              <X size={18} />
            </button>
          </div>

          <div
            className="relative flex flex-1 items-center justify-center px-4 md:px-16"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => onNavigate((activeIndex - 1 + total) % total)}
              aria-label="Imagen anterior"
              className="absolute left-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:border-indigo-300/30 hover:bg-white/[0.12] md:left-6"
            >
              <ChevronLeft size={22} />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={activeIndex}
                src={paths[activeIndex]}
                alt={`${project.title} — screenshot ${activeIndex + 1}`}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="max-h-[70vh] w-full max-w-5xl rounded-2xl border border-white/10 object-contain shadow-2xl shadow-black/50"
              />
            </AnimatePresence>

            <button
              type="button"
              onClick={() => onNavigate((activeIndex + 1) % total)}
              aria-label="Imagen siguiente"
              className="absolute right-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition hover:border-indigo-300/30 hover:bg-white/[0.12] md:right-6"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div
            className="flex gap-2 overflow-x-auto px-5 py-4 md:px-8"
            onClick={(event) => event.stopPropagation()}
          >
            {paths.map((path, index) => (
              <button
                key={path}
                type="button"
                onClick={() => onNavigate(index)}
                className={[
                  "h-14 w-24 shrink-0 overflow-hidden rounded-lg border transition",
                  index === activeIndex
                    ? "border-indigo-300 opacity-100"
                    : "border-white/10 opacity-50 hover:opacity-80",
                ].join(" ")}
              >
                <img
                  src={path}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default ProjectGalleryModal
