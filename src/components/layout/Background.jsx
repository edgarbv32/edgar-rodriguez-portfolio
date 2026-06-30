import GradientBlinds from "../reactbits/GradientBlinds"

function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0b0713]">
      <GradientBlinds
        gradientColors={[
          "#0b0713",
          "#1b0f2f",
          "#5227FF",
          "#FF9FFC",
          "#1b0f2f",
          "#0b0713",
        ]}
        angle={-14}
        noise={0.28}
        blindCount={13}
        blindMinWidth={80}
        spotlightRadius={0.52}
        spotlightSoftness={1}
        spotlightOpacity={1.1}
        mouseDampening={0.08}
        mirrorGradient={true}
        distortAmount={0.02}
        shineDirection="left"
        mixBlendMode="normal"
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