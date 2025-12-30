import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, Box, Users, DollarSign, Clock } from 'lucide-react';
import Card from './ui/Card';

const PainPoints = () => {
    const pains = [
        {
            title: "Estoque Parado",
            desc: "Seu capital está apodrecendo nas prateleiras em produtos que não giram.",
            icon: <Box className="w-6 h-6" />
        },
        {
            title: "Equipe Passiva",
            desc: "Balconistas que são apenas 'tiradores de pedido' e deixam dinheiro na mesa.",
            icon: <Users className="w-6 h-6" />
        },
        {
            title: "Guerra de Preços",
            desc: "Você sente que precisa dar desconto em tudo para não perder o cliente para a rede.",
            icon: <DollarSign className="w-6 h-6" />
        },
        {
            title: "Escravo do Balcão",
            desc: "A farmácia não anda sem você. Você é o primeiro a chegar e o último a sair.",
            icon: <Clock className="w-6 h-6" />
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-danger font-black tracking-[0.2em] uppercase text-xs mb-4 block"
                    >
                        O CENÁRIO ATUAL
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">
                        Por que você sente que trabalha muito e <span className="text-danger">quase não vê a cor do dinheiro?</span>
                    </h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Se você se identifica com pelo menos 2 desses pontos, sua farmácia está em risco silencioso.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {pains.map((pain, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Card className="h-full border-none bg-gray-50 p-8 hover:bg-white hover:shadow-2xl hover:shadow-danger/10 transition-all duration-300 group">
                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-white rounded-2xl text-danger shadow-sm group-hover:scale-110 group-hover:bg-danger group-hover:text-white transition-all duration-300">
                                        {pain.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-gray-900 mb-3 tracking-tight">{pain.title}</h3>
                                        <p className="text-gray-600 leading-relaxed font-medium">{pain.desc}</p>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PainPoints;

