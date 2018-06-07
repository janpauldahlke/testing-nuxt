<template>
<section
  class="featured-posts">
      <!-- this needs to be a dynamic component -->
      <!-- do a v-for here -->
      <!-- -->
      <PostPreview
        v-for="(post, index) in list"
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
import axios from 'axios'

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
  },
  created(){
    this.getPosts()
  },
  methods: {
    getPosts(){
      const url = "http://localhost:4000/posts"

      axios.get(url)
        .then((res) => {
          // console.log(res.data)
          this.list = res.data
        })
        .catch((err) => {
          console.log(err)
        })
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


