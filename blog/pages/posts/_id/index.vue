<template>
  <div class="post-page">
    <section class="post">
      <section v-if="!$store.state.application.isLoggedIn">
        <div class="post-content">
          <p>by {{post.author}}</p>
          <h3>{{post.title}}</h3>
          <p>about {{post.postPreview}}</p>
          <p>{{ post.content}} </p>
          <p></p>
        </div>
      </section>
      
      <!-- 
        not this geilo, but better 
        there should be HOCs in vue
      -->

      <section
        class="new-post-form"
        v-else
        >
      <form
        @submit.prevent="onEdit"
      >
        <app-input-control 
          :editable="false"
          v-model="post.author">author name</app-input-control>
        <app-input-control v-model="post.title">title</app-input-control>
        <app-input-control v-model="post.postPreview"> preview subhead</app-input-control>
        <app-input-control v-model="post.thumbnail">link to thumb</app-input-control>
        <app-input-control
          control-type="textarea"
          v-model="post.content"
        >Content</app-input-control>
        <app-button
          type="submit"
        >Edit</app-button>
        <app-button
          type="button"
          btn-style="cancel"
        >Cancel</app-button>
      </form>
    </section>

    </section>
  </div>
</template>


<script>
import AppInputControl from '~/components/ui/AppControlInput'
import AppButton from '~/components/ui/AppButton'


export default {
  components: {
    AppInputControl,
    AppButton
  },
  data() {
    return {
      post : {},
    }
  },
  async beforeMount(){
    this.post = await this.$store.dispatch('getSinglePostFromServer', window.location.pathname.split('/').splice(-1)[0])
  },
  methods: {
    onEdit() {
      this.$store.dispatch('editPost', this.post, this.$store.state.application.postIndex)
      // there should be a loding spinner and a success event here
      this.$store.commit('toggleModal', {
        title: `Success`,
        message: `Yout edited the title of post ${this.post.id}`
      })
      this.$router.push('/admin')
    },
  }
}
</script>


<style scoped>
.new-post-form{
    margin: 0px 20px;
  }
.success{
    width: 100%;
    height: 30px;
    text-align: center;
    font-size: 24px;
    background: lightgreen;
  }
.close-button{
    background: lightblue;
    height: 30px;
  }

.post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>