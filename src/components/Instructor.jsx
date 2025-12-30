import React from 'react';
import { motion } from 'framer-motion';

const Instructor = () => {
    return (
        <section className="bg-gradient-to-b from-white to-blue-50 py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-blue-800 text-5xl font-black text-center mb-16"
                >
                    Quem Vai Te Guiar no Próximo Nível
                </motion.h2>

                {/* Content Container */}
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                        {/* Foto do Instrutor - ESQUERDA */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <img
                                src="https://i.imgur.com/slDQORR.jpg"
                                alt="Alber Campos - Instrutor do curso Farmácia Lucrativa"
                                className="rounded-2xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </motion.div>

                        {/* Bio do Instrutor - DIREITA */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-blue-700 text-3xl font-bold mb-4">
                                Alber Campos
                            </h3>

                            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                                Farmacêutico com mais de 10 anos de experiência em gestão de farmácias lucrativas e especialista em atendimento de alta conversão.
                            </p>

                            <ul className="space-y-4 mb-6">
                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-slate-700 text-lg">Especialista em atendimento farmacêutico de alta conversão</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-slate-700 text-lg">Ajudou centenas de farmácias a triplicarem seu faturamento</span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-slate-700 text-lg">Método validado em farmácias de todo o Brasil</span>
                                </li>
                            </ul>

                            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                                <p className="text-blue-800 text-lg font-semibold italic">
                                    "Minha missão é transformar farmacêuticos em verdadeiros especialistas em lucro e atendimento."
                                </p>
                            </div>
                        </motion.div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Instructor;
