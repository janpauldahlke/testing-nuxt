<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <form
        @submit.prevent="onSave"
      >
        <app-input-control v-model="editedPost.author">author name</app-input-control>
        <app-input-control v-model="editedPost.title">title</app-input-control>
        <app-input-control v-model="editedPost.thumbnail">link to thumb</app-input-control>
        <app-input-control
          control-type="textarea"
          v-model="editedPost.content"
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

export default {  
  components: {
    AppButton,
    AppInputControl,
  },
  data(){
    return {
      editedPost: {
        author: '',
        title: '',
        thumbnail: '',
        content: '',
      }
    }
  },
  methods: {
    onSave(){
      //
    },
    onCancel(){
      //
    }
  }
}
</script>


<style>
  .new-post-form{
    margin: 0px 20px;
  }
</style>
