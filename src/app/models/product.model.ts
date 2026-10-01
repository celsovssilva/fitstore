export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  oldPrice?: number;
  promo?: boolean;
  topSeller?: boolean;
  isNew?: boolean;
  sizes?: string[];   
  image: string;
  description: string;
}