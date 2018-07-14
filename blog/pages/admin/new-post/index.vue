<!-- 
  new post also contains edit post now is this correct?
  lets make it a standalone page
-->
<template>
  <div class="admin-new-post-page">
    <div
      class="success"
      v-if="showSuccess"
    >Dein Blog Post wurde erstellt
      <span class="close-button" @click="closeSuccess">X</span>
    </div>
    <section class="new-post-form">
      <form
        @submit.prevent="onSave"
      >
        <app-input-control v-model="newPost.author">author name</app-input-control>
        <app-input-control v-model="newPost.title">title</app-input-control>
        <app-input-control v-model="newPost.postPreview"> preview subhead</app-input-control>
        <app-input-control v-model="newPost.thumbnail">link to thumb</app-input-control>
        <app-input-control
          control-type="textarea"
          v-model="newPost.content"
        >Content</app-input-control>
        <app-button
          type="submit"
        >Save</app-button>
        <app-button
          type="button"
          btn-style="cancel"
          @click="onCancel"
        >Cancel</app-button>
      </form>
    </section>
  </div>
</template>

<script>
import AppButton from '~/components/ui/AppButton'
import AppInputControl from '~/components/ui/AppControlInput'
//  import { mapFields } from 'vuex-map-fields';

export default {
  components: {
    AppButton,
    AppInputControl,
  },
  data() {
    return{
      showSuccess: false,
      newPost: {
        thumbnail: '',
        author: '',
        title:'',
        content: '',
        postPreview: '',
      },
    }
  },
  methods: {
    async onSave(){
      const success = await this.$store.dispatch('createNewPost', this.newPost) // how to pass result success to here?
      if (success) {
        this.$store.commit('set_empty_store')
        this.showSuccess= true
        this.$router.push('/admin')
        this.$store.commit('toggleModal', {
          title: 'Success',
          message: 'You created a post',
        })
      }
      else {
        console.log('an OnSaveError')
      }
    },
    onCancel(){
      this.$store.commit('set_empty_store')
    },
    closeSuccess() {
      this.showSuccess = false
    },
  },
  // computed: {
  //   ...mapFields([
  //     'editedPost.thumbnail',
  //     'editedPost.author',
  //     'editedPost.title',
  //     'editedPost.content',
  //     'editedPost.postPreview',
  //   ]),
  // },
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
