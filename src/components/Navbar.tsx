import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top purple glow strip */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-700/20 via-indigo-600/10 to-purple-700/20 blur-2xl" />

      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-[#0b0f25]/80 backdrop-blur-xl"
            : "bg-[#0b0f25]/60 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-10 lg:px-16 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <div className="text-white text-2xl font-semibold tracking-wide">
            Easy Hunt
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12 text-[15px] text-gray-300">
            <NavLink>Home</NavLink>
            <NavLink>Features</NavLink>
            <NavLink>How it Works</NavLink>
            <NavLink>Pricing</NavLink>
            <NavLink>Resources</NavLink>
            <NavLink>Contact</NavLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-7 py-3 rounded-xl text-white text-sm font-medium bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg shadow-purple-700/30 hover:shadow-purple-700/50 transition-all">
              Book a Demo
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden mx-6 mt-3 rounded-2xl bg-[#0b0f25]/95 backdrop-blur-xl border border-white/10 p-6 space-y-5 text-gray-300"
          >
            <MobileLink>Home</MobileLink>
            <MobileLink>Features</MobileLink>
            <MobileLink>How it Works</MobileLink>
            <MobileLink>Pricing</MobileLink>
            <MobileLink>Resources</MobileLink>
            <MobileLink>Contact</MobileLink>

            <button className="w-full mt-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-indigo-500 to-purple-600">
              Book a Demo
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* Desktop Link */
function NavLink({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative hover:text-white transition-colors duration-300 group">
      {children}
      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-500 transition-all group-hover:w-full" />
    </button>
  )
}

/* Mobile Link */
function MobileLink({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-base hover:text-white transition-colors cursor-pointer">
      {children}
    </div>
  )
}
