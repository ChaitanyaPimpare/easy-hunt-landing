import { motion } from "framer-motion"
import { Shield, Zap, Lock, Users } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Secure & Trusted",
      description:
        "Government-sourced data processed securely for reliable property research.",
      iconBg: "from-pink-500 to-purple-500",
      barGlow: "from-purple-500/30 to-pink-500/20",
    },
    {
      icon: Zap,
      title: "Keyword-Based Search",
      description:
        "Search owner names, survey numbers, CTS, villages, and litigation terms instantly.",
      iconBg: "from-blue-500 to-cyan-500",
      barGlow: "from-blue-500/30 to-cyan-500/20",
    },
    {
      icon: Lock,
      title: "Complete Record View",
      description:
        "Access full matching property records without missing critical details.",
      iconBg: "from-pink-500 to-purple-500",
      barGlow: "from-purple-500/30 to-pink-500/20",
    },
    {
      icon: Users,
      title: "High Performance",
      description:
        "Reduce document search time from hours to seconds.",
      iconBg: "from-blue-500 to-cyan-500",
      barGlow: "from-blue-500/30 to-cyan-500/20",
    },
  ]

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-[#070b1a] to-[#0b1026] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
              <motion.div
                key={index}
                className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-purple-500/30 via-blue-500/20 to-transparent"
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                {/* OUTER GLOW FRAME */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* INNER CARD */}
                <div className="relative rounded-3xl bg-[#0d132d]/80 backdrop-blur-xl p-8 border border-white/10 group-hover:border-purple-400/40 transition-all duration-500 overflow-hidden">

                  {/* ICON + BAR CONTAINER */}
                  <div className="relative h-20 mb-8 flex items-center">

                    {/* RECTANGLE BAR */}
                    <motion.div
                      variants={{
                        rest: { x: 0, rotate: 0 },
                        hover: { x: 140, rotate: 6 },
                      }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className={`absolute left-0 w-56 h-16 rounded-2xl bg-gradient-to-r ${feature.barGlow} border border-white/10 shadow-lg`}
                    />

                    {/* ICON BOX */}
                    <motion.div
                      variants={{
                        rest: { x: 0 },
                        hover: { x: 180 },
                      }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${feature.iconBg} flex items-center justify-center shadow-xl`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>

                  {/* TEXT */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
