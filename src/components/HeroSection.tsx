import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { gsap } from "gsap"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })

      gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
      })

      gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.4,
        ease: "power3.out",
      })

      gsap.from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.6,
        ease: "power3.out",
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0d1a] via-[#0b0f25] to-[#0a0d1a]">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 text-center px-6 max-w-4xl"
      >
        {/* 🔥 Badge (Spacing Fixed Here) */}
        <div className="hero-badge inline-flex items-center gap-2 px-6 py-3 glass-card mt-20 md:mt-28 mb-10 mx-auto">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">
            Powered by AI
          </span>
        </div>

        {/* Title */}
        <h1 className="hero-title text-h1 md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Experience{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Speed
          </span>{" "}
          and{" "}
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Confidence
          </span>{" "}
          with Easy Hunt
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle text-body text-gray-300 max-w-2xl mx-auto mb-10">
          Powerful keyword-based property document intelligence for faster and safer due diligence.
          Built for lawyers, title consultants, developers, banks, and NBFCs.
        </p>

        {/* Buttons */}
        <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="relative px-10 py-6 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 transition">
            Get Started →
          </Button>

          <Button size="lg" variant="outline" className="px-10 py-6 border-white/20 text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
