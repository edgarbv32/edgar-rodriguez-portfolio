import { useEffect, useState } from "react"

function Background() {
  const [position, setPosition] = useState({ x: 50, y: 50 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 100
      const y = (event.clientY / window.innerHeight) * 100

      setPosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.25),transparent_34%),radial-gradient(circle_at_85%_18%,rgba(168,85,247,0.28),transparent_36%),radial-gradient(circle_at_50%_85%,rgba(59,130,246,0.22),transparent_40%)]" />

      <div
        className="absolute hidden h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.24),rgba(139,92,246,0.14)_38%,transparent_70%)] blur-2xl transition-[left,top] duration-300 ease-out md:block"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
        }}
      />

      <div className="aurora aurora-one absolute -left-40 -top-24 h-[620px] w-[620px] rounded-full bg-cyan-400/45 blur-[115px] md:h-[760px] md:w-[760px] md:blur-[145px]" />

      <div className="aurora aurora-two absolute -right-48 top-[6%] h-[620px] w-[620px] rounded-full bg-fuchsia-500/42 blur-[120px] md:h-[820px] md:w-[820px] md:blur-[155px]" />

      <div className="aurora aurora-three absolute bottom-[-220px] left-[42%] h-[620px] w-[620px] rounded-full bg-blue-500/36 blur-[125px] md:h-[860px] md:w-[860px] md:blur-[165px]" />

      <div className="aurora-beam absolute left-1/2 top-[16%] h-[300px] w-[150%] -translate-x-1/2 rotate-[-8deg] bg-[linear-gradient(90deg,rgba(34,211,238,0.28),rgba(96,165,250,0.22),rgba(168,85,247,0.24),rgba(34,211,238,0.16))] blur-[75px] md:h-[380px] md:blur-[90px]" />

      <div className="aurora-beam-slow absolute left-1/2 top-[55%] h-[260px] w-[135%] -translate-x-1/2 rotate-[10deg] bg-[linear-gradient(90deg,rgba(59,130,246,0.18),rgba(168,85,247,0.20),rgba(34,211,238,0.16))] blur-[90px] md:h-[340px] md:blur-[105px]" />

      <div className="absolute inset-0 opacity-[0.08]">
        <div className="h-full w-full bg-[linear-gradient(to_right,rgba(255,255,255,0.38)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.38)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,22,0.10)_46%,rgba(3,7,18,0.58)_100%)]" />

      <div className="absolute inset-0 bg-[#030712]/5" />
    </div>
  )
}

export default Background