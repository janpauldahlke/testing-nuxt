<template>
  <div>
    <Header />
    <nuxt-link
      to='/products/1'
    >nach products 1</nuxt-link>
    <nuxt-link
      to='/products/2'
    >nach products 2</nuxt-link>
  </div>
</template>

<script>
import Header from '~/components/header'
export default({
  components: {
    Header
  }
})
</script>