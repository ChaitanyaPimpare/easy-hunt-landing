import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import OrbitAnimation from "./OrbitAnimation";

export default function ProductVisualizationSection() {
  return (
    <section
      id="product"
      className="py-24 md:py-32 bg-gradient-to-b from-background relative overflow-hidden"
    >
      {/* background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d1a]" />

      <div className="max-w-7xl mx-auto px-8 md:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* pill */}
            <div className="inline-flex items-center gap-2 px-6 py-3 glass-card mb-6 rounded-full">
              <span className="text-sm text-primary font-medium">Features</span>
            </div>

            <h2 className="text-h2 md:text-5xl font-medium mb-6 text-foreground">
              Stay on top of your <br /> property research
            </h2>

            <p className="text-body text-gray-300 mb-10 max-w-xl">
              Easy Hunt centralizes scattered land records into one intelligent
              platform, helping professionals manage due diligence efficiently
              and confidently.
            </p>

            {/* bullets */}
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                  📈
                </div>
                <p className="text-gray-300">Intelligent keyword search</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                  📊
                </div>
                <p className="text-gray-300">Structured property records</p>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                  ⚡
                </div>
                <p className="text-gray-300">Fast verification process</p>
              </div>
            </div>

            <Button size="lg" variant="default" className="px-10">
              Learn More
            </Button>
          </motion.div>

          {/* RIGHT 3D PLANET ANIMATION */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <OrbitAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
