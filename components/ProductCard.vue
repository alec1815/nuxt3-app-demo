<script setup lang="ts">
import type { PropType } from '@vue/runtime-core'
import { Product } from '../stores/products'

const props = defineProps({
  product: {
    type: Object as PropType<Product>,
  },
})
</script>
<template>
  <nuxt-link :to="`/detail/${product.id}`">
    <div>{{ product.title }} 价格：{{ product.price }}</div>
  </nuxt-link>
</template>

