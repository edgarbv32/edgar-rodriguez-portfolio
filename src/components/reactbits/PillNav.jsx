import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import "./PillNav.css"

const PillNav = ({
  logo,
  logoAlt = "Logo",
  items,
  actions = [],
  activeHref,
  className = "",
  ease = "power3.easeOut",
  baseColor = "#fff",
  pillColor = "#120F17",
  hoveredPillTextColor = "#120F17",
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const circleRefs = useRef([])
  const tlRefs = useRef([])
  const activeTweenRefs = useRef([])
  const logoImgRef = useRef(null)
  const logoTweenRef = useRef(null)
  const hamburgerRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const navItemsRef = useRef(null)
  const logoRef = useRef(null)

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle) => {
        if (!circle?.parentElement) return

        const pill = circle.parentElement
        const rect = pill.getBoundingClientRect()
        const { width: w, height: h } = rect
        const rawRadius = (w * w) / 4 + h * h
        const radius = rawRadius / (2 * h)
        const diameter = Math.ceil(2 * radius) + 2
        const delta =
          Math.ceil(
            radius - Math.sqrt(Math.max(0, radius * radius - (w * w) / 4)),
          ) + 1
        const originY = diameter - delta

        circle.style.width = `${diameter}px`
        circle.style.height = `${diameter}px`
        circle.style.bottom = `-${delta}px`

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        })

        const label = pill.querySelector(".pill-label")
        const hoverLabel = pill.querySelector(".pill-label-hover")

        if (label) gsap.set(label, { y: 0 })
        if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 })

        const index = circleRefs.current.indexOf(circle)
        if (index === -1) return

        tlRefs.current[index]?.kill()

        const tl = gsap.timeline({ paused: true })

        tl.to(
          circle,
          { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" },
          0,
        )

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 2, ease, overwrite: "auto" }, 0)
        }

        if (hoverLabel) {
          gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 })
          tl.to(
            hoverLabel,
            { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" },
            0,
          )
        }

        tlRefs.current[index] = tl
      })
    }

    layout()

    const onResize = () => layout()
    window.addEventListener("resize", onResize)

    if (document.fonts?.ready) {
      document.fonts.ready.then(layout).catch(() => {})
    }

    const menu = mobileMenuRef.current
    if (menu) {
      gsap.set(menu, { visibility: "hidden", opacity: 0, y: 10, scaleY: 1 })
    }

    if (initialLoadAnimation) {
      const logoElement = logoRef.current
      const navItemsElement = navItemsRef.current

      if (logoElement) {
        gsap.set(logoElement, { scale: 0 })
        gsap.to(logoElement, { scale: 1, duration: 0.6, ease })
      }

      if (navItemsElement) {
        gsap.set(navItemsElement, { width: 0, overflow: "hidden" })
        gsap.to(navItemsElement, { width: "auto", duration: 0.6, ease })
      }
    }

    return () => window.removeEventListener("resize", onResize)
  }, [items, ease, initialLoadAnimation])

  const handleEnter = (index) => {
    const tl = tlRefs.current[index]
    if (!tl) return
    activeTweenRefs.current[index]?.kill()
    activeTweenRefs.current[index] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto",
    })
  }

  const handleLeave = (index) => {
    const tl = tlRefs.current[index]
    if (!tl) return
    activeTweenRefs.current[index]?.kill()
    activeTweenRefs.current[index] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto",
    })
  }

  const handleLogoEnter = () => {
    const img = logoImgRef.current
    if (!img) return
    logoTweenRef.current?.kill()
    gsap.set(img, { rotate: 0 })
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.2,
      ease,
      overwrite: "auto",
    })
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    const hamburger = hamburgerRef.current
    const menu = mobileMenuRef.current

    if (hamburger) {
      const lines = hamburger.querySelectorAll(".hamburger-line")
      gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease })
      gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease })
    }

    if (menu) {
      gsap.to(menu, {
        opacity: 0,
        y: 10,
        scaleY: 1,
        duration: 0.2,
        ease,
        transformOrigin: "top center",
        onComplete: () => gsap.set(menu, { visibility: "hidden" }),
      })
    }
  }

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen
    setIsMobileMenuOpen(newState)
    const hamburger = hamburgerRef.current
    const menu = mobileMenuRef.current

    if (hamburger) {
      const lines = hamburger.querySelectorAll(".hamburger-line")
      if (newState) {
        gsap.to(lines[0], { rotation: 45, y: 3, duration: 0.3, ease })
        gsap.to(lines[1], { rotation: -45, y: -3, duration: 0.3, ease })
      } else {
        gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease })
        gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease })
      }
    }

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: "visible" })
        gsap.fromTo(
          menu,
          { opacity: 0, y: 10, scaleY: 1 },
          {
            opacity: 1,
            y: 0,
            scaleY: 1,
            duration: 0.3,
            ease,
            transformOrigin: "top center",
          },
        )
      } else {
        closeMobileMenu()
      }
    }

    onMobileMenuClick?.()
  }

  const cssVars = {
    "--base": baseColor,
    "--pill-bg": pillColor,
    "--hover-text": hoveredPillTextColor,
    "--pill-text": resolvedPillTextColor,
  }

  const mobileItems = [...items, ...actions]

  const renderActions = () => {
    const nodes = []
    actions.forEach((action, index) => {
      if (index > 0) {
        nodes.push(
          <span
            key={`divider-${index}`}
            className="pill-action-divider"
            aria-hidden="true"
          />
        )
      }
      nodes.push(
        <a
          key={action.href || `action-${index}`}
          href={action.href}
          target={action.target}
          rel={action.rel}
          download={action.download || undefined}
          aria-label={action.ariaLabel || action.label}
          className={`pill-action pill-action--${action.variant || "default"}`}
        >
          {action.icon && (
            <span className="pill-action__icon">{action.icon}</span>
          )}
          <span className="pill-action__label">{action.label}</span>
        </a>
      )
    })
    return nodes
  }

  return (
    <div className="pill-nav-container">
      <nav
        className={`pill-nav ${className}`.trim()}
        aria-label="Primary"
        style={cssVars}
      >
        {logo && (
          <a
            className="pill-logo"
            href={items?.[0]?.href || "#inicio"}
            aria-label="Inicio"
            onMouseEnter={handleLogoEnter}
            ref={(el) => {
              logoRef.current = el
            }}
          >
            <img src={logo} alt={logoAlt} ref={logoImgRef} />
          </a>
        )}

        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item, index) => (
              <li key={item.href || `item-${index}`} role="none">
                <a
                  role="menuitem"
                  href={item.href}
                  className={`pill${activeHref === item.href ? " is-active" : ""}`}
                  aria-label={item.ariaLabel || item.label}
                  onMouseEnter={() => handleEnter(index)}
                  onMouseLeave={() => handleLeave(index)}
                >
                  <span
                    className="hover-circle"
                    aria-hidden="true"
                    ref={(el) => {
                      circleRefs.current[index] = el
                    }}
                  />
                  <span className="label-stack">
                    <span className="pill-label">{item.label}</span>
                    <span className="pill-label-hover" aria-hidden="true">
                      {item.label}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {actions.length > 0 && (
          <div className="pill-nav-actions desktop-only">
            {renderActions()}
          </div>
        )}

        <button
          className="mobile-menu-button mobile-only"
          onClick={toggleMobileMenu}
          aria-label="Abrir menú"
          ref={hamburgerRef}
          type="button"
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      <div
        className="mobile-menu-popover mobile-only"
        ref={mobileMenuRef}
        style={cssVars}
      >
        <ul className="mobile-menu-list">
          {mobileItems.map((item, index) => (
            <li key={item.href || `mobile-item-${index}`}>
              <a
                href={item.href}
                target={item.target}
                rel={item.rel}
                download={item.download || undefined}
                className={`mobile-menu-link${activeHref === item.href ? " is-active" : ""}`}
                onClick={closeMobileMenu}
              >
                {item.icon && (
                  <span className="mobile-menu-link__icon">{item.icon}</span>
                )}
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PillNav