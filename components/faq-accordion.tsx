"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How quickly can my child complete the accelerator program?",
    answer:
      "Our accelerator programs are designed to produce results quickly, typically within 4-8 weeks depending on the project complexity and your child's availability. We understand the urgency of college application deadlines and structure our programs to ensure completion in time for submission.",
  },
  {
    question: "Is this program ethical for college applications?",
    answer:
      "Absolutely. Our program helps students discover and develop their genuine interests and talents through guided projects. We emphasize authentic engagement, real learning, and meaningful contributions—all qualities that colleges value. Students do the work themselves with expert guidance, similar to how they would receive coaching in sports or music.",
  },
  {
    question: "What types of extracurricular projects do students complete?",
    answer:
      "Projects vary based on student interests and college goals, but examples include research studies, social impact initiatives, entrepreneurial ventures, creative portfolios, and technology innovations. Each project is designed to showcase the student's unique strengths while aligning with their academic and career aspirations.",
  },
  {
    question: "Who are the mentors and what are their qualifications?",
    answer:
      "Our mentors are graduate students and professionals from Stanford University with expertise in fields ranging from STEM and business to humanities and arts. All mentors undergo rigorous vetting and training to ensure they can effectively guide students through meaningful project development.",
  },
  {
    question: "My child is already in 12th grade. Is it too late?",
    answer:
      "It's not too late! Our accelerator is specifically designed for students who need to develop impressive extracurriculars quickly. We can help 12th graders create and complete meaningful projects in time for regular decision and even some early decision application deadlines.",
  },
  {
    question: "How does the program differ from regular extracurricular activities?",
    answer:
      "Unlike traditional extracurriculars that may take years to develop into meaningful achievements, our accelerator provides structured guidance, expert mentorship, and a proven framework to help students create impressive accomplishments in a condensed timeframe. We also focus on proper documentation and strategic integration into college applications.",
  },
  {
    question: "What's your success rate?",
    answer:
      "98% of our students are accepted to at least one top-10 university, and 87% receive merit-based scholarships. While we can't guarantee admission to specific schools (no one ethically can), our program significantly enhances application strength and competitiveness at selective institutions.",
  },
  {
    question: "How is the program structured?",
    answer:
      "The program begins with an assessment of your child's strengths, interests, and college goals. We then match them with appropriate Stanford mentors who guide them through project ideation, development, execution, and documentation. Regular check-ins, milestone achievements, and final presentation/documentation ensure accountability and results.",
  },
]

export default function FAQAccordion() {
  return (
    <section id="faq" className="py-16 bg-cosmic/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-secondary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Everything you need to know about our accelerator program
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-primary/10">
                <AccordionTrigger className="text-left text-secondary hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
