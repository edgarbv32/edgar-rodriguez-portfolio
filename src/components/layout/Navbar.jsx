import { useEffect, useState } from "react"
import { Download } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import PillNav from "../reactbits/PillNav"
import BubbleMenu from "../reactbits/BubbleMenu"

const navItems = [
  { label: "Inicio",      href: "#inicio" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Formación",   href: "#formacion" },
  { label: "Proyectos",   href: "#proyectos" },
  { label: "Stack",       href: "#stack" },
  { label: "Contacto",    href: "#contacto" },
]

const bubbleMenuItems = [
  { ...navItems[0], rotation: -3 },
  { ...navItems[1], rotation: 3 },
  { ...navItems[2], rotation: -3 },
  { ...navItems[3], rotation: 3 },
  { ...navItems[4], rotation: -3 },
  { ...navItems[5], rotation: 3 },
].map((item) => ({ ...item, ariaLabel: item.label }))

const navActions = [
  {
    label: "GitHub",
    href: "https://github.com/edgarbv32",
    target: "_blank",
    rel: "noreferrer",
    icon: <FaGithub size={15} />,
    variant: "ghost",
    ariaLabel: "Abrir GitHub de Edgar Rodriguez",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/edgar-rodriguez-fullstack/",
    target: "_blank",
    rel: "noreferrer",
    icon: <FaLinkedin size={15} />,
    variant: "ghost",
    ariaLabel: "Abrir LinkedIn de Edgar Rodriguez",
  },
  {
    label: "Descargar CV",
    href: "/CV_Edgar_Rodriguez.pdf",
    download: true,
    icon: <Download size={14} />,
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
        if (scrollPosition >= top) current = item.href
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
    <>
      <PillNav
        items={navItems}
        actions={navActions}
        activeHref={activeHref}
        ease="power3.easeOut"
        baseColor="rgba(3, 7, 18, 0.76)"
        pillColor="rgba(15, 23, 42, 0.64)"
        hoveredPillTextColor="#e0e7ff"
        pillTextColor="#cbd5e1"
        initialLoadAnimation={true}
      />

      <BubbleMenu
        items={bubbleMenuItems}
        useFixedPosition={true}
        menuBg="linear-gradient(135deg, #4F46E5, #7C3AED)"
        menuContentColor="#FFFFFF"
        menuAriaLabel="Abrir menú"
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.1}
      />
    </>
  )
}

export default Navbar