import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import { tattooWorks } from '../data';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleItems, setVisibleItems] = useState<number>(6);
  const categories = ['all', ...new Set(tattooWorks.map(work => work.category))];

  const filteredWorks = selectedCategory === 'all'
    ? tattooWorks
    : tattooWorks.filter(work => work.category === selectedCategory);

  useEffect(() => {
    setVisibleItems(6);
  }, [selectedCategory]);

  const handleShowMore = () => {
    setVisibleItems(prev => prev + 6); // Carrega mais 5 itens por vez
  };

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            GALERIA DE ARTE
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore nossa coleção de trabalhos e encontre inspiração para sua próxima tatuagem
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.slice(0, visibleItems).map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-w-1 aspect-h-1">
                {work.image.endsWith('.mp4') ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    >
                      <source src={work.image.replace('../public', '')} type="video/mp4" />
                      Seu navegador não suporta vídeos
                    </video>
                ) : (
                    <img
                        src={work.image.replace('../public', '')}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{work.title}</h3>
                  <p className="text-gray-300">por {work.artist}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-purple-600/50 rounded-full text-sm text-white">
                    {work.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Botão Ver Mais */}
      {filteredWorks.length > visibleItems && (
          <div className="flex justify-center mt-12">
            <button
                onClick={handleShowMore}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600
                       text-white rounded-full font-medium hover:opacity-90
                       transition-all duration-300"
            >
              VER MAIS TRABALHOS
            </button>
          </div>
      )}
    </section>
  );
};

export default Gallery;