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
    specialties: ["BlackWork"]
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
    image: "../public/tatuagens/RealismoLeaoG.jpg",
    category: "Realismo",
    title: "Leão",
    artist: "Gambareli"
  },
  {
    id: 2,
    image: "../public/tatuagens/RealismoJesusG.jpg",
    category: "Realismo",
    title: "Jesus",
    artist: "Gambareli"
  },
  {
    id: 3,
    image: "../public/tatuagens/BlackWorkC.jpg",
    category: "BlackWork",
    title: "Poseidon",
    artist: "Carol Cavini"
  },
  {
    id: 4,
    image: "../public/tatuagens/BlackWorkC.jpg",
    category: "BlackWork",
    title: "Poseidon",
    artist: "Carol Cavini"
  },
  {
    id: 5,
    image: "../public/tatuagens/BlackWorkC.jpg",
    category: "BlackWork",
    title: "Poseidon",
    artist: "Carol Cavini"
  },
  {
    id: 6,
    image: "../public/tatuagens/BlackWorkC.jpg",
    category: "BlackWork",
    title: "Poseidon",
    artist: "Carol Cavini"
  },
  {
    id: 7,
    image: "../public/tatuagens/BlackWorkC.jpg",
    category: "BlackWork",
    title: "Poseidon",
    artist: "Carol Cavini"
  },
  {
    id: 8,
    image: "../public/tatuagens/BlackWorkDragonC.jpg",
    category: "BlackWork",
    title: "Dragão",
    artist: "Carol Cavini"
  },
  {
    id: 9,
    image: "../public/tatuagens/WhipshadingC.jpg",
    category: "Whipshading",
    title: "Caveira",
    artist: "Carol Cavini"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    category: "Tattoo",
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
  {
    id: 9,
    image: "../public/tatuagens/ArteAutoral.mp4",
    category: "Whipshading",
    title: "Autoral",
    artist: "Junior Cavini"
  },
  {
    id: 10,
    image: "../public/tatuagens/LoboWhips.jpg",
    category: "Whipshading",
    title: "Lobo",
    artist: "Junior Cavini"
  },
  {
    id: 11,
    image: "../public/tatuagens/WolwerineJ.mp4",
    category: "Comics",
    title: "Wolverine",
    artist: "Junior Cavini"
  },
  {
    id: 12,
    image: "../public/tatuagens/GogetaComics.jpg",
    category: "Comics",
    title: "Gogeta Dragon Ball",
    artist: "Junior Cavini"
  },


];