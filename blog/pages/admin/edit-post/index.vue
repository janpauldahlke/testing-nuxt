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
          :clickable="isUpdatedPost"
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

// because missing a nice store, we need to refetch on update
// unkewl && slow // abuse vuex to store all posts there
// re-iterate thinking


export default {
  components: {
    AppInputControl,
    AppButton,
  },
  data() {
    return {
      post: {},

      // this sucks
      // find out, react equivalent to ComponentWillRecieveewProps
      // this sucks, we will burn in endles while for this!!
      // and it is not working,
      // not only it is bad, it is also not working
      isFirstDataChange: false,
      isUpdatedPost: false,
    }
  },
  methods: {
    onEdit() {
      this.$store.dispatch('editPost', this.post, this.$store.state.application.postIndex)
      // there should be a loding spinner and a success event here
      this.$router.push('/admin')
    },
  },
  async beforeMount() {
    if(this.$store.state.application.postIndex !== null /* weird typing here */) {
      try {
      const id = this.$store.state.application.postIndex
      const getPost = await this.$store.dispatch('getSinglePostFromServer', id)
      this.post = {...getPost}
      // total MURKS aber looft, What would jesus do?
      this.isFirstDataChange = true
      return void 0 // this is mean
    } catch(err) {
      console.log(err)
      }  
    }
  },
  updated(){
    console.log('updated triggers', this.isUpdatedPost)
    if(this.isFirstDataChange){ // monade weil ja alle attribute durch change ei updat werfen, somit erreicht man nix!! frust!
    // wo is mein react componentWillReciveProps(oldProps, newProps) !!! wie macht man das bei VUEJS
      this.isUpdatedPost = true
    }
  }
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

