import { useEffect, useMemo, useRef, useState } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"

import "./Carousel.css"

const DRAG_BUFFER = 8
const CLICK_MOVE_LIMIT = 7
const CLICK_TIME_LIMIT = 420
const RECENT_SCROLL_BLOCK_MS = 650
const VELOCITY_THRESHOLD = 500
const GAP = 22
const CONTAINER_PADDING = 18

const SPRING_OPTIONS = {
  type: "spring",
  stiffness: 280,
  damping: 32,
  mass: 0.85,
}

function updatePointerGlow(event) {
  const card = event.currentTarget
  const rect = card.getBoundingClientRect()

  const x = ((event.clientX - rect.left) / rect.width) * 100
  const y = ((event.clientY - rect.top) / rect.height) * 100

  card.style.setProperty("--carousel-x", `${x}%`)
  card.style.setProperty("--carousel-y", `${y}%`)
}

function MiniStat({ label, value, positive = true }) {
  return (
    <div className="carousel-preview-stat">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{positive ? "+12.4%" : "Activo"}</small>
    </div>
  )
}

function ProjectPreview({ item }) {
  if (item.previewType === "ads") {
    return (
      <div className="carousel-preview">
        <div className="carousel-preview-topbar">
          <span>SapiensAds AI</span>
          <small>Dashboard</small>
        </div>

        <div className="carousel-preview-layout">
          <aside className="carousel-preview-sidebar">
            <span className="is-active" />
            <span />
            <span />
            <span />
            <span />
          </aside>

          <main className="carousel-preview-main">
            <div className="carousel-preview-stats">
              <MiniStat label="Leads" value="2.4K" />
              <MiniStat label="CTR" value="1.91%" />
              <MiniStat label="Conv." value="1,248" />
            </div>

            <div className="carousel-preview-chart">
              <span style={{ height: "34%" }} />
              <span style={{ height: "46%" }} />
              <span style={{ height: "39%" }} />
              <span style={{ height: "58%" }} />
              <span style={{ height: "52%" }} />
              <span style={{ height: "70%" }} />
              <span style={{ height: "64%" }} />
              <span style={{ height: "82%" }} />
            </div>

            <div className="carousel-preview-list">
              <span />
              <span />
              <span />
            </div>
          </main>
        </div>
      </div>
    )
  }

  if (item.previewType === "web") {
    return (
      <div className="carousel-preview">
        <div className="carousel-preview-topbar">
          <span>Nexora</span>
          <small>Landing page</small>
        </div>

        <div className="carousel-preview-hero">
          <div>
            <p>Soluciones digitales</p>
            <h4>
              para empresas que <span>quieren crecer.</span>
            </h4>
            <small>Diseño web · Performance · Conversión</small>
          </div>

          <div className="carousel-preview-building">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="carousel-preview-web-row">
          <span />
          <span />
          <span />
        </div>
      </div>
    )
  }

  return (
    <div className="carousel-preview">
      <div className="carousel-preview-topbar">
        <span>Hotel San Carlos</span>
        <small>POS</small>
      </div>

      <div className="carousel-preview-layout">
        <aside className="carousel-preview-sidebar">
          <span className="is-active" />
          <span />
          <span />
          <span />
          <span />
        </aside>

        <main className="carousel-preview-main">
          <div className="carousel-preview-stats">
            <MiniStat label="Ventas" value="$12.5K" />
            <MiniStat label="Reservas" value="128" />
            <MiniStat label="Tickets" value="303" />
          </div>

          <div className="carousel-preview-pos-grid">
            <div className="carousel-preview-donut" />
            <div className="carousel-preview-bars">
              <span style={{ width: "82%" }} />
              <span style={{ width: "64%" }} />
              <span style={{ width: "48%" }} />
              <span style={{ width: "70%" }} />
            </div>
          </div>

          <div className="carousel-preview-list">
            <span />
            <span />
            <span />
          </div>
        </main>
      </div>
    </div>
  )
}

function CarouselItem({
  item,
  renderIndex,
  sourceIndex,
  activeIndex,
  itemWidth,
  itemHeight,
  round,
  trackItemOffset,
  x,
  transition,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onKeyboardOpen,
}) {
  const range = [
    -(renderIndex + 1) * trackItemOffset,
    -renderIndex * trackItemOffset,
    -(renderIndex - 1) * trackItemOffset,
  ]

  const rotateY = useTransform(x, range, [76, 0, -76], {
    clamp: false,
  })

  const scale = useTransform(x, range, [0.93, 1, 0.93], {
    clamp: false,
  })

  const opacity = useTransform(x, range, [0.74, 1, 0.74], {
    clamp: false,
  })

  const isActive = activeIndex === sourceIndex

  return (
    <motion.article
      key={`${item?.id ?? renderIndex}-${renderIndex}`}
      role="button"
      tabIndex={0}
      aria-label={
        isActive
          ? `Abrir detalles de ${item.title}`
          : `Seleccionar ${item.title}`
      }
      className={[
        "carousel-item",
        round ? "round" : "",
        isActive ? "is-active" : "is-idle",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{
        width: itemWidth,
        height: round ? itemWidth : itemHeight,
        rotateY,
        scale,
        opacity,
        "--carousel-x": "50%",
        "--carousel-y": "50%",
        ...(round && { borderRadius: "50%" }),
      }}
      transition={transition}
      onPointerDown={(event) => onPointerDown(event, sourceIndex)}
      onPointerMove={onPointerMove}
      onPointerUp={(event) => onPointerUp(event, sourceIndex)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault()
          onKeyboardOpen(sourceIndex)
        }
      }}
      onMouseMove={updatePointerGlow}
    >
      <div className="carousel-item-glow" />
      <div className="carousel-item-grid" />

      <div className="carousel-item-inner">
        <header className="carousel-item-header">
          <div className="carousel-icon-container">{item.carouselIcon}</div>

          <span className="carousel-item-number">{item.number}</span>
        </header>

        <ProjectPreview item={item} />

        <div className="carousel-item-content">
          <div>
            <p className="carousel-item-type">{item.type}</p>

            <h3 className="carousel-item-title">{item.title}</h3>

            <p className="carousel-item-description">{item.description}</p>
          </div>

          <div className="carousel-item-tags">
            {item.stack.slice(0, 4).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Carousel({
  items = [],
  baseWidth = 980,
  height = 620,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = true,
  loop = true,
  round = false,
  onActiveIndexChange,
  onActiveItemClick,
}) {
  const safeItems = Array.isArray(items) ? items : []

  const itemWidth = Math.max(280, baseWidth - CONTAINER_PADDING * 2)
  const itemHeight = Math.max(500, height - 64)
  const trackItemOffset = itemWidth + GAP

  const itemsForRender = useMemo(() => {
    const normalizedItems = safeItems.map((item, index) => ({
      ...item,
      sourceIndex: index,
    }))

    if (!loop) return normalizedItems
    if (normalizedItems.length === 0) return []

    return [
      normalizedItems[normalizedItems.length - 1],
      ...normalizedItems,
      normalizedItems[0],
    ]
  }, [safeItems, loop])

  const [position, setPosition] = useState(loop ? 1 : 0)
  const [isHovered, setIsHovered] = useState(false)
  const [isJumping, setIsJumping] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const x = useMotionValue(0)
  const containerRef = useRef(null)
  const didDragRef = useRef(false)
  const lastScrollTimeRef = useRef(0)
  const pointerStartRef = useRef(null)

  const activeIndex =
    safeItems.length === 0
      ? 0
      : loop
        ? (position - 1 + safeItems.length) % safeItems.length
        : Math.min(position, safeItems.length - 1)

  useEffect(() => {
    onActiveIndexChange?.(activeIndex)
  }, [activeIndex, onActiveIndexChange])

  useEffect(() => {
    if (!pauseOnHover || !containerRef.current) return undefined

    const container = containerRef.current

    const handleMouseEnter = () => setIsHovered(true)
    const handleMouseLeave = () => setIsHovered(false)

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [pauseOnHover])

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined
    if (pauseOnHover && isHovered) return undefined

    const timer = setInterval(() => {
      setPosition((prev) => Math.min(prev + 1, itemsForRender.length - 1))
    }, autoplayDelay)

    return () => clearInterval(timer)
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    pauseOnHover,
    itemsForRender.length,
  ])

  useEffect(() => {
    const startingPosition = loop ? 1 : 0

    setPosition(startingPosition)
    x.set(-startingPosition * trackItemOffset)
  }, [safeItems.length, loop, trackItemOffset, x])

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1))
    }
  }, [itemsForRender.length, loop, position])

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS

  const handleAnimationStart = () => {
    setIsAnimating(true)
  }

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false)
      return
    }

    const lastCloneIndex = itemsForRender.length - 1

    if (position === lastCloneIndex) {
      setIsJumping(true)

      const target = 1

      setPosition(target)
      x.set(-target * trackItemOffset)

      requestAnimationFrame(() => {
        setIsJumping(false)
        setIsAnimating(false)
      })

      return
    }

    if (position === 0) {
      setIsJumping(true)

      const target = safeItems.length

      setPosition(target)
      x.set(-target * trackItemOffset)

      requestAnimationFrame(() => {
        setIsJumping(false)
        setIsAnimating(false)
      })

      return
    }

    setIsAnimating(false)
  }

  const handleWheelCapture = () => {
    lastScrollTimeRef.current = Date.now()
    didDragRef.current = true
  }

  const handleDragStart = () => {
    didDragRef.current = true
  }

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info

    const movedEnough = Math.abs(offset.x) > DRAG_BUFFER
    didDragRef.current = movedEnough

    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0

    if (direction === 0) return

    setPosition((prev) => {
      const next = prev + direction
      const max = itemsForRender.length - 1

      return Math.max(0, Math.min(next, max))
    })
  }

  const selectOrOpenItem = (sourceIndex) => {
    if (sourceIndex !== activeIndex) {
      setPosition(loop ? sourceIndex + 1 : sourceIndex)
      return
    }

    onActiveItemClick?.(safeItems[sourceIndex])
  }

  const handlePointerDown = (event, sourceIndex) => {
    pointerStartRef.current = {
      x: event.clientX,
      y: event.clientY,
      time: Date.now(),
      sourceIndex,
      moved: false,
    }
  }

  const handlePointerMove = (event) => {
    if (!pointerStartRef.current) return

    const deltaX = Math.abs(event.clientX - pointerStartRef.current.x)
    const deltaY = Math.abs(event.clientY - pointerStartRef.current.y)

    if (deltaX > CLICK_MOVE_LIMIT || deltaY > CLICK_MOVE_LIMIT) {
      pointerStartRef.current.moved = true
    }
  }

  const handlePointerUp = (event, sourceIndex) => {
    const pointerStart = pointerStartRef.current

    if (!pointerStart || pointerStart.sourceIndex !== sourceIndex) {
      pointerStartRef.current = null
      return
    }

    const deltaX = Math.abs(event.clientX - pointerStart.x)
    const deltaY = Math.abs(event.clientY - pointerStart.y)
    const elapsed = Date.now() - pointerStart.time
    const recentScroll = Date.now() - lastScrollTimeRef.current

    const isCleanClick =
      deltaX <= CLICK_MOVE_LIMIT &&
      deltaY <= CLICK_MOVE_LIMIT &&
      elapsed <= CLICK_TIME_LIMIT &&
      recentScroll > RECENT_SCROLL_BLOCK_MS &&
      !didDragRef.current &&
      !pointerStart.moved

    pointerStartRef.current = null
    didDragRef.current = false

    if (!isCleanClick) return

    selectOrOpenItem(sourceIndex)
  }

  const handleKeyboardOpen = (sourceIndex) => {
    selectOrOpenItem(sourceIndex)
  }

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
          right: 0,
        },
      }

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? "round" : ""}`.trim()}
      style={{
        width: `${baseWidth}px`,
        height: `${height}px`,
        ...(round && {
          height: `${baseWidth}px`,
          borderRadius: "50%",
        }),
      }}
      onWheelCapture={handleWheelCapture}
      onTouchMoveCapture={handleWheelCapture}
    >
      <motion.div
        className="carousel-track"
        drag={isAnimating ? false : "x"}
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1200,
          perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
          x,
        }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, renderIndex) => (
          <CarouselItem
            key={`${item?.id ?? renderIndex}-${renderIndex}`}
            item={item}
            renderIndex={renderIndex}
            sourceIndex={item.sourceIndex}
            activeIndex={activeIndex}
            itemWidth={itemWidth}
            itemHeight={itemHeight}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onKeyboardOpen={handleKeyboardOpen}
          />
        ))}
      </motion.div>

      <div className={`carousel-indicators-container ${round ? "round" : ""}`}>
        <div className="carousel-indicators">
          {safeItems.map((_, index) => (
            <motion.button
              type="button"
              key={index}
              className={`carousel-indicator ${
                activeIndex === index ? "active" : "inactive"
              }`}
              aria-label={`Ir al proyecto ${index + 1}`}
              aria-current={activeIndex === index}
              animate={{
                scale: activeIndex === index ? 1.2 : 1,
              }}
              onClick={() => setPosition(loop ? index + 1 : index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}