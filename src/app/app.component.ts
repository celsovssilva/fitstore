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
  readonly storeName = 'FitStore';
  readonly whatsappNumber = '5582999999999'; // código do país + DDD + número, só dígitos

  // ===== DADOS =====
  products: Product[] = PRODUCTS;

  categories: string[] = [...new Set(this.products.map(p => p.category))];

  get navItems(): { label: string; filter: string }[] {
    const filtrosGerais = [
      { label: 'Mais vendidos', filter: 'TOP20' },
      { label: 'Lançamentos', filter: 'LANCAMENTOS' },
      { label: 'Ofertas', filter: 'OFERTAS' }
    ];
    const itensDeCategoria = this.categories.map(cat => ({ label: cat, filter: cat }));
    return [...filtrosGerais, ...itensDeCategoria];
  }

  activeFilter: string | null = null;
  showCategoriesMenu = false;

  showPromotions(): void {
    this.activeFilter = null;
    this.showCategoriesMenu = false;
  }

  get activeFilterLabel(): string {
    const item = this.navItems.find(i => i.filter === this.activeFilter);
    return item ? item.label : '';
  }

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

  get promoProducts(): Product[] {
    return this.products.filter(p => p.promo);
  }

  // ===== TAMANHOS =====
  // Guarda o tamanho escolhido de cada produto: chave = id do produto, valor = tamanho.
  selectedSizes = new Map<number, string>();

  hasSizes(product: Product): boolean {
    return !!product.sizes && product.sizes.length > 0;
  }

  getSelectedSize(product: Product): string | undefined {
    return this.selectedSizes.get(product.id);
  }

  selectSize(product: Product, size: string): void {
    this.selectedSizes.set(product.id, size);
  }

  // ===== CARRINHO: SELEÇÃO DE MÚLTIPLOS PRODUTOS =====
  cart: Set<number> = new Set();

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

  // Adiciona/remove o produto do carrinho. Se o produto tem tamanhos
  // e nenhum foi escolhido ainda, pede pra escolher antes de prosseguir.
  toggleCart(product: Product): void {
    if (this.cart.has(product.id)) {
      this.cart.delete(product.id);
      return;
    }

    if (this.hasSizes(product) && !this.getSelectedSize(product)) {
      alert('Escolha um tamanho antes de selecionar este produto.');
      return;
    }

    this.cart.add(product.id);
  }

  // Gera o link do WhatsApp com a mensagem pronta e abre em nova aba.
  // Se "product" for passado, manda só aquele item (botão "Comprar agora").
  // Se não, manda todos os itens marcados no carrinho (botão "Finalizar pedido").
  buyOnWhatsapp(product?: Product): void {
    if (product && this.hasSizes(product) && !this.getSelectedSize(product)) {
      alert('Escolha um tamanho antes de comprar este produto.');
      return;
    }

    const items = product ? [product] : this.cartItems;

    if (items.length === 0) {
      alert('Selecione ao menos um produto antes de finalizar o pedido.');
      return;
    }

    let message = `Olá! Vim pelo site *${this.storeName}* e quero fazer um pedido:%0A%0A`;

    let total = 0;
    items.forEach(item => {
      const size = this.getSelectedSize(item);
      const sizeText = size ? ` (Tamanho: ${size})` : '';
      message += `• ${item.name}${sizeText} - R$ ${item.price.toFixed(2)}%0A`;
      total += item.price;
    });

    message += `%0A*Total: R$ ${total.toFixed(2)}*%0A%0APode me passar o prazo e a forma de pagamento?`;

    const url = `https://wa.me/${this.whatsappNumber}?text=${message}`;
    window.open(url, '_blank');
  }
}