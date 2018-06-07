<template>
  <PostsList
    :posts="list"
  />
</template>

<script>
import PostsList from '~/components/posts/PostsList'
import axios from 'axios'

export default({
  components: {
    PostsList
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
          // console.log('axios', res.data)
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

