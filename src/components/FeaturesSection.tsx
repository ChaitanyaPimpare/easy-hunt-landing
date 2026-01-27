import { motion } from "framer-motion"

export default function FeaturesSection() {
  const features = [
    {
      icon: "/icons/secure.png",
      title: "Secure & Reliable",
      description:
        "We value transparency for our users, ensuring enterprise-grade data security.",
    },
    {
      icon: "/icons/search.png",
      title: "Keyword Search",
      description:
        "Deep keyword-based search across large Excel and PDF datasets.",
    },
    {
      icon: "/icons/records.png",
      title: "Complete Records",
      description:
        "Access full matching property records without missing critical details.",
    },
    {
      icon: "/icons/pro.png",
      title: "Professional Grade",
      description:
        "Built for lawyers, consultants, and enterprise due-diligence teams.",
    },
  ]

  return (
    <section className="relative py-28 bg-gradient-to-br from-[#140a2a] via-[#1a0f35] to-[#2a0f4a] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </section>
  )
}

/* ================= CARD ================= */

function FeatureCard({ feature, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="group relative"
    >
      <div className="relative rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 p-10 h-full text-center transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(139,92,246,0.35)]">

        {/* PNG ICON */}
        <div className="flex justify-center mb-6">
          <img
            src={feature.icon}
            alt={feature.title}
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-semibold text-white mb-3">
          {feature.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6">
          {feature.description}
        </p>

        {/* LINK */}
        <span className="text-sm text-purple-300 group-hover:text-white transition-colors duration-300">
          Learn more →
        </span>
      </div>
    </motion.div>
  )
}
