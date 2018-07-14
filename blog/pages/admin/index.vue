<template>
  <div class="admin-page">
    <div
      v-if="!$store.state.application.isLoggedIn"
    >
      <AdminLogin />
    </div>
    <section class="new-post" v-else>
      <button
        @click="$router.push('/admin/new-post')"
      >add new post</button>
    </section>
    <section class="existing-posts">
      <h5></h5>
      <!-- this list also should be filled by store like this :posts="$store.state.posts"-->
      <!-- the list should be a reusable component -->
      <div v-if="$store.state.application.isLoggedIn">
        <ul>
          <li v-for="post in list" :key="post.id">
            <div>{{ post.title }}</div>
            <div>{{ post.author }}</div>
            <div class="buttons">
              <button
                @click="deleteASinglePostById(post.id)"
              >delete post</button>
              <button
                @click="getSinglePostById(post.id)"
              >edit post</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import PostsList from '~/components/posts/PostsList'
import AdminLogin from '~/components/application/AdminLogin'

export default {
  components: {
    PostsList,
    AdminLogin,
  },
  beforeMount() {
    if(this.$store.getters.isLoggedIn){
      this.$store.commit('logIn', true)
    }
    this.getPostList()
  },
  data(){
    return {
      list : []
    }
  },
  methods: {
   async getPostList(){
     this.list = await this.$store.dispatch('getAllFilesFromServer')
   },
   getSinglePostById(id){
     //this.$store.commit('setPostIndex', id)
     this.$router.push(`/posts/${id}`)
   },
   deleteASinglePostById(id) {
     if(process.browser) {
       const result = window.confirm('delete post')
       return result ? this.$store.dispatch('deletePost', id) : void null
     }
   },
  },
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

ul li {
  border: 1px solid green;
  list-style: none;
  position: relative;
}

ul .buttons {
  position: absolute;
  top: 5px;
  right: 0px;
}
</style>

