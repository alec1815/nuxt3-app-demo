import { defineStore } from 'pinia'

export interface Product {
  id: number
  title: string
  price: number
}

interface ProductState {
  items: Record<string, Product>
  ids: number[]
}

export const useProductStore = defineStore({
  id: 'products',

  state: (): ProductState => ({
    items: {},
    ids: [],
  }),

  getters: {
    list(): Product[] {
      return this.ids.map((i: number) => this.items[i])
    },
  },

  actions: {
    async fetchAll() {
      const res = await $fetch('/api/product/list')
      const data = res.data
      this.ids = data.map((product) => {
        this.items[product.id] = product
        return product.id
      })
    },
  },
})
