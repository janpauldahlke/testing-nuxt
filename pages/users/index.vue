<template>
<div>
  <h1> user route </h1>
  <button
    @click.prevent="routeBack"
  >go back</button>
</div>
</template>

<script>
export default({
  created(){
    // console.log(this.$router.history)
  },
  methods: {
    routeBack() {
      this.$router.push('/')
    }
  },
  layout: 'header'
})
</script>
