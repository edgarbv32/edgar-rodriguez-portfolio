import { useEffect, useRef } from "react"
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
  initialLoadAnimation = true,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor

  const circleRefs = useRef([])
  const tlRefs = useRef([])
  const activeTweenRefs = useRef([])
  const logoImgRef = useRef(null)
  const logoTweenRef = useRef(null)
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

  const cssVars = {
    "--base": baseColor,
    "--pill-bg": pillColor,
    "--hover-text": hoveredPillTextColor,
    "--pill-text": resolvedPillTextColor,
  }

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

        <div className="pill-nav-items" ref={navItemsRef}>
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
          <div className="pill-nav-actions">{renderActions()}</div>
        )}
      </nav>
    </div>
  )
}

export default PillNav