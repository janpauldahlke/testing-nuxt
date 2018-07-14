<template>
  <div class="admin-edit-post-page">
    
     <section class="new-post-form">
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
    

    
  </div>
</template>

<script>
import AppInputControl from '~/components/ui/AppControlInput'
import AppButton from '~/components/ui/AppButton'

export default {
  components: {
    AppInputControl,
    AppButton,
  },
  data() {
    return {
      post: {},
    }
  },
  methods: {
    onEdit() {
      this.$store.dispatch('editPost', this.post, this.$store.state.application.postIndex)
    }
  },
  async beforeMount() {
    if(this.$store.state.application.postIndex !== null /* weird typing here */) {
      try {
      const id = this.$store.state.application.postIndex
      const getPost = await this.$store.dispatch('getSinglePostFromServer', id)
      return this.post = {...getPost}
    } catch(err) {
      console.log(err)
      }  
    }
  },
}
</script>

<style>
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
</style>

