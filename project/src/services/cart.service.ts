import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = new BehaviorSubject<CartItem[]>([]);
  public cartItems$ = this.cartItems.asObservable();

  private cartCount = new BehaviorSubject<number>(0);
  public cartCount$ = this.cartCount.asObservable();

  constructor() {
    this.loadCartFromStorage();
  }

  private loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const items = JSON.parse(savedCart);
      this.cartItems.next(items);
      this.updateCartCount();
    }
  }

  private saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems.value));
  }

  addToCart(product: Product, size: string, color: string, quantity: number = 1) {
    const currentItems = this.cartItems.value;
    const existingItemIndex = currentItems.findIndex(
      item => item.product.id === product.id && 
               item.selectedSize === size && 
               item.selectedColor === color
    );

    if (existingItemIndex > -1) {
      currentItems[existingItemIndex].quantity += quantity;
    } else {
      currentItems.push({
        product,
        quantity,
        selectedSize: size,
        selectedColor: color
      });
    }

    this.cartItems.next([...currentItems]);
    this.updateCartCount();
    this.saveCartToStorage();
  }

  removeFromCart(productId: number, size: string, color: string) {
    const currentItems = this.cartItems.value;
    const filteredItems = currentItems.filter(
      item => !(item.product.id === productId && 
                item.selectedSize === size && 
                item.selectedColor === color)
    );
    
    this.cartItems.next(filteredItems);
    this.updateCartCount();
    this.saveCartToStorage();
  }

  updateQuantity(productId: number, size: string, color: string, quantity: number) {
    const currentItems = this.cartItems.value;
    const itemIndex = currentItems.findIndex(
      item => item.product.id === productId && 
               item.selectedSize === size && 
               item.selectedColor === color
    );

    if (itemIndex > -1) {
      if (quantity <= 0) {
        this.removeFromCart(productId, size, color);
      } else {
        currentItems[itemIndex].quantity = quantity;
        this.cartItems.next([...currentItems]);
        this.updateCartCount();
        this.saveCartToStorage();
      }
    }
  }

  private updateCartCount() {
    const total = this.cartItems.value.reduce((sum, item) => sum + item.quantity, 0);
    this.cartCount.next(total);
  }

  getCartTotal(): number {
    return this.cartItems.value.reduce(
      (total, item) => total + (item.product.price * item.quantity), 0
    );
  }

  clearCart() {
    this.cartItems.next([]);
    this.cartCount.next(0);
    localStorage.removeItem('cart');
  }
}