<template>
  <div>
    <h2>About</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil amet ducimus voluptates blanditiis mollitia perferendis deserunt omnis sint molestiae dolorum.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, vitae. Ipsum ab consectetur sapiente, mollitia ullam assumenda totam ducimus dignissimos!</p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
  // const { data } = await useFetch('/api/ninja?name=mario', {
  //   method: 'post',
  //   body: {
  //     age: 30
  //   }
  // })

  const { data } = await useFetch('/api/currency/GBP')
</script>

<style scoped>
  h2 {
    margin-bottom: 20px;
    font-size: 36px;
  }

  p {
    margin: 20px 0;
  }
</style>