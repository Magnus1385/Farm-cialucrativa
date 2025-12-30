import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* LADO ESQUERDO - Conteúdo */}
                    <div className="text-center lg:text-left">

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-blue-700 text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight"
                        >
                            Farmácia Lucrativa
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-slate-700 text-xl md:text-2xl font-medium mb-8 leading-relaxed"
                        >
                            Como transformar Atendimento em lucro, evitar erros no balcão e vender com segurança
                        </motion.p>

                        {/* Value Props - 3 colunas em linha */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">

                            <div className="bg-white/80 backdrop-blur p-4 rounded-xl shadow-md">
                                <div className="text-blue-600 mb-2 flex justify-center">
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-blue-700 text-base font-bold">Atendimento Seguro</h3>
                            </div>

                            <div className="bg-white/80 backdrop-blur p-4 rounded-xl shadow-md">
                                <div className="text-blue-600 mb-2 flex justify-center">
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                                    </svg>
                                </div>
                                <h3 className="text-blue-700 text-base font-bold">Gestão Simples</h3>
                            </div>

                            <div className="bg-white/80 backdrop-blur p-4 rounded-xl shadow-md">
                                <div className="text-blue-600 mb-2 flex justify-center">
                                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <h3 className="text-blue-700 text-base font-bold">Lucro Real</h3>
                            </div>

                        </div>

                        {/* Results Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="bg-gradient-to-r from-blue-100 to-blue-50 border-4 border-blue-500 p-6 rounded-2xl shadow-2xl"
                        >
                            <h2 className="text-blue-700 text-3xl font-black mb-2">Resultados Rápidos</h2>
                            <p className="text-slate-700 text-lg font-semibold">
                                Você já vai conseguir ver a diferença no seu faturamento na primeira semana
                            </p>
                        </motion.div>

                    </div>

                    {/* LADO DIREITO - Imagem */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="relative"
                    >
                        <div className="relative">
                            {/* Decoração de fundo */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl opacity-20 blur-2xl"></div>

                            {/* Imagem principal */}
                            <img
                                src="https://i.imgur.com/RpQfplm.jpg"
                                alt="Farmácia profissional lucrativa"
                                className="relative rounded-2xl shadow-2xl w-full object-cover hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Hero;
