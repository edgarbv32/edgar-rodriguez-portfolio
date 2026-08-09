import { useEffect, useRef } from "react"
import { Renderer, Program, Mesh, Triangle } from "ogl"

import "./MoltenMetal.css"

const hexToRGB = (hex) => {
  const c = hex.replace("#", "").padEnd(6, "0")
  const r = parseInt(c.slice(0, 2), 16) / 255
  const g = parseInt(c.slice(2, 4), 16) / 255
  const b = parseInt(c.slice(4, 6), 16) / 255

  return [r, g, b]
}

const colorModeToFloat = (mode) =>
  mode === "ember" ? 1 : mode === "frost" ? 2 : 0

const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uSpeed;
uniform float uScale;
uniform float uDetail;
uniform float uGlow;
uniform float uCoreSize;
uniform float uSwirl;
uniform float uFold;
uniform float uBlackPoint;
uniform float uBrightness;
uniform float uColorMode;
uniform float uGrain;
uniform float uGrainIntensity;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseStrength;
uniform bool uEnableMouse;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
out vec4 fragColor;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  float time = iTime * uSpeed;
  vec2 p = uScale * ((gl_FragCoord.xy - 0.5 * iResolution.xy) / iResolution.y) - 0.5;

  vec2 drift = vec2(0.0);
  if (uEnableMouse) {
    drift = (uMouse - 0.5) * uMouseStrength * 2.0;
  }
  p += drift;

  vec2 i = p;
  float c = 0.0;
  float r = length(p + vec2(sin(time), sin(time * 0.3 + 5.0)) * 0.5);
  float d = length(p);
  float rot = d + time + p.x * uSwirl;

  float cosRot = cos(rot);
  mat2 warp = mat2(cos(rot - sin(time / 5.0)), sin(rot), -sin(cosRot - time), cosRot) * uFold;
  float glowCore = uGlow * uCoreSize;

  for (float n = 0.0; n < 8.0; n++) {
    if (n >= uDetail) break;
    p *= warp;
    float t = r - time / (n + 3.0);
    i -= p + vec2(cos(t - i.x - r) + sin(t + i.y), sin(t - i.y) + cos(t + i.x) + r);
    c += glowCore / length(vec2(sin(i.x + t), cos(i.y + t)));
  }

  c /= 6.0;

  float intensity = max(c - uBlackPoint, 0.0) * uBrightness;

  float g = clamp(intensity, 0.0, 1.0);

  float mid = 0.5;
  if (uColorMode > 1.5) {
    mid = 0.65;
  } else if (uColorMode > 0.5) {
    mid = 0.35;
  }

  vec3 col = mix(uColor1, uColor2, smoothstep(0.0, mid, g));
  col = mix(col, uColor3, smoothstep(mid, 1.0, g));

  float a = g;
  if (uGrain > 0.5) {
    float gr = hash(gl_FragCoord.xy + iTime);
    a += (gr - 0.5) * uGrainIntensity;
  }
  a = clamp(a, 0.0, 1.0) * uOpacity;
  fragColor = vec4(col * a, a);
}
`

function MoltenMetal({
  className = "",
  dpr,
  paused = false,
  color1 = "#5227FF",
  color2 = "#FF9FFC",
  color3 = "#FFFFFF",
  speed = 0.35,
  scale = 4,
  detail = 3,
  glow = 1.6,
  coreSize = 0.1,
  swirl = 1,
  fold = -0.2,
  blackPoint = 0.05,
  brightness = 1.3,
  colorMode = "molten",
  grain = true,
  grainIntensity = 0.05,
  mouseInteraction = true,
  mouseStrength = 0.3,
  opacity = 1,
}) {
  const containerRef = useRef(null)
  const rafRef = useRef(null)
  const programRef = useRef(null)
  const meshRef = useRef(null)
  const geometryRef = useRef(null)
  const rendererRef = useRef(null)
  const reducedMotionRef = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )

  useEffect(() => {
    const container = containerRef.current

    if (!container) return

    const renderer = new Renderer({
      webgl: 2,
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      dpr:
        dpr ??
        Math.min(
          typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1,
          2,
        ),
    })

    rendererRef.current = renderer

    const gl = renderer.gl

    gl.clearColor(0, 0, 0, 0)

    const canvas = gl.canvas

    canvas.style.width = "100%"
    canvas.style.height = "100%"
    canvas.style.display = "block"
    canvas.style.pointerEvents = "none"

    container.appendChild(canvas)

    const geometry = new Triangle(gl)

    geometryRef.current = geometry

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        iTime: { value: 0 },
        iResolution: { value: [1, 1] },
        uSpeed: { value: speed },
        uScale: { value: scale },
        uDetail: { value: detail },
        uGlow: { value: glow },
        uCoreSize: { value: Math.max(coreSize, 0.001) },
        uSwirl: { value: swirl },
        uFold: { value: fold },
        uBlackPoint: { value: blackPoint },
        uBrightness: { value: brightness },
        uColorMode: { value: colorModeToFloat(colorMode) },
        uGrain: { value: grain ? 1 : 0 },
        uGrainIntensity: { value: grainIntensity },
        uOpacity: { value: opacity },
        uMouse: { value: [0.5, 0.5] },
        uMouseStrength: { value: mouseStrength },
        uEnableMouse: { value: mouseInteraction },
        uColor1: { value: hexToRGB(color1) },
        uColor2: { value: hexToRGB(color2) },
        uColor3: { value: hexToRGB(color3) },
      },
    })

    programRef.current = program

    const mesh = new Mesh(gl, { geometry, program })

    meshRef.current = mesh

    const resize = () => {
      const rect = container.getBoundingClientRect()
      const width = Math.max(1, Math.floor(rect.width))
      const height = Math.max(1, Math.floor(rect.height))

      renderer.setSize(width, height)

      const res = program.uniforms.iResolution.value

      res[0] = gl.drawingBufferWidth
      res[1] = gl.drawingBufferHeight
    }

    resize()

    const ro = new ResizeObserver(resize)

    ro.observe(container)

    const targetMouse = [0.5, 0.5]
    const currentMouse = [0.5, 0.5]

    const updatePointer = (event) => {
      const rect = container.getBoundingClientRect()

      targetMouse[0] = (event.clientX - rect.left) / rect.width
      targetMouse[1] = 1 - (event.clientY - rect.top) / rect.height
    }

    window.addEventListener("pointermove", updatePointer, { passive: true })

    let isVisible = true
    let isPageVisible = !document.hidden
    const t0 = performance.now()

    const loop = (time) => {
      if (!reducedMotionRef.current) {
        rafRef.current = requestAnimationFrame(loop)
      } else {
        rafRef.current = 0
      }

      program.uniforms.iTime.value = (time - t0) * 0.001

      currentMouse[0] += 0.05 * (targetMouse[0] - currentMouse[0])
      currentMouse[1] += 0.05 * (targetMouse[1] - currentMouse[1])

      const mouseUniform = program.uniforms.uMouse.value

      mouseUniform[0] = currentMouse[0]
      mouseUniform[1] = currentMouse[1]

      if (!paused) {
        try {
          renderer.render({ scene: mesh })
        } catch (error) {
          console.error(error)
        }
      }
    }

    const tryStart = () => {
      if (isVisible && isPageVisible && !rafRef.current) {
        rafRef.current = requestAnimationFrame(loop)
      }
    }

    const tryStop = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
        rafRef.current = 0
      }
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
        if (isVisible) {
          tryStart()
        } else {
          tryStop()
        }
      },
      { threshold: 0 },
    )

    io.observe(container)

    const onVisibility = () => {
      isPageVisible = !document.hidden
      if (isPageVisible) {
        tryStart()
      } else {
        tryStop()
      }
    }

    document.addEventListener("visibilitychange", onVisibility)

    tryStart()

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const handleMotionChange = (event) => {
      reducedMotionRef.current = event.matches

      if (!event.matches) tryStart()
    }

    motionQuery.addEventListener("change", handleMotionChange)

    return () => {
      tryStop()

      motionQuery.removeEventListener("change", handleMotionChange)
      window.removeEventListener("pointermove", updatePointer)
      document.removeEventListener("visibilitychange", onVisibility)
      ro.disconnect()
      io.disconnect()

      if (canvas.parentElement === container) {
        container.removeChild(canvas)
      }

      const callIfFn = (obj, key) => {
        if (obj && typeof obj[key] === "function") {
          obj[key].call(obj)
        }
      }

      callIfFn(programRef.current, "remove")
      callIfFn(geometryRef.current, "remove")
      callIfFn(meshRef.current, "remove")

      gl.getExtension("WEBGL_lose_context")?.loseContext()

      programRef.current = null
      geometryRef.current = null
      meshRef.current = null
      rendererRef.current = null
    }
  }, [
    dpr,
    paused,
    color1,
    color2,
    color3,
    speed,
    scale,
    detail,
    glow,
    coreSize,
    swirl,
    fold,
    blackPoint,
    brightness,
    colorMode,
    grain,
    grainIntensity,
    mouseInteraction,
    mouseStrength,
    opacity,
  ])

  return (
    <div
      ref={containerRef}
      className={`molten-metal-container ${className}`.trim()}
    />
  )
}

export default MoltenMetal
