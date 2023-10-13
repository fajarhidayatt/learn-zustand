import {create} from 'zustand';
import {TProduct} from '../types/product';

interface CartState {
  products: {
    product: TProduct;
    qty: number;
  }[];
  total: number;
  addQty: (id: string, product: TProduct) => void;
  minQty: (id: string) => void;
  delProduct: (id: string) => void;
}

export const useCartStore = create<CartState>()(set => ({
  products: [],
  total: 0,
  addQty: (id, product) =>
    set(state => {
      const getProductIndex = state.products.findIndex(
        p => p.product.id === id,
      );

      if (getProductIndex !== -1) {
        const updatedProducts = [...state.products];
        updatedProducts[getProductIndex].qty += 1;

        return {
          products: updatedProducts,
          total: state.total + 1,
        };
      }

      return {
        products: [...state.products, {product, qty: 1}],
        total: state.total + 1,
      };
    }),
  minQty: id =>
    set(state => {
      const getProductIndex = state.products.findIndex(
        p => p.product.id === id,
      );

      const updatedProducts = [...state.products];
      updatedProducts[getProductIndex].qty -= 1;

      return {
        products: updatedProducts,
        total: state.total - 1,
      };
    }),
  delProduct: id =>
    set(state => {
      const getProductIndex = state.products.findIndex(
        p => p.product.id === id,
      );

      const updatedProducts = [...state.products];
      updatedProducts.splice(getProductIndex, 1);

      return {
        products: updatedProducts,
        total: state.total - state.products[getProductIndex].qty,
      };
    }),
}));
