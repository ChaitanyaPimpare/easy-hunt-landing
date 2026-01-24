import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Globe2, Zap, Shield } from "lucide-react"

export default function TransactionSection() {
  return (
    <section className="relative py-28 overflow-hidden bg-gradient-to-br from-[#060714] via-[#0b0e2a] to-[#120c2f]">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.12) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

 {/* LEFT — Holographic Scanner Visual */}
<div className="relative h-[520px] flex items-center justify-center">
  <div className="relative w-[260px] h-[420px] [perspective:1000px]">

    {/* Vertical Glow Beam */}
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-500 to-transparent blur-sm"
      animate={{ opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 3, repeat: Infinity }}
    />

    {/* Main Vertical Ring */}
    <motion.div
      className="absolute inset-0 rounded-full border border-blue-400/40"
      style={{ transform: "rotateY(65deg)", transformStyle: "preserve-3d" }}
      animate={{ rotateY: [65, 425] }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    />

    {/* Inner Rotating Ring */}
    <motion.div
      className="absolute inset-6 rounded-full border border-purple-400/30"
      style={{ transform: "rotateY(65deg)", transformStyle: "preserve-3d" }}
      animate={{ rotateY: [65, -295] }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />

    {/* Center Core Glow */}
    <motion.div
      className="absolute inset-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-2xl"
      animate={{ scale: [1, 1.3, 1] }}
      transition={{ duration: 4, repeat: Infinity }}
    />

    {/* Floating UI Panels */}
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-24 h-14 rounded-lg bg-white/5 backdrop-blur-md border border-white/10"
        initial={{ opacity: 0 }}
        animate={{
          y: [-20, 20, -20],
          x: i === 0 ? -80 : i === 1 ? 70 : -50,
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 6 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          top: `${30 + i * 25}%`,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />
    ))}

  </div>
</div>


        {/* ================= RIGHT SIDE — CONTENT ================= */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 text-sm rounded-full border border-blue-500/30 text-blue-400">
            ⚡ Platform
          </span>

          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
            Search and verify effortlessly
          </h2>

          <p className="text-gray-300 mb-10 max-w-xl">
            Conduct fast keyword-based research, track search history, and export
            structured records for title search reports and legal documentation.
          </p>

          {/* Feature Points */}
          <div className="space-y-6 mb-10">
            <Feature icon={Zap} text="Deep keyword search capability" color="from-yellow-400 to-orange-500" />
            <Feature icon={Shield} text="Secure data processing" color="from-green-400 to-emerald-500" />
            <Feature icon={Globe2} text="Export to PDF or Excel" color="from-blue-400 to-cyan-500" />
          </div>

          <Button size="lg" className="bg-gradient-to-r from-indigo-500 to-purple-600">
            Request Demo →
          </Button>
        </div>
      </div>
    </section>
  )
}

/* Feature Row */
function Feature({
  icon: Icon,
  text,
  color,
}: {
  icon: any
  text: string
  color: string
}) {
  return (
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center`}>
        <Icon className="w-6 h-6 text-white" />
      </div>
      <span className="text-gray-200">{text}</span>
    </div>
  )
}
