import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { artists } from '../data';

const Team = () => {
  return (
    <section id="team" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            CONHEÇA A EQUIPE DE ESPECIALISTAS
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Nossa equipe é formada por artistas talentosos e experientes, cada um com seu estilo único e especialidades distintas. Juntos, transformamos suas ideias em arte permanente.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <motion.div
              key={artist.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="overflow-hidden rounded-lg">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <a
                    href={`https://instagram.com/${artist.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white flex items-center gap-2 hover:text-pink-500 transition-colors"
                  >
                    <Instagram size={24} />
                    <span className="font-medium">{artist.instagram}</span>
                  </a>
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold">{artist.name}</h3>
                <p className="text-gray-400 mt-2">
                  {artist.specialties.join(" • ")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="https://www.instagram.com/estudio_tatuarte/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 text-xl hover:text-pink-500 transition-colors"
          >
            <Instagram size={32} />
            <span>VISITE NOSSO INSTAGRAM</span>
          </a>
          <p className="mt-2 text-gray-400">@estudio_tatuarte</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;