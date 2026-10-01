import { Product } from '../models/product.model';


export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Legging Fitness Feminina',
    category: 'Calças',
    price: 69.9,
    oldPrice: 89.9,
    promo: true,
    topSeller: true,
    sizes: ['P', 'M', 'G', 'GG'],
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Legging',
    description: 'Tecido compressivo, alta elasticidade e conforto para o dia a dia.'
  },
  {
    id: 2,
    name: 'Calça Moletom Jogger',
    category: 'Calças',
    price: 99.9,
    isNew: true,
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Moletom',
    description: 'Calça de moletom confortável, ótima para treino ou uso casual.'
  },
  {
    id: 3,
    name: 'Blusa Cropped Feminina',
    category: 'Blusas',
    price: 54.9,
    oldPrice: 69.9,
    promo: true,
    sizes: ['P', 'M', 'G'],
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Cropped',
    description: 'Sustentação ideal para treinos de alta intensidade.'
  },
  {
    id: 4,
    name: 'Camiseta Dry Fit Masculina',
    category: 'Blusas',
    price: 69.9,
    isNew: true,
    topSeller: true,
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Dry+Fit',
    description: 'Tecido que absorve o suor e seca rápido durante o treino.'
  },
  {
    id: 5,
    name: 'Sutiã Esportivo',
    category: 'Roupas Íntimas',
    price: 44.9,
    sizes: ['P', 'M', 'G'],
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Sutia',
    description: 'Boa sustentação e conforto para atividades de impacto médio.'
  },
  {
    id: 6,
    name: 'Cueca Boxer Esportiva (kit 3un)',
    category: 'Roupas Íntimas',
    price: 59.9,
    isNew: true,
    sizes: ['P', 'M', 'G', 'GG'],
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Boxer',
    description: 'Kit com 3 unidades, tecido respirável e secagem rápida.'
  },
  {
    id: 7,
    name: 'Jaqueta Corta-Vento',
    category: 'Casacos',
    price: 149.9,
    oldPrice: 189.9,
    promo: true,
    sizes: ['P', 'M', 'G', 'GG'],
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Jaqueta',
    description: 'Proteção contra vento e chuva fraca, ideal pra corrida ao ar livre.'
  },
  {
    id: 8,
    name: 'Boné Aba Curva',
    category: 'Acessórios',
    price: 39.9,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Bone',
    description: 'Boné com ajuste regulável, protege do sol durante o treino.'
  }
];