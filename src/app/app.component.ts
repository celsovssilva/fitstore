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
  
  readonly storeName = 'FitStore';
  readonly whatsappNumber = '5582993663318';

  
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