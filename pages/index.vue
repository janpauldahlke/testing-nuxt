<template>
  <div>
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

export default {
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
