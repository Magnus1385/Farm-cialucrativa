import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full text-left focus:outline-none"
            >
                <span className="text-lg font-semibold text-gray-900">{question}</span>
                <div className={`p-1 rounded-full ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-600 mt-3 pr-8 leading-relaxed">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "O método serve para farmácia pequena?",
            answer: "Sim! O método foi desenhado exatamente para pequenas e médias farmácias que precisam competir com grandes redes. As estratégias não exigem grandes investimentos, apenas mudança de processos."
        },
        {
            question: "Eu não tenho tempo para estudar, como faço?",
            answer: "O curso é direto ao ponto. As aulas são curtas e focadas em ação. Além disso, você recebe planilhas e scripts prontos para aplicar imediatamente, economizando seu tempo."
        },
        {
            question: "E se eu não gostar?",
            answer: "Você tem 7 dias de garantia incondicional. Se achar que o conteúdo não é para você, basta enviar um e-mail e devolvemos 100% do seu investimento, sem perguntas."
        },
        {
            question: "O acesso é por quanto tempo?",
            answer: "O acesso ao curso e às atualizações é vitalício. Você pode assistir quando e quantas vezes quiser."
        },
        {
            question: "Preciso de software caro para aplicar?",
            answer: "Não. Disponibilizamos planilhas inteligentes que substituem softwares caros de gestão. Você só precisa de um computador com Excel ou Google Sheets."
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-xl text-gray-600">
                        Tire suas dúvidas e decida pelo futuro do seu negócio.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
