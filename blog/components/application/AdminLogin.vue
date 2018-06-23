<template>
  <div class="admin">
    <h5>Admin Login</h5>
    <form
      @submit.prevent="checkLogin"
    >
      <label for="name">Name</label>
      <input
        v-model="name"
        id="name" />
      <label for="pass">Password</label>
      <input
        id="pass"
        v-model="pass"
        />
      <button>send</button>
    </form>
  </div>  
</template>

<script>
export default {
  name: 'AdminLogin',
  //not the safest way to implement a password
  data() {
    return {
      name: '',
      pass: '',
    }
  },
  
  methods: {
    checkLogin(){
      if (this.name==='alf' && this.pass==='42') {
        this.$store.commit('logIn', true)
      }
    }
  }
}
</script>

<style scoped>
  .admin {
    background: greenyellow
  }
</style>


