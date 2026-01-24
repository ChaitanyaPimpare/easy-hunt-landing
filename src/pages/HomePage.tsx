import { useEffect } from "react";

import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import ProductVisualizationSection from "../components/ProductVisualizationSection";
import TransactionSection from "../components/TransactionSection";
import ShowcaseSection from "../components/ShowcaseSection";
import ArticlesSection from "../components/ArticlesSection";
import FAQSection from "../components/FAQSection";
import CTASection from "../components/CTASection";

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <FeaturesSection />
      <ProductVisualizationSection />
      <TransactionSection />
      <ShowcaseSection />
      <ArticlesSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
