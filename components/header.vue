<template>
  <div class="header">
    <ul>
      <nuxt-link to="/users">Users</nuxt-link>
      <nuxt-link to="/products">Products</nuxt-link>
      <nuxt-link to="/">Back</nuxt-link>
    </ul>
  </div>
</template>

<style scoped>
.header{
  min-height: 80px;
  background: yellow;
}

.header ul a {
  /*nuxtlink is a*/
  margin-left: 10px; 
}
</style>