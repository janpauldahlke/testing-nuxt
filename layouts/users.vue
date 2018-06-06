<template>
  <div>
    <header> USERS SECTION </header>
    <nuxt/>
  </div>
</template>
<script>
  //add this via layout: 'string' to the pages // check page/users/index
  export default({
    layout (context) {
    return 'users'
  }
  })
</script>