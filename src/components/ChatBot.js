import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_DATA = [
  {
    question: "Qu'est-ce que Sage 100 ?",
    answer:
      "Sage 100 est une suite de logiciels ERP dédiée aux PME. Elle couvre la gestion commerciale, la comptabilité, la paie et les ressources humaines.",
  },
  {
    question: "Quels modules Sage proposez-vous ?",
    answer:
      "Nous intégrons Sage 100 Gestion Commerciale, Sage 100 Comptabilité, Sage 100 Paie & RH, ainsi que des solutions de Business Intelligence.",
  },
  {
    question: "C'est quoi Horoquartz ?",
    answer:
      "Horoquartz est une solution de gestion des temps, planification et contrôle d'accès. Optima est partenaire intégrateur Horoquartz en Tunisie.",
  },
  {
    question: "Proposez-vous des formations ?",
    answer:
      "Oui, nous proposons des formations certifiées sur Sage 100 et Horoquartz, adaptées à vos besoins : initiation, perfectionnement et accompagnement.",
  },
  {
    question: "Comment demander un devis ?",
    answer:
      "Rendez-vous sur notre page Contact ou appelez-nous directement. Nous vous répondrons sous 24h avec une offre personnalisée.",
  },
  {
    question: "Où êtes-vous situés ?",
    answer:
      "Optima est basée en Tunisie. Nous intervenons sur tout le territoire tunisien et accompagnons également des clients à l'international.",
  },
];

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Bonjour ! Je suis l'assistant Optima. Comment puis-je vous aider ?",
    },
  ]);
  const [showQuestions, setShowQuestions] = useState(true);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleQuestion(faq) {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: faq.question },
    ]);
    setShowQuestions(false);

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: faq.answer }]);
      setTimeout(() => setShowQuestions(true), 400);
    }, 600);
  }

  function handleContactRedirect() {
    setMessages((prev) => [
      ...prev,
      { from: "user", text: "Je veux contacter un conseiller" },
    ]);
    setShowQuestions(false);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: 'Bien sûr ! Vous pouvez nous joindre via la page Contact. Je vous y redirige...',
        },
      ]);
      setTimeout(() => {
        window.location.href = "/contact";
      }, 1500);
    }, 600);
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[9997] w-14 h-14 rounded-full bg-[#007a55] text-white shadow-lg hover:bg-[#005f43] transition-colors flex items-center justify-center"
        aria-label="Ouvrir le chatbot"
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-[9997] w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col"
            style={{ height: "480px" }}
          >
            {/* Header */}
            <div className="bg-[#007a55] text-white px-5 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-sm">Assistant Optima</p>
                <p className="text-xs text-white/70">En ligne</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-[#007a55] text-white rounded-br-md"
                        : "bg-white text-gray-800 border border-gray-200 rounded-bl-md shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {showQuestions && (
              <div className="px-4 py-3 border-t border-gray-100 bg-white space-y-2 max-h-[200px] overflow-y-auto">
                <p className="text-xs text-gray-400 font-medium mb-1">
                  Questions fréquentes :
                </p>
                {FAQ_DATA.map((faq, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuestion(faq)}
                    className="block w-full text-left px-3 py-2 text-xs text-[#007a55] bg-[#007a55]/5 hover:bg-[#007a55]/10 rounded-lg transition-colors"
                  >
                    {faq.question}
                  </button>
                ))}
                <button
                  onClick={handleContactRedirect}
                  className="block w-full text-left px-3 py-2 text-xs text-white bg-[#007a55] hover:bg-[#005f43] rounded-lg transition-colors font-medium"
                >
                  Contacter un conseiller
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
