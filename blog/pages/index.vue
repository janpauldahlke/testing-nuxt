<template>
  <div class="homepage">
    <section class="intro">
      <h1>get the latest tech news !!</h1>
    </section>

    <PostsList />
    
  </div>
</template>

<script>
import PostsList from '~/components/posts/PostsList'

export default({
  components: {
    PostsList
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
