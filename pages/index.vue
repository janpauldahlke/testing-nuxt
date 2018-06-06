<template>
  <div>
    <Header/>
    <section class="container">
      <br>
      <div>
        <input v-model="id"/>
        <div style="background: green" @click="routeToUser"> go to route </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from '~/components/header'

export default {
  components: {
    Header
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
