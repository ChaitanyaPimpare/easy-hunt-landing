import { motion } from "framer-motion"

export default function TechPlanet() {
  return (
    <div className="relative w-full max-w-[520px] aspect-square mx-auto flex items-center justify-center overflow-visible">

      {/* 🌌 Deep space atmosphere glow */}
      <div className="absolute w-[520px] h-[520px] rounded-full bg-blue-600/10 blur-[140px]" />
      <div className="absolute w-[420px] h-[420px] rounded-full bg-indigo-500/10 blur-[120px]" />

      {/* ✨ Star particles in background */}
      <Stars />

      {/* 🌍 Rotating Planet */}
      <motion.div
        className="relative w-[380px] h-[380px]"
        animate={{ rotate: 360 }}
        transition={{
          duration: 80, // slow planet rotation
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Outer glow aura */}
        <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-3xl scale-110" />

        {/* Planet image */}
        <img
          src="/tech-planet.png"
          alt="Tech Planet"
          className="w-full h-full object-contain"
          style={{
            mixBlendMode: "screen",   // makes dark parts disappear into bg
            filter: "drop-shadow(0 0 40px rgba(59,130,246,0.7))",
          }}
        />

        {/* Subtle inner shading for depth */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-transparent to-black/30" />
      </motion.div>

      {/* 🌠 Floating micro particles around planet */}
      <FloatingParticle angle={40} radius={210} delay={0} />
      <FloatingParticle angle={120} radius={230} delay={1} />
      <FloatingParticle angle={200} radius={215} delay={2} />
      <FloatingParticle angle={300} radius={240} delay={3} />
    </div>
  )
}

function FloatingParticle({ angle, radius, delay }: { angle: number; radius: number; delay: number }) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-2.5 h-2.5 rounded-full bg-blue-300 shadow-[0_0_12px_rgba(147,197,253,0.9)]"
      style={{ transform: `rotate(${angle}deg) translateX(${radius}px)` }}
      animate={{ y: [0, -12, 0], opacity: [0.3, 1, 0.3], scale: [1, 1.6, 1] }}
      transition={{ duration: 4, repeat: Infinity, delay, ease: "easeInOut" }}
    />
  )
}

function Stars() {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-200 rounded-full opacity-40"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ duration: 3 + Math.random() * 2, repeat: Infinity }}
        />
      ))}
    </>
  )
}
