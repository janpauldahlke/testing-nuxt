<template>
  <div>
    <!--header> USERS SECTION </header-->
    <Header />
    <nuxt/>
  </div>
</template>
<script>

import Header from '~/components/header'
  //add this via layout: 'string' to the pages // check page/users/index
  export default({
    layout (context) {
    return 'users'
  },
  components: {
    Header
  }
  })
</script>