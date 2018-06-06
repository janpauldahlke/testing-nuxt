<template>
  <div>
    <h1>you are at {{$route.params}}</h1>
    <nuxt-link
      to='/products'
    >nach products</nuxt-link>
  </div>
</template>

<script>
export default({
  validate(data){
    // console.log(data)
    //  return data.params.id == 1 // route now only accepts params 1 and routes to products/1 all other will throw error
    return /^\d+$/.test(data.params.id)
  },
})
</script>