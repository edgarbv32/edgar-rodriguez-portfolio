import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"

import "./BubbleMenu.css"

const DEFAULT_ITEMS = [
  {
    label: "home",
    href: "#",
    ariaLabel: "Home",
    rotation: -6,
    hoverStyles: { bgColor: "#6366F1", textColor: "#ffffff" },
  },
  {
    label: "about",
    href: "#",
    ariaLabel: "About",
    rotation: 6,
    hoverStyles: { bgColor: "#7C3AED", textColor: "#ffffff" },
  },
  {
    label: "projects",
    href: "#",
    ariaLabel: "Projects",
    rotation: -6,
    hoverStyles: { bgColor: "#8B5CF6", textColor: "#ffffff" },
  },
  {
    label: "blog",
    href: "#",
    ariaLabel: "Blog",
    rotation: 6,
    hoverStyles: { bgColor: "#4338CA", textColor: "#ffffff" },
  },
  {
    label: "contact",
    href: "#",
    ariaLabel: "Contact",
    rotation: -6,
    hoverStyles: { bgColor: "#A78BFA", textColor: "#ffffff" },
  },
]

function BubbleMenu({
  logo,
  onMenuClick,
  className,
  style,
  menuAriaLabel = "Abrir menú",
  menuBg = "#050816",
  menuContentColor = "#e2e8f0",
  useFixedPosition = false,
  items,
  animationEase = "back.out(1.5)",
  animationDuration = 0.5,
  staggerDelay = 0.1,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)

  const overlayRef = useRef(null)
  const bubblesRef = useRef([])
  const labelRefs = useRef([])
  const toggleRef = useRef(null)
  const reducedMotionRef = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )

  const menuItems = items?.length ? items : DEFAULT_ITEMS
  const containerClassName = [
    "bubble-menu",
    useFixedPosition ? "fixed" : "absolute",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  const handleToggle = () => {
    const nextState = !isMenuOpen

    if (nextState) setShowOverlay(true)
    setIsMenuOpen(nextState)
    onMenuClick?.(nextState)
  }

  const closeMenu = () => {
    if (!isMenuOpen) return

    setIsMenuOpen(false)
    onMenuClick?.(false)
  }

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    const handleChange = (event) => {
      reducedMotionRef.current = event.matches
    }

    query.addEventListener("change", handleChange)
    return () => query.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (!isMenuOpen) return undefined

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu()
        toggleRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenuOpen])

  useEffect(() => {
    const overlay = overlayRef.current
    const bubbles = bubblesRef.current.filter(Boolean)
    const labels = labelRefs.current.filter(Boolean)

    if (!overlay || !bubbles.length) return

    const reduced = reducedMotionRef.current

    if (isMenuOpen) {
      gsap.set(overlay, { display: "flex" })
      gsap.killTweensOf([...bubbles, ...labels])

      if (reduced) {
        gsap.set(bubbles, { scale: 1, transformOrigin: "50% 50%" })
        gsap.set(labels, { y: 0, autoAlpha: 1 })
        bubbles[0]?.focus()
        return
      }

      gsap.set(bubbles, { scale: 0, transformOrigin: "50% 50%" })
      gsap.set(labels, { y: 24, autoAlpha: 0 })

      bubbles.forEach((bubble, i) => {
        const delay = i * staggerDelay + gsap.utils.random(-0.05, 0.05)
        const tl = gsap.timeline({ delay })

        tl.to(bubble, {
          scale: 1,
          duration: animationDuration,
          ease: animationEase,
        })

        if (labels[i]) {
          tl.to(
            labels[i],
            {
              y: 0,
              autoAlpha: 1,
              duration: animationDuration,
              ease: "power3.out",
            },
            `-=${animationDuration * 0.9}`,
          )
        }
      })

      bubbles[0]?.focus()
    } else if (showOverlay) {
      gsap.killTweensOf([...bubbles, ...labels])

      if (reduced) {
        gsap.set(overlay, { display: "none" })
        setShowOverlay(false)
        return
      }

      gsap.to(labels, {
        y: 24,
        autoAlpha: 0,
        duration: 0.2,
        ease: "power3.in",
      })
      gsap.to(bubbles, {
        scale: 0,
        duration: 0.2,
        ease: "power3.in",
        onComplete: () => {
          gsap.set(overlay, { display: "none" })
          setShowOverlay(false)
        },
      })
    }
  }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay])

  const handleLinkClick = () => {
    closeMenu()
  }

  return (
    <>
      <nav
        className={containerClassName}
        style={style}
        aria-label="Navegación móvil"
      >
        {logo && (
          <div
            className="bubble logo-bubble"
            aria-label="Logo"
            style={{ background: menuBg }}
          >
            <span className="logo-content">
              {typeof logo === "string" ? (
                <img src={logo} alt="Logo" className="bubble-logo" />
              ) : (
                logo
              )}
            </span>
          </div>
        )}

        <button
          type="button"
          className={`bubble toggle-bubble menu-btn ${isMenuOpen ? "open" : ""}`}
          onClick={handleToggle}
          aria-label={isMenuOpen ? "Cerrar menú" : menuAriaLabel}
          aria-expanded={isMenuOpen}
          aria-haspopup="true"
          ref={toggleRef}
          style={{ background: menuBg }}
        >
          <span className="menu-line" style={{ background: menuContentColor }} />
          <span
            className="menu-line short"
            style={{ background: menuContentColor }}
          />
        </button>
      </nav>

      {showOverlay && (
        <div
          ref={overlayRef}
          className={`bubble-menu-items ${useFixedPosition ? "fixed" : "absolute"}`}
          aria-hidden={!isMenuOpen}
        >
          <div
            className="menu-scrim"
            aria-hidden="true"
            onClick={closeMenu}
          />

          <ul className="pill-list" role="menu" aria-label="Enlaces de navegación">
            {menuItems.map((item, idx) => (
              <li key={idx} role="none" className="pill-col">
                <a
                  role="menuitem"
                  href={item.href}
                  aria-label={item.ariaLabel || item.label}
                  className="pill-link"
                  onClick={handleLinkClick}
                  style={{
                    "--item-rot": `${item.rotation ?? 0}deg`,
                    ...(item.pillBg ? { "--pill-bg": item.pillBg } : {}),
                    ...(item.pillColor ? { "--pill-color": item.pillColor } : {}),
                    ...(item.hoverStyles?.bgColor
                      ? { "--hover-bg": item.hoverStyles.bgColor }
                      : {}),
                    ...(item.hoverStyles?.textColor
                      ? { "--hover-color": item.hoverStyles.textColor }
                      : {}),
                  }}
                  ref={(el) => {
                    if (el) bubblesRef.current[idx] = el
                  }}
                >
                  <span
                    className="pill-label"
                    ref={(el) => {
                      if (el) labelRefs.current[idx] = el
                    }}
                  >
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

export default BubbleMenu
