import { motion, useInView } from "framer-motion"
import { Card } from "@/components/ui/card"
import { useRef } from "react"
import { Brain, BarChart3, Globe, Zap, Shield, Network } from "lucide-react"

export default function ShowcaseSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const showcaseItems = [
    {
      icon: Brain,
      title: "Intelligent Search",
      description: "Deep keyword search across large Excel and PDF datasets.",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      icon: BarChart3,
      title: "Structured Results",
      description: "Clean, readable, and complete property records.",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: Globe,
      title: "Export & Documentation",
      description: "Download results in PDF or Excel formats.",
      gradient: "from-fuchsia-500 to-purple-600",
    },
    {
      icon: Zap,
      title: "Faster Turnaround",
      description: "Complete due diligence in seconds instead of hours.",
      gradient: "from-emerald-400 to-green-600",
    },
    {
      icon: Shield,
      title: "Secure Processing",
      description: "Government-sourced data handled with enterprise security.",
      gradient: "from-orange-400 to-amber-600",
    },
    {
      icon: Network,
      title: "Complete Coverage",
      description: "Search across multiple property document types.",
      gradient: "from-blue-400 to-indigo-600",
    },
  ]

  return (
    <section
      ref={sectionRef}
     id="how it works" className="relative py-32 bg-gradient-to-b from-[#070a18] to-[#0b0f25] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-sm tracking-widest text-indigo-400 mb-4">
            Platform Features
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
            Everything you need in one platform
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Complete property document intelligence for faster and safer due diligence.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => {
            const Icon = item.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="group relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden p-6 transition-all duration-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.25)]">

                  {/* Gradient top bar */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient}`} />

                  {/* Floating dots */}
                  <div className="absolute top-6 right-6 flex gap-2 opacity-40">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-150" />
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-300" />
                  </div>

                  {/* Shine sweep */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 1 }}
                  />

                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-3">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-relaxed flex-grow">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Brain Graphic */}
        <div className="flex justify-center mt-24">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="relative"
          >
            <div className="w-40 h-40 rounded-full bg-purple-600/20 blur-3xl absolute inset-0" />
            <div className="relative w-32 h-32 rounded-full border border-purple-500/40 flex items-center justify-center">
              <Brain className="w-14 h-14 text-purple-400" />
            </div>

            {/* Connection lines */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-12 bg-purple-500/40 top-full left-1/2 origin-top"
                style={{ transform: `rotate(${deg}deg)` }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
