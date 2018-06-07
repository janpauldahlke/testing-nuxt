<template>
  <div class="homepage">
    <section class="intro">
      <h1>get the latest tech news !!</h1>
    </section>
    <br>
    <hr>
    <section class="featured-posts">
      <!-- this needs to be a dynamic component -->
      <!-- do a v-for here -->
      <!-- -->

       <PostPreview
        id="1"
        title="SCIENCE"
        previewText="there is always starcraft"
        thumbnail="https://i.imgur.com/OqvByFR.png"
       />

       <PostPreview
        id="2"
        title="GLHF"
        previewText="illidan is superman!"
        thumbnail="https://i.imgur.com/mljKj5M.jpg"
       />

       <PostPreview
        id="3"
        title="once day soylent"
        previewText="gluten free"
        thumbnail="https://i.imgur.com/NzyvDqx.jpg"
       />
       
    </section>
  </div>
</template>

<script>
import PostPreview from '~/components/posts/PostPreview'

export default({
  components: {
    PostPreview
  }
})

</script>

<style>
.homepage
{
  min-height: 100vh;
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

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}




</style>
