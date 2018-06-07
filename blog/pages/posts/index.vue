<template>
  <PostsList />
</template>

<script>
import PostsList from '~/components/posts/PostsList'

export default({
  components: {
    PostsList
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

