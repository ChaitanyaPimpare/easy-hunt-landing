import { motion } from "framer-motion"
import { Shield, Zap, Lock, Users, Cpu } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "Secure & Trusted",
      description:
        "Government-sourced data processed securely for reliable property research.",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Zap,
      title: "Keyword-Based Search",
      description:
        "Search owner names, survey numbers, CTS, villages, and litigation terms instantly.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lock,
      title: "Complete Record View",
      description:
        "Access full matching property records without missing critical details.",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Users,
      title: "High Performance",
      description:
        "Reduce document search time from hours to seconds.",
      color: "from-blue-500 to-cyan-500",
    },
  ]

  return (
    <section
  id="how-it-works"
  className="relative pt-16 pb-28 md:pt-20 md:pb-36 bg-[#070b1a] overflow-hidden"
>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Decorative chip icon */}
     <motion.div
  className="absolute right-20 top-24 hidden md:block"
  animate={{ rotate: 360, scale: [1, 1.08, 1] }}
  transition={{
    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  }}
>
  <Cpu className="w-20 h-20 text-purple-500/20 drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]" />
</motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 md:px-16">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-purple-600/10 border border-purple-500/20 text-purple-400 text-sm">
            <Shield className="w-4 h-4" />
            Trusted Platform
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-4">
          Secure & trusted
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
          Government-sourced data processed securely for reliable property research
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
      
    </section>
  )
}

/* ================= CARD ================= */

function FeatureCard({ feature, index }: any) {
  const Icon = feature.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative rounded-3xl h-full"
    >
      {/* Outer Border Glow */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 opacity-60" />

      {/* Card */}
      <div className="relative h-full rounded-3xl bg-[#0c122b]/85 backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-start">

        {/* Icon + Rectangle */}
        <div className="relative h-16 mb-8 flex items-center">
          <div
            className={`absolute left-0 h-14 w-44 rounded-2xl bg-gradient-to-r ${feature.color} opacity-15`}
          />

          <div
            className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  )
}
