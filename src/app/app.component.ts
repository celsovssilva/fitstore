import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './models/product.model';
import { PRODUCTS } from './data/products';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // ===== CONFIGURAÇÕES DA LOJA =====
  // Troque pelo número de WhatsApp do fornecedor (código do país + DDD + número, só dígitos)
  readonly whatsappNumber = '5582999999999';
  readonly storeName = 'FitStore';

  // ===== DADOS =====
  products: Product[] = PRODUCTS;

  // Categorias reais, extraídas automaticamente dos produtos (usadas no dropdown "Categorias")
  categories: string[] = [...new Set(this.products.map(p => p.category))];

  // Itens do menu horizontal (igual ao print de referência).
  // "filter" é o valor usado para filtrar: pode ser o nome de uma categoria,
  // ou uma das palavras-chave especiais: 'Todos' | 'TOP20' | 'LANCAMENTOS' | 'OFERTAS'
  navItems: { label: string; filter: string }[] = [
    { label: 'Top 20', filter: 'TOP20' },
    { label: 'Lançamentos', filter: 'LANCAMENTOS' },
    { label: 'Whey Protein', filter: 'Whey Protein' },
    { label: 'Creatina', filter: 'Creatina' },
    { label: 'Vitaminas', filter: 'Vitaminas' },
    { label: 'Pré-treino', filter: 'Pré-treino' },
    { label: 'Objetivos', filter: 'Todos' },
    { label: 'Snacks', filter: 'Snacks' },
    { label: 'Roupas', filter: 'Roupas' },
    { label: 'Acessórios', filter: 'Acessorios' },
    { label: 'Kits', filter: 'Kits' },
    { label: 'Ofertas', filter: 'OFERTAS' }
  ];

    activeFilter: string | null = null;
  showCategoriesMenu = false;

  // carrinho: guarda os IDs dos produtos selecionados
  cart: Set<number> = new Set();

  toggleCategoriesMenu(): void {
    this.showCategoriesMenu = !this.showCategoriesMenu;
  }
  applyFilter(filter: string): void {
    this.activeFilter = filter;
    this.showCategoriesMenu = false;
  }

  get filteredProducts(): Product[] {
    switch (this.activeFilter) {
      case null:
        return [];
      case 'Todos':
        return this.products;
      case 'TOP20':
        return this.products.filter(p => p.topSeller);
      case 'LANCAMENTOS':
        return this.products.filter(p => p.isNew);
      case 'OFERTAS':
        return this.products.filter(p => p.promo);
      default:
        return this.products.filter(p => p.category === this.activeFilter);
    }
  }

  // Produtos marcados como "promo: true" no products.ts (sempre exibidos em destaque)
  get promoProducts(): Product[] {
    return this.products.filter(p => p.promo);
  }

  // Antes de clicar em algum item da barra de categorias, a lista fica vazia.
  // Quando o filtro é "Todos", tira as promoções pra não repetir com a coluna de promoções.
  get restProducts(): Product[] {
    if (this.activeFilter === null) {
      return [];
    }
    if (this.activeFilter === 'Todos') {
      return this.filteredProducts.filter(p => !p.promo);
    }
    return this.filteredProducts;
  }
  get cartItems(): Product[] {
    return this.products.filter(p => this.cart.has(p.id));
  }

  get cartTotal(): number {
    return this.cartItems.reduce((sum, p) => sum + p.price, 0);
  }

  get cartCount(): number {
    return this.cart.size;
  }

  isInCart(product: Product): boolean {
    return this.cart.has(product.id);
  }

  toggleCart(product: Product): void {
    if (this.cart.has(product.id)) {
      this.cart.delete(product.id);
    } else {
      this.cart.add(product.id);
    }
  }

  // Gera o link do WhatsApp com a mensagem pronta e abre em nova aba
  buyOnWhatsapp(product?: Product): void {
    const items = product ? [product] : this.cartItems;

    if (items.length === 0) {
      alert('Selecione ao menos um produto antes de finalizar o pedido.');
      return;
    }

    let message = `Olá! Vim pelo site *${this.storeName}* e quero fazer um pedido:%0A%0A`;

    let total = 0;
    items.forEach(item => {
      message += `• ${item.name} - R$ ${item.price.toFixed(2)}%0A`;
      total += item.price;
    });

    message += `%0A*Total: R$ ${total.toFixed(2)}*%0A%0APode me passar o prazo e a forma de pagamento?`;

    const url = `https://wa.me/${this.whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
  }
}