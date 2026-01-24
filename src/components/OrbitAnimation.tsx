import { motion } from "framer-motion"

export default function OrbitAnimation() {
  return (
    <div className="relative w-full max-w-[520px] aspect-square mx-auto">
      {/* Outer Glow Ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/10 to-blue-500/10 blur-2xl" />

      {/* Orbit Ring */}
      <div className="absolute inset-[8%] rounded-full border border-purple-500/10 bg-purple-500/5" />

      {/* Center Planet */}
      <motion.div
        className="absolute inset-0 m-auto w-[220px] h-[220px] rounded-full bg-[#0B0F1F] shadow-[0_0_60px_rgba(168,85,247,0.35)] flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500/20 to-blue-500/10 blur-xl" />

        {/* Center Icon */}
        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-500/25 to-purple-500/25 border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.25)]">
          <div className="w-6 h-6 border-r-4 border-t-4 border-purple-400 rotate-45 rounded-sm" />
        </div>
      </motion.div>

      {/* 3D Orbit Group */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Orbit cubes - FARTHER like 2nd image */}
        <OrbitCube angle={30} radius={220} depth={40} />
        <OrbitCube angle={120} radius={220} depth={-50} />
        <OrbitCube angle={210} radius={220} depth={25} />
        <OrbitCube angle={300} radius={220} depth={-35} />

        {/* Small dots orbit */}
        <OrbitDot angle={70} radius={160} />
        <OrbitDot angle={250} radius={160} />
      </motion.div>
    </div>
  )
}

/** Cube orbit element */
function OrbitCube({
  angle,
  radius,
  depth,
}: {
  angle: number
  radius: number
  depth: number
}) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2"
      style={{
        transform: `rotate(${angle}deg) translateX(${radius}px) translateZ(${depth}px)`,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="w-16 h-16 rounded-2xl bg-[#0b1022] border border-purple-400/30 shadow-[0_0_25px_rgba(168,85,247,0.35)] flex items-center justify-center"
        animate={{
          rotateZ: [0, 10, 0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
      </motion.div>
    </motion.div>
  )
}

/** Dot orbit element */
function OrbitDot({ angle, radius }: { angle: number; radius: number }) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-3 h-3 bg-pink-500 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.9)]"
      style={{
        transform: `rotate(${angle}deg) translateX(${radius}px)`,
      }}
    />
  )
}
