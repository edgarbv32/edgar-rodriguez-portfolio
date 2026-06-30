import { useEffect, useState } from "react"

import { Download } from "lucide-react"
import { FaGithub } from "react-icons/fa"

import PillNav from "../reactbits/PillNav"

const navItems = [
  {
    label: "Inicio",
    href: "#inicio",
  },
  {
    label: "Experiencia",
    href: "#experiencia",
  },
  {
    label: "Proyectos",
    href: "#proyectos",
  },
  {
    label: "Stack",
    href: "#stack",
  },
  {
    label: "Contacto",
    href: "#contacto",
  },
]

const navActions = [
  {
    label: "GitHub",
    href: "https://github.com/edgarbv32",
    target: "_blank",
    rel: "noreferrer",
    icon: <FaGithub />,
    variant: "icon",
    ariaLabel: "Abrir GitHub de Edgar Rodriguez",
  },
  {
    label: "Descargar CV",
    href: "/CV_Edgar_Rodriguez.pdf",
    download: true,
    icon: <Download size={16} />,
    variant: "primary",
    ariaLabel: "Descargar CV de Edgar Rodriguez",
  },
]

function Navbar() {
  const [activeHref, setActiveHref] = useState("#inicio")

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 160
      let current = "#inicio"

      navItems.forEach((item) => {
        const section = document.querySelector(item.href)

        if (!section) return

        const top = section.getBoundingClientRect().top + window.scrollY

        if (scrollPosition >= top) {
          current = item.href
        }
      })

      setActiveHref(current)
    }

    updateActiveSection()

    window.addEventListener("scroll", updateActiveSection, { passive: true })
    window.addEventListener("resize", updateActiveSection)

    return () => {
      window.removeEventListener("scroll", updateActiveSection)
      window.removeEventListener("resize", updateActiveSection)
    }
  }, [])

  return (
    <PillNav
      items={navItems}
      actions={navActions}
      activeHref={activeHref}
      ease="power3.easeOut"
      baseColor="rgba(3, 7, 18, 0.76)"
      pillColor="rgba(15, 23, 42, 0.64)"
      hoveredPillTextColor="#dbeafe"
      pillTextColor="#e5e7eb"
      initialLoadAnimation={true}
    />
  )
}

export default Navbar