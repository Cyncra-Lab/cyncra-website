'use client';

import { useState } from 'react';
import { ArrowRight, Minus, Plus } from 'lucide-react';

const faqData = [
  {
    id: 1,
    question: "What services does Cyncra offer?",
    answer: "Cyncra offers a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital strategy, and ongoing maintenance and support. We specialize in creating scalable solutions that drive business growth."
  },
  {
    id: 2,
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
  },
  {
    id: 3,
    question: "Do you work with startups or only established businesses?",
    answer: "We work with businesses of all sizes, from early-stage startups to established enterprises. Our flexible approach allows us to adapt our services to meet your specific needs and budget, regardless of your company's size or stage."
  },
  {
    id: 4,
    question: "What is your development process like?",
    answer: "Our development process follows an agile methodology with regular check-ins and feedback loops. We start with discovery and planning, move through design and development phases, conduct thorough testing, and provide ongoing support after launch."
  },
  {
    id: 5,
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, bug fixes, and feature enhancements. We believe in building long-term partnerships with our clients to ensure their continued success."
  }
];

function FaqItemComponent({ faq, isOpen, onToggle }) {

  return (
    <div className="w-full border border-gray-300 mb-4 rounded-3xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-6 text-left hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span className="text-2xl font-regular text-gray-900 pr-4">
          {faq.question}
        </span>
        <div className="flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-white border flex items-center justify-center hover:bg-gray-200 transition-colors duration-200 cursor-pointer">
            {isOpen ? (
              <Minus size={16} className="text-black" />
            ) : (
              <Plus size={16} className="text-black" />
            )}
          </div>
        </div>
      </button>

      <div
        id={`faq-answer-${faq.id}`}
        className={`transition-all duration-300 ease-in-out text-2xl  ${
          isOpen ? 'max-h-96 opacity-100 ' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 pb-6">
          <p className="text-[#727272] leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Faqs() {
  const [openFaqId, setOpenFaqId] = useState(null);

  const handleToggle = (faqId) => {
    // If the clicked FAQ is already open, close it. Otherwise, open it and close others.
    setOpenFaqId(openFaqId === faqId ? null : faqId);
  };

  return (
    <section className="h-full text-gray-800 flex justify-center pt-11">
      <div className="w-full px-20 mx-auto">
        <div className="flex flex-col text-center">
        <h2 className="text-3xl font-bold">Got questions? <br />We've got answers.</h2>
        <p className="text-2xl text-[#727272] my-12">We've gathered some of the most common questions our clients ask to help you get clarity before we even talk.</p>
        </div>

        <div className="w-full mx-auto mb-18">
          {faqData.map((faq) => (
            <FaqItemComponent
              key={faq.id}
              faq={faq}
              isOpen={openFaqId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>

        {/* Learn More Button */}
        <div className="flex justify-center mt-12 h-[55px]">
          <button className="inline-flex items-center gap-4 px-8 bg-[#119DA4] text-white font-semibold rounded-full transition-colors duration-200 cursor-pointer">
            Learn More
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
