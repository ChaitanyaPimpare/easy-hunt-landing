import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Is Easy Hunt a government portal?",
      answer:
        "No. Easy Hunt is a research and discovery platform that complements government portals.",
    },
    {
      question: "Is the data legally valid?",
      answer:
        "Easy Hunt supports research. Final verification must be done on official portals.",
    },
    {
      question: "Who should use Easy Hunt?",
      answer:
        "Lawyers, title consultants, developers, banks, and advisory firms.",
    },
    {
      question: "Does Easy Hunt replace manual search?",
      answer:
        "It significantly reduces manual effort while improving speed and accuracy.",
    },
    {
      question: "How fast is the search process?",
      answer: "Easy Hunt reduces document search time from hours to seconds.",
    },
    {
      question: "Can I export search results?",
      answer:
        "Yes, you can download results in PDF or Excel formats for reports.",
    },
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-8 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h2 md:text-5xl font-medium mb-4 text-gradient-1">
            Frequently asked questions
          </h2>
          <p className="text-body text-gray-300">
            Find answers to common questions about Easy Hunt
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={`item-${index}`}
                value={`item-${index}`}
                className="text-left text-body text-gray-300"
              >
                <AccordionTrigger className="text-left text-body text-gray-300">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-body text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
