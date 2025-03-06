import { Artist, Testimonial, TattooWork } from './types';

export const artists: Artist[] = [
  {
    id: 1,
    name: "Junior Cavini",
    instagram: "@juniorcavinitatuarte\n",
    image: "../public/tatuadores/Junior.jpg",
    specialties: ["Whipshading", "Anime", "Black Work"]
  },
  {
    id: 2,
    name: "Carol Cavini",
    instagram: "@carolcavinitatuarte\n",
    image: "../public/tatuadores/Carol.jpg",
    specialties: ["Pontilhismo", "Anime", "Fine Line"]
  },
  {
    id: 3,
    name: "Camila Martins",
    instagram: "@camillamartinstattoo",
    image: "../public/tatuadores/Camila.jpg",
    specialties: ["Realismo", "Realismo Colorido", "Fine Line"]
  },
  {
    id: 4,
    name: "Gambareli",
    instagram: "@gambarellitattoo\n",
    image: "../public/tatuadores/Gambareli.jpg",
    specialties: ["Realismo"]
  },
  {
    id: 5,
    name: "Tito",
    instagram: "@titotatuarte",
    image: "../public/tatuadores/Tito.jpg",
    specialties: ["BlackWork", "Horror Tattoo"]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Pedro Alves",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    text: "Trabalho incrível! O ambiente é super profissional e acolhedor.",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Lima",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    text: "Minha primeira tatuagem e não poderia ter sido melhor!",
    rating: 5
  }
];

export const tattooWorks: TattooWork[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Realismo",
    title: "Retrato Leão",
    artist: "Gambareli"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1611501275019-9b5cda9563c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "BlackWork",
    title: "Linha Fina",
    artist: "Junior Cavini"
  },
  {
    id: 3,
    image: "../public/tatuagens/GogetaComics.jpg",
    category: "Comics",
    title: "Gogeta Dragon Ball",
    artist: "Junior Cavini"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Fine Line",
    title: "Dragon Ball",
    artist: "Carol Cavini"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Horror Tattoo",
    title: "Dragon Ball",
    artist: "Tito"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Realismo Colorido",
    title: "Dragon Ball",
    artist: "Camila Martins"
  },
  {
    id: 7,
    image: "../public/tatuagens/RosaWhipshading.jpg",
    category: "Whipshading",
    title: "Rosa",
    artist: "Junior Cavini"
  },
  {
    id: 8,
    image: "../public/tatuagens/airtonSennaWhipshading.mp4",
    category: "Whipshading",
    title: "Airton Senna em processo",
    artist: "Junior Cavini"
  },


];