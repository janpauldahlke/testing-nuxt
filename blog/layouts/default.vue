<template>
  <div class="container">

    <Overlay 
      v-if="$store.state.application.showLightBox"
      title="A TEST"
      message="A MESSAGE"
    />
    <div class="content-wrapper">
      <TheHeader 
        @sidenavToggle="displaySideNav = !displaySideNav"
      />
      <TheSidenav
        :show="displaySideNav"
        @close="displaySideNav = false"
      />
      <nuxt/>
    </div>


  </div>
</template>

<script>
import TheHeader from '~/components/navigation/TheHeader'
import TheSidenav from '~/components/navigation/TheSidenav'
import Overlay from '~/components/ui/Overlay'

export default {
  components: {
    TheHeader,
    TheSidenav,
    Overlay
  },
  data(){
    return{
      displaySideNav: false
    }
  },
}
</script>


<style scoped>
.container{
  position:initial
}
.container-wrapper{
  position: absolute;
  top:0;
  left:0;
}
</style>
