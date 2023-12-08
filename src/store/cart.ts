// cart.ts
import { defineStore } from 'pinia'

export const useCart = defineStore({
  id: 'cart',
  state: () => ({
    items: [] as any[],
  }),
  actions: {
    addProduct(product: any) {
      this.items.push(product) 
    },
    removeProduct(index: number) {
      this.items.splice(index, 1) 
    },
  },
})
