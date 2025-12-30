import React from 'react';
import { motion } from 'framer-motion';

const PricingFooter = () => {
    return (
        <section id="oferta" className="py-24 bg-gray-950 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16 px-4">
                    <h2 className="text-white text-5xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
                        Assuma o <span className="text-primary italic">Controle Total</span> do seu lucro hoje.
                    </h2>
                    <p className="text-gray-400 text-xl leading-relaxed">
                        Você está a um clique de transformar sua farmácia em um negócio lucrativo, organizado e que não depende da sua presença 24h por dia.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto px-4"
                >
                    <div className="bg-white border-4 border-blue-500 rounded-2xl shadow-2xl p-8 md:p-12 text-center relative">

                        {/* Badge "Últimas Vagas" no topo direito */}
                        <div className="flex justify-end mb-4">
                            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                                ⚡ ÚLTIMAS VAGAS
                            </span>
                        </div>

                        {/* Preço Riscado */}
                        <div className="mb-2">
                            <span className="text-gray-400 line-through text-3xl">R$ 339</span>
                            <span className="ml-4 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                                89% DE DESCONTO
                            </span>
                        </div>

                        {/* Preço Principal */}
                        <div className="mb-4">
                            <p className="text-blue-600 text-6xl md:text-7xl font-black">R$ 19,97</p>
                        </div>

                        {/* Texto "Por apenas" */}
                        <p className="text-slate-600 text-2xl font-semibold mb-6">Por apenas</p>

                        {/* Parcelamento */}
                        <p className="text-slate-500 text-lg mb-8">À vista ou em até 4x</p>

                        {/* Botão CTA */}
                        <a
                            href="https://pay.hotmart.com/W103593132Q?checkoutMode=10"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block w-full bg-blue-700 hover:bg-blue-800 text-white font-black py-6 px-12 rounded-full text-2xl shadow-2xl hover:scale-105 transition-all duration-300 mb-6 no-underline"
                        >
                            QUERO GARANTIR MINHA VAGA →
                        </a>

                        {/* Badges de Garantia */}
                        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-sm text-slate-600">
                            <div className="flex items-center justify-center gap-2">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>PAGAMENTO SEGURO</span>
                            </div>

                            <div className="flex items-center justify-center gap-2">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>7 DIAS DE GARANTIA</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <p className="text-center text-gray-500 mt-16 text-sm">
                    © 2025 Farmácia Lucrativa. Todos os direitos reservados.
                </p>
            </div>
        </section>
    );
};

export default PricingFooter;
