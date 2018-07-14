<template>
    <div class="lightbox">
      <div
        class="close"
        @click="closeModal"
        >
        <span>X close</span>  
      </div>>
      <div class="inner">

        <h1>{{ $store.state.application.lightBox.title }}</h1>
        <p>{{ $store.state.application.lightBox.message }}</p>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'LIGHTBOX'
    },
    message: {
      type: String,
      default: 'SHOW MESSAGES HERE'
    },
  },
  methods: {
    closeModal(){
      this.$store.commit('toggleModal')
    }
  },
}
</script>

<style>
  .lightbox {
    position: relative;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: .2;
  }
  .inner{
    color: white;
    text-align: center;
    font-size: /*f*** big */ 8vh;
  }
  .close {
    padding-right: 10px;
    float: right;
    font-size: 10vh;
    color: red;
    cursor: pointer;
  }

</style>


