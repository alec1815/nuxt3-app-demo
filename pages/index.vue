

<script setup lang="ts">
import { useProductStore } from '~~/stores/products'
const productStore = useProductStore()

productStore.fetchAll()
const products = computed(() => productStore.list)
</script>
<template>
  <div class="shop">
    <h1>index</h1>
    {{ products }}
    <div v-if="products.length > 0">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>



