import MoltenMetal from "../reactbits/MoltenMetal"

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0b0713]">
      <MoltenMetal
        color1="#5227FF"
        color2="#FF9FFC"
        color3="#FFFFFF"
        colorMode="molten"
        speed={0.28}
        scale={4.5}
        detail={3}
        glow={1.5}
        coreSize={0.09}
        swirl={0.85}
        fold={-0.2}
        blackPoint={0.08}
        brightness={1.1}
        grain={true}
        grainIntensity={0.045}
        mouseInteraction={true}
        mouseStrength={0.22}
        opacity={0.9}
        dpr={1}
      />

      <div className="pointer-events-none absolute inset-0 bg-[#0b0713]/25" />

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(11, 7, 19, 0.1) 0%, rgba(11, 7, 19, 0.42) 55%, rgba(11, 7, 19, 0.75) 100%)",
        }}
      />
    </div>
  )
}

export default Background