<template>
  <div>
    <TheHeader 
      @sidenavToggle="displaySideNav = !displaySideNav"
    />
    <TheSidenav
      :show="displaySideNav"
      @close="displaySideNav = false"
    />
    <nuxt/>
  </div>
</template>

<script>
import TheHeader from '~/components/navigation/TheHeader'
import TheSidenav from '~/components/navigation/TheSidenav'

export default {
  components: {
    TheHeader,
    TheSidenav
  },
  data(){
    return{
      displaySideNav: false
    }
  },
}
</script>


<style>
</style>
