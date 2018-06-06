<template>
  <section class="container">
    <div>
      <nuxt-link to="/users" >to users</nuxt-link>
    </div>
    <br>
    <div>
      <input v-model="id"/>
      <div style="background: green" @click="routeToUser"> go to route </div>
    </div>
    <br>
    <div>
      <a href="/products">to products</a>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  data() {
    return {
      id: ''
    }
  },
  methods: {
    routeToUser() {
      this.$router.push(`/users/${this.id}`)
    },
  }
}
</script>

<style>
.container
{
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
