import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Card from './ui/Card';

// Import Swiper styles
import 'swiper/css';

const SocialProofWall = () => {
    const testimonials = [
        { type: 'WhatsApp', text: "Bati a meta da semana hoje!", color: "bg-green-50", author: "João P." },
        { type: 'Instagram', text: "Meu balconista vendeu 3 kits de vitaminas em 1h", color: "bg-purple-50", author: "Maria S." },
        { type: 'WhatsApp', text: "O ticket médio subiu 15 reais por cliente", color: "bg-blue-50", author: "Ricardo F." },
        { type: 'Dashboard', text: "Gráfico de vendas subindo +40%", color: "bg-emerald-50", author: "Ana L." },
        { type: 'WhatsApp', text: "Finalmente parei de perder medicamento vencido", color: "bg-orange-50", author: "Sérgio M." },
        { type: 'WhatsApp', text: "Gestão agora é 100% no controle", color: "bg-indigo-50", author: "Beatriz C." },
    ];

    return (
        <section id="depoimentos" className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-accent uppercase bg-accent/10 rounded-full"
                >
                    RESULTADOS REAIS
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                    Quem aplica, <span className="text-primary">lucra.</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Veja por que centenas de donos de farmácia abandonaram a gestão amadora e estão dominando o mercado.
                </p>
            </div>

            <div className="px-4 lg:px-0">
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 4 },
                        1536: { slidesPerView: 5 },
                    }}
                    className="swiper-continuous"
                >
                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="h-full"
                            >
                                <Card className={`h-48 flex flex-col justify-between p-8 ${item.color} border-none shadow-sm hover:shadow-xl transition-all duration-300`}>
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{item.type}</span>
                                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                        </div>
                                        <p className="font-bold text-gray-900 leading-snug italic text-lg">
                                            "{item.text}"
                                        </p>
                                    </div>
                                    <div className="mt-4 pt-4 border-t border-gray-900/5">
                                        <p className="text-sm font-black text-gray-900">{item.author}</p>
                                        <p className="text-[10px] font-bold text-gray-500 uppercase">Dono de Farmácia</p>
                                    </div>
                                </Card>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style>{`
                .swiper-continuous .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}</style>
        </section>
    );
};

export default SocialProofWall;

