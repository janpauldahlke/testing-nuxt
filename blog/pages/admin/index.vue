<template>
  <div class="admin-page">
    <section class="new-post">
      <button
        @click="$router.push('/admin/new-post')"
      >add new post</button>
    </section>
    <section class="existing-posts">
      <h5></h5>
      <!-- this list also should be filled by store like this :posts="$store.state.posts"-->
      <PostsList
        :posts="list"
      />
    </section>
  </div>
</template>

<script>
import PostsList from '~/components/posts/PostsList'

export default {
  components: {
    PostsList
  },
  data(){
    return {
      list : [
        {
          id: "123",
          title: "foobar",
          postPreview: "is a mess",
          thumbnail: "https://i.imgur.com/8xDFw3W.jpg"
        }
      ]
    }
  }  
}
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h1 {
  text-align: center;
}
</style>

