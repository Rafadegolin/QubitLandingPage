"use client";

import Tag from "@/components/Tag";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "O que são automações e como elas podem ajudar minha empresa?",
    answer:
      "As automações são processos digitais que reduzem tarefas manuais repetitivas, permitindo que sua equipe foque no que realmente importa. Com nossas soluções, você pode automatizar desde o atendimento ao cliente até a gestão de leads, economizando tempo e dinheiro.",
  },
  {
    question: "Como a inteligência artificial pode otimizar meus processos?",
    answer:
      "A IA pode analisar grandes volumes de dados, identificar padrões e tomar decisões de forma autônoma. Nossos agentes de IA podem ajudar em atendimento, análise de tendências de mercado e até na personalização da experiência do cliente.c",
  },
  {
    question: "O que são agentes de IA e como posso utilizá-los?",
    answer:
      "A IA pode analisar grandes volumes de dados, identificar padrões e tomar decisões de forma autônoma. Nossos agentes de IA podem ajudar em atendimento, análise de tendências de mercado e até na personalização da experiência do cliente.",
  },
  {
    question: "Preciso de conhecimentos técnicos para usar suas soluções?",
    answer:
      "Não! Criamos soluções intuitivas e fáceis de usar. Nossa equipe cuida da implementação para que você possa aproveitar os benefícios sem precisar de conhecimentos avançados.",
  },
  {
    question:
      "Sua empresa está perdendo tempo com tarefas repetitivas enquanto seus concorrentes já automatizaram tudo?",
    answer:
      "Não fique para trás! Nossas soluções de automação e IA podem transformar seu negócio, aumentando produtividade, reduzindo custos e liberando sua equipe para focar no que realmente importa. Fale com a gente agora e descubra como acelerar seu crescimento! 🚀",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section id="faqs" className="py-24 flex justify-center mx-8">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Faqs</Tag>
        </div>
        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
          Perguntas? Nós temos{" "}
          <span className="text-violet-700 font-semibold">respostas</span>
        </h2>
        <div className="mt-12 flex flex-col gap-6 max-ww-xl mx-auto">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
            >
              <div
                className="flex justify-between items-center"
                onClick={() => setSelectedIndex(faqIndex)}
              >
                <h3 className="font-medium">{faq.question}</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={twMerge(
                    "feather feather-plus text-violet-700 flex-shrink-0 transition duration-300",
                    selectedIndex === faqIndex && "rotate-45"
                  )}
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
              </div>
              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{ height: 0, marginTop: 0 }}
                    animate={{ height: "auto", marginTop: 24 }}
                    exit={{ height: 0, marginTop: 0 }}
                    className={twMerge("overflow-x-hidden")}
                  >
                    <p className="text-white/50">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
