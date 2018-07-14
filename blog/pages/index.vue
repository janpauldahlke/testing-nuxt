<template>
  <div class="homepage">
    <section class="intro">
      <h1>get the latest tech news !!</h1>
    </section>

    <PostsList
      :posts="list"
    />
    
  </div>
</template>

<script>
import PostsList from '~/components/posts/PostsList'

export default({
  components: {
    PostsList
  },
  //this is a little bit akward because we do this again in posts/index
  //remove this to store async action later on
  async beforeCreate(){
    this.list = await this.$store.dispatch('getAllFilesFromServer')
    // one should think about to write this into store ti give the user the PWA feeling
    // also it would render way faster with localstorage?
  },
  data() {
    return {
      list: []
    }
  },
  computed: {
    showFirstPosts(){
      return this.list.slice(0,3) // slice defines here how many posts to show on start page
    }
  }
})
</script>

<style>
.homepage
{
  min-height: 100vh;
  background-color: rgb(211, 211, 211);

}


.intro {
  height: 250px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url('~/assets/background.jpg')
}

.intro h1 {
  text-align: center;
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}





</style>
