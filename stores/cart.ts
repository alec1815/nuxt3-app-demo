/*
 * @Author: your name
 * @Date: 2021-12-22 17:44:30
 * @LastEditTime: 2021-12-22 18:21:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \nuxt3-app-demo\stores\cart.ts
 */
import { defineStore } from 'pinia'
import { useProductStore } from './products'
// import { useProductStore } from './products'

export interface Purchase {
  productId: number
  quantity: number
}

interface CartState {
  contents: Record<string, Purchase>
}

export interface CartPreview {
  id: number
  title: string
  quantity: number
  cost: number
}

export const useCartStore = defineStore({
  id: 'cart',

  state: (): CartState => ({
    contents: {},
  }),
  getters: {
    formattedCart(): CartPreview[] {
      return []
    },
  },

  // getters: {
  //   count(): number {
  //     return Object.keys(this.contents).reduce((acc, id) => {
  //       return acc + this.contents[id].quantity
  //     }, 0)
  //   },

  //   total(): number {
  //     const products = useProductStore()
  //     return Object.keys(this.contents).reduce((acc, id) => {
  //       return acc + products.items[id].price * this.contents[id].quantity
  //     }, 0)
  //   },

  //   formattedCart(): CartPreview[] {
  //     const products = useProductStore()

  //     if (!products.loaded) return []

  //     return Object.keys(this.contents).map((productId) => {
  //       const purchase = this.contents[productId]

  //       return {
  //         id: purchase.productId,
  //         image: products.items[purchase.productId].image,
  //         title: products.items[purchase.productId].title,
  //         quantity: purchase.quantity,
  //         cost: purchase.quantity * products.items[purchase.productId].price,
  //       }
  //     })
  //   },
  // },

  // actions: {
  //   add(productId: number) {
  //     this.contents[productId] = {
  //       productId,
  //       quantity: 1,
  //     }
  //   },
  //   remove(productId: number) {
  //     // eslint-disable-next-line curly
  //     if (!this.contents[productId]) {
  //       return
  //     }

  //     this.contents[productId].quantity -= 1

  //     // eslint-disable-next-line curly
  //     if (this.contents[productId].quantity === 0) {
  //       delete this.contents[productId]
  //     }
  //   },
  // },
})
