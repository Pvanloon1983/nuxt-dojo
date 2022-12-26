<template>
  <div class="card text-center">
    <img :src="product.image" alt="product thumb" class="thumb">
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}/${toSEOFriendlyString(product.title)}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup>
  const { product } = defineProps(['product'])

  function toSEOFriendlyString(str) {
    // convert to lowercase
    str = str.toLowerCase()

    // replace non-alphanumeric characters with hyphens
    str = str.replace(/[^a-z0-9]/g, '-')

    // remove leading and trailing hyphens
    str = str.trim('-')

    // remove consecutive hyphens
    str = str.replace(/-+/g, '-')

    // remove hyphens from the beginning of the string
    str = str.replace(/^-/, '')

    // remove hyphens from the end of the string
    str = str.replace(/-$/, '')

    return str
  }
</script>

<style scoped>
  .thumb {
    max-width: 120px;
    max-width: 70%;
    margin: 0 auto;
  }
</style>