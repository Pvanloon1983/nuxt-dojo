<template>
  <div>
    <Head>
      <Title>Nuxt Dojo | {{ product.title }}</Title>
      <Meta name="description" :content="product.description" />
    </Head>

    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
  const route = useRoute()
  const { slug } = route.params // correct destructuring syntax
  // console.log(slug[0])
  const uri = 'https://fakestoreapi.com/products/' + slug[0]

  // fetch the product inside the setup() function
  const { data: product } = await useFetch(uri)

  if (!product.value) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found', fatal: true })
  }

  definePageMeta({
    layout: 'products'
  })
</script>

<style scoped>

</style>
