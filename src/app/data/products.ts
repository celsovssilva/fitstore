import { Product } from '../models/product.model';


export const PRODUCTS: Product[] = [
  
  {
    id: 1,
    name: 'Whey Protein Concentrado 900g',
    category: 'Suplementos',
    price: 129.9,
    topSeller: true,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Produto+1',
    description: 'Proteína de alta absorção para ganho de massa magra. Sabor chocolate.'
  },
  {
    id: 2,
    name: 'Creatina Monohidratada 300g',
    category: 'Suplementos',
    price: 79.9,
    oldPrice: 99.9,
    promo: true,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Produto+2',
    description: 'Aumenta força e performance nos treinos. 100% pura.'
  },
  {
    id: 3,
    name: 'Multivitamínico Diário',
    category: 'Vitaminas',
    price: 49.9,
    isNew: true,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Produto+3',
    description: 'Complexo com vitaminas e minerais para o dia a dia do atleta.'
  },
  {
    id: 4,
    name: 'Kit Iniciante (Whey + Coqueteleira)',
    category: 'Kits',
    price: 179.9,
    isNew: true,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Produto+4',
    description: 'Tudo que você precisa para começar a treinar com o pé direito.'
  },

 
  {
    id: 5,
    name: 'Legging Fitness Feminina',
    category: 'Roupas',
    price: 69.9,
    oldPrice: 89.9,
    promo: true,
    topSeller: true,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Produto+5',
    description: 'Tecido compressivo, alta elasticidade e conforto para treinar.'
  },
  {
    id: 6,
    name: 'Top Fitness Feminino',
    category: 'Roupas',
    price: 44.9,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Produto+6',
    description: 'Sustentação ideal para treinos de alta intensidade.'
  },
  {
    id: 7,
    name: 'Camiseta Dry Fit Masculina',
    category: 'Roupas',
    price: 69.9,
    isNew: true,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Produto+7',
    description: 'Tecido que absorve o suor e seca rápido durante o treino.'
  },
  {
    id: 8,
    name: 'Garrafa Squeeze 1L',
    category: 'Acessórios',
    price: 39.9,
    image: 'https://placehold.co/400x400/1a1a1a/39ff14?text=Produto+8',
    description: 'Garrafa térmica com marcação de horário para hidratação.'
  }
];