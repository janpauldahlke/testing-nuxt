<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <form
        @submit.prevent="onSave"
      >
        <app-input-control v-model="author">author name</app-input-control>
        <app-input-control v-model="title">title</app-input-control>
        <app-input-control v-model="postPreview"> preview subhead</app-input-control>
        <app-input-control v-model="thumbnail">link to thumb</app-input-control>
        <app-input-control
          control-type="textarea"
          v-model="content"
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
import { mapFields } from 'vuex-map-fields';

export default {  
  components: {
    AppButton,
    AppInputControl,
  },
  methods: {
    async onSave(){
      const wait = this.$store.dispatch('postNewPost')

      if(wait){
        this.$store.commit('set_emptyStore')
      }
      
    },
    onCancel(){
      //
    }
  },
  computed: {
    
    ...mapFields([
      'editedPost.thumbnail',
      'editedPost.author',
      'editedPost.title',
      'editedPost.content',
      'editedPost.postPreview',
    ]),
  },
}
</script>


<style>
  .new-post-form{
    margin: 0px 20px;
  }
</style>
