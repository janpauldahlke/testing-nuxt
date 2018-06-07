<template>
<section
  class="featured-posts">
      <!-- this needs to be a dynamic component -->
      <!-- do a v-for here -->
      <!-- -->
      <PostPreview
        v-for="(post, index) in posts"
        :key="index.toString()"
        :id="post.id.toString()"
        :title="post.title"
        :previewText="post.postPreview"
        :thumbnail="post.thumbnail"
       />
      
    </section>
</template>

<script>
import PostPreview from '~/components/posts/PostPreview'

export default({
  name: 'Postslist',
  components: {
    PostPreview
  },
  props: {
    posts: {
      type: [Array, Object],
      required: false,
    }
  },
  data(){
    return{
      list: [],
    }
  }
})

</script>

<style scoped>
.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>


