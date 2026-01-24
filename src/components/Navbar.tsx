import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // If not home, go home first
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-h3 font-medium text-foreground">
            Easy Hunt
          </Link>

          {/* Desktop Nav */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList className="gap-8">
              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-body text-gray-300 hover:text-primary transition-colors"
                >
                  Home
                </button>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection("features")}
                  className="text-body text-gray-300 hover:text-primary transition-colors"
                >
                  Features
                </button>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-body text-gray-300 hover:text-primary transition-colors"
                >
                  FAQs
                </button>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link
                  to="/articles"
                  className="text-body text-gray-300 hover:text-primary transition-colors"
                >
                  Articles
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA */}
          <Button size="lg" variant="default" className="hidden md:inline-flex">
            Book a Demo
          </Button>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-4 space-y-4 glass-card p-4 rounded-2xl"
            >
              <button
                onClick={() => {
                  scrollToSection("home")
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-body text-gray-300 hover:text-primary transition-colors py-2"
              >
                Home
              </button>

              <button
                onClick={() => {
                  scrollToSection("features")
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-body text-gray-300 hover:text-primary transition-colors py-2"
              >
                Features
              </button>

              <button
                onClick={() => {
                  scrollToSection("faq")
                  setIsMobileMenuOpen(false)
                }}
                className="block w-full text-left text-body text-gray-300 hover:text-primary transition-colors py-2"
              >
                FAQs
              </button>

              <Link
                to="/articles"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-body text-gray-300 hover:text-primary transition-colors py-2"
              >
                Articles
              </Link>

              <Button size="lg" variant="default" className="w-full">
                Book a Demo
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
