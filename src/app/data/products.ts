import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Whey Protein Concentrado 900g',
    category: 'Whey Protein',
    price: 129.9,
    topSeller: true,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Whey+Protein',
    description: 'Proteína de alta absorção para ganho de massa magra. Sabor chocolate.'
  },
  {
    id: 2,
    name: 'Creatina Monohidratada 300g',
    category: 'Creatina',
    price: 79.9,
    topSeller: true,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Creatina',
    description: 'Aumenta força e performance nos treinos. 100% pura.'
  },
  {
    id: 3,
    name: 'Multivitamínico Diário',
    category: 'Vitaminas',
    price: 49.9,
    isNew: true,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Vitaminas',
    description: 'Complexo com vitaminas e minerais para o dia a dia do atleta.'
  },
  {
    id: 4,
    name: 'Pré-treino Explosivo 300g',
    category: 'Pré-treino',
    price: 99.9,
    isNew: true,
    topSeller: true,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Pre-treino',
    description: 'Energia e foco para treinos de alta intensidade.'
  },
  {
    id: 5,
    name: 'Barra de Proteína Chocolate (cx 12un)',
    category: 'Snacks',
    price: 89.9,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Snacks',
    description: 'Lanche prático rico em proteína, baixo em açúcar.'
  },
  {
    id: 6,
    name: 'Legging Fitness Feminina',
    category: 'Roupas',
    price: 69.9,
    oldPrice: 89.9,
    promo: true,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Legging',
    description: 'Tecido compressivo, alta elasticidade e conforto para treinar.'
  },
  {
    id: 7,
    name: 'Top Fitness Feminino',
    category: 'Roupas',
    price: 44.9,
    oldPrice: 59.9,
    promo: true,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Top+Fitness',
    description: 'Sustentação ideal para treinos de alta intensidade.'
  },
  {
    id: 8,
    name: 'Camiseta Dry Fit Masculina',
    category: 'Roupas',
    price: 69.9,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Dry+Fit',
    description: 'Tecido que absorve o suor e seca rápido durante o treino.'
  },
  {
    id: 9,
    name: 'Garrafa Squeeze 1L',
    category: 'Acessorios',
    price: 39.9,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Squeeze',
    description: 'Garrafa térmica com marcação de horário para hidratação.'
  },
  {
    id: 10,
    name: 'Luvas de Treino',
    category: 'Acessorios',
    price: 49.9,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Luvas',
    description: 'Proteção e firmeza para exercícios com peso.'
  },
  {
    id: 11,
    name: 'Faixa Elástica Kit (3un)',
    category: 'Kits',
    price: 29.9,
    oldPrice: 44.9,
    promo: true,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Faixas',
    description: 'Kit com 3 níveis de resistência para treino funcional.'
  },
  {
    id: 12,
    name: 'Kit Iniciante (Whey + Creatina + Coqueteleira)',
    category: 'Kits',
    price: 179.9,
    isNew: true,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Kit+Iniciante',
    description: 'Tudo que você precisa para começar a treinar com o pé direito.'
  }
];