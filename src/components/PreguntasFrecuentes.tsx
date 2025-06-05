"use client";

import React, { useState } from "react";
import {faqs as faq} from '../data/faqs';


const PreguntasFrecuentes: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [faqs, setFaq] = useState(faq);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <h2
          id="faq-heading"
          className="text-3xl font-bold text-gray-800 text-center mb-10"
        >
          Preguntas frecuentes
        </h2>
        <div className="space-y-6" role="list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 rounded-xl shadow-sm p-6 transition"
              role="listitem"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {faq.question}
              </h3>

              {openIndex === index && (
                <p
                  id={`faq-answer-${index}`}
                  className="text-gray-600 text-sm mb-10"
                >
                  {faq.answer}
                </p>
              )}

              <button
                onClick={() => toggleIndex(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                className="absolute bottom-4 right-4 text-sm text-cyan-600 font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
              >
                {openIndex === index ? "Ver menos" : "Ver más"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PreguntasFrecuentes;
