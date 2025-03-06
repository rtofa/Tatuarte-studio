import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Sparkles } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Biossegurança',
      description: 'Materiais esterilizados e descartáveis, seguindo todas as normas de segurança.'
    },
    {
      icon: Award,
      title: 'Experiência',
      description: 'Equipe com mais de 10 anos de experiência em diferentes estilos de tatuagem.'
    },
    {
      icon: Sparkles,
      title: 'Ambiente',
      description: 'Espaço moderno e acolhedor, projetado para seu conforto e segurança.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            SOBRE O ESTÚDIO
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Com mais de uma década de história, o Tatuarte Studio se destaca pela excelência em arte corporal e compromisso com a satisfação dos clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/50 transition-colors duration-300">
                  <div className="text-purple-500 mb-4">
                    <Icon size={40} className="mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;